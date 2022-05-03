# Pub/Sub

## Pub/Sub이란?
전송자와 수신자를 분리하는 다대다 비동기식 메시지 서비스  
마이크로서비스를 위한 서비스라고 생각하면 된다.  
![PubSub 개요](/images/TIL/Cloud-GCP/PubSub/개요.png)

동작 방식은 단순하다. `Pub/Sub`은 `게시자(Publisher)`, `구독자(Subscriber)`라는 컨셉의 애플리케이션들로 이루어진다.  

Publisher 애플리케이션이 메시지를 만들어 `주제(Topic)`로 전달하는데, Subscriber는 주제에 대한 구독을 만들어 해당 주제로부터 메시지를 수신한다.  

아마 많은 사람들이 여기서 어? 하고 의문을 가질 수도 있다. Observer 패턴과 굉장히 유사하게 느껴지기 때문이다.  

Head First Design Patterns 책에서도 두 개념은 같다고 나와있지만 실제로는 차이점이 분명히 존재한다.  

## Observer 패턴과의 차이점
### 1. `Message Broker` 또는 `Event Bus`의 존재여부
Observer 패턴과의 가장 큰 차이점은 `Message Broker` 또는 `Event Bus`의 존재여부다.  
Observer 패턴은 Observer와 Subject가 서로를 인지하지만, Pub/Sub의 경우에는 Broker 역할을 하는 중간지점이 있어서 서로를 알 필요가 없다.  
**(즉, Observer 패턴보다 결합도가 낮다!)**  
![Observer와의-차이점](/images/TIL/Cloud-GCP/PubSub/Observer와의-차이점.png)

### 2. Pub/Sub은 대부분 비동기로 동작한다.
Broker로 메세지 큐(Message Queue)를 많이 사용하기 때문이다.
:::tip Message Queue란?
api 호출할 때 보내는 메시지와 같은 것들을 임시로 저장하는 **버퍼**이다.  
서버가 맛이 갔을 때 들어오는 요청들을 메시지 큐에 담아놓았다가 서버가 복구되면 밀린 요청들을 처리하는 등 여러면에서 도움이 되는 방식이다.
:::

### 3. Pub/Sub은 크로스 도메인 상황에서도 구현이 가능하다.
이 역시 Broker라는 중간 매개체가 있기 때문이다. 도메인이 다르더라도 Broker에 접근만 가능하다면 처리가 가능하기 때문이다.  
(당연히 cors 처리가 제대로 되어있어야겠지?)

## Pub/Sub의 특징
Pub/Sub 통신은 일대다(fan-in), 다대일(fan-out), 다대다 형태를 취한다.  
![형태](/images/TIL/Cloud-GCP/PubSub/형태.png)

## 개념 및 메시지 흐름
![개념-및-메시지-흐름.png](/images/TIL/Cloud-GCP/PubSub/개념-및-메시지-흐름.png)