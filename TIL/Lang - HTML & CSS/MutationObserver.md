# MutationObserver
DOM의 기능중 하나이며, DOM 요소에 발생하는 변경사항을 감지하는 객체이다.  

## 예제
### html
```html
<body>
    <div id="main"></div>
    <button id="attributes">attributes</button>
    <button id="childList">childList</button>
</body>
```
### javascript
```js
var target = document.getElementById('main');

var observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        console.log(mutation);
    })
})

var config = {
    attributes : true, // 태그의 속성(id, class 등)이 변경되는 것을 감지함
    attributeOldValue: true || null, // true면 변경전 속성값도 보여줌
    characterData: true, // 태그의 텍스트 대이터가 변경되는지 감시함
    characterDataOldValue: true | null, // childList 속성과 겹쳐서 childList를 false로 해야 기록됨
    childList: true, // 해당 태그의 자식 태그들이 변경되는지 추적함
    subtree: true || null, // true면 자식 태그에 변경이 일어나도 변경점을 기록해줌
}; // 감시할 내용 설정

observer.observe(target, config); // 감시 대상 설정

document.getElementById('attributes').addEventListener('click', () => {
    target.setAttribute('class', 'main-new');
});

document.getElementById('childList').addEventListener('click', () => {
    target.textContent = 'giwon';
})
```

## 콘솔에 찍히는 결과
```js
MutationRecords = {
  addedNodes: [], // 추가된 자식 노드,
  attributeName: null, // 변경된 속성명
  attributeNamespace: null, // 변경된 속성네임스페이스
  nextSibling: null, // 다음 형제 태그
  previousSibling: null, // 이전 형제 태그
  oldValue: null, // 변경전 값 
  removedNodes: [], // 제거된 자식 노드 
  target: Element, // 대상 태그 
  type: 'attributes' || 'childList' || 'characterData' // 어떤 종류가 변경되었는지
}
```

## 감시 중지
해당 메서드를 사용하면 감시가 중지된다.
```js
objserver.disconnect();
```