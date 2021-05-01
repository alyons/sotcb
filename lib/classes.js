import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import gfm from 'remark-gfm'
import html from 'remark-html'

const classesDirectory = path.join(process.cwd(), 'content', 'classes');

export function getSortedClassesData() {
  const fileNames = fs.readdirSync(classesDirectory);
  const allClassesData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(classesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data
    };
  });

  const sortedResults = {
    martial: [],
    magical: [],
    technical: []
  };

  sortedResults.martial = allClassesData.filter(c => c.type === "martial");
  sortedResults.magical = allClassesData.filter(c => c.type === "magical");
  sortedResults.technical = allClassesData.filter(c => c.type === "technical");

  return sortedResults;
}

export function getAllClassIds() {
  const fileNames = fs.readdirSync(classesDirectory);

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getClassData(id) {
  const fullPath = path.join(classesDirectory, `${id}.md`);
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
  }
}
