# WebAssembly 란?

WebAssembly란 브라우저에서 실행가능한 새로운 파일 형식이다. (.wasm 확장자)

Java, C++, Go 등 다른 언어로 작성한 파일을 wasm 확장자로 변환하여 웹에서 실행시킬 수 있게 해준다.

## Javascript와의 차이점

- Javascript : JS파일 -> parsing -> Bytecode 변환 -> 인터프리터를 통해 실행 (크롬에서는 Ignition이라고 부름)
  (반복되는 코드는 기계어에 가까운 Optimizied Code로 바꿔줘서 실행해줌 (최적화 컴파일러인 Turbofan이라는걸 사용함)

- Webassembly : wasm파일 -> 실행
  (마찬가지로 반복되는 코드는 Optimizing 가능함)

## 특징

1. 일반적으로 Javascript보다 빠르다.
2. C/C++ 등의 언어에는 GC대신 메모리를 수동으로 관리할 수 있다. (이건 개인적으로 큰 장점같음... 일관적인 성능을 기대할 수 있을 듯)
3. Sandboxing 되어있어, 외부와 소통하기 위해선 명시적함수 또는 syscall을 이용해야 한다.

## 활용 예

- 게임과 같은 CPU를 많이 사용하는 계산
- Javascript에서 느린 부분만 Webassembly로 구현
  (DOM 조작이나 플랫폼 API를 많이 사용하는 경우에는 JS가 더 적절함)
-
