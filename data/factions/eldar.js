var FACTION_ELDAR = [
  // ── HQ ──────────────────────────────────────────────────────────────
  { id:'el_autarch', name:'Autarch',
    stats:['7"','2+','2+','3','3','5','4','9','3+'], role:'HQ', pts:71, min:1, max:1, ppm:0,
    wargear:['Mandiblasters'],
    options:[
      { group:'Melee', pick:1, choices:[
        { label:'Power Sword', pts:0, default:true },
        { label:'Scorpion Chainsword', pts:0 },
        { label:'Banshee Blade', pts:5 },
      ]},
      { group:'Ranged', pick:1, choices:[
        { label:'Shuriken Pistol', pts:0, default:true },
        { label:'Fusion Gun', pts:8 },
        { label:'Reaper Launcher', pts:10 },
        { label:'Death Spinner', pts:5 },
      ]},
    ],
    abilities:['Path of Command: Once per turn add 1 to one hit roll for a friendly Craftworld unit within 6"',
               'Farsight: Re-roll hit rolls of 1 for friendly Craftworld units within 6"',
               '4+ invulnerable save'] },

  { id:'el_autarch_bike', name:'Autarch on Jetbike',
    stats:['14"','2+','2+','3','3','5','4','9','3+'], role:'HQ', pts:86, min:1, max:1, ppm:0,
    wargear:['Jetbike','Mandiblasters','Laser Lance'],
    options:[
      { group:'Ranged', choices:[
        { label:'Laser Lance',     pts:0,  default:true, weapons:['Laser Lance'] },
        { label:'Fusion Gun',      pts:9,  weapons:['Fusion Gun'],      replaces:['Laser Lance'] },
        { label:'Reaper Launcher', pts:19, weapons:['Reaper Launcher'], replaces:['Laser Lance'] },
        { label:'Scatter Laser',   pts:12, weapons:['Scatter Laser'],   replaces:['Laser Lance'] },
      ]},
      { group:'Melee', choices:[
        { label:'None',            pts:0, default:true },
        { label:'Power Sword',     pts:4, weapons:['Power Sword'] },
        { label:'Banshee Blade',   pts:6, weapons:['Banshee Blade'] },
      ]},
    ],
    abilities:['Path of Command','Farsight','4+ invulnerable save',
               'Swooping Dive: May Advance and still charge',
               'Laser Lance: On turn of a charge wound rolls are 2+ regardless of Toughness'] },

  { id:'el_farseer', name:'Farseer',
    stats:['7"','3+','2+','3','3','5','1','9','6+'], role:'HQ', pts:110, min:1, max:1, ppm:0,
    wargear:['Witchblade','Shuriken Pistol','Spirit Stones'],
    options:[
      { group:'Weapon', pick:1, choices:[
        { label:'Witchblade', pts:0, default:true },
        { label:'Singing Spear', pts:3 },
      ]},
    ],
    abilities:['Psyker: Mastery Level 2 — Smite + 2 Runes of Battle powers',
               'Runes of Witnessing: Re-roll Psychic tests of 1',
               'Runes of Warding: Enemy Psykers within 12" subtract 1 from Psychic tests',
               'Ancient Doom: Re-roll hit rolls vs Slaanesh — must charge Slaanesh if possible'] },

  { id:'el_farseer_bike', name:'Farseer on Jetbike',
    stats:['14"','3+','2+','3','3','5','1','9','4+'], role:'HQ', pts:135, min:1, max:1, ppm:0,
    wargear:['Jetbike','Witchblade','Shuriken Pistol','Spirit Stones'],
    options:[
      { group:'Melee', choices:[
        { label:'Witchblade',      pts:0,  default:true },
        { label:'Singing Spear',   pts:3,  weapons:['Singing Spear'],   replaces:['Witchblade'] },
      ]},
    ],
    abilities:['Psyker: Mastery Level 2','Runes of Witnessing','Runes of Warding',
               'Ancient Doom','Jetbike: 14" Move — ignore terrain'] },

  { id:'el_spiritseer', name:'Spiritseer',
    stats:['7"','3+','3+','3','3','4','2','8','6+'], role:'HQ', pts:65, min:1, max:1, ppm:0,
    wargear:['Witch Staff','Shuriken Pistol'],
    abilities:['Psyker: Mastery Level 1',
               'Spirit Mark: Friendly Wraithguard and Wraithblades within 6" re-roll hit rolls of 1',
               'Wraithsight Fix: Friendly Wraith units within 6" never fail Wraithsight checks'] },

  // ── NAMED CHARACTERS ────────────────────────────────────────────────
  { id:'el_eldrad', name:'Eldrad Ulthran',
    stats:['7"','3+','2+','3','3','5','2','9','6+'], role:'HQ', pts:130, min:1, max:1, ppm:0, unique:true,
    wargear:['Staff of Ulthamar','Shuriken Pistol'],
    abilities:['Psyker: Mastery Level 4 — knows Smite + 4 powers from Runes of Battle and Runes of Fate',
               "Fate's Messenger: After manifesting a power — restore 1 wound OR revert one failed die roll",
               'Guide + Doom + Fortune + Will of Asuryan included in known powers',
               'Ancient Doom'] },

  { id:'el_asurmen', name:'Asurmen — Hand of Asuryan',
    stats:['7"','2+','2+','3','3','6','5','9','2+'], role:'HQ', pts:180, min:1, max:1, ppm:0, unique:true,
    wargear:['Sword of Asur (x2)','Shuriken Pistol'],
    abilities:['Phoenix Lord: 4+ invulnerable save',
               'Lord of All Dire Avenger Shrines: Friendly Dire Avengers within 6" re-roll all failed hit rolls',
               'Hand of Asuryan: Enemies that charged this unit must re-roll successful hit rolls in subsequent Fight phase'] },

  { id:'el_jain_zar', name:'Jain Zar — Storm of Silence',
    stats:['8"','2+','2+','3','3','5','6','9','4+'], role:'HQ', pts:140, min:1, max:1, ppm:0, unique:true,
    wargear:['Zhai Morenn','Silent Death','Banshee Mask'],
    abilities:['Phoenix Lord: 4+ invulnerable save',
               'Lord of All Howling Banshee Shrines: Friendly Howling Banshees within 6" always fight first',
               'Banshee Mask: Enemy units charged by Jain Zar cannot fire Overwatch',
               'Swift Strikes: Always fights first regardless of any other rule'] },

  { id:'el_karandras', name:'Karandras — The Shadow Hunter',
    stats:['7"','2+','2+','4','3','5','5','9','3+'], role:'HQ', pts:165, min:1, max:1, ppm:0, unique:true,
    wargear:["Scorpion's Claw",'Mandiblasters','Scorpion Chainsword'],
    abilities:['Phoenix Lord: 4+ invulnerable save',
               'Lord of All Striking Scorpion Shrines: Friendly Striking Scorpions within 6" re-roll hit rolls of 1 and count as in cover',
               'Infiltrate: Deploy anywhere more than 9" from enemy',
               'Crack Shot: Re-roll failed wound rolls'] },

  { id:'el_fuegan', name:'Fuegan, The Burning Lance',
    stats:['7"','2+','2+','4','4','6','5','9','3+'], role:'HQ', pts:165, min:1, max:1, ppm:0, unique:true,
    wargear:['The Fire Axe','Firepike'],
    abilities:['Phoenix Lord: 4+ invulnerable save',
               'The Burning: Each wound lost adds 1 to Attacks for rest of battle (max +5)',
               'Tank Hunter: Re-roll failed wound rolls against Vehicles',
               'Lord of the Dragon Shrines: Fire Dragons within 6" re-roll failed wound rolls'] },

  { id:'el_baharroth', name:'Baharroth, Cry of the Wind',
    stats:['14"','2+','2+','3','3','5','5','9','4+'], role:'HQ', pts:120, min:1, max:1, ppm:0, unique:true,
    wargear:['Swiftstrike','Lasblaster','Grenade Pack'],
    abilities:['Phoenix Lord: 4+ invulnerable save',
               'Skyleap: At end of any phase remove and redeploy at start of next Movement phase 9"+ from enemy',
               "Cry of the Wind: Friendly Swooping Hawks within 6\" re-roll failed charge rolls",
               'Lord of the Hawk Shrines: Swooping Hawks within 6" re-roll hit rolls of 1'] },

  { id:'el_yriel', name:'Prince Yriel',
    stats:['7"','2+','2+','4','3','5','6','9','3+'], role:'HQ', pts:100, min:1, max:1, ppm:0, unique:true,
    wargear:['Spear of Twilight','Eye of Wrath'],
    abilities:['Fleet of Foot: May Advance and still charge',
               'Spear of Twilight: Wound rolls of 6 deal D3 mortal wounds in addition',
               'Eye of Wrath: Once per game — deal D3 mortal wounds to all enemies within 3"',
               'Doomed: At end of each battle round roll D6 — on 1 Yriel loses 1 wound'] },

  { id:'el_irillyth', name:'Irillyth, Shade of Twilight',
    stats:['12"','2+','2+','3','3','6','4','9','4+'], role:'HQ', pts:140, min:1, max:1, ppm:0, unique:true,
    wargear:['Spear of Starlight','Twilight Wraith'],
    abilities:['Phoenix Lord: 4+ invulnerable save',
               'Lord of the Shadow Spectre Shrines: Shadow Spectres within 6" re-roll hit and wound rolls of 1',
               'Veil of Twilight: -1 to hit rolls targeting Irillyth — Shadow Spectres within 6" also benefit',
               'Wraith Form: May Advance and still fire ranged weapons without penalty'] },

  { id:'el_lhykhis', name:'Lhykhis, Warp Spider Exarch',
    stats:['7"','2+','2+','3','3','5','5','9','3+'], role:'Elites', pts:110, min:1, max:1, ppm:0, unique:true, isNew:true,
    wargear:['Twin Death Spinner','Powerblades'],
    abilities:['4+ invulnerable save',
               'Warp Jump: Remove and replace within 12" — on 1 suffer 1 mortal wound',
               'Spinneret Stance: If did not move — twin death spinner becomes Assault 6 AP-3',
               'Lord of the Spider Shrines: Friendly Warp Spiders within 6" re-roll failed hit rolls'] },

  { id:'el_autarch_way', name:'Autarch Wayleaper',
    stats:['12"','2+','2+','3','3','5','4','9','3+'], role:'HQ', pts:100, min:1, max:1, ppm:0, isNew:true,
    wargear:['Blade of Anaris','Reaper Launcher'],
    abilities:['Path of Command','4+ invulnerable save',
               'Swooping Dive: May Advance and still charge',
               "Strands of Fate: Once per battle re-roll any single dice"] },

  // ── TROOPS ──────────────────────────────────────────────────────────
  { id:'el_dire_avengers', name:'Dire Avengers',
    stats:['7"','3+','3+','3','3','1','1','8','4+'], role:'Troops', pts:56, min:5, max:10, ppm:11,
    wargear:[],
    composition:[
      { role:'Dire Avenger Exarch', count:1, wargear:['Avenger Shuriken Catapult','Diresword'],
        options:[
          { group:'Weapon', choices:[
            { label:'Avenger Shuriken Catapult', pts:0, default:true },
            { label:'Twin Avenger Catapult',     pts:0, weapons:['Twin Shuriken Catapult'], replaces:['Avenger Shuriken Catapult'] },
            { label:'Shuriken Cannon',           pts:0, weapons:['Shuriken Cannon'],        replaces:['Avenger Shuriken Catapult'] },
            { label:'Diresword & Shuriken Pistol',pts:0, weapons:['Diresword','Shuriken Pistols'], replaces:['Avenger Shuriken Catapult'] },
          ]},
        ]},
      { role:'Dire Avenger', count:4, wargear:['Avenger Shuriken Catapult','Diresword'] },
    ],
    abilities:['Battle Focus: Advance and still fire Assault weapons without penalty',
               'Defend: Exarch power — subtract 1 from hit rolls targeting this unit in Shooting phase'] },

  { id:'el_guardians', name:'Guardian Defenders',
    stats:['7"','4+','3+','3','3','1','1','7','5+'], role:'Troops', pts:55, min:10, max:20, ppm:5,
    wargear:[],
    composition:[
      { role:'Warlock (1 per 10)', count:1, wargear:['Witchblades','Shuriken Pistols'],
        options:[
          { group:'Weapon', choices:[
            { label:'Witchblade', pts:0, default:true },
            { label:'Singing Spear', pts:0, weapons:['Singing Spear'], replaces:['Witchblades'] },
          ]},
        ]},
      { role:'Heavy Weapon Platform', count:1, wargear:['Bright Lance','Shuriken Catapult'],
        options:[
          { group:'Platform Weapon', choices:[
            { label:'Bright Lance',   pts:0, default:true, weapons:['Bright Lance'] },
            { label:'Scatter Laser',  pts:0, weapons:['Scatter Laser'],  replaces:['Bright Lance'] },
            { label:'Shuriken Cannon',pts:0, weapons:['Shuriken Cannon'],replaces:['Bright Lance'] },
            { label:'Starcannon',     pts:0, weapons:['Starcannon'],     replaces:['Bright Lance'] },
            { label:'Eldritch Lance', pts:0, weapons:['Eldritch Lance'], replaces:['Bright Lance'] },
          ]},
        ]},
      { role:'Guardian', count:8, wargear:['Shuriken Catapult'] },
    ],
    abilities:['Battle Focus',
               'Heavy Weapon Platform: Each unit of 10 includes one platform with a heavy weapon'] },

  { id:'el_storm_guardians', name:'Storm Guardians',
    stats:['7"','3+','4+','3','3','1','2','7','5+'], role:'Troops', pts:50, min:8, max:16, ppm:6,
    wargear:[],
    composition:[
      { role:'Warlock', count:1, wargear:['Witchblade','Shuriken Pistol'] },
      { role:'Special Weapon (up to 2)', count:2, wargear:['Shuriken Pistol','Chainsword'],
        options:[
          { group:'Special', choices:[
            { label:'Shuriken Pistol & Chainsword', pts:0, default:true },
            { label:'Flamer',        pts:3, weapons:['Flamer'],        replaces:['Shuriken Pistol'] },
            { label:'Fusion Gun',    pts:5, weapons:['Fusion Gun'],    replaces:['Shuriken Pistol'] },
          ]},
        ]},
      { role:'Storm Guardian', count:5, wargear:['Shuriken Pistol','Chainsword'] },
    ],
    abilities:['Battle Focus',
               'Plasma Grenades: -1 to hit rolls for enemy units charged by this unit'] },

  { id:'el_rangers', name:'Rangers',
    stats:['7"','3+','3+','3','3','1','1','7','5+'], role:'Troops', pts:60, min:5, max:10, ppm:12,
    wargear:[],
    composition:[
      { role:'Ranger', count:5, wargear:['Ranger Long Rifle','Shuriken Pistol'] },
    ],
    abilities:['Battle Focus',
               'Cameleoline: Always count as being in cover',
               'Scouts: Move up to 6" before first battle round',
               'Ranger Long Rifle: Sniper — wound rolls of 6 deal 1 mortal wound in addition'] },

  { id:'el_wraithguard', name:'Wraithguard',
    stats:['5"','3+','3+','5','6','3','1','10','3+'], role:'Troops', pts:165, min:5, max:10, ppm:33,
    wargear:[],
    composition:[
      { role:'Wraithguard', count:5, wargear:['Wraithcannon'],
        options:[
          { group:'Weapon', choices:[
            { label:'Wraithcannon', pts:0, default:true, weapons:['Wraithcannon'] },
            { label:'D-Scythe',     pts:5, weapons:['D-Scythe'], replaces:['Wraithcannon'] },
          ]},
        ]},
    ],
    abilities:['Wraithsight: If not within 6" of Spiritseer or Farseer must roll D6 — on 1 cannot move or shoot',
               'Stoic: Auto-pass Morale tests'] },

  { id:'el_wraithblades', name:'Wraithblades',
    stats:['5"','3+','3+','6','6','3','3','10','3+'], role:'Troops', pts:155, min:5, max:10, ppm:31,
    wargear:[],
    composition:[
      { role:'Wraithblade', count:5, wargear:['Ghostaxe','Forceshield'],
        options:[
          { group:'Weapon', choices:[
            { label:'Ghostaxe & Forceshield', pts:0, default:true, weapons:['Ghostaxe','Forceshield'] },
            { label:'Paired Wraithswords',    pts:0, weapons:['Wraithsword','Wraithsword'], replaces:['Ghostaxe','Forceshield'] },
          ]},
        ]},
    ],
    abilities:['Wraithsight','Stoic',
               'Forceshield: 4+ invulnerable save (Ghostaxe variant only)'] },

  // ── ELITES ──────────────────────────────────────────────────────────
  { id:'el_striking_scorpions', name:'Striking Scorpions',
    stats:['7"','3+','3+','4','3','1','2','8','3+'], role:'Elites', pts:90, min:5, max:10, ppm:18,
    wargear:[],
    composition:[
      { role:'Exarch', count:1, wargear:['Scorpion Chainsword','Biting Blade','Mandiblasters'],
        options:[
          { group:'Weapon', choices:[
            { label:'Biting Blade',       pts:0, default:true, weapons:['Biting Blade'] },
            { label:'Scorpion Claw',      pts:0, weapons:['Scorpion Claw'],   replaces:['Biting Blade'] },
            { label:'Twin Chainswords',   pts:0, replaces:['Biting Blade'] },
          ]},
        ]},
      { role:'Striking Scorpion', count:4, wargear:['Scorpion Chainsword','Shuriken Pistols','Mandiblasters'] },
    ],
    abilities:['Battle Focus',
               'Mandiblasters: At start of Fight phase deal 1 mortal wound to one enemy in base contact',
               'Infiltrate: Deploy anywhere more than 9" from enemy',
               'Sustained Assault: Exarch power — re-roll failed hit rolls'] },

  { id:'el_howling_banshees', name:'Howling Banshees',
    stats:['8"','2+','3+','3','3','1','4','8','4+'], role:'Elites', pts:80, min:5, max:10, ppm:16,
    wargear:[],
    composition:[
      { role:'Exarch', count:1, wargear:['Power Sword','Shuriken Pistol','Banshee Mask'],
        options:[
          { group:'Weapon', choices:[
            { label:'Power Sword & Shuriken Pistol', pts:0, default:true },
            { label:'Mirrorswords',   pts:0, weapons:['Mirrorswords'],   replaces:['Power Sword'] },
            { label:'Triskele',       pts:0, weapons:['Triskele'],       replaces:['Power Sword'] },
            { label:'Executioner',    pts:0, weapons:['Executioner'],    replaces:['Power Sword'] },
          ]},
        ]},
      { role:'Howling Banshee', count:4, wargear:['Power Sword','Shuriken Pistol','Banshee Mask'] },
    ],
    abilities:['Battle Focus',
               'Banshee Mask: Enemy units charged by this unit cannot fire Overwatch',
               'Swift Strikes: Always fights first in Fight phase',
               'Acrobatic: 6+ invulnerable save — becomes 5+ with Exarch'] },

  { id:'el_fire_dragons', name:'Fire Dragons',
    stats:['7"','3+','3+','3','3','1','1','8','4+'], role:'Elites', pts:92, min:5, max:10, ppm:18,
    wargear:[],
    composition:[
      { role:'Exarch', count:1, wargear:['Fusion Gun','Melta Bomb'],
        options:[
          { group:'Weapon', choices:[
            { label:'Fusion Gun',      pts:0, default:true, weapons:['Fusion Gun'] },
            { label:'Dragon Fusion Gun',pts:0, weapons:['Dragon Fusion Gun'], replaces:['Fusion Gun'] },
            { label:'Fire Pike',        pts:0, weapons:['Fire Pike'],         replaces:['Fusion Gun'] },
          ]},
        ]},
      { role:'Fire Dragon', count:4, wargear:['Fusion Gun','Melta Bomb'] },
    ],
    abilities:['Battle Focus',
               'Tank Hunters: Re-roll failed wound rolls against Vehicles',
               "Dragon's Breath: Exarch power — fire fusion gun twice per phase"] },

  { id:'el_warlock', name:'Warlock',
    stats:['7"','3+','3+','3','3','2','1','8','6+'], role:'Elites', pts:45, min:1, max:1, ppm:0,
    wargear:['Witchblade','Shuriken Pistol'],
    abilities:['Psyker: Mastery Level 1 — Smite + 1 Runes of Battle power',
               'Conclave: May form a Warlock Conclave operating as a multi-model Psyker unit'] },

  { id:'el_warlock_bike', name:'Warlock on Jetbike',
    stats:['14"','3+','3+','3','3','2','1','8','4+'], role:'Elites', pts:65, min:1, max:1, ppm:0,
    wargear:['Jetbike','Witchblade','Shuriken Pistol'],
    abilities:['Psyker: Mastery Level 1',
               'Jetbike: 14" Move','Conclave: May form a Seer Council on Jetbikes'] },

  { id:'el_seer_council_bike', name:'Seer Council on Jetbikes',
    stats:['14"','3+','3+','3','3','2','1','8','4+'], role:'Elites', pts:195, min:3, max:10, ppm:65,
    wargear:[],
    composition:[
      { role:'Warlock Conclave', count:3, wargear:['Witchblade','Shuriken Pistol'],
        options:[
          { group:'Weapon', choices:[
            { label:'Witchblade',    pts:0, default:true, weapons:['Witchblade'] },
            { label:'Singing Spear', pts:0, weapons:['Singing Spear'], replaces:['Witchblade'] },
          ]},
        ]},
    ],
    abilities:['Psyker: Each model is Mastery Level 1 — knows Smite + 1 Runes of Battle power',
               'Seer Council: For each Warlock add 1 to Deny the Witch rolls',
               'Jetbike: 14" Move'] },

  { id:'el_shadow_spectres', name:'Shadow Spectres',
    stats:['12"','3+','3+','3','3','1','2','8','4+'], role:'Elites', pts:88, min:4, max:10, ppm:22, isNew:true,
    wargear:[],
    composition:[
      { role:'Shadow Spectre', count:4, wargear:['Prism Rifle','Holofield'] },
    ],
    abilities:['Holofield: 5+ invulnerable save',
               'Compact Formation: Models within 6" of 2+ other models add 1 to Prism Rifle hit rolls',
               'Wraith Form: May Advance and still fire Prism Rifles at -1 to hit',
               'Focused Shot: If unit did not move Prism Rifle becomes S8 AP-4 DD6'] },

  { id:'el_harlequins_troop', name:'Harlequin Troupe',
    stats:['8"','3+','3+','3','3','1','3','8','6+'], role:'Elites', pts:78, min:5, max:12, ppm:13,
    wargear:[],
    composition:[
      { role:'Lead Player', count:1, wargear:['Harlequin Caress','Harlequin Kiss','Shuriken Pistol'] },
      { role:'Player', count:4, wargear:['Harlequin Caress','Harlequin Kiss','Shuriken Pistol'] },
    ],
    abilities:["Flip Belts: Ignore penalties from terrain when moving",
               'Holo-Suits: 5+ invulnerable save',
               'Cegorach\'s Jest: If unit charged add 1 to Attacks this Fight phase'] },

  // ── FAST ATTACK ─────────────────────────────────────────────────────
  { id:'el_swooping_hawks', name:'Swooping Hawks',
    stats:['14"','3+','3+','3','3','1','1','8','4+'], role:'Fast Attack', pts:90, min:5, max:10, ppm:18,
    wargear:[],
    composition:[
      { role:'Exarch', count:1, wargear:['Lasblaster','Haywire Grenades','Jump Pack'],
        options:[
          { group:'Weapon', choices:[
            { label:'Lasblaster',       pts:0, default:true, weapons:['Lasblaster'] },
            { label:'Hawk Talon',       pts:0, weapons:['Hawk Talon'],       replaces:['Lasblaster'] },
            { label:'Sunrifle',         pts:0, weapons:['Sunrifle'],         replaces:['Lasblaster'] },
          ]},
        ]},
      { role:'Swooping Hawk', count:4, wargear:['Lasblaster','Haywire Grenades','Jump Pack'] },
    ],
    abilities:['Battle Focus',
               'Skyleap: At end of any phase remove — redeploy start of next Movement phase 9"+ from enemy',
               'Grenade Pack: When arriving deal D3 mortal wounds to one unit moved over',
               'Intercept: May fire Overwatch on 5+ instead of 6+'] },

  { id:'el_warp_spiders', name:'Warp Spiders',
    stats:['7"','3+','3+','3','3','1','2','8','3+'], role:'Fast Attack', pts:103, min:5, max:10, ppm:21,
    wargear:[],
    composition:[
      { role:'Exarch', count:1, wargear:['Death Spinner','Warp Jump Generator'],
        options:[
          { group:'Weapon', choices:[
            { label:'Death Spinner (x1)', pts:0, default:true, weapons:['Death Spinner'] },
            { label:'Twin Death Spinners', pts:0, weapons:['Twin Death Spinner'], replaces:['Death Spinner'] },
          ]},
        ]},
      { role:'Warp Spider', count:4, wargear:['Death Spinner','Warp Jump Generator'] },
    ],
    abilities:['Battle Focus',
               'Warp Jump Generator: At end of any phase teleport D6+6" — on 1 suffer 1 mortal wound',
               'Flickerjump: When targeted by shooting roll D6 — on 2+ subtract 1 from all hit rolls'] },

  { id:'el_vyper', name:'Vyper',
    stats:['16"','4+','3+','4','5','4','2','8','4+'], role:'Fast Attack', pts:45, min:1, max:3, ppm:45,
    wargear:['Shuriken Cannon','Shuriken Catapult'],
    options:[
      { group:'Main Weapon', pick:1, choices:[
        { label:'Shuriken Cannon', pts:0, default:true },
        { label:'Bright Lance', pts:15 },
        { label:'Scatter Laser', pts:10 },
        { label:'Starcannon', pts:10 },
      ]},
    ],
    abilities:['Battle Focus','Jink: 5+ invulnerable save if Vyper Advanced this turn'] },

  { id:'el_windriders', name:'Windriders',
    stats:['16"','3+','3+','3','4','2','2','8','4+'], role:'Fast Attack', pts:54, min:3, max:12, ppm:18,
    wargear:[],
    composition:[
      { role:'Windrider', count:3, wargear:['Shuriken Catapult'],
        options:[
          { group:'Weapon', choices:[
            { label:'Shuriken Catapult', pts:0, default:true, weapons:['Shuriken Catapult'] },
            { label:'Shuriken Cannon',   pts:5, weapons:['Shuriken Cannon'],  replaces:['Shuriken Catapult'] },
            { label:'Scatter Laser',     pts:8, weapons:['Scatter Laser'],    replaces:['Shuriken Catapult'] },
          ]},
        ]},
    ],
    abilities:['Battle Focus',
               'Jink: 4+ invulnerable save if unit Advanced this turn',
               'Jetbike: 16" Move — ignore terrain penalties'] },

  { id:'el_shroud_runners', name:'Shroud Runners',
    stats:['16"','3+','3+','3','4','2','2','8','4+'], role:'Fast Attack', pts:105, min:3, max:9, ppm:35, isNew:true,
    wargear:[],
    composition:[
      { role:'Shroud Runner', count:3, wargear:['Ranger Long Rifle','Jetbike Cannon','Shuriken Pistol'] },
    ],
    abilities:['Scouts: Move up to 9" before first battle round',
               'Outflank: Or hold in reserve — arrive within 6" of any battlefield edge 9"+ from enemy',
               'Ranger Fieldcraft: Counts as in cover if did not move this turn',
               'Evasive Riders: -1 to hit rolls targeting this unit if it moved'] },

  // ── HEAVY SUPPORT ───────────────────────────────────────────────────
  { id:'el_dark_reapers', name:'Dark Reapers',
    stats:['7"','3+','3+','3','3','1','1','8','3+'], role:'Heavy Support', pts:100, min:3, max:6, ppm:33,
    wargear:[],
    composition:[
      { role:'Exarch', count:1, wargear:['Reaper Launcher','Reaper Rangefinder'],
        options:[
          { group:'Weapon', choices:[
            { label:'Reaper Launcher',   pts:0, default:true, weapons:['Reaper Launcher'] },
            { label:'Aeldari Missile Launcher', pts:0, weapons:['Aeldari Missile Launcher'], replaces:['Reaper Launcher'] },
            { label:'Tempest Launcher',  pts:0, weapons:['Tempest Launcher'],  replaces:['Reaper Launcher'] },
          ]},
        ]},
      { role:'Dark Reaper', count:2, wargear:['Reaper Launcher','Reaper Rangefinder'] },
    ],
    abilities:['Crack Shot: Re-roll failed hit rolls or re-roll damage',
               'Reaper Rangefinder: Ignore cover saves',
               'Implacable: May fire heavy weapons without penalty after moving'] },

  { id:'el_fire_prism', name:'Fire Prism',
    stats:['16"','5+','3+','6','7','10','3','9','3+'], role:'Heavy Support', pts:155, min:1, max:1, ppm:0,
    wargear:['Prism Cannon','Twin Shuriken Catapult'],
    options:[
      { group:'Secondary', pick:1, choices:[
        { label:'Twin Shuriken Catapult', pts:0, default:true },
        { label:'Shuriken Cannon', pts:5 },
      ]},
    ],
    abilities:['Battle Focus',
               'Crystal Targeting Matrix: May fire at a different target each phase',
               'Linked Fire: Two Fire Prisms within 6" may link their Prism Cannons for one massive shot'] },

  { id:'el_night_spinner', name:'Night Spinner',
    stats:['16"','5+','3+','6','7','10','3','9','3+'], role:'Heavy Support', pts:115, min:1, max:1, ppm:0,
    wargear:['Doomweaver','Twin Shuriken Catapult'],
    abilities:['Battle Focus',
               'Doomweaver: Monofilament weapon — Indirect Fire — wounds on 2+ against Infantry'] },

  { id:'el_war_walker', name:'War Walker',
    stats:['10"','3+','3+','5','5','4','2','8','5+'], role:'Heavy Support', pts:35, min:1, max:3, ppm:35,
    wargear:['2x Shuriken Cannons'],
    options:[
      { group:'Left Arm', pick:1, choices:[
        { label:'Shuriken Cannon', pts:0, default:true },
        { label:'Scatter Laser', pts:5 },
        { label:'Bright Lance', pts:10 },
        { label:'Starcannon', pts:8 },
      ]},
      { group:'Right Arm', pick:1, choices:[
        { label:'Shuriken Cannon', pts:0, default:true },
        { label:'Scatter Laser', pts:5 },
        { label:'Bright Lance', pts:10 },
        { label:'Starcannon', pts:8 },
      ]},
    ],
    abilities:['Battle Focus',
               'Scout Walker: Move up to 6" before first battle round',
               '5+ invulnerable save'] },

  { id:'el_wraithlord', name:'Wraithlord',
    stats:['8"','3+','4+','10','8','10','4','10','3+'], role:'Heavy Support', pts:90, min:1, max:1, ppm:0,
    wargear:['Ghostglaive','2x Shuriken Catapults'],
    options:[
      { group:'Heavy Weapon 1', pick:1, choices:[
        { label:'None', pts:0, default:true },
        { label:'Bright Lance', pts:20 },
        { label:'Scatter Laser', pts:14 },
        { label:'Starcannon', pts:15 },
        { label:'Shuriken Cannon', pts:10 },
      ]},
      { group:'Heavy Weapon 2', pick:1, choices:[
        { label:'None', pts:0, default:true },
        { label:'Bright Lance', pts:20 },
        { label:'Scatter Laser', pts:14 },
        { label:'Flamers', pts:5 },
      ]},
    ],
    abilities:['Wraithsight: If not within 6" of Spiritseer roll D6 — on 1 cannot shoot or charge',
               'Unstoppable: Auto-pass Morale — immune to morale penalties',
               'Ancient: Re-roll hit rolls of 1'] },

  { id:'el_falcon', name:'Falcon',
    stats:['16"','5+','3+','6','7','10','3','9','3+'], role:'Heavy Support', pts:130, min:1, max:1, ppm:0,
    wargear:['Pulse Laser','Shuriken Cannon'],
    options:[
      { group:'Secondary', pick:1, choices:[
        { label:'Shuriken Cannon', pts:0, default:true },
        { label:'Scatter Laser', pts:5 },
        { label:'Bright Lance', pts:10 },
        { label:'Starcannon', pts:8 },
      ]},
    ],
    abilities:['Battle Focus','Vectored Engines: May Advance and still fire all weapons',
               'Transport: Carries 6 Aeldari Infantry',
               'Holofields optional: 5+ invulnerable save (+15pts)'] },

  // ── LORD OF WAR ─────────────────────────────────────────────────────
  { id:'el_wraithknight', name:'Wraithknight',
    stats:['12"','3+','3+','10','10','24','4','10','3+'], role:'Lord of War', pts:415, min:1, max:1, ppm:0,
    wargear:['Wraithbone Fists'],
    options:[
      { group:'Main Weapons', pick:1, choices:[
        { label:'Heavy Wraithcannons (pair)', pts:0, default:true },
        { label:'Titanic Sword + Suncannon', pts:35 },
        { label:'Titanic Glaive', pts:15 },
      ]},
    ],
    abilities:['Ghostglaive: When equipped D6 damage against Vehicles on wound roll of 6',
               'Wraithshield: 5+ invulnerable save',
               'Titanic: Never affected by Morale',
               'Explodes: On 6 when destroyed — D6 mortal wounds within 2D6"'] },

  // ── DEDICATED TRANSPORT ─────────────────────────────────────────────
  { id:'el_wave_serpent', name:'Wave Serpent',
    stats:['16"','5+','3+','6','7','13','3','9','3+'], role:'Dedicated Transport', pts:122, min:1, max:1, ppm:0,
    wargear:['Energy Field'],
    options:[
      { group:'Main Weapon', pick:1, choices:[
        { label:'Twin Shuriken Cannon', pts:0, default:true },
        { label:'Twin Bright Lance', pts:15 },
        { label:'Twin Scatter Laser', pts:10 },
        { label:'Twin Starcannon', pts:10 },
        { label:'Twin Shuriken Catapult', pts:-5 },
      ]},
    ],
    abilities:['Transport: Carries 12 Aeldari Infantry or Jetbike models',
               'Energy Field: Once per game discharge — subtract 1 from hit rolls targeting this model until your next turn',
               'Battle Focus','Explodes: On 6 when destroyed — D3 mortal wounds within 3"'] },

  // ── FLYER ───────────────────────────────────────────────────────────
  { id:'el_hemlock', name:'Hemlock Wraithfighter',
    stats:['20-60"','6+','3+','6','6','8','1','9','3+'], role:'Flyer', pts:190, min:1, max:1, ppm:0,
    wargear:['Twin Heavy D-scythes','Spirit Stones'],
    abilities:['Hard to Hit: -1 to hit rolls against this model',
               'Mindshock: Units that lose models subtract 1 from Leadership until next turn',
               'Supersonic: Minimum move 20"',
               'Explodes: On 1 when destroyed D3 mortal wounds within 3"'] },

  { id:'el_illic', name:'Illic Nightspear', unique:true,
    stats:['7"','3+','2+','3','3','4','3','9','5+'], role:'HQ', pts:120, min:1, max:1, ppm:0,
    wargear:['Voidbringer (Sniper Rifle)','Shuriken Pistol'],
    abilities:['Battle Focus',
               'Scouts: Move up to 6" before first battle round',
               'Cameleoline: Always count as being in cover',
               'Voidbringer: Sniper — S5 AP-3 D3 — wound rolls of 6 cause Instant Death (target slain regardless of wounds)',
               'Master Pathfinder: Friendly Rangers within 6" re-roll wound rolls of 1'] },

];
