import{e as n}from"./app.28e06276.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="_11\u110C\u1161\u11BC-\u110B\u116F\u11AB\u1109\u1175\u1100\u1161\u11B9\u1100\u116A-\u1100\u1162\u11A8\u110E\u1166\u110B\u1174-\u1107\u1175\u1100\u116D" tabindex="-1"><a class="header-anchor" href="#_11\u110C\u1161\u11BC-\u110B\u116F\u11AB\u1109\u1175\u1100\u1161\u11B9\u1100\u116A-\u1100\u1162\u11A8\u110E\u1166\u110B\u1174-\u1107\u1175\u1100\u116D" aria-hidden="true">#</a> 11\uC7A5. \uC6D0\uC2DC\uAC12\uACFC \uAC1D\uCCB4\uC758 \uBE44\uAD50</h1><ul><li><p>\uC6D0\uC2DC\uAC12\uC744 \uBCC0\uC218\uC5D0 \uD560\uB2F9 \u21D2 <strong>\uC2E4\uC81C \uAC12</strong>\uC774 \uC800\uC7A5\uB428(immutable)</p></li><li><p>\uAC1D\uCCB4\uB97C \uBCC0\uC218\uC5D0 \uD560\uB2F9 \u21D2 <strong>\uCC38\uC870</strong> <strong>\uAC12</strong>\uC774 \uC800\uC7A5\uB428(mutable)</p></li><li><p>\uC0C1\uC218 : \uC7AC\uD560\uB2F9\uC774 \uAE08\uC9C0\uB41C \uBCC0\uC218</p></li><li><p>\uAC1D\uCCB4 : const\uB85C \uC120\uC5B8\uD574\uB3C4 \uB0B4\uBD80\uC758 \uAC12\uC740 \uBCC0\uACBD\uD560 \uC218 \uC788\uB2E4.</p></li><li><p>\uC6D0\uC2DC\uAC12\uC744 \uBCC0\uACBD\uD560 \uACBD\uC6B0 \u2192 \uC0C8\uB85C\uC6B4 \uBA54\uBAA8\uB9AC \uACF5\uAC04\uC744 \uCC38\uC870\uD55C\uB2E4.</p></li></ul><h2 id="\u110B\u1172\u1109\u1161-\u1107\u1162\u110B\u1167\u11AF-\u1100\u1162\u11A8\u110E\u1166" tabindex="-1"><a class="header-anchor" href="#\u110B\u1172\u1109\u1161-\u1107\u1162\u110B\u1167\u11AF-\u1100\u1162\u11A8\u110E\u1166" aria-hidden="true">#</a> \uC720\uC0AC \uBC30\uC5F4 \uAC1D\uCCB4</h2><p>\uB9C8\uCE58 \uBC30\uC5F4\uCC98\uB7FC \uC778\uB371\uC2A4\uB85C \uD504\uB85C\uD37C\uD2F0 \uAC12\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uACE0 length \uD504\uB85C\uD37C\uD2F0\uB97C \uAC16\uB294 \uAC1D\uCCB4\uB97C \uB9D0\uD55C\uB2E4.</p><p>for \uBB38\uC73C\uB85C \uC21C\uD68C\uD560 \uC218\uB3C4 \uC788\uB2E4.</p><ul><li>\uC6D0\uC2DC \uAC12\uC744 \uAC1D\uCCB4\uCC98\uB7FC \uC0AC\uC6A9\uD558\uBA74 \uC6D0\uC2DC \uAC12\uC744 \uAC10\uC2F8\uB294 \uB798\uD37C \uAC1D\uCCB4\uB85C \uC790\uB3D9 \uBCC0\uD658\uB41C\uB2E4.</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// \uBB38\uC790\uC5F4\uC744 \uC608\uB85C \uB4E4\uC790\uBA74</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \uBC30\uC5F4\uCC98\uB7FC \uC811\uADFC\uD560 \uC218 \uC788\uB2E4.</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \uAC1D\uCCB4\uCC98\uB7FC .length\uAC00 \uAC00\uB2A5\uD558\uB2E4.</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u1106\u116E\u11AB\u110C\u1161\u110B\u1167\u11AF" tabindex="-1"><a class="header-anchor" href="#\u1106\u116E\u11AB\u110C\u1161\u110B\u1167\u11AF" aria-hidden="true">#</a> \uBB38\uC790\uC5F4</h2><p>\uC720\uC0AC\uBC30\uC5F4 \uAC1D\uCCB4\uC774\uBA74\uC11C \uC774\uD130\uB7EC\uBE14\uC774\uBBC0\uB85C \uBC30\uC5F4\uACFC \uC720\uC0AC\uD558\uAC8C \uAC01 \uBB38\uC790\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uB2E4.</p><p><strong>\uBB38\uC790\uC5F4\uC744 \uBCC0\uACBD\uD558\uB294\uAC83\uC740 \uC548\uB418\uC9C0\uB9CC \uC0C8 \uBB38\uC790\uC5F4\uC744 \uC7AC\uD560\uB2F9\uD558\uB294\uAC83\uC740 \uAC00\uB2A5\uD558\uB2E4.</strong></p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \uC6D0\uC2DC\uAC12\uC774\uBBC0\uB85C \uBCC0\uACBD\uC774 \uBD88\uAC00\uB2A5\uD558\uB2E4. \uD558\uC9C0\uB9CC \uC5D0\uB7EC\uB294 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uB294\uB2E4.</span>
str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;S&#39;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;string&quot;</span>

