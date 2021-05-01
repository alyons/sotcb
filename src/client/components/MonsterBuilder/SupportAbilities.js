import React from 'react';

import {
  Checkbox,
  FormControlLabel,
  FormGroup
} from '@material-ui/core';

export default function SupportAbilities(props) {
  let { state } = props;

  // function handleBadScan(event) {
  //   props.onChange({ supportAbilities: { badScan: event.target.value } });
  // }
  
  return (
    <FormGroup>
      <FormControlLabel
        value="badScan"
        control={<Checkbox />}
        label="Bad Scan"
        labelPlacement="end" />
    </FormGroup>
  );
}
