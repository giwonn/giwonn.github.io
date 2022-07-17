import{_ as n,o as a,c as s,e as t}from"./app.c9fb633c.js";var p="/images/TIL/Lang-Javascript/event-delegation-1.png",e="/images/TIL/Lang-Javascript/event-delegation-2.png",c="/images/TIL/Lang-Javascript/event-delegation-3.png";const o={},l=t(`<h1 id="\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u110B\u1171\u110B\u1175\u11B7-event-delegation" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u110B\u1171\u110B\u1175\u11B7-event-delegation" aria-hidden="true">#</a> \uC774\uBCA4\uD2B8 \uC704\uC784 (Event Delegation)</h1><p>\uC774\uBCA4\uD2B8 \uC704\uC784\uC774\uB780 \uB3D9\uC801\uC73C\uB85C \uD558\uC704 \uB178\uB4DC\uB97C \uC0DD\uC131\uD558\uACE0 \uC0AD\uC81C\uD560 \uB54C,<br> \uC0C1\uC704 \uB178\uB4DC\uAC00 \uD558\uC704 \uB178\uB4DC\uB4E4\uC758 \uC774\uBCA4\uD2B8\uB97C \uC9C1\uC811 \uD0D0\uC9C0\uD558\uACE0 \uAD00\uB9AC\uD558\uB294 \uAC83\uC744 \uB73B\uD55C\uB2E4.</p><h2 id="\u110F\u1169\u1103\u1173-\u110B\u1168\u110C\u1166" tabindex="-1"><a class="header-anchor" href="#\u110F\u1169\u1103\u1173-\u110B\u1168\u110C\u1166" aria-hidden="true">#</a> \uCF54\uB4DC \uC608\uC81C</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>parent<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> parent <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.parent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   parent<span class="token punctuation">.</span>innerHTML <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
      &lt;button class=&quot;child&quot;&gt;
          \uD558\uC774
      &lt;/button&gt;
      &lt;br&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript-\u1109\u1175\u11AF\u1112\u1162\u11BC-\u110B\u1175\u1112\u116E" tabindex="-1"><a class="header-anchor" href="#javascript-\u1109\u1175\u11AF\u1112\u1162\u11BC-\u110B\u1175\u1112\u116E" aria-hidden="true">#</a> javascript \uC2E4\uD589 \uC774\uD6C4</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>parent<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>child<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>child<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>child<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ...\uC0DD\uB7B5... --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704\uC758 \uC608\uC81C\uCC98\uB7FC parent\uB77C\uB294 div\uC5D0 child\uB97C 1000\uAC1C \uB9CC\uB4E4\uC5C8\uB2E4\uACE0 \uD574\uBCF4\uC790.</p><p>child \uBC84\uD2BC\uC5D0 \uC774\uBCA4\uD2B8\uB97C \uAC78\uC5B4\uC8FC\uACE0 \uC2F6\uB2E4\uBA74 class \uC120\uD0DD\uC790\uB97C \uC774\uC6A9\uD574\uC11C 1000\uAC1C \uC804\uBD80 \uAC78\uC5B4\uC8FC\uBA74 \uB41C\uB2E4.</p><p>\uADF8\uB7F0\uB370 \uC544\uBB34\uB9AC \uC0DD\uAC01\uD574\uBD10\uB3C4 \uAD49\uC7A5\uD788 \uBE44\uD6A8\uC728\uC801\uC774\uB2E4.</p><p>\uC774\uBCA4\uD2B8\uAC00 1000\uAC1C\uB098 \uC0DD\uC131\uB418\uACE0 \uB098\uC911\uC5D0 child\uB97C \uC804\uBD80 \uC0AD\uC81C\uC2DC\uD0A4\uBA74 1000\uAC1C\uC758 \uC774\uBCA4\uD2B8\uAC00 \uC0AD\uC81C\uB418\uB294 \uAC83\uC774\uB2E4.</p><p><strong>\uC774\uB7F4 \uB54C \uC774\uBCA4\uD2B8 \uC704\uC784\uC744 \uC0AC\uC6A9\uD558\uBA74 \uC88B\uB2E4.</strong></p><h2 id="\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u110B\u1171\u110B\u1175\u11B7-\u110B\u1168\u110C\u1166" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u110B\u1171\u110B\u1175\u11B7-\u110B\u1168\u110C\u1166" aria-hidden="true">#</a> \uC774\uBCA4\uD2B8 \uC704\uC784 \uC608\uC81C</h2><p>\uAD6C\uD604 \uBC29\uC2DD\uC740 \uAC04\uB2E8\uD558\uB2E4.</p><p>parent\uC5D0\uC11C \uD074\uB9AD\uD55C \uC601\uC5ED\uC774 \uC5B4\uB290 \uBD80\uBD84\uC778\uC9C0 \uAC10\uC9C0\uD558\uB294 \uC774\uBCA4\uD2B8\uB97C \uC0DD\uC131\uD558\uBA74 \uB41C\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> parent <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.parent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

parent<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&#39;child&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;child \uAC10\uC9C0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1100\u1167\u11AF\u1100\u116A" tabindex="-1"><a class="header-anchor" href="#\u1100\u1167\u11AF\u1100\u116A" aria-hidden="true">#</a> \uACB0\uACFC</h2><p><img src="`+p+'" alt="image"></p><h3 id="\u1112\u1161\u110B\u1175-\u1107\u1165\u1110\u1173\u11AB\u110B\u1173\u11AF-\u110F\u1173\u11AF\u1105\u1175\u11A8-\u1109\u1175" tabindex="-1"><a class="header-anchor" href="#\u1112\u1161\u110B\u1175-\u1107\u1165\u1110\u1173\u11AB\u110B\u1173\u11AF-\u110F\u1173\u11AF\u1105\u1175\u11A8-\u1109\u1175" aria-hidden="true">#</a> &#39;\uD558\uC774&#39;\uBC84\uD2BC\uC744 \uD074\uB9AD \uC2DC</h3><p><img src="'+e+'" alt="image"></p><h3 id="parent\u110B\u1174-\u1103\u1161\u1105\u1173\u11AB-\u110B\u1167\u11BC\u110B\u1167\u11A8\u110B\u1173\u11AF-\u110F\u1173\u11AF\u1105\u1175\u11A8-\u1109\u1175" tabindex="-1"><a class="header-anchor" href="#parent\u110B\u1174-\u1103\u1161\u1105\u1173\u11AB-\u110B\u1167\u11BC\u110B\u1167\u11A8\u110B\u1173\u11AF-\u110F\u1173\u11AF\u1105\u1175\u11A8-\u1109\u1175" aria-hidden="true">#</a> parent\uC758 \uB2E4\uB978 \uC601\uC5ED\uC744 \uD074\uB9AD \uC2DC</h3><p><img src="'+c+'" alt="image"></p><h2 id="\u1112\u116E\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1112\u116E\u1100\u1175" aria-hidden="true">#</a> \uD6C4\uAE30</h2><p>\uAC19\uC740 \uC774\uBCA4\uD2B8\uB97C \uC218\uC2ED, \uC218\uBC31\uBC88 \uD560\uB2F9\uD574 \uC8FC\uAE30\uBCF4\uB2E4\uB294</p><p>\uC774\uB7F0\uC2DD\uC73C\uB85C \uC774\uBCA4\uD2B8\uB97C \uB2E8 \uD558\uB098\uB9CC \uC774\uC6A9\uD558\uC5EC \uAD00\uB9AC\uD558\uB294 \uAC83\uC774 \uB354 \uD6A8\uC728\uC801\uC774\uB77C\uB294 \uC0DD\uAC01\uC774 \uB4E0\uB2E4.</p>',25),i=[l];function u(r,d){return a(),s("div",null,i)}var v=n(o,[["render",u],["__file","\uC774\uBCA4\uD2B8 \uC704\uC784.html.vue"]]);export{v as default};
