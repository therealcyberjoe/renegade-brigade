const FACTION_GREY_KNIGHTS = [
  // ── HQ ──────────────────────────────────────────────────────────────
  { id:'gk_grand_master', name:'Grand Master in Nemesis Dreadknight',
    stats:['6"','3+','3+','5','6','8','4','9','2+'], role:'HQ', pts:245, min:1, max:1, ppm:0,
    wargear:['Nemesis Doomfist','Gatling Psilencer'],
    options:[
      { group:'Ranged', choices:[
        { label:'Gatling Psilencer',   pts:0, default:true, weapons:['Gatling Psilencer'] },
        { label:'Heavy Psycannon',     pts:0, weapons:['Heavy Psycannon'],     replaces:['Gatling Psilencer'] },
      ]},
      { group:'Secondary', choices:[
        { label:'None',                pts:0, default:true },
        { label:'Nemesis Greatsword',  pts:0, weapons:['Nemesis Greatsword'],  replaces:[] },
        { label:'Heavy Incinerator',   pts:0, weapons:['Heavy Incinerator'],   replaces:[] },
      ]},
    ],
    abilities:['And They Shall Know No Fear','Psyker: Mastery Level 2',
               'Supreme Grandmaster: Friendly Grey Knights within 6" re-roll all failed hit rolls',
               '4+ invulnerable save'] },

  { id:'gk_grand_master_foot', name:'Grand Master',
    stats:['5"','2+','2+','4','4','6','5','9','2+'], role:'HQ', pts:130, min:1, max:1, ppm:0,
    wargear:['Master-crafted Storm Bolter','Nemesis Force Halberd'],
    options:[
      { group:'Force Weapon', choices:[
        { label:'Nemesis Force Halberd', pts:0, default:true, weapons:['Nemesis Force Halberd'] },
        { label:'Nemesis Force Sword',   pts:0, weapons:['Nemesis Force Sword'],   replaces:['Nemesis Force Halberd'] },
        { label:'Nemesis Force Staff',   pts:0, weapons:['Force Staff'],            replaces:['Nemesis Force Halberd'] },
        { label:'Nemesis Doomfist',      pts:0, weapons:['Nemesis Doomfist'],       replaces:['Nemesis Force Halberd'] },
        { label:'Nemesis Falchions',     pts:0, weapons:['Nemesis Falchions'],      replaces:['Nemesis Force Halberd'] },
      ]},
    ],
    abilities:['And They Shall Know No Fear','Psyker: Mastery Level 2',
               'Supreme Grandmaster: Friendly Grey Knights within 6" re-roll all failed hit rolls',
               '4+ invulnerable save','Teleport Strike: Deep strike — arrive 9"+ from enemy'] },

  { id:'gk_draigo', name:'Lord Kaldor Draigo',
    stats:['5"','2+','2+','5','5','8','5','9','2+'], role:'HQ', pts:225, min:1, max:1, ppm:0, unique:true,
    wargear:['The Titansword','Sanctum Sigilum','Master-crafted Storm Bolter'],
    abilities:['And They Shall Know No Fear','Psyker: Mastery Level 3',
               'Supreme Grand Master: Re-roll all failed hit and wound rolls for Grey Knights within 6"',
               '3+ invulnerable save: Sanctum Sigilum',
               'Teleport Strike: Deep strike — arrive 9"+ from enemy',
               'One With the Warp: Once per battle when declaring a charge after deep striking — add 3 to the charge roll',
               'The Titansword: S8 AP-4 D3 — on charge 7 attacks instead of 5'] },

  { id:'gk_voldus', name:'Grand Master Voldus',
    stats:['5"','2+','2+','4','4','6','5','9','2+'], role:'HQ', pts:165, min:1, max:1, ppm:0, unique:true,
    wargear:['Malleus Argyrum','Master-crafted Storm Bolter'],
    abilities:['And They Shall Know No Fear','Psyker: Mastery Level 3',
               'Supreme Grandmaster: Friendly Grey Knights within 6" re-roll all failed hit rolls',
               '4+ invulnerable save','Teleport Strike: Deep strike — arrive 9"+ from enemy',
               'Hammer Aflame: WC5 — until end of turn Malleus Argyrum gains +D3 damage',
               'Warden of the Librarius: Friendly Grey Knights Psykers within 9" re-roll Psychic tests of 1'] },

  { id:'gk_stern', name:'Brother-Captain Stern',
    stats:['5"','2+','2+','4','4','6','5','9','2+'], role:'HQ', pts:145, min:1, max:1, ppm:0, unique:true,
    wargear:['Nemesis Force Sword','Storm Bolter'],
    abilities:['And They Shall Know No Fear','Psyker: Mastery Level 2',
               '4+ invulnerable save','Teleport Strike: Deep strike — arrive 9"+ from enemy',
               'Strands of Fate: Once per turn re-roll one hit roll / wound roll / saving throw of your choice',
               'Spiritual Fortitude: Friendly Grey Knights within 6" may re-roll failed Deny the Witch attempts',
               'Warp Banishment: WC6 — one Daemon unit within 24" suffers D3 mortal wounds and subtracts 1 from Psychic tests for the rest of the battle'] },

  { id:'gk_crowe', name:'Castellan Crowe',
    stats:['6"','2+','2+','4','4','5','7','9','3+'], role:'HQ', pts:100, min:1, max:1, ppm:0, unique:true,
    wargear:['Black Blade of Antwyr','Purifying Flame','Storm Bolter'],
    abilities:['And They Shall Know No Fear','Psyker: Mastery Level 1',
               '4+ invulnerable save',
               'Champion of the Purifiers: Friendly Purifier Squads within 6" add 1 to their Attacks',
               'Martial Superiority: Always fights first in Fight phase regardless of any other rule',
               'Heroic Sacrifice: When this model is slain it may immediately fight one last time before being removed',
               'Black Blade of Antwyr: S5 AP-3 D2 — wound rolls of 6 deal D3 additional mortal wounds',
               'Purifying Flame: Assault 3 auto-hit S4 AP-1 D1'] },

  { id:'gk_brother_captain', name:'Brother-Captain',
    stats:['5"','2+','2+','4','4','6','5','9','2+'], role:'HQ', pts:140, min:1, max:1, ppm:0,
    wargear:['Nemesis Force Sword','Storm Bolter'],
    options:[
      { group:'Force Weapon', choices:[
        { label:'Nemesis Force Sword',   pts:0, default:true, weapons:['Nemesis Force Sword'] },
        { label:'Nemesis Force Halberd', pts:0, weapons:['Nemesis Force Halberd'], replaces:['Nemesis Force Sword'] },
        { label:'Nemesis Force Staff',   pts:0, weapons:['Force Staff'],            replaces:['Nemesis Force Sword'] },
        { label:'Nemesis Doomfist',      pts:0, weapons:['Nemesis Doomfist'],       replaces:['Nemesis Force Sword'] },
        { label:'Nemesis Falchions',     pts:0, weapons:['Nemesis Falchions'],      replaces:['Nemesis Force Sword'] },
      ]},
    ],
    abilities:['And They Shall Know No Fear','Psyker: Mastery Level 2',
               '4+ invulnerable save','Teleport Strike: Deep strike — arrive 9"+ from enemy',
               'Rites of Battle: Friendly Grey Knights within 6" re-roll hit rolls of 1'] },

  { id:'gk_librarian', name:'Brotherhood Librarian',
    stats:['6"','3+','3+','4','4','5','3','9','3+'], role:'HQ', pts:110, min:1, max:1, ppm:0,
    wargear:['Nemesis Force Sword','Storm Bolter'],
    options:[
      { group:'Force Weapon', choices:[
        { label:'Nemesis Force Sword',   pts:0, default:true, weapons:['Nemesis Force Sword'] },
        { label:'Nemesis Force Halberd', pts:0, weapons:['Nemesis Force Halberd'], replaces:['Nemesis Force Sword'] },
        { label:'Nemesis Force Staff',   pts:0, weapons:['Force Staff'],            replaces:['Nemesis Force Sword'] },
      ]},
    ],
    abilities:['And They Shall Know No Fear','Psyker: Mastery Level 2',
               'Empyric Channelling: +1 to Psychic tests for each Psyker within 12"',
               '4+ invulnerable save','Teleport Strike'] },

  { id:'gk_chaplain', name:'Brotherhood Chaplain',
    stats:['5"','2+','2+','4','4','5','4','9','2+'], role:'HQ', pts:120, min:1, max:1, ppm:0,
    wargear:['Crozius Arcanum','Storm Bolter'],
    abilities:['And They Shall Know No Fear','Psyker: Mastery Level 1',
               '4+ invulnerable save','Teleport Strike',
               'Litanies of Battle: Know 2 litanies — attempt both each turn on 3+',
               'Spiritual Rites: Friendly Grey Knights within 6" re-roll failed Morale tests'] },

  { id:'gk_champion', name:'Brotherhood Champion',
    stats:['6"','2+','2+','4','4','5','6','9','3+'], role:'HQ', pts:100, min:1, max:1, ppm:0,
    wargear:['Sword of the Scion','Storm Bolter'],
    abilities:['And They Shall Know No Fear','Psyker: Mastery Level 1',
               '4+ invulnerable save',
               'Martial Superiority: Always fights first in Fight phase',
               'Heroic Sacrifice: When slain may fight one last time before removal',
               'Sword of the Scion: S4 AP-3 D2 — re-roll failed hit rolls'] },

  { id:'gk_techmarine', name:'Brotherhood Techmarine',
    stats:['6"','3+','3+','4','4','4','2','9','3+'], role:'HQ', pts:75, min:1, max:1, ppm:0,
    wargear:['Servo-arm','Boltgun','Power Axe'],
    abilities:['And They Shall Know No Fear','Psyker: Mastery Level 1',
               'Blessing of the Omnissiah: Restore D3 wounds to one friendly Vehicle within 1" each Movement phase',
               'Bolster Defences: Once per game one terrain feature gains +1 cover'] },

  { id:'gk_apothecary', name:'Apothecary',
    stats:['6"','3+','3+','4','4','4','3','9','3+'], role:'HQ', pts:90, min:1, max:1, ppm:0, isNew:true,
    wargear:['Narthecium','Storm Bolter','Nemesis Force Sword'],
    abilities:['And They Shall Know No Fear','Psyker: Mastery Level 1',
               'Teleport Strike: Deep strike — arrive 9"+ from enemy',
               '4+ invulnerable save',
               'Narthecium: Return one slain model to a friendly Grey Knights unit within 3" each Movement phase',
               'Surgical Precision: Friendly Grey Knights Core within 6" re-roll wound rolls of 1'] },

  { id:'gk_ancient', name:'Brotherhood Ancient',
    stats:['6"','3+','3+','4','4','4','3','9','3+'], role:'HQ', pts:80, min:1, max:1, ppm:0, isNew:true,
    wargear:['Storm Bolter','Nemesis Force Halberd','Chapter Banner'],
    abilities:['And They Shall Know No Fear','Psyker: Mastery Level 1',
               'Teleport Strike: Deep strike — arrive 9"+ from enemy',
               '4+ invulnerable save',
               'Chapter Banner: Friendly Grey Knights within 6" re-roll hit rolls of 1',
               'Astartes Banner: When a friendly unit within 6" is destroyed roll D6 — on 4+ one model returns with 1 wound'] },

  // ── TROOPS ──────────────────────────────────────────────────────────
  { id:'gk_strike_squad', name:'Strike Squad',
    stats:['6"','3+','3+','4','4','2','3','8','3+'], role:'Troops', pts:120, min:5, max:10, ppm:24,
    wargear:[],
    composition:[
      { role:'Justicar', count:1, wargear:['Storm Bolter','Nemesis Force Sword'],
        options:[
          { group:'Force Weapon', choices:[
            { label:'Nemesis Force Sword',   pts:0, default:true, weapons:['Nemesis Force Sword'] },
            { label:'Nemesis Force Halberd', pts:0, weapons:['Nemesis Force Halberd'], replaces:['Nemesis Force Sword'] },
            { label:'Nemesis Force Staff',   pts:0, weapons:['Force Staff'],            replaces:['Nemesis Force Sword'] },
            { label:'Nemesis Doomfist',      pts:0, weapons:['Nemesis Doomfist'],       replaces:['Nemesis Force Sword'] },
            { label:'Nemesis Falchions',     pts:0, weapons:['Nemesis Falchions'],      replaces:['Nemesis Force Sword'] },
          ]},
        ]},
      { role:'Special Weapon (up to 4)', count:4, wargear:['Storm Bolter','Nemesis Force Sword'],
        options:[
          { group:'Special', choices:[
            { label:'Storm Bolter',  pts:0, default:true },
            { label:'Psilencer',     pts:0, weapons:['Psilencer'],   replaces:['Storm Bolter'] },
            { label:'Psycannon',     pts:0, weapons:['Psycannon'],   replaces:['Storm Bolter'] },
            { label:'Incinerator',   pts:0, weapons:['Incinerator (GK)'], replaces:['Storm Bolter'] },
          ]},
          { group:'Melee', choices:[
            { label:'Nemesis Force Sword',   pts:0, default:true },
            { label:'Nemesis Force Halberd', pts:0, weapons:['Nemesis Force Halberd'], replaces:['Nemesis Force Sword'] },
            { label:'Nemesis Falchions',     pts:0, weapons:['Nemesis Falchions'],     replaces:['Nemesis Force Sword'] },
            { label:'Nemesis Doomfist',      pts:0, weapons:['Nemesis Doomfist'],      replaces:['Nemesis Force Sword'] },
          ]},
        ]},
    ],
    abilities:['And They Shall Know No Fear',
               'Teleport Strike: Deep strike — arrive 9"+ from enemy',
               'Hammerhand: WC5 — add 1 to wound rolls for this unit in Fight phase'] },

  // ── ELITES ──────────────────────────────────────────────────────────
  { id:'gk_terminators', name:'Grey Knight Terminator Squad',
    stats:['5"','3+','3+','4','4','3','4','9','2+'], role:'Elites', pts:200, min:5, max:10, ppm:40,
    wargear:[],
    composition:[
      { role:'Justicar', count:1, wargear:['Storm Bolter','Nemesis Force Halberd'],
        options:[
          { group:'Force Weapon', choices:[
            { label:'Nemesis Force Halberd', pts:0, default:true, weapons:['Nemesis Force Halberd'] },
            { label:'Nemesis Force Sword',   pts:0, weapons:['Nemesis Force Sword'],   replaces:['Nemesis Force Halberd'] },
            { label:'Nemesis Force Staff',   pts:0, weapons:['Force Staff'],            replaces:['Nemesis Force Halberd'] },
            { label:'Nemesis Doomfist',      pts:0, weapons:['Nemesis Doomfist'],       replaces:['Nemesis Force Halberd'] },
            { label:'Nemesis Falchions',     pts:0, weapons:['Nemesis Falchions'],      replaces:['Nemesis Force Halberd'] },
          ]},
        ]},
      { role:'Special Weapon (up to 4)', count:4, wargear:['Storm Bolter','Nemesis Force Halberd'],
        options:[
          { group:'Special', choices:[
            { label:'Storm Bolter',  pts:0, default:true },
            { label:'Psilencer',     pts:0, weapons:['Psilencer'],        replaces:['Storm Bolter'] },
            { label:'Psycannon',     pts:0, weapons:['Psycannon'],        replaces:['Storm Bolter'] },
            { label:'Incinerator',   pts:0, weapons:['Incinerator (GK)'], replaces:['Storm Bolter'] },
          ]},
          { group:'Melee', choices:[
            { label:'Nemesis Force Halberd', pts:0, default:true },
            { label:'Nemesis Force Sword',   pts:0, weapons:['Nemesis Force Sword'],  replaces:['Nemesis Force Halberd'] },
            { label:'Nemesis Force Staff',   pts:0, weapons:['Force Staff'],           replaces:['Nemesis Force Halberd'] },
            { label:'Nemesis Doomfist',      pts:0, weapons:['Nemesis Doomfist'],      replaces:['Nemesis Force Halberd'] },
            { label:'Nemesis Falchions',     pts:0, weapons:['Nemesis Falchions'],     replaces:['Nemesis Force Halberd'] },
          ]},
        ]},
    ],
    abilities:['And They Shall Know No Fear',
               'Terminator Armour: 2+ save — 5+ invulnerable save',
               'Teleport Strike: Deep strike — arrive 9"+ from enemy',
               'Hammerhand: WC5 — add 1 to wound rolls in Fight phase',
               'Psykers: Each model is a Psyker — may cast Hammerhand in addition to army powers'] },

  { id:'gk_purifiers', name:'Purifier Squad',
    stats:['6"','3+','3+','4','4','2','4','9','3+'], role:'Elites', pts:130, min:5, max:10, ppm:26,
    wargear:[],
    composition:[
      { role:'Knight of the Flame', count:1, wargear:['Storm Bolter','Nemesis Force Halberd'],
        options:[
          { group:'Force Weapon', choices:[
            { label:'Nemesis Force Halberd', pts:0, default:true, weapons:['Nemesis Force Halberd'] },
            { label:'Nemesis Force Sword',   pts:0, weapons:['Nemesis Force Sword'],  replaces:['Nemesis Force Halberd'] },
            { label:'Nemesis Doomfist',      pts:0, weapons:['Nemesis Doomfist'],     replaces:['Nemesis Force Halberd'] },
            { label:'Nemesis Falchions',     pts:0, weapons:['Nemesis Falchions'],    replaces:['Nemesis Force Halberd'] },
          ]},
        ]},
      { role:'Special Weapon (up to 4)', count:4, wargear:['Storm Bolter','Nemesis Force Halberd'],
        options:[
          { group:'Special', choices:[
            { label:'Storm Bolter',  pts:0, default:true },
            { label:'Psilencer',     pts:0, weapons:['Psilencer'],        replaces:['Storm Bolter'] },
            { label:'Psycannon',     pts:0, weapons:['Psycannon'],        replaces:['Storm Bolter'] },
            { label:'Incinerator',   pts:0, weapons:['Incinerator (GK)'], replaces:['Storm Bolter'] },
          ]},
          { group:'Melee', choices:[
            { label:'Nemesis Force Halberd', pts:0, default:true },
            { label:'Nemesis Force Sword',   pts:0, weapons:['Nemesis Force Sword'],  replaces:['Nemesis Force Halberd'] },
            { label:'Nemesis Doomfist',      pts:0, weapons:['Nemesis Doomfist'],     replaces:['Nemesis Force Halberd'] },
            { label:'Nemesis Falchions',     pts:0, weapons:['Nemesis Falchions'],    replaces:['Nemesis Force Halberd'] },
          ]},
        ]},
    ],
    abilities:['And They Shall Know No Fear',
               'Teleport Strike: Deep strike — arrive 9"+ from enemy',
               'Cleansing Flame: WC5 — auto-hit all units within 6" for D3 mortal wounds each',
               'Hammerhand: WC5 — add 1 to wound rolls in Fight phase',
               'Purity of Soul: 5+ invulnerable save — may re-roll failed saves against Daemon abilities'] },

  { id:'gk_purgators', name:'Purgator Squad',
    stats:['6"','3+','3+','4','4','2','3','8','3+'], role:'Heavy Support', pts:115, min:5, max:10, ppm:23,
    wargear:[],
    composition:[
      { role:'Purgator Justicar', count:1, wargear:['Storm Bolter','Nemesis Force Sword'],
        options:[
          { group:'Ranged', choices:[
            { label:'Storm Bolter', pts:0, default:true },
            { label:'Psycannon',    pts:0, weapons:['Psycannon'],    replaces:['Storm Bolter'] },
            { label:'Psilencer',    pts:0, weapons:['Psilencer'],    replaces:['Storm Bolter'] },
            { label:'Incinerator',  pts:0, weapons:['Incinerator (GK)'], replaces:['Storm Bolter'] },
          ]},
        ]},
      { role:'Purgator (up to 4 heavy weapons)', count:4, wargear:['Psycannon','Nemesis Force Sword'],
        options:[
          { group:'Heavy Weapon', choices:[
            { label:'Psycannon',        pts:0, default:true, weapons:['Psycannon'] },
            { label:'Psilencer',        pts:0, weapons:['Psilencer'],        replaces:['Psycannon'] },
            { label:'Incinerator',      pts:0, weapons:['Incinerator (GK)'], replaces:['Psycannon'] },
          ]},
        ]},
    ],
    abilities:['And They Shall Know No Fear',
               'Teleport Strike: Deep strike — arrive 9"+ from enemy',
               'Mental Focus: Do not suffer -1 to hit for moving and firing Heavy weapons',
               'Astral Aim: WC5 — unit may fire through walls and obstacles until end of turn'] },

  { id:'gk_paladins', name:'Paladins',
    stats:['5"','3+','3+','4','4','3','4','9','2+'], role:'Elites', pts:210, min:3, max:10, ppm:70,
    wargear:[],
    composition:[
      { role:'Paragon', count:1, wargear:['Storm Bolters','Nemesis Force Halberd'],
        options:[
          { group:'Force Weapon', choices:[
            { label:'Nemesis Force Halberd', pts:0, default:true, weapons:['Nemesis Force Halberd'] },
            { label:'Nemesis Force Sword',   pts:0, weapons:['Nemesis Force Sword'],  replaces:['Nemesis Force Halberd'] },
            { label:'Nemesis Doomfist',      pts:0, weapons:['Nemesis Doomfist'],     replaces:['Nemesis Force Halberd'] },
            { label:'Nemesis Falchions',     pts:0, weapons:['Nemesis Falchions'],    replaces:['Nemesis Force Halberd'] },
          ]},
        ]},
      { role:'Paladin', count:2, wargear:['Storm Bolter','Nemesis Force Halberd'],
        options:[
          { group:'Special', choices:[
            { label:'Storm Bolter', pts:0, default:true },
            { label:'Psycannon',    pts:0, weapons:['Psycannon'],    replaces:['Storm Bolter'] },
            { label:'Psilencer',    pts:0, weapons:['Psilencer'],    replaces:['Storm Bolter'] },
            { label:'Incinerator',  pts:0, weapons:['Incinerator (GK)'], replaces:['Storm Bolter'] },
          ]},
          { group:'Melee', choices:[
            { label:'Nemesis Force Halberd', pts:0, default:true },
            { label:'Nemesis Force Sword',   pts:0, weapons:['Nemesis Force Sword'],  replaces:['Nemesis Force Halberd'] },
            { label:'Nemesis Doomfist',      pts:0, weapons:['Nemesis Doomfist'],     replaces:['Nemesis Force Halberd'] },
            { label:'Nemesis Falchions',     pts:0, weapons:['Nemesis Falchions'],    replaces:['Nemesis Force Halberd'] },
          ]},
        ]},
    ],
    abilities:['And They Shall Know No Fear',
               'Teleport Strike','Hammerhand','Terminator Armour: 5+ invulnerable save',
               'Ancient Warriors: Re-roll hit rolls of 1'] },

  { id:'gk_servitors', name:'Servitors',
    stats:['5"','5+','5+','3','3','1','1','6','4+'], role:'Elites', pts:35, min:4, max:4, ppm:0,
    wargear:['Multi-melta','Servo-arm'],
    options:[
      { group:'Heavy Weapons (2 models)', choices:[
        { label:'Multi-melta',      pts:0, default:true, weapons:['Multi-melta'] },
        { label:'Heavy Bolter',     pts:0, weapons:['Heavy Bolter'],     replaces:['Multi-melta'] },
        { label:'Plasma Cannon',    pts:0, weapons:['Plasma Cannon'],    replaces:['Multi-melta'] },
      ]},
    ],
    abilities:['Mindlock: If no friendly Techmarine within 6" roll D6 before shooting — on 1-2 this unit cannot shoot or charge this turn',
               'Servo-arm: Each Servo-arm grants 1 additional attack at S8 AP-2 D3'] },

  { id:'gk_dreadnought', name:'Dreadnought',
    stats:['6"','3+','3+','6','7','8','4','9','3+'], role:'Elites', pts:120, min:1, max:1, ppm:0,
    wargear:['Dreadnought C.C. Weapon','Storm Bolter','Twin Lascannon'],
    options:[
      { group:'Left Arm', choices:[
        { label:'Twin Lascannon',   pts:0, default:true, weapons:['Twin Lascannon'],   replaces:['Twin Lascannon'] },
        { label:'Multi-melta',      pts:0,               weapons:['Multi-melta'],       replaces:['Twin Lascannon'] },
        { label:'Twin Autocannon',  pts:0,               weapons:['Twin Autocannon'],   replaces:['Twin Lascannon'] },
        { label:'Assault Cannon',   pts:0,               weapons:['Assault Cannon'],    replaces:['Twin Lascannon'] },
        { label:'Psycannon',        pts:0,               weapons:['Psycannon'],         replaces:['Twin Lascannon'] },
      ]},
      { group:'Fist Option', choices:[
        { label:'Storm Bolter',   pts:0, default:true, weapons:['Storm Bolter'], replaces:['Storm Bolter'] },
        { label:'Heavy Flamer',   pts:0,               weapons:['Heavy Flamer'], replaces:['Storm Bolter'] },
        { label:'Incinerator',    pts:0,               weapons:['Incinerator (GK)'], replaces:['Storm Bolter'] },
      ]},
    ],
    abilities:['And They Shall Know No Fear','Smoke Launchers',
               'Psyker: Mastery Level 1 — may cast Hammerhand',
               'Explodes: On 6 when destroyed — D6 mortal wounds within 3"'] },

  // ── FAST ATTACK ─────────────────────────────────────────────────────
  { id:'gk_interceptors', name:'Interceptors',
    stats:['12"','3+','3+','4','4','2','3','8','3+'], role:'Fast Attack', pts:150, min:5, max:10, ppm:30,
    wargear:[],
    composition:[
      { role:'Interceptor Justicar', count:1, wargear:['Storm Bolter','Nemesis Force Sword'],
        options:[
          { group:'Force Weapon', choices:[
            { label:'Nemesis Force Sword',   pts:0, default:true, weapons:['Nemesis Force Sword'] },
            { label:'Nemesis Force Halberd', pts:0, weapons:['Nemesis Force Halberd'], replaces:['Nemesis Force Sword'] },
            { label:'Nemesis Doomfist',      pts:0, weapons:['Nemesis Doomfist'],      replaces:['Nemesis Force Sword'] },
            { label:'Nemesis Falchions',     pts:0, weapons:['Nemesis Falchions'],     replaces:['Nemesis Force Sword'] },
          ]},
        ]},
      { role:'Interceptor', count:4, wargear:['Storm Bolter','Nemesis Force Sword'],
        options:[
          { group:'Special', choices:[
            { label:'Storm Bolter', pts:0, default:true },
            { label:'Psycannon',    pts:0, weapons:['Psycannon'],        replaces:['Storm Bolter'] },
            { label:'Psilencer',    pts:0, weapons:['Psilencer'],        replaces:['Storm Bolter'] },
            { label:'Incinerator',  pts:0, weapons:['Incinerator (GK)'], replaces:['Storm Bolter'] },
          ]},
        ]},
    ],
    abilities:['And They Shall Know No Fear',
               'Teleport Strike: Deep strike 9"+ from enemy',
               'Incendiary Clouds: Once per game at end of Movement phase all units within 3" suffer D3 mortal wounds',
               'Hammerhand'] },

  // ── HEAVY SUPPORT ───────────────────────────────────────────────────
  { id:'gk_nemesis_dreadknight', name:'Nemesis Dreadknight',
    stats:['10"','3+','3+','6','7','13','4','8','2+'], role:'Heavy Support', pts:200, min:1, max:1, ppm:0,
    wargear:['Nemesis Doomfists','Gatling Psilencer'],
    options:[
      { group:'Ranged', choices:[
        { label:'Gatling Psilencer',  pts:0, default:true, weapons:['Gatling Psilencer'] },
        { label:'Heavy Psycannon',    pts:0, weapons:['Heavy Psycannon'],    replaces:['Gatling Psilencer'] },
        { label:'Heavy Incinerator',  pts:0, weapons:['Heavy Incinerator'],  replaces:['Gatling Psilencer'] },
      ]},
      { group:'Fist / Sword', choices:[
        { label:'Nemesis Doomfists',  pts:0, default:true, weapons:['Nemesis Doomfists'] },
        { label:'Nemesis Greatsword', pts:0, weapons:['Nemesis Greatsword'], replaces:['Nemesis Doomfists'] },
      ]},
    ],
    abilities:['And They Shall Know No Fear',
               '4+ invulnerable save',
               'Personal Teleporter: May deep strike — arrive 9"+ from enemy',
               'Explodes: On 6 when destroyed — D6 mortal wounds within 3"'] },

  { id:'gk_land_raider', name:'Land Raider',
    stats:['10"','5+','3+','8','8','16','6','9','2+'], role:'Heavy Support', pts:285, min:1, max:1, ppm:0,
    wargear:['Twin Lascannons','Multi-melta','Storm Bolter'],
    options:[
      { group:'Hull Weapon', choices:[
        { label:'Storm Bolter',   pts:0, default:true, weapons:['Storm Bolter'] },
        { label:'Multi-melta',    pts:0, weapons:['Multi-melta'],    replaces:['Storm Bolter'] },
      ]},
    ],
    abilities:['And They Shall Know No Fear','Power of the Machine Spirit: May fire one weapon even if moved',
               'Smoke Launchers','Transport: Carries 10 Infantry (Terminators count as 2)',
               'Explodes: On 6 — D6 mortal wounds within 6"',
               'Psyker: Mastery Level 1 — may cast one power per turn'] },

  { id:'gk_land_raider_crusader', name:'Land Raider Crusader',
    stats:['10"','5+','3+','8','8','16','6','9','2+'], role:'Heavy Support', pts:300, min:1, max:1, ppm:0,
    wargear:['Twin Assault Cannon','Hurricane Bolters','Multi-melta'],
    abilities:['And They Shall Know No Fear','Power of the Machine Spirit',
               'Smoke Launchers','Transport: Carries 16 Infantry (Terminators count as 2)',
               'Frag Assault Launchers: Units charging from this vehicle are not slowed by Overwatch',
               'Explodes: On 6 — D6 mortal wounds within 6"'] },

  { id:'gk_land_raider_redeemer', name:'Land Raider Redeemer',
    stats:['10"','5+','3+','8','8','16','6','9','2+'], role:'Heavy Support', pts:295, min:1, max:1, ppm:0,
    wargear:['Flamestorm Cannons','Twin Assault Cannon','Multi-melta'],
    abilities:['And They Shall Know No Fear','Power of the Machine Spirit',
               'Smoke Launchers','Transport: Carries 12 Infantry (Terminators count as 2)',
               'Frag Assault Launchers: Units charging from this vehicle are not slowed by Overwatch',
               'Explodes: On 6 — D6 mortal wounds within 6"'] },

  // ── DEDICATED TRANSPORT ─────────────────────────────────────────────
  { id:'gk_rhino', name:'Rhino',
    stats:['12"','5+','3+','6','6','10','3','9','3+'], role:'Dedicated Transport', pts:72, min:1, max:1, ppm:0,
    wargear:['Storm Bolter'],
    abilities:['And They Shall Know No Fear','Smoke Launchers','Transport: Carries 10 Infantry',
               'Repair: At end of Movement phase roll D6 — on 6 restore 1 lost wound'] },

  { id:'gk_razorback', name:'Razorback',
    stats:['12"','5+','3+','6','6','10','3','9','3+'], role:'Dedicated Transport', pts:110, min:1, max:1, ppm:0,
    wargear:['Twin Heavy Bolter'],
    options:[
      { group:'Turret', choices:[
        { label:'Twin Heavy Bolter',      pts:0, default:true, weapons:['Twin Heavy Bolter'] },
        { label:'Twin Lascannon',         pts:0, weapons:['Twin Lascannon'],     replaces:['Twin Heavy Bolter'] },
        { label:'Twin Assault Cannon',    pts:0, weapons:['Twin Assault Cannon'], replaces:['Twin Heavy Bolter'] },
        { label:'Lascannon & Twin Plasma',pts:0, weapons:['Lascannon'],          replaces:['Twin Heavy Bolter'] },
        { label:'Twin Psycannon',         pts:0, weapons:['Twin Psycannon'],     replaces:['Twin Heavy Bolter'] },
      ]},
    ],
    abilities:['And They Shall Know No Fear','Smoke Launchers','Transport: Carries 6 Infantry'] },

  // ── FLYER ────────────────────────────────────────────────────────────
  { id:'gk_stormraven', name:'Stormraven Gunship',
    stats:['20-50"','5+','3+','8','7','14','6','9','3+'], role:'Flyer', pts:233, min:1, max:1, ppm:0,
    wargear:['Twin Multi-Melta','Twin Lascannon','Hurricane Bolters'],
    options:[
      { group:'Nose Weapon', choices:[
        { label:'Twin Multi-Melta',   pts:0, default:true, weapons:['Twin Multi-Melta'] },
        { label:'Twin Heavy Bolter',  pts:0, weapons:['Twin Heavy Bolter'],  replaces:['Twin Multi-Melta'] },
        { label:'Twin Plasma Gun',    pts:0, weapons:['Twin Plasma Gun'],    replaces:['Twin Multi-Melta'] },
        { label:'Twin Lascannon',     pts:0, weapons:['Twin Lascannon'],     replaces:['Twin Multi-Melta'] },
        { label:'Twin Psycannon',     pts:0, weapons:['Twin Psycannon'],     replaces:['Twin Multi-Melta'] },
      ]},
      { group:'Wing Weapon', choices:[
        { label:'Twin Lascannon',     pts:0, default:true, weapons:['Twin Lascannon'] },
        { label:'Stormstrike Missile Launcher', pts:0, weapons:['Stormstrike Missile Launcher'], replaces:['Twin Lascannon'] },
      ]},
    ],
    abilities:['And They Shall Know No Fear','Supersonic: Minimum move 20"',
               'Hard to Hit: -1 to hit rolls against this model',
               'Transport: Carries 12 Infantry or 1 Dreadnought',
               'Infernum Halo Launcher: Once per game — subtract 1 from all hit rolls targeting this model until next turn',
               'Explodes: On 6 — D6 mortal wounds within 6"'] },

  { id:'gk_stormtalon', name:'Stormtalon Gunship',
    stats:['20-60"','5+','3+','6','6','10','3','8','3+'], role:'Flyer', pts:165, min:1, max:1, ppm:0,
    wargear:['Twin Assault Cannon','Skyhammer Missile Launcher'],
    options:[
      { group:'Nose Weapon', choices:[
        { label:'Twin Assault Cannon',   pts:0, default:true, weapons:['Twin Assault Cannon'] },
        { label:'Twin Heavy Bolter',     pts:0, weapons:['Twin Heavy Bolter'],     replaces:['Twin Assault Cannon'] },
        { label:'Twin Lascannon',        pts:0, weapons:['Twin Lascannon'],        replaces:['Twin Assault Cannon'] },
        { label:'Twin Psycannon',        pts:0, weapons:['Twin Psycannon'],        replaces:['Twin Assault Cannon'] },
      ]},
      { group:'Stub Weapon', choices:[
        { label:'Skyhammer Missile Launcher', pts:0, default:true, weapons:['Skyhammer Missile Launcher'] },
        { label:'Typhoon Missile Launcher',   pts:0, weapons:['Typhoon Missile Launcher'], replaces:['Skyhammer Missile Launcher'] },
        { label:'Lascannon',                  pts:0, weapons:['Lascannon'],                replaces:['Skyhammer Missile Launcher'] },
      ]},
    ],
    abilities:['Supersonic: Minimum move 20"',
               'Hard to Hit: -1 to hit rolls against this model',
               'Escort Craft: Friendly flyers within 6" re-roll hit rolls of 1',
               'Hoverstrike: May choose to hover — moves as a vehicle but loses Supersonic and Hard to Hit'] },

  { id:'gk_stormhawk', name:'Stormhawk Interceptor',
    stats:['20-60"','5+','3+','6','6','10','3','8','3+'], role:'Flyer', pts:175, min:1, max:1, ppm:0, isNew:true,
    wargear:['Twin Assault Cannon','Icarus Stormcannon','Las-talon'],
    options:[
      { group:'Nose Weapon', choices:[
        { label:'Twin Assault Cannon',  pts:0, default:true, weapons:['Twin Assault Cannon'] },
        { label:'Twin Heavy Bolter',    pts:0, weapons:['Twin Heavy Bolter'],    replaces:['Twin Assault Cannon'] },
        { label:'Twin Lascannon',       pts:0, weapons:['Twin Lascannon'],       replaces:['Twin Assault Cannon'] },
      ]},
      { group:'Sub-wing', choices:[
        { label:'Icarus Stormcannon',   pts:0, default:true, weapons:['Icarus Stormcannon'] },
        { label:'Skyhammer Missile Launcher', pts:0, weapons:['Skyhammer Missile Launcher'], replaces:['Icarus Stormcannon'] },
      ]},
    ],
    abilities:['Supersonic: Minimum move 20"',
               'Hard to Hit: -1 to hit rolls against this model',
               'Interceptor: +1 to hit rolls against Flyers',
               'Repulsor Grid: Friendly units within 3" gain a 4+ save against mortal wounds from Psychic powers'] },
];
