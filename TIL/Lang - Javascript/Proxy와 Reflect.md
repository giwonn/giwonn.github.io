---
sidebarDepth: 2
date: 2020-01-01
---

# Proxy와 Reflect
개인적으로 조그만한 프로젝트를 하고 있는데, api를 이용해 외부에서 데이터를 가져오는 작업을 했었다.  
그런데 `response`가 `Proxy`라는 객체로 들어오고 `[[target]]`이라는 프로퍼티 내부에 원하는 데이터가 들어있었다.  
그 당시에는 변수 뒤에 target을 붙여서 데이터를 가져와서 사용했었는데 궁금증은 해결하는게 맞기에... 정리해보았다.  

## Proxy 란?
`Proxy`는 특정 객체를 감싸 프로퍼티 읽기, 쓰기와 같은 **객체에 가해지는 작업을 중간에서 가로채는 객체**이다. Proxy는 해당 객체가 처리하는 특정 명령을 재정의할 수 있게 되는 것이다.
### 문법
```js
let proxy = new Proxy(target, handler);
```
- `target` - Proxy로 감쌀 객체
- `handler` - 동작을 가로채는 메서드인 `trap`이 담긴 객체로, 여기서 명령을 재정의한다. 

<br>

아래 코드는 별다른 기능이 없는 기본적인 프록시 객체다.
```js
let proxy = new Proxy({}, {});
console.log(proxy);
/*
Proxy {}
  > [[Handler]]: Object
  > [[Target]]: Object
  > [[IsRevoked]]: false
*/
```
<br>

주의할 점은 **한 번 세팅된 프록시 객체의 대상 객체는 변경할 수 없다**.  
만약 객체를 변경시키고 싶다면 아래와 같이 프록시 객체를 통해 변경해야 한다.  
```js
let abc = {};
let proxy = new Proxy(abc, {});

proxy.test = 5;  // proxy를 변경해주면
console.log(abc.test); // 5    (target이 변경된다!)
console.log(proxy.test); // 5  (proxy를 사용해 값을 읽을 수도 있다)
```
위에서 `proxy.test = 5`를 했을 때 `5`가 그대로 `target`에 전달됐다.  
이는 `handler`에 어떠한 `트랩`도 설정하지 않았기 때문이다.

<br>

### trap(트랩)

트랩을 설명하기 전에, Javascript에서 객체에 어떤 작업을 할 때에는 Javascript 명세서에 정의된 `내부 메서드`가 깊숙한 곳에서 관여한다.  

예를 들자면, 프로퍼티를 읽을 땐 `[[Get]]`, 쓸 땐 `[[Set]]`이라는 내부 메서드가 관여한다.  
이러한 내부 메서드의 호출을 프록시가 가로챈다. 그리고 가로챈 메서드들을 핸들링하기 위해서 내부 메서드에 대응하는 트랩들이 있다.

기본적인 트랩 추가 방법은 아래와 같다.  
```js
const target = { name: 'target' };
const test = new Proxy(target, {
    get: () => console.log('객체 읽었음');
})
```
Spring을 해 본 사람은 뭔가 익숙함을 느낄텐데, 나는 프록시가 Spring에 AOP와 굉장히 유사하다고 느꼈다.  
(알고보니 <u>Spring AOP가 프록시 패턴을 이용해서 구현</u>된거라고 한다.)
  

만약 같은 트랩이 중복 선언되면 마지막이 선언된 트랩만 적용된다.  

### 폐기 가능한 프록시 객체
생성자로 만들어진 프록시 객체는 Garbage Collection에서 지워지거나 재사용이 불가능하다.  
따라서 필요에 따라 폐기 가능한 프록시 객체(**revocable proxy**)를 만들 수도 있다.
```js
const revocable = Proxy.revocable({}, {});
console.log(revocable); // {proxy: Proxy, revoke: f}
```
이렇게 생성된 Proxy 객체의 revoke를 호출시키면 프록시 객체가 폐기되며 GC에 의해 수거된다.

<br>

