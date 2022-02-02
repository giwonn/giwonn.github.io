# dart 문법
다트 문법은 main() 함수가 진입점(entry point)이다.
```dart
void main() {
    print("Hello, World!");
}
```

## 목차
1. 기본 문법
2. 함수
3. 분기와 반복

<br>
<br>
<br>

## 1. 기본 문법
```dart
// 한 줄 주석

/**
* 여러 줄 주석
*
**/

/// 문서 주석 (메서드나 클래스 위에 작성하면 문서를 자동으로 생성해줌)
```

<br>

### 변수
dart는 다음과 같은 기본 타입을 제공한다.
- int : 정수
    ```dart
    int i = 10;
    num i2 = 10; // int는 num으로 표현 가능하다.
    ```
- double : 실수
    ```dart
    double d = 10.00;
    num d2 = 10.00; // double 또한 num으로 표현 가능하다.
    ```
- String : 문자열
    ```dart
    String name;
    // 작은 따옴표, 큰 따옴표 둘 다 사용 가능함
    name = '임기원';
    name = "임기원";
    ```
- bool : 참 또는 거짓
    ```dart
    bool b = true;
    bool bw = i < 10;
    bool b3 = s.isEmpty;
    ```

<br>

### 타입 추론
dart는 var, dynamic 키워드를 통해 타입 추론을 지원한다.  
- **var**
**최초 할당된 값**에 따라 타입이 정해진다.  
(선언만 하고 나중에 초기화를 진행하면 dynamic 타입처럼 타입을 변동시켜도 에러가 나지 않는다.)
    ```dart
    var i = 10; // int 타입
    var d = 10.0; // double 타입
    var s = 'hello'; // 문자열 타입
    var b = true; // 불리언 타입

    var n; // 초기화를 안한다면?
    var n = 1; // int도 들어가고
    var n = '안녕?'; // int -> String도 된다. (dynamic처럼 동작함)
    ```

- **dynamic**
var와 달리 할당된 타입에 관계없이 타입을 변경할 수 있다.  
dart를 JS처럼 사용하고 싶다면 dynamic을 쓰면 된다!
    ```dart
    dynamic name = '임기원';
    name = 1;
    ```

<br>

### 상수 final, const
Java의 final, JavaScript의 const에 대응한다고 생각하면 된다.  
```dart
final String name = '임기원';
final name = '임기원'; // 타입을 생략하여 짧게 작성할 수도 있다.
```

<br>

### 산술 연산자
- \+ : 더하기
- \- : 빼기
- \* : 곱하기
- /  : 나누기 (double 타입 반환)
- ~/ : 몫 (int 타입 반환)
- %  : 나머지 (int 타입 반환)

assert() 함수는 계산 결과가 참인지 검사한다.
```dart
assert(2 + 3 == 5); // true
assert('hello' + ' world' == 'hello world'); // true
```

<br>

### 증감 연산자
- 후위 연산 : [식]++, [식]--
- 전위 연산 : ++[식], --[식]

<br>

### 비교 연산자
- == : 같다
- != : 다르다
- \> : 더 크다
- < : 더 작다
- \>= : 크거나 같다
- <= : 작거나 같다.
```dart
assert(2 == 2);
assert(2 != 3);
assert(3 > 2);
// ...
```

<br>

### 논리 연산자
- && : and
- || : or
- == : equal
- ! : not
- != : not equal

<br>

### 타입 검사 (is, is! 키워드)
- is : 같은 타입이면 true
- is! : 다른 타입이면 true
```dart
int a = 10;
if (a is int) {
    print('정수');
}

String text = 'hello';
if (text is! int) {
    print('숫자가 아님');
}
```

<br>

### 형변환 (as 키워드)
형변환(타입 캐스팅)에는 as 키워드를 사용한다.
**다른 타입끼리는 변환이 안 되고 더 상위 개념으로 변환할 수 있다.**
```dart
var c = 30.5;
int d = c as int; // c는 double타입으로 추론 -> int는 double의 상위가 아니기에 변환 불가

var d = 30.5;
num n = d; // as num; 생략 가능
```

<br>

## 2. 함수
### 함수의 기본 형태
```dart
int f(int x, int y) {
    return x + y + 10;
}

void greeting(String greet) {
    print('hello $greet');
}


// 반환타입 역시 타입 추론에 의해 생략할 수 있다.
f(int x, int y) {
    return x + y + 10;
}

greeting(String greet) {
    print('hello $greet');
}
```

### 함수와 메서드
클래스 밖에 작성하는 함수를 최상위 함수라고 한다.  
최상위 함수는 어디에서나 호출할 수 있으며,  
클래스 내부함수는 메서드라고 부르기 때문에 사실상 대부분의 함수는 최상위 함수라고 볼 수 있다.
```dart
// 최상위 함수
bool isEven(int number) {
    return number & 2 == 0;
}

void main() {
    print(isEven(10));
}

class MyClass {
    // static 키워드로 정적 메서드를 만들어주면 최상위 함수처럼 사용 가능하다.
    static bool isEven(int number) {
        return number % 2 == 0;
    }

    // ...생략...
    print(MyClass.isEven(10));
}
```

<br>

### 익명 함수
```dart
(number) { // 익명 함수 역시 타입 추론 가능
    return number % 2 == 0;
}
```

<br>

### 람다식
> ([인수명]) -> [동작 또는 반환값]
```dart
(number) => number % 2 == 0;
```

