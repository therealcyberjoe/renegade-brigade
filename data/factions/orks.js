const FACTION_ORKS = [
  // ── HQ ──────────────────────────────────────────────────────────────
  { id:'ork_warboss', name:'Warboss',
    stats:['5"','2+','4+','5','5','6','4','8','4+'], role:'HQ', pts:70, min:1, max:1, ppm:0,
    wargear:['Power Klaw','Shoota','Stikkbombs'],
    abilities:["'Ere We Go: Re-roll failed charge rolls for friendly Orks within 6\"",
               "Waaagh!: Once per game — friendly Orks within 12\" may Advance and charge same turn",
               "Brutal but Kunnin': May re-roll one hit roll or wound roll per phase",
               '4+ invulnerable save'] },

  { id:'ork_big_mek', name:'Big Mek',
    stats:['5"','3+','4+','4','4','4','3','7','4+'], role:'HQ', pts:55, min:1, max:1, ppm:0,
    wargear:['Kustom Force Field','Slugga','Choppa'],
    abilities:["'Ere We Go",
               'Kustom Force Field: Friendly Orks within 9" gain 5+ invulnerable save against ranged attacks',
               "Mek's Tools: At end of each Movement phase restore D3 wounds to one friendly Ork Vehicle within 1\""] },

  { id:'ork_weirdboy', name:'Weirdboy',
    stats:['5"','3+','4+','4','4','4','3','7','6+'], role:'HQ', pts:62, min:1, max:1, ppm:0,
    wargear:["Weirdboy Staff",'Smash'],
    abilities:['Psyker: Mastery Level 1 — knows Smite + 1 Ork power',
               "Waaagh! Energy: Add 1 to Psychic tests for every 10 friendly Orks within 12\" (max +3)",
               "'Eadbanger: Failed Psychic test — model suffers 1 mortal wound"] },

  // ── NAMED CHARACTERS ────────────────────────────────────────────────
  { id:'ork_ghazghkull', name:'Ghazghkull Thraka',
    stats:['10"','2+','3+','8','9','12','6','9','2+'], role:'Lord of War', pts:300, min:1, max:1, ppm:0, unique:true,
    wargear:["Gork's Klaw","Mork's Roar",'Da Iron Skin'],
    abilities:["Prophet of the Waaagh!: Once per battle — all friendly Orks may Advance and charge this turn",
               "Blessed by the Gods: 4+ invulnerable save — on 6 restore 1 wound instead of taking it",
               "The Voice of Gork and Mork: Friendly Orks within 12\" auto-pass Morale",
               "'Ere We Go: Re-roll failed charge rolls for all friendly Orks",
               'Unstoppable: When this model loses its last wound roll D6 — on 2+ survives with D3 wounds'] },

  { id:'ork_makari', name:"Makari (Ghazghkull's Grot)",
    stats:['5"','4+','4+','2','2','1','1','7','6+'], role:'HQ', pts:30, min:1, max:1, ppm:0, isNew:true,
    wargear:['Lucky Stick'],
    abilities:["Lucky Banner: Ghazghkull gains a 3+ invulnerable save while Makari is within 3\"",
               'Must be taken alongside Ghazghkull — cannot be independent',
               'Surprisingly Killy: +1 Attack if charged'] },

  { id:'ork_gazrot', name:'Gazrot Goresnappa',
    stats:['5"','2+','4+','6','6','7','5','9','2+'], role:'HQ', pts:135, min:1, max:1, ppm:0, unique:true, isNew:true,
    wargear:['Da Biggest Klaw','Shoota'],
    abilities:["'Ere We Go",
               "Waaagh Leader: Friendly Orks within 8\" re-roll hit rolls of 1",
               'Da Biggest Klaw: Wound rolls of 6 deal D3 additional mortal wounds',
               '4+ invulnerable save'] },

  { id:'ork_zagstruk', name:'Zagstruk',
    stats:['12"','2+','3+','5','5','5','5','9','4+'], role:'HQ', pts:90, min:1, max:1, ppm:0, unique:true,
    wargear:["Da Vulcha's Klaws",'Slugga','Jump Pack'],
    abilities:["'Ere We Go",
               'Vulcha Squad Leader: May be deployed with a unit of Stormboyz — acts as their boss',
               "Da Drop: When arriving from deep strike add 2 to charge rolls this turn",
               '4+ invulnerable save'] },

  { id:'ork_mozrog', name:'Mozrog Skragbad',
    stats:['10"','2+','5+','7','8','10','5','8','4+'], role:'HQ', pts:185, min:1, max:1, ppm:0, unique:true, isNew:true,
    wargear:["Skragbad's Klaw","Big Chompa's Jaws",'Slugga'],
    abilities:["'Ere We Go",
               'Unstoppable Beast: Re-roll failed saving throws of 1',
               'Best of the Beast Snaggas: Friendly Beast Snaggas units within 6" re-roll hit rolls of 1',
               "Da Best Hunter (Warlord): Once per battle — after this model fights it may immediately fight again"] },

  { id:'ork_beastboss', name:'Beastboss',
    stats:['6"','2+','4+','5','5','5','5','9','4+'], role:'HQ', pts:95, min:1, max:1, ppm:0, isNew:true,
    wargear:['Beastchoppa','Thump Gun','Slugga'],
    abilities:["'Ere We Go",
               'Beast Snagga Aura: Friendly Beast Snaggas within 6" re-roll wound rolls of 1',
               'Predatory Instincts: Re-roll failed charge rolls — on a charge add 1 to Attacks',
               '4+ invulnerable save'] },

  { id:'ork_beastboss_squig', name:'Beastboss on Squigosaur',
    stats:['10"','2+','5+','6','7','8','5','9','4+'], role:'HQ', pts:160, min:1, max:1, ppm:0, isNew:true,
    wargear:['Boss Klaw',"Squigosaur's Jaws",'Slugga'],
    abilities:["'Ere We Go",
               '4+ invulnerable save',
               'Beasthide: Each time this model would lose more than 2 wounds reduce damage to 2',
               'Beast Snagga Aura: Friendly Beast Snaggas within 6" re-roll wound rolls of 1'] },

  { id:'ork_nob_squig', name:'Nob on Smasha Squig',
    stats:['10"','2+','5+','6','6','5','5','8','4+'], role:'HQ', pts:90, min:1, max:1, ppm:0, isNew:true,
    wargear:['Smasha Squig Jaws','Power Klaw','Slugga'],
    abilities:["'Ere We Go",
               'Inspiring Presence: Friendly Beast Snaggas within 6" re-roll hit rolls of 1',
               "Born to Scrap: May Advance and charge in same turn",
               '4+ invulnerable save'] },

  // ── TROOPS ──────────────────────────────────────────────────────────
  { id:'ork_boyz', name:'Boyz',
    stats:['5"','3+','5+','4','4','1','1','6','6+'], role:'Troops', pts:60, min:10, max:30, ppm:6,
    wargear:[],
    composition:[
      { role:'Boss Nob', count:1, wargear:['Slugga','Choppa','Stikkbombs'],
        options:[
          { group:'Melee', choices:[
            { label:'Choppa',    pts:0, default:true, weapons:['Choppa'] },
            { label:'Power Klaw',pts:10, weapons:['Power Klaw'], replaces:['Choppa'] },
            { label:'Big Choppa',pts:5,  weapons:['Big Choppas'], replaces:['Choppa'] },
          ]},
          { group:'Ranged', choices:[
            { label:'Slugga',  pts:0, default:true, weapons:['Slugga'] },
            { label:'Shoota',  pts:0, weapons:['Shoota'], replaces:['Slugga'] },
          ]},
        ]},
      { role:'Boyz', count:29, wargear:['Slugga','Choppa','Stikkbombs'],
        options:[
          { group:'Weapon', choices:[
            { label:'Slugga & Choppa', pts:0, default:true },
            { label:'Shoota',          pts:0, weapons:['Shoota'], replaces:['Slugga'] },
          ]},
        ]},
    ],
    abilities:['Mob Rule: Unit of 20+ uses number of models instead of Leadership for Morale',
               "'Ere We Go: Re-roll failed charge rolls",
               'Green Tide: Units of 20+ add 1 to their Attacks characteristic'] },

  { id:'ork_gretchin', name:'Gretchin',
    stats:['5"','5+','4+','2','2','1','1','4','6+'], role:'Troops', pts:30, min:10, max:30, ppm:3,
    wargear:[],
    composition:[
      { role:'Gretchin', count:10, wargear:['Grot Blasters'] },
    ],
    abilities:['Runtherd: 1 Runtherd keeps Gretchin in line — use his Leadership for Morale',
               'Expendable: Enemy units may not choose to shoot Gretchin if other Ork units are closer'] },

  { id:'ork_beast_boyz', name:'Beast Snagga Boyz',
    stats:['6"','3+','5+','4','4','2','2','7','6+'], role:'Troops', pts:110, min:10, max:20, ppm:11, isNew:true,
    wargear:[],
    composition:[
      { role:'Beast Snagga Nob', count:1, wargear:['Slugga','Power Snappa'] },
      { role:'Beast Snagga Boy', count:9, wargear:['Slugga','Choppa'] },
    ],
    abilities:["'Ere We Go: Re-roll failed charge rolls",
               'Anti-vehicle Instincts: Re-roll hit rolls of 1 against Vehicles and Monsters',
               'Unstoppable Tide: Each time this unit loses a model roll D6 — on 6 that model does not count as a casualty for Morale'] },

  // ── ELITES ──────────────────────────────────────────────────────────
  { id:'ork_nobz', name:'Nobz',
    stats:['5"','3+','4+','5','4','2','2','7','4+'], role:'Elites', pts:50, min:5, max:10, ppm:10,
    wargear:[],
    composition:[
      { role:'Boss Nob', count:1, wargear:['Slugga','Big Choppas'],
        options:[
          { group:'Melee', choices:[
            { label:'Big Choppa',  pts:0, default:true, weapons:['Big Choppas'] },
            { label:'Power Klaw',  pts:5, weapons:['Power Klaw'],  replaces:['Big Choppas'] },
          ]},
          { group:'Ranged', choices:[
            { label:'Slugga', pts:0, default:true, weapons:['Slugga'] },
            { label:'Shoota', pts:0, weapons:['Shoota'], replaces:['Slugga'] },
          ]},
        ]},
      { role:'Nob', count:4, wargear:['Slugga','Big Choppas'],
        options:[
          { group:'Melee', choices:[
            { label:'Big Choppa', pts:0, default:true },
            { label:'Power Klaw', pts:5, weapons:['Power Klaw'], replaces:['Big Choppas'] },
          ]},
          { group:'Ranged', choices:[
            { label:'Slugga', pts:0, default:true },
            { label:'Shoota', pts:0, weapons:['Shoota'], replaces:['Slugga'] },
          ]},
        ]},
    ],
    abilities:["'Ere We Go",'Mob Rule',
               'Bodyguard: Roll D6 when nearby Warboss loses wound — on 4+ Nob suffers it instead',
               'Boss Nob: 1 per unit — may take power klaw or big choppa'] },

  { id:'ork_meganobz', name:'Meganobz',
    stats:['4"','3+','4+','5','5','3','3','7','2+'], role:'Elites', pts:105, min:3, max:9, ppm:35,
    wargear:[],
    composition:[
      { role:'Meganob', count:3, wargear:['Kombi-Skorchas','Power Klaw'] },
    ],
    abilities:["'Ere We Go",'Mob Rule',
               'Slow and Purposeful: May not Run',
               'Dead Ard: 2+ armour save — 4+ invulnerable save'] },

  { id:'ork_kommandos', name:'Kommandos',
    stats:['6"','3+','4+','4','4','1','2','7','6+'], role:'Elites', pts:50, min:5, max:10, ppm:10,
    wargear:[],
    composition:[
      { role:'Boss Nob', count:1, wargear:['Slugga','Choppa','Bomb Squigs'],
        options:[
          { group:'Melee', choices:[
            { label:'Choppa',     pts:0, default:true, weapons:['Choppa'] },
            { label:'Power Klaw', pts:5, weapons:['Power Klaw'], replaces:['Choppa'] },
          ]},
          { group:'Ranged', choices:[
            { label:'Slugga', pts:0, default:true },
            { label:'Shoota', pts:0, weapons:['Shoota'], replaces:['Slugga'] },
          ]},
        ]},
      { role:'Special (up to 2)', count:2, wargear:['Slugga','Choppa'],
        options:[
          { group:'Special', choices:[
            { label:'Slugga & Choppa',    pts:0, default:true },
            { label:'Rokkit Launcha',     pts:5, weapons:['Rokkit Launcha'],  replaces:['Slugga'] },
            { label:'Burna (Flamer)',     pts:3, weapons:['Flamer'],          replaces:['Slugga'] },
          ]},
        ]},
      { role:'Kommando', count:2, wargear:['Slugga','Choppa','Bomb Squigs'] },
    ],
    abilities:['Infiltrate: Deploy anywhere more than 9" from enemy before first battle round',
               'Sneaky Gitz: Always count as in cover if they did not move this turn',
               'Bomb Squig: Assault 1 — Range 9" — S6 AP-2 D3 — one use per unit'] },

  // ── FAST ATTACK ─────────────────────────────────────────────────────
  { id:'ork_deffkoptas', name:'Deffkoptas',
    stats:['14"','3+','4+','4','4','3','2','6','4+'], role:'Fast Attack', pts:55, min:1, max:5, ppm:55,
    wargear:['Twin Rokkit Launcha','Choppa'],
    abilities:["'Ere We Go",'Scouts: Move up to 9" before first battle round',
               'Jink: 5+ invulnerable save if the model Advanced this turn'] },

  { id:'ork_warbikers', name:'Warbikers',
    stats:['14"','3+','4+','4','5','2','2','6','4+'], role:'Fast Attack', pts:60, min:3, max:12, ppm:20,
    wargear:[],
    composition:[
      { role:'Warbiker', count:3, wargear:['Dakkaguns','Choppa'] },
    ],
    abilities:["'Ere We Go",'Turbo-boost: May Advance and charge in same turn',
               'Jink: 4+ invulnerable save if the model Advanced this turn'] },

  { id:'ork_stormboyz', name:'Stormboyz',
    stats:['12"','3+','4+','4','4','1','1','6','6+'], role:'Fast Attack', pts:55, min:5, max:30, ppm:11,
    wargear:[],
    composition:[
      { role:'Stormboy', count:5, wargear:['Slugga','Choppa','Rokkit Pack'] },
    ],
    abilities:["'Ere We Go",'Jump Pack Assault: Advance and charge same turn',
               'Unstable Rokkit Pack: Each time this unit Advances roll D6 — on 1 one model suffers 1 mortal wound'] },

  { id:'ork_squighog', name:'Squighog Boys',
    stats:['10"','3+','5+','5','5','3','4','7','4+'], role:'Fast Attack', pts:105, min:3, max:6, ppm:35, isNew:true,
    wargear:[],
    composition:[
      { role:'Squighog Boy', count:3, wargear:['Stikka','Saddlegit Weapons'] },
    ],
    abilities:["'Ere We Go",
               "Born to Scrap: May Advance and still charge in same turn",
               'Unstoppable Charge: On turn it charges add 1 to hit rolls in Fight phase'] },

  // ── HEAVY SUPPORT ───────────────────────────────────────────────────
  { id:'ork_lootas', name:'Lootas',
    stats:['5"','4+','4+','4','4','1','1','6','6+'], role:'Heavy Support', pts:75, min:5, max:15, ppm:15,
    wargear:[],
    composition:[
      { role:'Loota', count:5, wargear:['Deffgun'] },
    ],
    abilities:["'Ere We Go",
               'Deffgun: D3 shots — S7 AP-1 D2',
               'Fire Indiscriminately: May fire at units in close combat at risk of hitting friendlies'] },

  { id:'ork_killa_kans', name:'Killa Kans',
    stats:['6"','3+','4+','5','5','5','3','7','3+'], role:'Heavy Support', pts:75, min:1, max:6, ppm:75,
    wargear:['Rokkit Launcha','Klaw of Mork'],
    abilities:["'Ere We Go",
               'Kan Wall: Friendly Gretchin within 3" of this unit count as being in cover',
               'Explodes: On 6 when destroyed — D3 mortal wounds within 3"'] },

  { id:'ork_deff_dread', name:'Deff Dread',
    stats:['6"','3+','4+','6','6','8','4','7','3+'], role:'Heavy Support', pts:80, min:1, max:1, ppm:0,
    wargear:['Dread Klaw','Rokkits'],
    abilities:["'Ere We Go",'Rampage: Add D3 to Attacks on turn it charges',
               'Explodes: On 6 when destroyed — D3 mortal wounds within 3"'] },

  { id:'ork_battlewagon', name:'Battlewagon',
    stats:['10"','5+','5+','7','8','16','4','8','3+'], role:'Heavy Support', pts:145, min:1, max:1, ppm:0,
    wargear:['Deff Rolla','Kannon','Big Shoota'],
    abilities:['Transport: Carries 20 Infantry models',
               "Deff Rolla: Deals D3 mortal wounds to each unit it moves over during Advance",
               'Explodes: On 6 when destroyed — D3 mortal wounds within 6"'] },

  { id:'ork_kill_rig', name:'Kill Rig / Hunta Rig',
    stats:['9"','3+','5+','8','9','18','4','8','3+'], role:'Heavy Support', pts:230, min:1, max:1, ppm:0, isNew:true,
    wargear:['Supa-Lobba','Squig Launcha','Snagga Klaw'],
    abilities:["'Ere We Go",
               'Transport: Carries 12 Beast Snaggas Infantry',
               "Rolling Rampage: On turn it charges enemy within 1\" subtract 2 from Leadership",
               "Da Psychic Squig: Once per Psychic phase may Deny one enemy power as if PSYKER",
               'Explodes: On 6 — D6+1 mortal wounds within 6"'] },

  // ── LORD OF WAR ─────────────────────────────────────────────────────
  { id:'ork_gorkanaut', name:'Gorkanaut',
    stats:['8"','3+','4+','8','8','18','6','8','3+'], role:'Lord of War', pts:325, min:1, max:1, ppm:0,
    wargear:["Deffstorm Mega-Shoota",'Skorcha','Power Klaw'],
    abilities:['Fortress of Gunn: Transport carries 6 Infantry models',
               "Unstoppable Green Monster: 5+ invulnerable save",
               'Explodes: On 6 — D6 mortal wounds within 2D6"',
               "'Ere We Go"] },

  // ── DEDICATED TRANSPORT ─────────────────────────────────────────────
  { id:'ork_trukk', name:'Trukk',
    stats:['12"','5+','5+','5','6','10','3','6','4+'], role:'Dedicated Transport', pts:70, min:1, max:1, ppm:0,
    wargear:['Big Shoota','Wreckin Ball'],
    abilities:["Transport: Carries 12 Ork Infantry",
               'Ramshackle: When this model is destroyed roll D6 — on 6 the driver escapes unharmed',
               'Explodes: On 6 when destroyed — D3 mortal wounds within 3"'] },
];
