<template>
  <ParentLayout>
    <template #page-bottom>
      <hr />
      <Comment />
    </template>
  </ParentLayout>
</template>

<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';
import Comment from '../components/Comment.vue';
</script>

<style>
hr,
.page > .theme-default-content,
.page-meta,
.page-nav,
.giscus {
  margin: 0 auto;
  max-width: 1200px;
}
</style>
