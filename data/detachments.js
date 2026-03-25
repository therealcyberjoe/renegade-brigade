const ROLES = ['HQ', 'Troops', 'Elites', 'Fast Attack', 'Heavy Support', 'Flyer', 'Lord of War', 'Dedicated Transport', 'Fortification'];

const ROLE_SHORT = { 'HQ':'HQ', 'Troops':'TR', 'Elites':'EL', 'Fast Attack':'FA', 'Heavy Support':'HS', 'Flyer':'FLY', 'Lord of War':'LOW', 'Dedicated Transport':'DT', 'Fortification':'FORT' };

const ROLE_TO_SLOT = {
  'HQ':'hq','Troops':'troops','Elites':'elites','Fast Attack':'fast',
  'Heavy Support':'heavy','Flyer':'flyer','Lord of War':'lord',
  'Dedicated Transport':'dedicated','Fortification':'fortification'
};

const DETACHMENT_RULES = {
  battalion: { cp: 5, hq: [2,3], troops: [3,6], elites: [0,6], fast: [0,3], heavy: [0,3], flyer: [0,2], dedicated: [0,'∞'], lord: [0,0], fortification: [0,0] },
  brigade: { cp: 9, hq: [3,5], troops: [6,12], elites: [3,8], fast: [3,8], heavy: [3,8], flyer: [0,2], dedicated: [0,'∞'], lord: [0,0], fortification: [0,0] },
  patrol: { cp: 0, hq: [1,2], troops: [1,3], elites: [0,2], fast: [0,2], heavy: [0,2], flyer: [0,1], dedicated: [0,'∞'], lord: [0,0], fortification: [0,0] },
  outrider: { cp: 1, hq: [1,2], troops: [0,3], elites: [0,3], fast: [3,'∞'], heavy: [0,3], flyer: [0,2], dedicated: [0,'∞'], lord: [0,0], fortification: [0,0] },
  spearhead: { cp: 1, hq: [1,2], troops: [0,3], elites: [0,3], fast: [0,3], heavy: [3,'∞'], flyer: [0,2], dedicated: [0,'∞'], lord: [0,0], fortification: [0,0] },
  vanguard: { cp: 1, hq: [1,2], troops: [0,3], elites: [3,'∞'], fast: [0,3], heavy: [0,3], flyer: [0,2], dedicated: [0,'∞'], lord: [0,0], fortification: [0,0] },
  supreme: { cp: 1, hq: [3,5], troops: [0,0], elites: [0,0], fast: [0,0], heavy: [0,0], flyer: [0,0], dedicated: [0,0], lord: [0,3], fortification: [0,0] },
  superheavy: { cp: 1, hq: [0,0], troops: [0,0], elites: [0,0], fast: [0,0], heavy: [0,0], flyer: [0,0], dedicated: [0,0], lord: [3,5], fortification: [0,0] },
  airwing: { cp: 1, hq: [0,0], troops: [0,0], elites: [0,0], fast: [0,0], heavy: [0,0], flyer: [3,5], dedicated: [0,0], lord: [0,3], fortification: [0,0] },
  superheavyauxiliary: { cp: 1, hq: [0,0], troops: [0,0], elites: [0,0], fast: [0,0], heavy: [0,0], flyer: [0,0], dedicated: [0,0], lord: [1,1], fortification: [0,0] },
  fortificationnetwork: { cp: 1, hq: [0,0], troops: [0,0], elites: [0,0], fast: [0,0], heavy: [0,0], flyer: [0,0], dedicated: [0,0], lord: [0,0], fortification: [1,3] },
  auxiliary: { cp: -1, hq: [0,0], troops: [0,0], elites: [0,0], fast: [0,0], heavy: [0,0], flyer: [0,0], dedicated: [0,0], lord: [0,0], fortification: [0,0] },
};

const NAMED_CHAR_FACTION_MAP = {
  'space_marines_named': 'space_marines',
  'astra_militarum_named': 'astra_militarum',
  'orks_named': 'orks',
  'space_wolves_named': 'space_wolves',
  'blood_angels_named': 'blood_angels',
  'tyranids_named': 'tyranids',
  'necrons_named': 'necrons',
  'chaos_space_marines_named': 'chaos_space_marines',
  'eldar_named': 'eldar',
  'dark_angels_named': 'dark_angels',
  'adeptus_mechanicus_named': 'adeptus_mechanicus',
  'sisters_of_battle_named': 'sisters_of_battle',
  'genestealer_cults_named': 'genestealer_cults',
  'chaos_daemons_named': 'chaos_daemons',
};
