# BrowserRouter as Router

[exact](https://www.notion.so/React-Router-86269e1a10264d73b023b2179c94b039)

[\<Route>](https://www.notion.so/React-Router-86269e1a10264d73b023b2179c94b039)

[\<Link>](https://www.notion.so/React-Router-86269e1a10264d73b023b2179c94b039)

[\<Switch>](https://www.notion.so/React-Router-86269e1a10264d73b023b2179c94b039)

[\<HashRouter>](https://www.notion.so/React-Router-86269e1a10264d73b023b2179c94b039) as Router

## **exact**

path 앞에 exact를 붙여주면 정확히 일치하는경우가 아니면 넘어감

\<Route exact path="/">\<Home>\</Home>\</Route> 인 경우에는

"/"와 정확히 일치할때만 home을 출력함

## \<Route>

"/"에 exact가 없다면,

주소가 / 인 경우 home, topics, contact가 다 만족하므로 전부 출력됨

/topics가 주소일경우 Home, Topics가 출력됨

/contact가 주소일경우 Home, Contact가 출력됨

```html
<div>
  <h1>React Router DOM example</h1>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/topics">Topics</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
  <Route exact path="/"><Home></Home></Route>
  <Route path="/topics"><Topics></Topics></Route>
  <Route path="/Contact"><Contact></Contact></Route>
</div>
```

## \<Link>

a태그의 버튼클릭 이벤트의 default값(=페이지 이동)을 알아서 막아줌

```html
<div>
	<h1>React Router DOM example</h1>
	<ul>
		<li><Link to="/">Home</a></li>
		<li><Link to="/topics">Topics</a></li>
		<li><Link to="/contact">Contact</a></li>
	</ul>
	<Route exact path="/"><Home></Home></Route>
	<Route path="/topics"><Topics></Topics></Route>
	<Route path="/Contact"><Contact></Contact></Route>
</div>
```

## \<NavLink>

현재 활성화된 라우터의 스타일을 적용하기 위한 컴포넌트

NavLink 태그에 css or class를 적용시켜줄 수 있음

그 css는 내가 직접 작성해줘야함. css class의 default명은 "active"임

activeStyle 속성을 쓰면 바로 css를 적용할 수 있고, activeClassName을 사용하면 css파일의 class를 가져올 수 있다.

\<Route>와 마찬가지로 exact를 쓰냐 안쓰냐에 따라서 전체적용이 되기도 한다.

```html
<div>
	<h1>React Router DOM example</h1>
	<ul>
		<li><NavLink to="/">Home</a></li>
		<li><NavLink to="/topics">Topics</a></li>
		<li><NavLink to="/contact">Contact</a></li>
	</ul>
	<Route exact path="/"><Home></Home></Route>
	<Route path="/topics"><Topics></Topics></Route>
	<Route path="/Contact"><Contact></Contact></Route>
</div>
```

## **\<Switch>**

처음 만족하는 주소값만 출력하고 나머지 버림

"/"에 exact가 없다면,

"/", "/topics", "/Contact"같은 모든 경우의 수는 home만 출력함

```html
<div>
	<h1>React Router DOM example</h1>
	<ul>
		<li><Link to="/">Home</a></li>
		<li><Link to="/topics">Topics</a></li>
		<li><Link to="/contact">Contact</a></li>
	</ul>
	<Switch>
		<Route exact path="/"><Home></Home></Route>
		<Route path="/topics"><Topics></Topics></Route>
		<Route path="/Contact"><Contact></Contact></Route>
	<Switch>
</div>
```

## HashRouter

```html
www.domain.com/#/path
```

#이전의 www.domain.com에 대한 요청만 서버가 받아들이게 됨 (location.hash에 대응)

즉, 백엔드가 필요하지 않는 상황(정적인 페이지)에서 주로 사용된다.

새로고침을 해도 서버로 요청이 가지 않는다.

참고 : [https://lts0606.tistory.com/482](https://lts0606.tistory.com/482)

### Nested Routing

중첩 라우팅으로써 Route 안에 Route를 넣을 수 있다.

```jsx
<div>
	<h1>React Router DOM example</h1>
	<ul>
		<li><Link to="/">Home</a></li>
		<li><Link to="/topics">Topics</a></li>
		<li><Link to="/contact">Contact</a></li>
	</ul>
	<Switch>
		<Route exact path="/"><Home></Home></Route>
		<Route path="/topics"><Topics></Topics></Route>
		<Route path="/Contact"><Contact></Contact></Route>
	<Switch>
</div>

function Topics() {
	return (
		<div>
				<h2>Topics</h2>
				<ul>
						<li><NavLInk to="/topics/1">HTML</NavLink></li>
						<li><NavLInk to="/topics/2">JS</NavLink></li>
						<li><NavLInk to="/topics/3">React</NavLink></li>
				</ul>
				<Switch>
						<Route path="/topics/1">
								HTML is ...
						</Route>
						<Route path="/topics/2">
								JS is ...
						</Route>
						<Route path="/topics/3">
								React is ...
						</Route>
				</Switch>
		</div>

}
```

## parameter

중첩라우팅이 많을 경우 반복문을 이용한다

```jsx

<div>
	<h1>React Router DOM example</h1>
	<ul>
		<li><Link to="/">Home</a></li>
		<li><Link to="/topics">Topics</a></li>
		<li><Link to="/contact">Contact</a></li>
	</ul>
	<Switch>
		<Route exact path="/"><Home></Home></Route>
		<Route path="/topics"><Topics></Topics></Route>
		<Route path="/Contact"><Contact></Contact></Route>
	<Switch>
</div>

let contents = [
		{id:1, title:'HTML', description:'HTML is ...'},
		{id:2, title:'JS', description:'JS is ...'},
		{id:3, title:'React', description:'React is ...'},
];

function Topic() {
		let params = useParams();
		let topic_id = params.topic_id;
		let selected_topic = {
				title: "Sorry",
				description:"Not Found"
		}
		for (let i=0; i<contents.length; i++) {
				if (contents[i].id === Number(topic_id)) {

						break;
				}
		}
		return (
				<div>
						<h3>{selected_topic.title}</h3>
						{selected_topic.description}
				</div>
		);
}

function Topics() {
	let lis = [];
	for (let i=0; i<contents.length; i++) {
			lis.push(
				<li key={contents[i].id}><NavLink to={`/topics/${contents[i].id}`}>{contents[i].title)</li></NavLink>
			);
	}
	return (
		<div>
				<h2>Topics</h2>
				<ul>
						/*
						<li><NavLInk to="/topics/1">HTML</NavLink></li>
						<li><NavLInk to="/topics/2">JS</NavLink></li>
						<li><NavLInk to="/topics/3">React</NavLink></li>
						*/
						{lis}
				</ul>
				<Route path="/topics/:topic_id">
						<Topic></Topic>
				</Route>
				<Switch>
						<Route path="/topics/1">
								HTML is ...
						</Route>
						<Route path="/topics/2">
								JS is ...
						</Route>
						<Route path="/topics/3">
								React is ...
						</Route>
				</Switch>
		</div>

}
```

code splitting
