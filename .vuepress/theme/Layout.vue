<template>
  <ParentLayout id='parent'>
    <Comment slot="page-bottom" />
    <!-- <CommentDarass slot="page-bottom"/> -->
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue';
export default {
  components: {
    ParentLayout
  },
};
</script>
<style>
#parent > main > .content__default {
  max-width: 1200px;
}
</style>
