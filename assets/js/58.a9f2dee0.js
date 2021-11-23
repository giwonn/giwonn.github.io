(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{455:function(t,a,r){"use strict";r.r(a);var v=r(22),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"frontend에서의-에러-핸들링"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#frontend에서의-에러-핸들링"}},[t._v("#")]),t._v(" FrontEnd에서의 에러 핸들링")]),t._v(" "),r("h2",{attrs:{id:"오류-에러-란"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#오류-에러-란"}},[t._v("#")]),t._v(" 오류(에러)란?")]),t._v(" "),r("p",[t._v("하드웨어의 고장 또는 소프트웨어가 본래의 동작을 할 수 없는 상태")]),t._v(" "),r("ol",[r("li",[t._v("컴파일 오류 (코드가 컴파일 될 때 컴파일러가 해석하지 못해서 발생)")]),t._v(" "),r("li",[t._v("런타임 오류 (프로그램이 동작할 때 발견할 수 있는 에러)")])]),t._v(" "),r("blockquote",[r("p",[t._v("JavaScript 에서의 예외는 보통 런타임 오류를 일컫는다.")])]),t._v(" "),r("br"),t._v(" "),r("h2",{attrs:{id:"javascript와-컴파일-오류"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#javascript와-컴파일-오류"}},[t._v("#")]),t._v(" JavaScript와 컴파일 오류")]),t._v(" "),r("p",[t._v("JavaScript는 동적타입언어이기 때문에 프로그램이 동작할 때 동적으로 타입을 결정해주기 때문에"),r("br"),t._v(" "),r("strong",[t._v("모든 에러가 컴파일 단계가 아닌 런타임 환경에서 발생할 수 있다.")]),r("br"),t._v("\n(TypeScript를 통해서 런타임 전에 미리 캐치할 수 있는 오류들을 상당수 잡아낼 수 있다.)")]),t._v(" "),r("br"),t._v(" "),r("h2",{attrs:{id:"예외란"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#예외란"}},[t._v("#")]),t._v(" 예외란?")]),t._v(" "),r("p",[t._v("일반적으로 런타임 오류와 관련된 것으로 "),r("strong",[t._v("예상하기 어렵거나 예상이 불가능한 이슈")]),t._v("를 의미")]),t._v(" "),r("ul",[r("li",[t._v("예외가 발생하면 JavaScript는 Error 객체를 내보내고, 처리를 하지 않았다면 프로그램을 종료시킨다.")])]),t._v(" "),r("br"),t._v(" "),r("h2",{attrs:{id:"에러의-분류"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#에러의-분류"}},[t._v("#")]),t._v(" 에러의 분류")]),t._v(" "),r("h3",{attrs:{id:"예상이-가능한-에러"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#예상이-가능한-에러"}},[t._v("#")]),t._v(" 예상이 가능한 에러")]),t._v(" "),r("ul",[r("li",[t._v("인증 에러")]),t._v(" "),r("li",[t._v("업는 페이지를 접근했을 때의 에러")]),t._v(" "),r("li",[t._v("앱에서 정의한대로 API 응답의 상태코드로 예측할 수 있는 에러")]),t._v(" "),r("li",[t._v("악의적인 목적으로 접근했을 때 이를 보완하는 코드가 프로그램에 내재되어 있지 않은 경우")])]),t._v(" "),r("h3",{attrs:{id:"예상이-불가능한-에러"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#예상이-불가능한-에러"}},[t._v("#")]),t._v(" 예상이 불가능한 에러")]),t._v(" "),r("ul",[r("li",[t._v("서비스 장애")]),t._v(" "),r("li",[t._v("네트워크가 일시적으로 불안정한 상황에서 발생하는 에러")]),t._v(" "),r("li",[t._v("500대 에러")])]),t._v(" "),r("br"),t._v(" "),r("h2",{attrs:{id:"try-catch-finally"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#try-catch-finally"}},[t._v("#")]),t._v(" Try - Catch - Finally")]),t._v(" "),r("ul",[r("li",[t._v("Try : 에러가 발생할 수도 있는 로직 작성. 에러를 직접 Throw 할 수도 있음")]),t._v(" "),r("li",[t._v("Catch : 에러 잡기")]),t._v(" "),r("li",[t._v("Finally : 로직이 끝나고 무조건 해당 구문을 실행시킴")])]),t._v(" "),r("br"),t._v(" "),r("h2",{attrs:{id:"에러핸들링에-대한-고찰"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#에러핸들링에-대한-고찰"}},[t._v("#")]),t._v(" 에러핸들링에 대한 고찰")]),t._v(" "),r("p",[t._v("무조건 try-catch를 사용하는 것을 지양해야한다!")]),t._v(" "),r("ul",[r("li",[t._v("catch에 넘겨지는 error객체의 타입을 보장할 수 없음")]),t._v(" "),r("li",[t._v("오류를 해결하는 것이 아닌 숨기는 것임")]),t._v(" "),r("li",[t._v("try-catch를 통해 "),r("strong",[t._v("유의미한 결과를 내보낼 수 없다면 에러를 터뜨리는 것이 나을수도 있다")]),t._v(".")])]),t._v(" "),r("br"),t._v(" "),r("h2",{attrs:{id:"참고"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#참고"}},[t._v("#")]),t._v(" 참고")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.youtube.com/watch?v=FXtooPhupr4",target:"_blank",rel:"noopener noreferrer"}},[t._v("[10분 테코톡] 🌼티케의 프론트엔드에서의 에러 핸들링"),r("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=_.exports}}]);