<br>

### 선택 매개변수
{}로 감싼 매개변수는 선택적으로 사용할 수 있다.  
```dart
void something(String name, {int age}) {
    // ...
}

void main() {
    something(name: '홍길동', age: 10);
    something(name: '홍길동');
    something(age: 10); // 에러
    something(); // 에러
}
```
또한 선택 매개변수는 기본값을 지정할 수 있다.
```dart
void something(String name, {int age = 10}) {
    // ...
}
```

<br>

## 3. 분기와 반복

### if else
```dart
String text = 'hello';

if (text is int) {
    print('정수');
} else if (text is double) {
    print('실수');
} else {
    print('정수도 실수도 아님');
}
```

<br>

### 삼항 연산자
```dart
// [조건] ? [참일 때] : [거짓일 때]
var todo = isRainy ? '빨래를 하지 않는다' : '빨래를 한다';
```

<br>

### switch cast
dart의 스위치문은 열거(enum)타입과 함께 사용할 경우,  
모든 케이스를 전부 검사해야 하는 강제성이 생긴다.  
사람의 실수를 방지하는 이런 기능이 있어서 특수한 경우에는 if 문 보다 유용하다.
```dart
enum Status { Uninitialized, Authenticated, Authenticating, Unauthenticated }

void main() {
    var status = Status.Authenticated;
    switch (status) {
        case Status.Authenticated:
            print('인증됨');
            break;
        case Status.Authenticating:
            print('인증 처리 중');
            break;
        case Status.Unauthenticated:
            print('미인증');
            break;
        case Status.Uninitialized:
            print('초기화됨');
            break;
    }
}
```

<br>

### for
```dart
var items = ['짜장', '라면', '볶음밥'];

for (var i = 0; i < items.length; i++) {
    print(items[i]);
}
```

<br>

## 4. 객체 지향 프로그래밍

### 클래스 (Class)
```dart
class Person {
    String name;
    int age;

    void addOneYear() {
        age++;
    }
}

// ...생략...

var person = Person(); // new 키워드 생략 가능
person.age = 10;
person.addOneYear();
print(person.age); // 11
```

<br>

### 접근 지정자
변수명 앞에 _ 기호를 붙이면 해당 클래스가 정의되지 않은 외부에서 접근이 불가능해진다.  
**(Java의 private 역할)**  
```dart
// person.dart 파일
class Person {
    String name;
    int _age;
}
```
```dart
// main.dart 파일
import 'person.dart';
// ...생략...
var person = Person();
person._age = 10; // 에러!!! 접근 불가
```

<br>

### 생성자
기본 생성자는 클래스명과 같은 이름의 메서드이다.  
사용자 정의 생성자를 추가하면 기본 생성자를 사용할 수 없게 되지만,  
선택 매개변수를 사용하면 기본생성자도 호출 가능하다.  
**(정확히는 기본생성자를 호출 가능한게 아닌 선택매개변수에 null을 대입한 생성자가 호출되는 것이다.)**
```dart
class Person {
    String name;
    int _age;

    Person({this.name, this._age}); // 생성자
}

// ...생략...
var person = Person();
var person2 = Person(name: '임기원', _age: 28);
```

<br>

### getter, setter
_를 붙이는 private 변수의 경우, 클래스 외부에서 접근하려면 getter, setter를 사용해야 한다.  
```dart
// person.dart
class Rectangle {
    num left, top, width, height;

    Rectangle(this.left, this.top, this.width, this.height);

    // getter : [리턴타입] [get] [함수이름] => [리턴값]
    num get right => left + width;
    // setter : [set] [함수이름]([매개변수]) => [함수로직]
    set right(num value) => left = value - width;

    num get bottom => top + height;
    set bottom(num value) => top = value - height;
}
```

<br>

### 상속
```dart
class Hero {
    String name = '영웅';

    void run() {}
}

class SuperHero extends Hero {

    @Override
    void run() {
        super.run(); // 부모의 run()을 실행
        this.fly(); // 추가로 fly()도 실행
    }

    void fly() {}
}

void main() {
    var hero = SuperHero();
    hero.run(); // ok
    hero.fly(); // ok
    print(hero.name); // 영웅
}
```

<br>

### 추상 클래스
추상 클래스는 추상 메서드를 포함하는 메서드다.  
추상 메서드는 선언만 되고 정의가 없는 메서드다.  
다중상속 또한 지원한다.  
```dart
abstract class Flyable {
    void fly();
}

class Bat implements Monster, Flyable {
    @override
    void attack() {
        print('할퀴기!');
        
    @override
    void fly() {
        print('펄럭펄럭');
    }
}
```

<br>

### 믹스인
with 키워드를 사용하여 상속하지 않고 다른 클래스의 기능을 가져오거나 오버라이드할 수 있다.  
```dart
class Goblin implements Monster {
    @override
    void attack() {
        print('고블린 어택');
    }
}

class DarkGoblin extends Goblin with Hero {

}
```

<br>

### 열거 타입
상수를 정의하는 특수한 형태의 클래스이다.
열거 타입을 switch문에 사용하면 모든 상수를 전부 검사해야 한다.
```dart
enum Status { login, logout }
var authStatus = Status.logout;

switch(authStatus) {
    case Status.login:
        print('로그인');
        break;
    case Status.logout:     // 없으면 에러
        print('로그아웃');
        break;
}
```







