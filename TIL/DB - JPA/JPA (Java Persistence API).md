## JPA

---

Java ORM 기술 표준 인터페이스

- 관계형 데이터베이스 : 어떻게 데이터를 저장할지에 초점이 맞춰진 기술
- 객체지향 프로그래밍 : 기능과 속성을 한곳에서 관리하는 기술

두 기술은 사상부터 다른 시작점에서 출발했다. (=**패러다임 불일치**)

서로 지향하는 바가 다른 2개 영역을 **중간에서 패러다임 일치**를 시켜주기 위해 JPA가 등장했다.

JPA는 Application과 JDBC 사이에서 동작한다.

<!-- ![Untitled](https://github.com/l4279625/TIL/blob/main/images/JPA_1.png) -->

## JPA를 사용하는 이유

---

- **SQL 중심적인 개발 → 객체 중심적인 개발**
- **CRUD 작업 간결화**
    1. Create : jpa.persist(member)
    2. Read : Member member = jpa.find(memberId)
    3. Update : member.setName("변경할 이름")
    4. Delete : jpa.remove(member)

    위와 같이 써주면 알아서 sql문을 매핑해준다.

- **유지보수 편의성 증가**
- **패러다임 불일치 해결**
    1. 상속관계 해결 (SQL에서 JOIN으로 연결해야하는 부분을 상속처럼 이용하여 해결)

    <!-- ![Untitled](https://github.com/l4279625/TIL/blob/main/images/JPA_2.png) -->

    1. 연관관계 (FK에 의존하지 않아 JOIN을 사용할 필요가 없어 SQL에 덜 의존적임)

- **성능 문제 해결**
    1. 1차 캐시와 동일성 보장 (같은 트랜잭션 안에서는 캐싱을 통해 같은 Entity를 반환함)
    2. 쓰기 지연을 지원함 (JDBC BATCH SQL 기능을 통해 모아놓은 SQL을 한번에 전송함)
    3. 즉시 로딩과 지연 로딩
        - 즉시 로딩 : JOIN으로 한번에 연관된 객체까지 미리 조회함
        - 지연 로딩 : 객체가 실제로 사용될 때 로딩됨
    4. 데이터 접근 추상화 벤더 독립성
    JPA는 interface의 집합으로써 특정 DB에 종속적이지 않아, 대부분의 DB를 사용가능

    <!-- ![Untitled](https://github.com/l4279625/TIL/blob/main/images/JPA_3.png) -->

데이터베이스를 객체답게 모델링 할 수록 SQL과 매핑하는 작업만 늘어나게 되어 SQL에 의존적인 설계방식이 되어버린다.

JPA는 객체를 List와 같은 자바 컬렉션에 저장하듯이 DB에 저장하여 문제를 해결한다.

## 영속성 관리

---

### 영속성 Context

- Entity를 영구 저장하는 환경
- EntityManage를 통해서 영속성 Context에 접근할 수 있음

<!-- ![Untitled](https://github.com/l4279625/TIL/blob/main/images/JPA_4.png) -->

### 영속성 생명 주기

- 비영속(new/transient) : 영속성 Context와 전혀 관계가 없는 새로운 상태
- 영속(managed) : JPA를 통해 객체가 영구 저장된 상태
- 준영속(detached) : 영속 상태였던 객체를 영속성 Context에서 분리한 상태
- 삭제(removed) : 객체를 삭제한 상태

```java
// 객체를 생성: 비영속
Member member = new Member();
member.setId("membeA");
member.setName("Joon");

EntityManager em = emf.createEntityManager();
em.getTransaction().begin();

// 객체를 저장: 영속
em.persist(member);

// 객체를 분리: 준영속
em.detach(member);

// 객체를 제거: 삭제
em.remove(member);
```

## Spring DATA JPA

---

JPA 구현체들을 좀 더 쉽게 사용하고자 추상화시킨 모듈

JPA ← Hibernate ← Spring Data JPA

- **Spring Data JPA와 Hibernate를 같이 쓰는 이유**
    1. 구현체 교체의 용이성 (Hibernate 외에 다른 구현체로 쉽게 교체 가능)
    2. 저장소 교체의 용이성 (관계형 데이터베이스 외에 다른 저장소로 쉽게 교체 가능)