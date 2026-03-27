# Faction Data Fix Guide & Composition Format Reference

## Diagnosing the Known Bugs

### Librarian — shows Bolt Pistol, profile missing
The Librarian likely has `'Bolt Pistol'` in its `wargear` array but the
weapon profile lookup is failing. Two possible causes:

1. **Exact name mismatch** — the weapon profile key might be `'Bolt pistol'`
   (lowercase p) or `'boltpistol'`. Check `weapons.js` for the exact key.
   Fix: change the wargear entry to exactly match the key in WEAPON_PROFILES.

2. **Librarian should not have a bolt pistol at all** — 8th Ed index
   Librarians carry a force weapon + bolt pistol OR smite. If the bolt pistol
   is wrong, just remove it from the wargear array.

Correct Librarian entry example:
```js
{
  id: 'sm_librarian',
  name: 'Librarian',
  role: 'HQ',
  pts: 90,
  min: 1, max: 1,
  stats: ['6"','3+','3+','4','4','5','4','9','3+'],
  wargear: ['Bolt Pistol', 'Force Sword', 'Frag Grenade', 'Krak Grenade'],
  options: [
    {
      group: 'Force Weapon',
      choices: [
        { label: 'Force Sword',  pts: 0, default: true, weapons: ['Force Sword'],  replaces: ['Force Sword'] },
        { label: 'Force Axe',    pts: 0,                weapons: ['Force Axe'],    replaces: ['Force Sword'] },
        { label: 'Force Staff',  pts: 0,                weapons: ['Force Staff'],  replaces: ['Force Sword'] },
      ]
    }
  ],
  abilities: [ ... ],
}
```

---

### Dreadnought — no loadout options showing
The Dreadnought has no `options` array (or an empty one). The loadout
panel only appears when `unit.options && unit.options.length > 0`.

Add an `options` array like this:
```js
{
  id: 'sm_dreadnought',
  name: 'Dreadnought',
  ...
  wargear: ['Twin Lascannon', 'Dreadnought Combat Weapon', 'Storm Bolter'],
  options: [
    {
      group: 'Left Arm',
      choices: [
        { label: 'Twin Lascannon',    pts: 0,  default: true, weapons: ['Twin Lascannon'],    replaces: ['Twin Lascannon'] },
        { label: 'Multi-melta',       pts: 0,                 weapons: ['Multi-melta'],        replaces: ['Twin Lascannon'] },
        { label: 'Twin Autocannon',   pts: 0,                 weapons: ['Twin Autocannon'],    replaces: ['Twin Lascannon'] },
        { label: 'Plasma Cannon',     pts: 0,                 weapons: ['Plasma Cannon'],      replaces: ['Twin Lascannon'] },
      ]
    },
    {
      group: 'Fist Stormbolter',
      choices: [
        { label: 'Storm Bolter',      pts: 0,  default: true, weapons: ['Storm Bolter'],       replaces: ['Storm Bolter'] },
        { label: 'Heavy Flamer',      pts: 0,                 weapons: ['Heavy Flamer'],       replaces: ['Storm Bolter'] },
      ]
    }
  ],
  ...
}
```

---

### Gretchin — everyone appears to carry melta weapons
This is a wargear array bug. Check your Gretchin entry. It likely looks like:
```js
wargear: ['Slugga', 'Blasta'],  // "Blasta" resolving to a melta-like weapon
```
The partial-match fallback in `lookupWeapon()` is probably matching "Blasta"
to a weapon containing that substring. Fix options:

1. **Add the correct profile to weapons.js:**
```js
'Blasta': { range:'12"', type:'Pistol 1', s:5, ap:-1, d:1, special:'Orkish pistol' },
```

2. **Or rename to a less ambiguous string** that won't partial-match
   something unintended.

The partial match logic in `lookupWeapon` is deliberately greedy — if you have
weapons with common substrings, add the exact weapon to WEAPON_PROFILES first.

---

## Composition Format (new feature)

Use `composition` on squad units to enable per-model weapon selection.
This gives you the GSC / Tactical Squad granularity you described.

