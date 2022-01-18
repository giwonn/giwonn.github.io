(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{432:function(t,a,s){"use strict";s.r(a);var e=s(31),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_1-vue-란"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue-란"}},[t._v("#")]),t._v(" 1. Vue 란?")]),t._v(" "),s("p",[t._v("웹 개발을 위한 "),s("strong",[t._v("FrontEnd 프레임워크")]),t._v("이며,"),s("br"),t._v("\nMVVM 패턴의 ViewModel에 해당하는 화면단 라이브러리이기도 하다.")]),t._v(" "),s("h2",{attrs:{id:"특징"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#특징"}},[t._v("#")]),t._v(" 특징")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("MVVM 패턴")])]),t._v(" "),s("li",[s("strong",[t._v("양방향 데이터 바인딩")]),t._v("(앵귤러)와 "),s("strong",[t._v("단방향 데이터 흐름")]),t._v("(리액트)")])]),t._v(" "),s("h3",{attrs:{id:"mvvm-패턴"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mvvm-패턴"}},[t._v("#")]),t._v(" MVVM 패턴")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/TIL/FW-Vue/mvvm.png",alt:"mvvm 패턴"}})]),t._v(" "),s("p",[t._v("View가 특정 모델(View-Model, Model)에 종속되지 않도록 로직을 분리한 패턴이다."),s("br"),t._v("\n뷰, 모델, 뷰모델을 분리하여 독립적으로 개발을 할 수 있으며, View-Model 계층을 통해 View와 Model이 업데이트된다.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Layer")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("View")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("사용자가 보며 상호작용하는 UI")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("ViewModel")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Model과 View를 동기화해주며 Vue에서는 Vue인스턴스를 뜻한다."),s("br"),t._v("DOM Listener와 데이터 바인딩을 제공한다.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("Model")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("데이터와 비즈니스 로직을 담는 곳."),s("br"),t._v("JS에서는 Object(JSON) 형태로 저장되어있다고 보면 된다."),s("br"),t._v("Vue의 Data 속성에 해당한다.")])])])]),t._v(" "),s("ul",[s("li",[t._v("View"),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{message}}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("ViewModel"),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 연결할 View를 지정")]),t._v("\n  data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 연결할 Model을 지정")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("Model"),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" model "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hi'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("언뜻 보면 뷰가 뷰모델에 의존적인것처럼 보이지만, "),s("strong",[t._v("Command 패턴")]),t._v("과 "),s("strong",[t._v("데이터 바인딩")]),t._v("을 통해 의존성을 제거하였다.")]),t._v(" "),s("blockquote",[s("p",[t._v("Command 패턴 : 특정 객체에 대한 기능(명령)들을 객체 내부에서 구현하는것이 아닌, 객체화하여 인터페이스를 통해 제공하는것")])]),t._v(" "),s("blockquote",[s("p",[t._v("데이터 바인딩 : view의 요소들을 데이터와 연결해준다. Vue에서는 주로 {{}}와 v-bind를 통해 양방향 데이터 바인딩을 구현한다.")])]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"양방향-데이터-바인딩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#양방향-데이터-바인딩"}},[t._v("#")]),t._v(" 양방향 데이터 바인딩")]),t._v(" "),s("p",[t._v("View나 Model에서 데이터를 변경하면 다른 한쪽도 데이터가 자동으로 변경된다.")]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"단방향-데이터-흐름"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#단방향-데이터-흐름"}},[t._v("#")]),t._v(" 단방향 데이터 흐름")]),t._v(" "),s("p",[t._v("데이터의 흐름이 한쪽으로 정해져 있는 것을 뜻한다."),s("br"),t._v("\n상위 컴포넌트에서 하위 컴포넌트로만 전달되게 구조화되어있다."),s("br"),t._v("\n(데이터를 상위로 전달하려면 이벤트버스와 같은 방법으로 데이터를 전달하면 가능하긴 하다.)")]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"가상-dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#가상-dom"}},[t._v("#")]),t._v(" 가상 DOM")]),t._v(" "),s("p",[s("strong",[t._v("DOM을 본 따 만든 객체 덩어리")]),t._v("이며, diff 알고리즘을 통해 Real DOM 대신 바뀐 점을 탐색해주어 렌더링 과정을 줄여주고 브라우저의 부담을 덜어준다."),s("br"),t._v("\n원래는 관련된 DOM 요소가 바뀔 때마다 바뀐 횟수만큼 렌더링을 해주는데,"),s("br"),t._v("\n가상 DOM을 통해서 바뀐 곳을 파악하고 최종적으로 "),s("strong",[t._v("한번만 렌더링해준다")]),t._v(".\n"),s("a",{attrs:{href:"https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Virtual-DOM/#_1-%E1%84%80%E1%85%A1%E1%84%89%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A9%E1%86%B7-virtualdom-%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5",target:"_blank",rel:"noopener noreferrer"}},[t._v("(참고)"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("DOM요소를 조작하는것보다 렌더링을 여러번 해주는 비용이 훨씬 크다.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);