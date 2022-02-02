const { readdirSync } = require('fs');
const blogPath = `${__dirname}/../blog`;

function getFolderList(menu) {
  return readdirSync(`${blogPath}/${menu}/`).filter((folderName) => folderName !== 'README.md');
}

function getChildren(menu, title) {
  return readdirSync(`${blogPath}/${menu}/${title}`).map(
    (fileName) => `${title}/${fileName.replace('.md', '')}`
  );
}

module.exports = (menu = '') => {
  return getFolderList(menu).map((title) => {
    return {
      title,
      children: getChildren(menu, title),
    };
  });
};
