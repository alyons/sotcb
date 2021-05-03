import fs from 'fs';
import path from 'path';

function readdirSyncRecursive(dirPath, arrayOfFiles) {
  let files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(file => {
    if (fs.statSync(`${dirPath}/${file}`).isDirectory()) {
      arrayOfFiles = readdirSyncRecursive(`${dirPath}/${file}`, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(__dirname, `${dirPath}/${file}`));
    }
  });

  return arrayOfFiles;
}

export default readdirSyncRecursive;
