# Vue 2에서 Vite 사용하는 방법

Vite는 Vue 3 를 기반으로 작동합니다.

그러므로 Vue 3를 사용하면 별다른 설정 없이 사용할 수 있습니다만... Vue 2는 설정을 좀 만져줘야 합니다.

저와 같이 Vue 2에서 Vite를 사용하고 싶은 분들을 위해 이 글을 바칩니다...

Vite 프로젝트를 생성해보신분들은 프로젝트 생성 부분은 건너뛰시면 됩니다.

<br>

## Vite 프로젝트 생성 방법

방법은 아주 간단합니다.  
<br>
일단 Vite 설치부터 진행하겠습니다.  
<br>
프로젝트 폴더를 만들 경로에서 아래 명령어를 입력하면 됩니다.  
ex) abc 라는 폴더 내부에 프로젝트 폴더를 생성할 경우 abc 폴더에서 아래 명령어를 실행하면 됩니다.

### npm

```bash
npm init vite@latest
```

### Yarn

```bash
yarn create vite
```

이후에는 프롬프트 창에 출력된 메시지를 따라주면 됩니다.  
<br>
이제 src 폴더의 HelloWorld.vue를 열어주면... 우리가 봐왔던 vue와 뭔가 다르다는 것이 느껴집니다.

script문이...몬가...이상하다...
저는 처음에 Vite로 프로젝트를 생성하고서는 "Vue 3라고 해서 얼마나 다르겠어~" 하고 HelloWorld.vue 파일을 열어보았는데..

Vue 2랑 많이 다르더라고요 ㅎㅎ.... 그래서 그냥 Vue 2로 바꿔서 사용하기로 했습니다.

<br>
<br>

## Vue 2로 변경하는 법

아마 이 글을 보시는 분들도 Vite 공식문서에서 하라는대로

[https://github.com/underfin/vite-plugin-vue2](https://github.com/underfin/vite-plugin-vue2)

위 플러그인을 설치해서 Vue2로 전환해보려 했을거라고 예상해봅니다...

해당 repository의 install 가이드와 playground를 따라해봐도 안될텐데, 아래와 같이 하시면 됩니다.  
<br>

일단 package.json의 vue 버전 또한 2버전으로 낮춰줍니다.

@vitejs/plugin-vue 플러그인을 지워줍니다.

그리고 vite-plugin-vue2 vue-template-compiler 플러그인을 설치해줍니다.

```
yarn remove @vitejs/plugin-vue
yarn add vite-plugin-vue2 vue-template-compiler -D
```

플러그인을 설치하셨으면 vite.config.js 파일을 변경해줍니다.

```js
import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';

export default defineConfig({
  plugins: [createVuePlugin()],
});
```

그리고 yarn dev 명령어를 실행해보면 아래와 같은 에러가 발생합니다.

> [vite] Internal server error: Component template should contain exactly one root element.  
> If you are using v-if on multiple elements, use v-else-if to chain them instead.

이러한 에러가 발생하는 이유는 vite에서 자동으로 만들어 준 vue 초기 설정이 vue 3에 맞춰져 있기 때문입니다.

Vue 2에 맞게 하나씩 바꿔주겠습니다.  
<br>

해야 할 일은 3가지 입니다.

1. **main.js를 Vue2에 맞게 변경하기**

2. **template 태그의 root-element를 하나로 만들어주기 (= 최상단을 div로 감싸주기)**

3. **Vue2에 맞게 script문 변경하기**

<br>

코드는 아래와 같습니다.

(참고 : App.vue의 최상단 div에 id="app"을 해주어야 App.vue의 style 태그가 동작합니다.)

### main.js

```js
import Vue from 'vue';
import App from './App.vue';

new Vue({
  render: (h) => h(App),
}).$mount('#app');
App.vue
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
export default {
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

### HelloWorld.vue

```js
<template>
  <div>
    <h1>{{ msg }}</h1>

    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Documentation </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>

    <button type="button" @click="count++">count is: {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
```

이렇게 하고 나면 아래와 같이 정상적으로 데브서버가 동작합니다.

읽어주셔서 감사합니다 :)

::: tip 추가사항

vscode에서 vite는 volar 사용하면 좋다고 자꾸 추천해주는데, **vetur 쓰셔도 아무 상관없습니다!** 굳이 설치 안해도 돼요!  
~~(vue 2에서 volar 사용하려면 설정 또 만져줘야 합니다... 너무 귀찮...ㅇㅏ...)~~
:::
