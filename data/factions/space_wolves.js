// FACTION_SPACE_WOLVES — chapter-specific units + shared SM pool
// Must be loaded AFTER sm_shared.js
var FACTION_SPACE_WOLVES = [
  ...SM_SHARED_UNITS,

  { id:'sw_ragnar', name:'Ragnar Blackmane',
    stats:['6"','2+','2+','4','4','5','5','9','3+'], role:'HQ', pts:130, min:1, max:1, ppm:0, unique:true,
    wargear:['Frostfang','Bolt Pistol'],
    abilities:['And They Shall Know No Fear','4+ invulnerable save',
               'Frenzied Charge: Friendly Space Wolves within 6" may Advance and charge in same turn',
               "Headstrong: Ragnar must always move toward the nearest enemy if possible",
               'Space Wolves only'] },

  { id:'sw_logan', name:'Logan Grimnar',
    stats:['5"','2+','2+','4','4','6','4','10','2+'], role:'HQ', unique:true, pts:215, min:1, max:1, ppm:0,
    wargear:['Axe Morkai','Storm Bolter'],
    abilities:['Chapter Master: Re-roll all failed hit rolls for Space Wolves within 6"',
               '3+ invulnerable save',
               'High King of Fenris: Add 1 to Attacks for Space Wolves within 6"',
               'Space Wolves only'] },

  { id:'sw_bjorn', name:'Bjorn the Fell-Handed',
    stats:['6"','2+','3+','7','7','12','5','9','2+'], role:'Elites', pts:200, min:1, max:1, ppm:0, unique:true,
    wargear:['Trueclaw','Helfrost Cannon or Twin Lascannon'],
    abilities:['The Oldest and the Deadliest: Friendly Space Wolves within 6" re-roll hit rolls of 1',
               'Ancient: Once per game use any Stratagem for 0 CP',
               'Explodes: On 6 when destroyed — D6 mortal wounds within 3"',
               'Space Wolves only'] },

  { id:'sw_canis', name:'Canis Wolfborn',
    stats:['12"','3+','3+','5','5','5','5','8','3+'], role:'HQ', pts:95, min:1, max:1, ppm:0, unique:true,
    wargear:['Fangsword','Fang of Morkai'],
    abilities:['Bestial Nature: +1 Attack for each Fenrisian Wolf within 6"',
               'Ride the Wolves: Always counts as having made a charge move if within 1" of enemy at start of Fight phase',
               'Space Wolves only'] },

  { id:'sw_wolf_guard', name:'Wolf Guard',
    stats:['6"','3+','3+','4','4','1','2','8','3+'], role:'Elites', pts:90, min:5, max:10, ppm:18,
    wargear:[],
    composition:[
      { role:'Wolf Guard', count:5, wargear:['Bolt Pistol','Chainsword'],
        options:[
          { group:'Melee', choices:[
            { label:'Chainsword',    pts:0, default:true },
            { label:'Power Sword',   pts:4, weapons:['Power Sword'],   replaces:['Chainsword'] },
            { label:'Power Axe',     pts:5, weapons:['Power Axe'],     replaces:['Chainsword'] },
            { label:'Power Fist',    pts:9, weapons:['Power Fist'],    replaces:['Chainsword'] },
            { label:'Thunder Hammer',pts:12,weapons:['Thunder Hammer'],replaces:['Chainsword'] },
            { label:'Lightning Claw',pts:6, weapons:['Lightning Claw'],replaces:['Chainsword'] },
          ]},
          { group:'Ranged', choices:[
            { label:'Bolt Pistol',   pts:0, default:true },
            { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
            { label:'Storm Bolter',  pts:2, weapons:['Storm Bolter'],  replaces:['Bolt Pistol'] },
            { label:'Combi-melta',   pts:10,weapons:['Combi-melta'],   replaces:['Bolt Pistol'] },
          ]},
        ]},
    ],
    abilities:['And They Shall Know No Fear',
               'Wolf Guard Pack Leader: May be attached to other units as a Sergeant upgrade'] },

  { id:'sw_blood_claws', name:'Blood Claws',
    stats:['6"','3+','3+','4','4','1','1','7','3+'], role:'Troops', pts:65, min:5, max:15, ppm:13,
    wargear:[],
    composition:[
      { role:'Wolf Guard Pack Leader', count:1, wargear:['Bolt Pistol','Chainsword'],
        options:[
          { group:'Melee', choices:[
            { label:'Chainsword',    pts:0, default:true },
            { label:'Power Sword',   pts:4, weapons:['Power Sword'],  replaces:['Chainsword'] },
            { label:'Power Fist',    pts:9, weapons:['Power Fist'],   replaces:['Chainsword'] },
          ]},
          { group:'Sidearm', choices:[
            { label:'Bolt Pistol',   pts:0, default:true },
            { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'],replaces:['Bolt Pistol'] },
          ]},
        ]},
      { role:'Blood Claw', count:4, wargear:['Bolt Pistol','Chainsword'] },
    ],
    abilities:['And They Shall Know No Fear',
               'Headstrong: Re-roll failed charge rolls',
               'Blood Frenzy: Add 1 to Attacks on turn they charge — subtract 1 from hit rolls'] },

  { id:'sw_grey_hunters', name:'Grey Hunters',
    stats:['6"','3+','3+','4','4','1','1','7','3+'], role:'Troops', pts:65, min:5, max:10, ppm:13,
    wargear:[],
    composition:[
      { role:'Wolf Guard Pack Leader', count:1, wargear:['Boltgun','Bolt Pistol'],
        options:[
          { group:'Melee', choices:[
            { label:'None',          pts:0, default:true },
            { label:'Chainsword',    pts:0, weapons:['Chainsword'],   replaces:[] },
            { label:'Power Sword',   pts:4, weapons:['Power Sword'],  replaces:['Boltgun'] },
            { label:'Power Fist',    pts:9, weapons:['Power Fist'],   replaces:['Boltgun'] },
          ]},
          { group:'Ranged', choices:[
            { label:'Boltgun',       pts:0, default:true },
            { label:'Combi-melta',   pts:10,weapons:['Combi-melta'],  replaces:['Boltgun'] },
            { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'],replaces:['Bolt Pistol'] },
          ]},
        ]},
      { role:'Special Weapon (1)', count:1, wargear:['Boltgun','Bolt Pistol'],
        options:[
          { group:'Special', choices:[
            { label:'Boltgun',    pts:0, default:true },
            { label:'Plasma Gun', pts:5, weapons:['Plasma Gun'], replaces:['Boltgun'] },
            { label:'Meltagun',   pts:5, weapons:['Meltagun'],   replaces:['Boltgun'] },
            { label:'Flamer',     pts:3, weapons:['Flamer'],     replaces:['Boltgun'] },
          ]},
        ]},
      { role:'Grey Hunter', count:3, wargear:['Boltgun','Bolt Pistol'] },
    ],
    abilities:['And They Shall Know No Fear',
               'Counter-charge: When charged re-roll hit rolls of 1'] },

  { id:'sw_fenrisian_wolves', name:'Fenrisian Wolves',
    stats:['10"','3+','5+','4','4','1','2','5','6+'], role:'Fast Attack', pts:40, min:5, max:15, ppm:8,
    wargear:[],
    composition:[
      { role:'Fenrisian Wolf', count:5, wargear:['Fenrisian Bite'] },
    ],
    abilities:['Hunting Pack: If 10+ models in unit add 1 to Attacks',
               "Bounding Leap: Add 3\" to Advance rolls"] },

  { id:'sw_long_fangs', name:'Long Fangs',
    stats:['6"','3+','3+','4','4','1','1','7','3+'], role:'Heavy Support', pts:95, min:2, max:11, ppm:14,
    wargear:['Boltgun','Missile Launchers'],
    abilities:['And They Shall Know No Fear',
               'Fire Discipline: May fire heavy weapons without penalty if they did not move',
               'Up to 5 models may take heavy weapons'] },

  { id:'sw_ulrik', name:'Ulrik the Slayer', unique:true,
    stats:['6"','2+','3+','4','4','4','3','9','3+'], role:'HQ', pts:100, min:1, max:1, ppm:0,
    wargear:['Slayer Knife','Plasma Pistol','Wolf Helm of Russ'],
    abilities:['And They Shall Know No Fear',
               "Wolf Helm of Russ: Friendly Space Wolves within 6\" may use Ulrik's Leadership",
               'Master of Sanctity: Friendly Space Wolves within 6" re-roll failed hit rolls in the Fight phase',
               'The Old Wolf: Once per game — one friendly unit within 6" may immediately consolidate even if it did not fight this turn',
               'Slayer Knife: AP-1 D2 — wound rolls of 6 deal 1 mortal wound in addition'] },

  { id:'sw_arjac', name:'Arjac Rockfist — Anvil of Fenris', unique:true,
    stats:['5"','2+','3+','4','4','5','4','9','2+'], role:'Elites', pts:120, min:1, max:1, ppm:0,
    wargear:['Foehammer','Anvil Shield','Storm Bolter','Terminator Armour'],
    abilities:['And They Shall Know No Fear',
               '4+ invulnerable save — Terminator Armour: 2+ save',
               'Teleport Strike: Deep strike — arrive 9"+ from enemy',
               'Bodyguard: Roll D6 when nearby Wolf Lord loses a wound — on 4+ Arjac suffers it instead',
               'Foehammer: Can be thrown — Assault 1, Range 12", S10 AP-3 D3 — after shooting returns to Arjac'] },



  // ── HQ ──────────────────────────────────────────────────────────────

  { id:'sw_wolf_lord', name:'Wolf Lord',
    stats:['6"','2+','2+','4','4','5','4','9','3+'], role:'HQ', pts:92, min:1, max:1, ppm:0,
    wargear:['Power Sword','Bolt Pistol'],
    options:[
      { group:'Melee', choices:[
        { label:'Power Sword',    pts:0,  default:true, weapons:['Power Sword'] },
        { label:'Power Axe',      pts:0,  weapons:['Power Axe'],      replaces:['Power Sword'] },
        { label:'Power Fist',     pts:5,  weapons:['Power Fist'],     replaces:['Power Sword'] },
        { label:'Thunder Hammer', pts:8,  weapons:['Thunder Hammer'], replaces:['Power Sword'] },
        { label:'Lightning Claws',pts:8,  weapons:['Lightning Claws'],replaces:['Power Sword'] },
        { label:'Frost Axe',      pts:4,  weapons:['Frost Axe'],      replaces:['Power Sword'] },
        { label:'Frost Sword',    pts:4,  weapons:['Frost Sword'],    replaces:['Power Sword'] },
      ]},
      { group:'Ranged', choices:[
        { label:'Bolt Pistol',     pts:0,  default:true, weapons:['Bolt Pistol'] },
        { label:'Plasma Pistol',   pts:5,  weapons:['Plasma Pistol'],  replaces:['Bolt Pistol'] },
        { label:'Storm Bolter',    pts:2,  weapons:['Storm Bolter'],   replaces:['Bolt Pistol'] },
        { label:'Combi-melta',     pts:10, weapons:['Combi-melta'],    replaces:['Bolt Pistol'] },
        { label:'Boltgun',         pts:0,  weapons:['Boltgun'],        replaces:['Bolt Pistol'] },
      ]},
    ],
    abilities:['And They Shall Know No Fear','Iron Halo: 4+ invulnerable save',
               'Rites of Battle: Re-roll hit rolls of 1 for Space Wolves within 6"'] },

  { id:'sw_wolf_lord_thunderwolf', name:'Wolf Lord on Thunderwolf',
    stats:['10"','2+','2+','5','5','6','4','9','3+'], role:'HQ', pts:138, min:1, max:1, ppm:0,
    wargear:['Power Sword','Bolt Pistol','Thunderwolf Bite'],
    options:[
      { group:'Melee', choices:[
        { label:'Power Sword',    pts:0,  default:true, weapons:['Power Sword'] },
        { label:'Power Fist',     pts:5,  weapons:['Power Fist'],     replaces:['Power Sword'] },
        { label:'Thunder Hammer', pts:8,  weapons:['Thunder Hammer'], replaces:['Power Sword'] },
        { label:'Lightning Claws',pts:8,  weapons:['Lightning Claws'],replaces:['Power Sword'] },
        { label:'Frost Axe',      pts:4,  weapons:['Frost Axe'],      replaces:['Power Sword'] },
      ]},
      { group:'Offhand', choices:[
        { label:'Bolt Pistol',    pts:0, default:true, weapons:['Bolt Pistol'] },
        { label:'Plasma Pistol',  pts:5, weapons:['Plasma Pistol'],  replaces:['Bolt Pistol'] },
        { label:'Storm Shield',   pts:5, weapons:['Storm Shield'],   replaces:['Bolt Pistol'] },
      ]},
    ],
    abilities:['And They Shall Know No Fear','Iron Halo: 4+ invulnerable save',
               'Rites of Battle: Re-roll hit rolls of 1 for Space Wolves within 6"',
               'Cavalry: Can move 10" and still fire heavy weapons without penalty'] },

  { id:'sw_rune_priest', name:'Rune Priest',
    stats:['6"','3+','3+','4','4','4','3','9','3+'], role:'HQ', pts:88, min:1, max:1, ppm:0,
    wargear:['Runic Axe','Bolt Pistol'],
    options:[
      { group:'Melee', choices:[
        { label:'Runic Axe',   pts:0, default:true, weapons:['Runic Axe'] },
        { label:'Runic Sword', pts:0, weapons:['Runic Sword'], replaces:['Runic Axe'] },
        { label:'Runic Staff', pts:0, weapons:['Runic Staff'], replaces:['Runic Axe'] },
      ]},
      { group:'Sidearm', choices:[
        { label:'Bolt Pistol',   pts:0, default:true, weapons:['Bolt Pistol'] },
        { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
      ]},
    ],
    abilities:['And They Shall Know No Fear',
               'Psyker: Mastery Level 1 — Smite + 1 power from Tempestas discipline',
               'Rune Armour: Deny the Witch on +1 — 4+ invulnerable save',
               'Runic Weapons: When manifesting Psychic powers within 12" of enemy Psyker — Perils on any double'] },

  { id:'sw_wolf_priest', name:'Wolf Priest',
    stats:['6"','3+','3+','4','4','4','3','9','3+'], role:'HQ', pts:88, min:1, max:1, ppm:0,
    wargear:['Crozius Arcanum','Bolt Pistol','Healing Draught'],
    options:[
      { group:'Sidearm', choices:[
        { label:'Bolt Pistol',   pts:0, default:true, weapons:['Bolt Pistol'] },
        { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
        { label:'Storm Bolter',  pts:2, weapons:['Storm Bolter'],  replaces:['Bolt Pistol'] },
      ]},
    ],
    abilities:['And They Shall Know No Fear','Rosarius: 4+ invulnerable save',
               'Spiritual Leader: Friendly Space Wolves within 6" re-roll failed Morale tests',
               'Healing Draught: Once per game — restore D3 wounds to one friendly Space Wolf within 3"',
               'Benediction of Fury: Friendly Space Wolves within 6" re-roll hit rolls of 1 in Fight phase'] },

  { id:'sw_iron_priest', name:'Iron Priest',
    stats:['6"','3+','3+','4','4','4','2','8','3+'], role:'HQ', pts:67, min:1, max:1, ppm:0,
    wargear:['Tempest Hammer','Helfrost Pistol','Servo-arm'],
    abilities:['And They Shall Know No Fear',
               'Blessing of the Omnissiah: Restore D3 wounds to one friendly Vehicle within 1"',
               'Master of Iron: Friendly Space Wolves Vehicles within 6" re-roll 1s for Explodes results',
               'Servo-arm: S8 AP-2 D3'] },

  { id:'sw_wolf_guard_bl', name:'Wolf Guard Battle Leader',
    stats:['6"','2+','3+','4','4','4','3','8','3+'], role:'HQ', pts:68, min:1, max:1, ppm:0,
    wargear:['Chainsword','Bolt Pistol'],
    options:[
      { group:'Melee', choices:[
        { label:'Chainsword',     pts:0, default:true, weapons:['Chainsword'] },
        { label:'Power Sword',    pts:4, weapons:['Power Sword'],    replaces:['Chainsword'] },
        { label:'Power Fist',     pts:9, weapons:['Power Fist'],     replaces:['Chainsword'] },
        { label:'Thunder Hammer', pts:12,weapons:['Thunder Hammer'], replaces:['Chainsword'] },
        { label:'Lightning Claws',pts:8, weapons:['Lightning Claws'],replaces:['Chainsword'] },
        { label:'Frost Axe',      pts:4, weapons:['Frost Axe'],      replaces:['Chainsword'] },
      ]},
      { group:'Ranged', choices:[
        { label:'Bolt Pistol',    pts:0, default:true, weapons:['Bolt Pistol'] },
        { label:'Storm Bolter',   pts:2, weapons:['Storm Bolter'],  replaces:['Bolt Pistol'] },
        { label:'Plasma Pistol',  pts:5, weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
        { label:'Combi-melta',    pts:10,weapons:['Combi-melta'],   replaces:['Bolt Pistol'] },
      ]},
    ],
    abilities:['And They Shall Know No Fear','Iron Halo: 4+ invulnerable save',
               'Precision Strikes: Re-roll failed wound rolls of 1 for Space Wolves within 6"'] },

  { id:'sw_wolf_guard_bl_tw', name:'Wolf Guard Battle Leader on Thunderwolf',
    stats:['10"','2+','3+','5','5','5','3','8','3+'], role:'HQ', pts:95, min:1, max:1, ppm:0,
    wargear:['Chainsword','Bolt Pistol','Thunderwolf Bite'],
    options:[
      { group:'Melee', choices:[
        { label:'Chainsword',     pts:0, default:true, weapons:['Chainsword'] },
        { label:'Power Fist',     pts:9, weapons:['Power Fist'],     replaces:['Chainsword'] },
        { label:'Thunder Hammer', pts:12,weapons:['Thunder Hammer'], replaces:['Chainsword'] },
        { label:'Frost Axe',      pts:4, weapons:['Frost Axe'],      replaces:['Chainsword'] },
      ]},
      { group:'Offhand', choices:[
        { label:'Bolt Pistol',   pts:0, default:true, weapons:['Bolt Pistol'] },
        { label:'Storm Shield',  pts:5, weapons:['Storm Shield'],  replaces:['Bolt Pistol'] },
        { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
      ]},
    ],
    abilities:['And They Shall Know No Fear','Iron Halo: 4+ invulnerable save',
               'Precision Strikes: Re-roll failed wound rolls of 1 for Space Wolves within 6"'] },

  // ── ELITES ──────────────────────────────────────────────────────────

  { id:'sw_wulfen', name:'Wulfen',
    stats:['8"','3+','3+','5','4','3','3','7','4+'], role:'Elites', pts:150, min:5, max:10, ppm:30,
    wargear:[],
    composition:[
      { role:'Wulfen Pack Leader', count:1, wargear:['Frost Claws'],
        options:[
          { group:'Weapon', choices:[
            { label:'Frost Claws',  pts:0, default:true, weapons:['Frost Claws'] },
            { label:'Thunder Hammer + Storm Shield', pts:0, weapons:['Thunder Hammer','Storm Shield'], replaces:['Frost Claws'] },
          ]},
        ]},
      { role:'Wulfen', count:4, wargear:['Wulfen Claws'],
        options:[
          { group:'Weapon', choices:[
            { label:'Wulfen Claws',  pts:0, default:true, weapons:['Wulfen Claws'] },
            { label:'Thunder Hammer + Storm Shield', pts:5, weapons:['Thunder Hammer','Storm Shield'], replaces:['Wulfen Claws'] },
          ]},
        ]},
    ],
    abilities:['And They Shall Know No Fear',
               'Curse of the Wulfen: Choose Hunt (all Space Wolves within 6" +1 to Advance) or Kill (+1 Attack for all Space Wolves within 6") at start of each turn',
               'Frenzied Charge: Always counts as charging — +1 Attack when they charge',
               '4+ invulnerable save'] },

  // ── FAST ATTACK ─────────────────────────────────────────────────────

  { id:'sw_thunderwolf_cavalry', name:'Thunderwolf Cavalry',
    stats:['10"','3+','3+','4','5','3','4','8','3+'], role:'Fast Attack', pts:148, min:3, max:6, ppm:46,
    wargear:[],
    composition:[
      { role:'Thunderwolf Cavalry', count:3, wargear:['Bolt Pistol','Chainsword','Thunderwolf Bite'],
        options:[
          { group:'Melee', choices:[
            { label:'Chainsword',    pts:0, default:true, weapons:['Chainsword'] },
            { label:'Power Sword',   pts:4, weapons:['Power Sword'],    replaces:['Chainsword'] },
            { label:'Power Fist',    pts:9, weapons:['Power Fist'],     replaces:['Chainsword'] },
            { label:'Thunder Hammer',pts:12,weapons:['Thunder Hammer'], replaces:['Chainsword'] },
            { label:'Frost Axe',     pts:4, weapons:['Frost Axe'],      replaces:['Chainsword'] },
          ]},
          { group:'Offhand', choices:[
            { label:'Bolt Pistol',  pts:0, default:true },
            { label:'Storm Shield', pts:5, weapons:['Storm Shield'], replaces:['Bolt Pistol'] },
          ]},
        ]},
    ],
    abilities:['And They Shall Know No Fear',
               '4+ invulnerable save (base)',
               'Storm Shield: Improves invulnerable to 3+ if taken',
               'Ferocious Charge: Thunderwolf Bites gain +1S on the charge',
               'Can Advance and charge in same turn'] },

  { id:'sw_skyclaws', name:'Skyclaws',
    stats:['12"','3+','3+','4','4','1','1','7','3+'], role:'Fast Attack', pts:75, min:5, max:15, ppm:15,
    wargear:[],
    composition:[
      { role:'Wolf Guard Pack Leader', count:1, wargear:['Bolt Pistol','Chainsword','Jump Pack'],
        options:[
          { group:'Melee', choices:[
            { label:'Chainsword',    pts:0, default:true },
            { label:'Power Sword',   pts:4, weapons:['Power Sword'],  replaces:['Chainsword'] },
            { label:'Power Fist',    pts:9, weapons:['Power Fist'],   replaces:['Chainsword'] },
          ]},
          { group:'Sidearm', choices:[
            { label:'Bolt Pistol',   pts:0, default:true },
            { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'],replaces:['Bolt Pistol'] },
          ]},
        ]},
      { role:'Special Weapon (opt)', count:1, wargear:['Bolt Pistol','Chainsword','Jump Pack'],
        options:[
          { group:'Special', choices:[
            { label:'Bolt Pistol',   pts:0, default:true },
            { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'],replaces:['Bolt Pistol'] },
            { label:'Hand Flamer',   pts:3, weapons:['Hand Flamer'],  replaces:['Bolt Pistol'] },
          ]},
        ]},
      { role:'Special Weapon (opt)', count:1, wargear:['Bolt Pistol','Chainsword','Jump Pack'],
        options:[
          { group:'Special', choices:[
            { label:'Bolt Pistol',   pts:0, default:true },
            { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'],replaces:['Bolt Pistol'] },
            { label:'Hand Flamer',   pts:3, weapons:['Hand Flamer'],  replaces:['Bolt Pistol'] },
          ]},
        ]},
      { role:'Skyclaw', count:2, wargear:['Bolt Pistol','Chainsword','Jump Pack'] },
    ],
    abilities:['And They Shall Know No Fear',
               'Jump Pack Assault: Advance and charge in same turn',
               'Headstrong: Re-roll failed charge rolls',
               'Blood Frenzy: +1 Attack on charge — -1 to hit rolls'] },

  { id:'sw_stormwolf', name:'Stormwolf',
    stats:['20-50"','5+','3+','8','7','14','6','9','3+'], role:'Flyer', pts:239, min:1, max:1, ppm:0,
    wargear:['Twin Helfrost Cannon','2x Lascannon','2x Twin Heavy Bolter'],
    options:[
      { group:'Sponsons', choices:[
        { label:'Twin Heavy Bolters',        pts:0,  default:true, weapons:['2x Twin Heavy Bolter'] },
        { label:'Skyhammer Missile Launchers',pts:0, weapons:['2x Skyhammer Missile Launcher'], replaces:['2x Twin Heavy Bolter'] },
        { label:'Twin Multi-meltas',          pts:0, weapons:['2x Twin Multi-melta'],            replaces:['2x Twin Heavy Bolter'] },
      ]},
    ],
    abilities:['Supersonic: Minimum move 20" — maximum 50"',
               'Hard to Hit: -1 to hit rolls',
               'Hover: May switch to Hover mode — moves as Vehicle, loses Hard to Hit',
               'Assault Vehicle: Models disembarking may still charge',
               'Transport: Carries 16 Infantry (Terminators/Wulfen count as 2)',
               'Explodes: On 6 when destroyed — D6 mortal wounds within 6"'] },

  { id:'sw_stormfang', name:'Stormfang Gunship',
    stats:['20-50"','5+','3+','8','7','14','6','9','3+'], role:'Heavy Support', pts:245, min:1, max:1, ppm:0,
    wargear:['Helfrost Destructor','2x Twin Heavy Bolter','2x Stormstrike Missiles'],
    options:[
      { group:'Sponsons', choices:[
        { label:'Twin Heavy Bolters',         pts:0,  default:true, weapons:['2x Twin Heavy Bolter'] },
        { label:'Skyhammer Missile Launchers',pts:0,  weapons:['2x Skyhammer Missile Launcher'], replaces:['2x Twin Heavy Bolter'] },
        { label:'Twin Multi-meltas',          pts:0,  weapons:['2x Twin Multi-melta'],            replaces:['2x Twin Heavy Bolter'] },
      ]},
      { group:'Dorsal', choices:[
        { label:'Stormstrike Missiles',pts:0,  default:true, weapons:['2x Stormstrike Missiles'] },
        { label:'Twin Lascannon',      pts:0,  weapons:['Twin Lascannon'], replaces:['2x Stormstrike Missiles'] },
      ]},
    ],
    abilities:['Supersonic: Minimum move 20" — maximum 50"',
               'Hard to Hit: -1 to hit rolls',
               'Hover: May switch to Hover mode — moves as Vehicle, loses Hard to Hit',
               'Transport: Carries 6 Infantry (Terminators/Wulfen count as 2)',
               "Frozen Prey: After shooting Helfrost Destructor at a Monster or Vehicle — target is Frozen until end of opponent's next turn (-2 Move, -2 Advance/Charge rolls)",
               'Explodes: On 6 when destroyed — D6 mortal wounds within 6"'] },
];
