import { path } from '@vuepress/utils'

export default {
  name: 'vuepress-theme-local',
  extends: '@vuepress/theme-default',
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
  },
  alias: {
    '@theme/HomeFooter.vue': path.resolve(__dirname, 'components/Comment.vue'),
  },
};
