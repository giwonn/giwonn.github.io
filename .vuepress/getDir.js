const { readdirSync } = require('fs');
const midDir = process.env.NODE_ENV === 'production' ? '/../' : '/../';

// addForbidden : 경로 탐색할 때 무시해야 할 경로 추가해줌
// 타입은 String,
module.exports = (path = '') => {
  const dir = getDir(path);

  const res = dir.map((folder) => {
    const children = getFiles(folder, path);
    return {
      title: folder,
      children,
    };
  });

  // console.log(res);

  return res;
};

const getDir = (path) => {
  const common = ['.DS_Store', '.vuepress', 'README.md', 'images', 'vue.config.js', 'devnote'];
  const git = ['.github', '.git', '.gitattributes', '.gitignore'];
  const npm = ['node_modules', 'package.json', 'package-lock.json'];

  const forbidden = [...common, ...git, ...npm]; // 접근하면 안되는 경로
  const res = readdirSync(__dirname + midDir + path); // 최종적으로 담기게 될 디렉토리 리스트

  return res.filter((name) => !forbidden.includes(name)); // filter 메서드로 포함하지 않을 디렉토리 걸러줌
};

// 파일 리스트 배열로 리턴
const getFiles = (folder, path) => {
  const res = readdirSync(__dirname + midDir + path + folder);
  const result = res.filter((fileName) => fileName.includes('.md'));

  return result.map((fileName) => `${path}${folder}/${fileName.replace('.md', '')}`);
};
