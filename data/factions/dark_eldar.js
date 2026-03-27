const FACTION_DARK_ELDAR = [
  // ── HQ ──────────────────────────────────────────────────────────────
  { id:'de_archon', name:'Archon',
    stats:['7"','2+','2+','3','3','5','5','9','4+'], role:'HQ', pts:68, min:1, max:1, ppm:0,
    wargear:['Husk Blade','Blast Pistol','Shadow Field'],
    abilities:['Power from Pain: Accumulates over battle — gains more abilities each phase',
               'Supreme Overlord: Friendly Drukhari within 6" re-roll hit rolls of 1',
               'Shadow Field: 2+ invulnerable save — if failed permanently destroyed',
               "Ancient Evil: Enemy units within 6\" subtract 1 from Morale tests"] },

  { id:'de_succubus', name:'Succubus',
    stats:['7"','2+','2+','3','3','4','5','8','4+'], role:'HQ', pts:60, min:1, max:1, ppm:0,
    wargear:['Agoniser','Blast Pistol','Plasma Grenades'],
    abilities:['Power from Pain',
               'Combat Drugs: Roll D6 before battle — +1 to a characteristic',
               'Acrobatic: 4+ invulnerable save',
               'Lethal Precision: Wound rolls of 6 deal 1 mortal wound in addition'] },

  { id:'de_haemonculus', name:'Haemonculus',
    stats:['7"','3+','3+','3','3','4','3','8','6+'], role:'HQ', pts:70, min:1, max:1, ppm:0,
    wargear:['Electrocorrosive Whip','Stinger Pistol'],
    abilities:['Power from Pain',
               'Master of Pain: Friendly Haemonculus Covens units within 6" have Disgustingly Resilient (5+)',
               'Insensible to Pain: 5+ Feel No Pain save'] },

  // ── TROOPS ──────────────────────────────────────────────────────────
  { id:'de_kabalite_warriors', name:'Kabalite Warriors',
    stats:['7"','3+','3+','3','3','1','1','7','4+'], role:'Troops', pts:45, min:5, max:20, ppm:9,
    wargear:[],
    composition:[
      { role:'Dracon', count:1, wargear:['Splinter Rifle','Splinter Pistol'],
        options:[
          { group:'Ranged', choices:[
            { label:'Splinter Rifle',  pts:0, default:true },
            { label:'Blaster',         pts:5, weapons:['Blaster'],        replaces:['Splinter Rifle'] },
            { label:'Shredder',        pts:5, weapons:['Shredder'],       replaces:['Splinter Rifle'] },
            { label:'Splinter Cannon', pts:5, weapons:['Splinter Cannon'],replaces:['Splinter Rifle'] },
          ]},
          { group:'Melee', choices:[
            { label:'None',      pts:0, default:true },
            { label:'Agoniser', pts:4, weapons:['Agoniser'], replaces:[] },
            { label:'Venom Blade',pts:2, weapons:['Venom Blade'], replaces:[] },
          ]},
        ]},
      { role:'Special Weapon (1)', count:1, wargear:['Splinter Rifle','Splinter Pistol'],
        options:[
          { group:'Special', choices:[
            { label:'Splinter Rifle',  pts:0, default:true },
            { label:'Blaster',         pts:5, weapons:['Blaster'],        replaces:['Splinter Rifle'] },
            { label:'Shredder',        pts:5, weapons:['Shredder'],       replaces:['Splinter Rifle'] },
            { label:'Dark Lance',      pts:10,weapons:['Dark Lance'],     replaces:['Splinter Rifle'] },
            { label:'Splinter Cannon', pts:5, weapons:['Splinter Cannon'],replaces:['Splinter Rifle'] },
          ]},
        ]},
      { role:'Kabalite Warrior', count:3, wargear:['Splinter Rifle','Splinter Pistol'] },
    ],
    abilities:['Power from Pain',
               'Splinter Weapons: Wound rolls of 6 always wound regardless of Toughness'] },

  { id:'de_wyches', name:'Wyches',
    stats:['7"','3+','3+','3','3','1','2','7','4+'], role:'Troops', pts:50, min:5, max:20, ppm:10,
    wargear:[],
    composition:[
      { role:'Hekatrix', count:1, wargear:['Wych Weapons','Blast Pistol'],
        options:[
          { group:'Melee', choices:[
            { label:'Wych Weapons',   pts:0, default:true },
            { label:'Agoniser',       pts:4, weapons:['Agoniser'],   replaces:['Wych Weapons'] },
            { label:'Hydra Gauntlets',pts:0, weapons:['Hydra Gauntlets'], replaces:['Wych Weapons'] },
          ]},
        ]},
      { role:'Special Weapon (up to 3)', count:3, wargear:['Wych Weapons','Splinter Pistol'],
        options:[
          { group:'Wych Weapon', choices:[
            { label:'Wych Weapons',   pts:0, default:true },
            { label:'Shardnet & Impaler', pts:0, weapons:['Shardnet'], replaces:['Wych Weapons'] },
            { label:'Hydra Gauntlets',pts:0, weapons:['Hydra Gauntlets'], replaces:['Wych Weapons'] },
            { label:'Razorflails',    pts:0, weapons:['Razorflails'], replaces:['Wych Weapons'] },
          ]},
        ]},
      { role:'Wych', count:1, wargear:['Wych Weapons','Splinter Pistol'] },
    ],
    abilities:['Power from Pain',
               'Dodge: 6+ invulnerable save — becomes 4+ in melee'] },

  { id:'de_wracks', name:'Wracks',
    stats:['7"','3+','3+','3','3','1','1','7','5+'], role:'Troops', pts:45, min:5, max:15, ppm:9,
    wargear:[],
    composition:[
      { role:'Acothyst', count:1, wargear:['Wrack Blades','Ossefactor'],
        options:[
          { group:'Melee', choices:[
            { label:'Wrack Blades',  pts:0, default:true },
            { label:'Agoniser',      pts:4, weapons:['Agoniser'],    replaces:['Wrack Blades'] },
            { label:'Scissorhand',   pts:3, weapons:['Scissorhand'], replaces:['Wrack Blades'] },
          ]},
          { group:'Ranged', choices:[
            { label:'Ossefactor',    pts:0, default:true, weapons:['Ossefactor'] },
            { label:'Liquifier Gun', pts:5, weapons:['Liquifier Gun'], replaces:['Ossefactor'] },
            { label:'Hexrifle',      pts:5, weapons:['Hexrifle'],      replaces:['Ossefactor'] },
          ]},
        ]},
      { role:'Wrack', count:4, wargear:['Wrack Blades'] },
    ],
    abilities:['Power from Pain',
               'Insensible to Pain: 5+ Feel No Pain save',
               'Haemovore: Wound rolls of 6 with Wrack Blades deal 1 mortal wound in addition'] },

  // ── ELITES ──────────────────────────────────────────────────────────
  { id:'de_incubi', name:'Incubi',
    stats:['7"','3+','3+','4','3','1','2','8','3+'], role:'Elites', pts:72, min:3, max:10, ppm:14,
    wargear:[],
    composition:[
      { role:'Klaivex', count:1, wargear:['Demiklaives'],
        options:[
          { group:'Weapon', choices:[
            { label:'Demiklaives',  pts:0, default:true, weapons:['Demiklaives'] },
            { label:'Klaive',       pts:0, weapons:['Klaive'], replaces:['Demiklaives'] },
          ]},
        ]},
      { role:'Incubus', count:2, wargear:['Klaive'] },
    ],
    abilities:['Power from Pain',
               'Klaive: Cleave — wound rolls of 6 deal 2 mortal wounds in addition',
               'Klaivex Demiklaives: May make 2 attacks or combine for 1 at S+2 AP-4'] },

  { id:'de_mandrakes', name:'Mandrakes',
    stats:['7"','3+','3+','3','3','1','2','8','5+'], role:'Elites', pts:68, min:5, max:10, ppm:14,
    wargear:[],
    composition:[
      { role:'Mandrake', count:5, wargear:['Baleblast','Glimmersteel Blade'] },
    ],
    abilities:['Power from Pain',
               'From the Shadows: Deploy anywhere more than 9" from enemy before first battle round',
               'Shrouded: Always count as in cover',
               'Baleblast: Assault 2 — S4 AP-1 D1 — each unsaved wound causes enemy to subtract 1 from Leadership'] },

  { id:'de_court_archon', name:'Court of the Archon',
    stats:['7"','3+','3+','3','3','1','2','8','4+'], role:'Elites', pts:30, min:2, max:4, ppm:0, isNew:true,
    wargear:['Mixed Specialist Weapons'],
    abilities:['Power from Pain',
               'Lethal Companions: Friendly Archon within 3" gains +1 to Attacks',
               'Sslyth specialist: +10pts — S4 T4 W2 A3 — shardcarbine and poisoned blades',
               'Ur-Ghul specialist: +8pts — S5 T4 W2 A4 — rending claws',
               'Medusae specialist: +10pts — S3 T3 W2 A1 — Eyeburst auto-hit flamer',
               'Lhamean specialist: +8pts — S3 T3 W2 A2 — wounds on 4+ regardless of Toughness'] },

  // ── FAST ATTACK ─────────────────────────────────────────────────────
  { id:'de_hellions', name:'Hellions',
    stats:['12"','3+','3+','3','3','1','2','7','4+'], role:'Fast Attack', pts:55, min:5, max:20, ppm:11,
    wargear:[],
    composition:[
      { role:'Hellion', count:5, wargear:['Hellglaive','Stunclaw','Splinter Pods'] },
    ],
    abilities:['Power from Pain',
               'Hit and Run: May Advance and still charge in same turn',
               'Aerial Assault: May fire Splinter Pods without penalty after Advancing'] },

  { id:'de_reavers', name:'Reavers',
    stats:['16"','3+','3+','3','4','2','2','7','4+'], role:'Fast Attack', pts:55, min:3, max:12, ppm:18,
    wargear:[],
    composition:[
      { role:'Arena Champion', count:1, wargear:['Splinter Rifle','Bladevanes'],
        options:[
          { group:'Weapon', choices:[
            { label:'Splinter Rifle',   pts:0, default:true },
            { label:'Blaster',          pts:5, weapons:['Blaster'],         replaces:['Splinter Rifle'] },
            { label:'Heat Lance',       pts:5, weapons:['Heat Lance'],      replaces:['Splinter Rifle'] },
          ]},
        ]},
      { role:'Reaver', count:2, wargear:['Splinter Rifle','Bladevanes'] },
    ],
    abilities:['Power from Pain',
               'Bladevanes: During movement phase deal 1 mortal wound to one unit passed over on 4+',
               'Jink: 5+ invulnerable save if model Advanced this turn'] },

  { id:'de_scourges', name:'Scourges',
    stats:['14"','3+','3+','3','3','1','2','7','4+'], role:'Fast Attack', pts:70, min:5, max:10, ppm:14,
    wargear:[],
    composition:[
      { role:'Solarite', count:1, wargear:['Splinter Carbine','Blast Pistol'],
        options:[
          { group:'Melee', choices:[
            { label:'None',      pts:0, default:true },
            { label:'Agoniser', pts:4, weapons:['Agoniser'], replaces:[] },
          ]},
        ]},
      { role:'Heavy Weapon (up to 4)', count:4, wargear:['Splinter Carbine'],
        options:[
          { group:'Heavy', choices:[
            { label:'Splinter Carbine',pts:0, default:true },
            { label:'Dark Lance',      pts:8, weapons:['Dark Lance'],      replaces:['Splinter Carbine'] },
            { label:'Blaster',         pts:5, weapons:['Blaster'],         replaces:['Splinter Carbine'] },
            { label:'Haywire Blaster', pts:5, weapons:['Haywire Blaster'], replaces:['Splinter Carbine'] },
            { label:'Heat Lance',      pts:5, weapons:['Heat Lance'],      replaces:['Splinter Carbine'] },
            { label:'Shredder',        pts:3, weapons:['Shredder'],        replaces:['Splinter Carbine'] },
            { label:'Splinter Cannon', pts:3, weapons:['Splinter Cannon'], replaces:['Splinter Carbine'] },
          ]},
        ]},
    ],
    abilities:['Power from Pain',
               'Scouts: Move up to 6" before first battle round — from anywhere on the board'] },

  // ── HEAVY SUPPORT ───────────────────────────────────────────────────
  { id:'de_ravager', name:'Ravager',
    stats:['14"','5+','3+','5','6','8','3','8','4+'], role:'Heavy Support', pts:115, min:1, max:1, ppm:0,
    wargear:['Three Dark Lances'],
    abilities:['Power from Pain',
               'Jink: 5+ invulnerable save if model Advanced this turn',
               'Explodes: On 6 when destroyed — D3 mortal wounds within 6"'] },

  { id:'de_talos', name:'Talos',
    stats:['7"','3+','4+','6','6','7','4','8','3+'], role:'Heavy Support', pts:100, min:1, max:3, ppm:100,
    wargear:['Macro-scalpel','Chain-flails','Talos Ichor Injector'],
    abilities:['Power from Pain',
               'Insensible to Pain: 5+ Feel No Pain save',
               'Explodes: On 6 when destroyed — D3 mortal wounds within 3"'] },

  // ── DEDICATED TRANSPORT ─────────────────────────────────────────────
  { id:'de_raider', name:'Raider',
    stats:['14"','5+','3+','5','6','8','3','8','4+'], role:'Dedicated Transport', pts:75, min:1, max:1, ppm:0,
    wargear:['Dark Lance','Night Shields'],
    abilities:['Power from Pain',
               'Transport: Carries 10 Drukhari models',
               'Jink: 5+ invulnerable save if model Advanced this turn',
               'Explodes: On 6 when destroyed — D3 mortal wounds within 6"'] },

  { id:'de_venom', name:'Venom',
    stats:['16"','5+','3+','4','5','6','3','8','4+'], role:'Dedicated Transport', pts:65, min:1, max:1, ppm:0,
    wargear:['Twin Splinter Rifle','Splinter Cannon'],
    abilities:['Power from Pain',
               'Transport: Carries 5 Drukhari models',
               'Jink: 5+ invulnerable save if model Advanced',
               'Grisly Trophies: Enemy units within 6" subtract 1 from Morale tests'] },

  // ── NAMED CHARACTERS ────────────────────────────────────────────────
  { id:'de_urien', name:'Urien Rakarth — Master Haemonculus', unique:true,
    stats:['7"','3+','3+','3','4','5','3','8','5+'], role:'HQ', pts:90, min:1, max:1, ppm:0,
    wargear:['Ichor Gauntlet','Casket of Flensing','Haemonculus Tools'],
    abilities:['Power from Pain',
               'Insensible to Pain: 5+ Feel No Pain',
               'Master of Pain: Friendly Haemonculi Covens units within 6" also have Insensible to Pain',
               'Sculptor of Flesh: At start of your turn heal D3 wounds from one friendly Wrack or Grotesque unit within 3"',
               'Reborn: The first time Urien is slain roll D6 — on 2+ he returns with D3 wounds at end of that phase within 1" of where he fell'] },

  { id:'de_lelith', name:'Lelith Hesperax — Queen of Knives', unique:true,
    stats:['7"','2+','3+','3','3','5','6','9','6+'], role:'HQ', pts:105, min:1, max:1, ppm:0,
    wargear:['Lelith Hesperax Blades'],
    abilities:['Power from Pain',
               '4+ invulnerable save in the Fight phase',
               'Penetrating Strike: Unmodified wound rolls of 6 deal 1 mortal wound in addition — AP of the attack becomes -4',
               'Quicksilver Dodge: -1 to hit rolls targeting this model',
               'Queen of the Arena: Friendly Wyches within 6" re-roll failed hit rolls in the Fight phase'] },

  { id:'de_drazhar', name:'Drazhar — Master of Blades', unique:true,
    stats:['7"','2+','3+','4','3','5','6','9','2+'], role:'Elites', pts:145, min:1, max:1, ppm:0,
    wargear:['Executioner Demiklaives'],
    abilities:['Power from Pain',
               '4+ invulnerable save',
               'Lethal Precision: Unmodified wound rolls of 6 deal D3 mortal wounds in addition',
               'Murderous Assault: Make 2 additional attacks with this weapon in the Fight phase',
               'Living Legend: Friendly Incubi within 6" re-roll failed hit rolls — Drazhar always fights first'] },

  { id:'de_sliscus', name:'Duke Sliscus — the Serpent', unique:true,
    stats:['7"','2+','3+','3','3','4','4','9','4+'], role:'HQ', pts:100, min:1, max:1, ppm:0,
    wargear:['The Serpent Venom Blade','Blaster'],
    abilities:['Power from Pain',
               '4+ invulnerable save',
               'Raid Commander: Friendly Kabalite Warriors within 6" re-roll hit rolls of 1',
               'Poisonous Presence: Enemy units that lose models to melee attacks by this model in the Fight phase must subtract 1 from their Leadership until your next turn',
               'Sky Serpent: May Advance and still fire weapons without penalty'] },

];
