import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import readdirSyncRecursive from './utils';

const rulesDirectory = path.join(process.cwd(), 'src', 'client', 'content', 'rules');

export function getRulesData() {
  const fileNames = readdirSyncRecursive(rulesDirectory);
  const allRules = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    // const fullPath = path.join(rulesDirectory, fileName);
    const fileContents = fs.readFileSync(fileName, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data
    };
  });

  return allRules;
}

export function getAllRulesIds() {

}

export async function getRuleData(id) {

}