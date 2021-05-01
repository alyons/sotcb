import React from 'react';

import {
  Input,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from '@material-ui/core';

export default function Attributes(props) {
  let { state } = props;

  function handleLevelChange(event) {
    props.onChange({ level: Number(event.target.value) });
  }

  function handleStrengthChange(event) {
    props.onChange({ strength: Number(event.target.value) });
  }

  function handleVitalityChange(event) {
    props.onChange({ vitality: Number(event.target.value) });
  }

  function handleAgilityChange(event) {
    props.onChange({ agility: Number(event.target.value) });
  }

  function handleSpeedChange(event) {
    props.onChange({ speed: Number(event.target.value) });
  }

  function handleMagicChange(event) {
    props.onChange({ magic: Number(event.target.value) });
  }

  function handleSpiritChange(event) {
    props.onChange({ spirit: Number(event.target.value) });
  }

  function handleHPBaseChange(event) {
    props.onChange({ hpBase: Number(event.target.value) });
  }

  function handleMPBaseChange(event) {
    props.onChange({ mpBase: Number(event.target.value) });
  }

  function handleArmorBaseChange(event) {
    props.onChange({ armorBase: Number(event.target.value) });
  }

  function handleMagicArmorBaseChange(event) {
    props.onChange({ mArmorBase: Number(event.target.value) });
  }

  function statTotal() {
    return state.strength + state.vitality + state.agility + state.speed + state.magic + state.spirit;
  }

  function calculateMaxAttribute(attributeName) {
    let max = 35 + state.level;

    if (attributeName != "strength") {
      max -= state.strength;
    }

    if (attributeName != "vitality") {
      max -= state.vitality;
    }

    if (attributeName != "agility") {
      max -= state.agility;
    }

    if (attributeName != "speed") {
      max -= state.speed;
    }

    if (attributeName != "magic") {
      max -= state.magic;
    }

    if (attributeName != "spirit") {
      max -= state.spirit;
    }

    return max;
  }

  function calculateMaxHP() {
    let hp = 1;

    switch(state.monsterType) {
      case 'endBoss': hp *= 6; break;
      case 'boss': hp *= 4; break;
      case 'notorious': hp *= 2; break;
      default: hp *= 1; break;
    }

    hp *= state.level;
    hp *= state.vitality;
    hp *= state.hpBase;

    return hp;
  }

  function calculateMaxMP() {
    let mp = state.mpBase;

    switch(state.monsterType) {
      case 'endBoss': mp *= 3; break;
      case 'boss': mp *= 2; break;
      case 'notorious': mp *= 1.5; break;
      default: mp *= 1; break;
    }

    mp *= state.level;
    mp *= state.spirit;

    return mp;
  }

  function calculateArmor() {
    return state.armorBase * state.level + (state.vitality / 2);
  }

  function calculateMagicArmor() {
    return state.mArmorBase * state.level + (state.spirit / 2);
  }

  function calculateAccuracy() {
    return 80 + state.level + (state.agility * 2);
  }

  function calculateMagicAccuracy() {
    return 100 + state.level + (state.magic * 2);
  }

  function calculateDexterity() {
    return 50 + state.level + (state.agility * 2);
  }

  function calculateMind() {
    return 50 + state.level + (state.magic * 2);
  }

  function calculateEvasion() {
    return state.level + state.speed + state.agility;
  }

  function calculateMagicEvasion() {
    return state.level + state.magic + state.spirit;
  }

  return (
    <div>
      <InputLabel id="levelLabel">Level</InputLabel>
      <Input
      id="levelInput"
      labelId="levelLabel"
      defaultValue={state.level}
      inputProps={{ min: 1, max: 100 }}
      onChange={handleLevelChange}
      type="number" />

      <Typography id="attributesLabel">Attribues ({35 + Number(state.level)}) [{statTotal()}]</Typography>
      <InputLabel id="strengthLabel">Strength</InputLabel>
      <Input
      id="strengthInput"
      labelId="strengthLabel"
      defaultValue={state.strength}
      inputProps={{ min: 1, max: calculateMaxAttribute("strength") }}
      onChange={handleStrengthChange}
      type="number" />
      <InputLabel id="vitalityLabel">Vitality</InputLabel>
      <Input
      id="vitalityInput"
      labelId="vitalityLabel"
      defaultValue={state.vitality}
      inputProps={{ min: 1, max: calculateMaxAttribute("vitality") }}
      onChange={handleVitalityChange}
      type="number" />
      <InputLabel id="agilityLabel">Agility</InputLabel>
      <Input
      id="agilityInput"
      labelId="agilityLabel"
      defaultValue={state.agility}
      inputProps={{ min: 1, max: calculateMaxAttribute("agility") }}
      onChange={handleAgilityChange}
      type="number" />
      <InputLabel id="speedLabel">Speed</InputLabel>
      <Input
      id="speedInput"
      labelId="speedLabel"
      defaultValue={state.speed}
      inputProps={{ min: 1, max: calculateMaxAttribute("speed") }}
      onChange={handleSpeedChange}
      type="number" />
      <InputLabel id="magicLabel">Magic</InputLabel>
      <Input
      id="magicInput"
      labelId="magicLabel"
      defaultValue={state.magic}
      inputProps={{ min: 1, max: calculateMaxAttribute("magic") }}
      onChange={handleMagicChange}
      type="number" />
      <InputLabel id="spirirLabel">Spirit</InputLabel>
      <Input
      id="spiritInput"
      labelId="spiritLabel"
      defaultValue={state.spirit}
      inputProps={{ min: 1, max: calculateMaxAttribute("spirit") }}
      onChange={handleSpiritChange}
      type="number" />

      <InputLabel id="hpBaseLabel">Hit Point Base</InputLabel>
      <Select labelId="hpBaseLabel" id="hpBaseSelect" defaultValue="2" onChange={handleHPBaseChange}>
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="1.5">1.5</MenuItem>
        <MenuItem value="2">2</MenuItem>
        <MenuItem value="4">4</MenuItem>
        <MenuItem value="6">6</MenuItem>
        <MenuItem value="8">8</MenuItem>
      </Select>
      <Typography>Total Hit Points: {calculateMaxHP()}</Typography>
      <InputLabel id="mpBaseLabel">Magic Point Base</InputLabel>
      <Select id="mpBaseSelect" labelId="mpBaseLabel" defaultValue="0" onChange={handleMPBaseChange}>
        <MenuItem value="0">---</MenuItem>
        <MenuItem value="0.5">0.5</MenuItem>
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="1.5">1.5</MenuItem>
        <MenuItem value="2">2</MenuItem>
        <MenuItem value="4">4</MenuItem>
      </Select>
      <Typography>Total Magic Points: {calculateMaxMP()}</Typography>
      <InputLabel id="armorBaseLabel">Amor Base</InputLabel>
      <Select id="armorBaseSelect" labelId="armorBaseLabel" defaultValue="1" onChange={handleArmorBaseChange}>
        <MenuItem value="0.5">0.5</MenuItem>
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="2">2</MenuItem>
        <MenuItem value="4">4</MenuItem>
        <MenuItem value="6">6</MenuItem>
      </Select>
      <Typography>Armor: {calculateArmor()}</Typography>
      <InputLabel id="mArmorBaseLabel">Magic Armor Base</InputLabel>
      <Select id="mArmorBaseSelect" labelId="mArmorBaseLabel" defaultValue="1" onChange={handleMagicArmorBaseChange}>
        <MenuItem value="0.5">0.5</MenuItem>
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="2">2</MenuItem>
        <MenuItem value="4">4</MenuItem>
        <MenuItem value="6">6</MenuItem>
      </Select>
      <Typography>Magic Armor: {calculateMagicArmor()}</Typography>

      <Typography>Accuracy: {calculateAccuracy()}</Typography>
      <Typography>Magic Accuracy: {calculateMagicAccuracy()}</Typography>
      <Typography>Dexterity: {calculateDexterity()}</Typography>
      <Typography>Mind: {calculateMind()}</Typography>
      <Typography>Evasion: {calculateEvasion()}</Typography>
      <Typography>Magic Evasion: {calculateMagicEvasion()}</Typography>
    </div>
  )
}