### 트랩에서 사용되는 메서드 목록
참고: [https://ko.javascript.info/proxy](https://ko.javascript.info/proxy)
| 내부 메서드 | 핸들러 메서드 | 작동 시점 |
| :--------: | :----------: | :------: |
| `[[Get]]` | `get` | 프로퍼티를 읽을 때 |
| `[[Set]]]` | `set` | 프로퍼티에 쓸 때 |
| `[[HasProperty]]` | `has` | `in` 연산자가 동작할 때 |
| `[[Delete]]` | `deleteProperty` | `delete` 연산자가 동작할 때 |
| `[[Call]]` | `apply` | 함수를 호출할 때 |
| `[[Construct]]` | `construct` | `new` 연산자가 동작할 때 |
| `[[GetPrototypeOf]]` | `getPrototypeOf` | [Object.getPrototypeOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) |
| `[[SetPrototypeOf]]` | `setPrototypeOf` | [Object.setPrototypeOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) |
| `[[IsExtensible]]` | `isExtensible` | [Object.isExtensible](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) |
| `[[PreventExtensions]]` | `preventExtensions` | [Object.preventExtensions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) |
| `[[DefineOwnProperty]]` | `defineProperty` | [Object.defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), [Object.defineProperties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties) |
| `[[GetOwnProperty]]` | `getOwnPropertyDescriptor` | [Object.getOwnPropertyDescriptor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor), <br>`for..in`, <br>`Object.keys/values/entries`  |
| `[[OwnPropertyKeys]]` | `ownKeys` | [Object.getOwnPropertyNames](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames),<br>[Object.getOwnPropertySymbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols), <br>`for..in`, <br>`Object/keys/values/entries` |

:::tip 규칙
트랩을 쓸 땐 Javascript에서 정한 몇가지 규칙을 따라야 한다.  
- `[[Set]]`이 성공하면 true를, 실패하면 false를 **반드시** 반환해야한다.
- `[[Delete]]`가 성공적으로 처리되었으면 true, 실패하면 false를 **반드시** 반환해야한다.
- 기타 등등 다른 조건은 [명세서](https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots)를 확인하자.
:::
<br>

### Proxy 사용 주의점
:::danger 주의
`Proxy` 객체는 `target` 객체를 덮어씌운다.

**프록시 객체를 선언하고 나서 `target` 객체를 참조하는 코드가 없어야 한다.**  
(그렇지 않으면 프로그램이 엉망이 될 확률 UP!!!)
:::
<br>

## Reflect
`Reflect`는 Proxy와 같이 Javascript 명령을 가로챌 수 있는 메서드를 제공하는 내장(Built-in) 객체이다.

Proxy에서 Reflect를 사용해야 하는 이유는 나도 완벽하게 안다고 말할 수는 없지만  
**`Prototype`에 대한 사이드 이펙트를 처리하기 위해 사용한다.**  
  
위에서 말했듯이 Proxy 객체는 원래 객체위에 덮어씌워진다.  
즉, **원래 객체를 호출하더라도 프로토타입 체인을 통해서 `Proxy` 객체부터 탐색을 시작한다.**  

아래 예제를 보자.  
```js
function reactive(target) {
  return new Proxy(
    target,
    {
      get(target, key, receiver) {
        return target[key];
      },
      set(target, key, value, receiver) {
        target[key] = value;
        return value;
      }
    }
  );
}

const giwon = {
    birth: 1994,
};

const mincho = {
    birth: 1901,
    get age() {
        return new Date().getFullYear() - this.birthYear;
    }
};

const giwon.__proto__ = reactive(mincho);
console.log(giwon.age); // 122
```

`giwon`의 나이는 `29 (2022년 기준)`가 나와야 하지만, `122`살이 나올 것이다. (ㅎㄷㄷ)  
`age`함수를 탐색하기 위해 프로토타입 체인을 통해 프록시 객체로 탐색을 이어나가고, 트랩 내 target은 `mincho`이기 때문에 `age`함수의 `this`는 `mincho`를 바라보게 된다.

즉, Proxy를 통해서 다른 객체에 존재하는 기능을 우리가 원하는 객체에 추가하려 해도, **this 컨텍스트가 원하는 객체로 바인딩되지 않는다.** 그래서 Reflect를 사용하여 이 문제를 해결한다.  

<br>

위에서 말했듯이 `Reflect`는 Proxy의 트랩처럼 내부 메서드를 사용할 수 있다.  
차이점이 있다면 `Reflect`는 **작업을 요청받은 객체를 인자로 전달하여 this 컨텍스트를 지정해줄 수 있다**. (즉, this로 인한 사이드 이펙트를 제거할 수 있는 것이다.)

잘 이해가 안간다면 코드를 보자.
```js
function reactive(target) {
  return new Proxy(
    target,
    {
      get(target, key, receiver) {
        return Reflect.get(target, key, receiver);
      },
      set(target, key, value, receiver) {
        return Reflect.set(target, key, value, receiver);
      }
    }
  )
}
```

`get`과 `set`을 통해 전달받은 `receiver (작업을 요청받은 객체)`를 Reflect를 통해 내부로 전달하고 있다.  
`receiver`를 내부로 전달함으로써 this를 해당 객체에 바인딩해준다.  
<br>
코드가 훨씬 깔끔해졌다 :)
<br>

## Reflect를 사용하는 또 다른 이유
### 간결해지는 코드
`Object.prototype.hasOwnProperty.call`같은 긴 메서드를 많이 사용해보았을 것이다.  

참 좋은 메서드지만... 객체에 직접 `hasOwnProperty`를 사용할 수 없다는게 참 귀찮았다.  

하지만 `Reflect.has()`를 사용하면 더 간결하게 위와 같은 기능을 수행한다!


### 에러 핸들링
Reflect를 통해서 객체 내부 프로퍼티를 생성하거나 확인할 때 `if-else`문으로 깔끔하게 구현이 가능하다.
이 부분은 정확히 이해가 안가서 공부 좀 더 해야할 듯 싶다. 일단은 "그렇구나" 하고 넘어갔다.


## 후기
api를 사용하다가 Proxy가 궁금해서 공부해보았지만... 아직은 쓸 일이 없을 듯 하다.

api 호출 같은 공통적으로 일어나는 기능들에 Proxy를 씌워서 추가작업을 해주고 클라이언트에 보내는 방식으로 사용할 수 있을 것 같긴 한데 흠.... 아직은 잘 와닿지 않는다 ㅎㅎ  
<br>
써보다 보면 이해하겠지뭐!