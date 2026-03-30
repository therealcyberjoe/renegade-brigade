// FACTION_BLACK_TEMPLARS — chapter-specific units + shared SM pool
// Must be loaded AFTER sm_shared.js
var FACTION_BLACK_TEMPLARS = [
  ...SM_SHARED_UNITS,

  // ── HQ ──────────────────────────────────────────────────────────────
  { id:'bt_helbrecht', name:'High Marshal Helbrecht',
    stats:['6"','2+','2+','4','4','6','5','9','2+'], role:'HQ', pts:175, min:1, max:1, ppm:0, unique:true,
    wargear:['The Sword of the High Marshals','Ferocity (Master-crafted Bolter)'],
    abilities:['And They Shall Know No Fear',
               'High Marshal: Friendly Black Templars within 6" re-roll all failed hit rolls',
               '4+ invulnerable save',
               'Crusade of Wrath: Once per battle — friendly Black Templars may Advance and charge this turn',
               'Sword of the High Marshals: S5 AP-3 D2 — re-roll all failed wound rolls'] },

  { id:'bt_emperors_champion', name:"The Emperor's Champion",
    stats:['6"','2+','2+','4','4','4','4','9','2+'], role:'HQ', pts:95, min:1, max:1, ppm:0, isNew:true,
    wargear:['Black Sword','Bolt Pistol','Sigismund Edition Power Armour'],
    abilities:['And They Shall Know No Fear',
               '4+ invulnerable save',
               'Skilful Parry: Each time this model fights it may re-roll one failed saving throw',
               'Slayer of Champions: Re-roll all failed hit and wound rolls when targeting Characters',
               'Black Sword: S+1 AP-3 DD3 — on wound roll of 6 deal +1 mortal wound',
               'Oaths of Honour: Must always charge if able — must always consolidate toward enemy'] },

  { id:'bt_grimaldus', name:'Chaplain Grimaldus',
    stats:['6"','3+','3+','4','4','4','3','9','3+'], role:'HQ', pts:105, min:1, max:1, ppm:0, unique:true,
    wargear:['Crozius Arcanum','Plasma Pistol','The Remnants of Remembrance'],
    abilities:['And They Shall Know No Fear',
               'Rosarius: 4+ invulnerable save',
               'Litanies of Battle: Know 2 litanies — attempt both on 3+',
               'Hero of Helsreach: Friendly Black Templars within 6" re-roll failed Morale',
               'Grimaldus must be accompanied by 3 Cenobyte Servitors — they have W1 A1 but absorb wounds before Grimaldus on 4+',
               'Last of His Brotherhood: If Grimaldus is the last model remaining in his unit he gains +1 Attack and +1 Leadership'] },

  { id:'bt_marshal', name:'Marshal',
    stats:['6"','2+','2+','4','4','5','4','9','2+'], role:'HQ', pts:120, min:1, max:1, ppm:0, isNew:true,
    wargear:['Power Sword','Bolt Pistol'],
    abilities:['And They Shall Know No Fear',
               'Iron Halo: 4+ invulnerable save',
               'Rites of Battle: Re-roll hit rolls of 1 for friendly Black Templars within 6"',
               'Vow of Zeal: Friendly Black Templars within 6" may Advance and charge in same turn'] },

  { id:'bt_castellan', name:'Castellan',
    stats:['6"','3+','3+','4','4','5','4','8','3+'], role:'HQ', pts:80, min:1, max:1, ppm:0, isNew:true,
    wargear:['Power Sword','Bolt Pistol'],
    abilities:['And They Shall Know No Fear',
               'Iron Halo: 4+ invulnerable save',
               'Tactical Precision: Friendly Black Templars within 6" re-roll wound rolls of 1'] },
  // ── TROOPS ──────────────────────────────────────────────────────────
  { id:'bt_crusader_squad', name:'Crusader Squad',
    stats:['6"','3+','3+','4','4','1','1','7','3+'], role:'Troops', pts:70, min:5, max:15, ppm:0,
    wargear:[],
    composition:[
      { role:'Sword Brother', count:1, wargear:['Boltgun','Bolt Pistol'],
        options:[
          { group:'Melee', choices:[
            { label:'None',          pts:0, default:true },
            { label:'Power Sword',   pts:4, weapons:['Power Sword'],   replaces:['Boltgun'] },
            { label:'Power Fist',    pts:9, weapons:['Power Fist'],    replaces:['Boltgun'] },
            { label:'Thunder Hammer',pts:12,weapons:['Thunder Hammer'],replaces:['Boltgun'] },
          ]},
        ]},
      { role:'Initiate', count:4, wargear:['Boltgun','Bolt Pistol'] },
    ],
    abilities:['And They Shall Know No Fear',
               'Crusader Squad: Mix of Initiates (Marines) and Neophytes (Scouts) — min 5 Initiates — up to 10 Neophytes',
               'Neophytes: WS4+ BS4+ S3 T3 W1 A1 Ld6 Sv5+ — count toward squad size but cheaper',
               'Initiate: +13pts each additional — Neophyte: +7pts each additional',
               'Initiate Special Weapon: 1 per 5 Initiates may take special weapon',
               'Sword Brother: 1 per unit — may take power weapon'] },

  { id:'bt_primaris_crusaders', name:'Primaris Crusader Squad',
    stats:['6"','3+','3+','4','4','2','2','7','3+'], role:'Troops', pts:85, min:5, max:15, ppm:17, isNew:true,
    wargear:[],
    composition:[
      { role:'Primaris Sword Brother', count:1, wargear:['Auto Bolt Rifle','Bolt Pistol'],
        options:[
          { group:'Melee', choices:[
            { label:'None',          pts:0, default:true },
            { label:'Power Sword',   pts:4, weapons:['Power Sword'],   replaces:[] },
            { label:'Power Fist',    pts:9, weapons:['Power Fist'],    replaces:['Auto Bolt Rifle'] },
          ]},
        ]},
      { role:'Primaris Initiate', count:4, wargear:['Auto Bolt Rifle','Bolt Pistol'] },
    ],
    abilities:['And They Shall Know No Fear',
               'Primaris Neophytes: Up to 5 Neophytes per 5 Initiates — Neophytes use Scout stats',
               'Vow of Crusade: Re-roll failed charge rolls',
               'Combat Squads: May split into two units of 5'] },

  // ── ELITES ──────────────────────────────────────────────────────────
  { id:'bt_emperors_champion_unit', name:"Emperor's Champion (Elites option)",
    stats:['6"','2+','2+','4','4','4','4','9','2+'], role:'Elites', pts:95, min:1, max:1, ppm:0, isNew:true,
    wargear:['Black Sword','Bolt Pistol'],
    abilities:['And They Shall Know No Fear',
               '4+ invulnerable save',
               'Skilful Parry: Re-roll one failed saving throw per Fight phase',
               'Slayer of Champions: Re-roll all hit and wound rolls vs Characters',
               'Oaths of Honour: Must charge if able'] },

  { id:'bt_sword_brethren', name:'Sword Brethren',
    stats:['6"','3+','3+','4','4','2','2','8','3+'], role:'Elites', pts:110, min:5, max:10, ppm:22, isNew:true,
    wargear:[],
    composition:[
      { role:'Sword Brother', count:5, wargear:['Power Sword','Bolt Pistol'],
        options:[
          { group:'Melee', choices:[
            { label:'Power Sword',         pts:0, default:true, weapons:['Power Sword'] },
            { label:'Thunder Hammer',      pts:10,weapons:['Thunder Hammer'],    replaces:['Power Sword'] },
            { label:'Lightning Claw pair', pts:8, weapons:['Lightning Claws'],   replaces:['Power Sword'] },
            { label:'Chainsword',          pts:0, weapons:['Chainsword'],         replaces:['Power Sword'] },
          ]},
        ]},
    ],
    options:[
      { group:'Melee (any model)', pick:1, choices:[
        { label:'Power Sword', pts:0, default:true },
        { label:'Thunder Hammer', pts:10 },
        { label:'Lightning Claw pair', pts:8 },
        { label:'Chainsword', pts:0 },
      ]},
    ],
    abilities:['And They Shall Know No Fear',
               'Vow of Crusade: Re-roll failed charge rolls',
               'Veteran Warriors: Re-roll hit rolls of 1',
               'Sigismund Chosen: 1 per unit — +1 Attack — may take any melee upgrade free'] },
  { id:'bt_dreadnought', name:'Venerable Dreadnought',
    stats:['6"','2+','3+','6','7','10','4','8','3+'], role:'Elites', pts:135, min:1, max:1, ppm:0,
    wargear:['Twin Lascannon','Dreadnought C.C. Weapon'],
    abilities:['And They Shall Know No Fear',
               'Smoke Launchers',
               'Ancient: Re-roll hit rolls of 1',
               'Explodes: On 6 when destroyed — D6 mortal wounds within 3"'] },

  // ── FAST ATTACK ─────────────────────────────────────────────────────
  { id:'bt_bikers', name:'Biker Squad',
    stats:['14"','3+','3+','4','5','2','2','7','3+'], role:'Fast Attack', pts:75, min:3, max:9, ppm:25,
    wargear:[],
    composition:[
      { role:'Templar Biker', count:3, wargear:['Twin Boltgun','Chainsword'] },
    ],
    abilities:['And They Shall Know No Fear',
               'Turbo-boost: May Advance and charge same turn',
               'Vow of Crusade: Re-roll failed charge rolls'] },

  // ── HEAVY SUPPORT ───────────────────────────────────────────────────
];
