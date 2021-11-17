# Prototype 간단 요약

## class에 대해서

Prototype이 무엇인지 알아보기 전에 Class에 대해서 간단히 살펴보고 넘어가겠다.

```js
// es6 이전
function 기계(행동) {
  this.q = 행동;
  this.w = 'snowball';
}

// es6 이후
class 기계 {
  constructor(행동) {
    this.q = 행동;
    this.w = 'snowball';
  }
}

var nunu = new 기계('눈굴리기');
```

위의 코드처럼 this를 이용하면 만들어질 인스턴스의 q, w에 값을 할당해줄 수 있다.

<br>

## Prototype이란?

빠른 이해를 위해 간단하게만 설명하겠다.

모든 Object에는 Prototype이라는 **공간**이 내장되어 있다.

Prototype이 무엇이냐고 묻는다면 "유전자"라고 이해하면 된다.  
바로 예시를 살펴보자.

```js
function 기계() {
  this.q = 'strike';
  this.w = 'snowball';
}

기계.prototpye.name = 'kim';

var nunu = new 기계();
```

마지막 줄에서 '기계'에 대한 인스턴스로 nunu를 생성하였다.  
nunu를 호출해보면  
![image](https://user-images.githubusercontent.com/72638829/133925389-e1c32460-9ea7-42b4-9909-f1282b7c4ea9.png)  
보다시피 name속성은 없는 것처럼 보인다.

하지만  
![image](https://user-images.githubusercontent.com/72638829/133925376-dcd98dd4-ec8c-4315-aa9d-33dd76574431.png)  
이렇게 nunu.name으로 출력하면 'kim'이 정상적으로 나온다.

만약 '기계.prototype.name'을 'lim'으로 할당해주면 nunu.name은 어떻게 될까?  
![image](https://user-images.githubusercontent.com/72638829/133925436-9a887346-bc92-419b-be26-d33d9c662221.png)

![image](https://user-images.githubusercontent.com/72638829/133925441-b1ec09ec-86e0-468f-b664-21838c86a177.png)  
nunu.name 또한 바뀐다.
언뜻 보면 '부모의 prototype을 자식이 공유한다' 라고 생각할 수 있는데 정확한 설명은 아니다.

<br>

## Prototype Chain

즉, Prototype은 상속기능을 구현할 수 있는 장치 중 하나라고 할 수 있다.  
JavaScript 엔진은 값을 찾을 때, 찾고자하는 값이 없으면 상위(부모)로 거슬러 올라가서 탐색한다.  
이런 특성을 프로토타입 체인(Prototype chain)이라고 한다.  
<br><br>

**array 자료형에 .sort(), length 같은 함수들을 사용할 수 있는 이유 또한 프로토타입에 이미 정의되어 있기 때문이다.**
<br><br>

## 프로토타입 대신 Class를 사용하면 되지 않나...?

ES6부터 지원하는 Class는 사실 **Prototype으로 Class를 흉내내서 구현한 것이나 다름 없다.**  
<br>
그래서 사실... 그냥 사용만 할거라면 Class만 알아도 충분하다.  
<br>
하지만 ES5 버전으로 짜여져있는 코드를 ES6로 마이그레이션 한다면...?  
<br>
결국 Prototype을 모르면 불가능하다.  
<br>

## Class 와 Prototype 의 차이

위에서 Class는 Prototype을 이용하여 흉내낸거나 다름없다고 하였다.  
그래서 많은 사람들은 Class를 "**편의 문법**"이라고 부른다.  
<br>
하지만 둘 사이에는 분명한 차이가 있다.  
<br>

1. **class**로 만든 함수엔 특수 내부 프로퍼티인 <code>[[FunctionKind]]: "classConstructor"</code>가 이름표처럼 붙는다.  
   자바스크립트는 다양한 방법을 사용해 함수에 해당 프로퍼티가 있는지 검증한다.  
   이 검증을 통해 클래스 생성자를 new와 함께 호출하지 않으면 에러를 발생하게 한다.

2. 클래스 메서드는 열거할 수 없다. 그래서 <code>for..in</code>으로 객체를 순회할 때, 메서드는 순회 대상에서 제외된다.

3. 클래스는 항상 <code>엄격 모드(use strict)</code>로 실행된다. 클래스 생성자 안 코드 전체엔 자동으로 엄격모드가 적용된다.
