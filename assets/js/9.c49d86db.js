(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{407:function(t,s,a){"use strict";a.r(s);var n=a(22),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"til-개발노트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#til-개발노트"}},[t._v("#")]),t._v(" TIL & 개발노트")]),t._v(" "),a("h2",{attrs:{id:"메뉴"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#메뉴"}},[t._v("#")]),t._v(" 메뉴")]),t._v(" "),a("h3",{attrs:{id:"_1-til"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-til"}},[t._v("#")]),t._v(" 1. "),a("RouterLink",{attrs:{to:"/TIL/"}},[t._v("TIL")])],1),t._v(" "),a("h3",{attrs:{id:"_2-개발노트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-개발노트"}},[t._v("#")]),t._v(" 2. "),a("RouterLink",{attrs:{to:"/devnote/"}},[t._v("개발노트")])],1),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"우측상단에서도-메뉴를-고르실-수-있습니다"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#우측상단에서도-메뉴를-고르실-수-있습니다"}},[t._v("#")]),t._v(" 우측상단에서도 메뉴를 고르실 수 있습니다.")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"개발-원칙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#개발-원칙"}},[t._v("#")]),t._v(" 개발 원칙")]),t._v(" "),a("h3",{attrs:{id:"kiss-keep-it-simple-stupid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kiss-keep-it-simple-stupid"}},[t._v("#")]),t._v(" KISS (Keep it Simple Stupid)")]),t._v(" "),a("p",[t._v("코드를 멍청하다는 생각이 들 정도로 간결하게 유지하자.")]),t._v(" "),a("ul",[a("li",[t._v("대부분의 프로그램은 단순할 때 더 원활히 동작한다.")]),t._v(" "),a("li",[t._v("새로운 코드를 작성하면서 소모하는 대부분의 작업은 "),a("strong",[t._v("코드 읽기")]),t._v("이다. 나중에 읽기 편하게 최대한 다듬자.")]),t._v(" "),a("li",[t._v("필요 이상으로 유연하게 코드를 다듬지는 말자. 요구사항이 어떻게 바뀔지는 아무도 모른다.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("전략")]),t._v(" "),a("ol",[a("li",[t._v("상속, 다형성, 동적 바인딩 등 복잡한 객체 지향의 개념의 사용을 최대한 피한다. 위임, 단순 조건문을 최대한 활용하여 개발한다.")]),t._v(" "),a("li",[t._v("로우 레벨 최적화를 자제한다. 성능 최적화보다 정확한 동작이 우선이다.")]),t._v(" "),a("li",[t._v("성능에 문제될 정도로 방대한 데이터를 다루지 않는 이상 단순한 알고리즘을 사용하자.")])])]),t._v(" "),a("p",[t._v("배열에서 짝수만 필터링해서 2배를 해준 배열을 만들어보자."),a("br"),t._v("\n굳이 reduce를 쓰는 것 보다는 filter와 map을 번갈아 쓰는것이 오히려 보기엔 나을 수도 있다."),a("br"),t._v("\n물론 filter, map을 쓰는 것이 무조건 좋은건 아니다."),a("br"),t._v(" "),a("strong",[t._v("하지만 웬만해서는 읽기 편할 것이다.")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 간결한 코드")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" simple "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("filteredVal")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" filteredVal "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [4, 8]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 복잡한 코드")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" complex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("acc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cur")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [4, 8]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        acc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" acc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"yagni-you-are-not-gonna-need-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yagni-you-are-not-gonna-need-it"}},[t._v("#")]),t._v(" YAGNI (You are not gonna need it)")]),t._v(" "),a("ul",[a("li",[t._v("정말로 필요한 기능만 구현한다.")]),t._v(" "),a("li",[t._v("나중에 필요할 듯한 기능을 같이 구현하지 말라. 일단 현재에 집중하자.")])]),t._v(" "),a("h3",{attrs:{id:"do-the-simplest-thing-that-could-possibly-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#do-the-simplest-thing-that-could-possibly-work"}},[t._v("#")]),t._v(" Do the simplest thing that could possibly work")]),t._v(" "),a("ul",[a("li",[t._v("문제를 해결하기 위해 가장 단순한 방법을 찾는다.")]),t._v(" "),a("li",[t._v("전략\n"),a("ol",[a("li",[t._v("문제를 세분화하라.")]),t._v(" "),a("li",[t._v("단순한 문제를 해결하기 위한 함수와 객체를 만들어라.")]),t._v(" "),a("li",[t._v("이러한 함수와 객체들은 단순하고 이해하기 쉬워진다.")]),t._v(" "),a("li",[t._v("아무런 변경 없이 어디에든 붙일 수 있는 클래스를 만들자. (즉, 의존성이 적은 클래스!)")])])])]),t._v(" "),a("h3",{attrs:{id:"성급한-최적화는-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#성급한-최적화는-x"}},[t._v("#")]),t._v(" 성급한 최적화는 X")]),t._v(" "),a("ul",[a("li",[t._v("일단 구현하자.")]),t._v(" "),a("li",[t._v("구현을 끝내고 예외처리 -> 최적화 루트를 밟자.")])]),t._v(" "),a("h3",{attrs:{id:"상속보다는-합성을-사용하자"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#상속보다는-합성을-사용하자"}},[t._v("#")]),t._v(" 상속보다는 합성을 사용하자.")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("is a")]),t._v(" 인지 "),a("strong",[t._v("has a")]),t._v(" 인지 제대로 구분하자.")]),t._v(" "),a("li",[t._v("구분을 잘 해야 상속을 사용할지 합성을 사용할지 잘 결정할 수 있게 된다.")])])])}),[],!1,null,null,null);s.default=r.exports}}]);