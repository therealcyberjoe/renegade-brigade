
// ============================================================
// WEAPON PROFILE LOOKUP
// ============================================================
function lookupWeapon(name) {
  if (typeof WEAPON_PROFILES === "undefined") return null;
  // 1. Exact match
  if (WEAPON_PROFILES[name]) return WEAPON_PROFILES[name];
  // 2. Case-insensitive exact match
  const lower = name.toLowerCase();
  for (const key of Object.keys(WEAPON_PROFILES)) {
    if (key.toLowerCase() === lower) return WEAPON_PROFILES[key];
  }
  // 3. Strip trailing parenthetical notes e.g. "Boltgun (x2)" -> "Boltgun"
  const stripped = name.replace(/\s*\(.*?\)\s*$/, '').trim();
  if (stripped !== name && WEAPON_PROFILES[stripped]) return WEAPON_PROFILES[stripped];
  // 4. No fuzzy/partial match - unknown weapons render as plain text tags
  return null;
}

function weaponProfileHtml(weaponName) {
  const p = lookupWeapon(weaponName);
  if (!p) return `<span class="weapon-no-profile">${weaponName}</span>`;
  return `<div class="weapon-profile-row">
    <span class="wp-name">${weaponName}</span>
    <span class="wp-range">${p.range}</span>
    <span class="wp-type">${p.type}</span>
    <span class="wp-s">S${p.s}</span>
    <span class="wp-ap">AP${p.ap}</span>
    <span class="wp-d">D${p.d}</span>
    ${p.special ? `<span class="wp-special">${p.special}</span>` : ''}
  </div>`;
}

let state = {
  factionId: null,
  armyName: '',
  ptsLimit: 2000,
  detachment: 'battalion',
  roster: [], // { unitId, name, role, basePoints, qty, wargear:[] }
  activeRoleFilter: 'All',
};

// UNITS is now built by data/faction_map.js from individual faction files

// ============================================================
// INIT
// ============================================================

function init() {
  renderFactions();
  renderRoleTabs();
  renderForceOrg();
  renderValidation();
  renderRoster();
  renderUnitBrowser();

  document.getElementById('armyName').addEventListener('input', e => {
    state.armyName = e.target.value;
  });
  document.getElementById('detachmentType').addEventListener('change', e => {
    state.detachment = e.target.value;
    renderForceOrg();
    renderValidation();
    updateCP();
  });

  // Set initial mobile tab state
  if (window.innerWidth < 900) {
    switchTab('config');
  }
}

function renderFactions() {
  const grid = document.getElementById('factionGrid');
  grid.innerHTML = FACTIONS.map(f => `
    <button class="faction-btn ${state.factionId === f.id ? 'active' : ''}"
      onclick="selectFaction('${f.id}')"
      style="${state.factionId === f.id ? `--faction-color:${f.color}` : ''}">
      ${f.name}
    </button>
  `).join('');
}

let _pendingFactionId = null;

function selectFaction(id) {
  if (id === state.factionId) return;
  if (state.roster.length > 0) {
    _pendingFactionId = id;
    document.getElementById('factionModal').style.display = 'flex';
    return;
  }
  _applyFactionChange(id);
}

function cancelFactionChange() {
  _pendingFactionId = null;
  document.getElementById('factionModal').style.display = 'none';
}

function confirmFactionChange() {
  document.getElementById('factionModal').style.display = 'none';
  if (_pendingFactionId) {
    state.roster = [];
    _applyFactionChange(_pendingFactionId);
    _pendingFactionId = null;
  }
}

function _applyFactionChange(id) {
  state.factionId = id;
  state.activeRoleFilter = 'All';
  renderFactions();
  renderUnitBrowser();
  renderRoster();
  updateTotalPoints();
  renderForceOrg();
  renderValidation();
  const faction = FACTIONS.find(f => f.id === id);
  document.getElementById('factionBadge').textContent = faction ? faction.name : 'No Faction';
  document.getElementById('factionBadge').style.borderColor = faction ? faction.color + '66' : '';
  document.getElementById('factionBadge').style.color = faction ? faction.color : '';
  document.getElementById('factionBadge').style.background = faction ? faction.color + '15' : '';
}

function updatePtsLimit() {
  state.ptsLimit = parseInt(document.getElementById('ptsLimitSelect').value);
  document.getElementById('ptsLimit').textContent = state.ptsLimit.toLocaleString();
  updateTotalPoints();
}

function updateTotalPoints() {
  const total = state.roster.reduce((s, u) => s + ((u.basePoints + (u.optionPts||0)) + (u.ppm||0) * Math.max(0,(u.models||1)-(u.minModels||1))) * u.qty, 0);
  document.getElementById('totalPts').textContent = total.toLocaleString();
  const pct = Math.min((total / state.ptsLimit) * 100, 100);
  const bar = document.getElementById('ptsBar');
  bar.style.width = pct + '%';
  bar.className = 'points-bar-fill' + (total > state.ptsLimit ? ' over' : '');
  document.getElementById('totalPts').style.color = total > state.ptsLimit ? 'var(--red-bright)' : 'var(--gold)';
  renderValidation();
}

function updateCP() {
  const rule = DETACHMENT_RULES[state.detachment];
  const cp = rule ? rule.cp : 0;
  document.getElementById('cpDisplay').textContent = (cp >= 0 ? '+' : '') + cp + ' CP';
  document.getElementById('cpDisplay').style.color = cp < 0 ? 'var(--red-bright)' : 'var(--gold)';
}

// ============================================================
// ROLE TABS
// ============================================================

function renderRoleTabs() {
  const tabs = document.getElementById('roleTabs');
  const allRoles = ['All', ...ROLES];
  tabs.innerHTML = allRoles.map(r => `
    <button class="role-tab ${state.activeRoleFilter === r ? 'active' : ''}"
      onclick="filterRole('${r}')">${r === 'Dedicated Transport' ? 'D. Transport' : r === 'Lord of War' ? 'LOW' : r}</button>
  `).join('');
}

function filterRole(role) {
  state.activeRoleFilter = role;
  renderRoleTabs();
  renderUnitBrowser();
}

// ============================================================
// UNIT BROWSER
// ============================================================

