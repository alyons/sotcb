const path = require('path');
const fs = require('fs');

function getAllFilesRecursive(baseDir, diveDir = '', files = []) {
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


let files = getAllFilesRecursive(path.join(__dirname, 'src/client/content/books'));

console.log(files);
