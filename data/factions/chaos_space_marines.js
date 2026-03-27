// Must be loaded AFTER csm_shared.js
const FACTION_CHAOS_SPACE_MARINES = [
  ...CSM_SHARED_UNITS,

  // ── HQ ──────────────────────────────────────────────────────────────
  // ── NAMED CHARACTERS ────────────────────────────────────────────────
  { id:'csm_abaddon', name:'Abaddon the Despoiler',
    stats:['6"','2+','2+','5','5','8','5','10','2+'], role:'Lord of War', pts:285, min:1, max:1, ppm:0, unique:true,
    wargear:["Drach'nyen",'Talon of Horus','Black Plate'],
    abilities:['Warmaster: Friendly Chaos Space Marines within 6" re-roll all failed hit rolls',
               'Four-Armed Terror: Once per Fight phase make 2 additional attacks with the Talon of Horus',
               'Black Crusader: Friendly Chaos units within 6" ignore Morale','4+ invulnerable save',
               'Marks of All Chaos: Counts as bearing all four Marks simultaneously'] },

  { id:'csm_huron', name:'Huron Blackheart',
    stats:['6"','2+','2+','4','4','5','4','9','3+'], role:'HQ', pts:115, min:1, max:1, ppm:0, unique:true,
    wargear:["The Tyrant's Claw","Blackheart's Spitespitter",'The Hamadrya'],
    abilities:['Psyker: Mastery Level 1',
               'Master of the Renegades: Friendly Chaos units within 6" re-roll hit rolls of 1',
               'A Bitter Taste of Victory: Restore 1 wound each time a model is slain within 6"',
               '4+ invulnerable save'] },

  { id:'csm_vashtorr', name:'Vashtorr the Arkifane',
    stats:['12"','2+','2+','7','7','14','6','10','3+'], role:'Lord of War', pts:380, min:1, max:1, ppm:0, unique:true, isNew:true,
    wargear:['The Soul Shrive',"Arkifane's Claw",'Daemonforge Blast'],
    abilities:['4+ invulnerable save',
               'Dark Artificer: End of each Movement phase — one friendly Chaos Vehicle within 3" regains D3 wounds',
               "The Vaults of Uhlghul: Once per battle — one enemy Vehicle within 1\" suffers D6 mortal wounds on 3+",
               'Lord of the Forge: Friendly Chaos Vehicles within 9" re-roll hit rolls of 1'] },

  // ── TROOPS ──────────────────────────────────────────────────────────
  { id:'csm_acc_cultists', name:'Accursed Cultists',
    stats:['6"','3+','5+','4','4','2','3','7','5+'], role:'Troops', pts:60, min:5, max:20, ppm:12, isNew:true,
    wargear:[],
    composition:[
      { role:'Accursed Cultist', count:5, wargear:['Fleshy Appendages'] },
    ],
    abilities:['Mutant Resilience: Re-roll Morale tests — each model that dies on 5+ does not count as a casualty for Morale',
               'Tide of Corruption: For each 5 models in this unit enemy within 1" subtract 1 from Leadership',
               'Torment upgrade available: W3 S5 T5 at +5pts per model'] },

  { id:'csm_dark_commune', name:'Dark Commune',
    stats:['6"','3+','3+','3','3','3','2','8','5+'], role:'HQ', pts:55, min:5, max:5, ppm:0, isNew:true,
    wargear:[],
    composition:[
      { role:'Demagogue', count:1, wargear:['Autopistol','Brutal Assault Weapon'] },
      { role:'Cultist', count:4, wargear:['Autopistol','Brutal Assault Weapon'] },
    ],
    abilities:['Treated as a single CHARACTER for targeting purposes',
               "Unholy Invocations: Each turn grant one friendly Chaos Cultists unit within 12\" one of: +1 Attack / auto-pass Morale / 5+ invulnerable save",
               'Chaos Icon: Friendly Chaos Cultists within 6" re-roll failed charge rolls'] },

  // ── ELITES ──────────────────────────────────────────────────────────
  // ── FAST ATTACK ─────────────────────────────────────────────────────
  // ── HEAVY SUPPORT ───────────────────────────────────────────────────
  // ── DEDICATED TRANSPORT ─────────────────────────────────────────────
  // ── NARRATIVE RETINUE — RULES AUDIT PENDING ─────────────────────────
  { id:'csm_masters_maelstrom', name:"Huron's Masters of the Maelstrom", unique:true, isNew:true,
    stats:['6"','3+','3+','4','4','*','*','9','3+'], role:'HQ', pts:240, min:6, max:6, ppm:0,
    wargear:[],
    composition:[
      { role:'Huron Blackheart', count:1, wargear:["Tyrant's Claw",'The Hamadrya','Bolter'] },
      { role:'Garlon Souleater (Sorcerer-Librarian)', count:1, wargear:['Force Staff','Plasma Pistol'] },
      { role:'Garreon the Corpsemaster (Lord-Apothecary)', count:1, wargear:['Narthecium','Chainsword'] },
      { role:'Katar Garrix (Champion)', count:1, wargear:['Power Sword','Bolt Pistol'] },
      { role:'The Enforcer (Tarellian Bounty Hunter)', count:1, wargear:['Tarellian Weapon'] },
      { role:'Captain Sargotta', count:1, wargear:['Bolt Pistol','Power Sword'] },
    ],
    abilities:['Veterans of the Long War',
               'Red Corsairs: Huron Blackheart ability — Psychic powers from the Hamadrya familiar',
               'Only one MASTERS OF THE MAELSTROM unit may be taken per army',
               'NOTE: Rules audit pending — this is a 10th edition release (Feb 2026) — stats and points require full verification'] },

];
