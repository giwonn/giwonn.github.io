# TIL & 개발노트

## 메뉴

### 1. [TIL](./TIL/)

### 2. [개발노트](./devnote/)

<br>

### 우측상단에서도 메뉴를 고르실 수 있습니다.

<br>

## 개발 원칙
### KISS (Keep it Simple Stupid)
코드를 멍청하다는 생각이 들 정도로 간결하게 유지하자.
- 대부분의 프로그램은 단순할 때 더 원활히 동작한다.
- 새로운 코드를 작성하면서 소모하는 대부분의 작업은 **코드 읽기**이다. 나중에 읽기 편하게 최대한 다듬자.
- 필요 이상으로 유연하게 코드를 다듬지는 말자. 요구사항이 어떻게 바뀔지는 아무도 모른다.
:::tip 전략
  1. 상속, 다형성, 동적 바인딩 등 복잡한 객체 지향의 개념의 사용을 최대한 피한다. 위임, 단순 조건문을 최대한 활용하여 개발한다.
  2. 로우 레벨 최적화를 자제한다. 성능 최적화보다 정확한 동작이 우선이다.
  3. 성능에 문제될 정도로 방대한 데이터를 다루지 않는 이상 단순한 알고리즘을 사용하자.
:::
배열에서 짝수만 필터링해서 2배를 해준 배열을 만들어보자.  
굳이 reduce를 쓰는 것 보다는 filter와 map을 번갈아 쓰는것이 오히려 보기엔 나을 수도 있다.  
물론 filter, map을 쓰는 것이 무조건 좋은건 아니다.  
**하지만 웬만해서는 읽기 편할 것이다.**
```js
const arr = [1, 2, 3, 4];
// 간결한 코드
const simple = arr.filter(val => val % 2 === 0).map(filteredVal => filteredVal * 2) // [4, 8]

// 복잡한 코드
const complex = arr.reduce((acc, cur) => { // [4, 8]
    if (cur % 2 === 0) {
        acc.push(cur*2)
    }
    return acc;
}, []);
```

### YAGNI (You are not gonna need it)
- 정말로 필요한 기능만 구현한다.
- 나중에 필요할 듯한 기능을 같이 구현하지 말라. 일단 현재에 집중하자.

### Do the simplest thing that could possibly work
- 문제를 해결하기 위해 가장 단순한 방법을 찾는다.
- 전략
  1. 문제를 세분화하라.
  2. 단순한 문제를 해결하기 위한 함수와 객체를 만들어라.
  3. 이러한 함수와 객체들은 단순하고 이해하기 쉬워진다.
  4. 아무런 변경 없이 어디에든 붙일 수 있는 클래스를 만들자. (즉, 의존성이 적은 클래스!)

### 성급한 최적화는 X
- 일단 구현하자.
- 구현을 끝내고 예외처리 -> 최적화 루트를 밟자.

### 상속보다는 합성을 사용하자.
- **is a** 인지 **has a** 인지 제대로 구분하자.
- 구분을 잘 해야 상속을 사용할지 합성을 사용할지 잘 결정할 수 있게 된다.