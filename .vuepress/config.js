const getSidebar = require('./getSidebar');

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
      { text: 'TIL', link: '/blog/TIL/' },
      { text: '알고리즘', link: '/blog/algorithm/' },
      { text: 'Book', link: '/blog/book/' },
      { text: '개발노트', link: '/blog/devnote/' },
      { text: 'GitHub', link: 'https://github.com/giwonn' },
    ],
    sidebar: {
      '/blog/TIL/': getSidebar('TIL'),
      '/blog/book/': getSidebar('book'),
      '/blog/devnote/': getSidebar('devnote'),
      '/blog/algorithm/': getSidebar('algorithm'),
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
          moment.locale('ko-KR');
          return moment(timestamp).format('YYYY. MM. DD. HH:mm');
        },
      },
    ],
    ['sitemap', { hostname: 'https://giwonn.github.io/' }],
    ['@vuepress/medium-zoom'],
  ],
};
