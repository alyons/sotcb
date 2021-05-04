import React from 'react';
import Layout from '../../components/layout';
import Head from 'next/head';

import { getAllBookContentIds, getBookData } from '../../lib/books';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticPaths() {
  const paths = getAllBookContentIds();
  // paths.forEach(path => {
  //   console.log(path.params.id.join('/'));
  // });

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  console.log(params.id);
  const bookData = await getBookData(params.id);

  return { props: { bookData } };
}

export default function Book({ bookData }) {
  return (
    <Layout>
      <Head>
        <title>{bookData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{bookData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: bookData.contentHtml }} />
      </article>
    </Layout>
  )
}
