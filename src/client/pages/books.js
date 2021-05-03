import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout';
import {
  getAllBooksData
} from '../lib/books';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps() {
  const allBooksData = getAllBooksData();

  return { props: { allBooksData } };
}

const partRegex = /([0-9]+)/;
function partNameFromId(id) {
  let result = partRegex.exec(id);

  if (result == null) return "Appendicies"; // Default Response

  if (result[1] === '0') return "Preface";

  return `Part ${result[1]}`;
}

function Books({ allBooksData }) {
  return (
    <Layout>
      <p>Something should be below this...</p>
      {allBooksData.map((book) => (
        <div key={book.id}>
          <h1>{book.title}</h1>
          {book.sections.map((section) => (
            <div key={`${book.id}-${section.id}`}>
              <h2>{partNameFromId(section.id)}</h2>
              <ul className={utilStyles.list}>
                {section.chapters.map((chapter) => (
                  <li className={utilStyles.listItem} key={`${book.id}-${section.id}-${chapter.id}`}>
                    <Link href={`/books/${book.id}/${section.id}/${chapter.id}`}>
                      <a>{chapter.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </Layout>
  )
}

export default Books;