### Full example — Tactical Squad
```js
{
  id: 'sm_tactical_squad',
  name: 'Tactical Squad',
  role: 'Troops',
  pts: 65,
  min: 5, max: 10, ppm: 13,
  stats: ['6"','3+','3+','4','4','1','1','7','3+'],
  wargear: [], // leave empty — composition drives wargear for print
  composition: [
    {
      role: 'Sergeant',
      count: 1,
      wargear: ['Boltgun', 'Bolt Pistol', 'Frag Grenade', 'Krak Grenade'],
      options: [
        {
          group: 'Melee',
          choices: [
            { label: 'None',          pts: 0, default: true },
            { label: 'Chainsword',    pts: 0, weapons: ['Chainsword'],   replaces: [] },
            { label: 'Power Sword',   pts: 4, weapons: ['Power Sword'],  replaces: ['Boltgun'] },
            { label: 'Power Fist',    pts: 9, weapons: ['Power Fist'],   replaces: ['Boltgun'] },
          ]
        },
        {
          group: 'Sidearm',
          choices: [
            { label: 'Bolt Pistol',   pts: 0, default: true, weapons: ['Bolt Pistol'] },
            { label: 'Plasma Pistol', pts: 5, weapons: ['Plasma Pistol'], replaces: ['Bolt Pistol'] },
            { label: 'Hand Flamer',   pts: 3, weapons: ['Hand Flamer'],   replaces: ['Bolt Pistol'] },
          ]
        }
      ]
    },
    {
      role: 'Special Weapon',
      count: 1,
      wargear: ['Boltgun', 'Bolt Pistol', 'Frag Grenade', 'Krak Grenade'],
      options: [
        {
          group: 'Special',
          choices: [
            { label: 'Boltgun',    pts: 0,  default: true, weapons: ['Boltgun'] },
            { label: 'Flamer',     pts: 0,  weapons: ['Flamer'],     replaces: ['Boltgun'] },
            { label: 'Meltagun',   pts: 0,  weapons: ['Meltagun'],   replaces: ['Boltgun'] },
            { label: 'Plasma Gun', pts: 0,  weapons: ['Plasma Gun'], replaces: ['Boltgun'] },
            { label: 'Grav-Gun',   pts: 0,  weapons: ['Grav-Gun'],   replaces: ['Boltgun'] },
          ]
        }
      ]
    },
    {
      role: 'Heavy Weapon',
      count: 1,
      wargear: ['Heavy Bolter', 'Bolt Pistol', 'Frag Grenade', 'Krak Grenade'],
      options: [
        {
          group: 'Heavy',
          choices: [
            { label: 'Heavy Bolter',    pts: 0,  default: true, weapons: ['Heavy Bolter'] },
            { label: 'Lascannon',       pts: 0,  weapons: ['Lascannon'],       replaces: ['Heavy Bolter'] },
            { label: 'Multi-melta',     pts: 0,  weapons: ['Multi-melta'],      replaces: ['Heavy Bolter'] },
            { label: 'Plasma Cannon',   pts: 0,  weapons: ['Plasma Cannon'],    replaces: ['Heavy Bolter'] },
            { label: 'Missile Launcher',pts: 0,  weapons: ['Missile Launcher'], replaces: ['Heavy Bolter'] },
          ]
        }
      ]
    },
    {
      role: 'Trooper',
      count: 7,  // adjusts automatically with model count slider
      wargear: ['Boltgun', 'Bolt Pistol', 'Frag Grenade', 'Krak Grenade'],
      // no options = standard loadout, no choices shown
    }
  ],
  abilities: [ ... ],
}
```

### How it renders
- The roster shows each model role as its own sub-panel with loadout buttons
- Changing a choice updates the wargear shown for that model type instantly
- Print output shows a weapon table **per model role**, so your list reads:
  ```
  Tactical Squad [10 models]  (13 pts/model)
    ×1 Sergeant:          Power Fist, Plasma Pistol, Frag Grenade, Krak Grenade
    ×1 Special Weapon:    Meltagun, Bolt Pistol, Frag Grenade, Krak Grenade  
    ×1 Heavy Weapon:      Lascannon, Bolt Pistol, Frag Grenade, Krak Grenade
    ×7 Trooper:           Boltgun, Bolt Pistol, Frag Grenade, Krak Grenade
  ```

### Units that don't need composition
Simple single-model units (HQs, vehicles, monsters) just use the flat
`wargear` + `options` system as before — no `composition` needed.
Only add `composition` to multi-model squads where individual models
can have different weapons.

---

## CSS classes to add to app.css

```css
/* Clone button */
.clone-btn {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--muted);
  width: 24px; height: 24px;
  cursor: pointer;
  font-size: 13px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 2px;
  transition: color 0.15s, border-color 0.15s;
}
.clone-btn:hover { color: var(--gold); border-color: var(--gold); }

/* Model composition panels */
.model-composition { display: flex; flex-direction: column; gap: 4px; margin-top: 6px; }
.comp-slot { border: 1px solid var(--border); border-radius: 2px; overflow: hidden; }
.comp-slot-header {
  display: flex; align-items: center; gap: 6px;
  padding: 4px 8px;
  background: rgba(255,255,255,0.04);
  border-bottom: 1px solid var(--border);
}
.comp-role {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 11px; font-weight: 700;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--gold);
}
.comp-count {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 10px; color: var(--muted);
}
.comp-options { padding: 4px 6px; border-bottom: 1px solid var(--border); }
.comp-wargear { padding: 4px 6px; }
```
