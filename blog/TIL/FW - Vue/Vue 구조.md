# vue 파일 구조
- **\<template>**: HTML 코드 작성
- **\<script>**: javascript 코드 작성
- **\<style>** : CSS 코드 작성


## \<template>
```vue
<template>
  <div>
    <!-- :변수 형식으로 변수 상속 가능 -->
    <!-- @close-modal 과 같이 자식의 함수를 받아줄 수 있음 -->
    <Modal @close-modal="modalCheck = false;" :onerooms="onerooms" :clickedIndex="clickedIndex" :modalCheck="modalCheck" />

    <div class="menu">
      <!-- 반복문 -->
      <!-- v-for="(element, idx) in 데이터" :key="구분자" -->
      <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
    </div>

    <Discount v-if="showDiscount" />

    <button @click="priceSort">가격순정렬</button>
    <button @click="sortBack">되돌리기</button>
    
    <Card @open-modal="modalCheck = true; clickedIndex = i;" v-for="(oneroom, i) in onerooms" :key="i" :oneroom="oneroom" />
  </div>
</template>
```
  
<br>

# \<script>

## name
해당 컴포넌트의 이름을 지정해줌
```vue
<script>
export default {
  name: 'App',
}
</script>
```

<br>

## data()
사용할 데이터(state)를 넣어줌  
변수, style 등... 다양한 값들을 넣어줄 수 있음  
최종적으로 사용할 데이터들을 return 내부에 적어줌
```vue
<script>
export default {
  name: 'App',
  data() {
    return {
      price1: 60,
      colorRed: 'color:red',
    }
  },
</script>
```

<br>

## watch
변수를 감시한다.  
  
computed라는 속성과 비교되는데  
**computed**는 어떤 값을 출력할 때 따로 연산을 추가해서 적용하고 싶을때,  
**watch**는 조건식을 부여할 때 사용한다.  
```jsx
<script>
export default {
  // ...
  watch: {
    price1(a, b) {   // 함수 이름은 감시할 변수명과 같게 지어줌 (a=바뀐값, b=이전값)
      if (a == 70) { // a를 70으로 바꾼다면?
        console.log(`a는 ${a}`);            // "a는 70"
        console.log(`이전의 a는 ${b}였음`) // "이전의 a는 60이었음"
      }
    }
  },
</script>
```

<br>

## props
상속받은 데이터를 여기서 관리함
```vue
<!-- App.vue -->
<template>
  <Modal :onerooms="onerooms" />
</template>
```
```vue
<!-- Modal.vue -->
<script>
export default {
  // ...
  props: { // 상속받은 데이터
    onerooms: Array, // (변수이름: 타입) 형식으로 저장함
  },
</script>
```

<br>

## methods
사용할 메서드를 여기서 선언함
**@click** 대신 **v-on:click**으로 사용 가능함
```vue
<template>
  <!-- 넘겨줄 인자가 없을 경우 -->
  <button @click="printOne">버튼1</button>
  
  <!-- 넘겨줄 인자가 있을 경우 -->
  <button @click="printTwo(변수)">버튼2</button>
  
  <!-- 원본 DOM 이벤트에 엑세스 해야할 경우 -->
  <button @click="printThree(변수, $event)">버튼3</button>
</template>

<script>
export default {
  // ...
  methods: {
    printOne() {
      console.log("버튼1 클릭");
    }
    printTwo(변수) {
      console.log("버튼1 클릭");
    }
    printTwo(변수, event) {
      console.log("버튼1 클릭", event.target.value);
    }
  }
}
</script>
```

<br>

## components
사용할 컴포넌트들을 여기에 선언함
```vue
<template>
  <Modal/>
</template>

<script>
import Modal from './Modal.vue';
  
export default {
  // ...
  components: {
    Modal: Modal,
  }
</script>
```
