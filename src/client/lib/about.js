import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const aboutUsPath = path.join(process.cwd(), 'src', 'client', 'content', 'about-us.md');

export async function getAboutData() {
  const fileContents = fs.readFileSync(aboutUsPath);

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}