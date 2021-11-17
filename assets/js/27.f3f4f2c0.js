(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{424:function(t,v,_){"use strict";_.r(v);var s=_(22),r=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"_1-docker란"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-docker란"}},[t._v("#")]),t._v(" 1. Docker란?")]),t._v(" "),_("p",[t._v("Docker의 핵심은 경량화 가상화 컨테이너다."),_("br"),t._v("\nDocker를 활용하여 OS 및 개발, 테스트, 실행 환경을 모두 포함하여 하나의 컨테이너 형태로 배포 가능하다.")]),t._v(" "),_("h2",{attrs:{id:"컨테이너란"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#컨테이너란"}},[t._v("#")]),t._v(" 컨테이너란?")]),t._v(" "),_("p",[_("img",{attrs:{src:"/images/ETC-Docker/container-vs-vm.png",alt:"container-vs-vm"}})]),t._v(" "),_("p",[t._v("기존의 가상화 기술은 하이퍼바이저를 이용하여 Guest OS를 설치하고 그 위에 어플리케이션을 올리는 구조였다.")]),t._v(" "),_("p",[t._v("Docker는 LXC(Linux Container)를 기반으로 chroot, namespace, cgroup을 사용하여 OS를 마치 프로세스 단위로 사용한다.")]),t._v(" "),_("p",[t._v("이러한 방법으로 "),_("strong",[t._v("프로세스 단위의 격리 환경을 만들기 때문에 성능 손실이 거의 없다.")])]),t._v(" "),_("p",[t._v("또한 호스트의 커널을 공유해 사용하기 때문에 컨테이너 안에는 애플리케이션에 필요한 라이브러리 및 실행파일만 존재하기 때문에 컨테이너를 이미지로 만들었을 때 용량 또한 가상머신에 비해 적다.")]),t._v(" "),_("p",[t._v("Docker는 커널을 공유함으로써 마치 하나의 운영체제에서 어플리케이션과 같은 형태로 가상화된 OS가 돌아갈수 있게 된다.")]),t._v(" "),_("h2",{attrs:{id:"이미지"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#이미지"}},[t._v("#")]),t._v(" 이미지")]),t._v(" "),_("p",[t._v("Docker에서 이미지란 "),_("strong",[t._v("컨테이너를 구동시키기 위한 필요한 파일과 설정값 등을 저장한 것")]),t._v("이다.")]),t._v(" "),_("p",[t._v("이미지는 변하지 않고(Immutable) 상태를 가지지 않는다.(Stateless)")]),t._v(" "),_("h2",{attrs:{id:"도커의-장점"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#도커의-장점"}},[t._v("#")]),t._v(" 도커의 장점")]),t._v(" "),_("h3",{attrs:{id:"_1-개발과-배포가-편해진다"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-개발과-배포가-편해진다"}},[t._v("#")]),t._v(" 1. 개발과 배포가 편해진다.")]),t._v(" "),_("p",[t._v("도커 컨테이너는 호스트 OS 위에서 실행되는 "),_("strong",[t._v("격리된 공간")]),t._v("이다.")]),t._v(" "),_("p",[t._v("격리된 공간이기에 컨테이너 내부에서 무엇을 설치하든 호스트 OS에는 영향을 끼치지 않는다.")]),t._v(" "),_("p",[t._v("즉, "),_("strong",[t._v("독립된 개발 환경을 보장받는다.")])]),t._v(" "),_("p",[t._v("작업을 마치고 배포하고 싶다면 해당 컨테이너를 "),_("code",[t._v("도커 이미지")]),t._v("라고 하는 일종의 패키지로 만들어 서버에 전달하기만 하면 된다.")]),t._v(" "),_("p",[t._v("위에서도 말했듯이 컨테이너는 독립된 개발환경이기에, 서비스를 개발했을 때 사용했던 환경을 다른 서버에서도 똑같이 사용할 수 있게 된다.")]),t._v(" "),_("h3",{attrs:{id:"_2-여러-애플리케이션의-독립성과-확장성이-높아진다"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-여러-애플리케이션의-독립성과-확장성이-높아진다"}},[t._v("#")]),t._v(" 2. 여러 애플리케이션의 독립성과 확장성이 높아진다.")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("모놀리스(Monolith) vs 마이크로서비스")]),t._v(" "),_("p",[_("strong",[t._v("모놀리스")]),t._v(" : 소프트웨어의 여러 모듈이 상호 작용하는 로직을 하나의 프로그램 내에서 구동시키는 방식"),_("br"),t._v(" "),_("strong",[t._v("마이크로서비스")]),t._v(" : 여러 모듈을 독립된 형태로 구성하는 방식")])]),t._v(" "),_("p",[t._v("모놀리스 방식은 서비스가 거대해질수록 확장성과 유연성이 줄어드는 단점이 있다.")]),t._v(" "),_("p",[t._v("이러한 모놀리스 방식을 대체하기 위해 도커 스웜 모드, 쿠버네티스 등을 이용해 마이크로서비스 구조를 구현한다.")])])}),[],!1,null,null,null);v.default=r.exports}}]);