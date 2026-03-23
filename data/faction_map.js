// Maps faction IDs to their unit array constants
const FACTION_UNIT_MAP = {
  'space_marines': FACTION_SPACE_MARINES,
  'astra_militarum': FACTION_ASTRA_MILITARUM,
  'chaos_space_marines': FACTION_CHAOS_SPACE_MARINES,
  'tyranids': FACTION_TYRANIDS,
  'necrons': FACTION_NECRONS,
  'orks': FACTION_ORKS,
  'eldar': FACTION_ELDAR,
  'tau': FACTION_TAU,
  'dark_eldar': FACTION_DARK_ELDAR,
  'chaos_daemons': FACTION_CHAOS_DAEMONS,
  'blood_angels': FACTION_BLOOD_ANGELS,
  'dark_angels': FACTION_DARK_ANGELS,
  'space_wolves': FACTION_SPACE_WOLVES,
  'grey_knights': FACTION_GREY_KNIGHTS,
  'deathwatch': FACTION_DEATHWATCH,
  'adeptus_mechanicus': FACTION_ADEPTUS_MECHANICUS,
  'sisters_of_battle': FACTION_SISTERS_OF_BATTLE,
  'adeptus_custodes': FACTION_ADEPTUS_CUSTODES,
  'imperial_knights': FACTION_IMPERIAL_KNIGHTS,
  'genestealer_cults': FACTION_GENESTEALER_CULTS,
  'thousand_sons': FACTION_THOUSAND_SONS,
  'death_guard': FACTION_DEATH_GUARD,
  'world_eaters': FACTION_WORLD_EATERS,
  'emperors_children': FACTION_EMPERORS_CHILDREN,
  'black_templars': FACTION_BLACK_TEMPLARS,
  'kroot_hunting_pack': FACTION_KROOT_HUNTING_PACK,
  'leagues_of_votann': FACTION_LEAGUES_OF_VOTANN,
};

// Build UNITS object from new faction files (replaces old UNITS data)
const UNITS = {};
Object.entries(FACTION_UNIT_MAP).forEach(([id, arr]) => { if (arr) UNITS[id] = arr; });