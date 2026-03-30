// 8th Edition Index Missions — Matched Play
// Standard battlefield: 6' x 4' (72" x 48")

const DEPLOYMENT_MAPS = [
  {
    id: 'dawn_of_war',
    name: 'Dawn of War',
    description: 'Armies deploy along the long table edges.',
    zone: '12" from the long table edge',
    noMansLand: '24" wide central strip',
    diagram: 'long_edge',
    notes: 'Most common deployment. Short distance between armies — favours aggressive lists.'
  },
  {
    id: 'hammer_and_anvil',
    name: 'Hammer and Anvil',
    description: 'Armies deploy along the short table edges.',
    zone: '12" from the short table edge',
    noMansLand: '48" between deployment zones',
    diagram: 'short_edge',
    notes: 'Long march across the table. Favours gunlines and fast-moving armies.'
  },
  {
    id: 'vanguard_strike',
    name: 'Vanguard Strike',
    description: 'Armies deploy in diagonally opposite corners.',
    zone: 'Corner quarter — 24" from the corner along each edge',
    noMansLand: 'Diagonal centre strip',
    diagram: 'diagonal',
    notes: 'Corner deployment. Flanking and reserves play are key.'
  },
  {
    id: 'spearhead_assault',
    name: 'Spearhead Assault',
    description: 'One army deploys along a short edge, the other in the opposite quarter.',
    zone: 'Attacker: 12" from short edge. Defender: opposite quarter.',
    noMansLand: 'Asymmetric — attacker has more ground to cover',
    diagram: 'asymmetric',
    notes: 'Attacker vs Defender feel. Aggressive armies deploy on the short edge.'
  },
  {
    id: 'frontline_assault',
    name: 'Frontline Assault',
    description: 'Both armies deploy close to the centre, 6" from a dividing line.',
    zone: '6" from the centre line (long edge orientation)',
    noMansLand: '12" total between armies',
    diagram: 'frontline',
    notes: 'Close quarters from turn one. Fast and brutal — favours combat armies.'
  },
  {
    id: 'search_and_destroy',
    name: 'Search and Destroy',
    description: 'Armies deploy in diagonally opposite table quarters.',
    zone: 'Own table quarter (12" from each edge)',
    noMansLand: 'Centre of the table',
    diagram: 'quarters',
    notes: 'Good all-round deployment. Objectives tend to be in the contested centre.'
  },
];

