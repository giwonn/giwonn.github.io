# 1-2. React Component

- React.createElement : 태그를 만들어주는 함수

## 컴포넌트(Component)

- **state**(상태) : 동작을 했을 때 바뀔수 있는 부분(컴포넌트 내부에서 상태변화하는것)
- props : 부모에서 자식컴포넌트로 데이터가 전달되는것
- React.createElement : html태그를 만들어준다.
- class "클래스명" extends React.Component : 클래스명 이라는 Component를 만들어준다.

아래의 코드는 React Component를 만드는 가장 기본적인 방식이다.

보다시피 Javascript문법을 이용해 html태그를 만들어준다.

```jsx
<html>
    <head>
        <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
    </head>
    <body>
        <div id="root"></div>
        <script>
            const e = React.createElement;

            // LikeButton이라는 Component
						// 메서드 클래스!
            class LikeButton extends React.Component {
                // 기본 설정
                constructor(props) {
										super(props);
                    this.state = {
                        liked: false,
                    };
                }
/*-----------------------------Before---------------------------------*/
                // render : 원하는 요소를 어떻게 화면에 표시할것인지 결정해줌 ex) 설계도
                render() {
                    // html속성을 javascript로 표현할때는 카멜표기법으로 써야함
                    // e=React.createElement(태그, 동작, value)
                    return e('button',
			{ onClick: () => { this.setState({ liked: true })}, type: 'submit' },
						this.state.liked === true ? 'Liked' : 'Like'
						);
                	}
            	}
        </script>
        <script>
            // ReactDOM : 위에서 만든 태그를 화면에다가 실제로 반영을 해줌
            ReactDOM.render(e(LikeButton), document.querySelector("#root"));
        </script>
/*-----------------------------------------------------------------------------*/
    </body>
</html>

/* 결과값
    <div id="root">
        <button>Like</button>
    </div>    
*/
```

위의 코드가 무슨 동작을 하는지 한눈에 들어오는가?

보면 알겠지만 LikeButton Component의 render함수의 return값이 가독성이 매우 떨어진다.

이 가독성을 해결하기 위해 JS에서 html태그 형식으로 코드를 작성할 수 있게 코드를 바꿔줄것이다.

하지만 JS내부에서는 html태그 형식으로 코드를 쓸 수 없다.

이걸 해결하여 아래와 같이 코드를 작성하기 위해 **Babel**이라는 것을 사용한다.

```jsx
<script type="text/babel">
		ReactDOM.render(<LikeButton />, document.querySelector("#root"));
</script>
```

## Babel

최신 문법이나 실험적인 문법들을 Javascript에서 쓸 수 있게 해주는 library.

구형 브라우저에서도 최신 JS문법을 사용할 수 있게 변환 시켜줌

아래의 스크립트문을 추가해주면 사용할 수 있다.

```jsx
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script type="text/babel">
...
</script>
```

우리는 이제 Babel을 통하여 **JSX**를 사용할것이다.

## JSX

**JSX** 는 Javascript + XML이라고 보면 된다.

정확히 말하면 HTML보다는 XML에 가까운 형식이다.

**JSX는 XML에 가까워서 태그를 무조건 닫아줘야한다**
```jsx
<input/> // (O)

<input>  // (X)
```
이제 위의 코드에서, 두번째 스크립트를 JSX를 사용한 코드로 수정해준다.

```jsx
// ...중략
/*-----------------------------After---------------------------------*/
	render() {
           return <button type="submit" onClick={ () => { this.setState({ liked: true}) } }>Like</button>
	}
</script>
<script type="text/babel">
	ReactDOM.render(<LikeButton />, document.querySelector("#root"));
</script>
/*----------------------------------------------------------------------------*/
```

위와 같이 작성하면 Babel이 JSX문법을 처음에 썼던 e(...)와 같은 방식으로 바꿔준다.

**최종 코드**

```jsx
<html>
    <head>
        <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    </head>
    <body>
        <div id="root"></div>
        <script type="text/babel">
            class LikeButton extends React.Component {
                constructor(props) {
                    super(props);
                    this.state = {
                        liked: false,
                    };
                }
                
                render() {
                    return <button type="submit" onClick={() => { this.setState({ liked: true }) }}>
                        {this.state.liked ? 'Liked' : 'Like'}
                    </button>;
                }
            }
        </script>
        <script type="text/babel">
            ReactDOM.render(
								<div>
	                <LikeButton />
	                <LikeButton />
	                <LikeButton />
	                <LikeButton />
                </div>,
								document.querySelector("#root")
						);
        </script>
    </body>
</html>
```

tip) 화살표함수

```jsx
this.setState((prevState) -> {
                                return {
                                    result: '정답: ' + prevState.value,
                                    first: Math.ceil(Math.random() * 9),
                                    second: Math.ceil(Math.random() * 9),
                                    value: '',
                                };
              });
                                    // 무언가를 +1을 여러번 하고 싶다면
																		// 화살표함수를 써야 값이 +1씩 될 가능성이 높음
                                    // this.setState((prevState) => {
                                    //     return {
                                    //         value: prevState.value + 1,
                                    //     }
                                    // });
```

포커스 정할 때 사용하는 ref 속성

```jsx
// 리턴하는 가상돔에 밑줄친 속성 추가
<input
    ref={(c) -> {this.input = c;}}
    type="number"
    value={this.state.value}
    onChange={this.onChange} />

// 클래스에도
input
// 이걸 추가해주면 우리가 포커스할 곳을 정할 수 있다.
```

this.setState메서드가 render를 실행시키기때문에 유의하며 개발해야한다.

render()에 들어오는 태그 속성중

class → className

for → htmlFor

로 바꿔써야한다.
