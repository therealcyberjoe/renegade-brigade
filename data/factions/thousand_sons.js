// Must be loaded AFTER csm_shared.js
const FACTION_THOUSAND_SONS = [
  ...CSM_SHARED_UNITS,

  { id:'ts_magnus', name:'Magnus the Red',
    stats:['16"','2+','2+','8','8','18','7','10','4+'], role:'Lord of War', pts:415, min:1, max:1, ppm:0, unique:true,
    wargear:['Blade of Magnus','Gaze of Magnus'],
    abilities:['Daemonic: 4+ invulnerable save','Psyker: Mastery Level 5',
               'Towering Sorcerer: Friendly Thousand Sons within 9" re-roll hit rolls of 1',
               'Lord of the Thousand Sons: Friendly Thousand Sons may re-roll failed Psychic tests within 6"',
               'Thousand Sons only'] },

  { id:'ts_ahriman', name:'Ahriman on Disc of Tzeentch',
    stats:['16"','3+','3+','4','4','5','3','9','3+'], role:'HQ', pts:175, min:1, max:1, ppm:0, unique:true,
    wargear:['Black Staff of Ahriman','Inferno Bolt Pistol'],
    abilities:['Psyker: Mastery Level 3','4+ invulnerable save',
               'Vessel of Chaos: Re-roll all Psychic tests',
               'Ether Walk: Once per turn teleport up to 18" instead of moving normally'] },

  { id:'ts_ahriman_foot', name:'Ahriman on Foot',
    stats:['6"','3+','3+','4','4','5','3','9','3+'], role:'HQ', pts:165, min:1, max:1, ppm:0, unique:true, isNew:true,
    wargear:['Black Staff of Ahriman','Inferno Bolt Pistol'],
    abilities:['Psyker: Mastery Level 3','4+ invulnerable save',
               'Vessel of Chaos: Re-roll all Psychic tests',
               'Ether Walk: Once per turn teleport up to 18" instead of moving'] },

  { id:'ts_sorcerer', name:'Sorcerer in Terminator Armour',
    stats:['5"','3+','3+','4','4','4','3','9','2+'], role:'HQ', pts:110, min:1, max:1, ppm:0,
    wargear:['Force Stave','Combi-Melta'],
    abilities:['Psyker: Mastery Level 1','Terminator Armour: 5+ invulnerable save',
               'Teleport Strike: Deep strike — arrive 9"+ from enemy'] },

  { id:'ts_infernal_master', name:'Infernal Master',
    stats:['6"','3+','3+','3','3','4','3','9','3+'], role:'HQ', pts:90, min:1, max:1, ppm:0, isNew:true,
    wargear:['Force Stave','Bolt Pistol'],
    abilities:['Psyker: Mastery Level 1 — knows Smite + 1 Tzeentch power',
               'Malefic Pacts: Once per turn — grant +1AP to melee weapons OR +1 to Psychic tests for a friendly unit within 6"',
               'Warpflame Bodyguard: While within 3" of a friendly Rubric Marines unit — 4+ invulnerable save'] },

  { id:'ts_rubric_marines', name:'Rubric Marines',
    stats:['5"','3+','3+','4','4','1','1','9','3+'], role:'Troops', pts:75, min:5, max:20, ppm:15,
    wargear:[],
    composition:[
      { role:'Aspiring Sorcerer', count:1, wargear:['Inferno Bolt Pistol','Force Sword'],
        options:[
          { group:'Melee', choices:[
            { label:'Force Sword',   pts:0, default:true, weapons:['Force Sword'] },
            { label:'Force Axe',     pts:0, weapons:['Force Axe'],   replaces:['Force Sword'] },
            { label:'Force Staff',   pts:0, weapons:['Force Staff'], replaces:['Force Sword'] },
          ]},
        ]},
      { role:'Special Weapon (up to 4)', count:4, wargear:['Inferno Boltgun'],
        options:[
          { group:'Weapon', choices:[
            { label:'Inferno Boltgun',  pts:0, default:true, weapons:['Inferno Boltgun'] },
            { label:'Warpflame Pistol + Sword', pts:0, weapons:['Warpflame','Inferno Bolt Pistol'], replaces:['Inferno Boltgun'] },
            { label:'Soulreaper Cannon',pts:5, weapons:['Soul Reaper Cannon'], replaces:['Inferno Boltgun'] },
          ]},
        ]},
    ],
    abilities:['Sanctic Fortitude: Auto-pass Morale',
               'Daemonic: 5+ invulnerable save',
               'All is Dust: +1 to save against damage 1 weapons'] },

  { id:'ts_tzaangors', name:'Tzaangors',
    stats:['6"','3+','4+','4','4','1','2','7','5+'], role:'Troops', pts:70, min:10, max:30, ppm:7,
    wargear:[],
    composition:[
      { role:'Twistbray', count:1, wargear:['Tzaangor Blades','Autopistol'],
        options:[
          { group:'Melee', choices:[
            { label:'Tzaangor Blades', pts:0, default:true, weapons:['Tzaangor Blades'] },
            { label:'Great Blade',     pts:2, weapons:['Great Blade'], replaces:['Tzaangor Blades'] },
          ]},
        ]},
      { role:'Tzaangor', count:9, wargear:['Tzaangor Blades','Autopistol'] },
    ],
    abilities:['Daemonic Arrogance: 6+ invulnerable save',
               'Anarchy and Mayhem: Add 1 to hit rolls if there are more models in this unit than in target enemy unit'] },

  { id:'ts_scarab_occult', name:'Scarab Occult Terminators',
    stats:['5"','3+','3+','4','4','2','2','9','2+'], role:'Elites', pts:165, min:5, max:10, ppm:33,
    wargear:[],
    composition:[
      { role:'Scarab Occult Sorcerer', count:1, wargear:['Inferno Combi-Bolter','Force Sword'],
        options:[
          { group:'Melee', choices:[
            { label:'Force Sword', pts:0, default:true, weapons:['Force Sword'] },
            { label:'Khopesh',     pts:0, weapons:['Khopesh'],   replaces:['Force Sword'] },
            { label:'Force Axe',   pts:0, weapons:['Force Axe'], replaces:['Force Sword'] },
          ]},
          { group:'Ranged', choices:[
            { label:'Inferno Combi-Bolter', pts:0, default:true },
            { label:'Soulreaper Cannon',    pts:5, weapons:['Soul Reaper Cannon'], replaces:['Inferno Combi-Bolter'] },
          ]},
        ]},
      { role:'Terminator', count:4, wargear:['Inferno Combi-Bolter','Khopesh'],
        options:[
          { group:'Ranged', choices:[
            { label:'Inferno Combi-Bolter', pts:0, default:true },
            { label:'Soulreaper Cannon',    pts:5, weapons:['Soul Reaper Cannon'], replaces:['Inferno Combi-Bolter'] },
          ]},
        ]},
    ],
    abilities:['Sanctic Fortitude: Auto-pass Morale','Terminator Armour: 5+ invulnerable save',
               'All is Dust: +1 to save against damage 1 weapons',
               'Teleport Strike: Deep strike — arrive 9"+ from enemy'] },

  { id:'ts_exalted_sorcerers', name:'Exalted Sorcerers',
    stats:['16"','3+','3+','4','4','4','3','9','3+'], role:'Elites', pts:120, min:1, max:3, ppm:120,
    wargear:['Force Stave','Inferno Bolt Pistol'],
    abilities:['Psyker: Mastery Level 1','4+ invulnerable save',
               'Disc of Tzeentch: Fly keyword — 16" Move'] },

  // ── ADDITIONAL TS UNITS ──────────────────────────────────────────────
  { id:'ts_daemon_prince', name:'Daemon Prince of Tzeentch',
    stats:['8"','2+','2+','5','5','8','4','10','3+'], role:'HQ', pts:165, min:1, max:1, ppm:0,
    wargear:['Daemonic Axe','Malefic Talon'],
    options:[
      { group:'Wings', choices:[
        { label:'No Wings',  pts:0,  default:true },
        { label:'Wings',     pts:30, weapons:['Wings'] },
      ]},
    ],
    abilities:['Daemonic: 5+ invulnerable save',
               'Psyker: Mastery Level 2 — knows Smite + 2 Tzeentch powers',
               'Warp Touched: At start of each Psychic phase roll D6 — on 1 suffer 1 mortal wound — on 6 immediately manifest one extra psychic power'] },

  { id:'ts_spawn', name:'Chaos Spawn of Tzeentch',
    stats:['6"','4+','4+','5','5','5','D6','7','5+'], role:'Fast Attack', pts:23, min:1, max:5, ppm:23,
    wargear:['Hideous Mutations'],
    abilities:['Writhing Tentacles: Roll D3 at start of each Fight phase — this model gains that many additional attacks',
               'Fearless: Auto-pass Morale tests',
               'Tzeentch keyword: Counts as Thousand Sons for all abilities'] },

  { id:'ts_tzaangor_shaman', name:'Tzaangor Shaman',
    stats:['9"','3+','3+','4','4','5','3','8','5+'], role:'HQ', pts:135, min:1, max:1, ppm:0,
    wargear:['Force Stave','Bolt Pistol','Disc of Tzeentch'],
    abilities:['Daemonic: 5+ invulnerable save',
               'Psyker: Mastery Level 2 — knows Smite + 2 Tzeentch powers',
               'Herd of the Damned: Friendly Tzaangors within 9" re-roll failed hit rolls of 1',
               'Mutant Overseer: Once per game — one Tzaangor unit within 6" may immediately fight again at end of Fight phase'] },

  { id:'ts_tzaangor_enlightened', name:'Tzaangor Enlightened',
    stats:['9"','3+','3+','4','4','2','2','7','5+'], role:'Fast Attack', pts:60, min:3, max:9, ppm:20,
    wargear:[],
    composition:[
      { role:'Tzaangor Enlightened', count:3, wargear:['Divining Spear','Disc of Tzeentch'] },
    ],
    abilities:['Daemonic: 5+ invulnerable save',
               'Guided by the Past: Re-roll all failed hit rolls against any unit that has already been targeted this turn',
               'Disc of Tzeentch: 9" Move — Fly'] },

  { id:'ts_tzaangor_skyfires', name:'Tzaangor Skyfires',
    stats:['9"','3+','3+','4','4','2','2','7','5+'], role:'Fast Attack', pts:80, min:3, max:9, ppm:27,
    wargear:[],
    composition:[
      { role:'Tzaangor Skyfire', count:3, wargear:['Fatecaster Greatbow','Disc of Tzeentch'] },
    ],
    abilities:['Daemonic: 5+ invulnerable save',
               'Unnatural Prescience: Re-roll failed hit rolls — unmodified hit rolls of 6 deal 1 mortal wound in addition',
               'Disc of Tzeentch: 9" Move — Fly'] },

];
