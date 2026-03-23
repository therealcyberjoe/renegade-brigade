// Kroot Hunting Pack — filters Kroot units from FACTION_TAU
// Must be loaded AFTER tau.js
const KROOT_UNIT_IDS = new Set([
  'tau_war_shaper',
  'tau_flesh_shaper',
  'tau_trail_shaper',
  'tau_lone_spear',
  'tau_kroot_carnivores',
  'tau_farstalkers',
  'tau_krootox_riders',
  'tau_krootox_rampagers',
]);

const FACTION_KROOT_HUNTING_PACK = FACTION_TAU.filter(u => KROOT_UNIT_IDS.has(u.id));
