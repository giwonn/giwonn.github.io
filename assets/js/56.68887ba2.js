(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{459:function(t,s,a){"use strict";a.r(s);var n=a(22),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_15장-let-const키워드와-블록-레벨-스코프"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15장-let-const키워드와-블록-레벨-스코프"}},[t._v("#")]),t._v(" 15장. let, const키워드와 블록 레벨 스코프")]),t._v(" "),a("ul",[a("li",[t._v("var : 중복 선언 가능, 함수 레벨 스코프")]),t._v(" "),a("li",[t._v("let, const : 중복 선언 금지, 블록 레벨 스코프")]),t._v(" "),a("li",[t._v("const : 선언과 동시에 초기화를 해야한다, 재할당 금지")])]),t._v(" "),a("h2",{attrs:{id:"함수-레벨-스코프"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#함수-레벨-스코프"}},[t._v("#")]),t._v(" 함수 레벨 스코프")]),t._v(" "),a("p",[t._v("함수 레벨 스코프는 오로지 "),a("strong",[t._v("함수의 코드 블록만을 지역 스코프로 인정")]),t._v("한다.")]),t._v(" "),a("h2",{attrs:{id:"변수-호이스팅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#변수-호이스팅"}},[t._v("#")]),t._v(" 변수 호이스팅")]),t._v(" "),a("p",[t._v("함수에 선언된 변수들이 함수 유효 범위의 최상단으로 끌어올려지는 것")]),t._v(" "),a("ul",[a("li",[t._v("var : 선언 + undefined 초기화")]),t._v(" "),a("li",[t._v("let, const : 선언만 끌어올려짐\n(개발자가 선언과 초기화를 따로 한 경우 선언시점에 undefined로 초기화 된다.)")])]),t._v(" "),a("p",[t._v("let, const는 초기화가 되지 않았으므로 참조할 수 없어서 선언 이전에 호출하면 TDZ에 의해 ReferenceError가 발생한다.")]),t._v(" "),a("ul",[a("li",[t._v("TDZ(Temporal Dead Zone) : 스코프의 시작 지점부터 초기화 시작지점까지 변수를 참조할 수 없는 구간")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n\nfoo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n")])])]),a("ul",[a("li",[t._v("결과"),a("br"),t._v(" "),a("img",{attrs:{src:"/images/Lang-Javascript/let-result.png",alt:"Untitled"}})])])])}),[],!1,null,null,null);s.default=e.exports}}]);