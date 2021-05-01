import React, { useState } from 'react';

import {
  Button,
  List
} from '@material-ui/core';

import Attack from './Attack';

export default function AttackList(props) {
  let { state, onChange } = props;
  const [showAttackBuilder, setShowAttackBuilder] = useState(false);

  /**
   * 
   * @param {Object} builderResponse
   *    - bool createAttack -> Determine if should process other data
   *    - attack -> Data collected from builder 
   */
  const addAttackClick = (builderResponse) => {
    setShowAttackBuilder(!showAttackBuilder);
  }

  return (
    <div>
      <List>
        {state.attacks.map((attack, i) => (
          <Attack attack={attack} index={i} level={state.level} />
        ))}
      </List>
    </div>
  );
};