function renderUnitBrowser() {
  const list = document.getElementById('unitList');
  const countEl = document.getElementById('unitCount');

  if (!state.factionId) {
    list.innerHTML = `<div class="empty-state"><div class="empty-state-icon">🎯</div><div class="empty-state-text">Select a Faction First</div></div>`;
    countEl.textContent = '—';
    return;
  }

  const units = UNITS[state.factionId] || [];
  const query = document.getElementById('unitSearch').value.toLowerCase();
  const filtered = units.filter(u => {
    const matchRole = state.activeRoleFilter === 'All' || u.role === state.activeRoleFilter;
    const matchQuery = !query || u.name.toLowerCase().includes(query);
    return matchRole && matchQuery;
  });

  countEl.textContent = filtered.length + ' units';

  if (!filtered.length) {
    list.innerHTML = `<div class="empty-state"><div class="empty-state-text">No units found</div></div>`;
    return;
  }

  // Sort by role order, then name
  const roleOrder = ['HQ','Troops','Elites','Fast Attack','Heavy Support','Flyer','Lord of War','Dedicated Transport','Fortification'];
  const sorted = [...filtered].sort((a, b) => {
    const ai = roleOrder.indexOf(a.role); const bi = roleOrder.indexOf(b.role);
    if (ai !== bi) return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    return a.name.localeCompare(b.name);
  });

  let html = '';
  let lastRole = null;
  sorted.forEach(u => {
    const sizeLabel = u.min ? (u.min === u.max ? `${u.min} models` : `${u.min}–${u.max} models`) : '';
    const ptsLabel = u.ppm && u.min > 1 ? `${u.pts}pts (${u.min} min) +${u.ppm}ea` : u.ppm ? `${u.pts}pts +${u.ppm}pts/model` : u.min > 1 ? `${u.pts}pts (${u.min} models)` : `${u.pts}pts`;
    if (state.activeRoleFilter === 'All' && u.role !== lastRole) {
      lastRole = u.role;
      html += `<div class="unit-role-header">${u.role}</div>`;
    }
    html += `
    <div class="unit-row">
      <div style="flex:1;min-width:0;">
        <div class="unit-row-name">${u.name}${u.isNew ? '<span class="new-badge">NEW</span>' : ''}</div>
        ${sizeLabel ? `<div style="font-size:10px;color:var(--muted);font-family:'Barlow Condensed',sans-serif;letter-spacing:0.05em;">${sizeLabel}</div>` : ''}
      </div>
      <div class="unit-row-role">${ROLE_SHORT[u.role] || u.role}</div>
      <div class="unit-row-pts">${ptsLabel}</div>
      ${(u.unique && state.roster.some(r => r.baseUnitId === u.id))
        ? '<button class="add-btn" disabled title="Unique — already in roster" style="opacity:0.3;cursor:not-allowed;">+</button>'
        : `<button class="add-btn" onclick="addUnit('${u.id}')" title="Add to roster">+</button>`}
    </div>`;
  });
  list.innerHTML = html;
}

// ============================================================
// ROSTER MANAGEMENT
// ============================================================

// ============================================================
// MODEL LOADOUT HELPERS
// ============================================================

// Build the default per-model loadout state from unit.composition.
// composition is an array of model role descriptors, e.g.:
// [
//   { role:'Leader', count:1, wargear:['Bolt Pistol','Chainsword'],
//     options:[{ group:'Melee', choices:[{label:'Chainsword',pts:0,default:true,weapons:['Chainsword']},{label:'Power Sword',pts:5,weapons:['Power Sword'],replaces:['Chainsword']}] }] },
//   { role:'Special Weapon', count:1, wargear:['Boltgun'],
//     options:[{ group:'Special', choices:[{label:'Boltgun',pts:0,default:true,weapons:['Boltgun']},{label:'Plasma Gun',pts:5,weapons:['Plasma Gun'],replaces:['Boltgun']}] }] },
//   { role:'Heavy Weapon', count:1, wargear:['Heavy Bolter'],
//     options:[{ group:'Heavy', choices:[{label:'Heavy Bolter',pts:0,default:true,weapons:['Heavy Bolter']},{label:'Lascannon',pts:10,weapons:['Lascannon'],replaces:['Heavy Bolter']}] }] },
//   { role:'Trooper', count:7, wargear:['Boltgun','Bolt Pistol','Frag Grenade','Krak Grenade'] }
// ]
function buildDefaultModelLoadouts(unit) {
  if (!unit.composition) return null;
  return unit.composition.map(comp => {
    const selections = {};

    // Separate base wargear (items not controlled by any option group) from option-controlled weapons.
    // Collect all weapons that any choice in any option group could provide.
    const allOptionWeapons = new Set();
    if (comp.options) {
      comp.options.forEach(opt => {
        opt.choices.forEach(c => {
          if (c.weapons) c.weapons.forEach(w => allOptionWeapons.add(w));
          if (c.replaces) c.replaces.forEach(w => allOptionWeapons.add(w));
        });
      });
    }

    // Base wargear = items from comp.wargear that are NOT controlled by any option
    const baseWargear = (comp.wargear || []).filter(w => !allOptionWeapons.has(w));

    // Then add only the default choice's weapons for each option group
    const choiceWeapons = [];
    if (comp.options) {
      comp.options.forEach(opt => {
        const def = opt.choices.find(c => c.default) || opt.choices[0];
        selections[opt.group] = def.label;
        if (def.weapons) choiceWeapons.push(...def.weapons);
      });
    }

    return {
      role: comp.role,
      count: comp.count,
      wargear: [...baseWargear, ...choiceWeapons],
      selections,
      options: comp.options || [],
    };
  });
}

