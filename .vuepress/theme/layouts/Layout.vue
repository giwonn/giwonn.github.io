<template>
  <ParentLayout>
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
  const giscusWidget = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
  if (!giscusWidget) return;

  document.querySelector('.toggle-dark-button')?.addEventListener('click', () => {
    const currentTheme = document.querySelector('HTML.dark')?.classList;
    const setConfig: Partial<GiscusProps> = { theme: currentTheme?.contains('dark') ? 'dark' : 'light' };
    sendMessage({ setConfig })
  });
});

const sendMessage = <T>(message: T) => {
  const giscusWidget = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
  if (!giscusWidget) return;
  giscusWidget.contentWindow.postMessage({giscus: message}, 'https://giscus.app');
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
