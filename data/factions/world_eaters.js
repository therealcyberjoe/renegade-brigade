// Must be loaded AFTER csm_shared.js
var FACTION_WORLD_EATERS = [
  ...CSM_SHARED_UNITS,

  { id:'we_angron', name:'Angron, Daemon Primarch of Khorne',
    stats:['16"','2+','5+','8','8','18','8','10','4+'], role:'Lord of War', pts:450, min:1, max:1, ppm:0, unique:true, isNew:true,
    wargear:["Samni'arius and Spinegrinder",'The Butcher\'s Nails'],
    abilities:["Blood for the Blood God: Add 1 to Attacks in Fight phase for all World Eaters",
               'Warp-fuelled Rage: May Advance and charge in same turn',
               'Daemonic: 4+ invulnerable save',
               'Death Incarnate: Enemy units within 1" subtract 2 from Leadership at Morale',
               'Unstoppable Slaughter: Slay a Character in Fight phase — regain D3 wounds',
               "Aura of Khorne: Friendly World Eaters Daemons within 8\" re-roll failed charge rolls"] },
  { id:'we_invocatus', name:'Invocatus',
    stats:['10"','2+','3+','5','5','6','5','9','3+'], role:'HQ', pts:140, min:1, max:1, ppm:0, unique:true, isNew:true,
    wargear:['Flamespout','Hellforged Axe','Juggernaut Bladed Horn'],
    abilities:['Daemonic: 4+ invulnerable save',
               'Swift Slaughter: May Advance and still charge',
               "Herald of Khorne: Friendly World Eaters Core within 6\" re-roll hit rolls of 1",
               'Frenzied Charge: Add 2 to Attacks on turn it charges'] },

  { id:'we_lord_jugger', name:'Chaos Lord on Juggernaut',
    stats:['10"','2+','3+','5','5','6','5','9','3+'], role:'HQ', pts:115, min:1, max:1, ppm:0,
    wargear:['Combi-bolter','Chainsword','Juggernaut Horn'],
    abilities:['Daemonic: 4+ invulnerable save',
               "Lord of Chaos: Friendly World Eaters Core within 6\" re-roll hit rolls of 1",
               'Frenzied Charge: Add 2 to Attacks on turn it charges'] },

  { id:'we_berzerkers', name:'Khorne Berzerkers',
    stats:['6"','3+','4+','4','4','1','2','8','3+'], role:'Troops', pts:136, min:8, max:12, ppm:17,
    wargear:[],
    composition:[
      { role:'Skull Champion', count:1, wargear:['Chainaxe','Bolt Pistol'],
        options:[
          { group:'Melee', choices:[
            { label:'Chainaxe',    pts:0, default:true, weapons:['Chainaxe'] },
            { label:'Power Sword', pts:4, weapons:['Power Sword'], replaces:['Chainaxe'] },
            { label:'Power Fist',  pts:8, weapons:['Power Fist'],  replaces:['Chainaxe'] },
          ]},
          { group:'Sidearm', choices:[
            { label:'Bolt Pistol',   pts:0, default:true },
            { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
          ]},
        ]},
      { role:'Berzerker', count:7, wargear:['Chainaxe','Bolt Pistol'],
        options:[
          { group:'Weapon', choices:[
            { label:'Chainaxe & Bolt Pistol', pts:0, default:true },
            { label:'Chainsword & Bolt Pistol', pts:0, weapons:['Chainsword','Bolt Pistol'], replaces:['Chainaxe'] },
            { label:'Paired Chainaxes', pts:0, weapons:['Chainaxe','Chainaxe'], replaces:['Bolt Pistol'] },
          ]},
        ]},
    ],
    abilities:['Blood for the Blood God: +1 Attack in Fight phase',
               'Frenzied Charge: Add 2 to Attacks on the turn this unit charges',
               'Icon of Wrath: Re-roll failed charge rolls if unit has Icon Bearer'] },

  { id:'we_jakhals', name:'Jakhals',
    stats:['6"','4+','5+','3','3','1','2','6','6+'], role:'Troops', pts:40, min:8, max:20, ppm:5, isNew:true,
    wargear:[],
    composition:[
      { role:'Jakhal Pack Leader', count:1, wargear:['Mauling Blade','Autopistol'],
        options:[
          { group:'Melee', choices:[
            { label:'Mauling Blade',  pts:0, default:true },
            { label:'Skullsmasher',   pts:5, weapons:['Skullsmasher'], replaces:['Mauling Blade'] },
          ]},
        ]},
      { role:'Icon Bearer', count:1, wargear:['Mauling Blade','Autopistol','Chaos Icon'] },
      { role:'Jakhal', count:6, wargear:['Mauling Blade','Autopistol'] },
    ],
    abilities:['Blood for the Blood God',
               'Rabid Devotion: When destroyed on 4+ a friendly World Eaters Core within 6" gains +1 Attack until end of Fight phase'] },

  { id:'we_eightbound', name:'Eightbound',
    stats:['6"','2+','3+','5','5','3','4','8','3+'], role:'Elites', pts:135, min:3, max:6, ppm:45, isNew:true,
    wargear:[],
    composition:[
      { role:'Eightbound', count:3, wargear:['Eightbound Eviscerators'] },
    ],
    abilities:['Daemonic Blessings: 4+ invulnerable save',
               "Khorne's Chosen: Re-roll hit rolls of 1 — +1 Attack if within 1\" of enemy at start of Fight phase",
               'Frenzied Charge: +2 Attacks on turn it charges',
               'No Retreat: Auto-pass Morale tests',
               'Exalted Eightbound upgrade: One per unit — W4 A5 +1 to all hit rolls (+15pts)'] },
  { id:'we_flesh_hounds', name:'Flesh Hounds of Khorne',
    stats:['10"','3+','4+','4','4','1','2','6','5+'], role:'Fast Attack', pts:80, min:5, max:15, ppm:16,
    wargear:[],
    composition:[
      { role:'Flesh Hound of Khorne', count:5, wargear:['Gore-drenched Fangs','Collar of Khorne'] },
    ],
    abilities:['Collar of Khorne: This unit may Deny the Witch once per phase',
               'Daemonic: 5+ invulnerable save',
               'Unfettered Ferocity: Always fight first if they charged'] },

  { id:'we_skull_cannon', name:'Skull Cannon',
    stats:['8"','3+','3+','7','7','8','4','8','4+'], role:'Heavy Support', pts:130, min:1, max:1, ppm:0,
    wargear:['Burning Skulls'],
    abilities:['Daemonic: 5+ invulnerable save',
               'Burning Skulls: Units hit subtract 1 from hit rolls until next turn'] },

    { id:'we_kharn', name:'Khârn the Betrayer', unique:true,
    stats:['6"','2+','3+','5','4','6','5','9','3+'], role:'HQ', pts:165, min:1, max:1, ppm:0,
    wargear:['Gorechild','Plasma Pistol'],
    abilities:['Betrayer: Re-roll all failed hit rolls in the Fight phase — if all attacks hit, roll again for bonus attacks',
               'Rites of Blood: Friendly World Eaters within 6" re-roll failed hit rolls in the Fight phase',
               'Blood for the Blood God: +1 Attack in Fight phase',
               'Skulls for the Skull Throne: Unmodified hit rolls of 6 with Gorechild deal 1 mortal wound in addition',
               'World Eaters only — Khârn leads Khorne Berzerkers into battle'] },


  // ── ADDITIONAL WE UNITS ──────────────────────────────────────────────
  { id:'we_daemon_prince', name:'Daemon Prince of Khorne',
    stats:['8"','2+','2+','5','5','8','4','10','3+'], role:'HQ', pts:165, min:1, max:1, ppm:0,
    wargear:['Daemonic Axe','Malefic Talon'],
    options:[
      { group:'Wings', choices:[
        { label:'No Wings', pts:0,  default:true },
        { label:'Wings',    pts:30, weapons:['Wings'] },
      ]},
    ],
    abilities:['Daemonic: 5+ invulnerable save',
               '4+ invulnerable save',
               'Blood for the Blood God: +1 Attack in Fight phase',
               'Skulls for the Skull Throne: Unmodified hit rolls of 6 deal 1 mortal wound in addition'] },

  { id:'we_skullcrushers', name:'Skullcrushers of Khorne',
    stats:['10"','3+','3+','5','5','3','3','8','3+'], role:'Elites', pts:130, min:3, max:9, ppm:43,
    wargear:[],
    composition:[
      { role:'Skullcrusher', count:3, wargear:['Ensorcelled Axe','Bloodglaive','Juggernaut'],
        options:[
          { group:'Weapon', choices:[
            { label:'Ensorcelled Axe', pts:0, default:true, weapons:['Ensorcelled Axe'] },
            { label:'Bloodglaive',     pts:0, weapons:['Bloodglaive'], replaces:['Ensorcelled Axe'] },
          ]},
        ]},
    ],
    abilities:['Daemonic: 5+ invulnerable save',
               'Blood for the Blood God: +1 Attack in Fight phase',
               'Juggernaut: Toughness 5 while mounted'] },

  { id:'we_blood_throne', name:'Blood Throne of Khorne',
    stats:['8"','3+','4+','7','7','8','4','8','4+'], role:'Heavy Support', pts:120, min:1, max:1, ppm:0,
    wargear:['Hellblades','Bloodcannon'],
    abilities:['Daemonic: 4+ invulnerable save',
               'Blood for the Blood God: +1 Attack in Fight phase',
               'Gorefeast: Each time this model slays a model in the Fight phase roll D6 — on 4+ it restores 1 lost wound'] },

];