function changeModelLoadout(instanceId, modelRoleLabel, group, label, pts) {
  const entry = state.roster.find(r => r.unitId === instanceId);
  if (!entry || !entry.modelLoadouts) return;
  const modelSlot = entry.modelLoadouts.find(m => m.role === modelRoleLabel);
  if (!modelSlot) return;
  const opt = modelSlot.options.find(o => o.group === group);
  if (!opt) return;
  const oldChoice = opt.choices.find(c => c.label === modelSlot.selections[group]);
  const newChoice = opt.choices.find(c => c.label === label);
  const oldPts = oldChoice ? oldChoice.pts : 0;

  // Always rebuild wargear from scratch for this slot to avoid accumulation
  // Start from base wargear (items not controlled by any option)
  const allOptionWeapons = new Set();
  modelSlot.options.forEach(o => {
    o.choices.forEach(c => {
      if (c.weapons) c.weapons.forEach(w => allOptionWeapons.add(w));
      if (c.replaces) c.replaces.forEach(w => allOptionWeapons.add(w));
    });
  });

  // Find the comp definition for this role to get original base wargear
  const compDef = (UNITS[state.factionId] || [])
    .flatMap(u => u.composition || [])
    .find(c => c.role === modelSlot.role);
  const baseWargear = compDef
    ? (compDef.wargear || []).filter(w => !allOptionWeapons.has(w))
    : modelSlot.wargear.filter(w => !allOptionWeapons.has(w));

  // Apply current selections + the new choice for this group
  const newSelections = { ...modelSlot.selections, [group]: label };
  const choiceWeapons = [];
  modelSlot.options.forEach(o => {
    const selectedLabel = newSelections[o.group];
    const selected = o.choices.find(c => c.label === selectedLabel);
    if (selected && selected.weapons) choiceWeapons.push(...selected.weapons);
  });

  modelSlot.wargear = [...baseWargear, ...choiceWeapons];
  modelSlot.selections[group] = label;
  entry.optionPts = (entry.optionPts - oldPts) + pts;
  updateTotalPoints();

  const safeId = instanceId.replace(/[^a-zA-Z0-9_]/g, '_');
  const ptsEl = document.getElementById('upts_' + safeId);
  if (ptsEl) ptsEl.textContent = (((entry.basePoints + entry.optionPts) + (entry.ppm||0) * Math.max(0,(entry.models||entry.minModels)-entry.minModels)) * entry.qty) + ' pts';

  // Re-render wargear for that model slot only
  const safeMRole = modelRoleLabel.replace(/[^a-zA-Z0-9_]/g, '_');
  const slotWgEl = document.getElementById('mwg_' + safeId + '_' + safeMRole);
  if (slotWgEl) slotWgEl.innerHTML = renderWargearInline(modelSlot.wargear);
}

function renderWargearInline(wargearList) {
  const weapons = [];
  const equipment = [];

  wargearList.forEach(wg => {
    const p = lookupWeapon(wg);
    if (p && p.range !== '—') {
      weapons.push(`<div class="weapon-profile-inline">
      <span class="wp-name">${wg}</span>
      <span class="wp-stat">${p.range}</span>
      <span class="wp-stat">${p.type}</span>
      <span class="wp-stat">S${p.s}</span>
      <span class="wp-stat">AP${p.ap}</span>
      <span class="wp-stat">D${p.d}</span>
      ${p.special ? `<span class="wp-special-inline" title="${p.special}">★</span>` : ''}
    </div>`);
    } else {
      // Equipment/buffs or unknown — show as a compact tag with tooltip
      const title = p ? p.special : '';
      equipment.push(`<span class="wargear-tag active" ${title ? `title="${title}"` : ''}>${wg}</span>`);
    }
  });

  let html = '';
  if (weapons.length) html += `<div class="wargear-weapons">${weapons.join('')}</div>`;
  if (equipment.length) html += `<div class="wargear-equipment">${equipment.join('')}</div>`;
  return html;
}

function addUnit(unitId) {
  const factionUnits = UNITS[state.factionId] || [];
  const unit = factionUnits.find(u => u.id === unitId);
  if (!unit) return;
  if (unit.unique && state.roster.some(r => r.baseUnitId === unitId)) return;

  const hasOptions = unit.options && unit.options.length > 0;
  const hasPpm = !!(unit.ppm && unit.ppm > 0);

  // Always create a new entry — allows same unit multiple times with different loadouts
  // Build default selections
  const selections = {};
  let optionPts = 0;
  // Start from base wargear, then apply default option weapons
  let wargear = [...unit.wargear];
  if (unit.options) {
    unit.options.forEach(opt => {
      const def = opt.choices.find(c => c.default) || opt.choices[0];
      selections[opt.group] = def.label;
      optionPts += def.pts;
      // Apply weapon swap for default choice
      if (def.weapons) {
        wargear = applyWeaponChoice(wargear, null, def);
      }
    });
  }

  const instanceId = unitId + '_' + Date.now();
  const minModels = unit.min || 1;

  state.roster.push({
    unitId: instanceId,
    baseUnitId: unitId,
    name: unit.name,
    role: unit.role,
    basePoints: unit.pts,
    optionPts,
    selections,
    qty: 1,
    models: minModels,
    minModels: unit.min || 1,
    maxModels: unit.max || 1,
    ppm: unit.ppm || 0,
    wargear,
    baseWargear: [...unit.wargear],
    hasOptions: !!unit.options,
    options: unit.options || [],
    composition: unit.composition || null,  // per-model role definitions
    modelLoadouts: buildDefaultModelLoadouts(unit),
    abilities: unit.abilities || [],
    notes: unit.notes || null,
  });

  renderRoster();
  updateTotalPoints();
  renderForceOrg();

  // Auto-switch to roster on mobile removed — user stays in browse tab
}

// ============================================================
// WEAPON LOADOUT HELPER
// ============================================================

// Applies a weapon choice swap to a wargear array.
// choice.weapons  — list of weapons this choice provides
// choice.replaces — list of weapons this choice removes (optional)
// If neither is set, wargear is unchanged (pts-only option).
// If choice.replaces is omitted but choice.weapons is set,
// the OLD choice's weapons are removed and new ones are added.
function applyWeaponChoice(wargear, oldChoice, newChoice) {
  let gear = [...wargear];

  // Remove the old choice's weapons (whatever they granted)
  if (oldChoice && oldChoice.weapons) {
    oldChoice.weapons.forEach(w => {
      const idx = gear.findIndex(g => g.toLowerCase() === w.toLowerCase());
      if (idx !== -1) gear.splice(idx, 1);
    });
  }

  // Also remove anything the new choice explicitly declares it replaces
  if (newChoice.replaces) {
    newChoice.replaces.forEach(w => {
      const idx = gear.findIndex(g => g.toLowerCase() === w.toLowerCase());
      if (idx !== -1) gear.splice(idx, 1);
    });
  }

  // Add the new choice's weapons
  if (newChoice.weapons) {
    gear.push(...newChoice.weapons);
  }

  return gear;
}

