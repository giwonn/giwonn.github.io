import{_ as n,o as s,c as a,e as t}from"./app.c9fb633c.js";const p={},o=t(`<h1 id="tip-01-\u1110\u1161\u110B\u1175\u11B8-\u110E\u116E\u1105\u1169\u11AB" tabindex="-1"><a class="header-anchor" href="#tip-01-\u1110\u1161\u110B\u1175\u11B8-\u110E\u116E\u1105\u1169\u11AB" aria-hidden="true">#</a> Tip-01. \uD0C0\uC785 \uCD94\uB860</h1><h2 id="readonly-as-const" tabindex="-1"><a class="header-anchor" href="#readonly-as-const" aria-hidden="true">#</a> readonly, as const</h2><ul><li><strong>readonly</strong><ul><li>\uD574\uB2F9 \uBCC0\uC218\uB97C \uC0C1\uC218\uB85C \uBC14\uAFD4\uC90C</li><li>type, interface, class\uC758 \uC18D\uC131\uC5D0 \uBD80\uC5EC \uAC00\uB2A5</li></ul></li><li><strong>as const</strong><ul><li>\uD574\uB2F9 \uAC12\uC744 \uCD5C\uB300\uD55C \uC881\uC740 \uD0C0\uC785\uC73C\uB85C \uCD94\uB860\uD574\uC90C</li><li>\uAC1D\uCCB4\uC5D0 \uC0AC\uC6A9\uD560 \uACBD\uC6B0 \uBC14\uB85C \uC544\uB798 depth\uAE4C\uC9C0 readonly\uB85C \uBC14\uAFD4\uC90C</li><li>\uBCC0\uC218\uC5D0 \uC0AC\uC6A9\uD560 \uACBD\uC6B0 \uD574\uB2F9 \uBCC0\uC218\uB97C \uC0C1\uC218\uB85C \uAC04\uC8FC\uD568</li></ul></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> v1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// { x: number, y: number }</span>

<span class="token keyword">const</span> v2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token number">1</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// { x: 1, y: number}</span>

<span class="token keyword">const</span> v3 <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">;</span> <span class="token comment">// { readonly x: 1; readonly y: 2; }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1109\u1161\u110B\u116D\u11BC\u110C\u1161-\u1110\u1161\u110B\u1175\u11B8-\u1100\u1161\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u110B\u116D\u11BC\u110C\u1161-\u1110\u1161\u110B\u1175\u11B8-\u1100\u1161\u1103\u1173" aria-hidden="true">#</a> \uC0AC\uC6A9\uC790 \uD0C0\uC785 \uAC00\uB4DC</h2><p>\uC720\uB2C8\uC628 \uD0C0\uC785\uC744 \uC0AC\uC6A9\uD560 \uB54C \uD568\uC218 \uB0B4\uBD80\uC5D0\uC11C \uD0C0\uC785 \uBD84\uAE30\uB97C \uD558\uACE0 \uC2F6\uC744 \uB54C \uC0AC\uC6A9\uD558\uBA74 \uC720\uC6A9\uD560 \uB4EF.<br> \uB2F9\uC7A5 \uB0B4\uC77C \uD68C\uC0AC\uAC00\uC11C \uC368\uBA39\uC5B4\uC57C \uD55C\uB2E4... \uAE09\uD558\uB2E4.</p><ul><li><strong>is</strong> : \uD568\uC218 \uB9AC\uD134\uAC12\uC774 true\uBA74 \uD0C0\uC785\uC744 \uC881\uD600\uC90C. \uD568\uC218\uB97C \uC870\uAC74\uBB38\uC758 boolean\uC73C\uB85C \uC0AC\uC6A9\uD560 \uB584 \uC4F0\uAE30 \uC88B\uC74C</li><li><strong>in</strong> : \uD574\uB2F9 \uD504\uB85C\uD37C\uD2F0\uAC00 \uC788\uB294\uC9C0 \uD655\uC778\uD568. \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uD0C0\uC785\uAC00\uB4DC \uC5ED\uD560\uC744 \uD568</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  common<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Bar</span> <span class="token punctuation">{</span>
  bar<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  common<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \uB9AC\uD134\uAC12\uC774 true\uBA74 arg\uB294 Foo\uB85C \uCDE8\uAE09\uD558\uACA0\uB2E4\uB294 \uD568\uC218\uC784</span>
<span class="token comment">// &#39;arg is Foo&#39; \uD0C0\uC785\uC774 \uC5C6\uC73C\uBA74 \uC81C\uB300\uB85C \uB3D9\uC791 \uC548\uD568</span>
<span class="token keyword">function</span> <span class="token function">isFoo</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> arg <span class="token keyword">is</span> Foo <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg<span class="token punctuation">.</span>foo <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">doStuff</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> Foo <span class="token operator">|</span> Bar<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isFoo</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u3147\u314B</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error!</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error!</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u3147\u314B</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span> <span class="token keyword">in</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u3147\u314B</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \uC5D0\uB7EC\uB0A8</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \uC5D0\uB7EC\uB0A8</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u3147\u314B</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1106\u116E\u11AB\u1106\u1162\u11A8\u1100\u116A-\u1100\u1161\u11B9\u110B\u1173\u11AF-\u1107\u116E\u11AB\u1105\u1175\u1112\u1161\u11AF-\u1104\u1164-\u110C\u116E\u110B\u1174\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1106\u116E\u11AB\u1106\u1162\u11A8\u1100\u116A-\u1100\u1161\u11B9\u110B\u1173\u11AF-\u1107\u116E\u11AB\u1105\u1175\u1112\u1161\u11AF-\u1104\u1164-\u110C\u116E\u110B\u1174\u110C\u1165\u11B7" aria-hidden="true">#</a> \uBB38\uB9E5\uACFC \uAC12\uC744 \uBD84\uB9AC\uD560 \uB584 \uC8FC\uC758\uC810</h2><p>\uB9E4\uAC1C\uBCC0\uC218\uC5D0 \uBB38\uC790\uC5F4\uC744 \uB123\uB294 \uAC83\uACFC \uBCC0\uC218\uB97C \uB123\uB294 \uAC83\uC740 \uB2E4\uB974\uAC8C \uB3D9\uC791\uD55C\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">toString</span><span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token string">&#39;javascript&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;typescript&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;python&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \uD1B5\uACFC</span>
<span class="token function">toString</span><span class="token punctuation">(</span><span class="token string">&#39;javascript&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \uD1B5\uACFC \uBABB\uD568</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;javascript&#39;</span><span class="token punctuation">;</span> <span class="token comment">// const\uB85C \uBC14\uAFB8\uB358\uAC00 as const\uB97C \uB4A4\uC5D0 \uBD99\uC774\uB358\uAC00 \uD574\uC57C\uD568</span>
<span class="token function">toString</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),e=[o];function c(l,i){return s(),a("div",null,e)}var r=n(p,[["render",c],["__file","01. \uD0C0\uC785 \uCD94\uB860.html.vue"]]);export{r as default};
