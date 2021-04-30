import React from 'react';

import {
  ListItem,
  ListItemText
} from '@material-ui/core';

export default function Attack(props) {
  let {
    attack,
    index,
    level
  } = props;

  let details = "";

  // Add hit formula
  details += `To Hit: ${attack.toHit} vs. ${attack.toEvade},${attack.toBlock}\n`;

  // Add Damage Formula
  details += ``;

  return (
    <ListItem key={`attack-${index}`}>
      <ListItemText
        primary={attack.name}
        secondary={details} />
    </ListItem>
  )
}