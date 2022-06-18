# ICMP / IGMP / DHCP

## ICMP (Internet Control Message Protocol)
- 인터넷 계층 프로토콜
- 전송 오류 제어
  - IP는 비연결성 비신뢰성 전송 서비스 (실패 가능성 있음)
  - IP 데이터그램 전송의 오류가 발생할 경우 오류 메시지 또는 제어 메시지를 제공해주는 프로토콜
  - IP 데이터그램의 전송과정에서 발생하는 오류를 라우터나 발신지 호스트에게 보고하는 메커니즘을 제공

### ICMP 메시지 형식
1. 유형 (8 bit) : ICMP 메시지 식별
2. 코드 (8 bit) : 유형에 관한 추가 정보
3. 검사합 (16 bit) : 전체 ICMP 메시지의 오류 검사
4. ICMP 메시지 (32 bit) : 오류 및 제어 메시지로서 echo, timestamp 등

### ICMP 메시지 유형
1. 오류 보고 메시지(error reporting)
  - ICMP는 오류를 수정하지 않고, 단지 보고만 수행
  - IP 주소를 이용하여 발신지에 오류 전송
2. 질의 메시지(simple query)
  - 일부 네트워크의 문제를 진단

### 오류보고 메시지 유형
- 목적지 도달 불가 (Destination Unreachable)
- 발신지 억제 (Source Quench) : 혼잡으로 인해 데이터그램의 폐기를 알림
- 재지정 (Redirection) : 라우터가 최적 경로를 사용하지 않을때 최적경로 발견시 알리기 위해 사용
- 시간 초과 (Time Exceeded) : IP 헤더의 TTL 필드 값 만료를 나타냄
- 파라미터 문제 (Parameter Problems) : 데이터그램의 헤더 에러 문제 발생시 사용

### 질의 메시지 유형
- Echo request and reply (에코 요청/응답) : IP 호스트 진단에 사용
- Timestamp request and reply (왕복시간 요청/응답)
- Address mask request and reply (주소 마스크 요청/응답) : 호스트가 라우터에게 서브넷 마스크 요청
- Router solicitation and advertisement (라우터 주소 요청/응답) : 다른 네트워크의 호스트에게 데이터 전송 시 자신ㅇ의 네트워크에 연결된 라우터 주소 요청


## IGMP (Internet Group Management Protocol)
- 인터넷에서 **multicast 서비스**를 위해 사용되는 프로토콜
- IP 호스트가 어떤 멀티캐스트 그룹에 참가하고 있는지를 멀티캐스트 라우터에 통보하는 프로토콜
:::tip Multicast
- multicast : 1-to-many
- unicast : 1-to-1
- broadcast : 1-to-all
:::

### IP 멀티캐스트
- 클래스 D 주소 사용 ( 1110 + 멀티캐스트 주소(28bit) )
- 예약된 멀티캐스트 주소
  - 220.0.0.0 : 예약
  - 224.0.0.1 : 모든 호스트 및 라우터
  - 224.0.0.2 : 모든 라우터


### IGMP 메시지
1. 유형 (8 bit)
  - Query (general/special)
  - Membership report
  - Leave report
2. 최대 응답시간 (8 bit) : 질의에 응답해야 하는 최대 허용 시간
3. 검사합 (16 bit) : 전체 IGMP 메시지의 오류 검사
4. 그룹 주소 (32 bit) : 멅티캐스트 주소 (클래스 D IP 주소)

## DHCP (Dynamic Host Configuration Protocol)
### IP 주소 관리 방법
- Host Table : 모든 IP 주소와 이와 mapping되는 호스트 이름으로 구성된 테이블 (정적)
- DNS : 계층적 구조 및 분산 관리 특성을 지님 (정적)
- BOOTP : 디스크가 없는 호스트에 대해 주소 및 설정 정보를 자동적으로 할당하고 관리하는 프로토콜 (동적으로 IP 주소를 할당)
- DHCP (동적)

### DHCP 정의
- 응용 계층 프로토콜
- IP 주소를 중앙에서 관리하고 개별 클라이언트들에게 자동으로 IP 주소를 할당해주는 프로토콜
- BOOTP에서 발전된 동적 주소 할당 프로토콜로서 IP 주소 재사용이 가능함
- DHCP 메시지 형식은 BOOTP와 동일함

:::tip 동적 주소 할당 프로토콜
IP 주소 pool에서 사용 가능한 IP 주소를 선택하여 원하는 호스트에게 일정 기간 임대해줌
:::

### DHCP 네트워크 구성
:::danger
이거 시험문제 4지선다형으로 나올듯?
:::
- DHCP Server
- DHCP Client
- BOOTP/DHCP Relay Agent

### DHCP 프로토콜 - IP 주소 자동 할당
1. DHCP**DISCOVER** - DHCP가 존재하는지 확인
2. DHCP**OFFER** - DHCP에게 사용할 수 있는 IP 확인
3. DHCP**REQUEST** - DHCP IP주소 할당 요청
4. DHCP**ACK** - 클라이언트에게 IP주소, 서브넷마스크, DNS 서버 주소, WINS 서버, 노드 유형, 도메인 이름 할당