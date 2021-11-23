const getDir = require('./getDir');

module.exports = {
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
      { text: '홈', link: '/' },
      { text: 'TIL', link: '/TIL/' },
      { text: '개발노트', link: '/devnote/' },
      { text: 'GitHub', link: 'https://github.com/giwonn' },
    ],
    sidebar: {
      '/devnote/': getDir('/devnote/'),
      '/TIL/': getDir('/TIL/'),
      '/': [''],
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
          const moment = require('moment');
          moment.locale(lang);
          return moment(timestamp);
          // .format('YYYY. MM. DD. HH:mm');
        },
      },
    ],
    ['vuepress-plugin-code-copy'],
    ['sitemap', { hostname: 'https://giwonn.github.io/' }],
  ],
};
