# Vue 라이프사이클
::: tip
해당 글은 Vue v2를 기반으로 작성되었습니다.
:::

1. **create 단계** - 데이터(data, methods)만 존재하는 단계
2. **mount 단계** - \<template>을 렌더링하여 지정한 요소에 부착해줌
4. **update 단계** - data가 변하면 해당 컴포넌트가 re-Rendering 됨
5. **destroy 단계** - 컴포넌트가 삭제되면 발생

<br>

## Lifecycle Hook
Lifecycle 사이사이에서 코드를 실행시키고 싶을 때 사용함  
  
script문에 **beforeCreate, created, beforeMount, mounted, beforeUpdate** 등을 이용하여  
필요할 때 우리가 원하는 명령을 삽입할 수 있다. (뭔가 안드로이드랑 비슷한듯?)  
  
```vue
<script>
export default {
  name: "abcd",
  // ...
  beforeCreate() {
    // 기능 작성
  },
  // ...
}
</script>
```
  
![vue-lifecycle](/images/TIL/FW-Vue/vue-lifecycle.png)



### 1. Create 단계
데이터(data, methods)를 정의해준다.
- **beforeCreate** : data, methods 속성이 아직 정의되지 않은 시점이라 접근할 수 없고,
 DOM과 같은 화면 요소 또한 접근할 수 없다.

- **created** : data, methods 속성이 정의되고 나서 호출되는 메소드  
**(주로 서버에서 데이터를 받아와서 로컬데이터에 매핑시킬 때 사용한다.)**

### 2. Mount 단계
인스턴스가 화면에 부착된다.
- **beforeMount** : DOM에 인스턴스를 부착하기 전에 호출되는 메소드  
**(render()가 호출되기 직전의 로직을 추가할 때 사용한다.)**

- **mounted** : DOM에 인스턴스가 부착되고 호출되는 메소드  
**(DOM에 접근할 수 있어 화면 제어 로직을 수행하기 좋다.)**

### 3. Update 단계
데이터가 변경되면 인스턴스를 새로 갱신한다.
- **beforeUpdate** : watch를 통해 감시하는 값들이 바뀌기 전에 부른다.  
**(변경 예정인 새 데이터를 조작하거나 이와 관련된 로직을 넣어줄 때 많이 사용한다.)**

- **updated** : mounted와 마찬가지로 화면을 그리고 나서 실행된다.
값을 변경하면 다시 화면을 렌더링하면서 무한루프에 빠질 수 있기 때문에,
 computed, watch와 같은 속성을 사용해야 한다.  
**(보통은 변경된 데이터의 DOM과 관련된 로직을 추가한다.)**

### 4. Destroy 단계
인스턴스가 소멸된다.
- **beforeDestroy** : vue 인스턴스가 파괴되기 직전에 호출된다.  
아직 인스턴스에 접근할 수 있기 때문에, **인스턴스의 데이터를 삭제하기 좋은 단계다.**

- **destroyed** : vue 인스턴스가 파괴된 이후에 호출된다.
