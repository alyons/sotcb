import React from 'react';

import {
  Input,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from '@material-ui/core';

export default function Rewards(props) {
  let { state } = props;

  const calculateSpellReward = (isExp) => {
    let reward = 0;

    state.spells.forEach(spell => {
      if (spell.type == '')
      switch(spell.level) {
        case 1: reward += (isExp) ? 8 : 5; break;
        default:/** Do Nothing */ break;
      }
    });


    return reward;
  };

  const calculateExperience = () => {
    let baseExperience = 0;

    switch(state.monsterType) {
      case 'notorious': baseExperience += 100; break;
      case 'boss': baseExperience += 225; break;
      case 'endBoss': baseExperience += 350; break;
      default: baseExperience += 40; break;
    }

    switch(state.hpBase) {
      case 1: baseExperience -= 16; break;
      case 1.5: baseExperience -= 8; break;
      case 4: baseExperience += 18; break;
      case 6: baseExperience += 40; break;
      case 8: baseExperience += 60; break;
    }

    switch(state.mpBase) {
      case 0.5: baseExperience += 8; break;
      case 1: baseExperience += 15; break;
      case 1.5: baseExperience += 22; break;
      case 2: baseExperience += 35; break;
      case 4: baseExperience += 50; break;
    }

    switch(state.armorBase) {
      case 0.5: baseExperience -= 5; break;
      case 2: baseExperience += 10; break;
      case 4: baseExperience += 19; break;
      case 6: baseExperience += 26; break;
    }

    switch(state.mArmorBase) {
      case 0.5: baseExperience -= 5; break;
      case 2: baseExperience += 10; break;
      case 4: baseExperience += 19; break;
      case 6: baseExperience += 26; break;
    }

    // Calculate Movement Exp
    if (!!state.movement[0]) baseExperience += 60;
    if (!!state.movement[1]) baseExperience += 20;
    if (!!state.movement[2]) baseExperience += 19;
    if (!!state.movement[3]) baseExperience += 0; // Ground Movement
    if (!!state.movement[4]) baseExperience += 60;
    if (!!state.movement[5]) baseExperience += 0; // Water Movement

    return baseExperience * state.level;
  }

  const calculateGil = () => {
    let baseGil = 0;

    switch(state.monsterType) {
      case 'notorious': baseGil += 25; break;
      case 'boss': baseGil += 55; break;
      case 'endBoss': baseGil += 90; break;
      default: baseGil += 15; break;
    }

    switch(state.hpBase) {
      case 1: baseGil -= 6; break;
      case 1.5: baseGil -= 3; break;
      case 4: baseGil += 8; break;
      case 6: baseGil += 19; break;
      case 8: baseGil += 30; break;
    }

    switch(state.mpBase) {
      case 0.5: baseGil += 3; break;
      case 1: baseGil += 7; break;
      case 1.5: baseGil += 10; break;
      case 2: baseGil += 16; break;
      case 4: baseGil += 28; break;
    }

    switch(state.armorBase) {
      case 0.5: baseGil -= 2; break;
      case 2: baseGil += 5; break;
      case 4: baseGil += 9; break;
      case 6: baseGil += 18; break;
    }

    switch(state.mArmorBase) {
      case 0.5: baseGil -= 2; break;
      case 2: baseGil += 5; break;
      case 4: baseGil += 9; break;
      case 6: baseGil += 18; break;
    }

    // Calculate Movement Gil
    if (!!state.movement[0]) baseGil += 20;
    if (!!state.movement[1]) baseGil += 9;
    if (!!state.movement[2]) baseGil += 6;
    if (!!state.movement[3]) baseGil += 0; // Ground Movement
    if (!!state.movement[4]) baseGil += 40;
    if (!!state.movement[5]) baseGil += 0; // Water Movement

    return baseGil * state.level;
  }

  return (
    <div>
      <Typography>Experience: {calculateExperience()}</Typography>
      <Typography>Gil: {calculateGil()}</Typography>
    </div>
  );
};
