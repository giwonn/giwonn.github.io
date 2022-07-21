# SQL 관련 팁

### DISTINCT
DISTINCT를 함수처럼 `DISTINCT(COLUMN)` 이렇게 사용하지말자.  
`DISTINCT COLUMN` 이게 맞는 표현이다.


### WITH
질의문 결과를 메모리에 임시 테이블로 저장하여, 메인 질의문이 임시 테이블을 일반 테이블처럼 사용할 수 있다.

### TRUNCATE, DELETE, DROP 차이
DELETE는 데이터는 지워지지만 테이블 용량은 줄어들지 않는다. 완전히 COMMIT이 되는 것이 아니기 때문이다.  
TRUNCATE, DROP은 auto commit이 내포되어 있기 떄문에 실행하면 이전으로 돌아갈 수 없다.  

### 날짜 연산 시 주의점
날짜들을 더하거나 빼면 원하는 값이 안나옴  
- **해결 방법**
  - INTERVAL 사용
  - TIMESTAMPDIFF() 사용

### DATETIME, TIMESTAMP
DATETIME은 TIMESTAMP에 비해 데이터를 1바이트 덜 사용하지만, 조회 시 데이터를 변환하므로 TIMESTAMP를 사용하자.


### TOP-N QUERY 주의점
ROW_NUMBER, RANK에서 ORDER BY 를 하느냐 혹은 SELECT문에서 하느냐의 차이를 명확히 알아야 한다.  
ROW_NUMBER 내부에서 쓰이는 ORDER BY가 우선순위를 가진다.  

### 시간대 처리
DATE, TIME, DATETIME은 global time zone 시간으로 저장하고 검색함  
(session time zone을 고려하지 않는다)

- NOW()함수는 저장시 session에서 UTC로 변환함
- 해당 데이터를 불러오면 UTC에서 session으로 변환해서 가져옴

### NULL 처리 함수
COALESCE()가 표준함수다. MYSQL의 NULLIF나 NVL은 비표준함수이므로 사용을 지양하자.

### JOIN
- a.id = b.id와 같은 조건을 표현하려면 JOIN 뒤에 `USING(id)`만 붙여줘도 충분하다.
- 그 외의 조건식은 ON 절을 사용하는게 좋을듯
- WHERE절 join === FROM절 조인의 ON 절과 동일한 출력 결과를 가짐

### Natural JOIN
- 서로 겹치는 컬럼이 하나일 경우 사용 가능
- inner join에서 a.id = b.id를 한것과 같은 결과
- 조인에 사용되는 컬럼이 딱 하나만 나옴 (inner join과의 차이점)
- 중복컬럼이 하나로 합쳐져서 출력되기 때문에 CTAS 가능
- 
### CTAS
- ON 절 조인을 CTAS로 저장하는 시도는 해당 컬럼이 2개가 출력되므로 항상 에러임
- USING 절은 해당 컬럼을 하나만 출력해주므로 정상적으로 실행됨

### 서브쿼리
- **where절 서브쿼리**는 메인쿼리의 튜플을 필터링하기 위해서 사용함
- **연관 서브쿼리**는 메인쿼리의 테이블을 서브쿼리에서 조건이 맞는지 확인할 때 사용함
- **비연관 서브쿼리**는 메인쿼리에 값을 제공하기 위해서 사용함