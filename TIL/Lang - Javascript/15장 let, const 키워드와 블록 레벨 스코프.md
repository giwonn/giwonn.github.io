# 15장. let, const키워드와 블록 레벨 스코프

- var : 중복 선언 가능, 함수 레벨 스코프
- let, const : 중복 선언 금지, 블록 레벨 스코프
- const : 선언과 동시에 초기화를 해야한다, 재할당 금지

## 함수 레벨 스코프

함수 레벨 스코프는 오로지 **함수의 코드 블록만을 지역 스코프로 인정**한다.

## 변수 호이스팅

함수에 선언된 변수들이 함수 유효 범위의 최상단으로 끌어올려지는 것

- var : 선언 + undefined 초기화
- let, const : 선언만 끌어올려짐
  (개발자가 선언과 초기화를 따로 한 경우 선언시점에 undefined로 초기화 된다.)

let, const는 초기화가 되지 않았으므로 참조할 수 없어서 선언 이전에 호출하면 TDZ에 의해 ReferenceError가 발생한다.

- TDZ(Temporal Dead Zone) : 스코프의 시작 지점부터 초기화 시작지점까지 변수를 참조할 수 없는 구간

```js
let foo;
console.log(foo); // undefined

foo = 1;
console.log(foo); // 1
```

- 결과  
  ![Untitled](/images/TIL/Lang-Javascript/let-result.png)
