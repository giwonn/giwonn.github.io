import { path } from '@vuepress/utils';
import getSidebar from './getSidebar';
import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  title: `기록하는 곳`,
  cache: path.resolve(__dirname, './.cache'),
  theme: defaultTheme({
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
  }),
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-0EYX5NK2D9',
    }),
    docsearchPlugin({
      appId: '516V9TFBMD',
      apiKey: 'ebc82cf2e22f5f7594d6ef258c904439',
      indexName: 'giwon',
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
    })
  ],
})
