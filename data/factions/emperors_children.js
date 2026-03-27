// Must be loaded AFTER csm_shared.js
const FACTION_EMPERORS_CHILDREN = [
  ...CSM_SHARED_UNITS,

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

    { id:'ec_lucius', name:'Lucius the Eternal — the Slaanesh Champion', unique:true,
    stats:['6"','2+','3+','4','4','4','4','9','3+'], role:'HQ', pts:130, min:1, max:1, ppm:0,
    wargear:['Lash of Torment','Sword of Misery','Doom Siren'],
    abilities:['Veterans of the Long War',
               '4+ invulnerable save',
               "Eternal Champion: Each time Lucius is slain, the model that slew him must roll D6 — on 2+ that model's player takes control of Lucius and removes one of their own models",
               'Armour of Shrieking Souls: Enemy units within 3" must subtract 1 from their Leadership',
               'Lash of Torment: AP-2 D2 — unmodified hit rolls of 6 deal 1 mortal wound in addition'] },


  // ── ADDITIONAL EC UNITS ──────────────────────────────────────────────
  { id:'ec_daemon_prince', name:'Daemon Prince of Slaanesh',
    stats:['8"','2+','2+','5','5','8','4','10','3+'], role:'HQ', pts:165, min:1, max:1, ppm:0,
    wargear:['Daemonic Axe','Malefic Talon'],
    options:[
      { group:'Wings', choices:[
        { label:'No Wings', pts:0,  default:true },
        { label:'Wings',    pts:30, weapons:['Wings'] },
      ]},
    ],
    abilities:['Daemonic: 5+ invulnerable save',
               'Quicksilver Swiftness: +1 Attack and +1 to hit rolls if unit charged',
               'Delicious Agony: Enemy units within 3" must subtract 1 from their Leadership'] },

  { id:'ec_daemonettes', name:'Daemonettes of Slaanesh',
    stats:['7"','3+','3+','3','3','1','2','10','5+'], role:'Troops', pts:80, min:10, max:30, ppm:8,
    wargear:[],
    composition:[
      { role:'Alluress', count:1, wargear:['Piercing Claws'] },
      { role:'Daemonette', count:9, wargear:['Piercing Claws'] },
    ],
    abilities:['Daemonic: 5+ invulnerable save',
               'Quicksilver Swiftness: +1 Attack on the turn this unit charges',
               'Aura of Acquiescence: Enemy units within 6" subtract 1 from their Leadership'] },

  { id:'ec_seekers', name:'Seekers of Slaanesh',
    stats:['14"','3+','3+','3','3','1','2','10','5+'], role:'Fast Attack', pts:105, min:5, max:20, ppm:21,
    wargear:[],
    composition:[
      { role:'Heartseeker', count:1, wargear:['Lashing Tongue','Piercing Claws'] },
      { role:'Seeker', count:4, wargear:['Piercing Claws'] },
    ],
    abilities:['Daemonic: 5+ invulnerable save',
               'Quicksilver Swiftness: +1 Attack on the turn this unit charges',
               "Siren Song: At start of opponent's charge phase — one enemy unit within 12\" must attempt to charge this unit if it can"] },

];
