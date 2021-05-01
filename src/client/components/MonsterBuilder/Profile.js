import React from 'react';

import {
  InputLabel,
  MenuItem,
  Select
} from '@material-ui/core';

export default function Profile(props) {
  function handleChange(event) {
    props.onChange({ monsterType: event.target.value });
  }

  return (
    <div>
      <InputLabel id="monsterTypeLabel">Monster Type</InputLabel>
      <Select labelId="monsterTypeLabel" id="monsterTypeSelect" defaultValue={props.state.monsterType} onChange={handleChange}>
        <MenuItem value="regular">Regular</MenuItem>
        <MenuItem value="notorious">Notorious</MenuItem>
        <MenuItem value="boss">Boss</MenuItem>
        <MenuItem value="endBoss">End Boss</MenuItem>
      </Select>
    </div>
  )
}
