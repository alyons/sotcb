import React, { useState } from 'react';

import Movement from './Movement';
import Profile from './Profile';
import Rewards from './Rewards';
import Attributes from './Attributes';
import SupportAbilities from './SupportAbilities';
import AttackList from './AttackList';

export default function MonsterBuilder() {
  const [state, setState] = useState({
    experience: 40,
    gil: 15,
    level: 1,
    monsterType: 'regular',
    strength: 1,
    vitality: 1,
    agility: 1,
    speed: 1,
    magic: 1,
    spirit: 1,
    hpBase: 2,
    mpBase: 0,
    armorBase: 1,
    mArmorBase: 1,
    movement: [false, false, false, true, false, false], // Burrow, Flight, Float, Ground, Teleport, Water
    items: ["", "", "", ""], // 51-100, 25-50, 08-24, 01-07
    attacks: [
      {
        name: "Arcane Shot",
        damageDie: 8,
        target: "single",
        modifiers: [{
          name: "ranged",
          value: 5
        }],
        attribute: "magic",
        toHit: "maccuracy",
        toEvade: "mevasion",
        toBlock: "marmor"
      }
    ],
    supportAbilities: [],
    spells: []
  });

  const [showAttackBuilder, setShowAttackBuilder] = useState(false);

  const handleChange = (updates) => {
    // console.log(updates);
    setState(Object.assign({}, state, updates));
  }

  return (
    <div>
      <Profile state={state} onChange={handleChange}/>
      <Attributes state={state} onChange={handleChange} />
      <AttackList state={state} onChange={handleChange} />
      <p>Action Abilities</p>
      <p>Spells</p>
      <p>Job Abilities</p>
      <p>Movement Abilities</p>
      <Movement state={state} onChange={handleChange}/>
      <SupportAbilities state={state} onChange={handleChange} />
      <p>Reaction Abilities</p>
      <p>Field Effects</p>
      <p>Boss Abilities</p>
      <Rewards state={state} />
    </div>
  )
};
