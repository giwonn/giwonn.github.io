import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,e as t}from"./app.404da4f0.js";const s={},l=t(`<h1 id="_1-2-react-component" tabindex="-1"><a class="header-anchor" href="#_1-2-react-component" aria-hidden="true">#</a> 1-2. React Component</h1><ul><li>React.createElement : \uD0DC\uADF8\uB97C \uB9CC\uB4E4\uC5B4\uC8FC\uB294 \uD568\uC218</li></ul><h2 id="\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-component" tabindex="-1"><a class="header-anchor" href="#\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-component" aria-hidden="true">#</a> \uCEF4\uD3EC\uB10C\uD2B8(Component)</h2><ul><li><strong>state</strong>(\uC0C1\uD0DC) : \uB3D9\uC791\uC744 \uD588\uC744 \uB54C \uBC14\uB014\uC218 \uC788\uB294 \uBD80\uBD84(\uCEF4\uD3EC\uB10C\uD2B8 \uB0B4\uBD80\uC5D0\uC11C \uC0C1\uD0DC\uBCC0\uD654\uD558\uB294\uAC83)</li><li>props : \uBD80\uBAA8\uC5D0\uC11C \uC790\uC2DD\uCEF4\uD3EC\uB10C\uD2B8\uB85C \uB370\uC774\uD130\uAC00 \uC804\uB2EC\uB418\uB294\uAC83</li><li>React.createElement : html\uD0DC\uADF8\uB97C \uB9CC\uB4E4\uC5B4\uC900\uB2E4.</li><li>class &quot;\uD074\uB798\uC2A4\uBA85&quot; extends React.Component : \uD074\uB798\uC2A4\uBA85 \uC774\uB77C\uB294 Component\uB97C \uB9CC\uB4E4\uC5B4\uC900\uB2E4.</li></ul><p>\uC544\uB798\uC758 \uCF54\uB4DC\uB294 React Component\uB97C \uB9CC\uB4DC\uB294 \uAC00\uC7A5 \uAE30\uBCF8\uC801\uC778 \uBC29\uC2DD\uC774\uB2E4.</p><p>\uBCF4\uB2E4\uC2DC\uD53C Javascript\uBB38\uBC95\uC744 \uC774\uC6A9\uD574 html\uD0DC\uADF8\uB97C \uB9CC\uB4E4\uC5B4\uC900\uB2E4.</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>&lt;html&gt;
    &lt;head&gt;
        &lt;script src=&quot;https://unpkg.com/react@17/umd/react.development.js&quot; crossorigin&gt;&lt;/script&gt;
        &lt;script src=&quot;https://unpkg.com/react-dom@17/umd/react-dom.development.js&quot; crossorigin&gt;&lt;/script&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;
        &lt;script&gt;
            const e = React.createElement;

            // LikeButton\uC774\uB77C\uB294 Component
						// \uBA54\uC11C\uB4DC \uD074\uB798\uC2A4!
            class LikeButton extends React.Component {
                // \uAE30\uBCF8 \uC124\uC815
                constructor(props) {
										super(props);
                    this.state = {
                        liked: false,
                    };
                }
/*-----------------------------Before---------------------------------*/
                // render : \uC6D0\uD558\uB294 \uC694\uC18C\uB97C \uC5B4\uB5BB\uAC8C \uD654\uBA74\uC5D0 \uD45C\uC2DC\uD560\uAC83\uC778\uC9C0 \uACB0\uC815\uD574\uC90C ex) \uC124\uACC4\uB3C4
                render() {
                    // html\uC18D\uC131\uC744 javascript\uB85C \uD45C\uD604\uD560\uB54C\uB294 \uCE74\uBA5C\uD45C\uAE30\uBC95\uC73C\uB85C \uC368\uC57C\uD568
                    // e=React.createElement(\uD0DC\uADF8, \uB3D9\uC791, value)
                    return e(&#39;button&#39;,
			{ onClick: () =&gt; { this.setState({ liked: true })}, type: &#39;submit&#39; },
						this.state.liked === true ? &#39;Liked&#39; : &#39;Like&#39;
						);
                	}
            	}
        &lt;/script&gt;
        &lt;script&gt;
            // ReactDOM : \uC704\uC5D0\uC11C \uB9CC\uB4E0 \uD0DC\uADF8\uB97C \uD654\uBA74\uC5D0\uB2E4\uAC00 \uC2E4\uC81C\uB85C \uBC18\uC601\uC744 \uD574\uC90C
            ReactDOM.render(e(LikeButton), document.querySelector(&quot;#root&quot;));
        &lt;/script&gt;
/*-----------------------------------------------------------------------------*/
    &lt;/body&gt;
&lt;/html&gt;

/* \uACB0\uACFC\uAC12
    &lt;div id=&quot;root&quot;&gt;
        &lt;button&gt;Like&lt;/button&gt;
    &lt;/div&gt;    
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704\uC758 \uCF54\uB4DC\uAC00 \uBB34\uC2A8 \uB3D9\uC791\uC744 \uD558\uB294\uC9C0 \uD55C\uB208\uC5D0 \uB4E4\uC5B4\uC624\uB294\uAC00?</p><p>\uBCF4\uBA74 \uC54C\uACA0\uC9C0\uB9CC LikeButton Component\uC758 render\uD568\uC218\uC758 return\uAC12\uC774 \uAC00\uB3C5\uC131\uC774 \uB9E4\uC6B0 \uB5A8\uC5B4\uC9C4\uB2E4.</p><p>\uC774 \uAC00\uB3C5\uC131\uC744 \uD574\uACB0\uD558\uAE30 \uC704\uD574 JS\uC5D0\uC11C html\uD0DC\uADF8 \uD615\uC2DD\uC73C\uB85C \uCF54\uB4DC\uB97C \uC791\uC131\uD560 \uC218 \uC788\uAC8C \uCF54\uB4DC\uB97C \uBC14\uAFD4\uC904\uAC83\uC774\uB2E4.</p><p>\uD558\uC9C0\uB9CC JS\uB0B4\uBD80\uC5D0\uC11C\uB294 html\uD0DC\uADF8 \uD615\uC2DD\uC73C\uB85C \uCF54\uB4DC\uB97C \uC4F8 \uC218 \uC5C6\uB2E4.</p><p>\uC774\uAC78 \uD574\uACB0\uD558\uC5EC \uC544\uB798\uC640 \uAC19\uC774 \uCF54\uB4DC\uB97C \uC791\uC131\uD558\uAE30 \uC704\uD574 <strong>Babel</strong>\uC774\uB77C\uB294 \uAC83\uC744 \uC0AC\uC6A9\uD55C\uB2E4.</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>&lt;script type=&quot;text/babel&quot;&gt;
		ReactDOM.render(&lt;LikeButton /&gt;, document.querySelector(&quot;#root&quot;));
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="babel" tabindex="-1"><a class="header-anchor" href="#babel" aria-hidden="true">#</a> Babel</h2><p>\uCD5C\uC2E0 \uBB38\uBC95\uC774\uB098 \uC2E4\uD5D8\uC801\uC778 \uBB38\uBC95\uB4E4\uC744 Javascript\uC5D0\uC11C \uC4F8 \uC218 \uC788\uAC8C \uD574\uC8FC\uB294 library.</p><p>\uAD6C\uD615 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB3C4 \uCD5C\uC2E0 JS\uBB38\uBC95\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uAC8C \uBCC0\uD658 \uC2DC\uCF1C\uC90C</p><p>\uC544\uB798\uC758 \uC2A4\uD06C\uB9BD\uD2B8\uBB38\uC744 \uCD94\uAC00\uD574\uC8FC\uBA74 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4.</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>&lt;script src=&quot;https://unpkg.com/babel-standalone@6/babel.min.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/babel&quot;&gt;
...
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC6B0\uB9AC\uB294 \uC774\uC81C Babel\uC744 \uD1B5\uD558\uC5EC <strong>JSX</strong>\uB97C \uC0AC\uC6A9\uD560\uAC83\uC774\uB2E4.</p><h2 id="jsx" tabindex="-1"><a class="header-anchor" href="#jsx" aria-hidden="true">#</a> JSX</h2><p><strong>JSX</strong> \uB294 Javascript + XML\uC774\uB77C\uACE0 \uBCF4\uBA74 \uB41C\uB2E4.</p><p>\uC815\uD655\uD788 \uB9D0\uD558\uBA74 HTML\uBCF4\uB2E4\uB294 XML\uC5D0 \uAC00\uAE4C\uC6B4 \uD615\uC2DD\uC774\uB2E4.</p><p><strong>JSX\uB294 XML\uC5D0 \uAC00\uAE4C\uC6CC\uC11C \uD0DC\uADF8\uB97C \uBB34\uC870\uAC74 \uB2EB\uC544\uC918\uC57C\uD55C\uB2E4</strong></p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>&lt;input/&gt; // (O)

&lt;input&gt;  // (X)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uC81C \uC704\uC758 \uCF54\uB4DC\uC5D0\uC11C, \uB450\uBC88\uC9F8 \uC2A4\uD06C\uB9BD\uD2B8\uB97C JSX\uB97C \uC0AC\uC6A9\uD55C \uCF54\uB4DC\uB85C \uC218\uC815\uD574\uC900\uB2E4.</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>// ...\uC911\uB7B5
/*-----------------------------After---------------------------------*/
	render() {
           return &lt;button type=&quot;submit&quot; onClick={ () =&gt; { this.setState({ liked: true}) } }&gt;Like&lt;/button&gt;
	}
&lt;/script&gt;
&lt;script type=&quot;text/babel&quot;&gt;
	ReactDOM.render(&lt;LikeButton /&gt;, document.querySelector(&quot;#root&quot;));
&lt;/script&gt;
/*----------------------------------------------------------------------------*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704\uC640 \uAC19\uC774 \uC791\uC131\uD558\uBA74 Babel\uC774 JSX\uBB38\uBC95\uC744 \uCC98\uC74C\uC5D0 \uC37C\uB358 e(...)\uC640 \uAC19\uC740 \uBC29\uC2DD\uC73C\uB85C \uBC14\uAFD4\uC900\uB2E4.</p><p><strong>\uCD5C\uC885 \uCF54\uB4DC</strong></p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>&lt;html&gt;
    &lt;head&gt;
        &lt;script src=&quot;https://unpkg.com/react@17/umd/react.development.js&quot; crossorigin&gt;&lt;/script&gt;
        &lt;script src=&quot;https://unpkg.com/react-dom@17/umd/react-dom.development.js&quot; crossorigin&gt;&lt;/script&gt;
        &lt;script src=&quot;https://unpkg.com/@babel/standalone/babel.min.js&quot;&gt;&lt;/script&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;
        &lt;script type=&quot;text/babel&quot;&gt;
            class LikeButton extends React.Component {
                constructor(props) {
                    super(props);
                    this.state = {
                        liked: false,
                    };
                }
                
                render() {
                    return &lt;button type=&quot;submit&quot; onClick={() =&gt; { this.setState({ liked: true }) }}&gt;
                        {this.state.liked ? &#39;Liked&#39; : &#39;Like&#39;}
                    &lt;/button&gt;;
                }
            }
        &lt;/script&gt;
        &lt;script type=&quot;text/babel&quot;&gt;
            ReactDOM.render(
								&lt;div&gt;
	                &lt;LikeButton /&gt;
	                &lt;LikeButton /&gt;
	                &lt;LikeButton /&gt;
	                &lt;LikeButton /&gt;
                &lt;/div&gt;,
								document.querySelector(&quot;#root&quot;)
						);
        &lt;/script&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tip) \uD654\uC0B4\uD45C\uD568\uC218</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>this.setState((prevState) -&gt; {
                                return {
                                    result: &#39;\uC815\uB2F5: &#39; + prevState.value,
                                    first: Math.ceil(Math.random() * 9),
                                    second: Math.ceil(Math.random() * 9),
                                    value: &#39;&#39;,
                                };
              });
                                    // \uBB34\uC5B8\uAC00\uB97C +1\uC744 \uC5EC\uB7EC\uBC88 \uD558\uACE0 \uC2F6\uB2E4\uBA74
																		// \uD654\uC0B4\uD45C\uD568\uC218\uB97C \uC368\uC57C \uAC12\uC774 +1\uC529 \uB420 \uAC00\uB2A5\uC131\uC774 \uB192\uC74C
                                    // this.setState((prevState) =&gt; {
                                    //     return {
                                    //         value: prevState.value + 1,
                                    //     }
                                    // });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uD3EC\uCEE4\uC2A4 \uC815\uD560 \uB54C \uC0AC\uC6A9\uD558\uB294 ref \uC18D\uC131</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>// \uB9AC\uD134\uD558\uB294 \uAC00\uC0C1\uB3D4\uC5D0 \uBC11\uC904\uCE5C \uC18D\uC131 \uCD94\uAC00
&lt;input
    ref={(c) -&gt; {this.input = c;}}
    type=&quot;number&quot;
    value={this.state.value}
    onChange={this.onChange} /&gt;

// \uD074\uB798\uC2A4\uC5D0\uB3C4
input
// \uC774\uAC78 \uCD94\uAC00\uD574\uC8FC\uBA74 \uC6B0\uB9AC\uAC00 \uD3EC\uCEE4\uC2A4\uD560 \uACF3\uC744 \uC815\uD560 \uC218 \uC788\uB2E4.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>this.setState\uBA54\uC11C\uB4DC\uAC00 render\uB97C \uC2E4\uD589\uC2DC\uD0A4\uAE30\uB54C\uBB38\uC5D0 \uC720\uC758\uD558\uBA70 \uAC1C\uBC1C\uD574\uC57C\uD55C\uB2E4.</p><p>render()\uC5D0 \uB4E4\uC5B4\uC624\uB294 \uD0DC\uADF8 \uC18D\uC131\uC911</p><p>class \u2192 className</p><p>for \u2192 htmlFor</p><p>\uB85C \uBC14\uAFD4\uC368\uC57C\uD55C\uB2E4.</p>`,38),d=[l];function r(a,v){return n(),i("div",null,d)}var o=e(s,[["render",r],["__file","React Component.html.vue"]]);export{o as default};