str <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;hello&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="call-by-sharing-\u1100\u1169\u11BC\u110B\u1172\u110B\u1166-\u110B\u1174\u1112\u1161\u11AB-\u110C\u1165\u11AB\u1103\u1161\u11AF" tabindex="-1"><a class="header-anchor" href="#call-by-sharing-\u1100\u1169\u11BC\u110B\u1172\u110B\u1166-\u110B\u1174\u1112\u1161\u11AB-\u110C\u1165\u11AB\u1103\u1161\u11AF" aria-hidden="true">#</a> Call By Sharing (= \uACF5\uC720\uC5D0 \uC758\uD55C \uC804\uB2EC)</h2><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">var</span> score <span class="token operator">=</span> <span class="token number">80</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> copy <span class="token operator">=</span> score<span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 80</span>
consoel<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>copy<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 80</span>

score <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 100</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>copy<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 80</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uB294 call by value, call by reference\uAC00 \uC544\uB2CC call by sharing\uC774\uB2E4.</p><p>call by value\uC640 \uAC19\uC774 \uAC12\uC744 \uBCF5\uC0AC\uD558\uB294\uAC83\uCC98\uB7FC \uBCF4\uC774\uC9C0\uB9CC, \uC0AC\uC2E4\uC740 \uBA54\uBAA8\uB9AC\uB97C \uCC38\uC870\uD574\uC11C \uBCF5\uC0AC\uD55C\uB2E4.</p><p>\uAC12\uC744 \uBCF5\uC0AC\uD558\uB294 \uAC83\uC774 \uC544\uB2CC <strong>\uCC38\uC870\uAC12\uC758 \uBCF5\uC0AC\uBCF8</strong>\uC744 \uB9CC\uB4E4\uC5B4\uC11C \uB118\uAE30\uB294 \uAC83\uC774\uB2E4.</p><h2 id="\u1100\u1162\u11A8\u110E\u1166" tabindex="-1"><a class="header-anchor" href="#\u1100\u1162\u11A8\u110E\u1166" aria-hidden="true">#</a> \uAC1D\uCCB4</h2><ul><li>\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uB294 \uD074\uB798\uC2A4 \uC5C6\uC774 \uAC1D\uCCB4\uB97C \uC0DD\uC131\uD560 \uC218 \uC788\uB2E4.</li><li>\uB3D9\uC801\uC73C\uB85C \uD504\uB85C\uD37C\uD2F0\uC640 \uBA54\uC11C\uB4DC\uB97C \uCD94\uAC00\uD560 \uC218 \uC788\uB2E4.</li><li>\uAC1D\uCCB4\uB294 \uC6D0\uC2DC\uAC12\uACFC \uB2EC\uB9AC \uCC38\uC870\uAC12\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uB2E4. \uADF8\uB807\uAE30\uC5D0 \uC0C1\uC218\uB85C \uC120\uC5B8\uD558\uB354\uB77C\uB3C4 \uCC38\uC870\uAC12(\uBA54\uBAA8\uB9AC\uC8FC\uC18C)\uB9CC \uBC14\uAFC0\uC218 \uC5C6\uC744 \uBFD0, \uB0B4\uBD80 \uD504\uB85C\uD37C\uD2F0\uB4E4\uC740 \uC218\uC815\uC774 \uAC00\uB2A5\uD558\uB2E4.</li></ul><h2 id="\u110B\u1163\u11C0\u110B\u1173\u11AB\u1107\u1169\u11A8\u1109\u1161-\u1100\u1175\u11C1\u110B\u1173\u11AB\u1107\u1169\u11A8\u1109\u1161" tabindex="-1"><a class="header-anchor" href="#\u110B\u1163\u11C0\u110B\u1173\u11AB\u1107\u1169\u11A8\u1109\u1161-\u1100\u1175\u11C1\u110B\u1173\u11AB\u1107\u1169\u11A8\u1109\u1161" aria-hidden="true">#</a> \uC595\uC740\uBCF5\uC0AC, \uAE4A\uC740\uBCF5\uC0AC</h2><ul><li>\uC595\uC740\uBCF5\uC0AC : \uAC1D\uCCB4\uC5D0 \uC911\uCCA9\uB418\uC5B4 \uC788\uB294 \uAC1D\uCCB4\uC758 \uACBD\uC6B0 \uCC38\uC870\uAC12\uC744 \uBCF5\uC0AC\uD55C\uB2E4.</li><li>\uAE4A\uC740\uBCF5\uC0AC : \uC911\uCCA9\uB418\uC5B4 \uC788\uB294 \uAC1D\uCCB4\uAE4C\uC9C0 \uBAA8\uB450 \uBCF5\uC0AC\uD574\uC11C \uC6D0\uC2DC\uAC12\uCC98\uB7FC \uC644\uC804\uD55C \uBCF5\uC0AC\uBCF8\uC744 \uB9CC\uB4E0\uB2E4.</li></ul><p>\uAC1D\uCCB4\uB97C \uD560\uB2F9\uD55C \uBCC0\uC218\uB97C \uB2E4\uB978 \uBCC0\uC218\uC5D0 \uD560\uB2F9\uD558\uB294 \uAC83 \u2192 \uC595\uC740 \uBCF5\uC0AC</p><p>\uC6D0\uC2DC\uAC12\uC744 \uD560\uB2F9\uD55C \uBCC0\uC218\uB97C \uB2E4\uB978 \uBCC0\uC218\uC5D0 \uD560\uB2F9\uD558\uB294 \uAC83 \u2192 \uAE4A\uC740 \uBCF5\uC0AC</p>`,22);function e(t,o){return p}var u=s(a,[["render",e]]);export{u as default};
