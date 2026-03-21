const FACTION_HARLEQUINS = [
  // ── HQ ──────────────────────────────────────────────────────────────
  { id:'har_shadowseer', name:'Shadowseer',
    stats:['8"','3+','3+','3','3','4','3','8','6+'], role:'HQ', pts:110, min:1, max:1, ppm:0,
    wargear:['Shuriken Pistol','Miststave','Hallucinogen Grenade Launcher'],
    abilities:['Psyker: Mastery Level 2 — knows Smite + 2 Phantasmancy powers',
               'Veil of Tears: WC6 — enemy units more than 12" away cannot target this unit or friendly Harlequins within 6"',
               'Laugh of Sorrows: WC5 — one enemy unit within 18" subtracts 1 from hit rolls until next Psychic phase',
               'Holo-Suit: 5+ invulnerable save',
               'Flip Belt: Ignore terrain penalties when moving'] },

  { id:'har_death_jester', name:'Death Jester',
    stats:['8"','3+','3+','3','3','4','4','8','6+'], role:'HQ', pts:75, min:1, max:1, ppm:0,
    wargear:['Shrieker Cannon'],
    abilities:['Shrieker Cannon: Assault 3 — S6 AP-2 D2 — on wound roll of 6 target unit must immediately take a Morale test',
               'Curtain Fall: When this model slays the last model in a unit the enemy player must choose a unit within 6" to Fall Back',
               'Holo-Suit: 5+ invulnerable save',
               'Flip Belt: Ignore terrain penalties when moving',
               'Lone Operative: Cannot be targeted by ranged attacks unless within 12" of attacker'] },

  { id:'har_troupe_master', name:'Troupe Master',
    stats:['8"','2+','3+','3','3','4','5','8','6+'], role:'HQ', pts:80, min:1, max:1, ppm:0,
    wargear:['Harlequin Caress','Shuriken Pistol'],
    options:[
      { group:'Melee', pick:1, choices:[
        { label:'Harlequin Caress', pts:0, default:true },
        { label:'Harlequin Kiss', pts:0 },
        { label:'Harlequin Blade', pts:0 },
      ]},
      { group:'Ranged', pick:1, choices:[
        { label:'Shuriken Pistol', pts:0, default:true },
        { label:'Fusion Pistol', pts:5 },
      ]},
    ],
    abilities:['Choreographer of War: Friendly Harlequin Troupes within 6" re-roll hit rolls of 1',
               'Lead the Dance: Once per Fight phase — one friendly Harlequin unit within 6" may immediately fight as a bonus action',
               'Holo-Suit: 5+ invulnerable save',
               'Flip Belt: Ignore terrain penalties when moving'] },

  // ── TROOPS ──────────────────────────────────────────────────────────
  { id:'har_troupe', name:'Harlequin Troupe',
    stats:['8"','3+','3+','3','3','1','3','8','6+'], role:'Troops', pts:78, min:5, max:12, ppm:13,
    wargear:['Harlequin Caress','Shuriken Pistol'],
    options:[
      { group:'Any model', pick:1, choices:[
        { label:'Harlequin Caress', pts:0, default:true },
        { label:'Harlequin Kiss', pts:3 },
        { label:'Harlequin Blade', pts:0 },
        { label:'Fusion Pistol', pts:5 },
      ]},
    ],
    abilities:["Flip Belts: Ignore terrain penalties when moving",
               'Holo-Suits: 5+ invulnerable save',
               "Cegorach's Jest: If unit charged add 1 to Attacks in Fight phase",
               'Player of the Dance: Each model may independently choose its melee weapon'] },

  // ── ELITES ──────────────────────────────────────────────────────────
  { id:'har_solitaire', name:'Solitaire',
    stats:['12"','2+','2+','3','3','5','6','10','6+'], role:'Elites', pts:115, min:1, max:1, ppm:0,
    wargear:['Harlequin Caress','Harlequin Kiss'],
    abilities:['Blitz: At start of Fight phase before any models fight — this model may immediately make a Normal move of up to 12" as long as it ends within 1" of an enemy',
               'Holo-Suit: 5+ invulnerable save — becomes 4+ in the Fight phase',
               'Flip Belt: Ignore terrain penalties when moving',
               'Impossible to Catch: Subtract 1 from all hit rolls targeting this model',
               'Touched by the Laughing God: At start of your Movement phase roll D6 — on 6 this model regains 1 lost wound',
               'Lone Operative: Cannot be targeted by ranged attacks unless within 12" of attacker'] },

  { id:'har_skyweaver', name:'Skyweavers',
    stats:['16"','3+','3+','3','4','2','3','8','6+'], role:'Fast Attack', pts:65, min:2, max:6, ppm:33,
    wargear:['Shuriken Cannon','Zephyrglaive'],
    options:[
      { group:'Ranged', pick:1, choices:[
        { label:'Shuriken Cannon', pts:0, default:true },
        { label:'Haywire Cannon', pts:5 },
      ]},
      { group:'Melee', pick:1, choices:[
        { label:'Zephyrglaive', pts:0, default:true },
        { label:'Star Bolas', pts:0 },
      ]},
    ],
    abilities:['Holo-Suit: 5+ invulnerable save',
               'Flip Belt: Ignore terrain penalties when moving',
               'Jink: 4+ invulnerable save if unit Advanced this turn',
               'Star Bolas: Assault 1 — S4 AP-1 D2 — on wound roll of 6 target cannot fire Overwatch until next turn'] },

  // ── HEAVY SUPPORT ───────────────────────────────────────────────────
  { id:'har_voidweaver', name:'Voidweaver',
    stats:['16"','5+','3+','5','6','6','3','8','5+'], role:'Heavy Support', pts:90, min:1, max:3, ppm:90,
    wargear:['Prismatic Cannon','2x Shuriken Cannon'],
    options:[
      { group:'Main Weapon', pick:1, choices:[
        { label:'Prismatic Cannon', pts:0, default:true },
        { label:'Haywire Cannon', pts:5 },
      ]},
    ],
    abilities:['Holo-Field: 5+ invulnerable save',
               'Prismatic Blur: -1 to hit rolls targeting this model if it moved',
               'Explodes: On 6 when destroyed — D3 mortal wounds within 3"'] },

  // ── DEDICATED TRANSPORT ─────────────────────────────────────────────
  { id:'har_starweaver', name:'Starweaver',
    stats:['16"','5+','3+','5','6','6','3','8','5+'], role:'Dedicated Transport', pts:85, min:1, max:1, ppm:0,
    wargear:['2x Shuriken Cannon'],
    abilities:['Transport: Carries 6 Harlequin models',
               'Holo-Field: 5+ invulnerable save',
               'Prismatic Blur: -1 to hit rolls targeting this model if it moved',
               'Explodes: On 6 when destroyed — D3 mortal wounds within 3"'] },
];