const ETERNAL_WAR_MISSIONS = [
  {
    id: 'retrieval_mission',
    number: 1,
    name: 'Retrieval Mission',
    description: 'Seize and hold four scattered objectives across the battlefield.',
    objectives: 4,
    objectivePlacement: 'Set up alternately, 6"+ from table edge, 12"+ from each other. No objective within 12" of another.',
    scoring: 'At end of game: 3 VPs per objective controlled.',
    secondaries: ['Slay the Warlord: 1 VP', 'First Blood: 1 VP', 'Linebreaker: 1 VP'],
    deployments: ['dawn_of_war', 'hammer_and_anvil', 'vanguard_strike'],
    maxVP: 12,
    notes: 'Classic objective mission. Troops with Objective Secured are essential.'
  },
  {
    id: 'no_mercy',
    number: 2,
    name: 'No Mercy',
    description: 'Destroy the enemy — score points for every unit slain.',
    objectives: 0,
    objectivePlacement: 'None.',
    scoring: '1 VP for each enemy unit that is destroyed (including units that flee).',
    secondaries: ['Slay the Warlord: 1 VP', 'First Blood: 1 VP', 'Linebreaker: 1 VP'],
    deployments: ['dawn_of_war', 'hammer_and_anvil', 'vanguard_strike'],
    maxVP: null,
    notes: 'Pure kill mission. Horde armies and cheap units score poorly here — every model matters. Taking large units and avoiding giving up kills is key.'
  },
  {
    id: 'the_scouring',
    number: 3,
    name: 'The Scouring',
    description: 'Six objectives of varying worth — one Superior (4 VPs), one Inferior (1 VP), four standard (2 VPs each).',
    objectives: 6,
    objectivePlacement: 'Set up 6 objectives. After deployment, randomly assign values: one 4VP (Superior), one 1VP (Inferior), the rest 2VP each.',
    scoring: 'At end of game: VPs equal to the value of each objective controlled. Fast Attack units have Objective Secured.',
    secondaries: ['Slay the Warlord: 1 VP', 'First Blood: 1 VP', 'Linebreaker: 1 VP'],
    deployments: ['dawn_of_war', 'hammer_and_anvil', 'vanguard_strike'],
    maxVP: 14,
    notes: 'Fast Attack units score objectives like Troops. Bike, cavalry and jump pack units are especially useful here.'
  },
  {
    id: 'big_guns_never_tire',
    number: 4,
    name: 'Big Guns Never Tire',
    description: 'Four objectives — Heavy Support units can contest them like Troops, and are worth bonus VPs when destroyed.',
    objectives: 4,
    objectivePlacement: 'Set up alternately, 6"+ from table edge, 12"+ from each other.',
    scoring: 'At end of game: 3 VPs per objective controlled. Additionally: 1 VP per enemy Heavy Support unit destroyed.',
    secondaries: ['Slay the Warlord: 1 VP', 'First Blood: 1 VP', 'Linebreaker: 1 VP'],
    deployments: ['dawn_of_war', 'hammer_and_anvil', 'vanguard_strike'],
    maxVP: 15,
    notes: 'Heavy Support units gain Objective Secured. Tanks and artillery are kingmakers. Also punishes opponents for bringing Heavy Support.'
  },
  {
    id: 'secure_and_control',
    number: 5,
    name: 'Secure and Control',
    description: 'Each player places one objective in their own deployment zone and fights to hold both.',
    objectives: 2,
    objectivePlacement: 'Each player places one objective anywhere in their own deployment zone.',
    scoring: 'At end of game: 3 VPs per objective controlled. 3 VP bonus if you control both.',
    secondaries: ['Slay the Warlord: 1 VP', 'First Blood: 1 VP', 'Linebreaker: 1 VP'],
    deployments: ['dawn_of_war', 'hammer_and_anvil', 'vanguard_strike'],
    maxVP: 9,
    notes: 'You must both defend and attack. Aggressive armies can win by taking both objectives. Defence in depth is key.'
  },
  {
    id: 'the_relic',
    number: 6,
    name: 'The Relic',
    description: 'A single priceless relic sits at the centre of the battlefield — seize it and carry it to safety.',
    objectives: 1,
    objectivePlacement: 'Place one objective (the Relic) at the centre of the battlefield.',
    scoring: 'Major Victory: carry the Relic off the table or control it at game end (4 VPs). Minor Victory: closest model to the Relic at game end (2 VPs). Opponent scores nothing if you achieve Major Victory.',
    secondaries: ['Slay the Warlord: 1 VP', 'First Blood: 1 VP', 'Linebreaker: 1 VP'],
    deployments: ['dawn_of_war', 'hammer_and_anvil', 'vanguard_strike'],
    maxVP: 7,
    notes: 'Only Infantry can pick up and carry the Relic. It moves up to 9" when carried. Fast infantry that can grab and run are invaluable.'
  },
];

const SECONDARY_OBJECTIVES = [
  {
    name: 'Slay the Warlord',
    vp: 1,
    desc: 'Score 1 VP if the enemy Warlord has been slain at the end of the game.'
  },
  {
    name: 'First Blood',
    vp: 1,
    desc: 'Score 1 VP if you were the first player to destroy an enemy unit (of any kind) during the game.'
  },
  {
    name: 'Linebreaker',
    vp: 1,
    desc: 'Score 1 VP if you have at least one model within the enemy\'s deployment zone at the end of the game.'
  },
];

const GAME_RULES = {
  turns: 'The game lasts 5 battle rounds unless one army is destroyed first. After turn 5, roll a D6: on 3+ play turn 6. After turn 6, roll again: on 4+ play turn 7.',
  boardSize: "Standard: 6'×4' (72\"×48\"). Smaller games may use 4'×4'.",
  commandPoints: [
    'Battalion Detachment: 3 CP',
    'Brigade Detachment: 9 CP',
    'Patrol Detachment: 0 CP',
    'Spearhead Detachment: 1 CP',
    'Outrider Detachment: 1 CP',
    'Vanguard Detachment: 1 CP',
    'Supreme Command: 1 CP',
  ],
  stratagems: [
    { name: 'Command Re-roll', cost: '1 CP', desc: 'Use after making any dice roll — re-roll one of the dice.' },
    { name: 'Counter-offensive', cost: '2 CP', desc: 'Use after an enemy unit has fought — immediately fight with one of your own units.' },
    { name: 'Insane Bravery', cost: '2 CP', desc: 'Use before taking a Morale test — automatically pass it.' },
  ],
};
