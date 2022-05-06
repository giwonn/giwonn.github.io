import { readdirSync } from 'fs'

const PATH = `${__dirname}/..`;

function getFolderList(category: string) { 
  return readdirSync(`${PATH}/${category}/`)
    .filter((folderName) => folderName !== 'README.md');
}

function getChildren(category: string, folderName: string) {
  return readdirSync(`${PATH}/${category}/${folderName}`)
    .map(fileName => `/${category}/${folderName}/${fileName}`)
}

export default (category = '') => getFolderList(category).map((folderName) => (
  {
    text: folderName,
    children: getChildren(category, folderName),
    collapsible: true,
  }
));
