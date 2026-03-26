const FACTION_EMPERORS_CHILDREN = [
  { id:'ec_fulgrim', name:'Fulgrim, Daemon Primarch of Slaanesh',
    stats:['14"','2+','2+','7','7','18','8','10','4+'], role:'Lord of War', pts:455, min:1, max:1, ppm:0, unique:true, isNew:true,
    wargear:['Blade of the Laer',"Serpent's Scales"],
    abilities:['Daemonic: 4+ invulnerable save',
               "Quicksilver Duelist: May make one additional attack with each melee weapon in Fight phase",
               "Mesmerising Gaze: At start of Fight phase pick one enemy Character within 3\" — it fights last",
               "Flawless Perfection: Fulgrim and friendly Emperor's Children Core within 6\" re-roll hit rolls of 1",
               "Overwhelming Sensation: Enemy units that lose models to Fulgrim cannot fire Overwatch for rest of battle round"] },

{ id:'ec_noise_marines', name:'Noise Marines',
    stats:['6"','3+','3+','4','4','1','1','8','3+'], role:'Troops', pts:90, min:5, max:20, ppm:18,
    wargear:[],
    composition:[
      { role:'Noise Champion', count:1, wargear:['Sonic Blaster','Bolt Pistol'],
        options:[
          { group:'Ranged', choices:[
            { label:'Sonic Blaster',   pts:0, default:true, weapons:['Sonic Blaster'] },
            { label:'Blastmaster',     pts:8, weapons:['Blastmaster'],   replaces:['Sonic Blaster'] },
            { label:'Plasma Gun',      pts:5, weapons:['Plasma Gun'],    replaces:['Sonic Blaster'] },
          ]},
          { group:'Melee', choices:[
            { label:'None',            pts:0, default:true },
            { label:'Power Sword',     pts:4, weapons:['Power Sword'],   replaces:[] },
            { label:'Power Fist',      pts:9, weapons:['Power Fist'],    replaces:['Sonic Blaster'] },
          ]},
        ]},
      { role:'Blastmaster (1)', count:1, wargear:['Blastmaster','Bolt Pistol'] },
      { role:'Noise Marine', count:3, wargear:['Sonic Blaster','Bolt Pistol'] },
    ],
    abilities:['Cacophony: +1 Attack in Fight phase for each time this unit was hit by ranged attacks this turn',
               'Sonic Weapons: Wound rolls of 6 deal 1 mortal wound in addition'] },

  { id:'ec_lord', name:'Chaos Lord',
    stats:['6"','3+','3+','4','4','5','4','9','3+'], role:'HQ', pts:76, min:1, max:1, ppm:0,
    wargear:['Power Sword','Bolt Pistol'],
    abilities:['Lord of Chaos: Friendly Slaanesh Core within 6" re-roll hit rolls of 1',
               '4+ invulnerable save'] },

  { id:'ec_sorcerer', name:'Chaos Sorcerer',
    stats:['6"','3+','3+','4','4','4','3','9','3+'], role:'HQ', pts:93, min:1, max:1, ppm:0,
    wargear:['Force Stave','Bolt Pistol'],
    abilities:['Psyker: Mastery Level 1','4+ invulnerable save'] },

  { id:'ec_csm', name:'Chaos Space Marines',
    stats:['6"','3+','3+','4','4','1','1','7','3+'], role:'Troops', pts:60, min:5, max:20, ppm:12,
    wargear:['Bolter','Bolt Pistol'],
    abilities:['Kakophoni: +1 Leadership — enemies Falling Back subtract 1 from hit rolls'] },

  { id:'ec_terminators', name:'Chaos Terminators',
    stats:['5"','3+','3+','4','4','2','2','8','2+'], role:'Elites', pts:155, min:5, max:10, ppm:31,
    wargear:['Storm Bolters','Power Fists'],
    abilities:['Teleport Strike','Terminator Armour: 5+ invulnerable save'] },

  { id:'ec_havocs', name:'Havocs',
    stats:['6"','3+','3+','4','4','1','1','7','3+'], role:'Heavy Support', pts:60, min:5, max:5, ppm:0,
    wargear:['Bolters','Autocannons'],
    abilities:['Tank Hunters: Re-roll failed wound rolls against Vehicles',
               'Up to 4 models may take heavy weapons'] },

  { id:'ec_rhino', name:'Chaos Rhino',
    stats:['12"','5+','3+','6','6','10','3','8','3+'], role:'Dedicated Transport', pts:72, min:1, max:1, ppm:0,
    wargear:['Combi-Bolter'],
    abilities:['Smoke Launchers','Transport: Carries 10 Infantry'] },
];
