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
.utterances {
  max-width: 1200px;
}
</style>
