(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{407:function(t,a,r){"use strict";r.r(a);var e=r(31),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"fragment"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fragment"}},[t._v("#")]),t._v(" Fragment")]),t._v(" "),r("h2",{attrs:{id:"fragment-란"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fragment-란"}},[t._v("#")]),t._v(" Fragment 란?")]),t._v(" "),r("ul",[r("li",[t._v("앱의 전체 UI에서 어딘가에 반복적으로 "),r("strong",[t._v("재사용 가능한 부분")]),t._v("을 말한다. (객체랑 비슷하다고 보면 될듯?)")]),t._v(" "),r("li",[t._v("Fragment는 **자체 레이아웃(xml)**을 가질 수 있으며 "),r("strong",[t._v("자체 생명 주기")]),t._v("를 보유한다. (Activity LifeCycle 부터 제대로 익히고 나서 공부하자..)")]),t._v(" "),r("li",[t._v("Fragment는 "),r("strong",[t._v("독립적으로 존재할 수 없고")]),t._v(", 반드시 Activity나 다른 Fragment에 호스팅되어야한다.")]),t._v(" "),r("li",[t._v("Android Jetpack Library 중 Navigation, BottomNavigationView, ViewPager2 등은 Fragment와 호환되도록 설계되어 있어서 함께 자주 사용된다.")])]),t._v(" "),r("h2",{attrs:{id:"activity와의-다른-목적성"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#activity와의-다른-목적성"}},[t._v("#")]),t._v(" Activity와의 다른 목적성")]),t._v(" "),r("ul",[r("li",[t._v("Activity : 앱의 전체적인 UI에 포함될 요소들을 배치하는 곳")]),t._v(" "),r("li",[t._v("Fragment : 단일 화면이나 화면 일부에 관한 UI를 정의하기에 적합함")]),t._v(" "),r("li",[t._v("하늘색 부분은 Activity에 배치된 UI이고, 연두색은 Fragment 자체 UI이다. Activity는 연두색 Fragment를 호스팅하고 있다고 보면 된다.\n"),r("img",{attrs:{src:"/images/TIL/APP%20-%20Android/android-fragment.png",alt:"android-fragment"}})])]),t._v(" "),r("h2",{attrs:{id:"장점"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#장점"}},[t._v("#")]),t._v(" 장점")]),t._v(" "),r("ul",[r("li",[t._v("앱의 단일 화면이나 부분화면을 Fragment로 구현하면 런타임 시 UI를 사용자와 상호작용하면서 실시간으로 수정 가능함\n(네비게이션 바에서 메뉴를 누르면 해당 메뉴로 화면이 바뀌는 것을 뜻함)")]),t._v(" "),r("li",[t._v("대신 UI를 실시간으로 바꿀 떄는 호스트 Activity의 수명 주기가 STARTED 상태일 때만 가능하다.")]),t._v(" "),r("li",[t._v("Fragment의 변경사항은 FragmentManager의 "),r("strong",[t._v("Fragment BackStack")]),t._v("에 히스토리를 저장하여 기록할 수 있다.")]),t._v(" "),r("li",[t._v('이 백스택에 저장된 사항들에 한하여 사용자가 "뒤로"버튼을 누를 경우 이전 화면으로 되돌리기 작업을 진행할 수 있다.')])]),t._v(" "),r("h2",{attrs:{id:"주의점"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#주의점"}},[t._v("#")]),t._v(" 주의점")]),t._v(" "),r("ul",[r("li",[t._v("Fragment는 재사용 가능한 자체 UI를 가지기 때문에 어느 Activity나 Fragment에도 호스팅 될 수 있다.")]),t._v(" "),r("li",[t._v("따라서 Fragment 클래스에는 자체 UI를 관리하는 로직만 구현해야한다. (모듈성, 재사용성을 해치게 됨)")]),t._v(" "),r("li",[t._v("즉, Fragment가 "),r("strong",[t._v("다른 Activy나 Fragment에 의존하면 안된다.")]),t._v(" (이거 매우 중요한듯!!!!!)")])]),t._v(" "),r("h2",{attrs:{id:"fragmentmanager"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fragmentmanager"}},[t._v("#")]),t._v(" FragmentManager")]),t._v(" "),r("ul",[r("li",[t._v("FragmentManager는 BackStack에 Fragment 추가/교체/삭제 작업에 의한 변경사항을 push 및 pop 하는 작업을 담당하는 클래스다")])]),t._v(" "),r("h2",{attrs:{id:"자세한건-직접-사용해보면서-공부해보자"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#자세한건-직접-사용해보면서-공부해보자"}},[t._v("#")]),t._v(" 자세한건 직접 사용해보면서 공부해보자")]),t._v(" "),r("p",[t._v("사실 더 적을게 많지만 이론을 적어가면서 공부해봤자 이 이상은 머리에 들어오질 않았다.\n직접 사용해보면서 익혀야 할 듯 하다")])])}),[],!1,null,null,null);a.default=v.exports}}]);