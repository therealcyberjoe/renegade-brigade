const FACTION_DEATHWATCH = [
  { id:'dw_watch_master', name:'Watch Master',
    stats:['6"','2+','2+','4','4','5','4','9','3+'], role:'HQ', pts:130, min:1, max:1, ppm:0,
    wargear:["Guardian Spear",'Tome of the Rites'],
    abilities:['And They Shall Know No Fear','4+ invulnerable save',
               'Rites of Battle: Re-roll all failed hit rolls for Deathwatch within 6"',
               'Teleport Homer: Friendly Deathwatch units deep striking may arrive within 6" of this model'] },

  { id:'dw_kill_team', name:'Deathwatch Kill Team',
    stats:['6"','3+','3+','4','4','2','2','8','3+'], role:'Elites', pts:100, min:5, max:10, ppm:20,
    wargear:['Special Issue Ammunition','Storm Bolter'],
    abilities:['And They Shall Know No Fear',
               'Special Issue Ammunition: Once per battle Bolters become AP-2 and re-roll wound rolls of 1',
               'Mixed Unit: Include models from any combination of Space Marine Chapters — each may take unique wargear'] },

  { id:'dw_veterans', name:'Deathwatch Veterans',
    stats:['6"','3+','3+','4','4','1','2','8','3+'], role:'Elites', pts:85, min:5, max:10, ppm:17,
    wargear:['Boltgun','Bolt Pistol','Special Issue Ammunition'],
    abilities:['And They Shall Know No Fear','Special Issue Ammunition',
               'Xenophase Blade optional: Re-roll failed wound rolls against non-IMPERIUM units'] },

  { id:'dw_bikers', name:'Deathwatch Bikers',
    stats:['14"','3+','3+','4','5','2','2','8','3+'], role:'Fast Attack', pts:80, min:3, max:9, ppm:27,
    wargear:['Twin Boltgun','Special Issue Ammunition'],
    abilities:['And They Shall Know No Fear','Special Issue Ammunition',
               'Turbo-boost: May Advance and charge in same turn'] },

  { id:'dw_terminator', name:'Terminator Squad',
    stats:['5"','3+','3+','4','4','2','2','8','2+'], role:'Elites', pts:195, min:5, max:10, ppm:39,
    wargear:['Storm Bolter','Power Fist'],
    abilities:['And They Shall Know No Fear',
               'Teleport Strike: Deep strike 9"+ from enemy',
               'Terminator Armour: 5+ invulnerable save','Special Issue Ammunition'] },

  { id:'dw_intercessors', name:'Intercessor Squad',
    stats:['6"','3+','3+','4','4','2','2','7','3+'], role:'Troops', pts:85, min:5, max:10, ppm:17,
    wargear:['Bolt Rifles'],
    abilities:['And They Shall Know No Fear','Special Issue Ammunition'] },
];
