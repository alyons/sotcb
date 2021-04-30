import React, { useState } from 'react';

import { Checkbox, FormControl, FormGroup, FormControlLabel, FormHelperText } from '@material-ui/core';

export default function Movement(props) {
  let { state } = props;

  const handleBurrow = (event) => {
    let newMovement = JSON.parse(JSON.stringify(state.movement));
    newMovement[0] = event.target.checked;
    props.onChange({ movement: newMovement });
  }

  const handleFlight = (event) => {
    let newMovement = JSON.parse(JSON.stringify(state.movement));
    newMovement[1] = event.target.checked;
    props.onChange({ movement: newMovement });
  }

  const handleFloat = (event) => {
    let newMovement = JSON.parse(JSON.stringify(state.movement));
    newMovement[2] = event.target.checked;
    props.onChange({ movement: newMovement });
  }

  const handleGround = (event) => {
    let newMovement = JSON.parse(JSON.stringify(state.movement));
    newMovement[3] = event.target.checked;
    props.onChange({ movement: newMovement });
  }

  const handleTeleport = (event) => {
    let newMovement = JSON.parse(JSON.stringify(state.movement));
    newMovement[4] = event.target.checked;
    props.onChange({ movement: newMovement });
  }

  const handleWater = (event) => {
    let newMovement = JSON.parse(JSON.stringify(state.movement));
    newMovement[5] = event.target.checked;
    props.onChange({ movement: newMovement });
  }

  return (
    <FormControl>
      <FormGroup>
        <FormControlLabel
          value="burrow"
          control={<Checkbox
            checked={state.movement[0]}
            onChange={handleBurrow} />}
          label="Burrow"
          labelPlacement="end" />
        <FormControlLabel
          value="flight"
          control={<Checkbox
            checked={state.movement[1]}
            onChange={handleFlight} />}
          label="Flight"
          labelPlacement="end" />
        <FormControlLabel
          value="float"
          control={<Checkbox
            checked={state.movement[2]}
            onChange={handleFloat} />}
          label="Float"
          labelPlacement="end" />
        <FormControlLabel
          value="ground"
          control={<Checkbox
            checked={state.movement[3]}
            onChange={handleGround} />}
          label="Ground"
          labelPlacement="end" />
        <FormControlLabel
          value="teleport"
          control={<Checkbox
            checked={state.movement[4]}
            onChange={handleTeleport} />}
          label="Teleport"
          labelPlacement="end" />
        <FormControlLabel
          value="water"
          control={<Checkbox
            checked={state.movement[5]}
            onChange={handleWater} />}
          label="Water"
          labelPlacement="end" />
      </FormGroup>
    </FormControl>
  );
}