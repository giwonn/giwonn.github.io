import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as r,e as n}from"./app.404da4f0.js";const d={},a=n(`<h1 id="proxy\u110B\u116A-reflect" tabindex="-1"><a class="header-anchor" href="#proxy\u110B\u116A-reflect" aria-hidden="true">#</a> Proxy\uC640 Reflect</h1><p>\uAC1C\uC778\uC801\uC73C\uB85C \uC870\uADF8\uB9CC\uD55C \uD504\uB85C\uC81D\uD2B8\uB97C \uD558\uACE0 \uC788\uB294\uB370, api\uB97C \uC774\uC6A9\uD574 \uC678\uBD80\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uAC00\uC838\uC624\uB294 \uC791\uC5C5\uC744 \uD588\uC5C8\uB2E4.<br> \uADF8\uB7F0\uB370 <code>response</code>\uAC00 <code>Proxy</code>\uB77C\uB294 \uAC1D\uCCB4\uB85C \uB4E4\uC5B4\uC624\uACE0 <code>[[target]]</code>\uC774\uB77C\uB294 \uD504\uB85C\uD37C\uD2F0 \uB0B4\uBD80\uC5D0 \uC6D0\uD558\uB294 \uB370\uC774\uD130\uAC00 \uB4E4\uC5B4\uC788\uC5C8\uB2E4.<br> \uADF8 \uB2F9\uC2DC\uC5D0\uB294 \uBCC0\uC218 \uB4A4\uC5D0 target\uC744 \uBD99\uC5EC\uC11C \uB370\uC774\uD130\uB97C \uAC00\uC838\uC640\uC11C \uC0AC\uC6A9\uD588\uC5C8\uB294\uB370 \uAD81\uAE08\uC99D\uC740 \uD574\uACB0\uD558\uB294\uAC8C \uB9DE\uAE30\uC5D0... \uC815\uB9AC\uD574\uBCF4\uC558\uB2E4.</p><h2 id="proxy-\u1105\u1161\u11AB" tabindex="-1"><a class="header-anchor" href="#proxy-\u1105\u1161\u11AB" aria-hidden="true">#</a> Proxy \uB780?</h2><p><code>Proxy</code>\uB294 \uD2B9\uC815 \uAC1D\uCCB4\uB97C \uAC10\uC2F8 \uD504\uB85C\uD37C\uD2F0 \uC77D\uAE30, \uC4F0\uAE30\uC640 \uAC19\uC740 <strong>\uAC1D\uCCB4\uC5D0 \uAC00\uD574\uC9C0\uB294 \uC791\uC5C5\uC744 \uC911\uAC04\uC5D0\uC11C \uAC00\uB85C\uCC44\uB294 \uAC1D\uCCB4</strong>\uC774\uB2E4. Proxy\uB294 \uD574\uB2F9 \uAC1D\uCCB4\uAC00 \uCC98\uB9AC\uD558\uB294 \uD2B9\uC815 \uBA85\uB839\uC744 \uC7AC\uC815\uC758\uD560 \uC218 \uC788\uAC8C \uB418\uB294 \uAC83\uC774\uB2E4.</p><h3 id="\u1106\u116E\u11AB\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#\u1106\u116E\u11AB\u1107\u1165\u11B8" aria-hidden="true">#</a> \uBB38\uBC95</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>let proxy = new Proxy(target, handler);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>target</code> - Proxy\uB85C \uAC10\uC300 \uAC1D\uCCB4</li><li><code>handler</code> - \uB3D9\uC791\uC744 \uAC00\uB85C\uCC44\uB294 \uBA54\uC11C\uB4DC\uC778 <code>trap</code>\uC774 \uB2F4\uAE34 \uAC1D\uCCB4\uB85C, \uC5EC\uAE30\uC11C \uBA85\uB839\uC744 \uC7AC\uC815\uC758\uD55C\uB2E4.</li></ul><br><p>\uC544\uB798 \uCF54\uB4DC\uB294 \uBCC4\uB2E4\uB978 \uAE30\uB2A5\uC774 \uC5C6\uB294 \uAE30\uBCF8\uC801\uC778 \uD504\uB85D\uC2DC \uAC1D\uCCB4\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>let proxy = new Proxy({}, {});
console.log(proxy);
/*
Proxy {}
  &gt; [[Handler]]: Object
  &gt; [[Target]]: Object
  &gt; [[IsRevoked]]: false
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p>\uC8FC\uC758\uD560 \uC810\uC740 <strong>\uD55C \uBC88 \uC138\uD305\uB41C \uD504\uB85D\uC2DC \uAC1D\uCCB4\uC758 \uB300\uC0C1 \uAC1D\uCCB4\uB294 \uBCC0\uACBD\uD560 \uC218 \uC5C6\uB2E4</strong>.<br> \uB9CC\uC57D \uAC1D\uCCB4\uB97C \uBCC0\uACBD\uC2DC\uD0A4\uACE0 \uC2F6\uB2E4\uBA74 \uC544\uB798\uC640 \uAC19\uC774 \uD504\uB85D\uC2DC \uAC1D\uCCB4\uB97C \uD1B5\uD574 \uBCC0\uACBD\uD574\uC57C \uD55C\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>let abc = {};
let proxy = new Proxy(abc, {});

proxy.test = 5;  // proxy\uB97C \uBCC0\uACBD\uD574\uC8FC\uBA74
console.log(abc.test); // 5    (target\uC774 \uBCC0\uACBD\uB41C\uB2E4!)
console.log(proxy.test); // 5  (proxy\uB97C \uC0AC\uC6A9\uD574 \uAC12\uC744 \uC77D\uC744 \uC218\uB3C4 \uC788\uB2E4)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704\uC5D0\uC11C <code>proxy.test = 5</code>\uB97C \uD588\uC744 \uB54C <code>5</code>\uAC00 \uADF8\uB300\uB85C <code>target</code>\uC5D0 \uC804\uB2EC\uB410\uB2E4.<br> \uC774\uB294 <code>handler</code>\uC5D0 \uC5B4\uB5A0\uD55C <code>\uD2B8\uB7A9</code>\uB3C4 \uC124\uC815\uD558\uC9C0 \uC54A\uC558\uAE30 \uB54C\uBB38\uC774\uB2E4.</p><br><h3 id="trap-\u1110\u1173\u1105\u1162\u11B8" tabindex="-1"><a class="header-anchor" href="#trap-\u1110\u1173\u1105\u1162\u11B8" aria-hidden="true">#</a> trap(\uD2B8\uB7A9)</h3><p>\uD2B8\uB7A9\uC744 \uC124\uBA85\uD558\uAE30 \uC804\uC5D0, Javascript\uC5D0\uC11C \uAC1D\uCCB4\uC5D0 \uC5B4\uB5A4 \uC791\uC5C5\uC744 \uD560 \uB54C\uC5D0\uB294 Javascript \uBA85\uC138\uC11C\uC5D0 \uC815\uC758\uB41C <code>\uB0B4\uBD80 \uBA54\uC11C\uB4DC</code>\uAC00 \uAE4A\uC219\uD55C \uACF3\uC5D0\uC11C \uAD00\uC5EC\uD55C\uB2E4.</p><p>\uC608\uB97C \uB4E4\uC790\uBA74, \uD504\uB85C\uD37C\uD2F0\uB97C \uC77D\uC744 \uB550 <code>[[Get]]</code>, \uC4F8 \uB550 <code>[[Set]]</code>\uC774\uB77C\uB294 \uB0B4\uBD80 \uBA54\uC11C\uB4DC\uAC00 \uAD00\uC5EC\uD55C\uB2E4.<br> \uC774\uB7EC\uD55C \uB0B4\uBD80 \uBA54\uC11C\uB4DC\uC758 \uD638\uCD9C\uC744 \uD504\uB85D\uC2DC\uAC00 \uAC00\uB85C\uCC48\uB2E4. \uADF8\uB9AC\uACE0 \uAC00\uB85C\uCC48 \uBA54\uC11C\uB4DC\uB4E4\uC744 \uD578\uB4E4\uB9C1\uD558\uAE30 \uC704\uD574\uC11C \uB0B4\uBD80 \uBA54\uC11C\uB4DC\uC5D0 \uB300\uC751\uD558\uB294 \uD2B8\uB7A9\uB4E4\uC774 \uC788\uB2E4.</p><p>\uAE30\uBCF8\uC801\uC778 \uD2B8\uB7A9 \uCD94\uAC00 \uBC29\uBC95\uC740 \uC544\uB798\uC640 \uAC19\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const target = { name: &#39;target&#39; };
const test = new Proxy(target, {
    get: () =&gt; console.log(&#39;\uAC1D\uCCB4 \uC77D\uC5C8\uC74C&#39;);
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Spring\uC744 \uD574 \uBCF8 \uC0AC\uB78C\uC740 \uBB54\uAC00 \uC775\uC219\uD568\uC744 \uB290\uB084\uD150\uB370, \uB098\uB294 \uD504\uB85D\uC2DC\uAC00 Spring\uC5D0 AOP\uC640 \uAD49\uC7A5\uD788 \uC720\uC0AC\uD558\uB2E4\uACE0 \uB290\uAF08\uB2E4.<br> (\uC54C\uACE0\uBCF4\uB2C8 <u>Spring AOP\uAC00 \uD504\uB85D\uC2DC \uD328\uD134\uC744 \uC774\uC6A9\uD574\uC11C \uAD6C\uD604</u>\uB41C\uAC70\uB77C\uACE0 \uD55C\uB2E4.)</p><p>\uB9CC\uC57D \uAC19\uC740 \uD2B8\uB7A9\uC774 \uC911\uBCF5 \uC120\uC5B8\uB418\uBA74 \uB9C8\uC9C0\uB9C9\uC774 \uC120\uC5B8\uB41C \uD2B8\uB7A9\uB9CC \uC801\uC6A9\uB41C\uB2E4.</p><h3 id="\u1111\u1168\u1100\u1175-\u1100\u1161\u1102\u1173\u11BC\u1112\u1161\u11AB-\u1111\u1173\u1105\u1169\u11A8\u1109\u1175-\u1100\u1162\u11A8\u110E\u1166" tabindex="-1"><a class="header-anchor" href="#\u1111\u1168\u1100\u1175-\u1100\u1161\u1102\u1173\u11BC\u1112\u1161\u11AB-\u1111\u1173\u1105\u1169\u11A8\u1109\u1175-\u1100\u1162\u11A8\u110E\u1166" aria-hidden="true">#</a> \uD3D0\uAE30 \uAC00\uB2A5\uD55C \uD504\uB85D\uC2DC \uAC1D\uCCB4</h3><p>\uC0DD\uC131\uC790\uB85C \uB9CC\uB4E4\uC5B4\uC9C4 \uD504\uB85D\uC2DC \uAC1D\uCCB4\uB294 Garbage Collection\uC5D0\uC11C \uC9C0\uC6CC\uC9C0\uAC70\uB098 \uC7AC\uC0AC\uC6A9\uC774 \uBD88\uAC00\uB2A5\uD558\uB2E4.<br> \uB530\uB77C\uC11C \uD544\uC694\uC5D0 \uB530\uB77C \uD3D0\uAE30 \uAC00\uB2A5\uD55C \uD504\uB85D\uC2DC \uAC1D\uCCB4(<strong>revocable proxy</strong>)\uB97C \uB9CC\uB4E4 \uC218\uB3C4 \uC788\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const revocable = Proxy.revocable({}, {});
console.log(revocable); // {proxy: Proxy, revoke: f}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uB807\uAC8C \uC0DD\uC131\uB41C Proxy \uAC1D\uCCB4\uC758 revoke\uB97C \uD638\uCD9C\uC2DC\uD0A4\uBA74 \uD504\uB85D\uC2DC \uAC1D\uCCB4\uAC00 \uD3D0\uAE30\uB418\uBA70 GC\uC5D0 \uC758\uD574 \uC218\uAC70\uB41C\uB2E4.</p><br><h3 id="\u1110\u1173\u1105\u1162\u11B8\u110B\u1166\u1109\u1165-\u1109\u1161\u110B\u116D\u11BC\u1103\u116C\u1102\u1173\u11AB-\u1106\u1166\u1109\u1165\u1103\u1173-\u1106\u1169\u11A8\u1105\u1169\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1110\u1173\u1105\u1162\u11B8\u110B\u1166\u1109\u1165-\u1109\u1161\u110B\u116D\u11BC\u1103\u116C\u1102\u1173\u11AB-\u1106\u1166\u1109\u1165\u1103\u1173-\u1106\u1169\u11A8\u1105\u1169\u11A8" aria-hidden="true">#</a> \uD2B8\uB7A9\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uBA54\uC11C\uB4DC \uBAA9\uB85D</h3><p>\uCC38\uACE0: <a href="https://ko.javascript.info/proxy" target="_blank" rel="noopener noreferrer">https://ko.javascript.info/proxy</a></p><table><thead><tr><th style="text-align:center;">\uB0B4\uBD80 \uBA54\uC11C\uB4DC</th><th style="text-align:center;">\uD578\uB4E4\uB7EC \uBA54\uC11C\uB4DC</th><th style="text-align:center;">\uC791\uB3D9 \uC2DC\uC810</th></tr></thead><tbody><tr><td style="text-align:center;"><code>[[Get]]</code></td><td style="text-align:center;"><code>get</code></td><td style="text-align:center;">\uD504\uB85C\uD37C\uD2F0\uB97C \uC77D\uC744 \uB54C</td></tr><tr><td style="text-align:center;"><code>[[Set]]]</code></td><td style="text-align:center;"><code>set</code></td><td style="text-align:center;">\uD504\uB85C\uD37C\uD2F0\uC5D0 \uC4F8 \uB54C</td></tr><tr><td style="text-align:center;"><code>[[HasProperty]]</code></td><td style="text-align:center;"><code>has</code></td><td style="text-align:center;"><code>in</code> \uC5F0\uC0B0\uC790\uAC00 \uB3D9\uC791\uD560 \uB54C</td></tr><tr><td style="text-align:center;"><code>[[Delete]]</code></td><td style="text-align:center;"><code>deleteProperty</code></td><td style="text-align:center;"><code>delete</code> \uC5F0\uC0B0\uC790\uAC00 \uB3D9\uC791\uD560 \uB54C</td></tr><tr><td style="text-align:center;"><code>[[Call]]</code></td><td style="text-align:center;"><code>apply</code></td><td style="text-align:center;">\uD568\uC218\uB97C \uD638\uCD9C\uD560 \uB54C</td></tr><tr><td style="text-align:center;"><code>[[Construct]]</code></td><td style="text-align:center;"><code>construct</code></td><td style="text-align:center;"><code>new</code> \uC5F0\uC0B0\uC790\uAC00 \uB3D9\uC791\uD560 \uB54C</td></tr><tr><td style="text-align:center;"><code>[[GetPrototypeOf]]</code></td><td style="text-align:center;"><code>getPrototypeOf</code></td><td style="text-align:center;"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf" target="_blank" rel="noopener noreferrer">Object.getPrototypeOf</a></td></tr><tr><td style="text-align:center;"><code>[[SetPrototypeOf]]</code></td><td style="text-align:center;"><code>setPrototypeOf</code></td><td style="text-align:center;"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf" target="_blank" rel="noopener noreferrer">Object.setPrototypeOf</a></td></tr><tr><td style="text-align:center;"><code>[[IsExtensible]]</code></td><td style="text-align:center;"><code>isExtensible</code></td><td style="text-align:center;"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible" target="_blank" rel="noopener noreferrer">Object.isExtensible</a></td></tr><tr><td style="text-align:center;"><code>[[PreventExtensions]]</code></td><td style="text-align:center;"><code>preventExtensions</code></td><td style="text-align:center;"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions" target="_blank" rel="noopener noreferrer">Object.preventExtensions</a></td></tr><tr><td style="text-align:center;"><code>[[DefineOwnProperty]]</code></td><td style="text-align:center;"><code>defineProperty</code></td><td style="text-align:center;"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" target="_blank" rel="noopener noreferrer">Object.defineProperty</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties" target="_blank" rel="noopener noreferrer">Object.defineProperties</a></td></tr><tr><td style="text-align:center;"><code>[[GetOwnProperty]]</code></td><td style="text-align:center;"><code>getOwnPropertyDescriptor</code></td><td style="text-align:center;"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor" target="_blank" rel="noopener noreferrer">Object.getOwnPropertyDescriptor</a>, <br><code>for..in</code>, <br><code>Object.keys/values/entries</code></td></tr><tr><td style="text-align:center;"><code>[[OwnPropertyKeys]]</code></td><td style="text-align:center;"><code>ownKeys</code></td><td style="text-align:center;"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames" target="_blank" rel="noopener noreferrer">Object.getOwnPropertyNames</a>,<br><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols" target="_blank" rel="noopener noreferrer">Object.getOwnPropertySymbols</a>, <br><code>for..in</code>, <br><code>Object/keys/values/entries</code></td></tr></tbody></table><p>:::tip \uADDC\uCE59 \uD2B8\uB7A9\uC744 \uC4F8 \uB550 Javascript\uC5D0\uC11C \uC815\uD55C \uBA87\uAC00\uC9C0 \uADDC\uCE59\uC744 \uB530\uB77C\uC57C \uD55C\uB2E4.</p><ul><li><code>[[Set]]</code>\uC774 \uC131\uACF5\uD558\uBA74 true\uB97C, \uC2E4\uD328\uD558\uBA74 false\uB97C <strong>\uBC18\uB4DC\uC2DC</strong> \uBC18\uD658\uD574\uC57C\uD55C\uB2E4.</li><li><code>[[Delete]]</code>\uAC00 \uC131\uACF5\uC801\uC73C\uB85C \uCC98\uB9AC\uB418\uC5C8\uC73C\uBA74 true, \uC2E4\uD328\uD558\uBA74 false\uB97C <strong>\uBC18\uB4DC\uC2DC</strong> \uBC18\uD658\uD574\uC57C\uD55C\uB2E4.</li><li>\uAE30\uD0C0 \uB4F1\uB4F1 \uB2E4\uB978 \uC870\uAC74\uC740 <a href="https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots" target="_blank" rel="noopener noreferrer">\uBA85\uC138\uC11C</a>\uB97C \uD655\uC778\uD558\uC790. ::: <br></li></ul><h3 id="proxy-\u1109\u1161\u110B\u116D\u11BC-\u110C\u116E\u110B\u1174\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#proxy-\u1109\u1161\u110B\u116D\u11BC-\u110C\u116E\u110B\u1174\u110C\u1165\u11B7" aria-hidden="true">#</a> Proxy \uC0AC\uC6A9 \uC8FC\uC758\uC810</h3><p>:::danger \uC8FC\uC758 <code>Proxy</code> \uAC1D\uCCB4\uB294 <code>target</code> \uAC1D\uCCB4\uB97C \uB36E\uC5B4\uC50C\uC6B4\uB2E4.</p><p><strong>\uD504\uB85D\uC2DC \uAC1D\uCCB4\uB97C \uC120\uC5B8\uD558\uACE0 \uB098\uC11C <code>target</code> \uAC1D\uCCB4\uB97C \uCC38\uC870\uD558\uB294 \uCF54\uB4DC\uAC00 \uC5C6\uC5B4\uC57C \uD55C\uB2E4.</strong><br> (\uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uD504\uB85C\uADF8\uB7A8\uC774 \uC5C9\uB9DD\uC774 \uB420 \uD655\uB960 UP!!!) ::: <br></p><h2 id="reflect" tabindex="-1"><a class="header-anchor" href="#reflect" aria-hidden="true">#</a> Reflect</h2><p><code>Reflect</code>\uB294 Proxy\uC640 \uAC19\uC774 Javascript \uBA85\uB839\uC744 \uAC00\uB85C\uCC4C \uC218 \uC788\uB294 \uBA54\uC11C\uB4DC\uB97C \uC81C\uACF5\uD558\uB294 \uB0B4\uC7A5(Built-in) \uAC1D\uCCB4\uC774\uB2E4.</p><p>Proxy\uC5D0\uC11C Reflect\uB97C \uC0AC\uC6A9\uD574\uC57C \uD558\uB294 \uC774\uC720\uB294 \uB098\uB3C4 \uC644\uBCBD\uD558\uAC8C \uC548\uB2E4\uACE0 \uB9D0\uD560 \uC218\uB294 \uC5C6\uC9C0\uB9CC<br><strong><code>Prototype</code>\uC5D0 \uB300\uD55C \uC0AC\uC774\uB4DC \uC774\uD399\uD2B8\uB97C \uCC98\uB9AC\uD558\uAE30 \uC704\uD574 \uC0AC\uC6A9\uD55C\uB2E4.</strong></p><p>\uC704\uC5D0\uC11C \uB9D0\uD588\uB4EF\uC774 Proxy \uAC1D\uCCB4\uB294 \uC6D0\uB798 \uAC1D\uCCB4\uC704\uC5D0 \uB36E\uC5B4\uC50C\uC6CC\uC9C4\uB2E4.<br> \uC989, <strong>\uC6D0\uB798 \uAC1D\uCCB4\uB97C \uD638\uCD9C\uD558\uB354\uB77C\uB3C4 \uD504\uB85C\uD1A0\uD0C0\uC785 \uCCB4\uC778\uC744 \uD1B5\uD574\uC11C <code>Proxy</code> \uAC1D\uCCB4\uBD80\uD130 \uD0D0\uC0C9\uC744 \uC2DC\uC791\uD55C\uB2E4.</strong></p><p>\uC544\uB798 \uC608\uC81C\uB97C \uBCF4\uC790.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function reactive(target) {
  return new Proxy(
    target,
    {
      get(target, key, receiver) {
        return target[key];
      },
      set(target, key, value, receiver) {
        target[key] = value;
        return value;
      }
    }
  );
}

const giwon = {
    birth: 1994,
};

const mincho = {
    birth: 1901,
    get age() {
        return new Date().getFullYear() - this.birthYear;
    }
};

const giwon.__proto__ = reactive(mincho);
console.log(giwon.age); // 122
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>giwon</code>\uC758 \uB098\uC774\uB294 <code>29 (2022\uB144 \uAE30\uC900)</code>\uAC00 \uB098\uC640\uC57C \uD558\uC9C0\uB9CC, <code>122</code>\uC0B4\uC774 \uB098\uC62C \uAC83\uC774\uB2E4. (\u314E\u3137\u3137)<br><code>age</code>\uD568\uC218\uB97C \uD0D0\uC0C9\uD558\uAE30 \uC704\uD574 \uD504\uB85C\uD1A0\uD0C0\uC785 \uCCB4\uC778\uC744 \uD1B5\uD574 \uD504\uB85D\uC2DC \uAC1D\uCCB4\uB85C \uD0D0\uC0C9\uC744 \uC774\uC5B4\uB098\uAC00\uACE0, \uD2B8\uB7A9 \uB0B4 target\uC740 <code>mincho</code>\uC774\uAE30 \uB54C\uBB38\uC5D0 <code>age</code>\uD568\uC218\uC758 <code>this</code>\uB294 <code>mincho</code>\uB97C \uBC14\uB77C\uBCF4\uAC8C \uB41C\uB2E4.</p><p>\uC989, Proxy\uB97C \uD1B5\uD574\uC11C \uB2E4\uB978 \uAC1D\uCCB4\uC5D0 \uC874\uC7AC\uD558\uB294 \uAE30\uB2A5\uC744 \uC6B0\uB9AC\uAC00 \uC6D0\uD558\uB294 \uAC1D\uCCB4\uC5D0 \uCD94\uAC00\uD558\uB824 \uD574\uB3C4, <strong>this \uCEE8\uD14D\uC2A4\uD2B8\uAC00 \uC6D0\uD558\uB294 \uAC1D\uCCB4\uB85C \uBC14\uC778\uB529\uB418\uC9C0 \uC54A\uB294\uB2E4.</strong> \uADF8\uB798\uC11C Reflect\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC774 \uBB38\uC81C\uB97C \uD574\uACB0\uD55C\uB2E4.</p><br><p>\uC704\uC5D0\uC11C \uB9D0\uD588\uB4EF\uC774 <code>Reflect</code>\uB294 Proxy\uC758 \uD2B8\uB7A9\uCC98\uB7FC \uB0B4\uBD80 \uBA54\uC11C\uB4DC\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4.<br> \uCC28\uC774\uC810\uC774 \uC788\uB2E4\uBA74 <code>Reflect</code>\uB294 <strong>\uC791\uC5C5\uC744 \uC694\uCCAD\uBC1B\uC740 \uAC1D\uCCB4\uB97C \uC778\uC790\uB85C \uC804\uB2EC\uD558\uC5EC this \uCEE8\uD14D\uC2A4\uD2B8\uB97C \uC9C0\uC815\uD574\uC904 \uC218 \uC788\uB2E4</strong>. (\uC989, this\uB85C \uC778\uD55C \uC0AC\uC774\uB4DC \uC774\uD399\uD2B8\uB97C \uC81C\uAC70\uD560 \uC218 \uC788\uB294 \uAC83\uC774\uB2E4.)</p><p>\uC798 \uC774\uD574\uAC00 \uC548\uAC04\uB2E4\uBA74 \uCF54\uB4DC\uB97C \uBCF4\uC790.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function reactive(target) {
  return new Proxy(
    target,
    {
      get(target, key, receiver) {
        return Reflect.get(target, key, receiver);
      },
      set(target, key, value, receiver) {
        return Reflect.set(target, key, value, receiver);
      }
    }
  )
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>get</code>\uACFC <code>set</code>\uC744 \uD1B5\uD574 \uC804\uB2EC\uBC1B\uC740 <code>receiver (\uC791\uC5C5\uC744 \uC694\uCCAD\uBC1B\uC740 \uAC1D\uCCB4)</code>\uB97C Reflect\uB97C \uD1B5\uD574 \uB0B4\uBD80\uB85C \uC804\uB2EC\uD558\uACE0 \uC788\uB2E4.<br><code>receiver</code>\uB97C \uB0B4\uBD80\uB85C \uC804\uB2EC\uD568\uC73C\uB85C\uC368 this\uB97C \uD574\uB2F9 \uAC1D\uCCB4\uC5D0 \uBC14\uC778\uB529\uD574\uC900\uB2E4.<br><br> \uCF54\uB4DC\uAC00 \uD6E8\uC52C \uAE54\uB054\uD574\uC84C\uB2E4 \u{1F603} <br></p><h2 id="reflect\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1102\u1173\u11AB-\u1104\u1169-\u1103\u1161\u1105\u1173\u11AB-\u110B\u1175\u110B\u1172" tabindex="-1"><a class="header-anchor" href="#reflect\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1102\u1173\u11AB-\u1104\u1169-\u1103\u1161\u1105\u1173\u11AB-\u110B\u1175\u110B\u1172" aria-hidden="true">#</a> Reflect\uB97C \uC0AC\uC6A9\uD558\uB294 \uB610 \uB2E4\uB978 \uC774\uC720</h2><h3 id="\u1100\u1161\u11AB\u1100\u1167\u11AF\u1112\u1162\u110C\u1175\u1102\u1173\u11AB-\u110F\u1169\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u1100\u1161\u11AB\u1100\u1167\u11AF\u1112\u1162\u110C\u1175\u1102\u1173\u11AB-\u110F\u1169\u1103\u1173" aria-hidden="true">#</a> \uAC04\uACB0\uD574\uC9C0\uB294 \uCF54\uB4DC</h3><p><code>Object.prototype.hasOwnProperty.call</code>\uAC19\uC740 \uAE34 \uBA54\uC11C\uB4DC\uB97C \uB9CE\uC774 \uC0AC\uC6A9\uD574\uBCF4\uC558\uC744 \uAC83\uC774\uB2E4.</p><p>\uCC38 \uC88B\uC740 \uBA54\uC11C\uB4DC\uC9C0\uB9CC... \uAC1D\uCCB4\uC5D0 \uC9C1\uC811 <code>hasOwnProperty</code>\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uB2E4\uB294\uAC8C \uCC38 \uADC0\uCC2E\uC558\uB2E4.</p><p>\uD558\uC9C0\uB9CC <code>Reflect.has()</code>\uB97C \uC0AC\uC6A9\uD558\uBA74 \uB354 \uAC04\uACB0\uD558\uAC8C \uC704\uC640 \uAC19\uC740 \uAE30\uB2A5\uC744 \uC218\uD589\uD55C\uB2E4!</p><h3 id="\u110B\u1166\u1105\u1165-\u1112\u1162\u11AB\u1103\u1173\u11AF\u1105\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110B\u1166\u1105\u1165-\u1112\u1162\u11AB\u1103\u1173\u11AF\u1105\u1175\u11BC" aria-hidden="true">#</a> \uC5D0\uB7EC \uD578\uB4E4\uB9C1</h3><p>Reflect\uB97C \uD1B5\uD574\uC11C \uAC1D\uCCB4 \uB0B4\uBD80 \uD504\uB85C\uD37C\uD2F0\uB97C \uC0DD\uC131\uD558\uAC70\uB098 \uD655\uC778\uD560 \uB54C <code>if-else</code>\uBB38\uC73C\uB85C \uAE54\uB054\uD558\uAC8C \uAD6C\uD604\uC774 \uAC00\uB2A5\uD558\uB2E4. \uC774 \uBD80\uBD84\uC740 \uC815\uD655\uD788 \uC774\uD574\uAC00 \uC548\uAC00\uC11C \uACF5\uBD80 \uC880 \uB354 \uD574\uC57C\uD560 \uB4EF \uC2F6\uB2E4. \uC77C\uB2E8\uC740 &quot;\uADF8\uB807\uAD6C\uB098&quot; \uD558\uACE0 \uB118\uC5B4\uAC14\uB2E4.</p><h2 id="\u1112\u116E\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1112\u116E\u1100\u1175" aria-hidden="true">#</a> \uD6C4\uAE30</h2><p>api\uB97C \uC0AC\uC6A9\uD558\uB2E4\uAC00 Proxy\uAC00 \uAD81\uAE08\uD574\uC11C \uACF5\uBD80\uD574\uBCF4\uC558\uC9C0\uB9CC... \uC544\uC9C1\uC740 \uC4F8 \uC77C\uC774 \uC5C6\uC744 \uB4EF \uD558\uB2E4.</p><p>api \uD638\uCD9C \uAC19\uC740 \uACF5\uD1B5\uC801\uC73C\uB85C \uC77C\uC5B4\uB098\uB294 \uAE30\uB2A5\uB4E4\uC5D0 Proxy\uB97C \uC50C\uC6CC\uC11C \uCD94\uAC00\uC791\uC5C5\uC744 \uD574\uC8FC\uACE0 \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0 \uBCF4\uB0B4\uB294 \uBC29\uC2DD\uC73C\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC744 \uAC83 \uAC19\uAE34 \uD55C\uB370 \uD760.... \uC544\uC9C1\uC740 \uC798 \uC640\uB2FF\uC9C0 \uC54A\uB294\uB2E4 \u314E\u314E<br><br> \uC368\uBCF4\uB2E4 \uBCF4\uBA74 \uC774\uD574\uD558\uACA0\uC9C0\uBB50!</p>`,58),c=[a];function i(o,l){return t(),r("div",null,c)}var p=e(d,[["render",i],["__file","Proxy\uC640 Reflect.html.vue"]]);export{p as default};
