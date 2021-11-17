const getDir = require('./getDir');
const dayjs = require('dayjs');
require('dayjs/locale/ko');

module.exports = {
  head: [
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-ETXW1PYBQK',
      },
    ],
    [
      'script',
      {},
      [
        "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-ETXW1PYBQK');",
      ],
    ],
  ],
  locales: {
    '/': {
      lang: 'ko-KR',
    },
  },
  title: `기원's Study(ing)`,
  description: 'Just playing around',
  themeConfig: {
    smoothScroll: true,
    lastUpdated: '최근수정일',
    nav: [
      { text: 'TIL', link: ['/TIL/'] },
      { text: '개발노트', link: '/devnote/' },
      { text: 'GitHub', link: 'https://github.com/giwonn' },
    ],
    sidebar: {
      '/devnote/': getDir('/devnote/'),
      '/': getDir('/'),
      '/': getDir('/TIL/'),
    },
    searchPlaceholder: '검색해주세요...',
    docsRepo: 'giwonn/giwonn.github.io',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '수정',
  },
  plugins: [
    '@vuepress/back-to-top',
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          dayjs.locale(lang);
          return dayjs(timestamp).format('YYYY.MM.DD A h:mm');
        },
      },
    ],
    ['vuepress-plugin-code-copy'],
    { sitemap: { hostname: 'https://giwonn.github.io/TIL/' } },
  ],
};
