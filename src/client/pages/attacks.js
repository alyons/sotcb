import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import AttackService from '../lib/attacks';
import Layout from '../components/layout';
import { Button } from '@material-ui/core';

export default function AttackList() {
  const [attacks, setAttacks] = useState([]);

  const onDataChange = (items) => {
    let attacks = [];

    items.forEach((item) => {
      let key = item.key;
      let data = item.val();
      attacks.push({
        key,
        data
      });
    });

    setAttacks(attacks);
  }

  useEffect(() => {
    AttackService.getAll().on("value", onDataChange);

    return () => {
      AttackService.getAll().off("value", onDataChange);
    }
  }, []);

  return (
    <Layout>
      <h1>Attack Compendium</h1>
      <Link href="/attack-builder"><Button>Create Attack</Button></Link>
      <ul>
        {attacks.map((attack) => (
          <li key={attack.key}>
            {attack.data.name}
          </li>
        ))}
      </ul>
    </Layout>
  )
}