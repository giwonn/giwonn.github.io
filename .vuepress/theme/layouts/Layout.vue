<template>
  <ParentLayout>
    <template #page-bottom>
      <Comment />
    </template>
  </ParentLayout>
</template>

<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';
import Comment from '../components/Comment.vue';
</script>

<style>
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
}
.giscus > iframe {
  width: 100%;
  border-top: 1px solid var(--c-border);
  padding-top: 1rem;
}
</style>
