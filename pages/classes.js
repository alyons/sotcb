import React from 'react';

import {
  GridList
} from '@material-ui/core';

import ClassCard from '../components/class-card';
import Layout from '../components/layout';
import { getSortedClassesData } from '../lib/classes';

export async function getStaticProps() {
  const allClassesData = getSortedClassesData();

  return {
    props: {
      allClassesData
    }
  }
}

function Classes({ allClassesData }) {
  return (
    <Layout>
      <h1>Classes</h1>
      <h2>Martial</h2>
      {allClassesData.martial.map(({ id, title, image }) => (
        <ClassCard id={id} title={title} image={image} key={id} />
      ))}
      <h2>Technical</h2>
      {allClassesData.technical.map(({ id, title, image }) => (
         <ClassCard id={id} title={title} image={image} key={id} />
      ))}
      <h2>Magical</h2>
      {allClassesData.magical.map(({ id, title, image }) => (
         <ClassCard id={id} title={title} image={image} key={id} />
      ))}
    </Layout>
  );
}

export default Classes;
