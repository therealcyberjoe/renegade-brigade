// Shared Space Marines units — available to all Adeptus Astartes factions
// Sub-factions load this file and spread it into their own array
// Must be loaded AFTER space_marines.js

const SM_SHARED_UNITS = [
  // ── HQ ──────────────────────────────────────────────────────────────
  { id:'sm_captain', name:'Captain',
    stats:['6"','3+','3+','4','4','5','4','9','3+'], role:'HQ', pts:74, min:1, max:1, ppm:0,
    wargear:['Power Sword','Bolt Pistol'],
    options:[
      { group:'Melee', choices:[
        { label:'Power Sword',   pts:0, default:true, weapons:['Power Sword'],   replaces:['Power Sword'] },
        { label:'Power Axe',     pts:0,               weapons:['Power Axe'],     replaces:['Power Sword'] },
        { label:'Power Fist',    pts:5,               weapons:['Power Fist'],    replaces:['Power Sword'] },
        { label:'Thunder Hammer',pts:8,               weapons:['Thunder Hammer'],replaces:['Power Sword'] },
        { label:'Relic Blade',   pts:5,               weapons:['Relic Blade'],   replaces:['Power Sword'] },
        { label:'Chainsword',    pts:0,               weapons:['Chainsword'],    replaces:['Power Sword'] },
      ]},
      { group:'Ranged', choices:[
        { label:'Bolt Pistol',   pts:0, default:true, weapons:['Bolt Pistol'],   replaces:['Bolt Pistol'] },
        { label:'Plasma Pistol', pts:5,               weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
        { label:'Storm Bolter',  pts:2,               weapons:['Storm Bolter'],  replaces:['Bolt Pistol'] },
        { label:'Combi-melta',   pts:10,              weapons:['Combi-melta'],   replaces:['Bolt Pistol'] },
      ]},
    ],
    abilities:['And They Shall Know No Fear','Iron Halo: 4+ invulnerable save',
               'Rites of Battle: Re-roll hit rolls of 1 for friendly <Chapter> units within 6"'] },

  { id:'sm_captain_gravis', name:'Captain in Gravis Armour',
    stats:['5"','3+','3+','4','5','6','4','9','3+'], role:'HQ', pts:100, min:1, max:1, ppm:0, isNew:true,
    wargear:['Master-crafted Boltstorm Gauntlet','Flail of the Unforgiven'],
    abilities:['And They Shall Know No Fear','Iron Halo: 4+ invulnerable save',
               'Rites of Battle: Re-roll hit rolls of 1 for friendly <Chapter> units within 6"'] },

  { id:'sm_librarian', name:'Librarian',
    stats:['6"','3+','3+','4','4','5','3','9','3+'], role:'HQ', pts:90, min:1, max:1, ppm:0,
    wargear:['Force Sword','Bolt Pistol'],
    options:[
      { group:'Force Weapon', choices:[
        { label:'Force Sword',  pts:0, default:true, weapons:['Force Sword'],  replaces:['Force Sword'] },
        { label:'Force Axe',   pts:0,                weapons:['Force Axe'],   replaces:['Force Sword'] },
        { label:'Force Staff', pts:0,                weapons:['Force Staff'], replaces:['Force Sword'] },
      ]},
      { group:'Sidearm', choices:[
        { label:'Bolt Pistol',   pts:0, default:true, weapons:['Bolt Pistol'],   replaces:['Bolt Pistol'] },
        { label:'Plasma Pistol', pts:5,               weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
      ]},
    ],
    abilities:['And They Shall Know No Fear','Psyker: Mastery Level 1 — Smite + 1 power',
               'Psychic Hood: Deny the Witch on 2D6+1'] },

  { id:'sm_librarian_phobos', name:'Librarian in Phobos Armour',
    stats:['6"','3+','3+','4','4','5','3','9','3+'], role:'HQ', pts:105, min:1, max:1, ppm:0, isNew:true,
    wargear:['Force Sword','Bolt Pistol','Camo Cloak'],
    abilities:['And They Shall Know No Fear','Psyker: Mastery Level 1',
               'Shrouded: Always counts as in cover',
               'Shoot and Fade: After shooting this model may move up to 6"',
               'Scramble the Runes: Enemy Psykers within 18" subtract 1 from Psychic tests'] },

  { id:'sm_chaplain', name:'Chaplain',
    stats:['6"','3+','3+','4','4','5','4','9','3+'], role:'HQ', pts:85, min:1, max:1, ppm:0,
    wargear:['Crozius Arcanum','Bolt Pistol','Rosarius'],
    abilities:['And They Shall Know No Fear','Rosarius: 4+ invulnerable save',
               'Litanies of Battle: Choose one litany per turn to buff nearby units'] },

  { id:'sm_chaplain_terminator', name:'Chaplain in Terminator Armour',
    stats:['5"','3+','3+','4','4','5','4','9','2+'], role:'HQ', pts:100, min:1, max:1, ppm:0, isNew:true,
    wargear:['Crozius Arcanum','Storm Bolter'],
    abilities:['And They Shall Know No Fear','Terminator Armour: 5+ invulnerable save',
               'Litanies of Battle',
               'Teleport Strike: Deep strike — arrive 9"+ from enemy'] },

  { id:'sm_chaplain_bike', name:'Chaplain on Bike',
    stats:['14"','3+','3+','4','5','6','4','9','3+'], role:'HQ', pts:110, min:1, max:1, ppm:0, isNew:true,
    wargear:['Crozius Arcanum','Twin Bolt Gun','Rosarius'],
    abilities:['And They Shall Know No Fear','Rosarius: 4+ invulnerable save',
               'Litanies of Battle','Turbo-boost: Advance and charge same turn'] },

  { id:'sm_techmarine', name:'Techmarine',
    stats:['6"','3+','3+','4','4','4','2','8','3+'], role:'HQ', pts:55, min:1, max:1, ppm:0,
    wargear:['Servo-arm','Boltgun','Power Axe'],
    abilities:['And They Shall Know No Fear',
               'Blessing of the Omnissiah: Restore D3 wounds to one friendly Vehicle within 1"',
               'Bolster Defences: Once per game one terrain piece gains +1 cover'] },

  { id:'sm_primaris_lt', name:'Primaris Lieutenant',
    stats:['6"','3+','3+','4','4','5','4','8','3+'], role:'HQ', pts:68, min:1, max:1, ppm:0, isNew:true,
    wargear:['Power Sword','Auto Bolt Rifle'],
    abilities:['And They Shall Know No Fear',
               'Tactical Precision: Friendly <Chapter> Core within 6" re-roll wound rolls of 1'] },

  { id:'sm_ancient', name:'Primaris Ancient',
    stats:['6"','3+','3+','4','4','4','3','8','3+'], role:'HQ', pts:65, min:1, max:1, ppm:0, isNew:true,
    wargear:['Bolt Rifle','Bolt Pistol','Chapter Banner'],
    abilities:['And They Shall Know No Fear',
               'Chapter Banner: Friendly <Chapter> units within 6" re-roll hit rolls of 1',
               'Astartes Banner: When a friendly unit within 6" is destroyed roll D6 — on 4+ one model returns with 1 wound'] },

  // ── TROOPS ──────────────────────────────────────────────────────────
  { id:'sm_tactical', name:'Tactical Squad',
    stats:['6"','3+','3+','4','4','1','1','7','3+'], role:'Troops', pts:65, min:5, max:10, ppm:13,
    wargear:[],
    composition:[
      { role:'Sergeant', count:1, wargear:['Boltgun','Bolt Pistol','Frag & Krak Grenades'],
        options:[
          { group:'Melee', choices:[
            { label:'None',          pts:0, default:true },
            { label:'Chainsword',    pts:0, weapons:['Chainsword'],  replaces:[] },
            { label:'Power Sword',   pts:4, weapons:['Power Sword'], replaces:['Boltgun'] },
            { label:'Power Axe',     pts:5, weapons:['Power Axe'],   replaces:['Boltgun'] },
            { label:'Power Fist',    pts:9, weapons:['Power Fist'],  replaces:['Boltgun'] },
          ]},
          { group:'Sidearm', choices:[
            { label:'Bolt Pistol',   pts:0, default:true, weapons:['Bolt Pistol'] },
            { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
          ]},
        ]},
      { role:'Special Weapon', count:1, wargear:['Boltgun','Bolt Pistol','Frag & Krak Grenades'],
        options:[
          { group:'Special', choices:[
            { label:'Boltgun',    pts:0, default:true, weapons:['Boltgun'] },
            { label:'Flamer',     pts:0, weapons:['Flamer'],     replaces:['Boltgun'] },
            { label:'Meltagun',   pts:0, weapons:['Meltagun'],   replaces:['Boltgun'] },
            { label:'Plasma Gun', pts:0, weapons:['Plasma Gun'], replaces:['Boltgun'] },
            { label:'Grav-Gun',   pts:0, weapons:['Grav-Gun'],   replaces:['Boltgun'] },
          ]},
        ]},
      { role:'Heavy Weapon', count:1, wargear:['Heavy Bolter','Bolt Pistol','Frag & Krak Grenades'],
        options:[
          { group:'Heavy', choices:[
            { label:'Heavy Bolter',     pts:0, default:true, weapons:['Heavy Bolter'] },
            { label:'Lascannon',        pts:0, weapons:['Lascannon'],        replaces:['Heavy Bolter'] },
            { label:'Multi-melta',      pts:0, weapons:['Multi-melta'],      replaces:['Heavy Bolter'] },
            { label:'Plasma Cannon',    pts:0, weapons:['Plasma Cannon'],    replaces:['Heavy Bolter'] },
            { label:'Missile Launcher', pts:0, weapons:['Missile Launcher'], replaces:['Heavy Bolter'] },
          ]},
        ]},
      { role:'Trooper', count:7, wargear:['Boltgun','Bolt Pistol','Frag & Krak Grenades'] },
    ],
    abilities:['And They Shall Know No Fear','Combat Squads: May split into two units of 5'] },

  { id:'sm_scout', name:'Scout Squad',
    stats:['6"','3+','3+','4','4','1','1','7','4+'], role:'Troops', pts:55, min:5, max:10, ppm:11,
    wargear:[],
    composition:[
      { role:'Scout Sergeant', count:1, wargear:['Scout Bolters','Bolt Pistol','Combat Knife'],
        options:[
          { group:'Melee', choices:[
            { label:'Combat Knife', pts:0, default:true },
            { label:'Chainsword',   pts:0, weapons:['Chainsword'], replaces:[] },
            { label:'Power Sword',  pts:4, weapons:['Power Sword'], replaces:['Scout Bolters'] },
            { label:'Power Fist',   pts:9, weapons:['Power Fist'],  replaces:['Scout Bolters'] },
          ]},
          { group:'Ranged', choices:[
            { label:'Scout Bolters', pts:0, default:true },
            { label:'Bolt Pistol',   pts:0, weapons:['Bolt Pistol'], replaces:['Scout Bolters'] },
            { label:'Combi-melta',   pts:10, weapons:['Combi-melta'], replaces:['Scout Bolters'] },
          ]},
        ]},
      { role:'Heavy Weapon (1)', count:1, wargear:['Heavy Bolter','Bolt Pistol'],
        options:[
          { group:'Heavy', choices:[
            { label:'Heavy Bolter',     pts:0, default:true, weapons:['Heavy Bolter'] },
            { label:'Missile Launcher', pts:0, weapons:['Missile Launcher'], replaces:['Heavy Bolter'] },
            { label:'Lascannon',        pts:0, weapons:['Lascannon'],        replaces:['Heavy Bolter'] },
          ]},
        ]},
      { role:'Sniper (opt)', count:1, wargear:['Scout Bolters','Bolt Pistol'],
        options:[
          { group:'Weapon', choices:[
            { label:'Scout Bolters',      pts:0, default:true },
            { label:'Scout Sniper Rifle', pts:0, weapons:['Scout Sniper Rifle'], replaces:['Scout Bolters'] },
            { label:'Shotgun',            pts:0, weapons:['Shotgun'],            replaces:['Scout Bolters'] },
          ]},
        ]},
      { role:'Scout', count:2, wargear:['Scout Bolters','Bolt Pistol','Combat Knife'],
        options:[
          { group:'Weapon', choices:[
            { label:'Scout Bolters',      pts:0, default:true },
            { label:'Scout Sniper Rifle', pts:0, weapons:['Scout Sniper Rifle'], replaces:['Scout Bolters'] },
            { label:'Shotgun',            pts:0, weapons:['Shotgun'],            replaces:['Scout Bolters'] },
          ]},
        ]},
    ],
    abilities:['And They Shall Know No Fear',
               'Scouts: Move up to 6" before first battle round',
               'Combat Squads: May split into two units of 5'] },

  { id:'sm_intercessors', name:'Intercessor Squad',
    stats:['6"','3+','3+','4','4','2','2','7','3+'], role:'Troops', pts:85, min:5, max:10, ppm:17,
    wargear:[],
    composition:[
      { role:'Sergeant', count:1, wargear:['Bolt Rifle','Bolt Pistol','Frag & Krak Grenades'],
        options:[
          { group:'Bolt Rifle', choices:[
            { label:'Bolt Rifle',        pts:0, default:true, weapons:['Bolt Rifle'] },
            { label:'Auto Bolt Rifle',   pts:0, weapons:['Auto Bolt Rifle'],  replaces:['Bolt Rifle'] },
            { label:'Stalker Bolt Rifle',pts:0, weapons:['Stalker Bolt Rifle'],replaces:['Bolt Rifle'] },
          ]},
          { group:'Melee', choices:[
            { label:'None',          pts:0, default:true },
            { label:'Chainsword',    pts:0, weapons:['Chainsword'],   replaces:[] },
            { label:'Power Sword',   pts:4, weapons:['Power Sword'],  replaces:['Bolt Pistol'] },
            { label:'Power Fist',    pts:9, weapons:['Power Fist'],   replaces:['Bolt Pistol'] },
            { label:'Thunder Hammer',pts:12,weapons:['Thunder Hammer'],replaces:['Bolt Pistol'] },
          ]},
          { group:'Sidearm', choices:[
            { label:'Bolt Pistol',   pts:0, default:true, weapons:['Bolt Pistol'] },
            { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
            { label:'Hand Flamer',   pts:3, weapons:['Hand Flamer'],   replaces:['Bolt Pistol'] },
          ]},
        ]},
      { role:'Aux Grenade Launcher (1)', count:1, wargear:['Bolt Rifle','Bolt Pistol','Frag & Krak Grenades','Auxiliary Grenade Launcher'],
        options:[
          { group:'Bolt Rifle', choices:[
            { label:'Bolt Rifle',         pts:0, default:true, weapons:['Bolt Rifle'] },
            { label:'Auto Bolt Rifle',    pts:0, weapons:['Auto Bolt Rifle'],   replaces:['Bolt Rifle'] },
            { label:'Stalker Bolt Rifle', pts:0, weapons:['Stalker Bolt Rifle'],replaces:['Bolt Rifle'] },
          ]},
        ]},
      { role:'Intercessor', count:3, wargear:['Bolt Rifle','Bolt Pistol','Frag & Krak Grenades'],
        options:[
          { group:'Bolt Rifle', choices:[
            { label:'Bolt Rifle',         pts:0, default:true, weapons:['Bolt Rifle'] },
            { label:'Auto Bolt Rifle',    pts:0, weapons:['Auto Bolt Rifle'],   replaces:['Bolt Rifle'] },
            { label:'Stalker Bolt Rifle', pts:0, weapons:['Stalker Bolt Rifle'],replaces:['Bolt Rifle'] },
          ]},
        ]},
    ],
    abilities:['And They Shall Know No Fear','Combat Squads: May split into two units of 5'] },

  // ── ELITES ──────────────────────────────────────────────────────────
  { id:'sm_terminators', name:'Terminator Squad',
    stats:['5"','3+','3+','4','4','2','2','8','2+'], role:'Elites', pts:195, min:5, max:10, ppm:39,
    wargear:[],
    composition:[
      { role:'Terminator Sergeant', count:1, wargear:['Storm Bolter','Power Sword','Terminator Armour'],
        options:[
          { group:'Melee', choices:[
            { label:'Power Sword',    pts:0, default:true, weapons:['Power Sword'],    replaces:['Power Fist'] },
            { label:'Power Fist',     pts:0,               weapons:['Power Fist'],     replaces:['Power Sword'] },
            { label:'Thunder Hammer', pts:5,               weapons:['Thunder Hammer'], replaces:['Power Sword'] },
            { label:'Lightning Claw', pts:0,               weapons:['Lightning Claw'], replaces:['Power Sword'] },
          ]},
          { group:'Ranged', choices:[
            { label:'Storm Bolter',  pts:0, default:true, weapons:['Storm Bolter'] },
            { label:'Combi-melta',   pts:10, weapons:['Combi-melta'], replaces:['Storm Bolter'] },
          ]},
        ]},
      { role:'Heavy Weapon (1)', count:1, wargear:['Cyclone Missile Launcher','Storm Bolter','Power Fist','Terminator Armour'],
        options:[
          { group:'Heavy', choices:[
            { label:'Cyclone Missile Launcher', pts:0, default:true, weapons:['Cyclone Missile Launcher'] },
            { label:'Assault Cannon',            pts:0, weapons:['Assault Cannon'], replaces:['Cyclone Missile Launcher'] },
          ]},
        ]},
      { role:'Terminator', count:3, wargear:['Storm Bolter','Power Fist','Terminator Armour'],
        options:[
          { group:'Melee', choices:[
            { label:'Power Fist',     pts:0, default:true },
            { label:'Lightning Claw', pts:0, weapons:['Lightning Claw'], replaces:['Power Fist'] },
            { label:'Thunder Hammer', pts:5, weapons:['Thunder Hammer'], replaces:['Power Fist'] },
          ]},
        ]},
    ],
    abilities:['And They Shall Know No Fear','Teleport Strike: Deep strike 9"+ from enemy',
               'Terminator Armour: 5+ invulnerable save','Combat Squads'] },

  { id:'sm_dreadnought', name:'Dreadnought',
    stats:['6"','3+','3+','6','7','8','4','8','3+'], role:'Elites', pts:110, min:1, max:1, ppm:0,
    wargear:['Dreadnought C.C. Weapon','Storm Bolter','Twin Lascannon'],
    options:[
      { group:'Left Arm', choices:[
        { label:'Twin Lascannon',   pts:0, default:true, weapons:['Twin Lascannon'],   replaces:['Twin Lascannon'] },
        { label:'Multi-melta',      pts:0,               weapons:['Multi-melta'],       replaces:['Twin Lascannon'] },
        { label:'Twin Autocannon',  pts:0,               weapons:['Twin Autocannon'],   replaces:['Twin Lascannon'] },
        { label:'Assault Cannon',   pts:0,               weapons:['Assault Cannon'],    replaces:['Twin Lascannon'] },
        { label:'Plasma Cannon',    pts:0,               weapons:['Plasma Cannon'],     replaces:['Twin Lascannon'] },
      ]},
      { group:'Fist Option', choices:[
        { label:'Storm Bolter', pts:0, default:true, weapons:['Storm Bolter'], replaces:['Storm Bolter'] },
        { label:'Heavy Flamer', pts:0,               weapons:['Heavy Flamer'], replaces:['Storm Bolter'] },
      ]},
    ],
    abilities:['And They Shall Know No Fear','Smoke Launchers',
               'Explodes: On 6 when destroyed — D6 mortal wounds within 3"'] },

  { id:'sm_redemptor', name:'Redemptor Dreadnought',
    stats:['8"','3+','3+','7','7','13','5','8','3+'], role:'Elites', pts:156, min:1, max:1, ppm:0,
    wargear:['Macro Plasma Incinerator','Onslaught Gatling Cannon'],
    abilities:['And They Shall Know No Fear','Smokescreen',
               'Explodes: On 6 when destroyed — D6 mortal wounds within 6"'] },

  { id:'sm_brutalis', name:'Brutalis Dreadnought',
    stats:['8"','2+','3+','8','10','12','5','9','2+'], role:'Elites', pts:175, min:1, max:1, ppm:0, isNew:true,
    wargear:['Brutalis Fists','Twin Bolt Rifles'],
    abilities:['And They Shall Know No Fear','Ferocious Charge: Add 3 to Attacks on charge turn',
               'Explodes: On 6 when destroyed — D6 mortal wounds within 3"'] },

  { id:'sm_hellblasters', name:'Hellblaster Squad',
    stats:['6"','3+','3+','4','4','2','2','7','3+'], role:'Elites', pts:165, min:5, max:10, ppm:33,
    wargear:[],
    composition:[
      { role:'Sergeant', count:1, wargear:['Plasma Incinerator','Plasma Pistol'],
        options:[
          { group:'Sidearm', choices:[
            { label:'Plasma Pistol', pts:0, default:true, weapons:['Plasma Pistol'] },
            { label:'Bolt Pistol',   pts:0, weapons:['Bolt Pistol'], replaces:['Plasma Pistol'] },
          ]},
        ]},
      { role:'Hellblaster', count:4, wargear:['Plasma Incinerator','Plasma Pistol'] },
    ],
    abilities:['And They Shall Know No Fear',
               'Plasma Incinerator Overcharge: S8 AP-4 D2 — on 1 model slain',
               'Combat Squads'] },

  { id:'sm_aggressors', name:'Aggressor Squad',
    stats:['5"','3+','3+','4','5','3','3','7','3+'], role:'Elites', pts:117, min:3, max:6, ppm:39,
    wargear:[],
    composition:[
      { role:'Aggressor Sergeant', count:1, wargear:['Auto Boltstorm Gauntlet','Fragstorm Grenade Launcher'],
        options:[
          { group:'Loadout', choices:[
            { label:'Auto Boltstorm Gauntlets', pts:0, default:true, weapons:['Auto Boltstorm Gauntlet','Fragstorm Grenade Launcher'] },
            { label:'Flamestorm Gauntlets',     pts:0, weapons:['Flamestorm Gauntlets','Fragstorm Grenade Launcher'], replaces:['Auto Boltstorm Gauntlet'] },
          ]},
        ]},
      { role:'Aggressor', count:2, wargear:['Auto Boltstorm Gauntlet','Fragstorm Grenade Launcher'],
        options:[
          { group:'Loadout', choices:[
            { label:'Auto Boltstorm Gauntlets', pts:0, default:true },
            { label:'Flamestorm Gauntlets',     pts:0, weapons:['Flamestorm Gauntlets','Fragstorm Grenade Launcher'], replaces:['Auto Boltstorm Gauntlet'] },
          ]},
        ]},
    ],
    abilities:['And They Shall Know No Fear',
               'Firebase: If did not move fire Auto Boltstorm Gauntlets twice'] },

  { id:'sm_sternguard', name:'Sternguard Veteran Squad',
    stats:['6"','3+','3+','4','4','2','2','8','3+'], role:'Elites', pts:130, min:5, max:10, ppm:26, isNew:true,
    wargear:[],
    composition:[
      { role:'Veteran Sergeant', count:1, wargear:['Special Issue Bolter','Bolt Pistol'],
        options:[
          { group:'Melee', choices:[
            { label:'None',        pts:0, default:true },
            { label:'Chainsword',  pts:0, weapons:['Chainsword'],  replaces:[] },
            { label:'Power Sword', pts:4, weapons:['Power Sword'], replaces:['Special Issue Bolter'] },
            { label:'Power Fist',  pts:9, weapons:['Power Fist'],  replaces:['Special Issue Bolter'] },
          ]},
          { group:'Sidearm', choices:[
            { label:'Bolt Pistol',   pts:0, default:true },
            { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
          ]},
        ]},
      { role:'Veteran (up to 2 special)', count:2, wargear:['Special Issue Bolter','Bolt Pistol'],
        options:[
          { group:'Special', choices:[
            { label:'Special Issue Bolter', pts:0, default:true },
            { label:'Plasma Gun',           pts:5, weapons:['Plasma Gun'],    replaces:['Special Issue Bolter'] },
            { label:'Meltagun',             pts:5, weapons:['Meltagun'],      replaces:['Special Issue Bolter'] },
            { label:'Flamer',               pts:3, weapons:['Flamer'],        replaces:['Special Issue Bolter'] },
            { label:'Grav-Gun',             pts:3, weapons:['Grav-Gun'],      replaces:['Special Issue Bolter'] },
            { label:'Heavy Bolter',         pts:5, weapons:['Heavy Bolter'],  replaces:['Special Issue Bolter'] },
            { label:'Lascannon',            pts:10,weapons:['Lascannon'],     replaces:['Special Issue Bolter'] },
            { label:'Multi-melta',          pts:10,weapons:['Multi-melta'],   replaces:['Special Issue Bolter'] },
          ]},
        ]},
      { role:'Veteran', count:2, wargear:['Special Issue Bolter','Bolt Pistol'] },
    ],
    abilities:['And They Shall Know No Fear',
               'Special Issue Ammunition: Once per battle Bolters become AP-2 re-roll wound rolls of 1',
               'Combat Squads','Veteran Warriors: Re-roll hit rolls of 1'] },

  { id:'sm_vanguard', name:'Vanguard Veteran Squad',
    stats:['12"','3+','3+','4','4','2','3','8','3+'], role:'Elites', pts:115, min:5, max:10, ppm:23, isNew:true,
    wargear:[],
    composition:[
      { role:'Veteran Sergeant', count:1, wargear:['Chainsword','Bolt Pistol','Jump Pack'],
        options:[
          { group:'Melee', choices:[
            { label:'Chainsword',    pts:0, default:true, weapons:['Chainsword'] },
            { label:'Power Sword',   pts:4, weapons:['Power Sword'],   replaces:['Chainsword'] },
            { label:'Power Axe',     pts:5, weapons:['Power Axe'],     replaces:['Chainsword'] },
            { label:'Power Fist',    pts:9, weapons:['Power Fist'],    replaces:['Chainsword'] },
            { label:'Thunder Hammer',pts:12,weapons:['Thunder Hammer'],replaces:['Chainsword'] },
            { label:'Lightning Claw',pts:6, weapons:['Lightning Claw'],replaces:['Chainsword'] },
            { label:'Relic Blade',   pts:6, weapons:['Relic Blade'],   replaces:['Chainsword'] },
          ]},
          { group:'Offhand', choices:[
            { label:'Bolt Pistol',   pts:0, default:true, weapons:['Bolt Pistol'] },
            { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
            { label:'Storm Shield',  pts:5, weapons:['Storm Shield'],  replaces:['Bolt Pistol'] },
            { label:'Lightning Claw',pts:6, weapons:['Lightning Claw'],replaces:['Bolt Pistol'] },
          ]},
        ]},
      { role:'Veteran', count:4, wargear:['Chainsword','Bolt Pistol','Jump Pack'],
        options:[
          { group:'Melee', choices:[
            { label:'Chainsword',    pts:0, default:true },
            { label:'Power Sword',   pts:4, weapons:['Power Sword'],   replaces:['Chainsword'] },
            { label:'Power Fist',    pts:9, weapons:['Power Fist'],    replaces:['Chainsword'] },
            { label:'Thunder Hammer',pts:12,weapons:['Thunder Hammer'],replaces:['Chainsword'] },
            { label:'Lightning Claw',pts:6, weapons:['Lightning Claw'],replaces:['Chainsword'] },
          ]},
          { group:'Offhand', choices:[
            { label:'Bolt Pistol',  pts:0, default:true },
            { label:'Storm Shield', pts:5, weapons:['Storm Shield'], replaces:['Bolt Pistol'] },
          ]},
        ]},
    ],
    abilities:['And They Shall Know No Fear','Jump Pack Assault: Advance and charge same turn',
               'Combat Squads','Heroic Intervention: May intervene up to 6" instead of 3"'] },

  { id:'sm_bladeguard', name:'Bladeguard Veterans',
    stats:['6"','3+','3+','4','4','3','3','8','3+'], role:'Elites', pts:135, min:3, max:6, ppm:45, isNew:true,
    wargear:[],
    composition:[
      { role:'Bladeguard Veteran Sergeant', count:1, wargear:['Master-crafted Power Sword','Storm Shield','Heavy Bolt Pistol'],
        options:[
          { group:'Sidearm', choices:[
            { label:'Heavy Bolt Pistol', pts:0, default:true, weapons:['Heavy Bolt Pistol'] },
            { label:'Plasma Pistol',     pts:5, weapons:['Plasma Pistol'], replaces:['Heavy Bolt Pistol'] },
          ]},
        ]},
      { role:'Bladeguard Veteran', count:2, wargear:['Master-crafted Power Sword','Storm Shield','Heavy Bolt Pistol'] },
    ],
    abilities:['And They Shall Know No Fear','Storm Shield: 4+ invulnerable save',
               'Skilled Swordsmen: Re-roll all failed hit rolls in Fight phase'] },

  { id:'sm_eradicators', name:'Eradicators',
    stats:['5"','3+','3+','4','4','2','2','8','3+'], role:'Elites', pts:105, min:3, max:6, ppm:35, isNew:true,
    wargear:[],
    composition:[
      { role:'Eradicator Sergeant', count:1, wargear:['Multi-melta','Bolt Pistol'],
        options:[
          { group:'Weapon', choices:[
            { label:'Multi-melta',     pts:0, default:true, weapons:['Multi-melta'] },
            { label:'Melta Rifle',     pts:0, weapons:['Melta Rifle'],     replaces:['Multi-melta'] },
          ]},
        ]},
      { role:'Eradicator', count:2, wargear:['Multi-melta','Bolt Pistol'],
        options:[
          { group:'Weapon', choices:[
            { label:'Multi-melta', pts:0, default:true },
            { label:'Melta Rifle', pts:0, weapons:['Melta Rifle'], replaces:['Multi-melta'] },
          ]},
        ]},
    ],
    abilities:['And They Shall Know No Fear',
               'Total Obliteration: May fire Multi-melta twice if did not move'] },

  { id:'sm_judiciar', name:'Judiciar',
    stats:['6"','2+','3+','4','4','5','4','9','3+'], role:'Elites', pts:80, min:1, max:1, ppm:0, isNew:true,
    wargear:['Tempormortis','Bolt Pistol'],
    abilities:['And They Shall Know No Fear','3+ invulnerable save',
               "Executioner's Hourglass: Once per battle round subtract 2 from an enemy charge roll within 3\""] },

  { id:'sm_apoth_biologis', name:'Apothecary Biologis',
    stats:['6"','3+','3+','4','4','4','3','9','3+'], role:'Elites', pts:65, min:1, max:1, ppm:0, isNew:true,
    wargear:['Absolvor Bolt Pistol','Narthecium'],
    abilities:['And They Shall Know No Fear',
               'Narthecium: Return one slain model to friendly unit within 3" each Movement phase',
               'Biological Expertise: Friendly <Chapter> Infantry within 6" re-roll wound rolls of 1'] },

  { id:'sm_company_heroes', name:'Company Heroes',
    stats:['6"','3+','3+','4','4','2','2','9','3+'], role:'Elites', pts:75, min:4, max:4, ppm:0, isNew:true,
    wargear:[],
    composition:[
      { role:'Company Champion', count:1, wargear:['Relic Blade','Bolt Pistol'],
        options:[
          { group:'Sidearm', choices:[
            { label:'Bolt Pistol',   pts:0, default:true, weapons:['Bolt Pistol'] },
            { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
          ]},
        ]},
      { role:'Company Ancient', count:1, wargear:['Bolt Rifle','Bolt Pistol','Company Banner'] },
      { role:'Company Veteran', count:2, wargear:['Bolt Rifle','Bolt Pistol'],
        options:[
          { group:'Melee', choices:[
            { label:'None',        pts:0, default:true },
            { label:'Chainsword',  pts:0, weapons:['Chainsword'],  replaces:[] },
            { label:'Power Sword', pts:4, weapons:['Power Sword'], replaces:['Bolt Rifle'] },
            { label:'Power Fist',  pts:9, weapons:['Power Fist'],  replaces:['Bolt Rifle'] },
          ]},
        ]},
    ],
    abilities:['And They Shall Know No Fear',
               'Honour of the Chapter: Friendly <Chapter> Characters within 6" gain +1 Attack'] },

  { id:'sm_infernus', name:'Infernus Marines',
    stats:['6"','3+','3+','4','4','2','2','8','3+'], role:'Elites', pts:110, min:5, max:10, ppm:22, isNew:true,
    wargear:[],
    composition:[
      { role:'Infernus Sergeant', count:1, wargear:['Pyreblaster','Bolt Pistol'],
        options:[
          { group:'Melee', choices:[
            { label:'None',       pts:0, default:true },
            { label:'Chainsword', pts:0, weapons:['Chainsword'], replaces:[] },
            { label:'Power Sword',pts:4, weapons:['Power Sword'],replaces:['Pyreblaster'] },
          ]},
          { group:'Sidearm', choices:[
            { label:'Bolt Pistol',   pts:0, default:true },
            { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
          ]},
        ]},
      { role:'Infernus Marine', count:4, wargear:['Pyreblaster','Bolt Pistol'] },
    ],
    abilities:['And They Shall Know No Fear',
               'Wall of Flame: If did not move each Pyreblaster makes D6+2 hits instead of D6'] },

  { id:'sm_invictor', name:'Invictor Tactical Warsuit',
    stats:['8"','3+','3+','6','6','12','4','8','3+'], role:'Elites', pts:150, min:1, max:1, ppm:0, isNew:true,
    wargear:['Invictor Fist','Twin Ironhail Autocannon','Fragstorm Grenade Launchers'],
    abilities:['And They Shall Know No Fear',
               'Concealed Position: May be set up anywhere on the battlefield more than 9" from enemy before the first battle round — counts as having Scout moved',
               'Explodes: On 6 when destroyed — D6 mortal wounds within 3"'] },

  // ── FAST ATTACK ─────────────────────────────────────────────────────
  { id:'sm_assault', name:'Assault Squad',
    stats:['12"','3+','3+','4','4','1','1','7','3+'], role:'Fast Attack', pts:65, min:5, max:10, ppm:13,
    wargear:[],
    composition:[
      { role:'Sergeant', count:1, wargear:['Chainsword','Bolt Pistol','Jump Pack'],
        options:[
          { group:'Melee', choices:[
            { label:'Chainsword',    pts:0, default:true, weapons:['Chainsword'] },
            { label:'Power Sword',   pts:4, weapons:['Power Sword'],   replaces:['Chainsword'] },
            { label:'Power Axe',     pts:5, weapons:['Power Axe'],     replaces:['Chainsword'] },
            { label:'Power Fist',    pts:9, weapons:['Power Fist'],    replaces:['Chainsword'] },
            { label:'Thunder Hammer',pts:12,weapons:['Thunder Hammer'],replaces:['Chainsword'] },
          ]},
          { group:'Sidearm', choices:[
            { label:'Bolt Pistol',   pts:0, default:true, weapons:['Bolt Pistol'] },
            { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
            { label:'Hand Flamer',   pts:3, weapons:['Hand Flamer'],   replaces:['Bolt Pistol'] },
          ]},
        ]},
      { role:'Special Weapon (up to 2)', count:2, wargear:['Chainsword','Bolt Pistol','Jump Pack'],
        options:[
          { group:'Special', choices:[
            { label:'Bolt Pistol', pts:0, default:true },
            { label:'Flamer',      pts:3, weapons:['Flamer'],      replaces:['Bolt Pistol'] },
            { label:'Plasma Pistol',pts:5,weapons:['Plasma Pistol'],replaces:['Bolt Pistol'] },
            { label:'Hand Flamer', pts:3, weapons:['Hand Flamer'], replaces:['Bolt Pistol'] },
          ]},
        ]},
      { role:'Assault Marine', count:7, wargear:['Chainsword','Bolt Pistol','Jump Pack'] },
    ],
    abilities:['And They Shall Know No Fear','Jump Pack Assault: Advance and charge same turn',
               'Combat Squads'] },

  { id:'sm_assault_intercessors', name:'Assault Intercessors',
    stats:['6"','3+','3+','4','4','2','2','7','3+'], role:'Fast Attack', pts:85, min:5, max:10, ppm:17, isNew:true,
    wargear:[],
    composition:[
      { role:'Sergeant', count:1, wargear:['Heavy Bolt Pistol','Astartes Chainsword'],
        options:[
          { group:'Melee', choices:[
            { label:'Astartes Chainsword', pts:0, default:true },
            { label:'Power Sword',         pts:4, weapons:['Power Sword'],   replaces:['Astartes Chainsword'] },
            { label:'Power Fist',          pts:9, weapons:['Power Fist'],    replaces:['Astartes Chainsword'] },
            { label:'Thunder Hammer',      pts:12,weapons:['Thunder Hammer'],replaces:['Astartes Chainsword'] },
          ]},
          { group:'Sidearm', choices:[
            { label:'Heavy Bolt Pistol', pts:0, default:true },
            { label:'Plasma Pistol',     pts:5, weapons:['Plasma Pistol'], replaces:['Heavy Bolt Pistol'] },
            { label:'Hand Flamer',       pts:3, weapons:['Hand Flamer'],   replaces:['Heavy Bolt Pistol'] },
          ]},
        ]},
      { role:'Assault Intercessor', count:4, wargear:['Heavy Bolt Pistol','Astartes Chainsword'] },
    ],
    abilities:['And They Shall Know No Fear','Combat Squads'] },

  { id:'sm_jump_intercessors', name:'Jump Pack Intercessors',
    stats:['12"','3+','3+','4','4','2','2','7','3+'], role:'Fast Attack', pts:100, min:5, max:10, ppm:20, isNew:true,
    wargear:[],
    composition:[
      { role:'Sergeant', count:1, wargear:['Heavy Bolt Pistol','Astartes Chainsword','Jump Pack'],
        options:[
          { group:'Melee', choices:[
            { label:'Astartes Chainsword', pts:0, default:true },
            { label:'Power Sword',         pts:4, weapons:['Power Sword'],   replaces:['Astartes Chainsword'] },
            { label:'Power Fist',          pts:9, weapons:['Power Fist'],    replaces:['Astartes Chainsword'] },
            { label:'Thunder Hammer',      pts:12,weapons:['Thunder Hammer'],replaces:['Astartes Chainsword'] },
          ]},
          { group:'Sidearm', choices:[
            { label:'Heavy Bolt Pistol', pts:0, default:true },
            { label:'Plasma Pistol',     pts:5, weapons:['Plasma Pistol'], replaces:['Heavy Bolt Pistol'] },
            { label:'Hand Flamer',       pts:3, weapons:['Hand Flamer'],   replaces:['Heavy Bolt Pistol'] },
          ]},
        ]},
      { role:'Jump Pack Intercessor', count:4, wargear:['Heavy Bolt Pistol','Astartes Chainsword','Jump Pack'] },
    ],
    abilities:['And They Shall Know No Fear','Jump Pack Assault: Advance and charge same turn',
               'Combat Squads'] },

  { id:'sm_inceptors', name:'Inceptor Squad',
    stats:['10"','3+','3+','4','4','2','2','7','3+'], role:'Fast Attack', pts:115, min:3, max:6, ppm:38,
    wargear:[],
    composition:[
      { role:'Inceptor Sergeant', count:1, wargear:['Assault Bolters','Jump Pack'],
        options:[
          { group:'Weapon', choices:[
            { label:'Assault Bolters', pts:0, default:true, weapons:['Assault Bolters'] },
            { label:'Plasma Exterminators', pts:0, weapons:['Plasma Exterminators'], replaces:['Assault Bolters'] },
          ]},
        ]},
      { role:'Inceptor', count:2, wargear:['Assault Bolters','Jump Pack'],
        options:[
          { group:'Weapon', choices:[
            { label:'Assault Bolters',      pts:0, default:true },
            { label:'Plasma Exterminators', pts:0, weapons:['Plasma Exterminators'], replaces:['Assault Bolters'] },
          ]},
        ]},
    ],
    abilities:['And They Shall Know No Fear',
               'Meteoric Descent: When arriving from deep strike may fire weapons immediately'] },

  { id:'sm_outriders', name:'Outrider Squad',
    stats:['14"','3+','3+','4','5','3','3','7','3+'], role:'Fast Attack', pts:135, min:3, max:6, ppm:45, isNew:true,
    wargear:[],
    composition:[
      { role:'Outrider Sergeant', count:1, wargear:['Twin Bolt Rifle','Astartes Chainsword','Bolt Pistol'],
        options:[
          { group:'Melee', choices:[
            { label:'Astartes Chainsword', pts:0, default:true },
            { label:'Power Sword',         pts:4, weapons:['Power Sword'],   replaces:['Astartes Chainsword'] },
          ]},
          { group:'Sidearm', choices:[
            { label:'Bolt Pistol',   pts:0, default:true },
            { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
          ]},
        ]},
      { role:'Outrider', count:2, wargear:['Twin Bolt Rifle','Astartes Chainsword'] },
    ],
    abilities:['And They Shall Know No Fear',
               'Turbo-boost: Advance and charge same turn',
               'Jink: 4+ invulnerable save if unit Advanced'] },

  { id:'sm_storm_speeder_t', name:'Storm Speeder Thunderstrike',
    stats:['14"','5+','3+','6','6','8','3','8','3+'], role:'Fast Attack', pts:130, min:1, max:1, ppm:0, isNew:true,
    wargear:['Thunderstrike Laser','Stormfrag Autolauncher','Twin Bolt Rifle'],
    abilities:['And They Shall Know No Fear','Hard to Hit: -1 to hit rolls if it moved',
               'Explodes: On 6 when destroyed — D3 mortal wounds within 3"'] },

  { id:'sm_storm_speeder_h', name:'Storm Speeder Hailstrike',
    stats:['14"','5+','3+','6','6','8','3','8','3+'], role:'Fast Attack', pts:120, min:1, max:1, ppm:0, isNew:true,
    wargear:['Hailstrike Fragcannons x2','Twin Bolt Rifle'],
    abilities:['And They Shall Know No Fear','Hard to Hit: -1 to hit rolls if it moved',
               'Explodes: On 6 when destroyed — D3 mortal wounds within 3"'] },

  { id:'sm_storm_speeder_w', name:'Storm Speeder Warhammer',
    stats:['14"','5+','3+','6','6','8','3','8','3+'], role:'Fast Attack', pts:140, min:1, max:1, ppm:0, isNew:true,
    wargear:['Onslaught Cannon','Melta Destroyer','Twin Bolt Rifle'],
    abilities:['And They Shall Know No Fear','Hard to Hit: -1 to hit rolls if it moved',
               'Explodes: On 6 when destroyed — D3 mortal wounds within 3"'] },

  // ── HEAVY SUPPORT ───────────────────────────────────────────────────
  { id:'sm_devastators', name:'Devastator Squad',
    stats:['6"','3+','3+','4','4','1','1','7','3+'], role:'Heavy Support', pts:95, min:5, max:10, ppm:12,
    wargear:[],
    composition:[
      { role:'Sergeant', count:1, wargear:['Boltgun','Bolt Pistol','Signum'],
        options:[
          { group:'Melee', choices:[
            { label:'None',        pts:0, default:true },
            { label:'Chainsword',  pts:0, weapons:['Chainsword'], replaces:[] },
            { label:'Power Fist',  pts:9, weapons:['Power Fist'],  replaces:['Boltgun'] },
          ]},
        ]},
      { role:'Heavy Weapon 1', count:1, wargear:['Missile Launcher','Bolt Pistol'],
        options:[
          { group:'Heavy', choices:[
            { label:'Missile Launcher', pts:0, default:true, weapons:['Missile Launcher'] },
            { label:'Lascannon',        pts:0, weapons:['Lascannon'],        replaces:['Missile Launcher'] },
            { label:'Multi-melta',      pts:0, weapons:['Multi-melta'],      replaces:['Missile Launcher'] },
            { label:'Plasma Cannon',    pts:0, weapons:['Plasma Cannon'],    replaces:['Missile Launcher'] },
            { label:'Heavy Bolter',     pts:0, weapons:['Heavy Bolter'],     replaces:['Missile Launcher'] },
            { label:'Grav-Cannon',      pts:0, weapons:['Grav-Cannon'],      replaces:['Missile Launcher'] },
          ]},
        ]},
      { role:'Heavy Weapon 2', count:1, wargear:['Missile Launcher','Bolt Pistol'],
        options:[
          { group:'Heavy', choices:[
            { label:'Missile Launcher', pts:0, default:true, weapons:['Missile Launcher'] },
            { label:'Lascannon',        pts:0, weapons:['Lascannon'],        replaces:['Missile Launcher'] },
            { label:'Multi-melta',      pts:0, weapons:['Multi-melta'],      replaces:['Missile Launcher'] },
            { label:'Plasma Cannon',    pts:0, weapons:['Plasma Cannon'],    replaces:['Missile Launcher'] },
            { label:'Heavy Bolter',     pts:0, weapons:['Heavy Bolter'],     replaces:['Missile Launcher'] },
            { label:'Grav-Cannon',      pts:0, weapons:['Grav-Cannon'],      replaces:['Missile Launcher'] },
          ]},
        ]},
      { role:'Heavy Weapon 3', count:1, wargear:['Missile Launcher','Bolt Pistol'],
        options:[
          { group:'Heavy', choices:[
            { label:'Missile Launcher', pts:0, default:true, weapons:['Missile Launcher'] },
            { label:'Lascannon',        pts:0, weapons:['Lascannon'],        replaces:['Missile Launcher'] },
            { label:'Multi-melta',      pts:0, weapons:['Multi-melta'],      replaces:['Missile Launcher'] },
            { label:'Plasma Cannon',    pts:0, weapons:['Plasma Cannon'],    replaces:['Missile Launcher'] },
            { label:'Heavy Bolter',     pts:0, weapons:['Heavy Bolter'],     replaces:['Missile Launcher'] },
            { label:'Grav-Cannon',      pts:0, weapons:['Grav-Cannon'],      replaces:['Missile Launcher'] },
          ]},
        ]},
      { role:'Heavy Weapon 4', count:1, wargear:['Missile Launcher','Bolt Pistol'],
        options:[
          { group:'Heavy', choices:[
            { label:'Missile Launcher', pts:0, default:true, weapons:['Missile Launcher'] },
            { label:'Lascannon',        pts:0, weapons:['Lascannon'],        replaces:['Missile Launcher'] },
            { label:'Multi-melta',      pts:0, weapons:['Multi-melta'],      replaces:['Missile Launcher'] },
            { label:'Plasma Cannon',    pts:0, weapons:['Plasma Cannon'],    replaces:['Missile Launcher'] },
            { label:'Heavy Bolter',     pts:0, weapons:['Heavy Bolter'],     replaces:['Missile Launcher'] },
            { label:'Grav-Cannon',      pts:0, weapons:['Grav-Cannon'],      replaces:['Missile Launcher'] },
          ]},
        ]},
    ],
    abilities:['And They Shall Know No Fear',
               'Signum: Once per phase one model hits on 2+ instead of 3+','Combat Squads'] },

  { id:'sm_heavy_intercessors', name:'Heavy Intercessor Squad',
    stats:['5"','3+','3+','4','5','3','2','7','3+'], role:'Heavy Support', pts:120, min:5, max:10, ppm:24, isNew:true,
    wargear:[],
    composition:[
      { role:'Sergeant', count:1, wargear:['Heavy Bolt Rifle','Bolt Pistol'],
        options:[
          { group:'Heavy Rifle', choices:[
            { label:'Heavy Bolt Rifle',          pts:0, default:true, weapons:['Heavy Bolt Rifle'] },
            { label:'Executor Bolt Rifle',        pts:0, weapons:['Executor Bolt Rifle'],        replaces:['Heavy Bolt Rifle'] },
            { label:'Hellstorm Bolt Rifle',       pts:0, weapons:['Hellstorm Bolt Rifle'],       replaces:['Heavy Bolt Rifle'] },
          ]},
          { group:'Melee', choices:[
            { label:'None',       pts:0, default:true },
            { label:'Chainsword', pts:0, weapons:['Chainsword'], replaces:[] },
            { label:'Power Fist', pts:9, weapons:['Power Fist'],  replaces:['Bolt Pistol'] },
          ]},
        ]},
      { role:'Heavy Intercessor', count:4, wargear:['Heavy Bolt Rifle','Bolt Pistol'],
        options:[
          { group:'Heavy Rifle', choices:[
            { label:'Heavy Bolt Rifle',    pts:0, default:true },
            { label:'Executor Bolt Rifle', pts:0, weapons:['Executor Bolt Rifle'],  replaces:['Heavy Bolt Rifle'] },
            { label:'Hellstorm Bolt Rifle',pts:0, weapons:['Hellstorm Bolt Rifle'], replaces:['Heavy Bolt Rifle'] },
          ]},
        ]},
    ],
    abilities:['And They Shall Know No Fear',
               'Transhuman Physiology: Ignore wound rolls of 1-3 against this unit once per phase',
               'Combat Squads'] },

  { id:'sm_desolation', name:'Desolation Squad',
    stats:['6"','3+','3+','4','4','2','2','7','3+'], role:'Heavy Support', pts:160, min:5, max:10, ppm:32, isNew:true,
    wargear:[],
    composition:[
      { role:'Sergeant', count:1, wargear:['Superkrak Rocket Launcher','Bolt Pistol'],
        options:[
          { group:'Sidearm', choices:[
            { label:'Bolt Pistol',   pts:0, default:true },
            { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
          ]},
          { group:'Special', choices:[
            { label:'None',           pts:0, default:true },
            { label:'Flakk Missiles', pts:0, note:'+1 to hit Flyers', weapons:[] },
          ]},
        ]},
      { role:'Desolator', count:4, wargear:['Superkrak Rocket Launcher','Bolt Pistol'] },
    ],
    abilities:['And They Shall Know No Fear',
               'Superkrak: Heavy 2 S10 AP-2 DD3 — may fire at units not in line of sight at -1 to hit',
               'Superfrag: Blast mode — D3+3 hits S5 AP0 D1',
               'Combat Squads'] },

  { id:'sm_ballistus', name:'Ballistus Dreadnought',
    stats:['6"','4+','2+','8','10','12','3','9','2+'], role:'Heavy Support', pts:155, min:1, max:1, ppm:0, isNew:true,
    wargear:['Lascannon','Twin Fragstorm Grenade Launcher'],
    abilities:['And They Shall Know No Fear',
               'Targeting Protocols: No penalty for moving and firing Heavy weapons',
               'Explodes: On 6 when destroyed — D6 mortal wounds within 3"'] },

  { id:'sm_predator', name:'Predator',
    stats:['10"','5+','3+','6','7','11','3','8','3+'], role:'Heavy Support', pts:110, min:1, max:1, ppm:0,
    wargear:['Predator Autocannon','Lascannon Sponsons'],
    options:[
      { group:'Turret', choices:[
        { label:'Predator Autocannon', pts:0, default:true, weapons:['Predator Autocannon'], replaces:['Predator Autocannon'] },
        { label:'Twin Lascannon',      pts:0,               weapons:['Twin Lascannon'],      replaces:['Predator Autocannon'] },
      ]},
      { group:'Sponsons', choices:[
        { label:'Lascannon Sponsons',   pts:0, default:true, weapons:['Lascannon Sponsons']  },
        { label:'Heavy Bolter Sponsons',pts:0,               weapons:['Heavy Bolter Sponsons'], replaces:['Lascannon Sponsons'] },
        { label:'None',                 pts:0,               replaces:['Lascannon Sponsons'] },
      ]},
    ],
    abilities:['Smoke Launchers','Explodes: On 6 — D6 mortal wounds within 6"'] },

  { id:'sm_whirlwind', name:'Whirlwind',
    stats:['12"','5+','3+','6','6','8','3','8','3+'], role:'Heavy Support', pts:90, min:1, max:1, ppm:0,
    wargear:['Whirlwind Multiple Rocket Launcher'],
    abilities:['Smoke Launchers','Indirect Fire: Target units not in line of sight at -1 to hit',
               'Explodes: On 6 — D3 mortal wounds within 6"'] },

  { id:'sm_land_raider', name:'Land Raider',
    stats:['10"','5+','3+','8','8','16','6','9','2+'], role:'Heavy Support', pts:285, min:1, max:1, ppm:0,
    wargear:['Twin Lascannons','Multi-Melta','Heavy Bolter'],
    abilities:['Power of the Machine Spirit','Smoke Launchers','Transport: Carries 10 Infantry',
               'Explodes: On 6 — D6 mortal wounds within 6"'] },

  { id:'sm_land_raider_terminus', name:'Land Raider Terminus Ultra',
    stats:['10"','5+','3+','8','8','16','6','9','2+'], role:'Heavy Support', pts:385, min:1, max:1, ppm:0,
    wargear:['Terminus Ultra Lascannon (3x Twin Lascannons + Hull Lascannon)','Storm Bolter'],
    abilities:['Power of the Machine Spirit: May fire one weapon even if it moved',
               'Smoke Launchers',
               'Explodes: On 6 — D6 mortal wounds within 6"',
               'Terminus Ultra Lascannon: Can fire all three twin lascannons at one target — if all three are fired roll D6 — on 1 suffer D3 mortal wounds',
               'No Transport Capacity: The Terminus Ultra carries no passengers — its entire hull is given over to weapons'] },

  { id:'sm_land_raider_crusader', name:'Land Raider Crusader',
    stats:['10"','5+','3+','8','8','16','6','9','2+'], role:'Heavy Support', pts:285, min:1, max:1, ppm:0,
    wargear:['Twin Assault Cannon','2x Hurricane Bolter','Multi-melta'],
    options:[
      { group:'Pintle', choices:[
        { label:'None',         pts:0, default:true },
        { label:'Storm Bolter', pts:2, weapons:['Storm Bolter'] },
        { label:'Multi-melta',  pts:22,weapons:['Multi-melta'] },
      ]},
    ],
    abilities:['Power of the Machine Spirit: May fire one weapon even if it moved',
               'Smoke Launchers',
               'Assault Vehicle: Models disembarking may still charge this turn',
               'Transport: Carries 16 Infantry (2x Jump Pack models = 1 slot)',
               'Explodes: On 6 — D6 mortal wounds within 6"'] },

  // ── DEDICATED TRANSPORT ─────────────────────────────────────────────
  { id:'sm_rhino', name:'Rhino',
    stats:['12"','5+','3+','6','6','10','3','8','3+'], role:'Dedicated Transport', pts:72, min:1, max:1, ppm:0,
    wargear:['Storm Bolter'],
    abilities:['Smoke Launchers','Transport: Carries 10 Infantry'] },

  { id:'sm_drop_pod', name:'Drop Pod',
    stats:['0"','-','-','5','5','8','-','7','3+'], role:'Dedicated Transport', pts:65, min:1, max:1, ppm:0,
    wargear:['Storm Bolter'],
    abilities:['Drop Pod Assault: Must deep strike — arrives first turn — 9"+ from enemy',
               'Immobile: Cannot move after deploying','Transport: Carries 10 Infantry'] },

  { id:'sm_impulsor', name:'Impulsor',
    stats:['12"','5+','3+','6','7','11','3','8','3+'], role:'Dedicated Transport', pts:100, min:1, max:1, ppm:0, isNew:true,
    wargear:['2x Storm Bolters','Ironhail Skytalon Array'],
    abilities:['Transport: Carries 6 Primaris Infantry',
               'Assault Vehicle: Models disembarking may still charge this turn',
               'Smoke Launchers','Explodes: On 6 — D3 mortal wounds within 6"'] },

  { id:'sm_land_speeder_storm', name:'Land Speeder Storm',
    stats:['14"','5+','3+','5','5','6','2','8','4+'], role:'Dedicated Transport', pts:75, min:1, max:1, ppm:0,
    wargear:['Heavy Bolter','Cerberus Launcher'],
    abilities:['Transport: Carries 5 Scout models only',
               'Scouts: May Scout move before first battle round',
               'Cerberus Launcher: Enemy units within 3" of disembarking Scouts cannot fire Overwatch'] },

  // ── FLYER ────────────────────────────────────────────────────────────
  { id:'sm_stormraven', name:'Stormraven Gunship',
    stats:['20-50"','5+','3+','8','7','14','6','9','3+'], role:'Flyer', pts:233, min:1, max:1, ppm:0,
    wargear:['Twin Multi-Melta','Twin Lascannon','Hurricane Bolters'],
    abilities:['Supersonic','Transport: Carries 12 Infantry or 1 Dreadnought',
               'Hard to Hit: -1 to hit rolls','Explodes: On 6 — D6 mortal wounds within 6"'] },
];
