const FACTION_CHAOS_DAEMONS = [
  // ── HQ ──────────────────────────────────────────────────────────────
  { id:'cd_bloodthirster', name:'Bloodthirster',
    stats:['10"','2+','4+','8','8','14','6','10','4+'], role:'HQ', pts:270, min:1, max:1, ppm:0,
    wargear:['Axe of Khorne','Mighty Lash of Khorne','Warp-forged Armour'],
    abilities:['Daemonic: 4+ invulnerable save',
               'Rage Incarnate: Add 1 to Attacks for each wound lost',
               "Drawn in for the Kill: Enemy units within 8\" subtract 1 from Leadership",
               'Daemonic Ritual: Standard Chaos summoning rule'] },

  { id:'cd_lord_change', name:'Lord of Change',
    stats:['15"','3+','2+','6','6','16','3','10','4+'], role:'HQ', pts:240, min:1, max:1, ppm:0,
    wargear:['Baleful Sword','Infernal Gateway'],
    abilities:['Daemonic: 4+ invulnerable save','Psyker: Mastery Level 3',
               'Mastery of Magic: Re-roll any dice for Psychic tests once per phase',
               'Daemonic Ritual'] },

  { id:'cd_great_unclean', name:'Great Unclean One',
    stats:['5"','3+','3+','7','8','18','5','9','4+'], role:'HQ', pts:270, min:1, max:1, ppm:0,
    wargear:['Bilesword','Bileblade','Putrid Cloud'],
    abilities:['Daemonic: 4+ invulnerable save',
               'Disgustingly Resilient: Roll D6 each wound — on 5+ ignore it',
               'Psyker: Mastery Level 2','Daemonic Ritual'] },

  { id:'cd_keeper', name:'Keeper of Secrets',
    stats:['14"','2+','3+','6','6','12','6','10','4+'], role:'HQ', pts:240, min:1, max:1, ppm:0,
    wargear:['Witstealer Sword','Shining Aegis'],
    abilities:['Daemonic: 4+ invulnerable save',
               'Delightful Agonies: Friendly Slaanesh Daemons within 6" have 5+ invulnerable save',
               'Daemonic Ritual'] },

  // ── NAMED CHARACTERS ────────────────────────────────────────────────
  { id:'cd_belakor', name:"Be'lakor, The Dark Master",
    stats:['14"','2+','2+','8','8','18','7','10','4+'], role:'Lord of War', pts:410, min:1, max:1, ppm:0, isNew:true,
    wargear:['Blade of Shadows','Daemonic Claws'],
    abilities:['The Dark Master: 4+ invulnerable save — cannot be affected by enemy aura abilities',
               'Shadow Form: Subtract 1 from hit rolls targeting Be\'lakor',
               'Daemonic Ritual',
               'Lord of Torment: Once per battle round when enemy fails Morale within 18" add D3 casualties',
               "Psyker: Mastery Level 2",
               "Living Shadow (Warlord): Enemy units cannot use abilities that trigger at start of phases within 12\" unless they pass Leadership test"] },

  { id:'cd_skarbrand', name:'Skarbrand the Exiled',
    stats:['8"','2+','5+','8','8','14','8','10','4+'], role:'Lord of War', pts:300, min:1, max:1, ppm:0, unique:true,
    wargear:['Slaughter','Carnage'],
    abilities:['Roar of Total Rage: All enemy units within 8" subtract 2 from Leadership',
               'Daemonic: 4+ invulnerable save',
               'Total Carnage: Attacks increase by 1 for each wound lost (max +4)',
               'Hatred Incarnate: Cannot use psychic powers or Leadership abilities — only charges and fights'] },

  { id:'cd_epidemius', name:'Epidemius — Tallyman of Nurgle',
    stats:['5"','4+','4+','3','4','4','2','9','5+'], role:'HQ', pts:95, min:1, max:1, ppm:0, unique:true,
    wargear:['Balesword','Nurgling Bodyguard'],
    abilities:['Disgustingly Resilient','5+ invulnerable save',
               'Tally of Pestilence: Track kills from Nurgle units — at milestones gain army-wide buffs',
               'Tally Bonuses: At 7/14/21/28 kills — +1T / wound regeneration / AP improvement / mortal wound proc'] },

  // ── TROOPS ──────────────────────────────────────────────────────────
  { id:'cd_bloodletters', name:'Bloodletters',
    stats:['6"','3+','4+','4','3','1','1','7','5+'], role:'Troops', pts:90, min:10, max:30, ppm:9,
    wargear:[],
    composition:[
      { role:'Bloodletter', count:10, wargear:['Hellblades'] },
    ],
    abilities:['Daemonic: 5+ invulnerable save',
               'Locus of Fury: Friendly Khorne Daemons within 6" of Herald re-roll charge rolls',
               'Daemonic Instability: If more wounds lost than Leadership roll 2D6 — over Leadership remove that many models',
               'Unstoppable Ferocity: Add 1 to Attacks if unit has 20+ models'] },

  { id:'cd_plaguebearers', name:'Plaguebearers',
    stats:['5"','4+','4+','3','4','1','1','7','5+'], role:'Troops', pts:90, min:10, max:30, ppm:9,
    wargear:[],
    composition:[
      { role:'Plaguebearer', count:10, wargear:['Plaguesword','Daemonic Plague Bell'] },
    ],
    abilities:['Daemonic: 5+ invulnerable save',
               'Disgustingly Resilient: Roll D6 each wound — on 5+ ignore it',
               'Cloud of Flies: Subtract 1 from hit rolls targeting this unit in Shooting phase',
               'Daemonic Instability'] },

  { id:'cd_daemonettes', name:'Daemonettes',
    stats:['7"','3+','3+','3','3','1','2','7','5+'], role:'Troops', pts:80, min:10, max:30, ppm:8,
    wargear:[],
    composition:[
      { role:'Daemonette', count:10, wargear:['Piercing Claws'] },
    ],
    abilities:['Daemonic: 5+ invulnerable save',
               'Quicksilver Swiftness: Always fight first regardless of who charged',
               'Daemonic Instability'] },

  { id:'cd_horrors', name:'Pink Horrors',
    stats:['6"','4+','4+','3','3','1','1','7','6+'], role:'Troops', pts:90, min:10, max:30, ppm:9,
    wargear:[],
    composition:[
      { role:'Iridescent Horror', count:1, wargear:['Magical Flames'] },
      { role:'Pink Horror', count:9, wargear:['Magical Flames'] },
    ],
    abilities:['Daemonic: 5+ invulnerable save',
               'Split: When Pink Horror is slain replace with 2 Blue Horrors (free)',
               'Daemonic Instability',
               'Psyker: Unit of 10+ may attempt to Deny the Witch once per phase'] },

  // ── ELITES ──────────────────────────────────────────────────────────
  { id:'cd_bloodcrushers', name:'Bloodcrushers',
    stats:['10"','3+','4+','5','5','3','3','8','3+'], role:'Elites', pts:120, min:3, max:9, ppm:40,
    wargear:[],
    composition:[
      { role:'Bloodcrusher', count:3, wargear:['Hellblade','Juggernaut'] },
    ],
    abilities:['Daemonic: 5+ invulnerable save',
               'Daemonic Instability',
               'Brass Stampede: On charge deal D3 mortal wounds to all units within 1"'] },

  { id:'cd_flamers', name:'Flamers of Tzeentch',
    stats:['9"','3+','3+','4','4','2','2','7','5+'], role:'Fast Attack', pts:92, min:3, max:9, ppm:31,
    wargear:[],
    composition:[
      { role:'Flamer of Tzeentch', count:3, wargear:['Warpflame'] },
    ],
    abilities:['Daemonic: 5+ invulnerable save',
               'Warpflame: Auto-hitting flamer — units that suffer unsaved wounds must pass Toughness test or suffer D3 mortal wounds',
               'Daemonic Instability'] },

  { id:'cd_screamers', name:'Screamers of Tzeentch',
    stats:['16"','3+','3+','4','4','2','3','7','5+'], role:'Fast Attack', pts:90, min:3, max:9, ppm:30,
    wargear:[],
    composition:[
      { role:'Screamer of Tzeentch', count:3, wargear:['Lamprey Bite','Slashing Attack'] },
    ],
    abilities:['Daemonic: 5+ invulnerable save',
               'Daemonic Instability',
               'Slashing Attack: During Movement phase deal 1 mortal wound to each unit passed over on 4+'] },

  // ── HEAVY SUPPORT ───────────────────────────────────────────────────
  { id:'cd_skull_cannon', name:'Skull Cannon',
    stats:['8"','3+','3+','7','7','8','4','8','4+'], role:'Heavy Support', pts:130, min:1, max:1, ppm:0,
    wargear:['Burning Skulls','Gnashing Maw'],
    abilities:['Daemonic: 5+ invulnerable save',
               'Burning Skulls: S8 AP-2 D3 — units hit by skull fire subtract 1 from hit rolls until next turn'] },

  { id:'cd_soul_grinder', name:'Soul Grinder',
    stats:['10"','3+','3+','8','8','18','4','8','3+'], role:'Heavy Support', pts:175, min:1, max:1, ppm:0,
    wargear:['Warpsword','Phlegm Bombardment'],
    abilities:['Daemonic: 5+ invulnerable save',
               'Phlegm Bombardment: Indirect Fire S8 AP-2 D3',
               'Explodes: On 6 when destroyed — D6 mortal wounds within 6"'] },
];
