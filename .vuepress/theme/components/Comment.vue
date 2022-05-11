<template>
  <Giscus
    repo="giwonn/giwonn.github.io"
    repoId="R_kgDOGRKbbA"
    category="블로그 댓글"
    categoryId="DIC_kwDOGRKbbM4CBGca"
    mapping="title"
    term="Welcome to Giwon's Github-blog"
    reactionsEnabled="1"
    emitMetadata="0"
    inputPosition="top"
    :theme="value"
    lang="en"
  />
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { Giscus } from '@giscus/vue';

const colorScheme = localStorage.getItem('vuepress-color-scheme');
const { value } = computed(() => (colorScheme === 'dark' ? 'dark' : 'light'));
</script>
