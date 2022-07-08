<template>
  <div class="toc">document.</div>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue';

onMounted(() => {
  const body = document.querySelector('.theme-default-content');
  const titleNodes = [...body.querySelectorAll('h2, h3')];

  titleNodes.map((titleNode) => {
    // console.log(titleNode.innerText);
  });

  //   body.querySelectorAll('h2').map((node) => {
  //     node.child
  //   })
});
</script>
