# Pub/Sub
회사에서 `Pub/Sub`이라는 명칭이 자꾸 등장해서 답답한 마음에 한번 훑어보기로 했다.

## Pub/Sub이란?
전송자와 수신자를 분리하는 다대다 비동기식 메시지 서비스  
마이크로서비스를 위한 서비스라고 생각하면 된다.  
아래와 같이 구글에서 제공하는 여러 서비스간의 메시지 통신에 주로 사용된다.
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
Broker로 `메세지 큐(Message Queue)`를 많이 사용하기 때문이다.
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
- **확장성** : 기본적으로 1초에 1만건의 메시지 전송 가능
- **Push / Poll 전달** : Subscriber들이 인터넷 위치에 상관없이 유연한 전달 옵션을 가짐
- **암호화** : 항상 암호화 되어 전송 및 저장됨
- **메시지 큐** : 1:1 통신 패턴을 지원하기 위해 단일 Topic과 Subscription을 사용하는 메시지 큐 생성

## 개념 및 메시지 흐름
![개념-및-메시지-흐름.png](/images/TIL/Cloud-GCP/PubSub/개념-및-메시지-흐름.png)  
1. Publisher가 Pub/Sub에서 Topic을 생성하고 메시지로 전송한다.  
(메시지에는 페이로드와 페이로드 컨텐츠를 설명하는 추가 속성이 포함되어 있다.)  
2. 메시지는 전송 후 Subscriber가 확인할 때까지 메시지 저장소에 남아있는다.
3. Pub/Sub 서비스가 메시지를 Topic에서 개별 구독으로 전송한다.
4. Subscriber는 대기 중인 메시지를 Publisher로부터 수신하고 메시지를 확인했음을 Pub/Sub 서비스에 알린다.
5. Subscriber가 메시지를 확인하면 해당 메시지는 구독 메시지 대기열에서 사라진다.

## Subscribe(구독) 방법 특징
### Pull
**구독자 앱이 Pub/Sub에 메시지 검색을 요청**하는 방식.  

**대량 메시지 처리에 유리**하기 때문에 메시지 처리 효율성과 처리량이 중요한 앱에서 사용하면 좋다.  

![pull-방식.png](/images/TIL/Cloud-GCP/PubSub/pull-방식.png)  

### Push
**Pub/Sub이 구독자 앱에 메시지 수신을 요청**하는 방식  

해당 구독자 앱이 GCP Console의 앱이라면 인증이 필요없지만, 아니면 인증 절차가 필요하다.  

![push-방식.png](/images/TIL/Cloud-GCP/PubSub/push-방식.png)  

