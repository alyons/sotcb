import fs from 'fs';
import path from 'path';

export function getAllFilesRecursive(baseDir, diveDir = '', files = []) {
  let testFiles = fs.readdirSync(path.join(baseDir, diveDir));

  testFiles.forEach(file => {
    if (fs.statSync(path.join(baseDir, diveDir, file)).isDirectory()) {
      files = getAllFilesRecursive(baseDir, `${diveDir}/${file}`, files);
    } else {
      files.push(`${diveDir}/${file}`);
    }
  });

  return files;
}