function changeLoadout(instanceId, group, label, pts) {
  const entry = state.roster.find(r => r.unitId === instanceId);
  if (!entry) return;
  const opt = entry.options.find(o => o.group === group);
  if (!opt) return;
  const oldChoice = opt.choices.find(c => c.label === entry.selections[group]);
  const newChoice = opt.choices.find(c => c.label === label);
  const oldPts = oldChoice ? oldChoice.pts : 0;

  // Swap weapons in wargear if this option has weapon data
  if (newChoice && (newChoice.weapons || newChoice.replaces || (oldChoice && oldChoice.weapons))) {
    entry.wargear = applyWeaponChoice(entry.wargear, oldChoice || null, newChoice);
  }

  entry.selections[group] = label;
  entry.optionPts = (entry.optionPts - oldPts) + pts;
  updateTotalPoints();

  // Update pts display
  const safeId = instanceId.replace(/[^a-zA-Z0-9_]/g, '_');
  const ptsEl = document.getElementById('upts_' + safeId);
  if (ptsEl) ptsEl.textContent = (((entry.basePoints + entry.optionPts) + (entry.ppm||0) * Math.max(0,(entry.models||entry.minModels)-entry.minModels)) * entry.qty) + ' pts';

  // Update section pts
  const role = entry.role;
  const rolePts = state.roster.filter(u => u.role === role).reduce((s,u) => s + ((u.basePoints + (u.optionPts||0)) + (u.ppm||0) * Math.max(0,(u.models||u.minModels||1)-(u.minModels||1))) * u.qty, 0);
  document.querySelectorAll('[data-role-pts="' + role + '"]').forEach(el => el.textContent = rolePts + ' pts');

  // Re-render wargear display for this unit only
  const wargearEl = document.getElementById('wg_' + safeId);
  if (wargearEl) wargearEl.innerHTML = renderWargearInline(entry.wargear);
}

function changeQty(unitId, delta) {
  const idx = state.roster.findIndex(r => r.unitId === unitId);
  if (idx < 0) return;
  state.roster[idx].qty = Math.max(1, state.roster[idx].qty + delta);
  renderRoster();
  updateTotalPoints();
  renderForceOrg();
}

function changeModels(unitId, delta) {
  const entry = state.roster.find(r => r.unitId === unitId);
  if (!entry) return;
  const newModels = Math.min(entry.maxModels, Math.max(entry.minModels, (entry.models||entry.minModels) + delta));
  entry.models = newModels;
  renderRoster();
  updateTotalPoints();
}

function toggleAbilities(abId) {
  const el = document.getElementById(abId);
  const arrow = document.getElementById(abId + '_arrow');
  if (!el) return;
  const isHidden = el.style.display === 'none';
  el.style.display = isHidden ? 'flex' : 'none';
  el.style.flexDirection = 'column';
  if (arrow) arrow.textContent = isHidden ? '▼' : '▶';
}

function removeUnit(unitId) {
  state.roster = state.roster.filter(r => r.unitId !== unitId);
  renderRoster();
  updateTotalPoints();
  renderForceOrg();
}

function cloneUnit(unitId) {
  const entry = state.roster.find(r => r.unitId === unitId);
  if (!entry) return;
  const clone = JSON.parse(JSON.stringify(entry)); // deep copy
  clone.unitId = (entry.baseUnitId || unitId) + '_' + Date.now();
  // Insert immediately after the original
  const idx = state.roster.findIndex(r => r.unitId === unitId);
  state.roster.splice(idx + 1, 0, clone);
  renderRoster();
  updateTotalPoints();
  renderForceOrg();
}

function toggleWargear(unitId, wg) {
  // Wargear toggle is visual/informational in this builder
  const el = event.target;
  el.classList.toggle('active');
}

