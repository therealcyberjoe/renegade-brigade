// FACTION_DEATHWATCH — chapter-specific units + shared SM pool
// Must be loaded AFTER sm_shared.js
var FACTION_DEATHWATCH = [
  ...SM_SHARED_UNITS,

  { id:'dw_watch_master', name:'Watch Master',
    stats:['6"','2+','2+','4','4','5','4','9','3+'], role:'HQ', pts:130, min:1, max:1, ppm:0,
    wargear:["Guardian Spear",'Tome of the Rites'],
    abilities:['And They Shall Know No Fear','4+ invulnerable save',
               'Rites of Battle: Re-roll all failed hit rolls for Deathwatch within 6"',
               'Teleport Homer: Friendly Deathwatch units deep striking may arrive within 6" of this model'] },
  { id:'dw_artemis', name:'Watch Captain Artemis', unique:true,
    stats:['6"','2+','2+','4','4','5','4','9','3+'], role:'HQ', pts:130, min:1, max:1, ppm:0,
    wargear:['Hellfire Extremis','Power Sword','Stasis Bomb','Iron Halo'],
    abilities:['And They Shall Know No Fear',
               '4+ invulnerable save (Iron Halo)',
               'Rites of Battle: Re-roll hit rolls of 1 for Deathwatch within 6"',
               'Unstoppable Champion: Roll D6 when he loses a wound — on 6 the wound is ignored',
               'Hellfire Extremis: Combi-weapon — always wounds on 2+ except vs Vehicles (wounds on 6+)',
               'Stasis Bomb: Once per game — 6" Grenade 1, resolve with D6 mortal wounds — if it misses Artemis suffers the hit instead',
               'Vigilance Incarnate (Warlord): Once per battle at start of your turn change Mission Tactics'] },

  { id:'dw_kill_team_cassius', name:'Kill Team Cassius', unique:true,
    stats:['6"','3+','3+','4','4','2','2','9','3+'], role:'Elites', pts:355, min:11, max:11, ppm:0,
    wargear:[],
    composition:[
      { role:'Ortan Cassius — Ultramarines Chaplain', count:1, wargear:['Crozius Arcanum','Plasma Pistol'] },
      { role:'Vael Donatus — Sternguard Veteran', count:1, wargear:['Deathwatch Boltgun','Frag & Krak Grenades'] },
      { role:'Zameon Gydrael — Company Champion', count:1, wargear:['Power Sword','Storm Shield'] },
      { role:'Rodricus Grytt — Devastator', count:1, wargear:['Heavy Bolter','Bolt Pistol'] },
      { role:'Ennox Sorrlock — Sternguard Veteran', count:1, wargear:['Combi-grav','Frag & Krak Grenades'] },
      { role:'Antor Delassio — Assault Sergeant (Jump Pack)', count:1, wargear:['Chainsword','Bolt Pistol','Jump Pack'] },
      { role:'Edryc Setorax — Vanguard Veteran (Jump Pack)', count:1, wargear:['Lightning Claws','Jump Pack'] },
      { role:'Jensus Natorian — Librarian', count:1, wargear:['Force Sword','Bolt Pistol'] },
      { role:'Drenn Redblade — Space Wolves Blood Claw', count:1, wargear:['Chainsword','Bolt Pistol'] },
      { role:'Garran Branatar — Salamander Terminator', count:1, wargear:['Heavy Flamer','Meltagun','Power Fist','Teleport Homer'] },
      { role:'Jetek Suberei — White Scars Biker', count:1, wargear:['Twin Boltgun','Power Sword'] },
    ],
    abilities:['And They Shall Know No Fear',
               'Special Issue Ammunition: All bolt weapons may use one of four special ammo types once per battle',
               'Mixed Kill Team: Garran Branatar uses Terminator armour (2+ save, 5+ invuln) — Jetek Suberei is on a bike (14" Move, T5) — Delassio and Setorax have Jump Packs (12" Move)',
               'Psyker (Natorian): Mastery Level 1 — Smite + 1 Deathwatch power',
               'Teleport Homer (Branatar): Friendly Deathwatch deep strikers may arrive within 6" of this model'] },

  { id:'dw_kill_team', name:'Deathwatch Kill Team',
    stats:['6"','3+','3+','4','4','2','2','8','3+'], role:'Elites', pts:100, min:5, max:10, ppm:20,
    wargear:[],
    composition:[
      { role:'Watch Sergeant', count:1, wargear:['Boltgun','Bolt Pistol','Special Issue Ammunition'],
        options:[
          { group:'Melee', choices:[
            { label:'None',            pts:0, default:true },
            { label:'Power Sword',     pts:4, weapons:['Power Sword'],     replaces:[] },
            { label:'Thunder Hammer',  pts:12,weapons:['Thunder Hammer'],  replaces:['Boltgun'] },
          ]},
          { group:'Ranged', choices:[
            { label:'Boltgun',         pts:0, default:true },
            { label:'Storm Bolter',    pts:2, weapons:['Storm Bolter'],    replaces:['Boltgun'] },
            { label:'Combi-melta',     pts:10,weapons:['Combi-melta'],     replaces:['Boltgun'] },
          ]},
        ]},
      { role:'Frag Cannon Bearer', count:1, wargear:['Deathwatch Frag Cannon','Bolt Pistol','Special Issue Ammunition'] },
      { role:'Veteran', count:3, wargear:['Boltgun','Bolt Pistol','Special Issue Ammunition'],
        options:[
          { group:'Special', choices:[
            { label:'Boltgun',         pts:0, default:true },
            { label:'Storm Bolter',    pts:2, weapons:['Storm Bolter'],    replaces:['Boltgun'] },
            { label:'Plasma Gun',      pts:5, weapons:['Plasma Gun'],      replaces:['Boltgun'] },
            { label:'Meltagun',        pts:5, weapons:['Meltagun'],        replaces:['Boltgun'] },
          ]},
        ]},
    ],
    abilities:['And They Shall Know No Fear',
               'Special Issue Ammunition: Once per battle Bolters become AP-2 and re-roll wound rolls of 1',
               'Mixed Unit: Include models from any combination of Space Marine Chapters'] },

  { id:'dw_veterans', name:'Deathwatch Veterans',
    stats:['6"','3+','3+','4','4','1','2','8','3+'], role:'Elites', pts:85, min:5, max:10, ppm:17,
    wargear:[],
    composition:[
      { role:'Watch Sergeant', count:1, wargear:['Boltgun','Bolt Pistol','Special Issue Ammunition'],
        options:[
          { group:'Melee', choices:[
            { label:'None',            pts:0, default:true },
            { label:'Chainsword',      pts:0, weapons:['Chainsword'],      replaces:[] },
            { label:'Power Sword',     pts:4, weapons:['Power Sword'],     replaces:['Boltgun'] },
            { label:'Power Fist',      pts:9, weapons:['Power Fist'],      replaces:['Boltgun'] },
            { label:'Thunder Hammer',  pts:12,weapons:['Thunder Hammer'],  replaces:['Boltgun'] },
            { label:'Xenophase Blade', pts:5, weapons:['Xenophase Blade'], replaces:['Boltgun'] },
          ]},
          { group:'Ranged', choices:[
            { label:'Boltgun',         pts:0, default:true },
            { label:'Storm Bolter',    pts:2, weapons:['Storm Bolter'],    replaces:['Boltgun'] },
            { label:'Combi-melta',     pts:10,weapons:['Combi-melta'],     replaces:['Boltgun'] },
            { label:'Plasma Pistol',   pts:5, weapons:['Plasma Pistol'],   replaces:['Bolt Pistol'] },
          ]},
        ]},
      { role:'Veteran', count:4, wargear:['Boltgun','Bolt Pistol','Special Issue Ammunition'],
        options:[
          { group:'Special', choices:[
            { label:'Boltgun',         pts:0, default:true },
            { label:'Storm Bolter',    pts:2, weapons:['Storm Bolter'],    replaces:['Boltgun'] },
            { label:'Heavy Bolter',    pts:5, weapons:['Heavy Bolter'],    replaces:['Boltgun'] },
            { label:'Plasma Gun',      pts:5, weapons:['Plasma Gun'],      replaces:['Boltgun'] },
            { label:'Meltagun',        pts:5, weapons:['Meltagun'],        replaces:['Boltgun'] },
            { label:'Deathwatch Frag Cannon', pts:5, weapons:['Deathwatch Frag Cannon'], replaces:['Boltgun'] },
          ]},
        ]},
    ],
    abilities:['And They Shall Know No Fear','Special Issue Ammunition'] },

  { id:'dw_bikers', name:'Deathwatch Bikers',
    stats:['14"','3+','3+','4','5','2','2','8','3+'], role:'Fast Attack', pts:80, min:3, max:9, ppm:27,
    wargear:[],
    composition:[
      { role:'Biker Sergeant', count:1, wargear:['Twin Boltgun','Special Issue Ammunition'],
        options:[
          { group:'Melee', choices:[
            { label:'None',            pts:0, default:true },
            { label:'Power Sword',     pts:4, weapons:['Power Sword'],  replaces:[] },
            { label:'Thunder Hammer',  pts:12,weapons:['Thunder Hammer'],replaces:['Twin Boltgun'] },
          ]},
        ]},
      { role:'Deathwatch Biker', count:2, wargear:['Twin Boltgun','Special Issue Ammunition'] },
    ],
    abilities:['And They Shall Know No Fear','Special Issue Ammunition',
               'Turbo-boost: May Advance and charge in same turn'] },
  // ── FLYER ─────────────────────────────────────────────────────────────
  { id:'dw_corvus_blackstar', name:'Corvus Blackstar',
    stats:['20-60"','3+','3+','6','7','14','3','8','3+'], role:'Flyer', pts:236, min:1, max:1, ppm:0,
    wargear:['Twin Assault Cannon','2x Stormstrike Missile Launchers','Blackstar Cluster Launcher'],
    options:[
      { group:'Main Gun', choices:[
        { label:'Twin Assault Cannon',pts:0, default:true, weapons:['Twin Assault Cannon'] },
        { label:'Twin Lascannon',      pts:0, weapons:['Twin Lascannon'], replaces:['Twin Assault Cannon'] },
      ]},
      { group:'Missiles', choices:[
        { label:'2x Stormstrike Missiles',     pts:0,  default:true, weapons:['Stormstrike Missile Launcher'] },
        { label:'2x Blackstar Rocket Launchers',pts:16, weapons:['Blackstar Rocket Launcher'], replaces:['Stormstrike Missile Launcher'] },
      ]},
      { group:'Support', choices:[
        { label:'None',               pts:0, default:true },
        { label:'Infernum Halo-launcher',pts:10, weapons:['Infernum Halo-launcher'] },
        { label:'Auspex Array',       pts:10, weapons:['Auspex Array'] },
      ]},
      { group:'Extra', choices:[
        { label:'None',               pts:0, default:true },
        { label:'Hurricane Bolter',   pts:10, weapons:['Hurricane Bolter'] },
      ]},
    ],
    abilities:['And They Shall Know No Fear',
               'Airborne: Cannot charge or be charged — can only be targeted by units that can Fly or with Fly keyword',
               'Hard to Hit: -1 to hit rolls against this model',
               'Hover Jet: Before moving declare Hover — Move becomes 20" and loses Airborne and Hard to Hit until next Movement phase',
               'Assault Vehicle: Models disembarking may still charge this turn',
               'Transport: Carries 12 Deathwatch Infantry — Jump Pack/Terminator = 2 slots, Biker = 3 slots',
               'Blackstar Cluster Launcher: After this model moves pick one unit it flew over — roll D6 per model up to 10 — on 6 that unit suffers 1 mortal wound',
               'Auspex Array: Re-roll hit rolls of 1 against units that cannot Fly',
               'Infernum Halo-launcher: Enemy Fly units targeting this model subtract 1 from hit rolls',
               'Special Issue Ammunition: Bolt weapons on board may use special ammo',
               'Explodes: On 6 — D6 mortal wounds within 6"'] },

];
