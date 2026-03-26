// Army Rules — core faction special rules shown in list exports
// Each entry: { summary, rules: [{ name, description }] }

const ARMY_RULES = {

  space_marines: {
    summary: 'Adeptus Astartes — And They Shall Know No Fear, Chapter Tactics',
    rules: [
      { name: 'And They Shall Know No Fear', desc: 'This unit automatically passes Morale tests.' },
      { name: 'Chapter Tactics', desc: 'All units share a Chapter keyword. Choose one of the following Chapter Tactics for your army: Ultramarines (re-roll 1s to hit), Imperial Fists (re-roll 1s to wound vs buildings/fortifications), Salamanders (re-roll 1s to wound), White Scars (advance and charge), Raven Guard (-1 to hit when 12"+ away), Iron Hands (Feel No Pain 6+).' },
      { name: 'Combat Doctrines', desc: 'Each battle round your army automatically moves through doctrines: Round 1 — Devastator (heavy weapons +1 to hit if did not move). Round 2 — Tactical (+1 AP on unmodified 6 to wound). Round 3+ — Assault (+1 attack on charge).' },
    ]
  },

  blood_angels: {
    summary: 'Blood Angels — Red Thirst, Black Rage, Death Company',
    rules: [
      { name: 'And They Shall Know No Fear', desc: 'This unit automatically passes Morale tests.' },
      { name: 'Red Thirst', desc: 'Add 1 to Advance and charge rolls for Blood Angels units. Units that charge gain +1 to hit in the Fight phase on unmodified 6s.' },
      { name: 'Black Rage', desc: 'Death Company units re-roll all failed hit and wound rolls in the Fight phase. They must charge if able and must always consolidate towards the nearest enemy.' },
      { name: 'Combat Doctrines', desc: 'As Space Marines.' },
    ]
  },

  dark_angels: {
    summary: 'Dark Angels — Grim Resolve, Deathwing, Ravenwing',
    rules: [
      { name: 'And They Shall Know No Fear', desc: 'This unit automatically passes Morale tests.' },
      { name: 'Grim Resolve', desc: 'Dark Angels units never suffer the penalty to hit rolls for moving and firing Heavy weapons. Re-roll Morale tests of 1.' },
      { name: 'Deathwing', desc: 'Deathwing units (Terminators) may deep strike and gain Teleport Strike.' },
      { name: 'Ravenwing', desc: 'Ravenwing units (Bikers) advance and charge in the same turn. Gain Jink (5++ if advanced).' },
    ]
  },

  space_wolves: {
    summary: 'Space Wolves — Counter-charge, Sagas, Wulfen',
    rules: [
      { name: 'And They Shall Know No Fear', desc: 'This unit automatically passes Morale tests.' },
      { name: 'Counter-charge', desc: 'Space Wolves units may use Heroic Intervention and move up to 3" even if not a Character.' },
      { name: 'Hunters Unleashed', desc: 'When a unit fails a charge and the opponent consolidates into them, Space Wolves units that were charged may immediately pile in and attack.' },
      { name: 'Sagas', desc: 'Space Wolf Characters may take a Saga (Warlord Trait). Fulfilling the Saga\'s conditions during the battle grants an additional bonus.' },
    ]
  },

  grey_knights: {
    summary: 'Grey Knights — Teleport Strike, Psybolt Ammunition, Brotherhood of Psykers',
    rules: [
      { name: 'And They Shall Know No Fear', desc: 'This unit automatically passes Morale tests.' },
      { name: 'Teleport Strike', desc: 'All Grey Knights units can deep strike, arriving more than 9" from any enemy model.' },
      { name: 'Brotherhood of Psykers', desc: 'Every Grey Knights model is a Psyker. Units may manifest 1 psychic power per turn using the Force Hood discipline in addition to Smite.' },
      { name: 'Daemon Hunters', desc: 'Grey Knights re-roll all failed hit rolls against DAEMON units.' },
    ]
  },

  deathwatch: {
    summary: 'Deathwatch — Kill Teams, Oath of Moment, Special Issue Ammunition',
    rules: [
      { name: 'And They Shall Know No Fear', desc: 'This unit automatically passes Morale tests.' },
      { name: 'Oath of Moment', desc: 'Once per battle round declare a target unit as the Oath of Moment target. All Deathwatch units re-roll all failed hit rolls against that unit until the start of your next turn.' },
      { name: 'Special Issue Ammunition', desc: 'Once per battle, Deathwatch Bolter weapons become AP-2 and re-roll failed wound rolls for one shooting phase.' },
    ]
  },

  black_templars: {
    summary: 'Black Templars — Righteous Zeal, Vows, Abhor the Witch',
    rules: [
      { name: 'And They Shall Know No Fear', desc: 'This unit automatically passes Morale tests.' },
      { name: 'Vow of Crusade', desc: 'Re-roll all failed charge rolls.' },
      { name: 'Righteous Zeal', desc: 'Each time a friendly unit suffers casualties, immediately move D6" towards the nearest enemy.' },
      { name: 'Abhor the Witch', desc: 'Black Templars may not include Psykers. They automatically pass Deny the Witch tests against any power targeting them.' },
    ]
  },

  astra_militarum: {
    summary: 'Astra Militarum — Voice of Command, Regiment Doctrines, Conscripts',
    rules: [
      { name: 'Voice of Command', desc: 'Company Commanders and other officers may issue Orders each turn. Orders affect one friendly unit within 6" and allow actions such as "Move Move Move!" (Advance + shoot), "Fix Bayonets!" (fight twice), or "First Rank Fire!" (extra shots).' },
      { name: 'Regiment Doctrines', desc: 'Choose a regiment for your army. Examples: Cadian (re-roll 1s when stationary), Catachan (+1 attack in Fight phase), Valhallan (units can still fire when falling back).' },
      { name: 'Grinding Advance', desc: 'Tank Commanders and Leman Russ tanks may fire all weapons twice if they did not move or moved under half speed.' },
    ]
  },

  adeptus_mechanicus: {
    summary: 'Adeptus Mechanicus — Canticles of the Omnissiah, Dogmas, Doctrina Imperatives',
    rules: [
      { name: 'Canticles of the Omnissiah', desc: 'At the start of each battle round choose or roll for one canticle affecting all friendly units: Invocation of Machine Might (+1 S), Benediction of the Omnissiah (re-roll 1s to hit), Chant of the Remorseless Fist (+1 A), Shroudpsalm (units in cover get -1 to hit), Litany of the Electromancer (enemy within 1" suffer mortal wounds on 6), Incantation of the Iron Soul (auto-pass Morale).' },
      { name: 'Forge World Dogma', desc: 'Choose a Forge World for your army granting a unique ability. Mars (re-roll 1s to hit for Vehicles), Graia (deny once per phase), Metalica (advance and charge).' },
    ]
  },

  sisters_of_battle: {
    summary: 'Adepta Sororitas — Acts of Faith, Miracle Dice, Shield of Faith',
    rules: [
      { name: 'Shield of Faith', desc: 'All Adepta Sororitas units have a 6+ invulnerable save. Psykers targeting Sororitas units subtract 1 from their Psychic tests.' },
      { name: 'Acts of Faith', desc: 'Once per phase, one unit may perform an Act of Faith by spending a Miracle dice. The Act of Faith grants a powerful bonus (extra attack, auto-pass save, free move, etc.) without rolling.' },
      { name: 'Miracle Dice', desc: 'Gain Miracle dice at the start of each battle round (1 die) and whenever a unit is destroyed (1 die), a unit completes an Act of Faith, or other triggers. Roll these dice and set them aside — their results are fixed and can be spent as Acts of Faith.' },
      { name: 'Sacred Rites', desc: 'At the start of the game, roll or choose 2 Sacred Rites from the table. These provide army-wide bonuses for the entire battle such as +1 to Advance rolls, re-rolling 1s to wound, or ignoring AP-1.' },
    ]
  },

  adeptus_custodes: {
    summary: 'Adeptus Custodes — Aegis of the Emperor, Shield Host, Ka\'tah Stances',
    rules: [
      { name: 'Aegis of the Emperor', desc: 'All Adeptus Custodes units have a 5+ invulnerable save. Roll a D6 each time a Custodes model suffers a mortal wound in the Psychic phase — on a 6 the wound is ignored.' },
      { name: 'The Emperor\'s Chosen', desc: 'Units with this ability improve their invulnerable save by 1 (to a maximum of 3+).' },
      { name: 'Shield Host', desc: 'Choose a Shield Host for your army. Each grants a unique Warlord Trait and Relic, and a special rule. Examples: Solar Watch (re-roll 1s to hit for Bikes), Dread Host (+1 attack if within 3" of enemy character).' },
    ]
  },

  imperial_knights: {
    summary: 'Imperial Knights — Titanic, Super-heavy Walker, Household Traditions',
    rules: [
      { name: 'Titanic', desc: 'Knights never take Morale tests and can fire all weapons even after moving. Knights can only be charged by units within 12".' },
      { name: 'Super-heavy Walker', desc: 'Knights can move over other models and terrain up to 4" high. Can fire into combat without hitting friendly units.' },
      { name: 'Household Traditions', desc: 'Choose a Household for your Knights. Each grants a bonus ability. Examples: Terryn (advance and charge), Cadmus (shoot twice if stationary), Griffith (+1 attack on charge).' },
      { name: 'Bondsman', desc: 'Armigers within 12" of a Knight gain +1 to hit in shooting or melee depending on the Bondsman ability used.' },
    ]
  },

  chaos_space_marines: {
    summary: 'Heretic Astartes — Marks of Chaos, Legion Traits, Veterans of the Long War',
    rules: [
      { name: 'Veterans of the Long War', desc: 'Add 1 to wound rolls for Heretic Astartes units in the Fight phase when targeting Space Marines.' },
      { name: 'Marks of Chaos', desc: 'Units may bear the Mark of one of the four powers: Khorne (+1 attack), Tzeentch (6+ invulnerable), Nurgle (+1 toughness), Slaanesh (+1 to advance/charge rolls).' },
      { name: 'Legion Traits', desc: 'Choose a Legion for your army. Examples: Iron Warriors (ignore cover saves), Alpha Legion (infiltrate one unit), Word Bearers (re-roll Morale).' },
    ]
  },

  thousand_sons: {
    summary: 'Thousand Sons — Sorcerous Façade, Cabal of Sorcerers, Tzeentch Psychic Powers',
    rules: [
      { name: 'Sorcerous Façade', desc: 'Once per battle round, after both sides have deployed but before the first turn, you may remove one Thousand Sons unit from the table and re-deploy it anywhere more than 9" from enemy models.' },
      { name: 'Brotherhood of Sorcerers', desc: 'All Thousand Sons Characters are Psykers. Add 1 to Psychic tests for friendly Psykers within 6" of a Thousand Sons Sorcerer.' },
      { name: 'Rubric Marines', desc: 'Rubric Marines automatically pass Morale tests. Bolters count as Assault weapons. Non-Psyker Rubric models have a 5+ invulnerable save.' },
    ]
  },

  death_guard: {
    summary: 'Death Guard — Contagions of Nurgle, Disgustingly Resilient, Plague Weapons',
    rules: [
      { name: 'Contagions of Nurgle', desc: 'At the start of each battle round, enemy units within 3" of any Death Guard unit lose 1 Toughness until the end of the round. At the start of each subsequent round, the range increases by 3" (up to 9").' },
      { name: 'Disgustingly Resilient', desc: 'Each time a Death Guard model loses a wound, roll a D6. On a 5+ that wound is not lost.' },
      { name: 'Plague Weapons', desc: 'Death Guard melee weapons gain the Plague Weapon ability — wound rolls of 7+ (modified) cause an additional mortal wound.' },
    ]
  },

  world_eaters: {
    summary: 'World Eaters — Blessings of Khorne, Berzerker Warband, Blood Tithe',
    rules: [
      { name: 'Blessings of Khorne', desc: 'World Eaters units re-roll all failed charge rolls. Add 1 to the Attacks characteristic of all models during a turn in which they charged.' },
      { name: 'Blood Tithe', desc: 'Each time an enemy model is destroyed, gain 1 Blood Tithe point. Spend points on powerful effects: 4 pts — +1 attack for all units this phase; 6 pts — deep strike a destroyed unit back; 8 pts — call down a Daemon Prince.' },
      { name: 'No Pity No Remorse No Fear', desc: 'World Eaters units automatically pass Morale tests.' },
    ]
  },

  emperors_children: {
    summary: 'Emperor\'s Children — Kakophoni, Endless Cacophony, Slaanesh Blessings',
    rules: [
      { name: 'Endless Cacophony', desc: 'Once per battle, all Emperor\'s Children units may shoot twice in a single Shooting phase. Units that used Endless Cacophony cannot charge that turn.' },
      { name: 'Kakophoni', desc: 'Noise Marines firing Sonic Blasters in the Shooting phase and Fight phase — on an unmodified hit roll of 6 the weapon fires one additional shot.' },
      { name: 'Mark of Slaanesh', desc: 'All Emperor\'s Children units have +1 to Advance and charge rolls.' },
    ]
  },

  chaos_daemons: {
    summary: 'Chaos Daemons — Daemonic, Warp Storm, Daemonic Legions',
    rules: [
      { name: 'Daemonic', desc: 'All Daemon models have a 5+ invulnerable save.' },
      { name: 'Warp Storm', desc: 'At the start of each battle round, roll 2D6 on the Warp Storm table. Results vary from mortal wounds on enemy Psykers to summoning additional Daemons or granting bonuses to friendly units.' },
      { name: 'Summoning', desc: 'Daemon Psykers may summon additional units during the Psychic phase. Declare the unit to be summoned and roll Psychic test equal to the unit\'s Power Rating. If successful set it up within 12" of the Psyker and more than 9" from enemy.' },
      { name: 'Daemonic Legions', desc: 'Daemons of the same god (Khorne, Tzeentch, Nurgle, Slaanesh) gain a bonus ability when in units of 20+ models.' },
    ]
  },

  eldar: {
    summary: 'Craftworlds — Battle Focus, Craftworld Attributes, Runes of Battle',
    rules: [
      { name: 'Battle Focus', desc: 'All Asuryani Infantry units may Advance and still shoot with Assault weapons at no penalty. They may also Advance and still shoot other weapons but at -1 to hit.' },
      { name: 'Ancient Doom', desc: 'Craftworld units re-roll all failed hit rolls against SLAANESH units. However they must take a Morale test if they are within 3" of a Slaanesh unit at the end of any phase.' },
      { name: 'Craftworld Attributes', desc: 'Choose a Craftworld for your army. Examples: Alaitoc (-1 to hit rolls for enemies targeting this unit if 12"+ away), Biel-Tan (re-roll 1s to hit for Aspect Warriors), Saim-Hann (advance and charge for Jetbike units), Iyanden (use full Wounds for morale instead of current).' },
    ]
  },

  harlequins: {
    summary: 'Harlequins — The Dance of Death, Flip Belts, Saedath',
    rules: [
      { name: 'The Prismatic Blur', desc: 'Harlequin units that Advance have a -1 to hit modifier applied against them for the rest of that turn.' },
      { name: 'Flip Belts', desc: 'Harlequin Infantry can move over other models and terrain freely. They ignore penalties for moving through difficult terrain.' },
      { name: 'Saedath', desc: 'Choose a Saedath (masque style) for your army. Each grants different bonuses. Examples: Frozen Stars (re-roll charges), Dreaming Shadow (consolidate into enemies not in Engagement Range), Midnight Sorrow (fight first).' },
    ]
  },

  dark_eldar: {
    summary: 'Drukhari — Power from Pain, Kabals, Covens, Wych Cults',
    rules: [
      { name: 'Power from Pain', desc: 'Drukhari grow stronger as the battle progresses. Each battle round grants a progressive bonus: Round 1 — Inured to Suffering (5+ FNP against mortal wounds). Round 2 — Eager to Flay (+1 to Advance). Round 3 — Frenzied Killing (+1 attack on charge). Round 4 — Thirst for Blood (re-roll wound 1s). Round 5+ — Seething Hatred (re-roll all wound rolls).' },
      { name: 'Realspace Raid', desc: 'Drukhari armies are split into three subfactions: Kabals (ranged shooting), Wych Cults (melee), and Haemonculus Covens (resilient). Units from different subfactions cannot be in the same detachment unless using the Realspace Raid detachment.' },
    ]
  },

  tau: {
    summary: 'T\'au Empire — For the Greater Good, Markerlights, Mont\'ka and Kauyon',
    rules: [
      { name: 'For the Greater Good', desc: 'When a T\'au unit is charged, every other friendly T\'au unit within 6" that is not within 1" of an enemy may fire Overwatch at the charging unit. Each unit can only fire Overwatch once per phase.' },
      { name: 'Markerlights', desc: 'Models equipped with Markerlights can fire them in the Shooting phase instead of other weapons. Each Markerlight hit on a unit places a counter. Spend counters for bonuses: 1 — ignore cover; 2 — +1 to hit rolls; 3 — +1 Markerlight hit; 4 — re-roll wound of 1; 5 — reduce AP by 1.' },
      { name: 'Mont\'ka', desc: 'Declare Mont\'ka at the start of your turn (once per battle). All T\'au units within 6" of the declaring Character may Advance and still shoot, and may still charge this turn.' },
      { name: 'Kauyon', desc: 'Declare Kauyon at the start of your turn (once per battle). All T\'au units within 6" of the declaring Character re-roll all failed hit rolls until the end of the turn but cannot move.' },
    ]
  },

  kroot_hunting_pack: {
    summary: 'Kroot Hunting Pack — Fieldcraft, Kroot Packmates, Scouts',
    rules: [
      { name: 'Fieldcraft', desc: 'Kroot units always count as being in cover if they did not move this turn.' },
      { name: 'Kroot Packmates', desc: 'When an enemy unit shoots at a friendly T\'au or Kroot unit within 3" of a Kroot unit, the Kroot unit may intercept on a 5+. If successful the Kroot unit suffers the hit instead, dealing 1 mortal wound to the attacker.' },
      { name: 'Scouts', desc: 'All Kroot units may make a Scout move of up to 6" before the first battle round begins.' },
      { name: 'Apex Predators', desc: 'Kroot units re-roll failed hit rolls in the Fight phase when outnumbering the enemy unit.' },
    ]
  },

  tyranids: {
    summary: 'Tyranids — Synapse, Instinctive Behaviour, Shadow in the Warp, Hive Fleet',
    rules: [
      { name: 'Synapse', desc: 'Units with the Synapse ability project a 12" aura. Friendly Tyranids within 12" of a Synapse creature automatically pass Morale tests and are not affected by Instinctive Behaviour.' },
      { name: 'Instinctive Behaviour', desc: 'Tyranid units outside Synapse range must roll at the start of their turn. On a 1-3, they can only target the nearest visible unit. On a 4+ they act normally.' },
      { name: 'Shadow in the Warp', desc: 'Enemy Psykers within 18" of any Synapse creature subtract 1 from their Psychic tests.' },
      { name: 'Hive Fleet Adaptations', desc: 'Choose a Hive Fleet. Examples: Leviathan (re-roll 1s to wound), Kronos (ignore cover; re-roll 1s to hit with ranged), Jormungandr (-1 to hit rolls against this unit in shooting if it did not Advance), Kraken (advance and charge; Fall Back and charge).' },
    ]
  },

  necrons: {
    summary: 'Necrons — Reanimation Protocols, Living Metal, Dynasty Codes',
    rules: [
      { name: 'Reanimation Protocols', desc: 'At the end of each phase, roll a D6 for each destroyed Necron model in a unit that is still on the battlefield. On a 5+ that model returns with 1 wound. Vehicles cannot use Reanimation Protocols.' },
      { name: 'Living Metal', desc: 'At the start of each of your turns, each model with this ability regains 1 lost wound.' },
      { name: 'Dynasty Codes', desc: 'Choose a Dynasty. Examples: Sautekh (re-roll 1s to hit), Nihilakh (units that did not move add 1 to hit in Shooting), Mephrit (improve AP by 1 within half range), Novokh (re-roll hit rolls of 1 in Fight).' },
    ]
  },

  orks: {
    summary: 'Orks — WAAAGH!, Mob Rule, Clan Kulturs',
    rules: [
      { name: 'WAAAGH!', desc: 'Once per battle, at the start of your Charge phase, if your Warlord is on the battlefield you may call a WAAAGH!. Until the end of the turn all Ork units may charge even if they Advanced, and add 1 to all charge rolls and hit rolls in the Fight phase.' },
      { name: 'Mob Rule', desc: 'When an Ork unit takes a Morale test, they may use their unit size instead of their Leadership. However on a roll of 1, one model is slain by its companions regardless.' },
      { name: 'Clan Kulturs', desc: 'Choose a Clan. Examples: Goffs (additional hit on 6+ on the Fight phase), Bad Moons (+6" range to Dakka/Heavy weapons and improved AP by 1 on unmodified 6s to wound), Evil Sunz (+1" Movement, +1 to Advance and Charge rolls, and no penalty for shooting Assault weapons after advancing), Deathskulls (re-roll 1s to hit and wound, 6++ save to all models), Snakebites (6+ Feel No Pain).' },
    ]
  },

  genestealer_cults: {
    summary: 'Genestealer Cults — Cult Ambush, Unquestioning Loyalty, Brood Brothers',
    rules: [
      { name: 'Cult Ambush', desc: 'Once per battle, at the end of your Movement phase, you may remove any number of Genestealer Cults Infantry units from the battlefield. At the end of your next Movement phase, roll on the Cult Ambush table for each unit (or spend 1 CP to choose the result): 1 — unit is destroyed; 2-3 — set up in your deployment zone; 4-5 — set up anywhere more than 9" from enemy; 6 — set up anywhere more than 3" from enemy and act as if they charged.' },
      { name: 'Unquestioning Loyalty', desc: 'Each time a CHARACTER from your army would lose a wound while within 3" of a friendly non-CHARACTER unit, roll a D6. On a 4+ a model from that unit is slain instead and the Character does not lose the wound.' },
      { name: 'Brood Brothers', desc: 'Astra Militarum units that have been corrupted by the Cult may be included in a Genestealer Cults army as Brood Brothers, filling the same slots as normal but unable to benefit from Cult special rules.' },
    ]
  },

  leagues_of_votann: {
    summary: 'Leagues of Votann — Oaths, Ancestral Grudge, Kindred',
    rules: [
      { name: 'Ancestral Grudge', desc: 'At the start of the battle, select one enemy unit to be your Grudge target. All Votann units re-roll all failed hit rolls against that unit. Each time the Grudge target destroys a friendly unit, place a Grudge counter on it — units with 3+ counters suffer -1 to their saving throws against Votann attacks.' },
      { name: 'Oaths', desc: 'At the start of the battle you may declare one of three Oaths: Oath of Vengeance (re-roll wound rolls of 1 in Fight phase), Oath of Preservation (6+ FNP), or Oath of the Ancestors (re-roll 1s to hit in Shooting).' },
      { name: 'League Kyrovar', desc: 'Choose a League for your army granting a unique rule. Examples: Kronus Hegemony (advance and charge), Ymyr Confederation (improved armour saves), Trans-Hyperian Alliance (enhanced Marksmen abilities).' },
    ]
  },

};
