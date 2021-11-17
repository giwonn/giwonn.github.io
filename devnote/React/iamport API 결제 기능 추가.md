# 아임포트(iamport) API 결제 기능 추가

이 글은 리액트에서 아임포트 API를 다루는 방법을 설명합니다.

## 1. 세팅하기 - 라이브러리 호출

React와 useEffect를 import 해준다.

useEffect를 사용하는 이유는 브라우저가 이 파일을 처음 호출했을 때

useEffect의 내부코드가 변하는 것이 없다면 컴포넌트가 호출되는 첫 시점에 한번만 호출된다.

그리고 컴포넌트가 소멸하기 직전에 useEffect의 리턴을 호출한다.

react에서 아래와 같이 jquery와 iamport 를 호출할 수 있다.

```jsx
import React, { useEffect } from 'react';

const Payment = (effect, deps) => {
	    useEffect(() => {
        const jquery = document.createElement("script");
        jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
        const iamport = document.createElement("script");
        iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);
        return () => {
            document.head.removeChild(jquery);
            document.head.removeChild(iamport);
        }
    }, []);


    return ();
}
```

<br>

## 2. 가맹점 식별하기

pg 는 어느 플랫폼을 이용하여 결제할지 물어보는거고,

pay_method는 결제수단을 말하는것이다. card로 설정하면 카드결제밖에 되지않는다.

이니시스에서 카카오페이를 사용하더라도 결제가 실패한다. 이건 좀 더 알아볼 예정이다.

그리고 코드 아랫쪽에 IMP.request_pay(data, callback)에 들어가는 callback을 구현해야한다.

```jsx{7}
const onClickPayment = () => {
const { IMP } = window;
IMP.init('imp77220765'); // 가맹점 식별코드

        // 결제 데이터 정의
        const data = {
            pg: 'html5_inicis',     // PG사 (필수항목)
            pay_method: 'card',     // 결제수단 (필수항목)
            merchant_uid: `mid_${new Date().getTime()}`,  // 결제금액 (필수항목)
            name: '결제 테스트',     // 주문명 (필수항목)
            amount: '1000',         // 금액 (필수항목)
            custom_data: {
                name: '부가정보',
                desc: '세부 부가정보'
            },
            buyer_name: '임기원',       // 구매자 이름
            buyer_tel: '01099558701',   // 구매자 전화번호 (필수항목)
            buyer_email: 'l4279625@gmail.com', // 구매자 이메일
            buyer_addr: '주소',
            buyer_postalcode: '우편번호'
    		// ....
        };

        IMP.request_pay(data, callback);
    }
```

참고 : [https://docs.iamport.kr/implementation/payment](https://docs.iamport.kr/implementation/payment)

<br>

## 3. 콜백 구현

```jsx
const callback = (response) => {
  const { success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status } = response;

  if (success) {
    alert('결제 성공');
  } else {
    alert(`결제 실패 : ${error_msg}`);
  }
};
```

<br>

## 3. 전체 코드

```jsx
import React, { useEffect } from 'react';

const Payment = (effect, deps) => {
  useEffect(() => {
    const jquery = document.createElement('script');
    jquery.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
    const iamport = document.createElement('script');
    iamport.src = 'https://cdn.iamport.kr/js/iamport.payment-1.1.7.js';
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  const onClickPayment = () => {
    const { IMP } = window;
    IMP.init('imp77220765'); // 가맹점 식별코드

    // 결제 데이터 정의
    const data = {
      pg: 'html5_inicis', // PG사 (필수항목)
      pay_method: 'card', // 결제수단 (필수항목)
      merchant_uid: `mid_${new Date().getTime()}`, // 결제금액 (필수항목)
      name: '결제 테스트', // 주문명 (필수항목)
      amount: '1000', // 금액 (필수항목)
      custom_data: {
        name: '부가정보',
        desc: '세부 부가정보',
      },
      buyer_name: '임기원', // 구매자 이름
      buyer_tel: '01099558701', // 구매자 전화번호 (필수항목)
      buyer_email: 'l4279625@gmail.com', // 구매자 이메일
      buyer_addr: '구천면로 365-13',
      buyer_postalcode: '05258',
    };

    IMP.request_pay(data, callback);
  };

  const callback = (response) => {
    const { success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status } = response;

    if (success) {
      alert('결제 성공');
    } else {
      alert(`결제 실패 : ${error_msg}`);
    }
  };

  return (
    <>
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
};

export default Payment;
```

<br>

여기까지 하면 결제기능이 담긴 Component 하나 완성이다.
