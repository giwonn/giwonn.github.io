# Fragment

## Fragment 란?

- 앱의 전체 UI에서 어딘가에 반복적으로 **재사용 가능한 부분**을 말한다. (객체랑 비슷하다고 보면 될듯?)
- Fragment는 **자체 레이아웃(xml)**을 가질 수 있으며 **자체 생명 주기**를 보유한다. (Activity LifeCycle 부터 제대로 익히고 나서 공부하자..)
- Fragment는 **독립적으로 존재할 수 없고**, 반드시 Activity나 다른 Fragment에 호스팅되어야한다.
- Android Jetpack Library 중 Navigation, BottomNavigationView, ViewPager2 등은 Fragment와 호환되도록 설계되어 있어서 함께 자주 사용된다.

## Activity와의 다른 목적성

- Activity : 앱의 전체적인 UI에 포함될 요소들을 배치하는 곳
- Fragment : 단일 화면이나 화면 일부에 관한 UI를 정의하기에 적합함
- 하늘색 부분은 Activity에 배치된 UI이고, 연두색은 Fragment 자체 UI이다. Activity는 연두색 Fragment를 호스팅하고 있다고 보면 된다.
  ![android-fragment](/images/TIL/APP-Android/android-fragment.png)

## 장점

- 앱의 단일 화면이나 부분화면을 Fragment로 구현하면 런타임 시 UI를 사용자와 상호작용하면서 실시간으로 수정 가능함
  (네비게이션 바에서 메뉴를 누르면 해당 메뉴로 화면이 바뀌는 것을 뜻함)
- 대신 UI를 실시간으로 바꿀 떄는 호스트 Activity의 수명 주기가 STARTED 상태일 때만 가능하다.
- Fragment의 변경사항은 FragmentManager의 **Fragment BackStack**에 히스토리를 저장하여 기록할 수 있다.
- 이 백스택에 저장된 사항들에 한하여 사용자가 "뒤로"버튼을 누를 경우 이전 화면으로 되돌리기 작업을 진행할 수 있다.

## 주의점

- Fragment는 재사용 가능한 자체 UI를 가지기 때문에 어느 Activity나 Fragment에도 호스팅 될 수 있다.
- 따라서 Fragment 클래스에는 자체 UI를 관리하는 로직만 구현해야한다. (모듈성, 재사용성을 해치게 됨)
- 즉, Fragment가 **다른 Activy나 Fragment에 의존하면 안된다.** (이거 매우 중요한듯!!!!!)

## FragmentManager

- FragmentManager는 BackStack에 Fragment 추가/교체/삭제 작업에 의한 변경사항을 push 및 pop 하는 작업을 담당하는 클래스다

## 자세한건 직접 사용해보면서 공부해보자

사실 더 적을게 많지만 이론을 적어가면서 공부해봤자 이 이상은 머리에 들어오질 않았다.
직접 사용해보면서 익혀야 할 듯 하다
