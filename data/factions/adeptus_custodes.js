const FACTION_ADEPTUS_CUSTODES = [
  // ── HQ ──────────────────────────────────────────────────────────────
  { id:'ac_shield_captain', name:'Shield-Captain',
    stats:['6"','2+','2+','5','5','6','5','9','2+'], role:'HQ', pts:130, min:1, max:1, ppm:0,
    wargear:['Guardian Spear','Misericordia'],
    options:[
      { group:'Wargear', pick:1, choices:[
        { label:'Guardian Spear', pts:0, default:true },
        { label:'Sentinel Blade + Storm Shield', pts:0 },
        { label:'Castellan Axe + Misericordia', pts:0 },
      ]},
    ],
    abilities:['Auramite and Adamantine: 4+ invulnerable save',
               'Superior Creation: Re-roll hit rolls of 1',
               'Inspirational Fighter: Friendly Custodes within 6" re-roll failed charge rolls'] },

  { id:'ac_shield_captain_allarus', name:'Shield-Captain in Allarus Terminator Armour',
    stats:['5"','2+','2+','5','5','7','5','9','2+'], role:'HQ', pts:170, min:1, max:1, ppm:0,
    wargear:['Castellan Axe','Balistus Grenade Launcher'],
    options:[
      { group:'Wargear', pick:1, choices:[
        { label:'Castellan Axe', pts:0, default:true },
        { label:'Guardian Spear', pts:0 },
      ]},
    ],
    abilities:['Auramite and Adamantine: 4+ invulnerable save',
               'Superior Creation: Re-roll hit rolls of 1',
               'Teleport Strike: Deep strike — arrive 9"+ from enemy',
               'Inspirational Fighter: Friendly Custodes within 6" re-roll failed charge rolls'] },

  { id:'ac_shield_captain_jetbike', name:'Shield-Captain on Dawneagle Jetbike',
    stats:['14"','2+','2+','5','6','7','5','9','2+'], role:'HQ', pts:170, min:1, max:1, ppm:0,
    wargear:['Interceptor Lance','Misericordia'],
    options:[
      { group:'Wargear', pick:1, choices:[
        { label:'Interceptor Lance', pts:0, default:true },
        { label:'Salvo Launcher', pts:0 },
        { label:'Hurricane Bolter', pts:0 },
      ]},
    ],
    abilities:['Auramite and Adamantine: 4+ invulnerable save',
               'Superior Creation: Re-roll hit rolls of 1',
               'Inspirational Fighter: Friendly Custodes within 6" re-roll failed charge rolls',
               'Turbo-boost: May Advance and charge in same turn',
               'Hard to Hit: -1 to hit rolls targeting this model if it moved'] },

  { id:'ac_trajann', name:'Trajann Valoris', unique:true,
    stats:['6"','2+','2+','5','5','7','6','9','2+'], role:'HQ', pts:210, min:1, max:1, ppm:0,
    wargear:["Watcher's Axe",'Misericordia'],
    abilities:['Auramite and Adamantine: 4+ invulnerable save',
               'Legendary Commander: Friendly Adeptus Custodes within 6" re-roll hit and wound rolls of 1',
               'Moment Shackle: Once per battle choose one — regain D3 wounds / fight an additional time at end of Fight phase / regain D3 CP spent on a Stratagem'] },

  { id:'ac_vexilus_praetor', name:'Vexilus Praetor',
    stats:['6"','2+','2+','5','5','6','4','9','2+'], role:'HQ', pts:100, min:1, max:1, ppm:0,
    wargear:['Guardian Spear','Vexilla'],
    options:[
      { group:'Vexilla', pick:1, choices:[
        { label:'Vexilla Magnifica (-1 to hit aura 6")', pts:0, default:true },
        { label:'Vexilla Imperius (advance and charge aura 6")', pts:0 },
      ]},
    ],
    abilities:['Auramite and Adamantine: 4+ invulnerable save',
               'Superior Creation: Re-roll hit rolls of 1'] },

  // ── TROOPS ──────────────────────────────────────────────────────────
  { id:'ac_custodian_guard', name:'Custodian Guard',
    stats:['6"','2+','2+','5','5','3','4','9','2+'], role:'Troops', pts:160, min:3, max:10, ppm:53,
    wargear:[],
    composition:[
      { role:'Custodian Guard', count:3, wargear:['Guardian Spear','Misericordia'],
        options:[
          { group:'Weapon', choices:[
            { label:'Guardian Spear', pts:0, default:true, weapons:['Guardian Spear'] },
            { label:'Sentinel Blade & Storm Shield', pts:0, weapons:['Sentinel Blade','Storm Shield'], replaces:['Guardian Spear'] },
          ]},
        ]},
    ],
    options:[
      { group:'Any model', pick:1, choices:[
        { label:'Guardian Spear', pts:0, default:true },
        { label:'Sentinel Blade + Storm Shield', pts:0 },
      ]},
    ],
    abilities:['Auramite and Adamantine: 4+ invulnerable save',
               'Sworn Protectors: Auto-pass Morale'] },

  { id:'ac_wardens', name:'Custodian Wardens',
    stats:['6"','2+','2+','5','5','3','4','10','2+'], role:'Troops', pts:165, min:3, max:10, ppm:55,
    wargear:[],
    composition:[
      { role:'Custodian Warden', count:3, wargear:['Castellan Axe','Misericordia'],
        options:[
          { group:'Weapon', choices:[
            { label:'Castellan Axe',  pts:0, default:true, weapons:['Castellan Axe'] },
            { label:'Guardian Spear', pts:0, weapons:['Guardian Spear'], replaces:['Castellan Axe'] },
          ]},
        ]},
    ],
    abilities:['Auramite and Adamantine: 4+ invulnerable save',
               'Bulwark of Humanity: Friendly Adeptus Custodes within 3" gain +1 to saving throws (max 2+)'] },

  // ── ELITES ──────────────────────────────────────────────────────────
  { id:'ac_allarus', name:'Allarus Custodians',
    stats:['5"','2+','2+','5','5','3','4','9','2+'], role:'Elites', pts:65, min:1, max:10, ppm:65,
    wargear:['Castellan Axe','Balistus Grenade Launcher'],
    options:[
      { group:'Any model', pick:1, choices:[
        { label:'Castellan Axe', pts:0, default:true },
        { label:'Guardian Spear', pts:0 },
      ]},
    ],
    abilities:['Auramite and Adamantine: 4+ invulnerable save',
               'Teleport Strike: Arrive from reserve 9"+ from enemy',
               'Unstoppable Killers: Re-roll hit rolls of 1 in Fight phase'] },

  { id:'ac_venerable_contemptor', name:'Venerable Contemptor Dreadnought',
    stats:['9"','2+','2+','7','8','10','4','9','2+'], role:'Elites', pts:195, min:1, max:1, ppm:0,
    wargear:['Multi-Melta','Dreadnought C.C. Weapon'],
    abilities:['Auramite and Adamantine: 4+ invulnerable save',
               'Smoke Launchers',
               'Explodes: On 6 when destroyed — D6 mortal wounds within 3"'] },

  { id:'ac_achillus', name:'Achillus Dreadnought',
    stats:['8"','2+','2+','8','10','14','5','10','2+'], role:'Elites', pts:195, min:1, max:1, ppm:0, isNew:true,
    wargear:['Dreadspear','Twin Adrathic Destructor'],
    abilities:['Auramite and Adamantine: 4+ invulnerable save',
               'Heroic Bearing: Friendly Adeptus Custodes within 6" auto-pass Morale',
               'Explodes: On 6 when destroyed — D6 mortal wounds within 3"'] },

  // ── FAST ATTACK ─────────────────────────────────────────────────────
  { id:'ac_vertus_praetors', name:'Vertus Praetors',
    stats:['14"','2+','2+','5','5','3','4','9','2+'], role:'Fast Attack', pts:165, min:3, max:9, ppm:55,
    wargear:[],
    composition:[
      { role:'Vertus Praetor', count:3, wargear:['Interceptor Lance','Salvo Launcher','Misericordia'],
        options:[
          { group:'Salvo', choices:[
            { label:'Salvo Launcher', pts:0, default:true, weapons:['Salvo Launcher'] },
            { label:'Venatari Lance', pts:0, weapons:['Venatari Lance'], replaces:['Salvo Launcher'] },
          ]},
        ]},
    ],
    options:[
      { group:'Any model', pick:1, choices:[
        { label:'Interceptor Lance', pts:0, default:true },
        { label:'Hurricane Bolter', pts:0 },
      ]},
    ],
    abilities:['Auramite and Adamantine: 4+ invulnerable save',
               'Sweeping Advance: If moved more than 9" may Advance and still shoot and charge',
               'Hard to Hit: -1 to hit rolls targeting this unit if it moved'] },

  // ── HEAVY SUPPORT ───────────────────────────────────────────────────
  { id:'ac_caladius', name:'Caladius Grav-Tank',
    stats:['14"','4+','2+','8','9','12','3','9','2+'], role:'Heavy Support', pts:185, min:1, max:1, ppm:0, isNew:true,
    wargear:['Twin Adrathic Destructor','Twin Lastrum Bolt Cannon'],
    abilities:['Auramite and Adamantine: 4+ invulnerable save',
               'Hard to Hit: -1 to hit rolls targeting this model if it moved',
               'Gravitic Repulsion: May move over all terrain and models'] },

  { id:'ac_land_raider', name:'Grav-Land Raider',
    stats:['10"','5+','2+','8','9','18','6','9','2+'], role:'Heavy Support', pts:350, min:1, max:1, ppm:0,
    wargear:['Twin Lascannons','Heavy Bolter'],
    abilities:['Auramite and Adamantine: 4+ invulnerable save',
               'Transport: Carries 10 Custodes models',
               'Explodes: On 6 when destroyed — D6 mortal wounds within 6"'] },
];
