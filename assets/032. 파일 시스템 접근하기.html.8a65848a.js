import{e as n}from"./app.f43e426a.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";var t="/images/TIL/Node.js/buffer.jpg",s="/images/TIL/Node.js/buffer-example.png",e="/images/TIL/Node.js/stream.jpg";const p={},c=n(`<h1 id="_3-2-\u1111\u1161\u110B\u1175\u11AF-\u1109\u1175\u1109\u1173\u1110\u1166\u11B7-\u110C\u1165\u11B8\u1100\u1173\u11AB\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_3-2-\u1111\u1161\u110B\u1175\u11AF-\u1109\u1175\u1109\u1173\u1110\u1166\u11B7-\u110C\u1165\u11B8\u1100\u1173\u11AB\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 3-2. \uD30C\uC77C \uC2DC\uC2A4\uD15C \uC811\uADFC\uD558\uAE30</h1><h2 id="fs-\u1106\u1169\u1103\u1172\u11AF-\u1100\u1175\u110E\u1169" tabindex="-1"><a class="header-anchor" href="#fs-\u1106\u1169\u1103\u1172\u11AF-\u1100\u1175\u110E\u1169" aria-hidden="true">#</a> fs \uBAA8\uB4C8 \uAE30\uCD08</h2><p>fs\uB294 \uD30C\uC77C \uC2DC\uC2A4\uD15C\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uB294 \uBAA8\uB4C8\uC774\uB2E4. \uD30C\uC77C \uC0DD\uC131, \uC0AD\uC81C, \uC77D\uAE30, \uC4F0\uAE30 \uB4F1\uC744 \uD560 \uC218 \uC788\uB2E4.<br> \uAE30\uCD08\uC801\uC778 \uC0AC\uC6A9\uBC95\uC740 \uC544\uB798\uC640 \uAC19\uB2E4.</p><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">\uD30C\uC77C \uC77D\uAE30</th><th style="text-align:center;">\uD30C\uC77C \uC4F0\uAE30</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>\uB3D9\uAE30 \uBC29\uC2DD</strong></td><td style="text-align:center;">fs.readFileSync()</td><td style="text-align:center;">fs.writeFileSync()</td></tr><tr><td style="text-align:center;"><strong>\uBE44\uB3D9\uAE30 \uBC29\uC2DD</strong></td><td style="text-align:center;">fs.readFile()</td><td style="text-align:center;">fs.writeFile()</td></tr></tbody></table><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\uCF58\uC194\uC5D0\uC11C fs\uB97C \uC0AC\uC6A9\uD558\uB294 \uD30C\uC77C\uC744 \uC2E4\uD589\uD560 \uACBD\uC6B0, \uC0C1\uB300\uACBD\uB85C\uB97C \uC0AC\uC6A9\uD55C\uB2E4\uBA74 \uD604\uC7AC \uCF58\uC194 \uACBD\uB85C\uB97C \uAE30\uC900\uC73C\uB85C \uACBD\uB85C\uB97C \uD0D0\uC0C9\uD55C\uB2E4.</p></div><h3 id="\u1100\u1175\u110C\u1169\u11AB-\u1107\u1161\u11BC\u1109\u1175\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1100\u1175\u110C\u1169\u11AB-\u1107\u1161\u11BC\u1109\u1175\u11A8" aria-hidden="true">#</a> \uAE30\uC874 \uBC29\uC2DD</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&#39;./readme.txt&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Buffer\uAC00 \uCD9C\uB825\uB428</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \uC6D0\uD558\uB294 \uBB38\uC790\uC5F4\uC774 \uCD9C\uB825\uB428</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="promise-\u1107\u1161\u11BC\u1109\u1175\u11A8-promises" tabindex="-1"><a class="header-anchor" href="#promise-\u1107\u1161\u11BC\u1109\u1175\u11A8-promises" aria-hidden="true">#</a> Promise \uBC29\uC2DD (.promises)</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>promises<span class="token punctuation">;</span>

fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&#39;./readme.txt&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><br><h2 id="\u1107\u1165\u1111\u1165-\u1109\u1173\u1110\u1173\u1105\u1175\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1107\u1165\u1111\u1165-\u1109\u1173\u1110\u1173\u1105\u1175\u11B7" aria-hidden="true">#</a> \uBC84\uD37C &amp; \uC2A4\uD2B8\uB9BC</h2><h3 id="\u1107\u1165\u1111\u1165" tabindex="-1"><a class="header-anchor" href="#\u1107\u1165\u1111\u1165" aria-hidden="true">#</a> \uBC84\uD37C</h3><p><code>\uC804\uC1A1\uD560 \uB370\uC774\uD130\uB97C \uC77C\uC2DC\uC801\uC73C\uB85C \uC800\uC7A5\uD574\uB193\uB294 \uBA54\uBAA8\uB9AC \uACF5\uAC04</code>\uC774\uB2E4.<br> \uB370\uC774\uD130\uC758 \uD06C\uAE30\uB9CC\uD07C \uBA54\uBAA8\uB9AC\uC5D0 \uBC84\uD37C\uB97C \uC9C0\uC815\uD574\uC8FC\uACE0 \uAF49 \uCC3C\uC744 \uB54C \uD55C\uBC88\uC5D0 \uB370\uC774\uD130\uB97C \uC804\uC1A1\uD55C\uB2E4.<br> \uC774\uB807\uAC8C \uB370\uC774\uD130\uB97C \uBAA8\uC544\uC11C \uBCF4\uB0B4\uBA74 API \uD638\uCD9C \uD69F\uC218\uB97C \uC904\uC5EC\uC8FC\uBBC0\uB85C \uC785\uCD9C\uB825 \uC131\uB2A5\uC744 \uAC1C\uC120\uD574\uC900\uB2E4.<br><img src="`+t+'" alt="buffer"></p><p>\uC720\uD29C\uBE0C \uC601\uC0C1\uC744 \uBCF4\uBA74 \uBBF8\uB9AC \uB85C\uB529\uB418\uC5B4 \uC788\uB294\uAC78 \uBCFC \uC218 \uC788\uB294\uB370 \uC774\uAC83\uC774 \uBC84\uD37C\uB2E4.<br><img src="'+s+'" alt="buffer-example"></p><h3 id="\u1109\u1173\u1110\u1173\u1105\u1175\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1109\u1173\u1110\u1173\u1105\u1175\u11B7" aria-hidden="true">#</a> \uC2A4\uD2B8\uB9BC</h3><p><code>\uBC84\uD37C\uD06C\uAE30\uB97C \uC791\uAC8C \uB9CC\uB4E4\uC5B4 \uC5EC\uB7EC\uBC88\uC5D0 \uAC78\uCCD0\uC11C \uBCF4\uB0B4\uB294 \uD1B5\uB85C</code>\uB77C\uACE0 \uC0DD\uAC01\uD558\uBA74 \uB41C\uB2E4.<br> \uAE30\uC874\uC758 \uBC84\uD37C\uB294 \uB370\uC774\uD130\uC758 \uD06C\uAE30\uB9CC\uD07C \uBA54\uBAA8\uB9AC\uB97C \uC0AC\uC6A9\uD588\uC9C0\uB9CC,<br> \uC2A4\uD2B8\uB9BC\uC744 \uC774\uC6A9\uD558\uBA74 \uBC84\uD37C\uB97C \uD06C\uAE30\uB97C \uC904\uC774\uACE0 \uC5EC\uB7EC\uBC88\uC5D0 \uAC78\uCCD0 \uC9C0\uC18D\uC801\uC73C\uB85C \uBC84\uD37C\uB97C \uC804\uC1A1\uD574\uC8FC\uB294 \uC791\uC5C5\uC744 \uD574\uC900\uB2E4. \uC2A4\uD2B8\uB9BC\uC744 \uD1B5\uD574 \uB370\uC774\uD130\uB97C \uB098\uB220\uC11C \uBCF4\uB0C4\uC73C\uB85C\uC368 \uBA54\uBAA8\uB9AC\uC758 \uBD80\uB2F4\uC744 \uB35C\uC5B4\uC900\uB2E4.<br><img src="'+e+'" alt="stream"></p><h2 id="\u1100\u1175\u1110\u1161-fs-\u1106\u1166\u1109\u1165\u1103\u1173\u1103\u1173\u11AF" tabindex="-1"><a class="header-anchor" href="#\u1100\u1175\u1110\u1161-fs-\u1106\u1166\u1109\u1165\u1103\u1173\u1103\u1173\u11AF" aria-hidden="true">#</a> \uAE30\uD0C0 fs \uBA54\uC11C\uB4DC\uB4E4</h2><h3 id="\u1111\u1161\u110B\u1175\u11AF-\u110C\u1165\u11B8\u1100\u1173\u11AB-\u110B\u1175\u1103\u1169\u11BC-\u1109\u1162\u11BC\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1111\u1161\u110B\u1175\u11AF-\u110C\u1165\u11B8\u1100\u1173\u11AB-\u110B\u1175\u1103\u1169\u11BC-\u1109\u1162\u11BC\u1109\u1165\u11BC" aria-hidden="true">#</a> \uD30C\uC77C \uC811\uADFC, \uC774\uB3D9, \uC0DD\uC131</h3><table><thead><tr><th style="text-align:center;">\uBA54\uC11C\uB4DC\uBA85</th><th style="text-align:center;">\uC124\uBA85</th></tr></thead><tbody><tr><td style="text-align:center;">fs.access(\uACBD\uB85C, \uC635\uC158, \uCF5C\uBC31)</td><td style="text-align:center;">\uD3F4\uB354\uB098 \uD30C\uC77C\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uB294\uC9C0 \uCCB4\uD06C\uD568.<br><code>F_OK</code>, <code>R_OK</code>, <code>W_OK</code>\uB85C \uB9AC\uD134\uB428.<br>\uC5D0\uB7EC\uB294 <code>ENOENT</code> \uB9AC\uD134</td></tr><tr><td style="text-align:center;">fs.mkdir(\uACBD\uB85C, \uCF5C\uBC31)</td><td style="text-align:center;">\uD3F4\uB354\uB97C \uB9CC\uB4E4\uC5B4 \uC90C</td></tr><tr><td style="text-align:center;">fs.open(\uACBD\uB85C, \uC635\uC158, \uCF5C\uBC31)</td><td style="text-align:center;">\uD30C\uC77C\uC758 \uC544\uC774\uB514\uB97C \uAC00\uC838\uC634<br> \uD30C\uC77C\uC774 \uC5C6\uB2E4\uBA74 \uC0DD\uC131\uD55C \uB4A4 \uAC00\uC838\uC634<br>\uB123\uC744 \uC218 \uC788\uB294 \uC635\uC158 : <code>w</code>, <code>r</code>, <code>a</code><br>(write, read, add)</td></tr><tr><td style="text-align:center;">fs.rename(\uAE30\uC874\uACBD\uB85C, \uC0C8\uACBD\uB85C, \uCF5C\uBC31)</td><td style="text-align:center;">\uD30C\uC77C\uC758 \uC774\uB984\uACFC \uC704\uCE58\uB97C \uBC14\uAFD4\uC904 \uC218 \uC788\uC74C</td></tr></tbody></table><h3 id="\u1111\u1169\u11AF\u1103\u1165-\u1102\u1162\u110B\u116D\u11BC-\u1112\u116A\u11A8\u110B\u1175\u11AB-\u1106\u1175\u11BE-\u1109\u1161\u11A8\u110C\u1166" tabindex="-1"><a class="header-anchor" href="#\u1111\u1169\u11AF\u1103\u1165-\u1102\u1162\u110B\u116D\u11BC-\u1112\u116A\u11A8\u110B\u1175\u11AB-\u1106\u1175\u11BE-\u1109\u1161\u11A8\u110C\u1166" aria-hidden="true">#</a> \uD3F4\uB354 \uB0B4\uC6A9 \uD655\uC778 \uBC0F \uC0AD\uC81C</h3><table><thead><tr><th style="text-align:center;">\uBA54\uC11C\uB4DC\uBA85</th><th style="text-align:center;">\uC124\uBA85</th></tr></thead><tbody><tr><td style="text-align:center;">fs.readdir(\uACBD\uB85C, \uCF5C\uBC31)</td><td style="text-align:center;">\uD3F4\uB354 \uC548\uC758 \uB0B4\uC6A9\uBB3C\uC744 \uD655\uC778</td></tr><tr><td style="text-align:center;">fs.unlink(\uACBD\uB85C, \uCF5C\uBC31)</td><td style="text-align:center;">\uD30C\uC77C\uC744 \uC9C0\uC6CC\uC90C</td></tr><tr><td style="text-align:center;">fs.rmdir(\uACBD\uB85C, \uCF5C\uBC31)</td><td style="text-align:center;">\uD3F4\uB354\uB97C \uC9C0\uC6CC\uC90C</td></tr></tbody></table><h3 id="\u1111\u1161\u110B\u1175\u11AF-\u1107\u1169\u11A8\u1109\u1161-\u1106\u1175\u11BE-\u1111\u1161\u110B\u1175\u11AF-\u1111\u1169\u11AF\u1103\u1165\u110B\u1174-\u1107\u1167\u11AB\u1100\u1167\u11BC\u1109\u1161\u1112\u1161\u11BC-\u1100\u1161\u11B7\u1109\u1175" tabindex="-1"><a class="header-anchor" href="#\u1111\u1161\u110B\u1175\u11AF-\u1107\u1169\u11A8\u1109\u1161-\u1106\u1175\u11BE-\u1111\u1161\u110B\u1175\u11AF-\u1111\u1169\u11AF\u1103\u1165\u110B\u1174-\u1107\u1167\u11AB\u1100\u1167\u11BC\u1109\u1161\u1112\u1161\u11BC-\u1100\u1161\u11B7\u1109\u1175" aria-hidden="true">#</a> \uD30C\uC77C \uBCF5\uC0AC \uBC0F \uD30C\uC77C/\uD3F4\uB354\uC758 \uBCC0\uACBD\uC0AC\uD56D \uAC10\uC2DC</h3><table><thead><tr><th style="text-align:center;">\uBA54\uC11C\uB4DC\uBA85</th><th style="text-align:center;">\uC124\uBA85</th></tr></thead><tbody><tr><td style="text-align:center;">fs.copyFile(\uBCF5\uC0AC\uD560 \uD30C\uC77C, \uBCF5\uC0AC\uB420 \uACBD\uB85C, \uCF5C\uBC31)</td><td style="text-align:center;">\uD30C\uC77C\uC744 \uBCF5\uC0AC\uD568</td></tr><tr><td style="text-align:center;">fs.watch(\uACBD\uB85C, \uCF5C\uBC31)</td><td style="text-align:center;">\uD30C\uC77C \uBCC0\uACBD \uC2DC \uCF5C\uBC31 \uC2E4\uD589</td></tr></tbody></table>',23);function r(o,l){return c}var u=a(p,[["render",r]]);export{u as default};
