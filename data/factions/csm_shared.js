// CSM_SHARED_UNITS — units available to all Heretic Astartes legions
// Chaos Space Marines, Death Guard, Thousand Sons, World Eaters, Emperor's Children
// Must be loaded BEFORE individual chaos faction files
var CSM_SHARED_UNITS = [
  { id:'csm_lord', name:'Chaos Lord',
    stats:['6"','3+','3+','4','4','5','4','9','3+'], role:'HQ', pts:76, min:1, max:1, ppm:0,
    wargear:['Power Sword','Bolt Pistol','Frag & Krak Grenades'],
    abilities:['Lord of Chaos: Friendly <Mark> Core within 6" re-roll hit rolls of 1',
               '4+ invulnerable save','Chaos Undivided: May take a Mark of Chaos'] },

  { id:'csm_sorcerer', name:'Chaos Sorcerer',
    stats:['6"','3+','3+','4','4','4','3','9','3+'], role:'HQ', pts:93, min:1, max:1, ppm:0,
    wargear:['Force Stave','Bolt Pistol','Infernal Tome'],
    abilities:['Psyker: Mastery Level 1 — Smite + 1 Chaos power',
               'Chaos Undivided: May take a Mark of Chaos',
               'Infernal Gaze: Psychic power — D3 mortal wounds to one unit within 18"'] },

  { id:'csm_dark_apostle', name:'Dark Apostle',
    stats:['6"','3+','3+','4','4','4','3','9','3+'], role:'HQ', pts:83, min:1, max:1, ppm:0,
    wargear:['Cursed Crozius','Bolt Pistol'],
    abilities:['Prayers to the Dark Gods: Know 2 prayers — attempt both each turn on 3+',
               'Chaos Undivided: May take a Mark of Chaos',
               'Dark Disciples: 2 attendant models — each alive adds +1 to prayer rolls'] },

  { id:'csm_squad', name:'Chaos Space Marines',
    stats:['6"','3+','3+','4','4','1','1','7','3+'], role:'Troops', pts:60, min:5, max:20, ppm:12,
    wargear:[],
    composition:[
      { role:'Aspiring Champion', count:1, wargear:['Bolt Pistol','Bolter','Frag & Krak Grenades'],
        options:[
          { group:'Melee', choices:[
            { label:'None',          pts:0, default:true },
            { label:'Chainsword',    pts:0, weapons:['Chainsword'],   replaces:[] },
            { label:'Power Sword',   pts:4, weapons:['Power Sword'],  replaces:['Bolter'] },
            { label:'Power Axe',     pts:5, weapons:['Power Axe'],    replaces:['Bolter'] },
            { label:'Power Fist',    pts:9, weapons:['Power Fist'],   replaces:['Bolter'] },
            { label:'Lightning Claw',pts:8, weapons:['Lightning Claw'],replaces:['Bolter'] },
          ]},
          { group:'Ranged', choices:[
            { label:'Bolt Pistol',   pts:0, default:true, weapons:['Bolt Pistol'] },
            { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
            { label:'Combi-melta',   pts:10,weapons:['Combi-Melta'],   replaces:['Bolter'] },
          ]},
        ]},
      { role:'Special Weapon (up to 2)', count:2, wargear:['Bolt Pistol','Bolter','Frag & Krak Grenades'],
        options:[
          { group:'Special', choices:[
            { label:'Bolter',      pts:0, default:true },
            { label:'Plasma Gun',  pts:5, weapons:['Plasma Gun'],  replaces:['Bolter'] },
            { label:'Meltagun',    pts:5, weapons:['Meltagun'],    replaces:['Bolter'] },
            { label:'Flamer',      pts:3, weapons:['Flamer'],      replaces:['Bolter'] },
            { label:'Chainaxe',    pts:0, weapons:['Chainaxe'],    replaces:['Bolter'] },
          ]},
        ]},
      { role:'Traitor', count:17, wargear:['Bolt Pistol','Bolter','Frag & Krak Grenades'] },
    ],
    abilities:['Chaos Undivided: May take a Mark of Chaos',
               'Aspiring Champion: 1 per unit — +1A and may take power weapon',
               'Icon: May take Icon of Chaos — various buffs depending on Mark'] },

  { id:'csm_cultists', name:'Chaos Cultists',
    stats:['6"','4+','4+','3','3','1','1','6','6+'], role:'Troops', pts:40, min:10, max:30, ppm:4,
    wargear:[],
    composition:[
      { role:'Cultist Champion', count:1, wargear:['Autogun','Autopistol'],
        options:[
          { group:'Weapon', choices:[
            { label:'Autogun', pts:0, default:true, weapons:['Autogun'] },
            { label:'Shotgun', pts:0, weapons:['Shotgun'], replaces:['Autogun'] },
            { label:'Flamer',  pts:3, weapons:['Flamer'],  replaces:['Autogun'] },
          ]},
        ]},
      { role:'Cultist', count:9, wargear:['Autogun','Autopistol'] },
    ],
    abilities:['Mob Rule: Units of 10+ models re-roll failed Morale tests',
               'Expendable: Do not count for Morale if within 6" of a Chaos Lord'] },
  { id:'csm_terminators', name:'Chaos Terminators',
    stats:['5"','3+','3+','4','4','2','2','8','2+'], role:'Elites', pts:155, min:5, max:10, ppm:31,
    wargear:[],
    composition:[
      { role:'Terminator Champion', count:1, wargear:['Combi-Bolter','Power Fist','Terminator Armour'],
        options:[
          { group:'Ranged', choices:[
            { label:'Combi-Bolter', pts:0, default:true },
            { label:'Combi-Melta',  pts:5, weapons:['Combi-Melta'],  replaces:['Combi-Bolter'] },
            { label:'Reaper Autocannon', pts:5, weapons:['Reaper Autocannon'], replaces:['Combi-Bolter'] },
          ]},
          { group:'Melee', choices:[
            { label:'Power Fist',     pts:0, default:true },
            { label:'Lightning Claw', pts:0, weapons:['Lightning Claw'], replaces:['Power Fist'] },
            { label:'Thunder Hammer', pts:5, weapons:['Thunder Hammer'], replaces:['Power Fist'] },
            { label:'Chainfist',      pts:0, weapons:['Chainfist'],      replaces:['Power Fist'] },
          ]},
        ]},
      { role:'Terminator', count:4, wargear:['Combi-Bolter','Power Fist','Terminator Armour'],
        options:[
          { group:'Ranged', choices:[
            { label:'Combi-Bolter',      pts:0, default:true },
            { label:'Combi-Melta',       pts:5, weapons:['Combi-Melta'],       replaces:['Combi-Bolter'] },
            { label:'Reaper Autocannon', pts:5, weapons:['Reaper Autocannon'], replaces:['Combi-Bolter'] },
          ]},
          { group:'Melee', choices:[
            { label:'Power Fist',     pts:0, default:true },
            { label:'Lightning Claw', pts:0, weapons:['Lightning Claw'], replaces:['Power Fist'] },
            { label:'Chainfist',      pts:0, weapons:['Chainfist'],      replaces:['Power Fist'] },
          ]},
        ]},
    ],
    abilities:['Teleport Strike: Deep strike — arrive 9"+ from enemy',
               'Terminator Armour: 2+ save, 5+ invulnerable save',
               'Veterans of the Long War: Re-roll hit rolls of 1 within 6" of a Chaos Lord'] },

  { id:'csm_chosen', name:'Chosen',
    stats:['6"','3+','3+','4','4','1','2','8','3+'], role:'Elites', pts:75, min:5, max:10, ppm:15,
    wargear:[],
    composition:[
      { role:'Chosen Champion', count:1, wargear:['Boltgun','Bolt Pistol'],
        options:[
          { group:'Melee', choices:[
            { label:'None',            pts:0, default:true },
            { label:'Chainsword',      pts:0, weapons:['Chainsword'],      replaces:[] },
            { label:'Power Sword',     pts:4, weapons:['Power Sword'],     replaces:['Boltgun'] },
            { label:'Power Fist',      pts:8, weapons:['Power Fist'],      replaces:['Boltgun'] },
            { label:'Lightning Claws', pts:8, weapons:['Lightning Claws'], replaces:['Boltgun'] },
            { label:'Thunder Hammer',  pts:10,weapons:['Thunder Hammer'],  replaces:['Boltgun'] },
          ]},
          { group:'Ranged', choices:[
            { label:'Boltgun',    pts:0, default:true },
            { label:'Plasma Gun', pts:5, weapons:['Plasma Gun'], replaces:['Boltgun'] },
            { label:'Meltagun',   pts:5, weapons:['Meltagun'],   replaces:['Boltgun'] },
          ]},
        ]},
      { role:'Chosen', count:4, wargear:['Boltgun','Bolt Pistol'],
        options:[
          { group:'Special', choices:[
            { label:'Boltgun',         pts:0, default:true },
            { label:'Plasma Gun',      pts:5, weapons:['Plasma Gun'],  replaces:['Boltgun'] },
            { label:'Meltagun',        pts:5, weapons:['Meltagun'],    replaces:['Boltgun'] },
            { label:'Flamer',          pts:3, weapons:['Flamer'],      replaces:['Boltgun'] },
            { label:'Autocannon',      pts:5, weapons:['Autocannon'],  replaces:['Boltgun'] },
            { label:'Lascannon',       pts:8, weapons:['Lascannon'],   replaces:['Boltgun'] },
            { label:'Heavy Bolter',    pts:5, weapons:['Heavy Bolter'],replaces:['Boltgun'] },
          ]},
        ]},
    ],
    abilities:['Veterans of the Long War',
               'Chosen Warriors: Each model may take a different special weapon',
               'Champion: 1 per unit — +1A and may take power fist or lightning claws'] },

  { id:'csm_possessed', name:'Possessed',
    stats:['6"','3+','3+','5','4','2','3','8','3+'], role:'Elites', pts:100, min:5, max:20, ppm:20,
    wargear:[],
    composition:[
      { role:'Possessed', count:5, wargear:['Hideous Mutations'] },
    ],
    abilities:['Daemonic: 5+ invulnerable save',
               'Hideous Mutations: Roll D3 at start of Fight phase — 1: +1S / 2: +1A / 3: +1 to wound rolls',
               'Bounding Charge: Add 1 to charge rolls'] },

  { id:'csm_obliterators', name:'Obliterators',
    stats:['5"','3+','3+','5','5','3','3','8','2+'], role:'Elites', pts:195, min:1, max:3, ppm:65,
    wargear:['Obliterator Fists','Fleshmetal Guns'],
    abilities:['Fleshmetal Guns: Choose weapon type each Shooting phase — Assault / Heavy / Rapid Fire',
               'Daemonic: 4+ invulnerable save',
               'Teleport Strike: Deep strike — arrive 9"+ from enemy'] },

  { id:'csm_bikers', name:'Chaos Bikers',
    stats:['14"','3+','3+','4','5','2','2','7','3+'], role:'Fast Attack', pts:75, min:3, max:9, ppm:25,
    wargear:[],
    composition:[
      { role:'Biker Champion', count:1, wargear:['Twin Boltgun','Chainsword'],
        options:[
          { group:'Melee', choices:[
            { label:'Chainsword',  pts:0, default:true },
            { label:'Power Sword', pts:4, weapons:['Power Sword'], replaces:['Chainsword'] },
            { label:'Power Fist',  pts:9, weapons:['Power Fist'],  replaces:['Chainsword'] },
          ]},
        ]},
      { role:'Chaos Biker', count:2, wargear:['Twin Boltgun','Chainsword'] },
    ],
    abilities:['Veterans of the Long War',
               'Turbo-boost: May Advance and charge in same turn',
               'Champion: 1 per unit — may take power weapon'] },

  { id:'csm_raptors', name:'Raptors',
    stats:['12"','3+','3+','4','4','1','1','7','3+'], role:'Fast Attack', pts:65, min:5, max:10, ppm:13,
    wargear:[],
    composition:[
      { role:'Raptor Champion', count:1, wargear:['Bolt Pistol','Chainaxe','Jump Pack'],
        options:[
          { group:'Melee', choices:[
            { label:'Chainaxe',    pts:0, default:true },
            { label:'Power Sword', pts:4, weapons:['Power Sword'],   replaces:['Chainaxe'] },
            { label:'Power Fist',  pts:8, weapons:['Power Fist'],    replaces:['Chainaxe'] },
            { label:'Lightning Claws', pts:8, weapons:['Lightning Claws'], replaces:['Chainaxe'] },
          ]},
          { group:'Sidearm', choices:[
            { label:'Bolt Pistol',   pts:0, default:true },
            { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
          ]},
        ]},
      { role:'Special Weapon (up to 2)', count:2, wargear:['Bolt Pistol','Chainaxe','Jump Pack'],
        options:[
          { group:'Special', choices:[
            { label:'Bolt Pistol',   pts:0, default:true },
            { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
            { label:'Hand Flamer',   pts:3, weapons:['Hand Flamer'],   replaces:['Bolt Pistol'] },
            { label:'Meltagun',      pts:5, weapons:['Meltagun'],      replaces:['Bolt Pistol'] },
          ]},
        ]},
      { role:'Raptor', count:2, wargear:['Bolt Pistol','Chainaxe','Jump Pack'] },
    ],
    abilities:['Jump Pack Assault: Advance and charge same turn',
               'Veterans of the Long War',
               'Icon: May take Chaos Icon'] },

  { id:'csm_warp_talons', name:'Warp Talons',
    stats:['12"','3+','3+','4','4','1','2','8','3+'], role:'Fast Attack', pts:90, min:5, max:10, ppm:18,
    wargear:[],
    composition:[
      { role:'Warp Talon', count:5, wargear:['Warp Claws','Jump Pack'] },
    ],
    abilities:['Daemonic: 5+ invulnerable save',
               'Warp Shrike: When arriving from deep strike all enemy units within 1" cannot fire Overwatch this turn',
               'Blinding Bolts: At start of Fight phase enemy units within 1" subtract 1 from hit rolls'] },

  { id:'csm_havocs', name:'Havocs',
    stats:['6"','3+','3+','4','4','1','1','7','3+'], role:'Heavy Support', pts:60, min:5, max:5, ppm:0,
    wargear:[],
    composition:[
      { role:'Aspiring Champion', count:1, wargear:['Bolter','Bolt Pistol'],
        options:[
          { group:'Melee', choices:[
            { label:'None',        pts:0, default:true },
            { label:'Power Sword', pts:4, weapons:['Power Sword'], replaces:[] },
            { label:'Power Fist',  pts:9, weapons:['Power Fist'],  replaces:['Bolter'] },
          ]},
        ]},
      { role:'Heavy Weapon 1', count:1, wargear:['Autocannon','Bolt Pistol'],
        options:[
          { group:'Heavy', choices:[
            { label:'Autocannon',       pts:0, default:true, weapons:['Autocannon'] },
            { label:'Lascannon',        pts:0, weapons:['Lascannon'],        replaces:['Autocannon'] },
            { label:'Heavy Bolter',     pts:0, weapons:['Heavy Bolter'],     replaces:['Autocannon'] },
            { label:'Missile Launcher', pts:0, weapons:['Missile Launcher'], replaces:['Autocannon'] },
            { label:'Reaper Autocannon',pts:0, weapons:['Reaper Autocannon'],replaces:['Autocannon'] },
            { label:'Plasma Cannon',    pts:0, weapons:['Plasma Cannon'],    replaces:['Autocannon'] },
          ]},
        ]},
      { role:'Heavy Weapon 2', count:1, wargear:['Autocannon','Bolt Pistol'],
        options:[
          { group:'Heavy', choices:[
            { label:'Autocannon',       pts:0, default:true, weapons:['Autocannon'] },
            { label:'Lascannon',        pts:0, weapons:['Lascannon'],        replaces:['Autocannon'] },
            { label:'Heavy Bolter',     pts:0, weapons:['Heavy Bolter'],     replaces:['Autocannon'] },
            { label:'Missile Launcher', pts:0, weapons:['Missile Launcher'], replaces:['Autocannon'] },
            { label:'Reaper Autocannon',pts:0, weapons:['Reaper Autocannon'],replaces:['Autocannon'] },
            { label:'Plasma Cannon',    pts:0, weapons:['Plasma Cannon'],    replaces:['Autocannon'] },
          ]},
        ]},
      { role:'Heavy Weapon 3', count:1, wargear:['Autocannon','Bolt Pistol'],
        options:[
          { group:'Heavy', choices:[
            { label:'Autocannon',       pts:0, default:true, weapons:['Autocannon'] },
            { label:'Lascannon',        pts:0, weapons:['Lascannon'],        replaces:['Autocannon'] },
            { label:'Heavy Bolter',     pts:0, weapons:['Heavy Bolter'],     replaces:['Autocannon'] },
            { label:'Missile Launcher', pts:0, weapons:['Missile Launcher'], replaces:['Autocannon'] },
            { label:'Reaper Autocannon',pts:0, weapons:['Reaper Autocannon'],replaces:['Autocannon'] },
            { label:'Plasma Cannon',    pts:0, weapons:['Plasma Cannon'],    replaces:['Autocannon'] },
          ]},
        ]},
      { role:'Heavy Weapon 4', count:1, wargear:['Autocannon','Bolt Pistol'],
        options:[
          { group:'Heavy', choices:[
            { label:'Autocannon',       pts:0, default:true, weapons:['Autocannon'] },
            { label:'Lascannon',        pts:0, weapons:['Lascannon'],        replaces:['Autocannon'] },
            { label:'Heavy Bolter',     pts:0, weapons:['Heavy Bolter'],     replaces:['Autocannon'] },
            { label:'Missile Launcher', pts:0, weapons:['Missile Launcher'], replaces:['Autocannon'] },
            { label:'Reaper Autocannon',pts:0, weapons:['Reaper Autocannon'],replaces:['Autocannon'] },
            { label:'Plasma Cannon',    pts:0, weapons:['Plasma Cannon'],    replaces:['Autocannon'] },
          ]},
        ]},
    ],
    abilities:['Tank Hunters: Re-roll failed wound rolls against Vehicles',
               'Aspiring Champion: 1 per unit — may take power weapon',
               'Up to 4 models may take heavy weapons'] },

  { id:'csm_predator', name:'Chaos Predator',
    stats:['10"','5+','3+','6','7','11','3','8','3+'], role:'Heavy Support', pts:100, min:1, max:1, ppm:0,
    wargear:['Predator Autocannon'],
    abilities:['Smoke Launchers','Daemonic: 5+ invulnerable save',
               'Explodes: On 6 when destroyed — D6 mortal wounds within 6"'] },

  { id:'csm_land_raider', name:'Chaos Land Raider',
    stats:['10"','5+','3+','8','8','16','6','9','2+'], role:'Heavy Support', pts:225, min:1, max:1, ppm:0,
    wargear:['Twin Lascannons','Combi-Bolter'],
    abilities:['Daemonic: 5+ invulnerable save','Transport: Carries 10 Infantry models',
               'Smoke Launchers','Explodes: On 6 when destroyed — D6 mortal wounds within 6"'] },

  { id:'csm_maulerfiend', name:'Maulerfiend',
    stats:['10"','3+','5+','8','8','12','4','8','3+'], role:'Heavy Support', pts:155, min:1, max:1, ppm:0,
    wargear:['Lasher Tendrils','Power Fists'],
    abilities:['Daemonic: 5+ invulnerable save',
               'Frenzy: Add 1 to Attacks if charged or charged this turn',
               'Explodes: On 6 when destroyed — D3 mortal wounds within 3"'] },

  { id:'csm_defiler', name:'Defiler',
    stats:['8"','3+','3+','8','8','18','4','8','3+'], role:'Heavy Support', pts:205, min:1, max:1, ppm:0,
    wargear:['Battle Cannon','Reaper Autocannon','Twin Heavy Flamer','Defiler Claws','Defiler Scourge'],
    options:[
      { group:'Left Arm', choices:[
        { label:'Twin Heavy Flamer', pts:0,  default:true, weapons:['Twin Heavy Flamer'] },
        { label:'Havoc Launcher',    pts:0,  weapons:['Havoc Launcher'],   replaces:['Twin Heavy Flamer'] },
        { label:'Defiler Scourge',   pts:0,  weapons:['Defiler Scourge'],  replaces:['Twin Heavy Flamer'] },
      ]},
      { group:'Right Arm', choices:[
        { label:'Reaper Autocannon', pts:0,  default:true, weapons:['Reaper Autocannon'] },
        { label:'Twin Heavy Bolter', pts:0,  weapons:['Twin Heavy Bolter'],replaces:['Reaper Autocannon'] },
        { label:'Twin Lascannon',    pts:0,  weapons:['Twin Lascannon'],   replaces:['Reaper Autocannon'] },
      ]},
    ],
    abilities:['Daemonic: 5+ invulnerable save',
               'Infernal Regeneration: At start of your turn roll D6 — on 6 restore 1 lost wound',
               'Explodes: On 6 when destroyed — D6 mortal wounds within 6"'] },

  { id:'csm_defiler_new', name:'Defiler (New Kit)', isNew:true,
    stats:['8"','3+','3+','8','8','18','4','8','3+'], role:'Heavy Support', pts:205, min:1, max:1, ppm:0,
    wargear:['Hades Battle Cannon','Heavy Reaper Autocannon','Defiler Claws'],
    options:[
      { group:'Main Gun', choices:[
        { label:'Hades Battle Cannon',    pts:0,  default:true, weapons:['Hades Battle Cannon'] },
        { label:'Ectoplasma Destructor',  pts:0,  weapons:['Ectoplasma Destructor'],  replaces:['Hades Battle Cannon'] },
      ]},
      { group:'Right Hardpoint', choices:[
        { label:'Heavy Reaper Autocannon',pts:0,  default:true, weapons:['Heavy Reaper Autocannon'] },
        { label:'Hades Lascannon',        pts:0,  weapons:['Hades Lascannon'],         replaces:['Heavy Reaper Autocannon'] },
        { label:'Heavy Baleflamer',       pts:0,  weapons:['Heavy Baleflamer'],         replaces:['Heavy Reaper Autocannon'] },
      ]},
      { group:'Left Hardpoint', choices:[
        { label:'Heavy Reaper Autocannon',pts:0,  default:true, weapons:['Heavy Reaper Autocannon'] },
        { label:'Hades Lascannon',        pts:0,  weapons:['Hades Lascannon'],         replaces:['Heavy Reaper Autocannon'] },
        { label:'Heavy Missile Launcher', pts:0,  weapons:['Heavy Missile Launcher'],  replaces:['Heavy Reaper Autocannon'] },
      ]},
      { group:'Carapace Guns', choices:[
        { label:'Excruciator Cannons',    pts:0,  default:true, weapons:['Excruciator Cannons'] },
        { label:'Magma Cutters',          pts:0,  weapons:['Magma Cutters'],            replaces:['Excruciator Cannons'] },
      ]},
    ],
    abilities:['Daemonic: 5+ invulnerable save',
               'Infernal Regeneration: At start of your turn roll D6 — on 6 restore 1 lost wound',
               'Explodes: On 6 when destroyed — D6 mortal wounds within 6"',
               'NOTE: New 2026 kit — points and rules subject to revision'] },

  { id:'csm_rhino', name:'Chaos Rhino',
    stats:['12"','5+','3+','6','6','10','3','8','3+'], role:'Dedicated Transport', pts:72, min:1, max:1, ppm:0,
    wargear:['Combi-Bolter'],
    abilities:['Smoke Launchers','Transport: Carries 10 Infantry models',
               'Daemonic: 5+ invulnerable save'] },

  { id:'csm_helbrute', name:'Helbrute',
    stats:['6"','3+','3+','6','7','8','4','8','3+'], role:'Elites', pts:105, min:1, max:1, ppm:0,
    wargear:['Multi-melta','Helbrute Fist'],
    options:[
      { group:'Main Arm', choices:[
        { label:'Multi-melta',    pts:0,  default:true, weapons:['Multi-melta'] },
        { label:'Twin Lascannon', pts:20, weapons:['Twin Lascannon'], replaces:['Multi-melta'] },
        { label:'Plasma Cannon',  pts:5,  weapons:['Plasma Cannon'],  replaces:['Multi-melta'] },
        { label:'Helbrute Hammer',pts:0,  weapons:['Helbrute Hammer'],replaces:['Multi-melta'] },
      ]},
      { group:'Fist Arm', choices:[
        { label:'Helbrute Fist',   pts:0, default:true },
        { label:'Helbrute Hammer', pts:0, weapons:['Helbrute Hammer'], replaces:['Helbrute Fist'] },
        { label:'Power Scourge',   pts:5, weapons:['Power Scourge'],   replaces:['Helbrute Fist'] },
      ]},
    ],
    abilities:['Crazed: At start of each Fight phase roll D6 — on 6 make D3 additional attacks',
               'Explodes: On 6 — D3 mortal wounds within 6"'] },

  { id:'csm_chaos_spawn', name:'Chaos Spawn',
    stats:['6"','4+','4+','5','5','5','D6','7','5+'], role:'Fast Attack', pts:23, min:1, max:5, ppm:23,
    wargear:['Hideous Mutations'],
    abilities:['Writhing Tentacles: Roll D3 at start of each Fight phase — this model gains that many additional attacks',
               'Fearless: Auto-pass Morale tests'] }

];
