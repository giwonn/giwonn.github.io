# Command 패턴
커맨드 패턴은 객체의 **행위\(메서드)를 클래스로 만들어 캡슐화** 하는 패턴이다.  
  
메서드를 클래스로 만들어 캡슐화하면 어떤 객체에서 다른 객체의 메서드를 사용할 때 발생하는 의존성을 제거할 수 있다.  

Vue에서도 Command패턴과 양방향 바인딩을 이용하여 View와 ViewModel 간의 의존성을 제거하였다.  

## 예시
### TV 클래스
```js
class TV {
    powerOn() {
        console.log("TV on");
    }
}
```
### OKGoogle 클래스
```js
class OKGoogle {
    tv = new TV();

    constructor(tv) {
        this.tv = tv;
    }

    talk() {
        this.tv.powerOn();
    }
}
```
### 결과
```js
const tv = new TV();
const okGoogle = new OKGoogle(tv);

okGoogle.talk();
```
다음과 같이 작성한다면... TV 이외에 히터를 조작을 추가한다면 OKGoogle 클래스 또한 수정되어야 한다.  
(히터 클래스 작성하고, OKGoogle 클래스에 프로퍼티로 넣어주고, 생성자에도 추가해주고 `talk()`에서 분기문 작성해주고 등등...)

기능이 추가될수록 의존성이 늘어나는데 이럴 때 커맨드 패턴을 적용하면 좋다.  
인터페이스를 사용해야 하니 `Typescript`를 사용하겠다.

## 수정 후

### Command 인터페이스
먼저 인터페이스를 정의한다.  
```ts
interface Command {
    run(): void;
}
```

### TV 관련 클래스
밑에 Heater 클래스도 마찬가지지만,  
TV라는 전자제품에 들어가는 `전원ON`기능을 클래스로 구현해놓고 해당 기능으로 어느 TV를 조작할건지 생성자 파라미터로 전달해줄것이다.
```js
class TV {
    powerOn() {
        console.log("TV on");
    }
}
```
```ts
class TvOnCommand implements Command {
    tv: TV;

    constructor(tv: TV) {
        this.tv = tv;
    }

    run() {
        this.tv.powerOn();
    }
}
```

### Heater 관련 클래스
```ts
class Heater {
    turnOn() {
        console.log("Heater on");
    }
}
```
```ts
class HeaterOnCommand implements Command {
    heater: Heater;

    constructor(heater: Heater) {
        this.heater = heater;
    }
    
    run() {
        heater.turnOn();
    }
}
```

### OKGoogle 클래스 (인보커)
클래스화를 한 기능들을 OKGoogle을 통해 사용한다.  
모든 기능들은 Command를 통해 구현되었으므로 Command 타입으로 가져온다.
이런식으로 실행할 기능(클래스화 한 메서드)을 갈아낄 수 있는 클래스를 **인보커**라고 부른다.
```ts
class OKGoogle {
    command: Command;

    setCommand(command: Command) {
        this.command = command;
    }

    talk() {
        this.command.run();
    }
}
```

### 결과
```ts
const tv1 = new TV();
const heater1 = new Heater();
const okGoogle = new OKGoogle();

 // tv의 인스턴스 중에 어떤것을 조작할건지 파라미터에 넣어준다.
 // 사용할 기능들에 인스턴스화 된 기기를 연동해준다.
const tvOnCommand: Command = new TvOnCommand(tv1);
const heaterOnCommand: Command = new HeaterOnCommand(heater1);

okGoogle.setCommand(tvOnCommand); // okGoogle에 TV를 키라고 명령했다.
okGoogle.talk(); // okGoogle이 해당 명령을 실행한다.

okGoogle.setCommand(heaterOnCommand);
okGoogle.talk();
```

이렇게 하면 기능들이 OKGoogle에 추가되지 않고 필요할 때 블럭 조립하듯이 갖다 붙일 수 있게 된다.  


## 후기

Vue를 처음 공부할 때 Command 패턴을 사용한다길래 `이게 대체 뭐지..?` 싶었고  

Command 패턴을 처음 공부할 때는 `아 이러면 의존성이 제거되긴 하겠구나...`라는 찜찜함이 남아있었다.  

이번에 다시 공부하면서 원리를 거의 이해하게 되었다.  

디자인 패턴은 역시 어렵다...  

사실 디자인 패턴이란게 이론같은게 아니기에, 암기하기보다는 이해하고 내 것으로 습득하는게 중요하다고 생각한다.  

그래서 일단 커맨드 패턴은 여기서 마무리 지으려고 한다.  

기억이 안난다면 다시 이 글을 보며 리마인딩을 끊임없이 하며 점점 완벽하게 내 것으로 익히자.

