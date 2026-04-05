var FACTION_ASTRA_MILITARUM = [
  // ── HQ ──────────────────────────────────────────────────────────────
  { id:'ag_company_commander', name:'Company Commander',
    stats:['6"','3+','3+','3','3','4','3','8','5+'], role:'HQ', pts:30, min:1, max:1, ppm:0,
    wargear:['Boltgun','Power Sword','Frag Grenades'],
    options:[
      { group:'Ranged', choices:[
        { label:'Boltgun',       pts:0, default:true },
        { label:'Lasgun',        pts:0, weapons:['Lasgun'],        replaces:['Boltgun'] },
        { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'], replaces:['Boltgun'] },
        { label:'Bolt Pistol',   pts:1, weapons:['Bolt Pistol'],   replaces:['Boltgun'] },
        { label:'Laspistol',     pts:0, weapons:['Laspistol'],     replaces:['Boltgun'] },
      ]},
      { group:'Melee', choices:[
        { label:'Power Sword',   pts:0, default:true },
        { label:'Chainsword',    pts:0, weapons:['Chainsword'],    replaces:['Power Sword'] },
        { label:'Power Fist',    pts:8, weapons:['Power Fist'],    replaces:['Power Sword'] },
      ]},
    ],
    abilities:['Voice of Command: Issue 1 order per turn to friendly Astra Militarum Infantry within 12"',
               'Senior Officer: May issue 2 orders per turn instead of 1',
               'Orders: Take Aim! / First Rank Fire! / Fix Bayonets! / Move Move Move! / Forwards for the Emperor! / Get Back in the Fight!'] },

  { id:'ag_lord_commissar', name:'Lord Commissar',
    stats:['6"','3+','3+','3','3','4','3','9','5+'], role:'HQ', pts:40, min:1, max:1, ppm:0,
    wargear:['Power Sword','Bolt Pistol'],
    options:[
      { group:'Ranged', choices:[
        { label:'Bolt Pistol',   pts:0, default:true },
        { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
        { label:'Boltgun',       pts:1, weapons:['Boltgun'],       replaces:['Bolt Pistol'] },
      ]},
      { group:'Melee', choices:[
        { label:'Power Sword',   pts:0, default:true },
        { label:'Power Fist',    pts:8, weapons:['Power Fist'],    replaces:['Power Sword'] },
        { label:'Chainsword',    pts:0, weapons:['Chainsword'],    replaces:['Power Sword'] },
      ]},
    ],
    abilities:['Summary Execution: Once per battle — slay one friendly model within 1" to auto-pass Morale for all nearby units',
               'Aura of Discipline: Friendly Astra Militarum within 6" use this model\'s Leadership for Morale'] },

  { id:'ag_primaris_psyker', name:'Primaris Psyker',
    stats:['6"','4+','4+','3','3','3','2','7','5+'], role:'HQ', pts:46, min:1, max:1, ppm:0,
    wargear:['Force Stave','Laspistol'],
    abilities:['Psyker: Mastery Level 2 — knows Smite + 2 Astra Militarum powers',
               'Psychic Barrier: WC6 — friendly unit within 18" gains 5+ invulnerable save until next Psychic phase',
               'Nightshroud: WC6 — enemy unit within 18" subtracts 1 from hit rolls until next Psychic phase'] },

  // ── NAMED CHARACTERS ────────────────────────────────────────────────
  { id:'ag_yarrick', name:'Commissar Yarrick',
    stats:['6"','3+','3+','4','3','5','3','10','4+'], role:'HQ', pts:100, min:1, max:1, ppm:0,
    wargear:['Bale Eye','Power Klaw','Storm Bolter'],
    abilities:['Voice of Command: Issue 2 orders per turn',
               'Inspiring Presence: Friendly Astra Militarum units within 6" auto-pass Morale',
               'Bale Eye: At start of Fight phase deal 1 mortal wound to one enemy model within 1"',
               'Iron Will: The first time Yarrick is slain roll D6 — on 2+ he survives with 1 wound remaining'] },

  { id:'ag_creed', name:'Ursarkar E. Creed',
    stats:['6"','3+','3+','3','3','4','3','10','5+'], role:'HQ', pts:95, min:1, max:1, ppm:0,
    wargear:['Bolt Pistol','Power Sword'],
    abilities:['Voice of Command: Issue 2 orders per turn to units within 12"',
               'Warlord of Cadia: Once per battle — one friendly unit within 18" may shoot or fight as a bonus action',
               'Tactical Genius: Re-roll any single hit/wound/save die once per phase',
               'Cadian only'] },

  { id:'ag_kell', name:'Colour Sergeant Jarran Kell', unique:true,
    stats:['6"','3+','3+','3','3','4','3','9','4+'], role:'Elites', pts:50, min:1, max:1, ppm:0,
    wargear:['Power Sword','Plasma Pistol','Regimental Standard'],
    abilities:['Bodyguard: Roll D6 when Creed loses a wound while within 3" — on 2+ Kell suffers it instead',
               'Regimental Standard: Friendly Astra Militarum Infantry within 6" auto-pass Morale tests',
               "Voice Amplifier: Creed's order range is doubled to 24\" while Kell is alive",
               'Cadian only'] },

  { id:'ag_pask', name:'Tank Commander Pask',
    stats:['10"','5+','2+','6','8','12','3','9','3+'], role:'HQ', pts:183, min:1, max:1, ppm:0,
    wargear:['Leman Russ Battle Cannon','Heavy Bolter'],
    options:[
      { group:'Main Gun', choices:[
        { label:'Battle Cannon',    pts:0,  default:true, weapons:['Leman Russ Battle Cannon'] },
        { label:'Demolisher Cannon',pts:0,  weapons:['Demolisher Cannon'],    replaces:['Leman Russ Battle Cannon'] },
        { label:'Vanquisher Cannon',pts:0,  weapons:['Vanquisher Cannon'],    replaces:['Leman Russ Battle Cannon'] },
        { label:'Eradicator Nova',  pts:0,  weapons:['Eradicator Nova Cannon'],replaces:['Leman Russ Battle Cannon'] },
        { label:'Executioner Cannon',pts:0, weapons:['Executioner Plasma Cannon'],replaces:['Leman Russ Battle Cannon'] },
        { label:'Punisher Cannon',  pts:0,  weapons:['Punisher Gatling Cannon'],replaces:['Leman Russ Battle Cannon'] },
      ]},
      { group:'Hull', choices:[
        { label:'Heavy Bolter',     pts:0,  default:true },
        { label:'Lascannon',        pts:15, weapons:['Lascannon'],            replaces:['Heavy Bolter'] },
        { label:'Heavy Flamer',     pts:10, weapons:['Heavy Flamer'],         replaces:['Heavy Bolter'] },
      ]},
      { group:'Sponsons', choices:[
        { label:'None',             pts:0,  default:true },
        { label:'Heavy Bolter Sponsons',  pts:10, weapons:['Heavy Bolter Sponsons'] },
        { label:'Lascannon Sponsons',     pts:30, weapons:['Lascannon Sponsons'] },
        { label:'Heavy Flamer Sponsons',  pts:20, weapons:['Heavy Flamer Sponsons'] },
        { label:'Plasma Cannon Sponsons', pts:30, weapons:['Plasma Cannon Sponsons'] },
      ]},
    ],
    abilities:['Master of Armour: Friendly Astra Militarum Vehicles within 6" re-roll hit rolls of 1',
               'Grinding Advance: Does not suffer penalty for moving and firing Heavy weapons',
               'Smoke Launchers',
               'Knight Commander: Counts as issuing one order to himself each turn automatically'] },

  { id:'ag_straken', name:'Colonel "Iron Hand" Straken',
    stats:['6"','2+','3+','4','4','5','4','9','3+'], role:'HQ', pts:95, min:1, max:1, ppm:0,
    wargear:['Bionic Arm (counts as Power Fist)','Shotgun','Hunting Knife'],
    abilities:['Voice of Command: Issue 1 order per turn',
               'Cold Steel and Courage: Friendly Astra Militarum Infantry within 6" add 1 to their Attacks in the Fight phase',
               'Deathmask of Ollanius: Friendly units within 6" add 1 to their Leadership',
               '4+ invulnerable save: Bionic augmentations and sheer stubbornness',
               'Cadian/Catachan or any Astra Militarum army'] },

  { id:'ag_harker', name:'Sergeant "Ripper" Harker',
    stats:['6"','3+','3+','4','4','3','3','8','5+'], role:'Elites', pts:50, min:1, max:1, ppm:0,
    wargear:['Payback (Heavy Bolter — fired as Assault 3)','Frag Grenades'],
    abilities:['Move Through Cover: This model and friendly Catachan units within 6" ignore movement penalties for terrain',
               'Guerrilla Fighter: This model and friendly Catachan Infantry within 6" always count as being in cover',
               'Catachan Devils: Friendly Catachan Infantry within 6" re-roll hit rolls of 1 in the Fight phase',
               'Independent Operator: May be attached to any Infantry Squad as a special character'] },

  { id:'ag_marbo', name:'Sly Marbo',
    stats:['7"','2+','3+','4','3','4','5','8','5+'], role:'Elites', pts:65, min:1, max:1, ppm:0,
    wargear:['Ripper Pistol','Melta Bomb','Envenomed Blade','Demolition Charge (once per game)'],
    abilities:['Lone Operative: Cannot be targeted by ranged attacks unless he is the closest enemy model or within 12"',
               'He Is The Jungle: Always counts as being in cover',
               'Ambush: Hold in reserve. Deploy at end of any Movement phase anywhere on the battlefield more than 9" from enemy models',
               'Demolition Charge: Assault D6+2, Range 6", S8 AP-3 D3 — one use',
               'Ripper Pistol: Pistol 1, Range 12", S4 AP-1 D2',
               'Deadly: If Marbo charges, add 3 to his Attacks characteristic this turn'] },

  { id:'ag_lord_solar', name:'Lord Solar Leontus',
    stats:['12"','3+','2+','4','4','6','4','10','3+'], role:'HQ', pts:125, min:1, max:1, ppm:0, isNew:true,
    wargear:["Sol's Righteous Gaze",'Conquest (Power Sword)'],
    abilities:['4+ invulnerable save',
               'Grand Strategist: Once per battle round — one friendly unit within 18" may immediately make a Normal move of up to 6"',
               'Master of Command: Friendly Infantry within 12" add 1 to hit rolls when targeting an enemy also targeted by another friendly unit',
               'Solar Wrath (Warlord): Once per battle — one friendly unit within 12" may shoot twice this phase'] },

  { id:'ag_ursula_creed', name:'Ursula Creed',
    stats:['6"','4+','3+','3','3','4','3','9','5+'], role:'HQ', pts:75, min:1, max:1, ppm:0, isNew:true,
    wargear:['Plasma Pistol','Power Sword'],
    abilities:['Voice of Command: Issue 1 order per turn',
               'Tactical Genius: At start of Command phase — one friendly unit within 18" re-rolls hit rolls of 1 until next Command phase',
               "Creed's Legacy: Friendly Cadian units within 6\" auto-pass Morale"] },

  // ── TROOPS ──────────────────────────────────────────────────────────
  { id:'ag_infantry_squad', name:'Infantry Squad',
    stats:['6"','4+','4+','3','3','1','1','6','5+'], role:'Troops', pts:40, min:10, max:10, ppm:0,
    wargear:[],
    composition:[
      { role:'Sergeant', count:1, wargear:['Lasgun','Laspistol','Frag Grenades'],
        options:[
          { group:'Ranged', choices:[
            { label:'Lasgun',      pts:0, default:true },
            { label:'Bolt Pistol', pts:0, weapons:['Bolt Pistol'], replaces:['Lasgun'] },
          ]},
          { group:'Melee', choices:[
            { label:'None',        pts:0, default:true },
            { label:'Chainsword',  pts:0, weapons:['Chainsword'],  replaces:[] },
            { label:'Power Sword', pts:4, weapons:['Power Sword'], replaces:['Lasgun'] },
            { label:'Power Fist',  pts:8, weapons:['Power Fist'],  replaces:['Lasgun'] },
          ]},
        ]},
      { role:'Special Weapon (1)', count:1, wargear:['Lasgun','Frag Grenades'],
        options:[
          { group:'Special', choices:[
            { label:'Lasgun',        pts:0, default:true },
            { label:'Flamer',        pts:5, weapons:['Flamer'],        replaces:['Lasgun'] },
            { label:'Grenade Launcher', pts:5, weapons:['Grenade Launcher'], replaces:['Lasgun'] },
            { label:'Meltagun',      pts:8, weapons:['Meltagun'],      replaces:['Lasgun'] },
            { label:'Plasma Gun',    pts:8, weapons:['Plasma Gun'],    replaces:['Lasgun'] },
          ]},
        ]},
      { role:'Heavy Weapon Team (1)', count:1, wargear:['Heavy Bolter','Lasgun'],
        options:[
          { group:'Heavy', choices:[
            { label:'Heavy Bolter',     pts:0, default:true, weapons:['Heavy Bolter'] },
            { label:'Autocannon',       pts:0, weapons:['Autocannon'],       replaces:['Heavy Bolter'] },
            { label:'Lascannon',        pts:0, weapons:['Lascannon'],        replaces:['Heavy Bolter'] },
            { label:'Mortar',           pts:0, weapons:['Mortar'],           replaces:['Heavy Bolter'] },
            { label:'Missile Launcher', pts:0, weapons:['Missile Launcher'], replaces:['Heavy Bolter'] },
          ]},
        ]},
      { role:'Guardsman', count:7, wargear:['Lasgun','Frag Grenades'] },
    ],
    abilities:['Voice of Command: Can receive orders from Officers'] },

  { id:'ag_veterans', name:'Veteran Squad',
    stats:['6"','3+','3+','3','3','1','1','7','5+'], role:'Troops', pts:45, min:10, max:10, ppm:0,
    wargear:[],
    composition:[
      { role:'Veteran Sergeant', count:1, wargear:['Lasgun','Laspistol','Frag Grenades'],
        options:[
          { group:'Ranged', choices:[
            { label:'Lasgun',      pts:0, default:true },
            { label:'Hot-shot Lasgun', pts:0, weapons:['Hot-shot Lasgun'], replaces:['Lasgun'] },
            { label:'Bolt Gun',    pts:0, weapons:['Boltgun'],    replaces:['Lasgun'] },
          ]},
          { group:'Melee', choices:[
            { label:'None',        pts:0, default:true },
            { label:'Chainsword',  pts:0, weapons:['Chainsword'],  replaces:[] },
            { label:'Power Sword', pts:4, weapons:['Power Sword'], replaces:['Lasgun'] },
            { label:'Power Fist',  pts:8, weapons:['Power Fist'],  replaces:['Lasgun'] },
          ]},
        ]},
      { role:'Special Weapon (up to 3)', count:3, wargear:['Lasgun','Frag Grenades'],
        options:[
          { group:'Special', choices:[
            { label:'Lasgun',           pts:0, default:true },
            { label:'Flamer',           pts:5, weapons:['Flamer'],           replaces:['Lasgun'] },
            { label:'Grenade Launcher', pts:5, weapons:['Grenade Launcher'], replaces:['Lasgun'] },
            { label:'Meltagun',         pts:8, weapons:['Meltagun'],         replaces:['Lasgun'] },
            { label:'Plasma Gun',       pts:8, weapons:['Plasma Gun'],       replaces:['Lasgun'] },
            { label:'Flamer',           pts:5, weapons:['Flamer'],           replaces:['Lasgun'] },
            { label:'Demo Charge',      pts:5, weapons:['Demo Charge'],      replaces:['Lasgun'] },
          ]},
        ]},
      { role:'Veteran', count:6, wargear:['Lasgun','Frag Grenades'] },
    ],
    abilities:['Voice of Command: Can receive orders',
               'Veteran Weapons: Up to 3 models may take special weapons',
               'Doctrines: Choose one — Demolitions / Forward Sentries / Weapons Team'] },

  { id:'ag_conscripts', name:'Conscripts',
    stats:['6"','5+','5+','3','3','1','1','4','6+'], role:'Troops', pts:50, min:20, max:30, ppm:2,
    wargear:[],
    composition:[
      { role:'Conscript', count:20, wargear:['Lasgun'] },
    ],
    abilities:['Voice of Command: Can receive orders',
               'Mob Rule: Re-roll Morale tests if 10+ models remain',
               'Send in the Next Wave: Destroyed unit may return from reserves once per game'] },

  // ── ELITES ──────────────────────────────────────────────────────────
  { id:'ag_storm_troopers', name:'Militarum Tempestus Scions',
    stats:['6"','3+','3+','3','3','1','1','7','4+'], role:'Elites', pts:55, min:5, max:10, ppm:11,
    wargear:[],
    composition:[
      { role:'Tempestor', count:1, wargear:['Hellgun','Bolt Pistol','Frag Grenades'],
        options:[
          { group:'Ranged', choices:[
            { label:'Bolt Pistol',   pts:0, default:true },
            { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
            { label:'Power Sword',   pts:4, weapons:['Power Sword'],   replaces:['Bolt Pistol'] },
          ]},
        ]},
      { role:'Special Weapon (up to 2)', count:2, wargear:['Hellgun','Bolt Pistol'],
        options:[
          { group:'Special', choices:[
            { label:'Hellgun',          pts:0, default:true },
            { label:'Flamer',           pts:5, weapons:['Flamer'],           replaces:['Hellgun'] },
            { label:'Grenade Launcher', pts:5, weapons:['Grenade Launcher'], replaces:['Hellgun'] },
            { label:'Meltagun',         pts:8, weapons:['Meltagun'],         replaces:['Hellgun'] },
            { label:'Plasma Gun',       pts:8, weapons:['Plasma Gun'],       replaces:['Hellgun'] },
            { label:'Hot-shot Volley Gun', pts:5, weapons:['Hot-shot Volley Gun'], replaces:['Hellgun'] },
          ]},
        ]},
      { role:'Scion', count:2, wargear:['Hellgun','Bolt Pistol','Frag Grenades'] },
    ],
    abilities:['Voice of Command: Can receive orders',
               'Grav-chute Insertion: Deep strike — arrive 9"+ from enemy',
               'Elite Troops: Re-roll hit rolls of 1'] },

  { id:'ag_ogryns', name:'Ogryns',
    stats:['6"','3+','3+','5','5','3','3','7','4+'], role:'Elites', pts:78, min:3, max:6, ppm:26,
    wargear:[],
    composition:[
      { role:'Ogryn Bonehead', count:1, wargear:['Ripper Gun','Frag Bomb'],
        options:[
          { group:'Melee', choices:[
            { label:'None',            pts:0, default:true },
            { label:'Bullgryn Maul',   pts:5, weapons:['Bullgryn Maul'],   replaces:[] },
            { label:'Brute Shield',    pts:5, weapons:['Brute Shield'],    replaces:[] },
          ]},
        ]},
      { role:'Ogryn', count:2, wargear:['Ripper Gun','Frag Bomb'] },
    ],
    abilities:['Unnatural Strength: Re-roll failed wound rolls in the Fight phase',
               'Loyal Protector: Friendly Characters within 3" may re-roll failed saving throws of 1'] },

  { id:'ag_nork', name:'Nork Deddog', unique:true,
    stats:['6"','3+','5+','5','5','5','3','8','4+'], role:'Elites', pts:80, min:1, max:1, ppm:0,
    wargear:['Ripper Gun','Huge Knife','Hot-shot Laspistol'],
    abilities:['Bodyguard: Roll D6 when a friendly Officer within 3" loses a wound — on 2+ Nork suffers it instead',
               'Loyal Protector: Friendly Officers within 3" may re-roll failed saving throws of 1',
               "I'll 'Ave That: When Nork slays a Character add 1 to his Attacks for the rest of the battle"] },

  { id:'ag_ratlings', name:'Ratlings',
    stats:['6"','5+','3+','2','2','1','1','6','6+'], role:'Elites', pts:30, min:3, max:10, ppm:10,
    wargear:[],
    composition:[
      { role:'Ratling', count:3, wargear:['Sniper Rifle','Knife'] },
    ],
    abilities:['Scouts: Move up to 6" before first battle round',
               'Sniper: Wound rolls of 6 deal 1 mortal wound in addition',
               'Concealed Position: Always count as being in cover if they did not move this turn'] },

  { id:'ag_kasrkin', name:'Kasrkin',
    stats:['6"','3+','3+','3','3','1','2','8','4+'], role:'Elites', pts:70, min:5, max:10, ppm:14, isNew:true,
    wargear:[],
    composition:[
      { role:'Kasrkin Sergeant', count:1, wargear:['Hot-shot Lasgun','Hot-shot Laspistol'],
        options:[
          { group:'Melee', choices:[
            { label:'None',        pts:0, default:true },
            { label:'Chainsword',  pts:0, weapons:['Chainsword'],  replaces:[] },
            { label:'Power Sword', pts:4, weapons:['Power Sword'], replaces:['Hot-shot Lasgun'] },
          ]},
        ]},
      { role:'Special Weapon (up to 2)', count:2, wargear:['Hot-shot Lasgun','Hot-shot Laspistol'],
        options:[
          { group:'Special', choices:[
            { label:'Hot-shot Lasgun',     pts:0, default:true },
            { label:'Flamer',              pts:5, weapons:['Flamer'],          replaces:['Hot-shot Lasgun'] },
            { label:'Meltagun',            pts:8, weapons:['Meltagun'],        replaces:['Hot-shot Lasgun'] },
            { label:'Plasma Gun',          pts:8, weapons:['Plasma Gun'],      replaces:['Hot-shot Lasgun'] },
            { label:'Grenade Launcher',    pts:5, weapons:['Grenade Launcher'],replaces:['Hot-shot Lasgun'] },
            { label:'Hot-shot Volley Gun', pts:5, weapons:['Hot-shot Volley Gun'], replaces:['Hot-shot Lasgun'] },
          ]},
        ]},
      { role:'Kasrkin', count:2, wargear:['Hot-shot Lasgun','Hot-shot Laspistol'] },
    ],
    abilities:['Voice of Command: Can receive orders from any Officer',
               'Elite Soldiers: Re-roll hit rolls of 1 — never suffer penalty for Advancing and firing Assault weapons',
               'Grav-chute Insertion: Deep strike — arrive 9"+ from enemy — cannot charge same turn'] },

  // ── FAST ATTACK ─────────────────────────────────────────────────────
  { id:'ag_rough_riders', name:'Rough Riders',
    stats:['14"','4+','4+','3','3','2','2','6','5+'], role:'Fast Attack', pts:50, min:5, max:10, ppm:10,
    wargear:[],
    composition:[
      { role:'Rough Rider Sergeant', count:1, wargear:['Hunting Lance','Bolt Pistol','Combat Blade'],
        options:[
          { group:'Ranged', choices:[
            { label:'Bolt Pistol',   pts:0, default:true },
            { label:'Plasma Pistol', pts:5, weapons:['Plasma Pistol'], replaces:['Bolt Pistol'] },
          ]},
        ]},
      { role:'Rough Rider', count:4, wargear:['Hunting Lance','Laspistol','Combat Blade'] },
    ],
    abilities:['Hunting Lance: On the turn this unit charges wound rolls are always 2+ regardless of Toughness',
               'Skilled Riders: May Advance and still charge in the same turn'] },

  { id:'ag_hellhound', name:'Hellhound',
    stats:['12"','5+','3+','6','7','11','3','7','3+'], role:'Fast Attack', pts:110, min:1, max:1, ppm:0,
    wargear:['Inferno Cannon','Heavy Bolter'],
    abilities:['Smoke Launchers','Fast Vehicle: May Advance and still fire Inferno Cannon',
               'Explodes: On 6 when destroyed — D3 mortal wounds within 6"'] },

  // ── HEAVY SUPPORT ───────────────────────────────────────────────────
  { id:'ag_heavy_weapons', name:'Heavy Weapons Squad',
    stats:['6"','4+','4+','3','3','1','1','6','5+'], role:'Heavy Support', pts:24, min:3, max:3, ppm:0,
    wargear:[],
    composition:[
      { role:'Heavy Weapon Team 1', count:1, wargear:['Mortar'],
        options:[
          { group:'Weapon', choices:[
            { label:'Mortar',           pts:0, default:true, weapons:['Mortar'] },
            { label:'Heavy Bolter',     pts:0, weapons:['Heavy Bolter'],     replaces:['Mortar'] },
            { label:'Autocannon',       pts:0, weapons:['Autocannon'],       replaces:['Mortar'] },
            { label:'Lascannon',        pts:0, weapons:['Lascannon'],        replaces:['Mortar'] },
            { label:'Missile Launcher', pts:0, weapons:['Missile Launcher'], replaces:['Mortar'] },
          ]},
        ]},
      { role:'Heavy Weapon Team 2', count:1, wargear:['Mortar'],
        options:[
          { group:'Weapon', choices:[
            { label:'Mortar',           pts:0, default:true, weapons:['Mortar'] },
            { label:'Heavy Bolter',     pts:0, weapons:['Heavy Bolter'],     replaces:['Mortar'] },
            { label:'Autocannon',       pts:0, weapons:['Autocannon'],       replaces:['Mortar'] },
            { label:'Lascannon',        pts:0, weapons:['Lascannon'],        replaces:['Mortar'] },
            { label:'Missile Launcher', pts:0, weapons:['Missile Launcher'], replaces:['Mortar'] },
          ]},
        ]},
      { role:'Heavy Weapon Team 3', count:1, wargear:['Mortar'],
        options:[
          { group:'Weapon', choices:[
            { label:'Mortar',           pts:0, default:true, weapons:['Mortar'] },
            { label:'Heavy Bolter',     pts:0, weapons:['Heavy Bolter'],     replaces:['Mortar'] },
            { label:'Autocannon',       pts:0, weapons:['Autocannon'],       replaces:['Mortar'] },
            { label:'Lascannon',        pts:0, weapons:['Lascannon'],        replaces:['Mortar'] },
            { label:'Missile Launcher', pts:0, weapons:['Missile Launcher'], replaces:['Mortar'] },
          ]},
        ]},
    ],
    abilities:['Voice of Command: Can receive orders',
               'Weapon Teams: Each team consists of 2 models operating one heavy weapon',
               'Fire Support: Counts as Stationary if did not move — re-roll hit rolls of 1'] },

  { id:'ag_leman_russ', name:'Leman Russ Battle Tank',
    stats:['10"','5+','3+','6','8','12','3','8','3+'], role:'Heavy Support', pts:167, min:1, max:1, ppm:0,
    wargear:['Battle Cannon','Heavy Bolter','Lascannon Sponsons'],
    abilities:['Grinding Advance: Move and fire heavy weapons without penalty',
               'Smoke Launchers','Tank: Does not take Morale tests',
               'Explodes: On 6 when destroyed — D6 mortal wounds within 6"'] },

  { id:'ag_basilisk', name:'Basilisk',
    stats:['10"','5+','3+','6','7','11','3','7','3+'], role:'Heavy Support', pts:130, min:1, max:1, ppm:0,
    wargear:['Earthshaker Cannon','Heavy Bolter'],
    abilities:['Smoke Launchers',
               'Indirect Fire: May target units not in line of sight at -1 to hit',
               'Earthshaker: Units hit subtract 2 from Move until your next turn',
               'Explodes: On 6 when destroyed — D3 mortal wounds within 6"'] },

  { id:'ag_rogal_dorn', name:'Rogal Dorn Battle Tank',
    stats:['10"','5+','3+','8','11','18','3','9','2+'], role:'Heavy Support', pts:310, min:1, max:1, ppm:0, isNew:true,
    wargear:['Oppressor Cannon','Co-axial Multi-melta','2x Castigator Gatling Cannons'],
    abilities:['Steel Bastion: Friendly Astra Militarum Infantry within 3" gain cover',
               'Grinding Advance: No penalty for moving and firing Heavy weapons',
               'Explodes: On 6 when destroyed — D6 mortal wounds within 6"'] },

  { id:'ag_baneblade', name:'Baneblade',
    stats:['10"','5+','3+','8','9','26','9','8','2+'], role:'Lord of War', pts:531, min:1, max:1, ppm:0,
    wargear:['Baneblade Cannon','Demolisher Cannon','3x Twin Heavy Bolter','2x Lascannon','2x Heavy Stubber'],
    options:[
      { group:'Sponsons', choices:[
        { label:'Twin Heavy Bolters',  pts:0,  default:true },
        { label:'Twin Heavy Flamers',  pts:0,  weapons:['2x Twin Heavy Flamer'], replaces:['2x Twin Heavy Bolter'] },
        { label:'Twin Lascannons',     pts:0,  weapons:['2x Twin Lascannon'],    replaces:['2x Twin Heavy Bolter'] },
        { label:'Twin Multi-meltas',   pts:0,  weapons:['2x Twin Multi-melta'],  replaces:['2x Twin Heavy Bolter'] },
      ]},
      { group:'Pintle', choices:[
        { label:'None',                pts:0, default:true },
        { label:'Heavy Stubber',       pts:4, weapons:['Heavy Stubber'] },
        { label:'Storm Bolter',        pts:2, weapons:['Storm Bolter'] },
      ]},
    ],
    abilities:['Grinding Advance: Does not suffer -1 to hit for moving and firing Heavy weapons',
               'Smoke Launchers',
               'Titanic: Never affected by Morale — can fire all weapons at different targets',
               'Steel Behemoth: Can move over models and terrain features under 4" tall',
               'Explodes: On 6 — 2D6 mortal wounds within 2D6"'] },

  { id:'ag_hellhammer', name:'Hellhammer',
    stats:['10"','5+','3+','8','9','26','9','8','2+'], role:'Lord of War', pts:410, min:1, max:1, ppm:0,
    wargear:['Hellhammer Cannon','Demolisher Cannon','3x Twin Heavy Bolter','2x Lascannon'],
    options:[
      { group:'Sponsons', choices:[
        { label:'Twin Heavy Bolters',  pts:0,  default:true },
        { label:'Twin Heavy Flamers',  pts:0,  weapons:['2x Twin Heavy Flamer'], replaces:['2x Twin Heavy Bolter'] },
        { label:'Twin Lascannons',     pts:0,  weapons:['2x Twin Lascannon'],    replaces:['2x Twin Heavy Bolter'] },
        { label:'Twin Multi-meltas',   pts:0,  weapons:['2x Twin Multi-melta'],  replaces:['2x Twin Heavy Bolter'] },
      ]},
    ],
    abilities:['Grinding Advance','Smoke Launchers','Titanic','Steel Behemoth',
               'Hellhammer Cannon: Ignores bonus from Cover saves',
               'Explodes: On 6 — 2D6 mortal wounds within 2D6"'] },

  { id:'ag_banehammer', name:'Banehammer',
    stats:['10"','5+','3+','8','9','26','9','8','2+'], role:'Lord of War', pts:375, min:1, max:1, ppm:0,
    wargear:['Tremor Cannon','3x Twin Heavy Bolter','2x Lascannon'],
    options:[
      { group:'Sponsons', choices:[
        { label:'Twin Heavy Bolters',  pts:0,  default:true },
        { label:'Twin Heavy Flamers',  pts:0,  weapons:['2x Twin Heavy Flamer'], replaces:['2x Twin Heavy Bolter'] },
        { label:'Twin Lascannons',     pts:0,  weapons:['2x Twin Lascannon'],    replaces:['2x Twin Heavy Bolter'] },
        { label:'Twin Multi-meltas',   pts:0,  weapons:['2x Twin Multi-melta'],  replaces:['2x Twin Heavy Bolter'] },
      ]},
    ],
    abilities:['Grinding Advance','Smoke Launchers','Titanic','Steel Behemoth',
               'Tremor Cannon: Units hit must subtract 2 from Advance and Charge rolls until end of turn',
               'Transport: Carries 25 Infantry (10 can fire from transport each turn)',
               'Explodes: On 6 — 2D6 mortal wounds within 2D6"'] },

  { id:'ag_banesword', name:'Banesword',
    stats:['10"','5+','3+','8','9','26','9','8','2+'], role:'Lord of War', pts:408, min:1, max:1, ppm:0,
    wargear:['Quake Cannon','3x Twin Heavy Bolter','2x Lascannon'],
    options:[
      { group:'Sponsons', choices:[
        { label:'Twin Heavy Bolters',  pts:0,  default:true },
        { label:'Twin Heavy Flamers',  pts:0,  weapons:['2x Twin Heavy Flamer'], replaces:['2x Twin Heavy Bolter'] },
        { label:'Twin Lascannons',     pts:0,  weapons:['2x Twin Lascannon'],    replaces:['2x Twin Heavy Bolter'] },
        { label:'Twin Multi-meltas',   pts:0,  weapons:['2x Twin Multi-melta'],  replaces:['2x Twin Heavy Bolter'] },
      ]},
    ],
    abilities:['Grinding Advance','Smoke Launchers','Titanic','Steel Behemoth',
               'Quake Cannon: Ignores Line of Sight — fires indirectly at -1 to hit',
               'Explodes: On 6 — 2D6 mortal wounds within 2D6"'] },

  { id:'ag_doomhammer', name:'Doomhammer',
    stats:['10"','5+','3+','8','9','26','9','8','2+'], role:'Lord of War', pts:400, min:1, max:1, ppm:0,
    wargear:['Magma Cannon','3x Twin Heavy Bolter','2x Lascannon'],
    options:[
      { group:'Sponsons', choices:[
        { label:'Twin Heavy Bolters',  pts:0,  default:true },
        { label:'Twin Heavy Flamers',  pts:0,  weapons:['2x Twin Heavy Flamer'], replaces:['2x Twin Heavy Bolter'] },
        { label:'Twin Lascannons',     pts:0,  weapons:['2x Twin Lascannon'],    replaces:['2x Twin Heavy Bolter'] },
        { label:'Twin Multi-meltas',   pts:0,  weapons:['2x Twin Multi-melta'],  replaces:['2x Twin Heavy Bolter'] },
      ]},
    ],
    abilities:['Grinding Advance','Smoke Launchers','Titanic','Steel Behemoth',
               'Transport: Carries 25 Infantry (10 can fire from transport each turn)',
               'Explodes: On 6 — 2D6 mortal wounds within 2D6"'] },

  { id:'ag_stormlord', name:'Stormlord',
    stats:['10"','5+','3+','8','9','26','9','8','2+'], role:'Lord of War', pts:532, min:1, max:1, ppm:0,
    wargear:['Vulcan Mega-Bolter','3x Twin Heavy Bolter','2x Lascannon'],
    options:[
      { group:'Sponsons', choices:[
        { label:'Twin Heavy Bolters',  pts:0,  default:true },
        { label:'Twin Heavy Flamers',  pts:0,  weapons:['2x Twin Heavy Flamer'], replaces:['2x Twin Heavy Bolter'] },
        { label:'Twin Lascannons',     pts:0,  weapons:['2x Twin Lascannon'],    replaces:['2x Twin Heavy Bolter'] },
        { label:'Twin Multi-meltas',   pts:0,  weapons:['2x Twin Multi-melta'],  replaces:['2x Twin Heavy Bolter'] },
      ]},
    ],
    abilities:['Grinding Advance','Smoke Launchers','Titanic','Steel Behemoth',
               'Transport: Carries 40 Infantry (20 can fire from open-topped transport each turn)',
               'Explodes: On 6 — 2D6 mortal wounds within 2D6"'] },

  { id:'ag_stormsword', name:'Stormsword',
    stats:['10"','5+','3+','8','9','26','9','8','2+'], role:'Lord of War', pts:394, min:1, max:1, ppm:0,
    wargear:['Stormsword Siege Cannon','3x Twin Heavy Bolter','2x Lascannon'],
    options:[
      { group:'Sponsons', choices:[
        { label:'Twin Heavy Bolters',  pts:0,  default:true },
        { label:'Twin Heavy Flamers',  pts:0,  weapons:['2x Twin Heavy Flamer'], replaces:['2x Twin Heavy Bolter'] },
        { label:'Twin Lascannons',     pts:0,  weapons:['2x Twin Lascannon'],    replaces:['2x Twin Heavy Bolter'] },
        { label:'Twin Multi-meltas',   pts:0,  weapons:['2x Twin Multi-melta'],  replaces:['2x Twin Heavy Bolter'] },
      ]},
    ],
    abilities:['Grinding Advance','Smoke Launchers','Titanic','Steel Behemoth',
               'Stormsword Siege Cannon: Ignores bonus from Cover saves',
               'Explodes: On 6 — 2D6 mortal wounds within 2D6"'] },

  { id:'ag_shadowsword', name:'Shadowsword',
    stats:['10"','5+','3+','8','9','26','9','8','2+'], role:'Lord of War', pts:494, min:1, max:1, ppm:0,
    wargear:['Volcano Cannon','3x Twin Heavy Bolter','2x Lascannon'],
    options:[
      { group:'Sponsons', choices:[
        { label:'Twin Heavy Bolters',  pts:0,  default:true },
        { label:'Twin Heavy Flamers',  pts:0,  weapons:['2x Twin Heavy Flamer'], replaces:['2x Twin Heavy Bolter'] },
        { label:'Twin Lascannons',     pts:0,  weapons:['2x Twin Lascannon'],    replaces:['2x Twin Heavy Bolter'] },
        { label:'Twin Multi-meltas',   pts:0,  weapons:['2x Twin Multi-melta'],  replaces:['2x Twin Heavy Bolter'] },
      ]},
    ],
    abilities:['Grinding Advance','Smoke Launchers','Titanic','Steel Behemoth',
               'Volcano Cannon: S16 AP-5 D2D6 — re-roll failed Wound rolls against Titanic units, +1 to hit Titanic',
               'Explodes: On 6 — 2D6 mortal wounds within 2D6"'] },

  // ── DEDICATED TRANSPORT ─────────────────────────────────────────────
  { id:'ag_chimera', name:'Chimera',
    stats:['12"','5+','3+','6','7','10','3','7','3+'], role:'Dedicated Transport', pts:83, min:1, max:1, ppm:0,
    wargear:['Multi-Laser','Heavy Bolter'],
    abilities:['Smoke Launchers','Transport: Carries 12 Infantry models',
               'Mobile Command Vehicle: Officers embarked may still issue orders',
               'Explodes: On 6 when destroyed — D3 mortal wounds within 6"'] },

  // ── FLYER ───────────────────────────────────────────────────────────
  { id:'ag_valkyrie', name:'Valkyrie',
    stats:['20-50"','5+','3+','6','6','12','3','8','3+'], role:'Flyer', pts:160, min:1, max:1, ppm:0,
    wargear:['Multi-Laser','Rocket Pods','Heavy Bolters'],
    abilities:['Supersonic: Minimum 20" move',
               'Transport: Carries 12 Infantry — Grav-chute Insertion: units may disembark mid-flight',
               'Hard to Hit: -1 to hit rolls targeting this model',
               'Explodes: On 6 when destroyed — D3 mortal wounds within 6"'] },

  // ── NARRATIVE RETINUE — RULES AUDIT PENDING ─────────────────────────
  { id:'ag_gaunts_ghosts', name:"Gaunt's Ghosts — Tanith First and Only", unique:true, isNew:true,
    stats:['6"','3+','3+','3','3','*','*','8','5+'], role:'HQ', pts:185, min:6, max:6, ppm:0,
    wargear:[],
    composition:[
      { role:'Colonel-Commissar Ibram Gaunt', count:1, wargear:['Bolt Pistol',"Gaunt's Chainsword",'Straight Silver Knife'] },
      { role:'Colonel Colm Corbec', count:1, wargear:["Corbec's Hot-shot Lascarbine",'Straight Silver Knife'] },
      { role:'Major Elim Rawne', count:1, wargear:['Lascarbine','Straight Silver Knife'] },
      { role:"Master Sniper 'Try Again' Bragg", count:1, wargear:['Autocannon','Straight Silver Knife'] },
      { role:'Master Sniper Hlaine Larkin', count:1, wargear:["Larkin's Long-Las",'Straight Silver Knife'] },
      { role:'Scout Sergeant Dan Mkoll', count:1, wargear:['Lascarbine','Straight Silver Knife'] },
    ],
    abilities:['Tanith Camo-cloaks: Always count as being in cover',
               'Covert Infiltration: Deep strike — may arrive anywhere more than 9" from enemy',
               "Only one GAUNT'S GHOSTS unit may be taken per army",
               'Voice of Command: Gaunt may issue 2 orders per turn',
               'NOTE: Rules audit pending — stats and points require verification against current datasheet'] },

];
