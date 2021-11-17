# vuepress utterances 댓글 기능 구현

> vuepress 기본 테마를 기준으로 설명합니다.

utterances는 본인의 깃허브 레포지토리를 이용하여 댓글을 관리할 수 있다.

레포지토리의 issue 기능을 통해 댓글을 구현한 것으로 보인다.

글을 따로 작성하는 이유는 다른 분들도 댓글 기능 추가에 대해 작성해주셨지만

시간이 지나서 방법이 바뀐건지 적용이 제대로 되질 않았었다.

삽질 한 경험을 토대로 어떤 방법으로 성공했는지 작성하고자 한다.

## github 설정

첫 번째로 해야 할 일은 댓글을 받아줄 레포지토리를 만드는 것이다.

혹은 기존의 레포지토리를 사용해도 좋다.

[https://github.com/apps/utterances](https://github.com/apps/utterances)

위의 링크를 통해 댓글을 관리해줄 레포지토리를 지정해준다.

이제 vuepress의 설정만 남았다.

<br>

## vuepress 설정

vuepress를 사용하는 이상 utterances를 컴포넌트화 시켜야한다.

vuepress는 components라는 폴더 내에 vue파일을 만들어 놓으면 언제든지 끌어와서 사용할 수 있다.

만약 본인이 마크다운을 작성하다가 특정 위치에 컴포넌트를 사용하고 싶으면 그냥 사용하면 된다.

일단 Comment 라는 이름으로 utterances 컴포넌트를 만들어보자.

```js
// .vuepress/components/Comment.vue
<template>
  <div ref="comment"></div>
</template>
<script>
export default {
  mounted() {
    const utterances = document.createElement("script");
    utterances.type = "text/javascript";
    utterances.async = true;
    utterances.crossorigin = "anonymous";
    utterances.src = "https://utteranc.es/client.js";

    utterances.setAttribute("issue-term", "pathname"); // issue 탭에 어떤식으로 표기할지 정할 수 있다. pathname, url, title, og:title 중 하나를 골라서 선택
    utterances.setAttribute("theme", "github-light"); // theme 설정 (github-light, github-dark, preferred-color-scheme, github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light) 중 하나 선택
    utterances.setAttribute("repo", `giwonn/blog-comment`); // 본인이 사용할 레포지토리를 지정해야한다. ex) 깃헙닉네임/레포지토리
    this.$refs.comment.appendChild(utterances);
  }
};
</script>
```

Comment.vue 파일을 만들었으면 사실상 90%는 한 것이다.

만약 마크다운을 작성하다가 댓글 기능을 달고 싶다면 바로 사용하면 된다.

```md
# 안녕?

## 하이?

<Comment />
```

이렇게 하면 html로 변환되면서 우리가 만들어놓은 Comment.vue가 저 태그에 들어간다.

하지만 이렇게 하는것 보다 다들 자동화를 하고 싶어할거라는걸 다 안다.

일괄적으로 모든 페이지에 댓글 기능을 넣어보자.

<br>

## 모든 페이지에 댓글 기능 추가하기

처음에 말했듯이 기본 테마를 사용한다는 가정하에 설명을 진행한다.

### 1. theme/index.js 추가

.vuepress에 theme 폴더를 생성하고 index.js를 만들어준다.

기본 테마를 확장하기 위해서는 theme-default 라는 기능이 있어야한다.

```shell
npm i -D @vuepress/theme-default
```

해당 기능을 인스톨 해줬으면 extend해주자.

```js
// .vuepress/theme/index.js
module.exports = {
  extend: '@vuepress/theme-default',
};
```

### 2. theme/Layout.vue 추가

theme 폴더에 Layout.vue를 추가해주자.

그리고 아래와 같이 작성해주자.

```js
<template>
  <ParentLayout>
    <Comment slot="page-botom"/>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue';
import Comment from '../components/Comment.vue';
export default {
  components: {
    ParentLayout,
    Comment,
  },
};
</script>

```

가장 중요한건 저 slot속성은 꼭 작성해주어야 한다.

[네임드 슬롯 관련 예제](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/theme-vue/layouts/Layout.vue#L3)

위의 공식 예제를 보면 sidebar-top과 page-bottom이라는 네임드 슬롯을 사용하는 것으로 보인다.

나는 page-bottom을 이용하였다.

```js
// .vuepress/theme/Layout.vue
<template>
  <ParentLayout>
    <Comment slot="page-bottom" />
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue';
export default {
  components: {
    ParentLayout,
  },
};
</script>
```

### Reference

[Vuepress + Utterances](https://junilhwang.github.io/TIL/Vuepress/Utterances/)  
[vuepress + utterances (블로그에 github 댓글 추가하기)](https://kyounghwan01.github.io/blog/Vue/vuepress/vuepress-github-comment/)  
[뷰프레스 Disqus 댓글 기능 구현하기 + layout 확장하기](https://limdongjin.github.io/vuejs/vuepress/layout-extend.html#disqus-%E1%84%83%E1%85%A2%E1%86%BA%E1%84%80%E1%85%B3%E1%86%AF-%E1%84%80%E1%85%B5%E1%84%82%E1%85%B3%E1%86%BC%E1%84%8B%E1%85%B3%E1%86%AF-component%E1%84%85%E1%85%A9-%E1%84%80%E1%85%AE%E1%84%92%E1%85%A7%E1%86%AB%E1%84%92%E1%85%A2%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A1)
