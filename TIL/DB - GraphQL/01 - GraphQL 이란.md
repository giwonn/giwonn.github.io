# GraphQL 이란?

GraphQL은 SQL과 마찬가지로 **쿼리 언어**이자 **API를 위한 서버측 런타임**이다.  
SQL이 **데이터베이스 시스템**에 저장된 데이터를 효율적으로 가져오는 것이 목적이라면,  
GraphQL은 **웹 클라이언트**가 데이터를 서버로 부터 효율적으로 가져오는 것이 목적이다.

- [GraphQL을 실행해볼 수 있는 사이트](https://graphql.org/swapi-graphql)
- [GraphQL Example Query](https://github.com/graphql/swapi-graphql/tree/master/doc/example_queries)
- [GraphQL을 사용하는 가장 큰 5가지 이유](https://www.prisma.io/blog/top-5-reasons-to-use-graphql-b60cfa683511)
- [GraphQL 학습 사이트](https://www.howtographql.com/)
- [한국어 번역 공식 소개 사이트](https://graphql-kr.github.io)
- [카카오테크 GraphQL 설명](https://tech.kakao.com/2019/08/01/graphql-basic/)

## REST

## GraphQL의 특징

필요한 데이터를 정확하게 특정하여 API에 요청하는 **선언적인 데이터 불러오기가 가능**하다.  
(REST와 달리 단 하나의 엔드포인트만 노출시키고, 클라이언트가 요청한 데이터들만 정확하게 반환한다.)

- **SQL**
  ```sql
  SELECT plot_id, species_id, sex, weight, ROUND(weight / 1000.0, 2) FROM surveys;
  ```
- **GraphQL**
  ![image](/images/DB-GraphQL/graphql-1-1.png)

사실 이렇게만 보면 굳이 번거롭게 GraphQL을 사용해야하나 싶었다.  
그냥 back-end단에서 SQL로 요청하면 되는데, front-end단에서 GraphQL -> GraphQL Server로 요청을 해야하니 오히려 번거롭게 느껴졌다.  
하지만 이렇게 함으로써 보다 효율적으로 데이터를 가져올 수 있다는 장점이 있다.

## GraphQL의 필요성

**1. 모바일 사용 증가로 인해 이전보다 효율적인 데이터 로드 필요**

- 네트워크를 통해 전송해야 하는 데이터의 양을 최소화하여 이러한 조건에서 작동하는 애플리케이션을 개선해야함
- REST API는 사용하지 않는 데이터까지 가져옴

**2. 너무나 다양해진 프론트엔드 프레임워크 및 플랫폼 대응**

- 다양한 프레임워크 및 플랫폼 환경으로 인해 모든 요구사항에 맞는 하나의 API를 구축하고 관리하기 어려워짐
- 요구사항이 변경될 때 API를 수정이 잦아짐

**3. 빠른 개발 및 신속한 기능 개발에 대한 기대**

- 클라이언트 측의 특정 요구사항 및 설계 변경을 고려하여 서버에서 데이터를 노출하는 방식을 수정해야 하는 경우가 많다.
- 이는 빠른 개발 관행과 제품 반복을 방해한다.

## REST의 단점

GraphQL의 장점을 보기 전에 REST API의 단점을 짚고 넘어가겠다.  
<br>

**1. 오버패칭 (Overfetching)** - 필요하지 않은 데이터까지 가져옴, 원하는 데이터만 얻기 위해 정제해야함

**2. 언더패칭 (Underfetching)** - 다른 종류의 데이터를 가져올 때 엔드포인트를 하나 더 만들어야함  
(서버에 요청을 여러번 하게 됨)  
ex) 사람에 대한 정보 뿐 아니라 그 사람의 최근 게시글 5개를 추가로 가져오고 싶을 때

**3. 엔드포인트 관리 문제** - 엔드포인트 관리를 위해 프론트단, 백단 개발팀끼리 회의하는 등 귀찮아짐

### 요약하자면, 관리해야 할 EndPoint의 증가로 인하여 발생하는 문제점들이다.

<br>
이제 REST의 단점을 보았으니 GraphQL의 장점을 살펴보자.

## GraphQL 장점

**1. 단 하나의 EndPoint만 사용하여 구현 가능하다.** (유지보수가 용이해진다)
![https://devopedia.org/graphql](/images/DB-GraphQL/graphql-1-2.png)  
<br>
**2. 한번의 요청으로 원하는 데이터를 정확히 가져올 수 있음** (Overfetching, Underfetching 해결)  
<br>
**3. Redux 대신 Apollo를 사용함**

## GraphQL 단점

**1. 하나의 엔드포인트만 사용하기 때문에, HTTP에서 제공하는 캐싱 전략을 그대로 사용할 수 없다.**  
(영속쿼리, 아폴로엔진 등으로 캐싱에 대한 문제를 해결할 수 있다)

**2. 요청 필터링의 어려움**  
(GraphQL의 다양한 요청형태에서 잘못된 요청을 필터링하기가 까다롭다)

## GraphQL vs REST

![graphql-1-3](/images/DB-GraphQL/graphql-1-3.png)

## Reference

[https://tech.kakao.com/2019/08/01/graphql-basic/](https://tech.kakao.com/2019/08/01/graphql-basic/)  
[graphql-kr.github.io](https://graphql-kr.github.io/)  
[https://owin2828.github.io/devlog/2020/11/12/GraphQL-1.html](https://owin2828.github.io/devlog/2020/11/12/GraphQL-1.html)
