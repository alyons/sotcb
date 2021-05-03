import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout';
import { getRulesData } from '../lib/rules';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps() {
  const allRulesData = getRulesData();

  return { props: { allRulesData } };
}

function RulesTableOfContents({ allRulesData }) {
  return (
    <Layout>
      <h1>Player's Guide</h1>
      <h1>Game Master's Guide</h1>
    </Layout>
  )
}

export default RulesTableOfContents;
