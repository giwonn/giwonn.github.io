(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{415:function(t,v,a){"use strict";a.r(v);var _=a(22),r=Object(_.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"android-activity-life-cycle-안드로이드-생명-주기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-activity-life-cycle-안드로이드-생명-주기"}},[t._v("#")]),t._v(" Android Activity Life Cycle (안드로이드 생명 주기)")]),t._v(" "),a("h2",{attrs:{id:"액티비티란"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#액티비티란"}},[t._v("#")]),t._v(" 액티비티란?")]),t._v(" "),a("blockquote",[a("p",[t._v('사용자 "인터페이스 화면" 을 가지며 특정한 작업을 담당하는 컴포넌트')])]),t._v(" "),a("ul",[a("li",[t._v("일반적으로 "),a("strong",[t._v("UI를 갖는 하나의 스크린")]),t._v("을 나타낸다.")]),t._v(" "),a("li",[t._v("안드로이드 애플리케이션은")])]),t._v(" "),a("h2",{attrs:{id:"activity의-역할"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activity의-역할"}},[t._v("#")]),t._v(" Activity의 역할")]),t._v(" "),a("h3",{attrs:{id:"oncreate-액티비티-생성할-때"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oncreate-액티비티-생성할-때"}},[t._v("#")]),t._v(" onCreate() - 액티비티 생성할 때")]),t._v(" "),a("ul",[a("li",[t._v("액티비티가 만들어지고 나서 최초에 한번만 호출")]),t._v(" "),a("li",[a("strong",[t._v("액티비티에 필요한 리소스들을 초기화")]),t._v(" 및 View의 상태들을 설정함")]),t._v(" "),a("li",[t._v("이전 상태가 저장되어 있을 경우, 번들 객체를 참조하여 복원 가능")]),t._v(" "),a("li",[t._v("onCreate() "),a("strong",[t._v("이후에는 항상 onStart()가 호출")]),t._v("됨")])]),t._v(" "),a("h3",{attrs:{id:"onstart-화면에-보여지기-시작할-때"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onstart-화면에-보여지기-시작할-때"}},[t._v("#")]),t._v(" onStart() - 화면에 보여지기 시작할 때")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("아직 사용자와 상호작용은 할 수 없는 단계")])]),t._v(" "),a("li",[t._v("액티비티가 시작되기 전에 호출되는 함수/액티비티가 멈춘 후, 다시 호출하는 함수")]),t._v(" "),a("li",[t._v("액티비티가 화면에 보이기 직전에 호출됨")]),t._v(" "),a("li",[t._v("매우 빠르게 끝나고 onResume() 단계로 넘어감")]),t._v(" "),a("li",[t._v("보통 "),a("strong",[t._v("Broadcast Receiver")]),t._v("는 이 단계에서 등록하는 것이 좋다.")])]),t._v(" "),a("h3",{attrs:{id:"onresume-화면이-나타나-있고-실행중일-때"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onresume-화면이-나타나-있고-실행중일-때"}},[t._v("#")]),t._v(" onResume() - 화면이 나타나 있고 실행중일 때")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("사용자와 상호작용이 가능해지는 단계")])]),t._v(" "),a("li",[t._v("액티비티가 사용자와 상호 작용하기 바로 직전에 호출되는 함수")]),t._v(" "),a("li",[t._v("이 메소드가 호출되고 나서 액티비티가 사용자에게 보이기 시작함")]),t._v(" "),a("li",[t._v("사용자에게 focus를 잡은 상태")])]),t._v(" "),a("h3",{attrs:{id:"onrestart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onrestart"}},[t._v("#")]),t._v(" onRestart()")]),t._v(" "),a("ul",[a("li",[t._v("액티비티가 "),a("strong",[t._v("중지된 이후에 호출되는 메소드")]),t._v("로, 다시 시작되기 직전에 호출됨\n"),a("br")])]),t._v(" "),a("h2",{attrs:{id:"다른-액티비티가-호출되는-경우"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#다른-액티비티가-호출되는-경우"}},[t._v("#")]),t._v(" 다른 액티비티가 호출되는 경우")]),t._v(" "),a("h3",{attrs:{id:"onpause-화면의-일부가-다른-액티비티에-가려질-때"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onpause-화면의-일부가-다른-액티비티에-가려질-때"}},[t._v("#")]),t._v(" onPause() - 화면의 일부가 다른 액티비티에 가려질 때")]),t._v(" "),a("ul",[a("li",[t._v("액티비티 위에 액티비티가 올라와서 "),a("strong",[t._v("focus를 잃었을 때 호출")]),t._v("됨")]),t._v(" "),a("li",[t._v("액티비티가 완전히 가려지지 않고 부분만 가려진 상태에서 호출되는 함수")]),t._v(" "),a("li",[t._v("다른 액티비티가 호출되기 전에 실행되기 때문에 시간이 많이 소요되는 작업을 하지 않도록 주의해야함")]),t._v(" "),a("li",[t._v("영구적인 data는 여기서 저장함")]),t._v(" "),a("li",[t._v("액티비티가 이 상태에 들어가면 시스템은 액티비티를 강제 종료 할 수 있음")])]),t._v(" "),a("h3",{attrs:{id:"onstop-다른-액티비티의-실행으로-완전히-가려질-때"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onstop-다른-액티비티의-실행으로-완전히-가려질-때"}},[t._v("#")]),t._v(" onStop() - 다른 액티비티의 실행으로 완전히 가려질 때")]),t._v(" "),a("ul",[a("li",[t._v("액티비티 위에 다른 액티비티가 완전히 올라와서 100% 가려질 때 호출되는 함수")]),t._v(" "),a("li",[t._v("즉, "),a("strong",[t._v("사용자에게서 더 이상 보이지 않을 때 호출")]),t._v("된다.")]),t._v(" "),a("li",[t._v("이 상태에서 액티비티가 다시 불려지면 onRestart()가 호출됨")]),t._v(" "),a("li",[t._v("시스템이 onstop() 상태에 들어오면 onSaveInstanceState()라는 메소드를 호출하는데, 여기서 k-v형태로 값 저장이 되고 onCreate()에서 복원이 가능함")])]),t._v(" "),a("h3",{attrs:{id:"ondestroy-액티비티-종료"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ondestroy-액티비티-종료"}},[t._v("#")]),t._v(" onDestroy() - 액티비티 종료")]),t._v(" "),a("ul",[a("li",[t._v("액티비티가 완전히 스택에서 없어질 때 호출되는 함수")]),t._v(" "),a("li",[t._v("Finish() "),a("strong",[t._v("메소드가 호출")]),t._v("되거나 "),a("strong",[t._v("시스템 메모리 확보")]),t._v("를 위해서 시스템이 강제로 종료시키는 경우에 호출될 수 있음")])]),t._v(" "),a("h2",{attrs:{id:"사용-예"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용-예"}},[t._v("#")]),t._v(" 사용 예")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("앱을 사용하는데 카카오톡 메시지가 온다면?")]),t._v(" "),a("blockquote",[a("p",[t._v("부분만 가려지므로 onPause()가 호출된다.")])])]),t._v(" "),a("li",[a("p",[t._v("데이터를 불러오는 작업은 어디서 해야할까?")]),t._v(" "),a("blockquote",[a("p",[t._v("onCreate()")])])])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("img",{attrs:{src:"/images/APP-Android/activity-lifecycle.png",alt:"activity-lifecycle"}})])])}),[],!1,null,null,null);v.default=r.exports}}]);