# vue 파일 구조

:::tip
해당 글은 Vue <Badge type="tip" text="v2" vertical="top" /> 버전을 기준으로 작성되었습니다.  
**Composition API**를 이용한 작성법은 포함하지 않습니다.
:::

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

## \<script>

| 속성 | 뜻 |
| :---: | :---:|
| name | 해당 컴포넌트의 이름을 지정해줌 |
| data | 사용할 데이터(state)를 여기서 선언함 |
| components | 사용할 컴포넌트들을 여기서 관리함 |
| props | 상속받은 데이터를 관리함 |
| watch | 해당 데이터가 변화하면 추가적인 처리를 해줌 |
| computed | 데이터를 이용해 새로운 값을 저장할 때 사용함 |
| methods | 사용할 메서드를 여기서 관리함 |

### 사용 예
```vue
<script>
import Modal from './Modal.vue';

export default {
  name: 'App',
  data() {
    return {
      price1: 60,
      colorRed: 'color:red',
    }
  },
  components: {
    Modal: Modal,
  }
  props: {
    onerooms: Array, // (변수이름: 타입) 형식으로 저장함
  },
  watch: {
    price1(a, b) {   // 함수 이름은 감시할 변수명과 같게 지어줌 (a=바뀐값, b=이전값)
      if (a == 70) { // a를 70으로 바꾼다면?
        console.log(`a는 ${a}`);            // "a는 70"
        console.log(`이전의 a는 ${b}였음`) // "이전의 a는 60이었음"
      }
    }
  },
  computed: {

  },
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