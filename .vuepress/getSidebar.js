const { readdirSync } = require('fs');
const blogPath = `${__dirname}/..`;

function getFolderList(menu) {
  return readdirSync(`${blogPath}/${menu}/`).filter((folderName) => folderName !== 'README.md');
}

function getChildren(menu, folderName) {
  return readdirSync(`${blogPath}/${menu}/${folderName}`).map(
    (fileName) => `/${menu}/${folderName}/${fileName}`
  );
}

module.exports = (menu = '') => {
  return getFolderList(menu).map((folderName) => {
    return {
      text: folderName,
      children: getChildren(menu, folderName),
      collapsible: true,
    };
  });
};
