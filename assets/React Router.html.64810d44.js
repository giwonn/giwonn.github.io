import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as l,e}from"./app.404da4f0.js";const n={},s=e(`<h1 id="browserrouter-as-router" tabindex="-1"><a class="header-anchor" href="#browserrouter-as-router" aria-hidden="true">#</a> BrowserRouter as Router</h1><p><a href="https://www.notion.so/React-Router-86269e1a10264d73b023b2179c94b039" target="_blank" rel="noopener noreferrer">exact</a></p><p><a href="https://www.notion.so/React-Router-86269e1a10264d73b023b2179c94b039" target="_blank" rel="noopener noreferrer">&lt;Route&gt;</a></p><p><a href="https://www.notion.so/React-Router-86269e1a10264d73b023b2179c94b039" target="_blank" rel="noopener noreferrer">&lt;Link&gt;</a></p><p><a href="https://www.notion.so/React-Router-86269e1a10264d73b023b2179c94b039" target="_blank" rel="noopener noreferrer">&lt;Switch&gt;</a></p><p><a href="https://www.notion.so/React-Router-86269e1a10264d73b023b2179c94b039" target="_blank" rel="noopener noreferrer">&lt;HashRouter&gt;</a> as Router</p><h2 id="exact" tabindex="-1"><a class="header-anchor" href="#exact" aria-hidden="true">#</a> <strong>exact</strong></h2><p>path \uC55E\uC5D0 exact\uB97C \uBD99\uC5EC\uC8FC\uBA74 \uC815\uD655\uD788 \uC77C\uCE58\uD558\uB294\uACBD\uC6B0\uAC00 \uC544\uB2C8\uBA74 \uB118\uC5B4\uAC10</p><p>&lt;Route exact path=&quot;/&quot;&gt;&lt;Home&gt;&lt;/Home&gt;&lt;/Route&gt; \uC778 \uACBD\uC6B0\uC5D0\uB294</p><p>&quot;/&quot;\uC640 \uC815\uD655\uD788 \uC77C\uCE58\uD560\uB54C\uB9CC home\uC744 \uCD9C\uB825\uD568</p><h2 id="route" tabindex="-1"><a class="header-anchor" href="#route" aria-hidden="true">#</a> &lt;Route&gt;</h2><p>&quot;/&quot;\uC5D0 exact\uAC00 \uC5C6\uB2E4\uBA74,</p><p>\uC8FC\uC18C\uAC00 / \uC778 \uACBD\uC6B0 home, topics, contact\uAC00 \uB2E4 \uB9CC\uC871\uD558\uBBC0\uB85C \uC804\uBD80 \uCD9C\uB825\uB428</p><p>/topics\uAC00 \uC8FC\uC18C\uC77C\uACBD\uC6B0 Home, Topics\uAC00 \uCD9C\uB825\uB428</p><p>/contact\uAC00 \uC8FC\uC18C\uC77C\uACBD\uC6B0 Home, Contact\uAC00 \uCD9C\uB825\uB428</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;div&gt;
  &lt;h1&gt;React Router DOM example&lt;/h1&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href=&quot;/&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;/topics&quot;&gt;Topics&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=&quot;/contact&quot;&gt;Contact&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
  &lt;Route exact path=&quot;/&quot;&gt;&lt;Home&gt;&lt;/Home&gt;&lt;/Route&gt;
  &lt;Route path=&quot;/topics&quot;&gt;&lt;Topics&gt;&lt;/Topics&gt;&lt;/Route&gt;
  &lt;Route path=&quot;/Contact&quot;&gt;&lt;Contact&gt;&lt;/Contact&gt;&lt;/Route&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="link" tabindex="-1"><a class="header-anchor" href="#link" aria-hidden="true">#</a> &lt;Link&gt;</h2><p>a\uD0DC\uADF8\uC758 \uBC84\uD2BC\uD074\uB9AD \uC774\uBCA4\uD2B8\uC758 default\uAC12(=\uD398\uC774\uC9C0 \uC774\uB3D9)\uC744 \uC54C\uC544\uC11C \uB9C9\uC544\uC90C</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;div&gt;
	&lt;h1&gt;React Router DOM example&lt;/h1&gt;
	&lt;ul&gt;
		&lt;li&gt;&lt;Link to=&quot;/&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;Link to=&quot;/topics&quot;&gt;Topics&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;Link to=&quot;/contact&quot;&gt;Contact&lt;/a&gt;&lt;/li&gt;
	&lt;/ul&gt;
	&lt;Route exact path=&quot;/&quot;&gt;&lt;Home&gt;&lt;/Home&gt;&lt;/Route&gt;
	&lt;Route path=&quot;/topics&quot;&gt;&lt;Topics&gt;&lt;/Topics&gt;&lt;/Route&gt;
	&lt;Route path=&quot;/Contact&quot;&gt;&lt;Contact&gt;&lt;/Contact&gt;&lt;/Route&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="navlink" tabindex="-1"><a class="header-anchor" href="#navlink" aria-hidden="true">#</a> &lt;NavLink&gt;</h2><p>\uD604\uC7AC \uD65C\uC131\uD654\uB41C \uB77C\uC6B0\uD130\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC801\uC6A9\uD558\uAE30 \uC704\uD55C \uCEF4\uD3EC\uB10C\uD2B8</p><p>NavLink \uD0DC\uADF8\uC5D0 css or class\uB97C \uC801\uC6A9\uC2DC\uCF1C\uC904 \uC218 \uC788\uC74C</p><p>\uADF8 css\uB294 \uB0B4\uAC00 \uC9C1\uC811 \uC791\uC131\uD574\uC918\uC57C\uD568. css class\uC758 default\uBA85\uC740 &quot;active&quot;\uC784</p><p>activeStyle \uC18D\uC131\uC744 \uC4F0\uBA74 \uBC14\uB85C css\uB97C \uC801\uC6A9\uD560 \uC218 \uC788\uACE0, activeClassName\uC744 \uC0AC\uC6A9\uD558\uBA74 css\uD30C\uC77C\uC758 class\uB97C \uAC00\uC838\uC62C \uC218 \uC788\uB2E4.</p><p>&lt;Route&gt;\uC640 \uB9C8\uCC2C\uAC00\uC9C0\uB85C exact\uB97C \uC4F0\uB0D0 \uC548\uC4F0\uB0D0\uC5D0 \uB530\uB77C\uC11C \uC804\uCCB4\uC801\uC6A9\uC774 \uB418\uAE30\uB3C4 \uD55C\uB2E4.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;div&gt;
	&lt;h1&gt;React Router DOM example&lt;/h1&gt;
	&lt;ul&gt;
		&lt;li&gt;&lt;NavLink to=&quot;/&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;NavLink to=&quot;/topics&quot;&gt;Topics&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;NavLink to=&quot;/contact&quot;&gt;Contact&lt;/a&gt;&lt;/li&gt;
	&lt;/ul&gt;
	&lt;Route exact path=&quot;/&quot;&gt;&lt;Home&gt;&lt;/Home&gt;&lt;/Route&gt;
	&lt;Route path=&quot;/topics&quot;&gt;&lt;Topics&gt;&lt;/Topics&gt;&lt;/Route&gt;
	&lt;Route path=&quot;/Contact&quot;&gt;&lt;Contact&gt;&lt;/Contact&gt;&lt;/Route&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> <strong>&lt;Switch&gt;</strong></h2><p>\uCC98\uC74C \uB9CC\uC871\uD558\uB294 \uC8FC\uC18C\uAC12\uB9CC \uCD9C\uB825\uD558\uACE0 \uB098\uBA38\uC9C0 \uBC84\uB9BC</p><p>&quot;/&quot;\uC5D0 exact\uAC00 \uC5C6\uB2E4\uBA74,</p><p>&quot;/&quot;, &quot;/topics&quot;, &quot;/Contact&quot;\uAC19\uC740 \uBAA8\uB4E0 \uACBD\uC6B0\uC758 \uC218\uB294 home\uB9CC \uCD9C\uB825\uD568</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;div&gt;
	&lt;h1&gt;React Router DOM example&lt;/h1&gt;
	&lt;ul&gt;
		&lt;li&gt;&lt;Link to=&quot;/&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;Link to=&quot;/topics&quot;&gt;Topics&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;Link to=&quot;/contact&quot;&gt;Contact&lt;/a&gt;&lt;/li&gt;
	&lt;/ul&gt;
	&lt;Switch&gt;
		&lt;Route exact path=&quot;/&quot;&gt;&lt;Home&gt;&lt;/Home&gt;&lt;/Route&gt;
		&lt;Route path=&quot;/topics&quot;&gt;&lt;Topics&gt;&lt;/Topics&gt;&lt;/Route&gt;
		&lt;Route path=&quot;/Contact&quot;&gt;&lt;Contact&gt;&lt;/Contact&gt;&lt;/Route&gt;
	&lt;Switch&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hashrouter" tabindex="-1"><a class="header-anchor" href="#hashrouter" aria-hidden="true">#</a> HashRouter</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>www.domain.com/#/path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>#\uC774\uC804\uC758 www.domain.com\uC5D0 \uB300\uD55C \uC694\uCCAD\uB9CC \uC11C\uBC84\uAC00 \uBC1B\uC544\uB4E4\uC774\uAC8C \uB428 (location.hash\uC5D0 \uB300\uC751)</p><p>\uC989, \uBC31\uC5D4\uB4DC\uAC00 \uD544\uC694\uD558\uC9C0 \uC54A\uB294 \uC0C1\uD669(\uC815\uC801\uC778 \uD398\uC774\uC9C0)\uC5D0\uC11C \uC8FC\uB85C \uC0AC\uC6A9\uB41C\uB2E4.</p><p>\uC0C8\uB85C\uACE0\uCE68\uC744 \uD574\uB3C4 \uC11C\uBC84\uB85C \uC694\uCCAD\uC774 \uAC00\uC9C0 \uC54A\uB294\uB2E4.</p><p>\uCC38\uACE0 : <a href="https://lts0606.tistory.com/482" target="_blank" rel="noopener noreferrer">https://lts0606.tistory.com/482</a></p><h3 id="nested-routing" tabindex="-1"><a class="header-anchor" href="#nested-routing" aria-hidden="true">#</a> Nested Routing</h3><p>\uC911\uCCA9 \uB77C\uC6B0\uD305\uC73C\uB85C\uC368 Route \uC548\uC5D0 Route\uB97C \uB123\uC744 \uC218 \uC788\uB2E4.</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>&lt;div&gt;
	&lt;h1&gt;React Router DOM example&lt;/h1&gt;
	&lt;ul&gt;
		&lt;li&gt;&lt;Link to=&quot;/&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;Link to=&quot;/topics&quot;&gt;Topics&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;Link to=&quot;/contact&quot;&gt;Contact&lt;/a&gt;&lt;/li&gt;
	&lt;/ul&gt;
	&lt;Switch&gt;
		&lt;Route exact path=&quot;/&quot;&gt;&lt;Home&gt;&lt;/Home&gt;&lt;/Route&gt;
		&lt;Route path=&quot;/topics&quot;&gt;&lt;Topics&gt;&lt;/Topics&gt;&lt;/Route&gt;
		&lt;Route path=&quot;/Contact&quot;&gt;&lt;Contact&gt;&lt;/Contact&gt;&lt;/Route&gt;
	&lt;Switch&gt;
&lt;/div&gt;

function Topics() {
	return (
		&lt;div&gt;
				&lt;h2&gt;Topics&lt;/h2&gt;
				&lt;ul&gt;
						&lt;li&gt;&lt;NavLInk to=&quot;/topics/1&quot;&gt;HTML&lt;/NavLink&gt;&lt;/li&gt;
						&lt;li&gt;&lt;NavLInk to=&quot;/topics/2&quot;&gt;JS&lt;/NavLink&gt;&lt;/li&gt;
						&lt;li&gt;&lt;NavLInk to=&quot;/topics/3&quot;&gt;React&lt;/NavLink&gt;&lt;/li&gt;
				&lt;/ul&gt;
				&lt;Switch&gt;
						&lt;Route path=&quot;/topics/1&quot;&gt;
								HTML is ...
						&lt;/Route&gt;
						&lt;Route path=&quot;/topics/2&quot;&gt;
								JS is ...
						&lt;/Route&gt;
						&lt;Route path=&quot;/topics/3&quot;&gt;
								React is ...
						&lt;/Route&gt;
				&lt;/Switch&gt;
		&lt;/div&gt;

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="parameter" tabindex="-1"><a class="header-anchor" href="#parameter" aria-hidden="true">#</a> parameter</h2><p>\uC911\uCCA9\uB77C\uC6B0\uD305\uC774 \uB9CE\uC744 \uACBD\uC6B0 \uBC18\uBCF5\uBB38\uC744 \uC774\uC6A9\uD55C\uB2E4</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>
&lt;div&gt;
	&lt;h1&gt;React Router DOM example&lt;/h1&gt;
	&lt;ul&gt;
		&lt;li&gt;&lt;Link to=&quot;/&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;Link to=&quot;/topics&quot;&gt;Topics&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;Link to=&quot;/contact&quot;&gt;Contact&lt;/a&gt;&lt;/li&gt;
	&lt;/ul&gt;
	&lt;Switch&gt;
		&lt;Route exact path=&quot;/&quot;&gt;&lt;Home&gt;&lt;/Home&gt;&lt;/Route&gt;
		&lt;Route path=&quot;/topics&quot;&gt;&lt;Topics&gt;&lt;/Topics&gt;&lt;/Route&gt;
		&lt;Route path=&quot;/Contact&quot;&gt;&lt;Contact&gt;&lt;/Contact&gt;&lt;/Route&gt;
	&lt;Switch&gt;
&lt;/div&gt;

let contents = [
		{id:1, title:&#39;HTML&#39;, description:&#39;HTML is ...&#39;},
		{id:2, title:&#39;JS&#39;, description:&#39;JS is ...&#39;},
		{id:3, title:&#39;React&#39;, description:&#39;React is ...&#39;},
];

function Topic() {
		let params = useParams();
		let topic_id = params.topic_id;
		let selected_topic = {
				title: &quot;Sorry&quot;,
				description:&quot;Not Found&quot;
		}
		for (let i=0; i&lt;contents.length; i++) {
				if (contents[i].id === Number(topic_id)) {

						break;
				}
		}
		return (
				&lt;div&gt;
						&lt;h3&gt;{selected_topic.title}&lt;/h3&gt;
						{selected_topic.description}
				&lt;/div&gt;
		);
}

function Topics() {
	let lis = [];
	for (let i=0; i&lt;contents.length; i++) {
			lis.push(
				&lt;li key={contents[i].id}&gt;&lt;NavLink to={\`/topics/\${contents[i].id}\`}&gt;{contents[i].title)&lt;/li&gt;&lt;/NavLink&gt;
			);
	}
	return (
		&lt;div&gt;
				&lt;h2&gt;Topics&lt;/h2&gt;
				&lt;ul&gt;
						/*
						&lt;li&gt;&lt;NavLInk to=&quot;/topics/1&quot;&gt;HTML&lt;/NavLink&gt;&lt;/li&gt;
						&lt;li&gt;&lt;NavLInk to=&quot;/topics/2&quot;&gt;JS&lt;/NavLink&gt;&lt;/li&gt;
						&lt;li&gt;&lt;NavLInk to=&quot;/topics/3&quot;&gt;React&lt;/NavLink&gt;&lt;/li&gt;
						*/
						{lis}
				&lt;/ul&gt;
				&lt;Route path=&quot;/topics/:topic_id&quot;&gt;
						&lt;Topic&gt;&lt;/Topic&gt;
				&lt;/Route&gt;
				&lt;Switch&gt;
						&lt;Route path=&quot;/topics/1&quot;&gt;
								HTML is ...
						&lt;/Route&gt;
						&lt;Route path=&quot;/topics/2&quot;&gt;
								JS is ...
						&lt;/Route&gt;
						&lt;Route path=&quot;/topics/3&quot;&gt;
								React is ...
						&lt;/Route&gt;
				&lt;/Switch&gt;
		&lt;/div&gt;

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>code splitting</p>`,44),a=[s];function d(o,u){return i(),l("div",null,a)}var r=t(n,[["render",d],["__file","React Router.html.vue"]]);export{r as default};
