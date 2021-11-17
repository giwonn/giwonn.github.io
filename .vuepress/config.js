const getDir = require('./getDir');
const dayjs = require('dayjs');
require('dayjs/locale/ko');

module.exports = {
  sitemap: {
    filename: 'sitemap.xml',
    domain: 'https://giwonn.github.io',
  },
  head: [
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-BF2TS7D4KC',
      },
    ],
    [
      'script',
      {},
      [
        "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-BF2TS7D4KC');",
      ],
    ],
  ],
  locales: {
    '/': {
      lang: 'ko-KR',
    },
  },
  title: `기원's Study(ing)`,
  description: '기원이의 기술 블로그?',
  themeConfig: {
    smoothScroll: true,
    lastUpdated: '최근수정일',
    nav: [
      { text: 'TIL', link: '/TIL/' },
      { text: '개발노트', link: '/devnote/' },
      { text: 'GitHub', link: 'https://github.com/giwonn' },
    ],
    sidebar: {
      '/devnote/': getDir('/devnote/'),
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
  ],
};
