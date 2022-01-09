(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{478:function(v,_,t){"use strict";t.r(_);var a=t(31),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"_3장-역할-책임-협력"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3장-역할-책임-협력"}},[v._v("#")]),v._v(" 3장. 역할, 책임, 협력")]),v._v(" "),t("p",[v._v("객체지향 패러다임의 관점에서 핵심은 협력, 책임, 역할이다.")]),v._v(" "),t("p",[v._v("역할, 책입, 협력이 제자리를 찾지 못한 상태라면 응집도 높은 클래스와 중복 없는 상속 계층을 구현한다고 하더라도 우리가 만든 애플리케이션이 침몰하는 것을 구원하지 못할 것이다. 그 이유를 살펴보자.")]),v._v(" "),t("h1",{attrs:{id:"_1-협력"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-협력"}},[v._v("#")]),v._v(" 1. 협력")]),v._v(" "),t("h2",{attrs:{id:"영화-예매-시스템-돌아보기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#영화-예매-시스템-돌아보기"}},[v._v("#")]),v._v(" 영화 예매 시스템 돌아보기")]),v._v(" "),t("p",[t("img",{attrs:{src:"/images/Book/%EC%98%A4%EB%B8%8C%EC%A0%9D%ED%8A%B8/3%EC%9E%A5/object-3-1.png",alt:"object-3-1"}})]),v._v(" "),t("p",[v._v("객체지향 원칙을 따르는 애플리케이션의 제어 흐름은 어떤 하나의 객체에 의해 통제되지 않고 다양한 객체들 사이에 균형 있게 분배되는 것이 일반적이다.")]),v._v(" "),t("p",[v._v("여기서 중요한 것은 다양한 객체들이 영화 예매라는 기능을 구현하기 위해 메시지를 주고받으면서 상호작용한다는 점이다.")]),v._v(" "),t("p",[v._v("이처럼 객체들이 애플리케이션의 기능을 구현하기 위해 수행하는 상호작용을 "),t("strong",[v._v("협력")]),v._v("이라고한다.")]),v._v(" "),t("p",[v._v("객체가 협력에 참여하기 위해 수행하는 로직은 "),t("strong",[v._v("책임")]),v._v("이라고 한다.")]),v._v(" "),t("p",[v._v("객체들이 협력에서 수행하는 책임들이 모여 객체가 수행하는 "),t("strong",[v._v("역할")]),v._v("을 구성한다.")]),v._v(" "),t("h2",{attrs:{id:"협력"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#협력"}},[v._v("#")]),v._v(" 협력")]),v._v(" "),t("p",[v._v("협력은 객체지향의 세계에서 기능을 구현할 수 있는 유일한 방법이다. 두 객체 사이의 협력은 하나의 객체가 다른 객체에게 도움을 요청 할 때 시작된다.")]),v._v(" "),t("p",[v._v("**메시지 전송(message sending)**은 객체 사이의 협력을 위해 사용할 수 있는 유일한 커뮤니케이션 수단이다. 객체는 캡슐화로 인해서 다른 객체의 내부 구현에 접근할 수 없기 때문에 오직 메시지 전송을 통해서만 요청을 전달할 수 있다.")]),v._v(" "),t("p",[v._v("즉 메시지 전송을 통해 다른 객체에게 위임하여 스스로 처리하게 하여 객체들을 자율적으로 만들어준다. 결과적으로 객체를 자율적으로 만드는 가장 기본적인 방법은 내부 구현을 "),t("strong",[v._v("캡슐화")]),v._v("하는 것이다.")]),v._v(" "),t("p",[v._v("정리하자면, 자율적인 객체는 자신에게 할당된 책임을 수행하던 중에 필요한 정보를 알지 못하거나 외부의 도움이 필요한 경우 적절한 객체에게 메시지를 전송해서 "),t("strong",[v._v("협력")]),v._v("을 요청한다.")]),v._v(" "),t("p",[v._v("수신받은 객체 역시 직접 처리할 수 없다면 다른 객체에게 도움을 요청한다.")]),v._v(" "),t("p",[v._v("이처럼 객체들 사이의 협력을 구성하는 일련의 요청과 응답의 흐름을 통해 애플리케이션의 기능이 구현된다.")]),v._v(" "),t("h2",{attrs:{id:"협력이-설계를-위한-문맥을-결정한다"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#협력이-설계를-위한-문맥을-결정한다"}},[v._v("#")]),v._v(" 협력이 설계를 위한 문맥을 결정한다.")]),v._v(" "),t("p",[v._v("애플리케이션 안에 어떤 객체가 필요하다면 그 이유는 단 하나여야한다. 그 객체가 어떤 협력에 참여하고 이기 때문이다. 그리고 그 객체가 협력에 참여할 수 있는 이유는 협력에 필요한 적절한 행동을 보유하고 있기 때문이다.")]),v._v(" "),t("p",[v._v("결론적으로 객체의 행동을 결정하는 것은 객체가 참여하고 있는 협력이다. 협력이 바뀌면 객체가 제공해야 하는 행동 역시 바뀌어야 한다. 협력은 객체가 필요한 이유와 객체가 수행하는 행동의 동기를 제공한다. 협력은 객체를 설계하는데 필요한 일종의 **문맥(context)**를 제공한다.")]),v._v(" "),t("h1",{attrs:{id:"_2-책임"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-책임"}},[v._v("#")]),v._v(" 2. 책임")]),v._v(" "),t("h2",{attrs:{id:"책임이란-무엇인가"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#책임이란-무엇인가"}},[v._v("#")]),v._v(" 책임이란 무엇인가")]),v._v(" "),t("p",[v._v("협력에 참여하기 위해 객체가 수행하는 행동을 "),t("strong",[v._v("책임")]),v._v("이라고 한다.")]),v._v(" "),t("p",[v._v("책임이란 객체에 의해 정의되는 응집도 있는 행위의 집합으로, 객체가 유지해야 하는 정보와 수행할 수 있는 행동에 대해 개략적으로 서술한 문장이다. 즉, 객체의 책임은 객체가 '무엇을 알고 있는가'와 '무엇을 할 수 있는가'로 구성된다.")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("하는 것")]),v._v(" "),t("ol",[t("li",[v._v("객체를 생성하거나 계산을 수행하는 등의 스스로 하는 것")]),v._v(" "),t("li",[v._v("다른 객체의 행동을 시작시키는 것")]),v._v(" "),t("li",[v._v("다른 객체의 활동을 제어하고 조절하는 것")])])]),v._v(" "),t("li",[t("strong",[v._v("아는 것")]),v._v(" "),t("ol",[t("li",[v._v("사적인 정보에 관해 아는 것")]),v._v(" "),t("li",[v._v("관련된 객체에 관해 아는 것")]),v._v(" "),t("li",[v._v("자신이 유도하거나 계산할 수 있는 것에 관해 아는 것")])])])]),v._v(" "),t("p",[v._v("영화 예매 시스템으로 따지면 아래와 같이 나눌 수 있다.")]),v._v(" "),t("ul",[t("li",[v._v("Screening\n"),t("ul",[t("li",[v._v("하는 것 : 영화를 예매하는 것")]),v._v(" "),t("li",[v._v("아는 것 : 상영할 영화")])])]),v._v(" "),t("li",[v._v("Movie\n"),t("ul",[t("li",[v._v("하는 것 : 요금을 계산하는 것")]),v._v(" "),t("li",[v._v("아는 것 : 가격, 적용된 할인 정책")])])])]),v._v(" "),t("p",[t("img",{attrs:{src:"/images/Book/%EC%98%A4%EB%B8%8C%EC%A0%9D%ED%8A%B8/3%EC%9E%A5/object-3-2.png",alt:"object-3-2"}})]),v._v(" "),t("p",[v._v("Screening이 reserve 메시지를 수신하고 moive를 인스턴스 변수로 포함하는 이유는 협력 안에서 영화를 예매할 책임을 수행해야 하기 때문이다.")]),v._v(" "),t("p",[v._v("여기서 중요한 사실은 책임의 관점에서 '아는 것'과 '하는 것'이 밀접하게 연관돼 있다는 점이다.")]),v._v(" "),t("p",[v._v("객체는 자신이 맡은 책임을 수행하는 데 필요한 정보를 알고 있을 책임이 있다. 또한 객체는 자신이 할 수 없는 작업을 도와줄 객체를 알고 있을 책임이 있다. 어떤 책임을 수행하기 위해서는 그 책임을 수행하는 데 필요한 정보도 함께 알아야 할 책임이 있는 것이다.")]),v._v(" "),t("p",[v._v("다시 한 번 강조하자면 객체지향 설계에서 가장 중요한 것은 책임이다. 객체에게 얼마나 적절한 책임을 할당하느냐가 설계의 전체적인 품질을 결정한다.")]),v._v(" "),t("h2",{attrs:{id:"책임-할당"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#책임-할당"}},[v._v("#")]),v._v(" 책임 할당")]),v._v(" "),t("p",[v._v("자율적인 객체를 만드는 가장 기본적인 방법은 책임을 수행하는 데 필요한 정보를 가장 잘 알고 있는 전문가에게 그 책임을 할당하는 것이다.")]),v._v(" "),t("p",[v._v("이를 책임 할당을 위한 "),t("strong",[v._v("INFORMATION EXPERT(정보 전문가)")]),v._v(" 패턴이라고 부른다.")]),v._v(" "),t("p",[v._v("정보 전문가에게 책임을 할당하는 것은 일상 생활에서 도움을 요청하는 방식과도 유사하다.")]),v._v(" "),t("p",[v._v("객체들 역시 협력에 필요한 지식과 방법을 가장 잘 알고 있는 객체에게 도움을 요청한다. 요청에 응답하기 위해 필요한 이 행동이 객체가 수행할 책임으로 이어지는 것이다.")]),v._v(" "),t("p",[t("img",{attrs:{src:"/images/Book/%EC%98%A4%EB%B8%8C%EC%A0%9D%ED%8A%B8/3%EC%9E%A5/object-3-3.png",alt:"object-3-3"}})]),v._v(" "),t("p",[v._v("'예매하라'라는 메시지로 협력을 시작한다면, 영화를 예매하는 책임은 Screening에게 할당된다. 하지만 Screening은 예매 가격을 계산하는데 필요한 정보를 충분히 알고 있지 않다. 그래서 다른 객체에게 가격 계산을 요청한다.")]),v._v(" "),t("p",[t("img",{attrs:{src:"/images/Book/%EC%98%A4%EB%B8%8C%EC%A0%9D%ED%8A%B8/3%EC%9E%A5/object-3-4.png",alt:"object-3-4"}})]),v._v(" "),t("p",[v._v("Movie는 가격을 계산할 수 있지만 할인 요금을 계산할 줄은 모른다. 그렇기에 할인 요금을 계산하는 책임을 외부에 전달한다. 이렇게 반복적인 과정을 통해 객체끼리 협력을 하게 된다.")]),v._v(" "),t("p",[v._v("또한 잘 보면 이렇게 결정된 메시지가 객체의 퍼블릭 인터페이스를 구성한다.")]),v._v(" "),t("p",[v._v("협력을 설계하면서 객체들의 인터페이스와 오퍼레이션을 만들게 되는것이다.")]),v._v(" "),t("h2",{attrs:{id:"책임-주도-설계"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#책임-주도-설계"}},[v._v("#")]),v._v(" 책임 주도 설계")]),v._v(" "),t("p",[v._v("어떤 책임을 선택하느냐가 전체적인 설계의 방향과 흐름을 결저한다. 이처럼 책임을 찾고 책임을 수행할 적절한 객체를 찾아 책임을 할당하는 방식으로 협력을 설계하는 방법을 **책임 주도 설계(Responsibility-Driven Design, RDD)**라고 부른다.")]),v._v(" "),t("p",[v._v("다음은 책임 주도 설계 방법의 과정을 정리한 것이다.")]),v._v(" "),t("ul",[t("li",[v._v("시스템이 사용자에게 제공해야 하는 기능인 시스템 책임을 파악한다.")]),v._v(" "),t("li",[v._v("시스템 책임을 더 작은 책임으로 분할한다.")]),v._v(" "),t("li",[v._v("분할된 책임을 수행할 수 있는 적절한 객체 또는 역할을 찾아 책임을 할당한다.")]),v._v(" "),t("li",[v._v("객체가 책임을 수행하는 도중 다른 객체의 동무이 필요한 경우 이를 책임질 적절한 객체 또는 역할을 찾는다.")]),v._v(" "),t("li",[v._v("해당 객체 또는 역할에게 책임을 할당함으로써 두 객체가 협력하게 한다.")])]),v._v(" "),t("p",[v._v("협력은 객체를 설계하기 위한 구체먹인 문맥을 제공한다. 구현이 아닌 책임에 집중하는 것이 중요한 이유는 유연하고 견고한 객체지향 시스템을 위해 가장 중요한 재료가 바로 책임이기 때문이다.")]),v._v(" "),t("h2",{attrs:{id:"메시지가-객체를-결정한다"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#메시지가-객체를-결정한다"}},[v._v("#")]),v._v(" 메시지가 객체를 결정한다")]),v._v(" "),t("p",[v._v("메시지가 객체를 선택하게 해야 하는 두 가지 중요한 이유가 있다.")]),v._v(" "),t("ol",[t("li",[v._v("객체가 **최소한의 인터페이스(minimal interface)**를 가질 수 있게 된다.")]),v._v(" "),t("li",[v._v("객체는 충분히 **추상적인 인터페이스(abstract interface)**를 가질 수 있게 된다.")])]),v._v(" "),t("p",[v._v("협력을 구성하는 객체들의 인터페이스는 충분히 추상적인 동시에 최소한의 크기를 유지할 수 있다. 객체가 충분히 추상적이면서 미니멀리즘을 따르는 인터페이스를 가지게 하고 싶다면 메시지가 객체를 선택하게 하라.")]),v._v(" "),t("h2",{attrs:{id:"행동이-상태를-결정한다"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#행동이-상태를-결정한다"}},[v._v("#")]),v._v(" 행동이 상태를 결정한다.")]),v._v(" "),t("p",[v._v("객체는 협력에 필요한 행동을 제공해야 한다. "),t("strong",[v._v("객체를 객체답게 만드는 것은")]),v._v(" 객체의 상태가 아니라 "),t("strong",[v._v("다른 객체에게 제공하는 행동")]),v._v("이다.")]),v._v(" "),t("p",[v._v("객체지향 패러다임에 갓 입문한 사람들이 가장 쉽게 빠지는 실수는 객체의 행동이 아니라 상태에 초점을 맞추는 것이다. 초보자들은 먼저 객체에 필요한 상태가 무엇인지를 결정하고 그 후에 상태에 필요한 행동을 결정한다. 이런 방식은 객체의 내부 구현이 객체의 퍼블릭 인터페이스에 노출되도록 만들기 때문에 캡슐화를 저해한다. 이렇게 객체의 내부 구현에 초점을 맞춘 설계 방법을 데이터-주도 설계(Data-Driven Design)라고 부르기도 했다.")]),v._v(" "),t("p",[v._v("협력 관계 속에서 다른 객체에게 무엇을 제공해야 하고 다른 객체로부터 무엇을 얻어야 하는지를 고민해야만 훌륭한 책임을 수확할 수 있다.")]),v._v(" "),t("p",[v._v("개별 객체의 상태와 행동이 아닌 시스템의 기능을 구현하기 위한 협력에 초점을 맞춰야만 응집도가 높고 결합도가 낮은 객체들을 창조할 수 있다. 상태는 단지 객체가 행동을 정상적으로 수행하기 위해 필요한 재료일 뿐이다.")]),v._v(" "),t("p",[v._v("다시 한번 강조하자면, 객체가 가질 수 있는 상태는 행동을 결정하고 나서야 비로소 결정할 수 있다.")]),v._v(" "),t("h1",{attrs:{id:"_3-역할"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-역할"}},[v._v("#")]),v._v(" 3. 역할")]),v._v(" "),t("h2",{attrs:{id:"역할과-협력"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#역할과-협력"}},[v._v("#")]),v._v(" 역할과 협력")]),v._v(" "),t("p",[v._v("객체는 협력이라는 주어진 문맥 안에서 특정한 목적을 갖게 된다. 객체의 목적은 협력 안에서 객체가 맡게 되는 책임의 집합으로 표시된다. 이처럼 객체가 어떤 특정한 협력 안에서 수행하는 책임의 집합을 "),t("strong",[v._v("역할")]),v._v("이라고 부른다. 실제로 협력을 모델링할 때는 특정한 객체가 아니라 역할에게 책임을 할당한다고 생각하는 게 좋다.")]),v._v(" "),t("p",[v._v("예를 들어, '예매하라'라는 메시지를 처리하기 위해 Screening을 선택했다.")]),v._v(" "),t("p",[v._v("하나의 단계처럼 보이는 이 책임 할당 과정은 실제로는 두 개의 독립적인 단꼐가 합쳐진 것이다.")]),v._v(" "),t("ol",[t("li",[v._v("영화를 예매할 수 있는 적절한 역할이 무엇인가를 찾는 것")]),v._v(" "),t("li",[v._v("역할을 수행할 객체로 Screening 인스턴스를 찾는 것")])]),v._v(" "),t("p",[v._v("역할에 특별한 이름을 부여하지는 않았지만 실제로는 익명의 역할을 찾고 그 역할을 수행할 수 있는 객체를 선택하는 방식으로 설계가 진행됐다고 생각하는 것이 자연스럽다.")]),v._v(" "),t("p",[t("img",{attrs:{src:"/images/Book/%EC%98%A4%EB%B8%8C%EC%A0%9D%ED%8A%B8/3%EC%9E%A5/object-3-5.png",alt:"object-3-5"}})]),v._v(" "),t("p",[v._v("Movie 역시 마찬가지다. 역할에 관해 먼저 고민하고 역할을 수행할 객체로 Movie를 선택한 것이다.")]),v._v(" "),t("p",[t("img",{attrs:{src:"/images/Book/%EC%98%A4%EB%B8%8C%EC%A0%9D%ED%8A%B8/3%EC%9E%A5/object-3-6.png",alt:"object-3-6"}})]),v._v(" "),t("h2",{attrs:{id:"유연하고-재사용-가능한-협력"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#유연하고-재사용-가능한-협력"}},[v._v("#")]),v._v(" 유연하고 재사용 가능한 협력")]),v._v(" "),t("p",[v._v("역할이 중요한 이유는 역할을 통해 유연하고 재사용 가능한 협력을 얻을 수 있기 때문이다.")]),v._v(" "),t("p",[v._v("할인에는 비용할인, 비율할인 두가지가 있는데 이 두가지를 역할로 나눈다면 두개의 개별적인 협력이 필요하다.")]),v._v(" "),t("p",[v._v("하지만 두 협력을 하나로 통합할 수 있다. 통합한 협력 안에서 두 종류의 객체를 교대로 바꿔 끼울 수 있는 일종의 슬롯이라고도 할 수 있는데 이것이 바로 "),t("strong",[v._v("역할")]),v._v("이다.")]),v._v(" "),t("p",[t("img",{attrs:{src:"/images/Book/%EC%98%A4%EB%B8%8C%EC%A0%9D%ED%8A%B8/3%EC%9E%A5/object-3-7.png",alt:"object-3-7"}})]),v._v(" "),t("p",[v._v("여기서의 역할이 두 종류의 구체적인 객체를 포괄하는 추상화라는 점에 주목하라. 따라서 역할의 이름으로 DiscountPolicy를 설정하는것은 어떨까?")]),v._v(" "),t("p",[t("img",{attrs:{src:"/images/Book/%EC%98%A4%EB%B8%8C%EC%A0%9D%ED%8A%B8/3%EC%9E%A5/object-3-8.png",alt:"object-3-8"}})]),v._v(" "),t("p",[v._v("따라서 역할을 이용하면 불필요한 중복코드를 제거할 수 있다. DiscountPolicy 역할을 수행할 수 있는 어떤 객체라도 이 협력에 참여할 수 있게 됐다. 따라서 책임과 역할을 중심으로 협력을 바라보는 것이 바로 변경과 확장이 용이한 유연한 설계로 나아가는 첫걸음이다.")]),v._v(" "),t("aside",[v._v("\n💡 역할을 구현하는 가장 일반적인 방법은 **추상 클래스**와 **인터페이스**를 사용하는 것이다.\n")]),v._v(" "),t("p",[v._v("역할을 활용한 또 다른 예로 가격을 할인하지 않는 할인 정책인 NoneDiscountPolicy를 들 수 있다. NoneDiscountPolicy 역시 DiscountPolicy 역할을 수행하는 객체의 한 종류다.")]),v._v(" "),t("p",[t("img",{attrs:{src:"/images/Book/%EC%98%A4%EB%B8%8C%EC%A0%9D%ED%8A%B8/3%EC%9E%A5/object-3-9.png",alt:"object-3-9"}})]),v._v(" "),t("h2",{attrs:{id:"객체-대-역할"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#객체-대-역할"}},[v._v("#")]),v._v(" 객체 대 역할")]),v._v(" "),t("p",[v._v("협력에 적합한 책임을 수행하는 대상이 한 종류라면 간단하게 객체로 간주한다. 만약 여러 종류의 객체들이 참여할 수 있다면 역할이라고 부르면 된다.")]),v._v(" "),t("p",[v._v("대부분의 경우에 어떤 것이 역할이고 어떤 것이 객체인지가 또렷하게 드러나지는 않을 것이다.")]),v._v(" "),t("p",[v._v("이에 대한 개인적인 견해는 설계 초반에는 적절한 책임과 협력의 큰 그림을 탐색하는 것이 가장 중요한 목표여야 하고 역할과 객체를 명확하게 구분하는 것은 그렇게 중요하지는 않다는 것이다. 따라서 애매하다면 단순하게 객체로 시작하고 반복적으로 책임과 협력을 정제해가면서 필요한 순간에 객체로부터 역할을 분리해내는 것이 가장 좋은 방법이다.")]),v._v(" "),t("p",[v._v("역할은 객체와 클래스에 비해 상대적으로 덜 알려져 있으며 그다지 주목받지 못한 개념인 것이 사실이다. 그럼에도 유연하고 확장 가능하며 일관된 구조를 가지는 시스템을 구축하는 데 역할은 매우 중요하다.")]),v._v(" "),t("p",[v._v("중요한 것은 협력을 구체적인 객체가 아니라 추상적인 역할의 관점에서 설계하면 협력이 유연하고 재사용 가능해진다는 것이다. 따라서 역할의 가장 큰 장점은 설계의 구성 요소를 추상화할 수 있다는 것이다.")]),v._v(" "),t("h2",{attrs:{id:"역할과-추상화"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#역할과-추상화"}},[v._v("#")]),v._v(" 역할과 추상화")]),v._v(" "),t("p",[v._v("추상화의 첫번 째 장점은 세부 사항에 억눌리지 않고도 상위 수준의 정책을 쉽고 간단하게 표현할 수 있다는 것이다.")]),v._v(" "),t("p",[t("img",{attrs:{src:"/images/Book/%EC%98%A4%EB%B8%8C%EC%A0%9D%ED%8A%B8/3%EC%9E%A5/object-3-10.png",alt:"object-3-10"}})]),v._v(" "),t("p",[v._v("협력이라는 관점에서는 세부적인 사항을 무시하고 추상화에 집중하는 것이 유용하다.")]),v._v(" "),t("p",[v._v("따라서 아래와 같이 세부 사항을무시하고 DiscountPolicy와 DiscountCondition만 바라보면 상황을 추상화할 수 있다.")]),v._v(" "),t("p",[t("img",{attrs:{src:"/images/Book/%EC%98%A4%EB%B8%8C%EC%A0%9D%ED%8A%B8/3%EC%9E%A5/object-3-11.png",alt:"object-3-11"}})]),v._v(" "),t("p",[v._v("객체에게 중요한 것은 행동이라는 사실을 기억하라. 역할이 중요한 이유는 동일한 협력을 수행하는 객체들을 추상화할 수 있기 때문이다. 역할을 사용하면 복잡하게 말할 필요가 없다. 간단히 '할인 정책과 여러개의 할인 조건을 적용한다'로 줄여서 표현하면 된다.")]),v._v(" "),t("p",[t("img",{attrs:{src:"/images/Book/%EC%98%A4%EB%B8%8C%EC%A0%9D%ED%8A%B8/3%EC%9E%A5/object-3-12.png",alt:"object-3-12"}})]),v._v(" "),t("p",[v._v("추상화의 두 번째 장점은 설계를 유연하게 만들 수 있다는 것이다. 협력 안에서 동일한 책임을 수행하는 객체들은 동일한 역할을 수행하기 때문에 서로 대체 가능하다. 따라서 역할은 다양한 환경에서 다양한 객체들을 수용할 수 있게 해주므로 협력을 유연하게 만든다.")]),v._v(" "),t("p",[v._v("이처럼 협력 안에서 역할이라는 추상화를 이용하면 기존 코드를 수정하지 않고도 새로운 행동을 추가할 수 있다. 결과적으로 앞으로 추가될 미지의 할인 정책과 할인 조건을 수용할 수 있는 유연한 설계를 얻을 수 있다. 프레임워크나 디자인 패턴과 같이 재사용 가능한 코드나 설계 아이디어를 구성하는 핵심적인 요소가 바로 역할이다.")]),v._v(" "),t("h2",{attrs:{id:"배우와-배역"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#배우와-배역"}},[v._v("#")]),v._v(" 배우와 배역")]),v._v(" "),t("p",[v._v("연극의 배역과 배우 간의 관계에 다음과 같은 특성이 존재한다는 것을 알 수 있다.")]),v._v(" "),t("ul",[t("li",[v._v("배역은 연극 배우가 특정 연극에서 연기하는 역할이다.")]),v._v(" "),t("li",[v._v("배역은 연극이 상영되는 동안에만 존재하는 일시적인 개념이다.")]),v._v(" "),t("li",[v._v("연극이 끝나면 연극 배우는 배역이라는 역할을 벗어 버리고 원래의 연극 배우로 돌아온다.")])]),v._v(" "),t("p",[v._v("배역과 배우 사이의 또 다른 특성은 동일한 배역을 여러 명의 배우들이 연기할 수 있다는 것이다.")]),v._v(" "),t("p",[v._v("위의 사실로부터 연극의 배역과 배우 간에는 다음과 같은 추가적인 특성이 존재한다는 사실을 알 수 있다.")]),v._v(" "),t("ul",[t("li",[v._v("서로 다른 배우들이 동일한 배역을 연기할 수 있다.")]),v._v(" "),t("li",[v._v("하나의 배우가 다양한 연극 안에서 서로 다른 배역을 연기할 수 있다.")])]),v._v(" "),t("p",[v._v("연극 안에서 배역을 연기하는 배우라는 은유는 협력 안에서 역할을 수행하는 객체라는 관점이 가진 입체적인 측면들을 훌륭하게 담아낸다. 협력은 연극과 동일하고 코드는 극본과 동일하다.")]),v._v(" "),t("p",[v._v("객체는 협력이라는 실행 문맥 안에서 특정한 역할을 수행한다. 객체는 협력이 끝나고 협력에서의 역할을 잊고 원래의 객체로 돌아올 수 있다.")]),v._v(" "),t("p",[v._v("협력이라는 문맥 안에서 역할은 특정한 협력에 참여해서 책임을 수행하는 객체의 일부다. 일반적으로 역할은 객체가 협력에 참여하는 잠시 동안에만 존재하는 일시적인 개념이다.")]),v._v(" "),t("p",[v._v("따라서 동일한 객체라고 하더라도 객체가 참여하는 협력에 따라 객체의 얼굴은 계속해서 바뀌게 된다. 객체는 다수의 역할을 보유할 수 있지만 객체가 참여하는 특정 협력은 객체의 한 가지 역할만 바라볼 수 있다.")]),v._v(" "),t("p",[v._v("객체는 다양한 역할을 가질 수 있다. 객체는 협력에 참여할 때 협력 안에서 하나의 역할로 보여진다. 객체가 다른 협력에 참여할 때는 다른 역할로 보여진다. 협력의 관점에서 특정한 객체의 종류를 캡슐화하기 때문에 동일한 역할을 수행하는 객체들은 서로 대체 가능하다. 역할은 특정한 객체의 종류를 캡슐화하기 때문에 동일한 역할을 수행하고 계약을 준수하는 대체 가능한 객체들은 다형적이다.")])])}),[],!1,null,null,null);_.default=s.exports}}]);