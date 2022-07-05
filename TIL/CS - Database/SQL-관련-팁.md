# SQL 관련 팁

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

