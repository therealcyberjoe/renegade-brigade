// FACTION_BLOOD_ANGELS — chapter-specific units + shared SM pool
// Must be loaded AFTER sm_shared.js
const FACTION_BLOOD_ANGELS = [
  ...SM_SHARED_UNITS,

  { id:'ba_dante', name:'Commander Dante',
    stats:['12"','2+','2+','4','4','6','5','10','2+'], role:'HQ', pts:195, min:1, max:1, ppm:0, unique:true,
    wargear:['Axe Mortalis','Perdition Pistol','Inferno Pistol'],
    abilities:['Chapter Master: Re-roll all failed hit rolls for Blood Angels within 6"',
               '4+ invulnerable save','Tactical Genius: Add 1 to all hit rolls for Blood Angels within 6"',
               'Blood Angels only'] },

  { id:'ba_mephiston', name:'Mephiston, Lord of Death',
    stats:['6"','2+','2+','5','4','6','5','10','2+'], role:'HQ', pts:165, min:1, max:1, ppm:0, unique:true,
    wargear:['Force Sword','Plasma Pistol'],
    abilities:['Psyker: Mastery Level 3','4+ invulnerable save',
               'Transfixing Gaze: Once per Fight phase pick enemy Character within 3" — it fights last',
               'Lord of Death: At start of Fight phase if within 1" of any enemy add 1 to Attacks',
               'Blood Angels only'] },

  { id:'ba_captain', name:'Captain',
    stats:['6"','3+','3+','4','4','5','4','9','3+'], role:'HQ', pts:74, min:1, max:1, ppm:0,
    wargear:['Power Sword','Bolt Pistol'],
    abilities:['And They Shall Know No Fear','Iron Halo: 4+ invulnerable save',
               'Rites of Battle: Re-roll hit rolls of 1 for friendly Blood Angels within 6"'] },

  { id:'ba_tycho', name:'Brother-Captain Tycho',
    stats:['6"','2+','2+','4','4','5','5','9','2+'], role:'HQ', pts:95, min:1, max:1, ppm:0, unique:true,
    wargear:['Master-crafted Bolter','Combi-melta','The Blood Song'],
    abilities:['Death Mask of Sanguinius: Enemy units within 3" subtract 1 from Leadership',
               'Honour of the Chapter: Friendly Blood Angels within 6" re-roll hit rolls of 1',
               '4+ invulnerable save','Blood Angels only'] },

  { id:'ba_death_company', name:'Death Company Marines',
    stats:['12"','3+','3+','4','4','1','2','8','3+'], role:'Elites', pts:95, min:5, max:30, ppm:19,
    wargear:[],
    composition:[
      { role:'Death Company Marine', count:5, wargear:['Chainsword','Bolt Pistol','Jump Pack'],
        options:[
          { group:'Melee', choices:[
            { label:'Chainsword',    pts:0, default:true },
            { label:'Power Sword',   pts:4, weapons:['Power Sword'],   replaces:['Chainsword'] },
            { label:'Power Axe',     pts:5, weapons:['Power Axe'],     replaces:['Chainsword'] },
            { label:'Power Fist',    pts:9, weapons:['Power Fist'],    replaces:['Chainsword'] },
            { label:'Thunder Hammer',pts:12,weapons:['Thunder Hammer'],replaces:['Chainsword'] },
          ]},
          { group:'Ranged', choices:[
            { label:'Bolt Pistol',   pts:0, default:true },
            { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
            { label:'Inferno Pistol',pts:5, weapons:['Inferno Pistol'],replaces:['Bolt Pistol'] },
          ]},
        ]},
    ],
    abilities:['And They Shall Know No Fear',
               'Black Rage: Add 1 to Attacks and subtract 1 from Leadership — must move toward nearest enemy',
               'Relentless: Always Advance toward nearest enemy'] },

  { id:'ba_sanguinary_guard', name:'Sanguinary Guard',
    stats:['12"','3+','3+','4','4','2','2','8','2+'], role:'Elites', pts:160, min:5, max:10, ppm:32,
    wargear:[],
    composition:[
      { role:'Sanguinary Guard', count:5, wargear:['Encarmine Sword','Angelus Boltgun'],
        options:[
          { group:'Melee', choices:[
            { label:'Encarmine Sword', pts:0, default:true, weapons:['Encarmine Sword'] },
            { label:'Encarmine Axe',   pts:0, weapons:['Encarmine Axe'], replaces:['Encarmine Sword'] },
          ]},
          { group:'Ranged', choices:[
            { label:'Angelus Boltgun', pts:0, default:true, weapons:['Angelus Boltgun'] },
            { label:'Plasma Pistol',   pts:5, weapons:['Plasma Pistol'],  replaces:['Angelus Boltgun'] },
            { label:'Inferno Pistol',  pts:5, weapons:['Inferno Pistol'], replaces:['Angelus Boltgun'] },
          ]},
        ]},
    ],
    abilities:['And They Shall Know No Fear',
               'Aegis Armour: 4+ invulnerable save',
               'Death Masks: Enemy units within 3" subtract 1 from Leadership'] },

  { id:'ba_assault', name:'Assault Squad',
    stats:['12"','3+','3+','4','4','1','1','7','3+'], role:'Fast Attack', pts:65, min:5, max:10, ppm:13,
    wargear:[],
    composition:[
      { role:'Sergeant', count:1, wargear:['Chainsword','Bolt Pistol','Jump Pack'],
        options:[
          { group:'Melee', choices:[
            { label:'Chainsword',    pts:0, default:true },
            { label:'Power Sword',   pts:4, weapons:['Power Sword'],   replaces:['Chainsword'] },
            { label:'Power Fist',    pts:9, weapons:['Power Fist'],    replaces:['Chainsword'] },
            { label:'Thunder Hammer',pts:12,weapons:['Thunder Hammer'],replaces:['Chainsword'] },
          ]},
          { group:'Sidearm', choices:[
            { label:'Bolt Pistol',   pts:0, default:true },
            { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
            { label:'Inferno Pistol',pts:5, weapons:['Inferno Pistol'],replaces:['Bolt Pistol'] },
            { label:'Hand Flamer',   pts:3, weapons:['Hand Flamer'],   replaces:['Bolt Pistol'] },
          ]},
        ]},
      { role:'Special Weapon (up to 2)', count:2, wargear:['Bolt Pistol','Chainsword','Jump Pack'],
        options:[
          { group:'Special', choices:[
            { label:'Bolt Pistol',   pts:0, default:true },
            { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
            { label:'Inferno Pistol',pts:5, weapons:['Inferno Pistol'],replaces:['Bolt Pistol'] },
            { label:'Hand Flamer',   pts:3, weapons:['Hand Flamer'],   replaces:['Bolt Pistol'] },
          ]},
        ]},
      { role:'Assault Marine', count:2, wargear:['Bolt Pistol','Chainsword','Jump Pack'] },
    ],
    abilities:['And They Shall Know No Fear','Jump Pack Assault: Advance and charge same turn',
               'Red Thirst: Add 1 to wound rolls if this unit charged'] },

  { id:'ba_tactical', name:'Tactical Squad',
    stats:['6"','3+','3+','4','4','1','1','7','3+'], role:'Troops', pts:65, min:5, max:10, ppm:13,
    wargear:[],
    composition:[
      { role:'Sergeant', count:1, wargear:['Boltgun','Bolt Pistol','Frag & Krak Grenades'],
        options:[
          { group:'Melee', choices:[
            { label:'None',          pts:0, default:true },
            { label:'Chainsword',    pts:0, weapons:['Chainsword'],  replaces:[] },
            { label:'Power Sword',   pts:4, weapons:['Power Sword'], replaces:['Boltgun'] },
            { label:'Power Fist',    pts:9, weapons:['Power Fist'],  replaces:['Boltgun'] },
          ]},
          { group:'Sidearm', choices:[
            { label:'Bolt Pistol',   pts:0, default:true },
            { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
          ]},
        ]},
      { role:'Special Weapon', count:1, wargear:['Boltgun','Bolt Pistol'],
        options:[
          { group:'Special', choices:[
            { label:'Boltgun',    pts:0, default:true },
            { label:'Flamer',     pts:0, weapons:['Flamer'],     replaces:['Boltgun'] },
            { label:'Meltagun',   pts:0, weapons:['Meltagun'],   replaces:['Boltgun'] },
            { label:'Plasma Gun', pts:0, weapons:['Plasma Gun'], replaces:['Boltgun'] },
          ]},
        ]},
      { role:'Heavy Weapon', count:1, wargear:['Heavy Bolter','Bolt Pistol'],
        options:[
          { group:'Heavy', choices:[
            { label:'Heavy Bolter',     pts:0, default:true, weapons:['Heavy Bolter'] },
            { label:'Lascannon',        pts:0, weapons:['Lascannon'],        replaces:['Heavy Bolter'] },
            { label:'Missile Launcher', pts:0, weapons:['Missile Launcher'], replaces:['Heavy Bolter'] },
            { label:'Plasma Cannon',    pts:0, weapons:['Plasma Cannon'],    replaces:['Heavy Bolter'] },
            { label:'Multi-melta',      pts:0, weapons:['Multi-melta'],      replaces:['Heavy Bolter'] },
          ]},
        ]},
      { role:'Trooper', count:2, wargear:['Boltgun','Bolt Pistol','Frag & Krak Grenades'] },
    ],
    abilities:['And They Shall Know No Fear','Combat Squads','Red Thirst'] },

  { id:'ba_intercessors', name:'Intercessor Squad',
    stats:['6"','3+','3+','4','4','2','2','7','3+'], role:'Troops', pts:85, min:5, max:10, ppm:17,
    wargear:[],
    composition:[
      { role:'Sergeant', count:1, wargear:['Bolt Rifle','Bolt Pistol'],
        options:[
          { group:'Bolt Rifle', choices:[
            { label:'Bolt Rifle',         pts:0, default:true, weapons:['Bolt Rifle'] },
            { label:'Auto Bolt Rifle',    pts:0, weapons:['Auto Bolt Rifle'],    replaces:['Bolt Rifle'] },
            { label:'Stalker Bolt Rifle', pts:0, weapons:['Stalker Bolt Rifle'], replaces:['Bolt Rifle'] },
          ]},
          { group:'Melee', choices:[
            { label:'None',       pts:0, default:true },
            { label:'Chainsword', pts:0, weapons:['Chainsword'], replaces:[] },
            { label:'Power Sword',pts:4, weapons:['Power Sword'],replaces:['Bolt Rifle'] },
          ]},
        ]},
      { role:'Intercessor', count:4, wargear:['Bolt Rifle','Bolt Pistol'] },
    ],
    abilities:['And They Shall Know No Fear','Combat Squads','Red Thirst'] },

  { id:'ba_baal_predator', name:'Baal Predator',
    stats:['12"','5+','3+','6','7','11','3','8','3+'], role:'Fast Attack', pts:130, min:1, max:1, ppm:0,
    wargear:['Twin Assault Cannon','Heavy Bolter Sponsons'],
    abilities:['Smoke Launchers','Fast Tank: May Advance and fire Assault weapons without penalty',
               'Explodes: On 6 when destroyed — D6 mortal wounds within 6"'] },

  { id:'ba_dc_brutalis', name:'Death Company Brutalis Dreadnought',
    stats:['8"','2+','3+','8','10','12','5','9','2+'], role:'Elites', pts:185, min:1, max:1, ppm:0, isNew:true,
    wargear:['Brutalis Fists','Twin Bolt Rifles'],
    abilities:['And They Shall Know No Fear',
               'Black Rage: Add 1 to Attacks — must always move toward nearest enemy and charge if able',
               'Red Thirst: Add 1 to all wound rolls if this model charged',
               'Explodes: On 6 when destroyed — D6 mortal wounds within 3"'] },

  // ── NAMED CHARACTERS (additional) ───────────────────────────────────
  { id:'ba_sanguinor', name:'The Sanguinor, Exemplar of the Host', unique:true,
    stats:['12"','2+','2+','4','4','5','6','9','2+'], role:'HQ', pts:170, min:1, max:1, ppm:0,
    wargear:['Archangel Sword','Perdition Pistol'],
    abilities:['And They Shall Know No Fear',
               '4+ invulnerable save',
               'Aura of Fervour: Friendly Blood Angels within 6" gain +1 Attack',
               'Miraculous Saviour: If any friendly Blood Angels model was slain this turn roll D6 — on 3+ this model may arrive from deep strike within 1" of an enemy',
               'Champion of Baal: Re-roll all failed hit rolls'] },

  { id:'ba_lemartes', name:'Lemartes — Guardian of the Lost', unique:true,
    stats:['12"','2+','3+','4','4','4','5','9','3+'], role:'Elites', pts:110, min:1, max:1, ppm:0,
    wargear:['Blood Crozius','Bolt Pistol','Jump Pack'],
    abilities:['And They Shall Know No Fear',
               'Black Rage: +1 Attack — ignore wounds on 6+',
               '4+ invulnerable save',
               'Fury Unbound: Friendly Death Company within 6" re-roll failed hit rolls and failed charge rolls',
               'Guardian of the Lost: Death Company within 6" auto-pass Morale'] },

  { id:'ba_astorath', name:'Astorath the Grim — Redeemer of the Lost', unique:true,
    stats:['12"','2+','2+','4','4','5','4','9','2+'], role:'HQ', pts:110, min:1, max:1, ppm:0,
    wargear:["The Executioner's Axe",'Bolt Pistol','Jump Pack'],
    abilities:['And They Shall Know No Fear',
               '4+ invulnerable save',
               'Litanies of Hate: Friendly Blood Angels within 6" re-roll failed hit rolls in the Fight phase',
               'High Chaplain: Friendly Death Company within 6" re-roll all failed hit and wound rolls',
               "Mass of Doom: Once per game — one friendly Death Company unit gains +1 Attack until end of phase"] },

  { id:'ba_corbulo', name:'Brother Corbulo', unique:true,
    stats:['6"','3+','3+','4','4','4','3','9','2+'], role:'Elites', pts:95, min:1, max:1, ppm:0,
    wargear:["Heaven's Teeth",'Bolt Pistol','Narthecium'],
    abilities:['And They Shall Know No Fear',
               'Narthecium: At start of your turn restore 1 wound to one friendly Blood Angels Infantry within 3"',
               "Red Grail: Friendly Blood Angels within 6\" add 1 to Strength — unmodified hit rolls of 6 generate 1 additional attack",
               'Far-seeing Eye: Once per game re-roll any single dice roll'] },


  // ── CHAPTER-SPECIFIC VEHICLES ────────────────────────────────────────
  { id:'ba_baal_predator', name:'Baal Predator',
    stats:['12"','5+','3+','6','7','11','3','8','3+'], role:'Fast Attack', pts:107, min:1, max:1, ppm:0,
    wargear:['Twin Baal Pattern Assault Cannon','Heavy Bolter Sponsons'],
    options:[
      { group:'Main Weapon', choices:[
        { label:'Twin Assault Cannon', pts:0, default:true, weapons:['Twin Assault Cannon'] },
        { label:'Flamestorm Cannon',   pts:5, weapons:['Flamestorm Cannon'], replaces:['Twin Assault Cannon'] },
      ]},
      { group:'Sponsons', choices:[
        { label:'Heavy Bolter Sponsons',pts:0, default:true, weapons:['Heavy Bolter Sponsons'] },
        { label:'Heavy Flamer Sponsons',pts:0, weapons:['Heavy Flamer Sponsons'], replaces:['Heavy Bolter Sponsons'] },
        { label:'No Sponsons',          pts:-10, replaces:['Heavy Bolter Sponsons'] },
      ]},
    ],
    abilities:['Smoke Launchers',
               'Overcharged Engines: Once per game — Advance D6+3" instead of rolling',
               'Explodes: On 6 — D3 mortal wounds within 6"',
               'Red Thirst: +1 to wound rolls if this unit charged'] },

  { id:'ba_furioso', name:'Furioso Dreadnought',
    stats:['6"','3+','3+','6','7','8','4','8','3+'], role:'Elites', pts:115, min:1, max:1, ppm:0,
    wargear:['Blood Fists (x2)','Meltagun','Storm Bolter'],
    options:[
      { group:'Arms', choices:[
        { label:'Blood Fists & Storm Bolter', pts:0, default:true },
        { label:'Blood Talons (replace both fists)', pts:20, weapons:['Blood Talons'], replaces:['Blood Fists (x2)','Storm Bolter'] },
        { label:'Frag Cannon (replace one fist)', pts:20, weapons:['Frag Cannon'], replaces:[] },
      ]},
      { group:'Support Weapon', choices:[
        { label:'Storm Bolter', pts:0, default:true },
        { label:'Heavy Flamer', pts:14, weapons:['Heavy Flamer'], replaces:['Storm Bolter'] },
      ]},
    ],
    abilities:['And They Shall Know No Fear',
               'Blood Fists: Re-roll failed hit rolls — S+3 AP-3 D3',
               'Blood Talons: Re-roll failed hit and wound rolls — on each unmodified hit of 6 make 1 additional attack',
               'Explodes: On 6 — D3 mortal wounds within 6"',
               'Red Thirst: +1 to wound rolls if this unit charged'] },

  { id:'ba_dc_dreadnought', name:'Death Company Dreadnought',
    stats:['6"','3+','3+','6','7','8','4','8','3+'], role:'Elites', pts:125, min:1, max:1, ppm:0,
    wargear:['Blood Fists (x2)','Meltagun','Storm Bolter'],
    options:[
      { group:'Arms', choices:[
        { label:'Blood Fists & Storm Bolter', pts:0, default:true },
        { label:'Blood Talons (replace both fists)', pts:20, weapons:['Blood Talons'], replaces:['Blood Fists (x2)','Storm Bolter'] },
      ]},
      { group:'Support Weapon', choices:[
        { label:'Storm Bolter', pts:0, default:true },
        { label:'Heavy Flamer', pts:14, weapons:['Heavy Flamer'], replaces:['Storm Bolter'] },
      ]},
    ],
    abilities:['And They Shall Know No Fear',
               'Black Rage: +1 Attack — ignore wounds on unmodified save rolls of 6',
               'Crazed: At start of each Fight phase roll D6 — on 6 make D3 additional attacks',
               'Explodes: On 6 — D3 mortal wounds within 6"'] },

];
