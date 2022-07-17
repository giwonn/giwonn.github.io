import{_ as n,o as s,c as a,e as t}from"./app.c9fb633c.js";const e={},p=t(`<h1 id="tip-03-\u1110\u1161\u110B\u1175\u11B8-\u1109\u1165\u11AB\u110B\u1165\u11AB\u1100\u116A-types" tabindex="-1"><a class="header-anchor" href="#tip-03-\u1110\u1161\u110B\u1175\u11B8-\u1109\u1165\u11AB\u110B\u1165\u11AB\u1100\u116A-types" aria-hidden="true">#</a> Tip-03. \uD0C0\uC785 \uC120\uC5B8\uACFC @types</h1><h2 id="\u110B\u1169\u1107\u1165\u1105\u1169\u1103\u1175\u11BC-\u1110\u1161\u110B\u1175\u11B8\u1107\u1169\u1103\u1161\u1102\u1173\u11AB-\u110C\u1169\u1100\u1165\u11AB\u1107\u116E-\u1110\u1161\u110B\u1175\u11B8\u110B\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1169\u1107\u1165\u1105\u1169\u1103\u1175\u11BC-\u1110\u1161\u110B\u1175\u11B8\u1107\u1169\u1103\u1161\u1102\u1173\u11AB-\u110C\u1169\u1100\u1165\u11AB\u1107\u116E-\u1110\u1161\u110B\u1175\u11B8\u110B\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uC624\uBC84\uB85C\uB529 \uD0C0\uC785\uBCF4\uB2E4\uB294 \uC870\uAC74\uBD80 \uD0C0\uC785\uC744 \uC0AC\uC6A9\uD558\uAE30</h2><p>\uC544\uB798\uC758 \uC624\uBC84\uB85C\uB529 \uB41C \uD568\uC218\uB294 \uC785\uB825\uC73C\uB85C number\uB97C \uBC1B\uACE0 \uCD9C\uB825\uC73C\uB85C string\uC744 \uBC18\uD658\uD560 \uC218\uB3C4 \uC788\uB294 \uC798\uBABB\uB41C \uBAA8\uB378\uC774\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">double</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">double</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p>\uADF8\uB798\uC11C \uC544\uB798\uC640 \uAC19\uC774 \uC81C\uB124\uB9AD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uB3D9\uC791\uC744 \uB354 \uC790\uC138\uD558\uAC8C \uBAA8\uB378\uB9C1 \uD560 \uC218 \uC788\uB2E4.<br> \uD558\uC9C0\uB9CC \uC774\uAC74 \uB108\uBB34 \uACFC\uD558\uB2E4. \uD0C0\uC785\uC774 <code>string</code> or <code>number</code> \uAC00 \uC544\uB2C8\uB77C \uAC12 \uC790\uCCB4\uB85C \uACE0\uC815\uB41C\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">double</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">double</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token function">double</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \uD0C0\uC785\uC774 12</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token function">double</span><span class="token punctuation">(</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \uD0C0\uC785\uC774 &quot;x&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p>\uC704\uC758 \uBB38\uC81C\uB4E4\uC744 \uD574\uACB0\uD558\uAE30 \uC704\uD574\uC11C \uC870\uAC74\uBD80 \uD0C0\uC785\uC744 \uC0AC\uC6A9\uD558\uBA74 \uB41C\uB2E4.<br> \uBC18\uD658 \uD0C0\uC785\uC5D0 \uC0BC\uD56D\uC5F0\uC0B0\uC790\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">double</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">string</span></span> <span class="token operator">?</span> <span class="token builtin">string</span> <span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">double</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[p];function c(l,i){return s(),a("div",null,o)}var u=n(e,[["render",c],["__file","03. \uD0C0\uC785 \uC120\uC5B8\uACFC @types.html.vue"]]);export{u as default};
