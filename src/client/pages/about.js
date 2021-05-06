import React from 'react';

import Layout from '../components/layout';

export async function getStaticProps() {
  const aboutUsData = ["Alexander Lyons", "Joel Rechtman"];

  return { props: { aboutUsData } };
}

function About({ aboutUsData }) {
  return (
    <Layout>
      <h1>About Us</h1>
    </Layout>
  );
}

export default About;
