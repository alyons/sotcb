import Head from 'next/head';

import Layout from '../../components/layout';
import { getAllClassIds, getClassData } from '../../lib/classes';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticPaths() {
  const paths = getAllClassIds();

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const classData = await getClassData(params.id);

  return { props: { classData } };
}

export default function Class({ classData }) {
  return (
    <Layout>
      <Head>
        <title>{classData.Title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{classData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: classData.contentHtml }} />
      </article>
    </Layout>
  )
}