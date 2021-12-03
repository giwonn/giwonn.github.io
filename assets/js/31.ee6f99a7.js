(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{428:function(v,_,t){"use strict";t.r(_);var r=t(22),e=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"_2-2-도커-볼륨"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-도커-볼륨"}},[v._v("#")]),v._v(" 2-2. 도커 볼륨")]),v._v(" "),t("p",[v._v("컨테이너 내부의 변경사항은 컨테이너 내부에 저장이 된다.")]),v._v(" "),t("p",[t("img",{attrs:{src:"/images/ETC-Docker/container-layer.png",alt:"container-layer"}})]),v._v(" "),t("p",[v._v("위의 그림처럼 "),t("strong",[v._v("컨테이너를 생성하면 이미지는 읽기 전용이 되며")]),v._v(",")]),v._v(" "),t("p",[t("strong",[v._v("이미지 레이어 위에 컨테이너 레이어가 추가되는 구조")]),v._v("다.")]),v._v(" "),t("p",[v._v("저 컨테이너 레이어에 변경된 정보를 저장하는데, 컨테이너가 삭제된다면 저 컨테이너 레이어가 삭제되는 것이다.")]),v._v(" "),t("p",[v._v("만약 mysql 컨테이너를 만들어서 DB에 정보를 저장했다면,")]),v._v(" "),t("p",[v._v("그 정보 또한 컨테이너 레이어에 저장될테니, 컨테이너가 삭제되면 같이 삭제된다.")]),v._v(" "),t("p",[v._v("이를 방지하기 위해 컨테이너의 데이터를 **영속적(Persistent)**으로 활용할 수 있는 방법이 몇 가지 있다.")]),v._v(" "),t("p",[v._v("그 중에 가장 활용하기 쉬운 방법이 "),t("strong",[v._v("볼륨")]),v._v("을 활용하는 방법이다.")]),v._v(" "),t("p",[v._v("볼륨을 활용하는 방법은 여러가지가 있다.")]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("호스트와 볼륨을 공유")])]),v._v(" "),t("li",[t("strong",[v._v("볼륨 컨테이너를 활용")])]),v._v(" "),t("li",[t("strong",[v._v("도커가 관리하는 볼륨을 생성")])])]),v._v(" "),t("p",[v._v("이 중에서 먼저 호스트와 볼륨을 공유하는 방법을 알아보자.")]),v._v(" "),t("h2",{attrs:{id:"_1-호스트-볼륨-공유"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-호스트-볼륨-공유"}},[v._v("#")]),v._v(" 1. 호스트 볼륨 공유")]),v._v(" "),t("p",[v._v("호스트 볼륨 공유는 호스트와 컨테이너가 디렉토리를 공유하는 방법이다."),t("br"),v._v(" "),t("strong",[v._v("두 디렉토리는 동기화 되는 것이 아니라 완전히 같은 디렉토리다.")])]),v._v(" "),t("h3",{attrs:{id:"옵션-사용법"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#옵션-사용법"}},[v._v("#")]),v._v(" 옵션 사용법")]),v._v(" "),t("ul",[t("li",[t("p",[t("strong",[v._v("windows")]),v._v(" : "),t("code",[v._v("-v C:/[호스트의 공유 디렉토리]:[컨테이너의 공유 디렉토리]")])])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("Linux")]),v._v(" : "),t("code",[v._v("-v /[호스트의 공유 디렉토리]:[컨테이너의 공유 디렉토리]")])])])]),v._v(" "),t("br"),v._v(" "),t("p",[v._v("컨테이너 생성시 위의 옵션을 추가해주면 된다."),t("br"),v._v("\nwindows의 경우에는 default가 C드라이브라면 최상위 디렉토리를 C드라이브로 시작하면 된다.")]),v._v(" "),t("p",[v._v("기본적인 컨셉은 "),t("code",[v._v("호스트와 컨테이너의 디렉토리를 공유한다.")]),v._v(" 라고 생각하면 되는데,"),t("br"),v._v("\n호스트에 공유 디렉토리가 존재하지 않는다면 우리가 작성해준 옵션대로 디렉토리를 생성해준다.")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("이미 존재하는 호스트 디렉토리에 컨테이너의 디렉토리를 공유한다면?")]),v._v(" "),t("p",[v._v("호스트 디렉토리에 있던 데이터는 지워지고 컨테이너의 디렉토리 자체가 덮어씌워진다.")])]),v._v(" "),t("p",[t("strong",[v._v("즉, 호스트 볼륨 공유는 호스트의 디렉토리를 컨테이너의 디렉토리에 마운트 하는것이다.")])]),v._v(" "),t("p",[v._v("만약 도커 볼륨이 실제 호스트의 어느 경로에 만들어 졌는지 모르겠다면"),t("br"),v._v(" "),t("code",[v._v("docker volume inspect [컨테이너 이름]")]),v._v(" 명령어를 이용하면 된다.")]),v._v(" "),t("h2",{attrs:{id:"_2-볼륨-컨테이너"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-볼륨-컨테이너"}},[v._v("#")]),v._v(" 2. 볼륨 컨테이너")]),v._v(" "),t("p",[v._v("볼륨 컨테이너는 "),t("strong",[v._v("호스트 볼륨을 적용한 컨테이너의 볼륨 디렉토리를 공유하는 방법")]),v._v("이다.")]),v._v(" "),t("h3",{attrs:{id:"옵션-사용법-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#옵션-사용법-2"}},[v._v("#")]),v._v(" 옵션 사용법")]),v._v(" "),t("p",[t("code",[v._v("--volumes-from [볼륨이 공유된 컨테이너 이름]")]),v._v(" "),t("img",{attrs:{src:"/images/ETC-Docker/volume-container.png",alt:"volume-container"}})]),v._v(" "),t("p",[v._v("볼륨의 역할만 하는 "),t("code",[v._v("볼륨 컨테이너")]),v._v("를 중간에 두고 여러 컨테이너가 데이터를 간접적으로 공유받는 방식이다.")]),v._v(" "),t("br"),v._v(" "),t("h2",{attrs:{id:"_3-도커-볼륨"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-도커-볼륨"}},[v._v("#")]),v._v(" 3. 도커 볼륨")]),v._v(" "),t("p",[v._v("도커 볼륨은 도커 자체에서 제공하는 볼륨 기능이다.")]),v._v(" "),t("h3",{attrs:{id:"명령어-사용법"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#명령어-사용법"}},[v._v("#")]),v._v(" 명령어 사용법")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("기본 명령어")]),v._v(" : "),t("code",[v._v("docker volume")])]),v._v(" "),t("li",[t("strong",[v._v("도커 볼륨 생성")]),v._v(" : "),t("code",[v._v("docker volume create")])])]),v._v(" "),t("p",[v._v("작성중...")]),v._v(" "),t("h3",{attrs:{id:"reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[v._v("#")]),v._v(" Reference")]),v._v(" "),t("p",[t("a",{attrs:{href:"https://eqfwcev123.github.io/2020/01/30/%EB%8F%84%EC%BB%A4/docker-image-layer/",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://eqfwcev123.github.io/2020/01/30/도커/docker-image-layer/"),t("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=e.exports}}]);