var FACTION_NECRONS = [
  // ── HQ ──────────────────────────────────────────────────────────────
  { id:'nec_overlord', name:'Overlord',
    stats:['5"','3+','3+','5','5','5','3','10','3+'], role:'HQ', pts:92, min:1, max:1, ppm:0,
    wargear:['Staff of Light','Resurrection Orb'],
    abilities:['Reanimation Protocols: Roll D6 at start of your turn — on 5+ restore 1 lost wound',
               "My Will Be Done: One friendly Necrons Infantry within 6\" re-rolls hit rolls of 1 and adds 1 to Advance and charge rolls",
               "The Lord's Will: Re-roll hit rolls of 1 for friendly Necrons within 6\""] },

  { id:'nec_cryptek', name:'Cryptek',
    stats:['5"','4+','3+','4','4','4','1','10','3+'], role:'HQ', pts:70, min:1, max:1, ppm:0,
    wargear:['Arcane Staff','Relic'],
    abilities:['Reanimation Protocols',
               'Cryptek Abilities: Vary by type — Chronomancer / Plasmancer / Psychomancer / Technomancer'] },

  { id:'nec_lord', name:'Necron Lord',
    stats:['5"','3+','3+','5','5','4','2','10','3+'], role:'HQ', pts:65, min:1, max:1, ppm:0,
    wargear:['Staff of Light','Resurrection Orb'],
    abilities:['Reanimation Protocols',
               "The Lord's Will: Re-roll hit rolls of 1 for friendly Necrons within 6\"",
               'Resurrection Orb: Once per battle — one friendly Necrons Infantry unit within 3" immediately attempts Reanimation'] },

  { id:'nec_catacomb_cmd', name:'Catacomb Command Barge',
    stats:['12"','3+','3+','6','6','9','4','10','3+'], role:'HQ', pts:152, min:1, max:1, ppm:0,
    wargear:['Staff of Light','Gauss Cannon'],
    abilities:['Reanimation Protocols','Living Metal: Recover 1 wound at start of each turn',
               'My Will Be Done','Explodes: On 6 when destroyed — D6 mortal wounds within 6"'] },

  // ── NAMED CHARACTERS ────────────────────────────────────────────────
  { id:'nec_silent_king', name:'The Silent King (Szarekh)',
    stats:['10"','2+','2+','7','7','18','6','10','2+'], role:'Lord of War', pts:420, min:1, max:1, ppm:0, isNew:true,
    wargear:['Sceptre of Eternal Glory','Flaymr Cannons x2'],
    abilities:['We Are Eternal: Roll D6 per lost wound at start of turn — on 5+ regain 1 (max 3/turn)',
               "Triarch's Command: Necrons within 6\" re-roll hit rolls of 1",
               "The Awakening: Once per battle — one friendly Necrons Infantry within 9\" immediately attempts full Reanimation",
               'Quantum Shielding: First attack that deals 3+ damage is reduced to 2',
               '4+ invulnerable save',
               'Lokhust Escorts: 2 bodyguard models absorb wounds before Szarekh'] },

  { id:'nec_illuminor', name:'Illuminor Szeras',
    stats:['10"','3+','3+','5','5','6','3','10','3+'], role:'HQ', pts:145, min:1, max:1, ppm:0, 
    wargear:['Eldritch Lance','Mechatendrils'],
    abilities:['Reanimation Protocols',
               'The Great Work: One friendly Necrons Infantry unit permanently within 3" gains one enhancement: Enhanced Weapons / Augmented Reflexes / Biochemical Resilience',
               'Living Circuit: Friendly Cryptek units within 6" re-roll Reanimation rolls',
               "Mechanica's Aura: Friendly Necrons Vehicle within 6\" regains 1 wound at start of turn on 5+"] },

  { id:'nec_trazyn', name:'Trazyn the Infinite',
    stats:['5"','3+','3+','5','5','5','3','10','3+'], role:'HQ', pts:130, min:1, max:1, ppm:0,
    wargear:['Empathic Obliterator'],
    abilities:['Prismatic Gallery: Once per battle — choose one of several powerful one-off abilities',
               'Surrogate Hosts: When slain roll D6 — on 2+ replace with a friendly Lychguard or Immortal within 3"',
               'Reanimation Protocols','Living Metal'] },

  { id:'nec_anrakyr', name:'Anrakyr the Traveller',
    stats:['5"','3+','3+','5','5','5','3','10','3+'], role:'HQ', pts:130, min:1, max:1, ppm:0,
    wargear:['Tachyon Arrow','Warscythe'],
    abilities:['Pyrrhian Eternals: Once per battle — one friendly Necrons unit within 6" may be activated twice this phase',
               'Lord of the Pyrrhian Legions: Friendly Necrons within 6" re-roll hit rolls of 1',
               'Reanimation Protocols',
               'Mind in the Machine: May attempt to take control of an enemy Vehicle within 12"'] },

  { id:'nec_skorpekh_lord', name:'Skorpekh Lord',
    stats:['8"','2+','3+','6','6','6','5','10','3+'], role:'HQ', pts:130, min:1, max:1, ppm:0, isNew:true,
    wargear:['Flensing Claw','Hyperphase Harvester','Enmitic Disintegrator'],
    abilities:['Reanimation Protocols',
               'Destroyer Cult Aura: Destroyer Cult within 6" re-roll hit rolls of 1 — Skorpekh Destroyers within 6" re-roll all failed hit rolls',
               'Frenzied Charge: Add 2 to Attacks on turn it charges'] },

  { id:'nec_chronomancer', name:'Canoptek Chronomancer',
    stats:['7"','3+','3+','4','4','4','3','10','3+'], role:'HQ', pts:90, min:1, max:1, ppm:0, isNew:true,
    wargear:['Aeonstave','Entropic Lance'],
    abilities:['Reanimation Protocols',
               'Temporal Displacement: Once per turn end of Movement phase — friendly Necrons Infantry within 6" may immediately make a Normal move of up to 3"',
               'Chronometron: Friendly Necrons within 6" improve save by 1 when targeted by ranged attacks (max 2+)'] },

  { id:'nec_psychomancer', name:'Psychomancer',
    stats:['7"','3+','3+','4','4','4','3','10','3+'], role:'HQ', pts:80, min:1, max:1, ppm:0, isNew:true,
    wargear:['Abyssal Lance','Frightener'],
    abilities:['Reanimation Protocols',
               'Frightener: Enemy units within 6" subtract 1 from Leadership',
               "Phaeron's Whispers: Friendly Necrons Noble units within 6\" may re-roll Morale tests",
               'Writhing Worldscape: Once per game — all enemy units within 9" must make a Dangerous Terrain test'] },

  // ── TROOPS ──────────────────────────────────────────────────────────
  { id:'nec_warriors', name:'Necron Warriors',
    stats:['5"','3+','3+','4','4','1','1','10','4+'], role:'Troops', pts:78, min:10, max:20, ppm:8,
    wargear:[],
    composition:[
      { role:'Necron Warrior', count:10, wargear:['Gauss Flayer'],
        // Index loadout — Gauss Flayer only (Gauss Reaper model didn't exist in 2017)
        },
    ],
    abilities:['Reanimation Protocols: At end of phase — slain models may roll D6 on 5+ return with 1 wound',
               'Their Number is Legion: Unit of 20 never takes Morale tests'] },

  { id:'nec_warriors_reaper', name:'Necron Warriors (Gauss Reaper)', isNew:true,
    stats:['5"','3+','3+','4','4','1','1','10','4+'], role:'Troops', pts:78, min:10, max:20, ppm:8,
    wargear:[],
    composition:[
      { role:'Necron Warrior', count:10, wargear:['Gauss Reaper'] },
    ],
    abilities:['Reanimation Protocols: At end of phase — slain models may roll D6 on 5+ return with 1 wound',
               'Their Number is Legion: Unit of 20 never takes Morale tests',
               'New model: Gauss Reaper loadout — not available in index rules — use for matched play by agreement'] },

  { id:'nec_immortals', name:'Immortals',
    stats:['5"','3+','3+','4','4','1','1','10','3+'], role:'Troops', pts:85, min:5, max:10, ppm:17,
    wargear:[],
    composition:[
      { role:'Immortal', count:5, wargear:['Gauss Blaster'],
        options:[
          { group:'Weapon', choices:[
            { label:'Gauss Blaster', pts:0, default:true, weapons:['Gauss Blaster'] },
            { label:'Tesla Carbine', pts:0, weapons:['Tesla Carbine'], replaces:['Gauss Blaster'] },
          ]},
        ]},
    ],
    abilities:['Reanimation Protocols','Fearless: Auto-pass Morale tests'] },

  // ── ELITES ──────────────────────────────────────────────────────────
  { id:'nec_lychguard', name:'Lychguard',
    stats:['5"','3+','3+','5','5','2','2','10','3+'], role:'Elites', pts:130, min:5, max:10, ppm:26,
    wargear:[],
    composition:[
      { role:'Lychguard', count:5, wargear:['Hyperphase Sword','Dispersion Shield'],
        options:[
          { group:'Weapon', choices:[
            { label:'Hyperphase Sword & Dispersion Shield', pts:0, default:true },
            { label:'Warscythe', pts:0, weapons:['Warscythe'], replaces:['Hyperphase Sword','Dispersion Shield'] },
          ]},
        ]},
    ],
    abilities:['Reanimation Protocols',
               'Dispersion Shield: 4+ invulnerable save — on 6 redirect attack back at attacker',
               'Bodyguard: May intercept wounds for a nearby Overlord'] },

  { id:'nec_deathmarks', name:'Deathmarks',
    stats:['5"','3+','3+','4','4','1','1','10','3+'], role:'Elites', pts:95, min:5, max:10, ppm:19,
    wargear:[],
    composition:[
      { role:'Deathmark', count:5, wargear:['Synaptic Disintegrator'] },
    ],
    abilities:['Reanimation Protocols',
               'Hunters from Hyperspace: Deploy from deep strike — may immediately fire at one enemy unit that arrived from reserve this turn',
               'Ethereal Intercept: When enemy unit enters from reserve within 24" — these models may shoot as Interrupt action'] },

  { id:'nec_flayed_ones', name:'Flayed Ones',
    stats:['5"','3+','3+','4','4','1','3','10','4+'], role:'Elites', pts:57, min:5, max:20, ppm:11,
    wargear:[],
    composition:[
      { role:'Flayed One', count:5, wargear:['Flayer Claws'] },
    ],
    abilities:['Reanimation Protocols',
               'Infiltrate: Deploy anywhere more than 9" from enemy before first battle round',
               'Fear: Enemy units within 3" subtract 1 from Leadership'] },

  { id:'nec_triarch_praetorians', name:'Triarch Praetorians',
    stats:['8"','3+','3+','5','5','2','2','10','3+'], role:'Elites', pts:80, min:5, max:10, ppm:16,
    wargear:[],
    composition:[
      { role:'Praetorian', count:5, wargear:['Rod of Covenant','Voidblade'],
        options:[
          { group:'Weapon', choices:[
            { label:'Rod of Covenant & Voidblade', pts:0, default:true },
            { label:'Particle Caster & Voidblade', pts:0, weapons:['Particle Caster','Voidblade'], replaces:['Rod of Covenant'] },
          ]},
        ]},
    ],
    abilities:['Reanimation Protocols',
               'Eternal Custodians: May not be affected by Morale',
               'Deep Strike: Arrive 9"+ from enemy'] },

  { id:'nec_skorpekh_dest', name:'Skorpekh Destroyers',
    stats:['8"','3+','3+','5','5','3','3','10','3+'], role:'Elites', pts:120, min:3, max:6, ppm:40, isNew:true,
    wargear:[],
    composition:[
      { role:'Skorpekh Destroyer', count:3, wargear:['Hyperphase Threshers'] },
    ],
    abilities:['Reanimation Protocols',
               'Relentless Advance: May Advance and still charge',
               'Frenzied Charge: Add 2 to Attacks on turn it charges'] },

  { id:'nec_ophydian', name:'Ophydian Destroyers',
    stats:['10"','3+','3+','5','5','3','4','10','3+'], role:'Elites', pts:126, min:3, max:6, ppm:42, isNew:true,
    wargear:[],
    composition:[
      { role:'Ophydian Destroyer', count:3, wargear:['Hyperphase Reap-blades','Atomiser Beam'] },
    ],
    abilities:['Burrowing Assault: Deep strike — arrive 9"+ from enemy — cannot charge same turn',
               'Reanimation Protocols',
               'Destroyer Cult: Re-roll hit rolls of 1 within 6" of a Destroyer Cult Character'] },

  // ── FAST ATTACK ─────────────────────────────────────────────────────
  { id:'nec_destroyers', name:'Destroyers',
    stats:['10"','3+','3+','4','4','2','2','10','3+'], role:'Fast Attack', pts:140, min:3, max:6, ppm:47,
    wargear:[],
    composition:[
      { role:'Destroyer', count:3, wargear:['Gauss Cannon'],
        options:[
          { group:'Weapon', choices:[
            { label:'Gauss Cannon',      pts:0, default:true, weapons:['Gauss Cannon'] },
            { label:'Enmitic Annihilator',pts:0, weapons:['Enmitic Annihilator'], replaces:['Gauss Cannon'] },
          ]},
        ]},
    ],
    abilities:['Reanimation Protocols',
               'Destroyer Cult: Re-roll hit rolls of 1 within 6" of Destroyer Character',
               'Relentless: Move and fire Heavy weapons without penalty'] },

  { id:'nec_tomb_blades', name:'Tomb Blades',
    stats:['14"','3+','3+','4','4','2','1','10','3+'], role:'Fast Attack', pts:57, min:3, max:9, ppm:19,
    wargear:[],
    composition:[
      { role:'Tomb Blade', count:3, wargear:['Twin Gauss Blaster'],
        options:[
          { group:'Weapon', choices:[
            { label:'Twin Gauss Blaster', pts:0, default:true, weapons:['Twin Gauss Blaster'] },
            { label:'Twin Tesla Carbine', pts:0, weapons:['Twin Tesla Carbine'], replaces:['Twin Gauss Blaster'] },
            { label:'Particle Beamer',    pts:0, weapons:['Particle Beamer'],    replaces:['Twin Gauss Blaster'] },
          ]},
        ]},
    ],
    abilities:['Reanimation Protocols',
               'Hard to Hit: -1 to hit rolls targeting this unit if it moved',
               'Shadowloom: Unit may take Shadowloom for cover saves'] },

  // ── HEAVY SUPPORT ───────────────────────────────────────────────────
  { id:'nec_heavy_destroyers', name:'Heavy Destroyers',
    stats:['10"','3+','3+','4','4','2','2','10','3+'], role:'Heavy Support', pts:55, min:1, max:3, ppm:55,
    wargear:['Heavy Gauss Cannon'],
    abilities:['Reanimation Protocols','Destroyer Cult','Relentless'] },

  { id:'nec_lokhust_heavy', name:'Lokhust Heavy Destroyer',
    stats:['8"','3+','3+','5','5','4','2','10','3+'], role:'Heavy Support', pts:65, min:1, max:3, ppm:65, isNew:true,
    wargear:['Gauss Destructor'],
    abilities:['Reanimation Protocols',
               'Lethal Precision: Re-roll failed wound rolls against Vehicles and Monsters',
               'Destroyer Cult'] },

  { id:'nec_doomsday_ark', name:'Doomsday Ark',
    stats:['10"','5+','3+','6','7','11','3','10','3+'], role:'Heavy Support', pts:193, min:1, max:1, ppm:0,
    wargear:['Doomsday Cannon','Twin Gauss Flayer'],
    abilities:['Living Metal: Recover 1 wound at start of each turn',
               'Doomsday Cannon: If did not move — S14 AP-5 D6 damage',
               'Quantum Shielding: First damage 3+ attack reduced to 0'] },

  { id:'nec_annihilation_barge', name:'Annihilation Barge',
    stats:['12"','5+','3+','6','7','10','3','10','3+'], role:'Heavy Support', pts:130, min:1, max:1, ppm:0,
    wargear:['Tesla Destructor','Twin Tesla Cannon'],
    abilities:['Living Metal',
               'Tesla Destructor: Hit rolls of 6 make 2 additional hits',
               'Quantum Shielding'] },

  { id:'nec_triarch_stalker', name:'Triarch Stalker',
    stats:['8"','3+','3+','6','6','10','3','10','3+'], role:'Heavy Support', pts:130, min:1, max:1, ppm:0,
    wargear:['Heat Ray','Particle Shredder','Twin Heavy Gauss Cannon'],
    abilities:['Living Metal',
               'Targeting Relay: Enemy units hit by this model can be targeted by friendly Necrons regardless of line of sight until your next turn'] },

  { id:'nec_reanimator', name:'Canoptek Reanimator',
    stats:['8"','4+','4+','6','6','8','2','10','3+'], role:'Heavy Support', pts:100, min:1, max:1, ppm:0, isNew:true,
    wargear:['Atomiser Beam','Reanimation Tendrils'],
    abilities:['Reanimation Beam: Start of your turn — friendly Necrons Infantry within 9" improve Reanimation rolls by 1',
               'Unstoppable: Ignores penalty for moving and firing Heavy weapons',
               'Canoptek Construct: Does not benefit from Dynasty abilities — does not take Morale tests'] },

  // ── C'TAN SHARDS (Elites — one per detachment) ──────────────────────
  { id:'nec_shard_nightbringer', name:"C'tan Shard of the Nightbringer",
    stats:['8"','3+','3+','7','7','8','4','10','4+'], role:'Elites', pts:215, min:1, max:1, ppm:0,
    wargear:["Scythe of the Nightbringer (Shard)",'Gaze of Death (Shard)'],
    abilities:["Enslaved C'tan: 4+ invulnerable save — immune to psychic powers",
               'Cosmic Power (choose 1 per round): Gaze of Death — D3 mortal wounds to enemy within 12" | Living Lightning — D6 hits S5 AP-2 D1 within 18" | Writhing Worldscape — enemy units moving through terrain within 3" suffer D3 mortal wounds on 6+',
               "One per Detachment: Only one C'tan Shard of any kind per detachment"] },

  { id:'nec_shard_deceiver', name:"C'tan Shard of the Deceiver",
    stats:['8"','3+','3+','7','7','8','4','10','4+'], role:'Elites', pts:200, min:1, max:1, ppm:0,
    wargear:['Excoriating Talon','Dust Form'],
    abilities:["Enslaved C'tan: 4+ invulnerable save — immune to psychic powers",
               'Cosmic Power (choose 1 per round): Grand Illusion — before battle redeploy D3 friendly units | Transdimensional Displacement — move one enemy unit up to 6" | Souldread — enemy units within 6" subtract 2 from Leadership',
               "One per Detachment: Only one C'tan Shard of any kind per detachment"] },

  { id:'nec_shard_void_dragon', name:"C'tan Shard of the Void Dragon",
    stats:['10"','3+','3+','7','7','8','4','10','4+'], role:'Elites', pts:225, min:1, max:1, ppm:0, isNew:true,
    wargear:['Talons of the Void Dragon (Shard)','Betassic Ray'],
    abilities:["Enslaved C'tan: 4+ invulnerable save — immune to psychic powers",
               'Cosmic Power (choose 1 per round): Voltaic Storm — D6 hits S6 AP-2 D1 to enemy within 18" | Machine Curse — enemy Vehicle within 18" suffers D3 mortal wounds | Reassemble — friendly Necrons Vehicle within 6" regains D3 wounds',
               "One per Detachment: Only one C'tan Shard of any kind per detachment"] },

  // ── LORD OF WAR ─────────────────────────────────────────────────────
  { id:'nec_monolith', name:'Monolith',
    stats:['6"','5+','3+','8','8','20','3','10','3+'], role:'Lord of War', pts:310, min:1, max:1, ppm:0,
    wargear:['Four Gauss Flux Arcs','Particle Whip'],
    abilities:['Eternity Gate: Teleport one friendly Necrons unit from anywhere on the board to within 3"',
               'Living Metal: Recover 1 wound at start of each turn',
               'Quantum Shielding: First wound dealing 3+ damage reduced to 0',
               'Explodes: On 6 when destroyed — D6 mortal wounds within 6"'] },

  { id:'nec_tesseract_vault', name:'Tesseract Vault',
    stats:['8"','5+','3+','8','8','24','3','10','3+'], role:'Lord of War', pts:430, min:1, max:1, ppm:0,
    wargear:['Four Gauss Flux Arcs','Imprisoned Powers x2'],
    abilities:['Imprisoned Powers: Generates 2 Cosmic Powers per turn — choose from Antimatter Meteor / Seismic Assault / Transdimensional Thunderbolt / Vortex of Doom',
               'Quantum Shielding: First wound dealing 3+ damage reduced to 0',
               'Living Metal: Recover 1 wound at start of each turn',
               'Explodes: On 6 when destroyed — D6 mortal wounds within 2D6"'] },

  // ── FORTIFICATION ────────────────────────────────────────────────────
  { id:'nec_convergence', name:'Convergence of Dominion',
    stats:['-','-','-','-','7','4','-','-','3+'], role:'Fortification', pts:70, min:3, max:3, ppm:0, isNew:true,
    wargear:[],
    composition:[
      { role:'Starstele', count:3, wargear:['Starstele Network'] },
    ],
    abilities:['Starstele Network: While 2+ remain friendly Necrons within 6" add 1 to Reanimation rolls',
               'Transdimensional Recall: Once per game — remove one friendly Necrons Infantry unit and set it up within 3" of any Starstele'] },

  // ── NAMED CHARACTERS (additional) ───────────────────────────────────
  { id:'nec_imotekh', name:'Imotekh the Stormlord — Phaeron of the Sautekh', unique:true,
    stats:['6"','2+','2+','5','5','6','4','10','2+'], role:'HQ', pts:185, min:1, max:1, ppm:0,
    wargear:["Gauntlet of Fire","Staff of the Destroyer"],
    abilities:['Reanimation Protocols','Living Metal',
               '4+ invulnerable save',
               'Lord of the Storm: At start of each battle round roll D6 — on 4+ deal D3 mortal wounds to one enemy unit within 24"',
               'Hyperlogical Strategist: Once per game at start of your turn gain D3 additional Command Points',
               'Phaeron: Friendly Sautekh units within 6" auto-pass Morale — re-roll hit rolls of 1'] },

  { id:'nec_zahndrekh', name:'Nemesor Zahndrekh', unique:true,
    stats:['6"','3+','3+','4','4','5','3','10','3+'], role:'HQ', pts:155, min:1, max:1, ppm:0,
    wargear:['Hyperphase Sword','Voidblade',"Zahndrekh's Warscythe"],
    abilities:['Reanimation Protocols','Living Metal',
               '4+ invulnerable save',
               'Adaptive Tactics: At start of each of your turns grant one friendly Sautekh unit within 12" one of the following until start of next turn — Counter-offensive / Relentless / Defensive formation',
               'Phased Reinforcements: Friendly Sautekh units arriving from reserve may arrive within 6" of Zahndrekh'] },

  { id:'nec_obyron', name:'Vargard Obyron', unique:true,
    stats:['6"','2+','3+','4','4','4','3','10','3+'], role:'HQ', pts:100, min:1, max:1, ppm:0,
    wargear:['Ghostwalk Blade'],
    abilities:['Reanimation Protocols','Living Metal',
               '4+ invulnerable save',
               'The Vargard Protects: Roll D6 when Zahndrekh loses a wound while within 3" of Obyron — on 2+ Obyron suffers it instead',
               'Ghostwalk Mantle: At end of any phase if Zahndrekh is on the battlefield Obyron may immediately teleport to within 3" of Zahndrekh',
               'Cleaving Counterblow: Each time an enemy model attacks Obyron in the Fight phase and misses, immediately make one attack against that model'] },

  { id:'nec_orikan', name:'Orikan the Diviner', unique:true,
    stats:['6"','3+','3+','4','4','4','2','10','4+'], role:'HQ', pts:115, min:1, max:1, ppm:0,
    wargear:["The Stars Are Right (Staff)",'Temporal Staff'],
    abilities:['Reanimation Protocols','Living Metal',
               'Psyker: Mastery Level 1 — knows Smite + 1 Necron power',
               'The Stars Are Right: At start of battle roll D6 — on 4+ Orikan is Empowered this game gaining +1 to all stats and his staff becomes S8 AP-3 D3',
               'Temporal Snares: Enemy units within 3" subtract 1 from Advance and charge rolls',
               'Foresight: Once per game re-roll any single dice roll before seeing the result'] },

];
