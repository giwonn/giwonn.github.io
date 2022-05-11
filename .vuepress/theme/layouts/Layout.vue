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
import { onMounted } from 'vue';

let iframe;

onMounted(() => {
  iframe = document.querySelector('iframe.giscus-frame')?.contentWindow;
  iframe && document.querySelector('.toggle-dark-button')?.addEventListener('click', changeTheme);
});

const changeTheme = (e) => {
  const currentTheme = document.querySelector('HTML.dark')?.classList.contains('dark')
    ? 'dark'
    : 'light';
  const setConfig = { theme: currentTheme };

  iframe?.postMessage({ giscus: { setConfig } }, 'https://giscus.app');
};
</script>

<style lang="scss">
.page > .theme-default-content,
.page-meta,
.page-nav,
.giscus {
  max-width: 1200px;
}

.giscus {
  width: auto;
  margin: 0 auto;
  padding: 2rem 2.5rem;

  iframe {
    width: 100%;
    border-top: 1px solid var(--c-border);
    padding-top: 1rem;
  }
}
</style>
