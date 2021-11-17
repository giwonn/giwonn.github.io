# 02 - GraphQL의 구성요소 (작성중)
GraphQL은 크게 3가지 요소로 이루어져 있다.  
1. **쿼리 & 뮤테이션 (Query & Mutation)**  
2. **스키마 & 타입 (Schema & Type)**  
3. **리졸버 (Resolver)**  

<br>

## 쿼리 & 뮤테이션 (query & mutation)
GraphQL에서는 요청을 보내는 방법을 2가지로 정의하는데, **쿼리**와 **뮤테이션** 이다.  
이 둘은 큰 차이는 없다. 쿼리는 조회(R)에 사용되고, 뮤테이션은 변조(CUD)에 사용되는 **개념적인 규약**일 뿐이다.

<br>

## 데이터 조회

### 쿼리 - 단순 조회  
![단순 조회](https://github.com/l4279625/TIL/blob/main/images/GraphQL-02_01.PNG)

### 쿼리 - 인자를 통한 조회
![인자를 통한 조회](https://github.com/l4279625/TIL/blob/main/images/GraphQL-02_02.PNG)


### 뮤테이션 - 데이터 변조
```graphql
mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
  createReview(episode: $ep, review: $review) {
    stars
    commentary
  }
}
```

<br>

## 스키마 & 타입
[카카오 기술블로그](https://tech.kakao.com/2019/08/01/graphql-basic/)에는 다음과 같이 작성되어 있다.
> 데이터베이스 스키마(Schema)를 작성할 때의 경험을 SQL 쿼리 작성으로 비유한다면, gql 스키마를 작성할 때의 경험은 C, C++의 헤더파일 작성에 비유가 됩니다.

즉, **스키마**라는 것은 GraphQL에서 사용될 객체 타입을 미리 지정해놓는 작업이다.
ex)
```graphQL
type Character {
    name: String!
    appearsIn: [Episode]!
}
```
- 오브젝트 타입 : Character
- 필드 : name, appearsIn
- 스칼라 타입 : String, ID, Int 등
- 느낌표(!) : 필수 값을 의미(non-nulalble)
- 대괄호([, ]): 배열을 의미

<br>

## 리졸버 (Resolver)
GraphQL은 **데이터를 가져오는 구체적인 과정을 직접 구현해야한다.**  
이를 **리졸버**가 담당하며 리졸버를 통해 데이터베이스, 파일 등 **데이터 종류에 상관 없이 구현 가능하다**.  
심지어 http, SOAP 같은 프로토콜을 활용하여 원격 데이터를 가져올 수도 있다.  

GraphQL에서는 각 필드마다 하나의 함수가 존재하며, 이 함수는 다음 타입을 반환하게 되며 리졸버라 부른다.
필드가 스칼라값(primitive 타입)인 경우에는 연쇄 호출이 중지되고, 종료된다.  
(리졸버 호출은 DFS로 구현되어있을것으로 추측된다.)  

동일한 쿼리명을 가진 2가지 쿼리를 살펴보자.
```graphql
{
  paymentsByUser(userId: 10) {
    id
    amount
  }
}

{
  paymentsByUser(userId: 10) {
    id
    amount
    user {
      name
      phoneNumber
    }
  }
}
```

필드 1개당 리졸버 함수 1개이므로 밑의 쿼리가 더 많은 함수를 호출하게 된다.
또한 각각의 리졸버 함수는 내부적으로 데이터베이스 쿼리가 존재하는데, 이 두가지를 조합하면 **쿼리에 맞게 필요한만큼만 최적화하여 호출이 가능하다**.  

즉, 리졸버 체인을 잘 활용하면 효율적인 설계를 할 수 있다는 뜻이다.

<br>

## GraphQL 비즈니스 로직
![GraphQL 비즈니스 로직](https://github.com/l4279625/TIL/blob/main/images/GraphQL-02_03.png)

구현시, 비즈니스 로직은 실제 리졸버 함수에 담지 않는다.  
그러므로 실제 로직은 **비즈니스 로직 레이어**(다른 파일의 다른 함수)에 담는 것이 권장된다.  
- 실제 구현한 비즈니스 로직 관련 리졸버
```graphql
requestPaymentSession: async (parent, { pgId, name, sex, birthDay, phoneNumber, amount, productName, ref 
}, context, info) => {
    # 실제 로직은 비즈니스 레이어로 보냄
    const ret = await requestPaymentSession({ pgId, name, birthDay, phoneNumber, sex, amount, productName, ref })

    return removeSymbol(ret)
},
requestPaymentApprove: async (parent, { sessionKey, authNumber
}, context, info) => {
    # 실제 로직은 비즈니스 레이어로 보냄
    const ret = await requestApprovePayment({ sessionKey, authNumber })

    return removeSymbol(ret)
}
```

<br>

## Reference
[https://owin2828.github.io/devlog/2020/11/13/GraphQL-2.html](https://owin2828.github.io/devlog/2020/11/13/GraphQL-2.html)  
[https://graphql-kr.github.io/learn/queries/](https://graphql-kr.github.io/learn/queries/)
