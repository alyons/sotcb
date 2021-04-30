import React from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/layout';
import Head from 'next/head';
import Link from 'next/link';

function BookTemplate({ content, data }) {
  const frontmatter = data;

  return (
    <Layout>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <h1>{frontmatter.title}</h1>
      <ReactMarkdown source={content} />
      <Link href="/"><a>Back to home.</a></Link>
    </Layout>
  )
}

BookTemplate.getInitialProps = async (context) => {
  const { book } = context.query;

  const content = await import(`../../content/${book}.md`);

  const data = matter(content.default);
  console.log(data);

  return  { ...data };

  return { book };
}

export default BookTemplate;
