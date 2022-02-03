const getSidebar = require('./getSidebar');
const { path } = require('@vuepress/utils');

module.exports = {
  title: `기원's Study(ing)`,
  description: '기원이의 기술 블로그?',
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    navbar: [
      { text: '홈', link: '/' },
      { text: 'TIL', link: '/TIL/' },
      { text: '알고리즘', link: '/algorithm/' },
      { text: 'Book', link: '/book/' },
      { text: '개발노트', link: '/devnote/' },
      { text: 'GitHub', link: 'https://github.com/giwonn' },
    ],
    sidebar: {
      '/TIL/': getSidebar('TIL'),
      '/book/': getSidebar('book'),
      '/devnote/': getSidebar('devnote'),
      '/algorithm/': getSidebar('algorithm'),
      '/': [''],
    },
    sidebarDepth: 1,
  },
  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-0EYX5NK2D9',
      },
    ],
    [
      '@vuepress/docsearch',
      {
        apiKey: 'ebc82cf2e22f5f7594d6ef258c904439',
        indexName: 'giwon',
        locales: {
          '/': {
            placeholder: 'Search Documentation',
            translations: {
              button: {
                buttonText: 'Search',
              },
            },
          },
        },
      },
    ],
  ],
};
