(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{423:function(t,s,v){"use strict";v.r(s);var _=v(31),a=Object(_.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"_1-docker란"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-docker란"}},[t._v("#")]),t._v(" 1. Docker란?")]),t._v(" "),v("p",[v("strong",[t._v("Docker")]),t._v("의 핵심은 "),v("strong",[t._v("경량화 가상화 컨테이너")]),t._v("다."),v("br"),t._v(" "),v("strong",[t._v("Docker")]),t._v("를 활용하여 OS 및 개발, 테스트, 실행 환경을 모두 포함하여 하나의 컨테이너 형태로 배포 가능하다.")]),t._v(" "),v("h2",{attrs:{id:"도커-엔진"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#도커-엔진"}},[t._v("#")]),t._v(" 도커 엔진")]),t._v(" "),v("p",[v("img",{attrs:{src:"/images/TIL/ETC%20-%20Docker/docker-engine.png",alt:"docker-engine.png"}}),v("br"),t._v("\n우리가 흔히 말하는 도커는 일반적으로 도커 엔진을 의미한다.")]),t._v(" "),v("p",[t._v("도커를 실행하면 "),v("code",[t._v("dockerd")]),t._v("라는 데몬 프로그램이 서버로서 실행되며 "),v("strong",[t._v("REST API")]),t._v(", "),v("strong",[t._v("CLI(docker)")]),t._v(" 도구들이 클라이언트가 되어서 도커 데몬에게 작업을 지시한다.")]),t._v(" "),v("h2",{attrs:{id:"컨테이너란"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#컨테이너란"}},[t._v("#")]),t._v(" 컨테이너란?")]),t._v(" "),v("p",[t._v("도커 컨테이너는 "),v("code",[t._v("도커 이미지의 실행가능한 인스턴스")]),t._v("를 뜻한다.")]),t._v(" "),v("p",[t._v("도커는 LXC(Linux Container)를 기반으로 chroot, namespace, cgroup을 사용하여 "),v("strong",[t._v("OS를 마치 프로세스 단위로 사용")]),t._v("한다.")]),t._v(" "),v("p",[t._v("이러한 방법으로 "),v("strong",[t._v("프로세스 단위의 격리 환경을 만들기 때문에 성능 손실이 거의 없다.")])]),t._v(" "),v("p",[t._v("컨테이너는 이미지를 읽기전용으로 사용하고 변경사항은 컨테이너 계층에 저장하므로 컨테이너에서의 변경은 이미지에 영향을 주지 않는다.")]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"컨테이너와-vm의-차이"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#컨테이너와-vm의-차이"}},[t._v("#")]),t._v(" 컨테이너와 VM의 차이")]),t._v(" "),v("p",[v("img",{attrs:{src:"/images/TIL/ETC%20-%20Docker/container-vs-vm.png",alt:"container-vs-vm"}})]),t._v(" "),v("p",[t._v("기존의 가상화 기술(VM)은 하이퍼바이저를 이용하여 Guest OS를 설치하고 그 위에 어플리케이션을 올리는 구조였다.")]),t._v(" "),v("p",[t._v("또한 호스트의 커널을 공유해 사용하기 때문에 컨테이너 안에는 "),v("code",[t._v("애플리케이션에 필요한 라이브러리 및 실행파일")]),t._v("만 존재하기 때문에 컨테이너를 이미지로 만들었을 때 용량 또한 가상머신에 비해 적다.")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("Ubuntu를 예로 들자면!")]),t._v(" "),v("p",[v("strong",[t._v("Ubuntu")]),t._v("에서 "),v("strong",[t._v("Redhat")]),t._v(" 컨테이너를 만든다고 가정해보자."),v("br"),t._v("\n둘 다 Linux 기반이기 때문에 공통 부분이 있을 것이다."),v("br"),t._v("\n공통 부분을 커널에서 공유하고, "),v("strong",[t._v("Redhat")]),t._v("에서만 사용하는 부분만 "),v("strong",[t._v("bin/libs")]),t._v("에 다운받아 사용한다.")])]),t._v(" "),v("p",[t._v("Docker는 위와 같은 방식으로 커널을 공유함으로써 마치 하나의 운영체제에서 어플리케이션과 같은 형태로 가상화된 OS가 돌아갈수 있게 된다.")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[v("strong",[t._v("Windows")]),t._v("와 "),v("strong",[t._v("Mac")]),t._v("은 리눅스 기반이 아니기에 도커가 알아서 가상머신을 설치하고 그 위에 리눅스를 설치해준다."),v("br"),t._v("\n그래서 속도 저하가 없진 않지만, 그럼에도 도커는 가상머신의 "),v("strong",[t._v("QEMU")]),t._v(" 계층이 없어서 더 빠르다.")])]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"도커-아키텍처"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#도커-아키텍처"}},[t._v("#")]),t._v(" 도커 아키텍처")]),t._v(" "),v("p",[v("img",{attrs:{src:"/images/TIL/ETC%20-%20Docker/docker-architecture.svg",alt:"container-vs-vm"}})]),t._v(" "),v("h3",{attrs:{id:"도커-데몬"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#도커-데몬"}},[t._v("#")]),t._v(" 도커 데몬")]),t._v(" "),v("p",[t._v("도커 데몬(dockerd)은 도커 API 요청을 수신하고 이미지, 컨테이너, 네트워크 및 볼륨과 같은 도커 객체를 관리한다."),v("br"),t._v("\n도커 서비스 관리를 위해 다른 데몬과 통신할 수도 있다.")]),t._v(" "),v("h3",{attrs:{id:"도커-클라이언트"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#도커-클라이언트"}},[t._v("#")]),t._v(" 도커 클라이언트")]),t._v(" "),v("p",[t._v("도커 클라리언트(docker)는 "),v("code",[t._v("docker run")]),t._v("과 같은 명령을 전송하여 "),v("code",[t._v("dockerd")]),t._v("를 수행한다."),v("br"),t._v("\n이 docker 명령은 도커 API를 사용한다.\n도커 클라이언트는 둘 이상의 데몬과 통신할 수 있다.")]),t._v(" "),v("h3",{attrs:{id:"도커-레지스트리"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#도커-레지스트리"}},[t._v("#")]),t._v(" 도커 레지스트리")]),t._v(" "),v("p",[t._v("도커 레지스트리는 도커 이미지를 저장한다."),v("br"),t._v(" "),v("a",{attrs:{href:"hub.docker.com"}},[t._v("도커 허브")]),t._v("가 대표적인 공용 레지스트리이며, 도커에서 이미지를 다운받을 때 기본적으로 도커 허브에서 이미지를 찾도록 구성되어 있다.")]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"이미지"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#이미지"}},[t._v("#")]),t._v(" 이미지")]),t._v(" "),v("p",[t._v("Docker에서 이미지란 "),v("strong",[t._v("컨테이너를 구동시키기 위한 필요한 파일과 설정값 등을 저장한 것")]),t._v("이다.")]),t._v(" "),v("p",[t._v("이미지는 변하지 않고(Immutable) 상태를 가지지 않는다.(Stateless)")]),t._v(" "),v("div",{staticClass:"language-shell extra-class"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 일반 이미지")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("REPOSITORY_NAME"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("IMAGE_NAME"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(":"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("IMAGE_TAG"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nex"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" jenkins/jenkins:lts\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 도커 허브 공식 이미지")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("IMAGE_NAME"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(":"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("IMAGE_TAG"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nex"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" openjdk:8-alpine\n")])])]),v("br"),t._v(" "),v("h2",{attrs:{id:"도커의-장점"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#도커의-장점"}},[t._v("#")]),t._v(" 도커의 장점")]),t._v(" "),v("h3",{attrs:{id:"_1-개발과-배포가-편해진다"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-개발과-배포가-편해진다"}},[t._v("#")]),t._v(" 1. 개발과 배포가 편해진다.")]),t._v(" "),v("p",[t._v("도커 컨테이너는 호스트 OS 위에서 실행되는 "),v("strong",[t._v("격리된 공간")]),t._v("이다.")]),t._v(" "),v("p",[t._v("격리된 공간이기에 컨테이너 내부에서 무엇을 설치하든 호스트 OS에는 영향을 끼치지 않는다.")]),t._v(" "),v("p",[t._v("즉, "),v("strong",[t._v("독립된 개발 환경을 보장받는다.")])]),t._v(" "),v("p",[t._v("작업을 마치고 배포하고 싶다면 해당 컨테이너를 "),v("code",[t._v("도커 이미지")]),t._v("라고 하는 일종의 패키지로 만들어 서버에 전달하기만 하면 된다.")]),t._v(" "),v("h3",{attrs:{id:"_2-여러-애플리케이션의-독립성과-확장성이-높아진다"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-여러-애플리케이션의-독립성과-확장성이-높아진다"}},[t._v("#")]),t._v(" 2. 여러 애플리케이션의 독립성과 확장성이 높아진다.")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("모놀리스 vs 마이크로서비스")]),t._v(" "),v("p",[v("strong",[t._v("모놀리스")]),t._v(" : 소프트웨어의 여러 모듈이 상호 작용하는 로직을 하나의 프로그램 내에서 구동시키는 방식"),v("br"),t._v(" "),v("strong",[t._v("마이크로서비스")]),t._v(" : 여러 모듈을 독립된 형태로 구성하는 방식")])]),t._v(" "),v("p",[v("img",{attrs:{src:"/images/TIL/ETC%20-%20Docker/monolith-microservice.png",alt:"monolith-microservice"}})]),t._v(" "),v("p",[t._v("모놀리스 방식은 서비스가 거대해질수록 확장성과 유연성이 줄어드는 단점이 있다.")]),t._v(" "),v("p",[t._v("그에 비해 마이크로서비스 구조는 여러 모듈을 독립된 형태로 구성하기 때문에")]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("언어에 종속되지 않고")])]),t._v(" "),v("li",[v("strong",[t._v("변화에 빠르게 대응할 수 있으며")])]),t._v(" "),v("li",[v("strong",[t._v("각 모듈의 관리가 쉬워진다")])])]),t._v(" "),v("p",[t._v("라는 장점이 있다.")]),t._v(" "),v("p",[t._v("컨테이너는 마이크로서비스 구조에서 가장 많이 사용되고 있는 가상화 기술이다.")]),t._v(" "),v("p",[t._v("이와 같은 컨테이너 기반의 마이크로서비스는 도커 스웜 모드, 쿠버네티스 등을 이용하여 구현하는 것이 일반적이다.")]),t._v(" "),v("br"),t._v(" "),v("p",[t._v("이러한 모놀리스 방식을 대체하기 위해 도커 스웜 모드, 쿠버네티스 등을 이용해 마이크로서비스 구조를 구현한다.")])])}),[],!1,null,null,null);s.default=a.exports}}]);