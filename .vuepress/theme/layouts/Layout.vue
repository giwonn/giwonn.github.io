<template>
  <ParentLayout>
<!--    <template #page-right>-->
<!--      <TOC />-->
<!--    </template>-->
    <template #page-bottom>
      <Comment />
    </template>
  </ParentLayout>
</template>

<script setup lang="ts">
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';
import Comment from '../components/Comment.vue';
import TOC from '../components/TOC.vue';
import { onMounted } from 'vue';
import { GiscusProps } from '@giscus/vue';

onMounted(() => {
  document.querySelector('.toggle-dark-button')?.addEventListener('click', () => {
    const currentTheme = document.querySelector('HTML.dark')?.classList;
    const theme = currentTheme?.contains('dark') ? 'dark' : 'light'
    sendMessage(theme)
  });
});

const sendMessage = (theme: string) => {
  const giscusWidget: HTMLIFrameElement & GiscusProps = document.querySelector('giscus-widget');
  if (!giscusWidget) return;
  giscusWidget.theme = theme
}
</script>

<style lang="scss">
.page > .theme-default-content,
.page-meta,
.page-nav,
giscus-widget {
  max-width: 1200px;
}

giscus-widget {
  display: flex;
  width: auto;
  margin: 0 auto;
  padding: 2rem 2.5rem;
}
</style>
