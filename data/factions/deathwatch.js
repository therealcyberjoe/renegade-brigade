// FACTION_DEATHWATCH — chapter-specific units + shared SM pool
// Must be loaded AFTER sm_shared.js
const FACTION_DEATHWATCH = [
  ...SM_SHARED_UNITS,

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
    wargear:[],
    composition:[
      { role:'Sergeant', count:1, wargear:['Bolt Rifle','Bolt Pistol'],
        options:[
          { group:'Melee', choices:[
            { label:'None',        pts:0, default:true },
            { label:'Chainsword',  pts:0, weapons:['Chainsword'],  replaces:[] },
            { label:'Power Sword', pts:4, weapons:['Power Sword'], replaces:['Bolt Rifle'] },
          ]},
          { group:'Bolt Rifle', choices:[
            { label:'Bolt Rifle',         pts:0, default:true, weapons:['Bolt Rifle'] },
            { label:'Auto Bolt Rifle',    pts:0, weapons:['Auto Bolt Rifle'],    replaces:['Bolt Rifle'] },
            { label:'Stalker Bolt Rifle', pts:0, weapons:['Stalker Bolt Rifle'], replaces:['Bolt Rifle'] },
          ]},
        ]},
      { role:'Intercessor', count:4, wargear:['Bolt Rifle','Bolt Pistol'] },
    ],
    abilities:['And They Shall Know No Fear','Special Issue Ammunition'] },
];
