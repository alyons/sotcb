import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import remark from 'remark';
import gfm from 'remark-gfm';
import html from 'remark-html';
import { getAllFilesRecursive } from './utils';

const booksDirectory = path.join(process.cwd(), 'src', 'client', 'content', 'books');

// A book is a top level folder in content/books
export function getAllBooksData() {
  const bookIds = fs.readdirSync(booksDirectory);

  let books = [];

  bookIds.forEach((id) => {
    let book = {};
    book.id = id;
    book.title = (id == 'pg') ? "Player's Guide" : "Game Master's Guide";
    
    // Build Table of Contents
    book.sections = [];
    // Read dirs in here
    let sectionIds = fs.readdirSync(path.join(booksDirectory, id));
    sectionIds.forEach((sid) => {
      let section = {};
      section.id = sid;
      section.chapters = [];

      let chapterIds = fs.readdirSync(path.join(booksDirectory, id, sid));
      chapterIds.forEach((cid) => {
        const fullPath = path.join(booksDirectory, id, sid, cid);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        section.chapters.push(Object.assign({}, { id: cid.replace(/\.md$/, ''), ...matterResult.data }));
      });

      book.sections.push(section);
    });

    books.push(book);
  });

  return books;
}

// Should make something that looks like
// ../pg/part1/build-your-character
export function getAllBookContentIds() {
  const fileNames = getAllFilesRecursive(booksDirectory);

  // substring(1) removes the leading slash in the file names
  // we should probably change the getAllFilesRecursively to return 
  // without the leading slash
  return fileNames.map(filename => {
    return {
      params: {
        id: filename.substring(1).replace(/\.md$/, '').split('/')
      }
    }
  })
}


export async function getBookData(id) {
  const fullPath = path.join(booksDirectory, `${id.join('/')}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(gfm)
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data
  };
}
