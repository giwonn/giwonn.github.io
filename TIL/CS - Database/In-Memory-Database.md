# 인메모리 데이터베이스

디스크가 아닌 주 메모리에 모든 데이터를 보유하고 있는 데이터베이스

## 장점
- 디스크 검색보다 자료 접근이 훨씬 빠르다
- 메모리상에 색인(인덱스)를 넣어 빠르게 검색할 수 있다.

## 단점
- 데이터가 휘발성이다. (영속적이지 않다)
- 사용할 수 있는 용량이 RAM의 용량에 좌우된다.

:::warning 주의
인메모리 DB는 꼭 Nosql이지 않다.
가장 유명한 Redis가 Nosql이라서 헷갈리는 경우가 많은데 Mysql 또한 인메모리 기능을 지원한다.
:::

## 왜 빠를까?
![메모리 계층구조](/images/TIL/CS-Database/메모리-계층구조.png)  
인메모리 DB가 위치하는 곳은 RAM(주 기억장치)이다.

디스크 기반 저장장치(HDD, SDD)는 **보조 기억 장치**라고 불린다.

외부 디스크의 데이터에 접근하기 위해서는, 데이터를 캐시나 RAM으로 이동시키고나서 접근할 수 있다.

아무래도 데이터를 RAM으로 가져와서 읽어야한다는 점 때문에 느릴 수 밖에 없는데, **인 메모리 DB를 사용하면 데이터를 가져오는 단계를 생략할 수 있다.**

하지만 RAM은 영속성을 보장하지 않는다. 즉, **인메모리 DB 또한 영속성을 보장하지 않는다.**

그렇기에 지속성을 보장하기 위하여 메모리에 CRUD된 값들은 모드 디스크에 로그로 기록되어 DB가 재구동될 때 로그를 통해 다시 재구축한다.

## 주의점
- 본인이 사용하는 기기의 RAM 용량을 넘기지 말아야한다.  
(데이터 양이 RAM 용량을 넘기는 경우, 가상 메모리를 사용하게 되어 더 느려진다)


## In-Memory Data Grid (IMDG)
In-Memory Data Grid는 여러 서버에 데이터를 분산하여 저장하는 **분산 메모리 시스템**이다.

다수의 컴퓨터 메모리를 그리드로 연결해서 마치 하나의 메모리 저장소처럼 운용하는 것이다.

용량이 부족하면 서버를 추가하여 용량을 증설할 수 있다.

IMDG는 메인 메모리에 데이터를 저장한다는 점이 같을 뿐, In-Memory Database랑 아키텍처가 많이 다르다고 한다.

![IMDG](/images/TIL/CS-Database/IMDG.png)

특징은 다음과 같다.
- 다수의 컴퓨터 메모리를 클러스터링하여 하나의 큰 메모리 저장소로 구축
- 각 서버는 active 모드로 동작함 (서버가 클라이언트에 접속을 함)
- 메모리 클러스터의 수평적 확장을 통한 무제한 용량 지원 가능
- 데이터는 객체 지향 및 비 관계형 데이터 모델로 관리
- 데이터 요청은 다수의 서버에서 병렬로 처리
- 디스크, DBMS를 이용하여 데이터의 영속성 보장


## etc
::: tip
- **Register**  
컴퓨터에서 제일 빠른 메모리이다.
CPU 내부에 위치해 있으며, 극히 소량의 데이터나 프로세서가 바로 사용할 수 있는 데이터를 담고 있는 영역이다.

- **Cache**  
레지스터 다음으로 빠른 메모리이며 CPU 내부에 존재한다.
RAM이 CPU 외부에 위치하기 때문에 속도 차이로 인한 성능 저하를 막기 위해 사용된다.
속도에 따라 L1, L2, L3 캐시 등으로 분류되며, 숫자가 작을수록 용량이 작고 빠르다.
지역성에 의거하여 자주 참조될것 같은 데이터들이 저장된다.
:::
