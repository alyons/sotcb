import React, { useState } from 'react';
import { useRouter } from 'next/router';

import {
  Button,
  Checkbox,
  FormControlLabel,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@material-ui/core';

import AttackService from '../../lib/attacks';

export default function AttackBuilder(props) {
  let { key, data, attackService } = props;
  if (key === undefined) key = -1;

  const router = useRouter();

  const [state, setState] = useState({
    action: 'attack', // attack, ability, magic
    areaOfEffect: 1, 
    aoeShape: 'none', // none, star, cone, line, all,
    damageDie: 'd6', // none, d6, d8, d10, d12,
    damageReduction: "armor", // armor, marmor
    damageType: "physical", // physical, arcane, elemental affinity
    dodge: "evasion", // evasion, mevasion
    identifyFriendOrFoe: false,
    name: 'Basic Attack',
    range: 1,
    randomTarget: false,
    toHit: "accuracy",
    toHitMod: 0, // -50 to +50,
    verticalReach: 1
  });

  const handleChange = (updates) => {
    setState(Object.assign({}, state, updates));
  }

  const onNameChange = (event) => {
    handleChange({ name: event.target.value });
  }

  const onActionChange = (event) => {
    handleChange({ action: event.target.value });
  }

  const onDamageDieChange = (event) => {
    handleChange({ damageDie: event.target.value });
  }

  const onAreaOfEffectChange = (event) => {
    handleChange({ areaOfEffect: Number(event.target.value) });
  }

  const onAoEShapeChange = (event) => {
    handleChange({ aoeShape: event.target.value });
  }

  const onRandomTargetChange = (event) => {
    handleChange({ randomTarget: event.target.checked });
  }

  const onSave = (event) => {
    // Try to save the item
    AttackService.save(state, key);
    // On Success nave to list
    router.push('/attacks');
  }

  const onCancel = (event) => {
    router.push('/attacks');
  }

  return (
    <>
      <InputLabel htmlFor="nameField">Name</InputLabel>
      <TextField
        id="nameField"
        defaultValue={state.name}
        onChange={onNameChange} />
      <InputLabel htmlFor="actionSelect">Action Type</InputLabel>
      <Select id="actionSelect" defaultValue={state.action} onChange={onActionChange}>
        <MenuItem value="attack">Attack</MenuItem>
        <MenuItem value="ability">Ability</MenuItem>
        <MenuItem value="magic">Magic</MenuItem>
      </Select>
      <InputLabel htmlFor="damageDieSelect">Damage Die</InputLabel>
      <Select id="damageDieSelect" defaultValue={state.damageDie} onChange={onDamageDieChange}>
        <MenuItem value="none">None</MenuItem>
        <MenuItem value="d6">d6</MenuItem>
        <MenuItem value="d8">d8</MenuItem>
        <MenuItem value="d10">d10</MenuItem>
        <MenuItem value="d12">d12</MenuItem>
      </Select>
      <InputLabel htmlFor="areaOfEffectInput">Area of Effect</InputLabel>
      <Input 
        id="areaOfEffectInput"
        defaultValue={state.areaOfEffect}
        inputProps={{ min: 1 }}
        onChange={onAreaOfEffectChange}
        type="number" />
      <InputLabel htmlFor="aoeShapeSelect">AoE Shape</InputLabel>
      <Select id="aoeShapeSelect" defaultValue={state.aoeShape} onChange={onAoEShapeChange}>
        <MenuItem value="none">None</MenuItem>
        <MenuItem value="star">Star</MenuItem>
        <MenuItem value="line">Line</MenuItem>
        <MenuItem value="cone">Cone</MenuItem>
        <MenuItem value="all">All</MenuItem>
      </Select>
      <FormControlLabel
        value="randomTarget"
        control={<Checkbox
          checked={state.randomTarget}
          onChange={onRandomTargetChange} />}
        label="Random Target"
        labelPlacement="end" />
        <br />
      <Button onClick={onSave}>Save</Button>
      <Button onClick={onCancel}>Cancel</Button>
    </>
  )
}
