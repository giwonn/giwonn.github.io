<template>
  <div class="toc">
    <div v-for="item in toc">
      <p v-if="item.tagName === 'H3'" style="text-indent: 30px">
        {{ item.textContent }}
      </p>
      <p v-else>
        {{ item.textContent }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue';

const toc = reactive<{ tagName:string; textContent: string; indent: string }[]>([]);

// const toc = computed(() => {
//   return list.map(item => {
//     const blank = item.tagName === 'H3' ? '\t' : ''
//     const textContent = item.textContent
//     return blank + textContent
//   })
// })

onMounted(() => {
  const body = document.querySelector('.theme-default-content');
  const titleList = [...body.querySelectorAll<HTMLHeadingElement>('h2, h3')]
  const tocList = titleList.map(el => ({
    tagName: el.tagName,
    textContent: el.textContent.replace('# ', ''),
    indent: el.tagName === 'H3' ? '30px': '0px',
  }))
  toc.push(...tocList)

});
</script>
