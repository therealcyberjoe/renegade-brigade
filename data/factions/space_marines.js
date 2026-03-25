// Space Marines — shared units + chapter-specific named characters
// Must be loaded AFTER sm_shared.js
const FACTION_SPACE_MARINES = [
  ...SM_SHARED_UNITS,

  // ── NAMED CHARACTERS ────────────────────────────────────────────────
  { id:'sm_guilliman', name:'Roboute Guilliman',
    stats:['6"','2+','2+','6','6','9','5','10','2+'], role:'Lord of War', pts:360, min:1, max:1, ppm:0, unique:true, isNew:true,
    wargear:["Hand of Dominion","Emperor's Sword","Armour of Fate"],
    abilities:['Spiritual Rites: Re-roll all failed hit and wound rolls for friendly Ultramarines within 6"',
               'Adept of the Codex: +1 CP each battle round','4+ invulnerable save',
               'Regenerate: Roll D6 at start of each turn — on 4+ regain D3 lost wounds',
               'Ultramarines only'] },

  { id:'sm_calgar', name:'Marneus Calgar',
    stats:['6"','2+','2+','5','5','7','5','10','2+'], role:'HQ', pts:220, min:1, max:1, ppm:0, unique:true, isNew:true,
    wargear:['Gauntlets of Ultramar','Artificer Armour'],
    abilities:['Chapter Master: Re-roll all failed hit rolls for friendly Ultramarines within 6"',
               'God of War: Once per battle round use a Stratagem for 0 CP','4+ invulnerable save',
               'Ultramarines only'] },

  { id:'sm_shrike', name:'Kayvaan Shrike',
    stats:['12"','2+','2+','4','4','5','6','9','3+'], role:'HQ', pts:110, min:1, max:1, ppm:0, unique:true, isNew:true,
    wargear:['Blackshroud','Master-crafted Bolter','Jump Pack'],
    abilities:['Master of Shadows: This model and friendly units within 3" always count as in cover',
               'Strike from the Shadows: Deploy anywhere more than 9" from enemy at end of first Movement phase',
               'Raven Guard only'] },

  { id:'sm_kantor', name:'Pedro Kantor',
    stats:['6"','2+','2+','4','4','5','5','10','2+'], role:'HQ', pts:130, min:1, max:1, ppm:0, unique:true, isNew:true,
    wargear:["Dorn's Arrow","Duty's Burden"],
    abilities:["Inspiring Presence: Friendly Crimson Fists within 6\" gain +1 Attack",
               'Hold the Line: Friendly units within 12" auto-pass Morale',
               '4+ invulnerable save','Crimson Fists only'] },

  { id:'sm_lysander', name:'Lysander',
    stats:['5"','2+','3+','5','5','6','4','9','2+'], role:'HQ', pts:175, min:1, max:1, ppm:0, unique:true, isNew:true,
    wargear:['The Fist of Dorn','Storm Shield'],
    abilities:['Inspiring Presence','3+ invulnerable save from Storm Shield',
               'Eternal Warrior: Reduce all damage by 1 (min 1)','Imperial Fists only'] },

  { id:'sm_khan', name:"Kor'sarro Khan",
    stats:['14"','2+','2+','4','4','5','5','9','3+'], role:'HQ', pts:120, min:1, max:1, ppm:0, isNew:true,
    wargear:['Moonfang','Bolt Pistol','Jetbike'],
    abilities:["Drawn in for the Kill: Re-roll failed charge rolls for friendly White Scars within 6\"",
               'Turbo-boost: Advance and charge same turn','White Scars only'] },

  { id:'sm_lt_titus', name:'Lieutenant Titus',
    stats:['6"','2+','2+','4','4','5','5','9','3+'], role:'HQ', pts:95, min:1, max:1, ppm:0, unique:true, isNew:true,
    wargear:['The Might of Ultramar','Master-crafted Bolter'],
    abilities:['And They Shall Know No Fear','3+ invulnerable save',
               'Indomitable Will: Auto-pass Morale — immune to Leadership reduction',
               'Ultramarines only'] },
];
