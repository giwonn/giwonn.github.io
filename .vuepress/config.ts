import { path } from '@vuepress/utils';
import getSidebar from './getSidebar';

module.exports = {
  title: `기록하는 곳`,
  cache: path.resolve(__dirname, './.cache'),
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
    contributors: false,
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
        appId: '516V9TFBMD',
        locales: {
          '/': {
            placeholder: '검색',
            translations: {
              button: {
                buttonText: 'Search Documentation',
              },
            },
          },
        },
      },
    ],
  ],
};