function renderModelComposition(u) {
  const safeId = u.unitId.replace(/[^a-zA-Z0-9_]/g, '_');
  let html = `<div class="model-composition">`;
  u.modelLoadouts.forEach(slot => {
    const safeMRole = slot.role.replace(/[^a-zA-Z0-9_]/g, '_');
    const countLabel = slot.count > 1 ? `×${slot.count}` : '';
    html += `<div class="comp-slot">
      <div class="comp-slot-header">
        <span class="comp-role">${slot.role}</span>
        ${countLabel ? `<span class="comp-count">${countLabel}</span>` : ''}
      </div>`;

    // Options (weapon choices for this model type)
    if (slot.options && slot.options.length) {
      html += `<div class="loadout-options comp-options">`;
      slot.options.forEach(opt => {
        html += `<div class="loadout-group">
          <span class="loadout-label">${opt.group}:</span>
          <div class="loadout-choices">`;
        opt.choices.forEach(choice => {
          const isSelected = slot.selections[opt.group] === choice.label;
          const ptsLabel = choice.pts > 0 ? ` +${choice.pts}` : choice.pts < 0 ? ` ${choice.pts}` : '';
          const noteLabel = choice.note ? `<span class="loadout-note">${choice.note}</span>` : '';
          // Escape for use in onclick string — role labels may have spaces
          const roleEsc = slot.role.replace(/'/g, "\\'");
          const grpEsc = opt.group.replace(/'/g, "\\'");
          const lblEsc = choice.label.replace(/'/g, "\\'");
          html += `<button class="loadout-btn ${isSelected ? 'selected' : ''}"
            onclick="changeModelLoadout('${u.unitId}','${roleEsc}','${grpEsc}','${lblEsc}',${choice.pts}); this.closest('.loadout-choices').querySelectorAll('.loadout-btn').forEach(b=>b.classList.remove('selected')); this.classList.add('selected');">
            ${choice.label}${ptsLabel ? `<span class="loadout-pts">${ptsLabel}</span>` : ''}${noteLabel}
          </button>`;
        });
        html += `</div></div>`;
      });
      html += `</div>`;
    }

    // Wargear for this model
    html += `<div class="wargear-list comp-wargear" id="mwg_${safeId}_${safeMRole}">
      ${renderWargearInline(slot.wargear)}
    </div>`;

    html += `</div>`;
  });
  html += `</div>`;
  return html;
}

function renderRoster() {
  const body = document.getElementById('rosterBody');

  if (!state.roster.length) {
    body.innerHTML = `<div class="empty-state"><div class="empty-state-icon">⚔</div><div class="empty-state-text">No Units Selected</div><div style="margin-top:8px;font-size:12px;color:var(--muted);">Choose a faction and add units from the browser →</div></div>`;
    return;
  }

  // Group by role
  const grouped = {};
  ROLES.forEach(r => { grouped[r] = []; });
  state.roster.forEach(u => {
    if (grouped[u.role]) grouped[u.role].push(u);
    else grouped['Elites'].push(u);
  });

  let html = '';
  ROLES.forEach(role => {
    const units = grouped[role];
    if (!units.length) return;
    const rolePts = units.reduce((s, u) => s + (u.basePoints + (u.optionPts||0)) * u.qty, 0);
    html += `<div class="roster-section">
      <div class="roster-section-title">
        <span>${role}</span>
        <span class="roster-section-pts" data-role-pts="${role}">${rolePts} pts</span>
      </div>`;
    units.forEach(u => {
      const totalPts = ((u.basePoints + (u.optionPts||0)) + (u.ppm||0)*Math.max(0,(u.models||1)-(u.minModels||1))) * u.qty;
      const safeId = u.unitId.replace(/[^a-zA-Z0-9_]/g, '_');

      // Build options HTML
      let optionsHtml = '';
      if (u.hasOptions && u.options.length) {
        optionsHtml = `<div class="loadout-options">`;
        u.options.forEach(opt => {
          optionsHtml += `<div class="loadout-group">
            <span class="loadout-label">${opt.group}:</span>
            <div class="loadout-choices">`;
          opt.choices.forEach(choice => {
            const isSelected = u.selections[opt.group] === choice.label;
            const ptsLabel = choice.pts > 0 ? ` +${choice.pts}` : choice.pts < 0 ? ` ${choice.pts}` : '';
            const noteLabel = choice.note ? `<span class="loadout-note">${choice.note}</span>` : '';
            optionsHtml += `<button class="loadout-btn ${isSelected ? 'selected' : ''}"
              onclick="changeLoadout('${u.unitId}','${opt.group}','${choice.label}',${choice.pts}); this.closest('.loadout-choices').querySelectorAll('.loadout-btn').forEach(b=>b.classList.remove('selected')); this.classList.add('selected');">
              ${choice.label}${ptsLabel ? `<span class="loadout-pts">${ptsLabel}</span>` : ''}${noteLabel}
            </button>`;
          });
          optionsHtml += `</div></div>`;
        });
        optionsHtml += `</div>`;
      }

      // Model count controls
      let modelHtml = '';
      if (u.ppm > 0 || u.maxModels > u.minModels) {
        const extraModels = Math.max(0, (u.models||u.minModels) - u.minModels);
        const extraPts = u.ppm * extraModels;
        modelHtml = `<div class="model-control">
          <span class="model-label">Models:</span>
          <button class="qty-btn" onclick="changeModels('${u.unitId}',-1)">−</button>
          <span class="qty-value">${u.models||u.minModels}</span>
          <button class="qty-btn" onclick="changeModels('${u.unitId}',1)">+</button>
          <span class="model-range">(${u.minModels}–${u.maxModels}${u.ppm ? ` · +${u.ppm}pts ea` : ''}${extraPts > 0 ? ` · +${extraPts}pts` : ''})</span>
        </div>`;
      }

      // Abilities collapsible — look up from source unit if not stored on entry
      const allFactionUnits = UNITS[state.factionId] || [];
      const srcUnit = allFactionUnits.find(x => x.id === (u.baseUnitId || u.unitId));
      const unitAbilities = (u.abilities && u.abilities.length) ? u.abilities : (srcUnit && srcUnit.abilities ? srcUnit.abilities : []);

      let abilitiesHtml = '';
      if (unitAbilities && unitAbilities.length) {
        const abId = 'ab_' + safeId;
        abilitiesHtml = `
          <button class="abilities-toggle" onclick="toggleAbilities('${abId}')">
            <span id="${abId}_arrow">▶</span> Abilities &amp; Special Rules (${unitAbilities.length})
          </button>
          <div class="abilities-list" id="${abId}" style="display:none;">
            ${unitAbilities.map(a => {
              const ci = a.indexOf(':');
              return ci > -1
                ? `<div class="ability-item"><span class="ability-name">${a.substring(0,ci)}</span>${a.substring(ci)}</div>`
                : `<div class="ability-item"><span class="ability-name">${a}</span></div>`;
            }).join('')}
          </div>`;
      }

      const notesHtml = u.notes ? `<div class="unit-notes">${u.notes}</div>` : '';

      html += `
        <div class="roster-unit">
          <div class="roster-unit-top">
            <div class="roster-unit-name">${u.name}</div>
            <div class="roster-unit-controls">
              <div class="roster-unit-pts" id="upts_${safeId}">${totalPts} pts</div>
              <button class="clone-btn" onclick="cloneUnit('${u.unitId}')" title="Clone unit">⧉</button>
              <button class="remove-btn" onclick="removeUnit('${u.unitId}')" title="Remove">✕</button>
            </div>
          </div>
          ${modelHtml}
          ${optionsHtml}
          ${notesHtml}
          ${u.modelLoadouts ? renderModelComposition(u) : `<div class="wargear-list" id="wg_${safeId}">
            ${renderWargearInline(u.wargear)}
          </div>`}
          ${abilitiesHtml}
        </div>`;
    });
    html += '</div>';
  });

  body.innerHTML = html;
}

// ============================================================
// FORCE ORG
// ============================================================

function renderForceOrg() {
  const rule = DETACHMENT_RULES[state.detachment] || DETACHMENT_RULES.battalion;
  const counts = { hq:0, troops:0, elites:0, fast:0, heavy:0, flyer:0, lord:0, dedicated:0, fortification:0 };
  state.roster.forEach(u => {
    const slot = ROLE_TO_SLOT[u.role];
    if (slot && counts[slot] !== undefined) counts[slot] += u.qty;
  });

  const slots = [
    { key:'hq', label:'HQ', cls:'hq' },
    { key:'troops', label:'Troops', cls:'troops' },
    { key:'elites', label:'Elites', cls:'elites' },
    { key:'fast', label:'Fast Atk', cls:'fast' },
    { key:'heavy', label:'Heavy', cls:'heavy' },
    { key:'flyer', label:'Flyer', cls:'flyer' },
    { key:'lord', label:'LoW', cls:'lord' },
    { key:'dedicated', label:'D. Trans.', cls:'dedicated' },
    { key:'fortification', label:'Fort.', cls:'fortification' },
  ];

  document.getElementById('forceOrg').innerHTML = slots.map(s => {
    const [min, max] = rule[s.key];
    const count = counts[s.key];
    const over = max !== '∞' && count > max;
    const under = count < min;
    return `<div class="org-slot ${s.cls}" style="${over ? 'border-color:var(--red-bright)' : under && count > 0 ? 'border-color:var(--gold)' : ''}">
      <div class="org-slot-name">${s.label}</div>
      <div class="org-slot-count" style="${over ? 'color:var(--red-bright)' : ''}">${count}</div>
      <div class="org-slot-limit">${min}–${max}</div>
    </div>`;
  }).join('');

  updateCP();
}

// ============================================================
// VALIDATION
// ============================================================

function renderValidation() {
  const list = document.getElementById('validationList');
  const msgs = [];
  const total = state.roster.reduce((s, u) => s + ((u.basePoints + (u.optionPts||0)) + (u.ppm||0) * Math.max(0,(u.models||1)-(u.minModels||1))) * u.qty, 0);
  const rule = DETACHMENT_RULES[state.detachment] || DETACHMENT_RULES.battalion;

  if (!state.factionId) {
    msgs.push({ type:'warn', msg: 'No faction selected.' });
  }

  if (!state.roster.length) {
    msgs.push({ type:'warn', msg: 'No units in roster.' });
  }

  if (total > state.ptsLimit) {
    msgs.push({ type:'error', msg: `Over points limit by ${total - state.ptsLimit} pts.` });
  } else if (total === 0) {
    // nothing
  } else {
    msgs.push({ type:'ok', msg: `Within points limit (${state.ptsLimit - total} pts remaining).` });
  }

  // Slot validation
  const counts = { hq:0, troops:0, elites:0, fast:0, heavy:0, flyer:0, lord:0, dedicated:0, fortification:0 };
  state.roster.forEach(u => {
    const slot = ROLE_TO_SLOT[u.role];
    if (slot && counts[slot] !== undefined) counts[slot] += u.qty;
  });

  const slotLabels = { hq:'HQ', troops:'Troops', elites:'Elites', fast:'Fast Attack', heavy:'Heavy Support', flyer:'Flyer', lord:'Lord of War', dedicated:'Dedicated Transport', fortification:'Fortification' };

  Object.entries(counts).forEach(([slot, count]) => {
    const [min, max] = rule[slot];
    if (count < min) msgs.push({ type:'error', msg: `Need ${min - count} more ${slotLabels[slot]} slot(s).` });
    if (max !== '∞' && count > max) msgs.push({ type:'error', msg: `${slotLabels[slot]}: ${count - max} over maximum.` });
  });

  // One detachment rule
  msgs.push({ type:'ok', msg: 'Renegade Brigade: one detachment per army — no souping.' });

  if (!msgs.length) msgs.push({ type:'ok', msg: 'List is valid.' });

  list.innerHTML = msgs.map(m => `
    <div class="validation-item ${m.type}">
      <span>${m.type === 'ok' ? '✓' : m.type === 'error' ? '✕' : '!'}</span>
      <span>${m.msg}</span>
    </div>
  `).join('');
}

// ============================================================
// EXPORT
// ============================================================

function buildListText() {
  const faction = FACTIONS.find(f => f.id === state.factionId);
  const total = state.roster.reduce((s, u) => s + ((u.basePoints + (u.optionPts||0)) + (u.ppm||0) * Math.max(0,(u.models||1)-(u.minModels||1))) * u.qty, 0);
  const armyRules = ARMY_RULES[state.factionId];
  let lines = [
    `=== ${state.armyName || 'Unnamed Army'} ===`,
    `Faction: ${faction ? faction.name : 'None'}`,
    `Detachment: ${document.getElementById('detachmentType').options[document.getElementById('detachmentType').selectedIndex].text}`,
    `Points: ${total} / ${state.ptsLimit}`,
    '',
  ];
  if (armyRules) {
    lines.push('── ARMY RULES ─────────────────────────────');
    lines.push(armyRules.summary);
    lines.push('');
    armyRules.rules.forEach(r => {
      lines.push(`  ${r.name}`);
      lines.push(`  ${r.desc}`);
      lines.push('');
    });
    lines.push('───────────────────────────────────────────');
    lines.push('');
  }

  const grouped = {};
  ROLES.forEach(r => grouped[r] = []);
  state.roster.forEach(u => (grouped[u.role] || grouped['Elites']).push(u));

  ROLES.forEach(role => {
    const units = grouped[role];
    if (!units.length) return;
    lines.push(`[ ${role.toUpperCase()} ]`);
    units.forEach(u => {
      lines.push(`  × ${u.qty}  ${u.name} [${u.models||1} models]  (${((u.basePoints+(u.optionPts||0))+(u.ppm||0)*Math.max(0,(u.models||1)-(u.minModels||1)))*u.qty} pts)`);
      if (u.modelLoadouts) {
        u.modelLoadouts.forEach(slot => {
          lines.push(`       ${slot.count > 1 ? `×${slot.count} ` : ''}${slot.role}: ${slot.wargear.join(', ')}`);
        });
      } else if (u.wargear.length) {
        lines.push(`       Wargear: ${u.wargear.join(', ')}`);
      }
    });
    lines.push('');
  });

  return lines.join('\n');
}

function printList() {
  const faction = FACTIONS.find(f => f.id === state.factionId);
  const total = state.roster.reduce((s, u) => s + ((u.basePoints + (u.optionPts||0)) + (u.ppm||0) * Math.max(0,(u.models||1)-(u.minModels||1))) * u.qty, 0);
  const detachName = document.getElementById('detachmentType').options[document.getElementById('detachmentType').selectedIndex].text;
  const armyName = state.armyName || 'Unnamed Army';

  const grouped = {};
  ROLES.forEach(r => grouped[r] = []);
  state.roster.forEach(u => (grouped[u.role] || grouped['Elites']).push(u));

  const STAT_HEADERS = ['M','WS','BS','S','T','W','A','Ld','Sv'];

  let sections = '';
  ROLES.forEach(role => {
    const units = grouped[role];
    if (!units.length) return;
    const rolePts = units.reduce((s,u) => s + (u.basePoints+(u.optionPts||0))*u.qty, 0);

    let unitsHtml = '';
    units.forEach(u => {
      const pts = (u.basePoints + (u.optionPts||0)) * u.qty;
      const allFactionUnits = UNITS[state.factionId] || [];
      const sourceUnit = allFactionUnits.find(x => x.id === (u.baseUnitId || u.unitId));
      const stats = sourceUnit && sourceUnit.stats ? sourceUnit.stats : null;
      const abilities = (u.abilities && u.abilities.length) ? u.abilities : (sourceUnit && sourceUnit.abilities ? sourceUnit.abilities : []);

      const statBlock = stats ? `
        <table class="stat-table">
          <thead><tr>${STAT_HEADERS.map(h => `<th>${h}</th>`).join('')}</tr></thead>
          <tbody><tr>${stats.map(s => `<td>${s}</td>`).join('')}</tr></tbody>
        </table>` : '';

      const loadoutHtml = '';

      // Wargear: per-model composition if available, otherwise flat list
      let wargearHtml = '';
      const renderPrintWargear = (wgList) => {
        const weapons = wgList.filter(wg => { const p = lookupWeapon(wg); return p && p.range !== '—'; });
        const equip   = wgList.filter(wg => { const p = lookupWeapon(wg); return !p || p.range === '—'; });
        let out = '';
        if (weapons.length) {
          out += `<table class="weapon-table">
            <thead><tr><th>Weapon</th><th>Range</th><th>Type</th><th>S</th><th>AP</th><th>D</th><th>Special</th></tr></thead>
            <tbody>${weapons.map(wg => {
              const p = lookupWeapon(wg);
              if (p) return `<tr><td><b>${wg}</b></td><td>${p.range}</td><td>${p.type}</td><td>${p.s}</td><td>${p.ap}</td><td>${p.d}</td><td>${p.special || '—'}</td></tr>`;
              return `<tr><td colspan="7">${wg}</td></tr>`;
            }).join('')}</tbody>
          </table>`;
        }
        if (equip.length) {
          out += `<div class="equip-row">${equip.map(wg => {
            const p = lookupWeapon(wg);
            return `<span class="equip-tag" title="${p ? p.special : ''}">${wg}</span>`;
          }).join('')}</div>`;
        }
        return out;
      };

      if (u.modelLoadouts) {
        wargearHtml = `<div class="wargear-section">`;
        u.modelLoadouts.forEach(slot => {
          if (!slot.wargear.length) return;
          wargearHtml += `<div class="comp-model-block">
            <div class="comp-model-label">${slot.count > 1 ? `×${slot.count} ` : ''}${slot.role}</div>
            ${renderPrintWargear(slot.wargear)}
          </div>`;
        });
        wargearHtml += `</div>`;
      } else if (u.wargear.length) {
        wargearHtml = `<div class="wargear-section">
          <div class="wargear-header">Wargear</div>
          ${renderPrintWargear(u.wargear)}
        </div>`;
      }
      const modelsHtml = (u.models && u.models !== u.minModels) ? `<div class="wargear-row"><b>Models:</b> ${u.models}</div>` : '';

      let abilitiesPrintHtml = '';
      if (abilities && abilities.length) {
        abilitiesPrintHtml = `<div class="abilities-print">` +
          abilities.map(a => {
            const ci = a.indexOf(':');
            return ci > -1
              ? `<div class="ability-print-item"><b>${a.substring(0,ci)}</b>${a.substring(ci)}</div>`
              : `<div class="ability-print-item"><b>${a}</b></div>`;
          }).join('') + `</div>`;
      }

      unitsHtml += `
        <div class="unit-card">
          <div class="unit-card-header">
            <span class="unit-card-name">${u.qty > 1 ? `&times;${u.qty} ` : ''}${u.name}${u.models > 1 ? ` [${u.models} models]` : ''}${u.isNew ? ' &#10022;' : ''}</span>
            <span class="unit-card-pts">${pts} pts</span>
          </div>
          ${statBlock}${modelsHtml}${loadoutHtml}${wargearHtml}${abilitiesPrintHtml}
        </div>`;
    });

    sections += `
      <div class="role-section">
        <div class="role-header"><span>${role.toUpperCase()}</span><span>${rolePts} pts</span></div>
        ${unitsHtml}
      </div>`;
  });

  const printHTML = `<!DOCTYPE html><html><head><meta charset="UTF-8">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family:Arial,sans-serif; font-size:11px; color:#111; background:#fff; padding:16px; }
  .page-header { border-bottom:3px solid #222; padding-bottom:10px; margin-bottom:16px; display:flex; justify-content:space-between; align-items:flex-end; }
  .army-title { font-size:20px; font-weight:700; }
  .army-meta { font-size:12px; color:#555; margin-top:3px; }
  .army-pts { font-size:24px; font-weight:700; color:#2a6e3a; }
  .army-pts-label { font-size:10px; color:#888; text-transform:uppercase; letter-spacing:0.1em; }
  .role-section { margin-bottom:14px; }
  .role-header { font-size:10px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#fff; background:#222; padding:3px 8px; display:flex; justify-content:space-between; margin-bottom:4px; }
  .unit-card { border:1px solid #ccc; margin-bottom:4px; page-break-inside:avoid; }
  .unit-card-header { display:flex; justify-content:space-between; align-items:center; padding:4px 8px; background:#efefef; border-bottom:1px solid #ccc; }
  .unit-card-name { font-size:13px; font-weight:700; }
  .unit-card-pts { font-size:12px; font-weight:700; color:#2a6e3a; }
  .stat-table { width:100%; border-collapse:collapse; }
  .stat-table th { background:#333; color:#fff; font-size:9px; letter-spacing:0.08em; padding:2px 4px; text-align:center; }
  .stat-table td { border:1px solid #ccc; padding:2px 4px; text-align:center; font-size:11px; font-weight:600; }
  .loadout-row { padding:3px 8px; font-size:10px; color:#333; border-bottom:1px solid #eee; display:flex; flex-wrap:wrap; gap:10px; }
  .wargear-row { padding:3px 8px; font-size:10px; color:#555; }
  .wargear-section { margin:0; }
  .wargear-header { font-size:9px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:#888; padding:3px 8px 1px; }
  .weapon-table { width:100%; border-collapse:collapse; font-size:9px; }
  .weapon-table th { background:#444; color:#fff; padding:2px 5px; text-align:left; font-size:8px; letter-spacing:0.05em; }
  .weapon-table td { padding:2px 5px; border-bottom:1px solid #eee; }
  .weapon-table td:first-child { font-weight:700; }
  .weapon-table tr:last-child td { border-bottom:none; }
  .abilities-print { padding:4px 8px; border-top:1px solid #eee; }
  .ability-print-item { font-size:10px; color:#333; padding:2px 0 2px 8px; border-left:2px solid #2a6e3a; margin-bottom:2px; line-height:1.4; }
  .army-rules-section { border:1px solid #aaa; margin-bottom:16px; page-break-inside:avoid; }
  .army-rules-header { background:#222; color:#fff; font-size:10px; font-weight:700; letter-spacing:0.1em; padding:5px 8px; text-transform:uppercase; }
  .army-rules-body { padding:6px 8px; display:flex; flex-wrap:wrap; gap:8px; }
  .army-rule-item { flex:1 1 280px; border-left:2px solid #c9a84c; padding-left:8px; }
  .army-rule-name { font-size:10px; font-weight:700; color:#222; margin-bottom:2px; }
  .army-rule-desc { font-size:9px; color:#555; line-height:1.4; }
  .comp-model-block { margin-bottom:4px; }
  .comp-model-label { font-size:9px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#555; padding:3px 8px 1px; background:#f5f5f5; border-top:1px solid #ddd; }
  .equip-row { padding:3px 8px; display:flex; flex-wrap:wrap; gap:6px; border-top:1px solid #eee; }
  .equip-tag { font-size:9px; color:#666; background:#f0f0f0; border:1px solid #ddd; padding:1px 6px; }
</style>
</head><body>
<div class="page-header">
  <div>
    <div class="army-title">${armyName}</div>
    <div class="army-meta">${faction ? faction.name : ''} &nbsp;&middot;&nbsp; ${detachName}</div>
  </div>
  <div style="text-align:right">
    <div class="army-pts-label">Total Points</div>
    <div class="army-pts">${total} / ${state.ptsLimit}</div>
  </div>
</div>
${(() => {
    const ar = ARMY_RULES[state.factionId];
    if (!ar) return '';
    const rulesHtml = ar.rules.map(r => `
      <div class="army-rule-item">
        <div class="army-rule-name">${r.name}</div>
        <div class="army-rule-desc">${r.desc}</div>
      </div>`).join('');
    return `<div class="army-rules-section">
      <div class="army-rules-header">Army Rules — ${ar.summary}</div>
      <div class="army-rules-body">${rulesHtml}</div>
    </div>`;
  })()}
${sections}
</body></html>`;

  // window.open works fine on live HTTPS sites when called from a direct user click
  const win = window.open('', '_blank');
  if (!win) {
    alert('Print blocked — please allow popups for this site in your browser settings, then try again.');
    return;
  }
  win.document.open();
  win.document.write(printHTML);
  win.document.close();
  // Small delay to let styles render before triggering print dialog
  setTimeout(() => {
    win.focus();
    win.print();
  }, 400);
}

function exportTxt() {
  const text = buildListText();
  const blob = new Blob([text], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = (state.armyName || 'army_list') + '.txt';
  a.click();
}

function copyToClipboard() {
  navigator.clipboard.writeText(buildListText()).then(() => {
    const btn = event.target;
    const orig = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => btn.textContent = orig, 1500);
  });
}

function saveList() {
  const data = JSON.stringify({ ...state, exportedAt: new Date().toISOString() }, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = (state.armyName || 'army_list') + '.json';
  a.click();
}

function clearRoster() {
  if (!state.roster.length) return;
  if (confirm('Clear the entire roster?')) {
    state.roster = [];
    renderRoster();
    updateTotalPoints();
    renderForceOrg();
    renderValidation();
  }
}

// ============================================================
// MOBILE TAB NAVIGATION
// ============================================================

// Tab order for swipe navigation (left = index 0)
const TAB_ORDER = ['config', 'browse', 'roster'];

function switchTab(tab) {
  const isMobile = window.innerWidth < 900;
  if (!isMobile) return;

  // Update tab buttons
  document.querySelectorAll('.mobile-tab').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById('tab-' + tab);
  if (activeBtn) activeBtn.classList.add('active');

  // Update swipe dots
  const idx = TAB_ORDER.indexOf(tab);
  document.querySelectorAll('.swipe-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === idx);
  });

  // Show/hide columns — scroll each back to top on switch
  document.querySelectorAll('[data-tab]').forEach(col => {
    if (col.dataset.tab === tab) {
      const isFlexCol = col.classList.contains('col-left') || col.classList.contains('col-browser');
      col.style.display = isFlexCol ? 'flex' : 'block';
      col.scrollTop = 0;
      // Slide in animation
      col.style.animation = 'none';
      col.offsetHeight; // force reflow
      col.style.animation = 'tabSlideIn 0.22s cubic-bezier(0.25,0.46,0.45,0.94)';
    } else {
      col.style.display = 'none';
    }
  });
}

function currentTabIndex() {
  const activeBtn = document.querySelector('.mobile-tab.active');
  if (!activeBtn) return 0;
  const tab = activeBtn.id.replace('tab-', '');
  return TAB_ORDER.indexOf(tab);
}

// Swipe gesture handling
(function initSwipe() {
  let touchStartX = 0;
  let touchStartY = 0;
  let touchStartTime = 0;

  document.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchStartTime = Date.now();
  }, { passive: true });

  document.addEventListener('touchend', e => {
    if (window.innerWidth >= 900) return;

    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    const dt = Date.now() - touchStartTime;

    // Must be: fast enough, horizontal enough, long enough distance
    if (dt > 400) return;                    // too slow
    if (Math.abs(dx) < 50) return;           // too short
    if (Math.abs(dy) > Math.abs(dx) * 0.6) return; // too vertical

    const idx = currentTabIndex();
    if (dx < 0 && idx < TAB_ORDER.length - 1) {
      // Swipe left → next tab
      document.documentElement.style.setProperty('--swipe-from', '40px');
      switchTab(TAB_ORDER[idx + 1]);
    } else if (dx > 0 && idx > 0) {
      // Swipe right → previous tab
      document.documentElement.style.setProperty('--swipe-from', '-40px');
      switchTab(TAB_ORDER[idx - 1]);
    }
  }, { passive: true });
})();

// On resize, reset to desktop layout if needed
window.addEventListener('resize', () => {
  if (window.innerWidth >= 900) {
    document.querySelectorAll('[data-tab]').forEach(col => {
      col.style.display = '';
    });
  } else {
    // Re-apply current active tab
    const activeTab = document.querySelector('.mobile-tab.active');
    if (activeTab) {
      const tab = activeTab.id.replace('tab-', '');
      switchTab(tab);
    }
  }
});

// ============================================================
// START
// ============================================================
init();
