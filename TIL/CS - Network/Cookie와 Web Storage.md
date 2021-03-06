# Cookie와 Web Storage

# Cookie란?

서버가 사용자의 웹 브라우저에 전송하는 작은 데이터 조각이다.  
브라우저는 그 데이터 조각들을 저장해 놓았다가, 동일한 서버에 재 요청시에 저장된 데이터를 함께 전송한다.
쿠키는 두 요청이 동일한 브라우저에서 들어와는지를 판단할 때 주로 사용하는데, 이를 이용하여 로그인 상태를 유지할 수 있다.

## 쿠키를 사용하는 목적

1. **세션 관리 (Session Management)** : 서버에 저장해야 할 로그인, 장바구니 등의 정보 관리
2. **개인화 (Personalization)** : 사용자 선호, 테마 등의 세팅
3. **트래킹 (Tracking)** : 사용자의 행동을 기록하고 분석하는 용도

과거엔 클라이언트 측에 정보를 저장할 때 쿠키를 주로 사용하였다.  
하지만 지금은 **Modern Storage APIs**를 사용하여 정보를 저장하는 걸 권장한다고 한다.  
(모든 요청마다 쿠키가 함께 전송되기 때문에 성능이 떨어지는 원인이 될 수 있기 때문이다.)  
<br>
정보를 클라이언트 측에 저장하려면 Modern APIs의 한 종류인 **웹 스토리지 API (localStorage, sessionStorage)와 IndexDB**를 사용하면 된다.

## 쿠키의 특징

- **주로 서버에서 사용**
  - Set-Cookie: \<cookie-name>=\<cookie-value>
- **요청 시 Headers에 실려서 서버로 전송**
- **만료 기간 지정가능**
  - Set-Cookie: \<cookie-name>=\<cookie-value>; Expires=\<date>
  - Set-Cookie: \<cookie-name>=\<cookie-value>; Max-Age=\<number>

## 쿠키의 종류

- 만료기한에 따른 분류

  | 영구 쿠키<br>(Persistent Cookie) | 세션 쿠키<br>(Session Cookie) |
  | :------------------------------: | :---------------------------: |
  |           만료 기간 O            |          만료 기간 X          |
  |     만료 기간이 끝난 후 삭제     |     브라우저 종료 시 삭제     |

- 도메인에 따른 분류

  | 퍼스트파티 쿠키<br>(First party Cookie) | 서드파티 쿠키<br>(Third party Cookie) |
  | :-------------------------------------: | :-----------------------------------: |
  |       같은 도메인<br>서브 도메인        |              다른 도메인              |

> 서드파티 쿠키 : 사용자의 방문 사이트 파악 (= 광고)

## 쿠키의 문제점

- CSRF : 쿠키가 자동으로 전송된다는 특징을 이용하여 사이트에 로그인이 되어있는 사용자에게 악성 스크립트 실행하게 함 (결제 요청 등)
- XSS : 사용자의 민감한 정보 탈취
- 부족한 저장 용량 (4KB)
- HTTP 요청 시 자동으로 모든 쿠키 전송 : 불필요한 트래픽 증가)

---

# Web Storage란?

브라우저에서 Key/Value 쌍을 쿠키보다 훨씬 직관적으로 저장할 수 있는 방법을 제공하는 API

## Web Storage의 특징

- 5MB의 저장 용량 (Cookie는 4KB)
- 요청 시 Headers에 전송하지 않음 (CSRF, 트래픽 문제 해결)
- 문자열만 저장 가능 (직렬화를 이용하면 객체도 저장 가능)

|               |   localStorage    |     sessionStorage     |
| :-----------: | :---------------: | :--------------------: |
| **저장 범위** | 도메인 / 브라우저 | 도메인 / 브라우저 / 탭 |
| **삭제 시기** |   직접 삭제 시    |       탭 종료 시       |

## 사용 시 고려할 점

- 객체를 저장하려면 직렬화를 꼭 해줘야 함 (JSON을 이용해줘야함)
- 브라우저에 따라 지원하지 않을 수도 있음 (ex. 사파리 시크릿모드에서 할당량이 0으로 제한되어 있음)

## Web Storage의 문제점

- XSS에 취약함
- 독립된 스토리지 (브라우저 / 탭 간에 데이터 공유 불가)
- 만료 기간 설정 불가
- 동기적으로 실행됨
  - 메인 스레드를 블로킹하게 됨
  - 용량이 크다면 IndexedDB를 고려하는것이 좋음

---

# 정리

- 쿠키나 웹 스토리지 둘 다 보안 문제가 있기 떄문에 민감한 정보는 저장하지 않는 것이 좋다.

## 사용처

|     종류      |                  사용처                   |
| :-----------: | :---------------------------------------: |
|     쿠키      |  n일 동안 보지 않기<br>비로그인 장바구니  |
| 세션 스토리지 | 이전 페이지 저장<br>이전 스크롤 위치 저장 |
| 로컬 스토리지 |     사용자 설정 저장<br>글 임시 저장      |

## 보안 문제 해결 방안

### Cookie

|          |              해결 방안              |                                             이유                                              |
| :------: | :---------------------------------: | :-------------------------------------------------------------------------------------------: |
| **XSS**  |            httpOnly 적용            |                              자바스크립트로 접근이 불가능하게 됨                              |
| **CSRF** | 1. SameSite 적용<br>2. Referer 검증 | 2. 같은 도메인의 요청에만 쿠키를 전송하지 않게 됨<br>요청 온 사이트의 도메인을 확인할 수 있음 |

### Web Storage

|         |    해결 방안     |                  이유                   |
| :-----: | :--------------: | :-------------------------------------: |
| **XSS** | innerHTML 사용 X | 자바스크립트로 코드 삽입을 할 수 없게됨 |

> **innerHTML을 사용해야 한다면?** <br>XSS 보안 라이브러리(sanitize-html, DOMPurify)를 사용

---

### 참조

[https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies](https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies)  
[https://developer.mozilla.org/ko/docs/Web/API/Web_Storage_API](https://developer.mozilla.org/ko/docs/Web/API/Web_Storage_API)  
[\[10분 테코톡\] 🦄 디토의 웹스토리지 & 쿠키](https://www.youtube.com/watch?v=-4ZsGy1LOiE)
