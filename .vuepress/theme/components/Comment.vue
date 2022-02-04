<template>
  <Giscus
    repo="giwonn/giwonn.github.io"
    repoId="R_kgDOGRKbbA"
    category="Announcements"
    categoryId="DIC_kwDOGRKbbM4CA_-J"
    mapping="pathname"
    term="Welcome to Giwon's Github-blog"
    reactionsEnabled="1"
    emitMetadata="0"
    inputPosition="top"
    :theme="theme"
    lang="en"
  />
</template>
<script>
import { ref, computed } from 'vue';
import { Giscus } from '@giscus/vue';

export default {
  components: {
    Giscus,
  },

  setup() {
    const colorScheme = ref(localStorage.getItem('vuepress-color-scheme'));

    const theme = computed(() => {
      return colorScheme === 'dark' ? 'dark' : 'light';
    });

    return { theme };
  },
};
</script>
