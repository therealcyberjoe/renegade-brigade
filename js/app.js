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

  list.innerHTML = filtered.map(u => {
    const sizeLabel = u.min ? (u.min === u.max ? `${u.min} models` : `${u.min}–${u.max} models`) : '';
    const ptsLabel = u.ppm && u.min ? `${u.pts} + ${u.ppm}pts/model` : u.min > 1 ? `${u.pts} (${u.min} models)` : `${u.pts} pts`;
    return `
    <div class="unit-row">
      <div style="flex:1;min-width:0;">
        <div class="unit-row-name">${u.name}${u.isNew ? '<span class="new-badge">NEW</span>' : ''}</div>
        ${sizeLabel ? `<div style="font-size:10px;color:var(--muted);font-family:'Barlow Condensed',sans-serif;letter-spacing:0.05em;">${sizeLabel}</div>` : ''}
      </div>
      <div class="unit-row-role">${ROLE_SHORT[u.role] || u.role}</div>
      <div class="unit-row-pts">${ptsLabel}</div>
      <button class="add-btn" onclick="addUnit('${u.id}')" title="Add to roster">+</button>
    </div>`;
  }).join('');
}

// ============================================================
// ROSTER MANAGEMENT
// ============================================================

function addUnit(unitId) {
  const factionUnits = UNITS[state.factionId] || [];
  const unit = factionUnits.find(u => u.id === unitId);
  if (!unit) return;

  const hasOptions = unit.options && unit.options.length > 0;
  const hasPpm = !!(unit.ppm && unit.ppm > 0);

  // Units without options or per-model cost: just stack qty (multiple unit copies)
  if (!hasOptions && !hasPpm) {
    const existing = state.roster.find(r => r.unitId === unitId);
    if (existing) { existing.qty++; renderRoster(); updateTotalPoints(); renderForceOrg(); return; }
  }

  // Build default selections
  const selections = {};
  let optionPts = 0;
  if (unit.options) {
    unit.options.forEach(opt => {
      const def = opt.choices.find(c => c.default) || opt.choices[0];
      selections[opt.group] = def.label;
      optionPts += def.pts;
    });
  }

  const instanceId = (hasOptions || hasPpm) ? unitId + '_' + Date.now() : unitId;
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
    wargear: [...unit.wargear],
    hasOptions: !!unit.options,
    options: unit.options || [],
    abilities: unit.abilities || [],
    notes: unit.notes || null,
  });

  renderRoster();
  updateTotalPoints();
  renderForceOrg();
}

function changeLoadout(instanceId, group, label, pts) {
  const entry = state.roster.find(r => r.unitId === instanceId);
  if (!entry) return;
  // Find old pts for this group
  const opt = entry.options.find(o => o.group === group);
  if (!opt) return;
  const oldChoice = opt.choices.find(c => c.label === entry.selections[group]);
  const oldPts = oldChoice ? oldChoice.pts : 0;
  entry.selections[group] = label;
  entry.optionPts = (entry.optionPts - oldPts) + pts;
  updateTotalPoints();
  // Re-render just the pts display without full re-render to avoid losing focus
  const ptsEl = document.getElementById('upts_' + instanceId);
  if (ptsEl) ptsEl.textContent = ((entry.basePoints + entry.optionPts) * entry.qty) + ' pts';
  const secPtsEl = document.getElementById('secpts_' + instanceId);
  if (secPtsEl) {
    const role = entry.role;
    // recalc section pts
    const rolePts = state.roster.filter(u => u.role === role).reduce((s,u) => s + (u.basePoints + u.optionPts) * u.qty, 0);
    document.querySelectorAll('[data-role-pts="' + role + '"]').forEach(el => el.textContent = rolePts + ' pts');
  }
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

function toggleWargear(unitId, wg) {
  // Wargear toggle is visual/informational in this builder
  const el = event.target;
  el.classList.toggle('active');
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
            optionsHtml += `<button class="loadout-btn ${isSelected ? 'selected' : ''}"
              onclick="changeLoadout('${u.unitId}','${opt.group}','${choice.label}',${choice.pts}); renderRoster(); updateTotalPoints();">
              ${choice.label}${ptsLabel ? `<span class="loadout-pts">${ptsLabel}</span>` : ''}
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
              <div class="qty-control">
                <button class="qty-btn" onclick="changeQty('${u.unitId}', -1)">−</button>
                <span class="qty-value">${u.qty}</span>
                <button class="qty-btn" onclick="changeQty('${u.unitId}', 1)">+</button>
              </div>
              <div class="roster-unit-pts" id="upts_${safeId}">${totalPts} pts</div>
              <button class="remove-btn" onclick="removeUnit('${u.unitId}')" title="Remove">✕</button>
            </div>
          </div>
          ${modelHtml}
          ${optionsHtml}
          ${notesHtml}
          <div class="wargear-list">
            ${u.wargear.map(wg => `<span class="wargear-tag active">${wg}</span>`).join('')}
          </div>
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
  let lines = [
    `=== ${state.armyName || 'Unnamed Army'} ===`,
    `Faction: ${faction ? faction.name : 'None'}`,
    `Detachment: ${document.getElementById('detachmentType').options[document.getElementById('detachmentType').selectedIndex].text}`,
    `Points: ${total} / ${state.ptsLimit}`,
    '',
  ];

  const grouped = {};
  ROLES.forEach(r => grouped[r] = []);
  state.roster.forEach(u => (grouped[u.role] || grouped['Elites']).push(u));

  ROLES.forEach(role => {
    const units = grouped[role];
    if (!units.length) return;
    lines.push(`[ ${role.toUpperCase()} ]`);
    units.forEach(u => {
      lines.push(`  × ${u.qty}  ${u.name} [${u.models||1} models]  (${((u.basePoints+(u.optionPts||0))+(u.ppm||0)*Math.max(0,(u.models||1)-(u.minModels||1)))*u.qty} pts)`);
      if (u.wargear.length) lines.push(`       Wargear: ${u.wargear.join(', ')}`);
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

      let loadoutLines = [];
      if (u.selections && Object.keys(u.selections).length) {
        Object.entries(u.selections).forEach(([grp, choice]) => {
          loadoutLines.push(`<span class="loadout-item"><b>${grp}:</b> ${choice}</span>`);
        });
      }
      const loadoutHtml = loadoutLines.length ? `<div class="loadout-row">${loadoutLines.join('')}</div>` : '';
      const wargearHtml = u.wargear.length ? `<div class="wargear-row"><b>Wargear:</b> ${u.wargear.join(', ')}</div>` : '';
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
  .abilities-print { padding:4px 8px; border-top:1px solid #eee; }
  .ability-print-item { font-size:10px; color:#333; padding:2px 0 2px 8px; border-left:2px solid #2a6e3a; margin-bottom:2px; line-height:1.4; }
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
// START
// ============================================================
init();
