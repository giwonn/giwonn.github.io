import{e as n}from"./app.3f3fa329.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},p=n(`<h1 id="\u1107\u116E\u11AB\u1112\u1161\u11AF-\u110C\u1165\u11BC\u1107\u1169\u11A8-\u110B\u1161\u11AF\u1100\u1169\u1105\u1175\u110C\u1173\u11B7-divide-and-conquer" tabindex="-1"><a class="header-anchor" href="#\u1107\u116E\u11AB\u1112\u1161\u11AF-\u110C\u1165\u11BC\u1107\u1169\u11A8-\u110B\u1161\u11AF\u1100\u1169\u1105\u1175\u110C\u1173\u11B7-divide-and-conquer" aria-hidden="true">#</a> \uBD84\uD560 \uC815\uBCF5 \uC54C\uACE0\uB9AC\uC998 (Divide and Conquer)</h1><p>\uC21C\uD658\uC801\uC73C\uB85C \uBB38\uC81C\uB97C \uD478\uB294 \uD558\uD5A5\uC2DD \uC811\uADFC \uBC29\uBC95</p><ol><li>\uC8FC\uC5B4\uC9C4 \uBB38\uC81C\uC758 \uC785\uB825\uC744 \uB354 \uC774\uC0C1 \uB098\uB20C \uC218 \uC5C6\uC744 \uB54C\uAE4C\uC9C0 \uB450 \uAC1C \uC774\uC0C1\uC758 \uC791\uC740 \uBB38\uC81C\uB85C \uC21C\uD658\uC801\uC73C\uB85C \uBD84\uD560\uD55C\uB2E4.</li><li>\uC774\uB807\uAC8C \uBD84\uD560\uB41C \uC791\uC740 \uBB38\uC81C\uB4E4\uC744 \uAC01\uAC01 \uD574\uACB0\uD55C \uD6C4 \uC774 \uD574\uB4E4\uC744 \uACB0\uD569\uD574\uC11C \uC6D0\uB798 \uBB38\uC81C\uC758 \uD574\uB97C \uAD6C\uD558\uB294 \uBC29\uC2DD</li></ol><h2 id="\u1110\u1173\u11A8\u110C\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1110\u1173\u11A8\u110C\u1175\u11BC" aria-hidden="true">#</a> \uD2B9\uC9D5</h2><ul><li>\uBD84\uD560\uB41C \uC791\uC740 \uBB38\uC81C\uB294 \uC6D0\uB798 \uBB38\uC81C\uC640 \uB3D9\uC77C (\uB2E8, \uC785\uB825 \uD06C\uAE30\uB9CC \uC791\uC544\uC9D0)</li><li>\uBD84\uD560\uB41C \uC791\uC740 \uBB38\uC81C\uB294 \uC11C\uB85C \uB3C5\uB9BD\uC801 (\uC21C\uD658\uC801 \uBD84\uD560 \uBC0F \uACB0\uACFC \uD1B5\uD569\uC774 \uAC00\uB2A5)</li></ul><h2 id="\u110E\u1165\u1105\u1175-\u1100\u116A\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110E\u1165\u1105\u1175-\u1100\u116A\u110C\u1165\u11BC" aria-hidden="true">#</a> \uCC98\uB9AC \uACFC\uC815</h2><ol><li><strong>\uBD84\uD560</strong> : \uC8FC\uC5B4\uC9C4 \uBB38\uC81C\uB97C \uC5EC\uB7EC \uAC1C\uC758 \uC791\uC740 \uBB38\uC81C\uB85C \uBD84\uD560\uD55C\uB2E4.</li><li><strong>\uC815\uBCF5</strong> : \uC791\uC740 \uBB38\uC81C\uB97C \uC21C\uD658\uC801\uC73C\uB85C \uBD84\uD560. \uB354 \uC774\uC0C1 \uBD84\uD560\uB418\uC9C0 \uC54A\uC73C\uBA74 \uD574\uB97C \uAD6C\uD55C\uB2E4.</li><li><strong>\uACB0\uD569</strong> : \uC791\uC740 \uBB38\uC81C\uC5D0 \uB300\uD574 \uC815\uBCF5\uB41C \uD574\uB97C \uACB0\uD569\uD558\uC5EC \uC6D0\uB798 \uBB38\uC81C\uC758 \uD574\uB97C \uAD6C\uD55C\uB2E4.</li></ol><h2 id="\u110B\u1175\u110C\u1175\u11AB-\u1110\u1161\u11B7\u1109\u1162\u11A8" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u110C\u1175\u11AB-\u1110\u1161\u11B7\u1109\u1162\u11A8" aria-hidden="true">#</a> \uC774\uC9C4 \uD0D0\uC0C9</h2><p>\uC815\uB82C\uB41C \uC0C1\uD0DC\uC758 \uC785\uB825 \uB370\uC774\uD130\uC5D0 \uB300\uD574 \uC808\uBC18\uC529 \uB098\uB220 \uD55C\uCABD\uB9CC \uD0D0\uC0C9\uD558\uB294 \uBC29\uBC95\uC774\uB2E4.</p><div class="custom-container tip"><p class="custom-container-title">\uD0D0\uC0C9 \uBC29\uBC95</p><p>\uBC30\uC5F4 \uAC00\uC6B4\uB370\uC758 \uC6D0\uC18C A[mid]\uC640 \uD0D0\uC0C9\uD0A4 x\uB97C \uBE44\uAD50</p><ol><li><code>\uD0D0\uC0C9\uD0A4 = A[mid]</code> =&gt; \uD0D0\uC0C9 \uC131\uACF5 (\uC778\uB371\uC2A4 mid \uBC18\uD658 \uD6C4 \uC885\uB8CC)</li><li><code>\uD0D0\uC0C9\uD0A4 &lt; A[mid]</code> =&gt; \uC774\uC9C4 \uD0D0\uC0C9 (\uC778\uB371\uC2A4 mid \uAE30\uC900 \uC67C\uCABD \uD0D0\uC0C9)</li><li><code>\uD0D0\uC0C9\uD0A4 &gt; A[mid]</code> =&gt; \uC774\uC9C4 \uD0D0\uC0C9 (\uC778\uB371\uC2A4 mid \uAE30\uC900 \uC67C\uCABD \uD0D0\uC0C9)</li></ol><p>\uC704\uC640\uAC19\uC774 \uD0D0\uC0C9\uC744 \uC9C4\uD589\uD55C\uB2E4. \uD0D0\uC0C9\uC744 \uBC18\uBCF5\uD560 \uC218\uB85D \uC6D0\uC18C\uC758 \uAC1C\uC218\uAC00 \uC808\uBC18\uC73C\uB85C \uAC10\uC18C\uD55C\uB2E4.</p></div><h3 id="\u1110\u1161\u1100\u1166\u11BA\u1102\u1165\u11B7\u1107\u1165\u110B\u1174-\u110B\u1175\u11AB\u1103\u1166\u11A8\u1109\u1173\u1105\u1173\u11AF-\u1105\u1175\u1110\u1165\u11AB\u1112\u1161\u1102\u1173\u11AB-\u110B\u1168\u110C\u1166" tabindex="-1"><a class="header-anchor" href="#\u1110\u1161\u1100\u1166\u11BA\u1102\u1165\u11B7\u1107\u1165\u110B\u1174-\u110B\u1175\u11AB\u1103\u1166\u11A8\u1109\u1173\u1105\u1173\u11AF-\u1105\u1175\u1110\u1165\u11AB\u1112\u1161\u1102\u1173\u11AB-\u110B\u1168\u110C\u1166" aria-hidden="true">#</a> \uD0C0\uAC9F\uB118\uBC84\uC758 \uC778\uB371\uC2A4\uB97C \uB9AC\uD134\uD558\uB294 \uC608\uC81C</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span>

<span class="token keyword">function</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> low <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> high <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>

  <span class="token keyword">while</span><span class="token punctuation">(</span>low <span class="token operator">&lt;=</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>low<span class="token operator">+</span>high<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> mid<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          high <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          low <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="\u1103\u1161\u11AB\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u110C\u1165\u11B7" aria-hidden="true">#</a> \uB2E8\uC810</h3><ul><li><strong>\uC785\uB825 \uBC30\uC5F4\uC758 \uB370\uC774\uD130\uAC00 \uC815\uB82C\uB41C \uACBD\uC6B0\uC5D0\uB9CC \uC801\uC6A9 \uAC00\uB2A5</strong></li><li><strong>\uC0BD\uC785 / \uC0AD\uC81C \uC5F0\uC0B0\uC740 \uBD80\uAC00\uC801\uC778 \uB370\uC774\uD130 \uC774\uB3D9\uC744 \uC218\uBC18\uD568</strong><ul><li>\uB370\uC774\uD130\uC758 \uC815\uB82C \uC0C1\uD0DC \uC720\uC9C0\uB97C \uC704\uD574\uC11C \uD3C9\uADE0 n/2\uAC1C\uC758 \uB370\uC774\uD130 \uC774\uB3D9\uC774 \uBC1C\uC0DD<br> (\uC0BD\uC785 / \uC0AD\uC81C\uAC00 \uBE48\uBC88\uD55C \uC751\uC6A9\uC5D0\uC11C\uB294 \uBD80\uC801\uD569\uD568)</li></ul></li><li>\uC2DC\uAC04 \uBCF5\uC7A1\uB3C4 : <code>T(n) = T(n/2) + O(1) = O(logn)</code></li></ul><br><h2 id="\u110F\u1171\u11A8-\u110C\u1165\u11BC\u1105\u1167\u11AF" tabindex="-1"><a class="header-anchor" href="#\u110F\u1171\u11A8-\u110C\u1165\u11BC\u1105\u1167\u11AF" aria-hidden="true">#</a> \uD035 \uC815\uB82C</h2><ul><li>\uD53C\uBC97 : \uB9AC\uC2A4\uD2B8 \uC548\uC5D0 \uC788\uB294 \uC120\uD0DD\uB41C \uD55C \uC694\uC18C</li></ul><div class="custom-container tip"><p class="custom-container-title">\uD0D0\uC0C9 \uBC29\uBC95</p><ol><li>\uD53C\uBC97\uC744 \uAE30\uC900\uC73C\uB85C \uC791\uC740 \uC6D0\uC18C\uB4E4\uC740 \uC67C\uCABD\uC73C\uB85C \uC774\uB3D9</li><li>\uD53C\uBC97\uC744 \uAE30\uC900\uC73C\uB85C \uD070 \uC6D0\uC18C\uB4E4\uC740 \uC624\uB978\uCABD\uC73C\uB85C \uC774\uB3D9</li><li>\uC67C\uCABD\uBD80\uD130 \uB2E4\uC2DC \uD035\uC815\uB82C\uC744 \uD558\uC5EC \uC815\uBCF5\uB420 \uB54C\uAE4C\uC9C0 \uACC4\uC18D \uC67C\uCABD\uC740 \uBD84\uD560\uD55C\uB2E4.</li><li>\uC704\uB85C \uB2E4\uC2DC \uAC70\uC2AC\uB7EC \uC62C\uB77C\uAC00\uBA70 \uC624\uB978\uCABD\uB3C4 \uC815\uBCF5\uD574\uC900\uB2E4.</li></ol></div><h3 id="\u110E\u116C\u110B\u1161\u11A8\u110B\u1174-\u1100\u1167\u11BC\u110B\u116E" tabindex="-1"><a class="header-anchor" href="#\u110E\u116C\u110B\u1161\u11A8\u110B\u1174-\u1100\u1167\u11BC\u110B\u116E" aria-hidden="true">#</a> \uCD5C\uC545\uC758 \uACBD\uC6B0</h3><ul><li><strong>\uBC30\uC5F4\uC774 \uD56D\uC0C1 0:n-1 \uB610\uB294 n-1:0\uC73C\uB85C \uBD84\uD560\uB418\uB294 \uACBD\uC6B0</strong><br> (\uD53C\uBC97\uC774 \uD56D\uC0C1 \uBD80\uBD84\uBC30\uC5F4\uC758 \uCD5C\uC19F\uAC12 \uB610\uB294 \uCD5C\uB313\uAC12\uC774 \uB418\uB294 \uACBD\uC6B0)<br> (=\uC785\uB825 \uB370\uC774\uD130\uAC00 \uC815\uB82C\uB418\uC5B4 \uC788\uB294 \uACBD\uC6B0)</li><li>\uCD5C\uC545\uC77C \uB54C \uC2DC\uAC04\uBCF5\uC7A1\uB3C4 : <code>T(n) = O(n^2)</code></li><li>\uD53C\uBC97 \uC120\uD0DD\uC758 \uC784\uC758\uC131\uB9CC \uBCF4\uC7A5\uB418\uBA74 \uCD5C\uC545\uC758 \uACBD\uC6B0\uAC00 \uB098\uC62C \uD655\uB960\uC774 \uB9E4\uC6B0 \uC801\uC74C</li></ul><h3 id="\u110E\u116C\u1109\u1165\u11AB\u110B\u1174-\u1100\u1167\u11BC\u110B\u116E" tabindex="-1"><a class="header-anchor" href="#\u110E\u116C\u1109\u1165\u11AB\u110B\u1174-\u1100\u1167\u11BC\u110B\u116E" aria-hidden="true">#</a> \uCD5C\uC120\uC758 \uACBD\uC6B0</h3><ul><li>\uD53C\uBC97\uC744 \uC911\uC2EC\uC73C\uB85C \uD56D\uC0C1 \uB3D9\uC77C\uD55C \uD06C\uAE30\uC758 \uB450 \uBD80\uBD84\uBC30\uC5F4\uB85C \uBD84\uD560\uB418\uB294 \uACBD\uC6B0<br> (\uD53C\uBC97\uC774 \uD56D\uC0C1 \uBD80\uBD84\uBC30\uC5F4\uC758 \uC911\uAC04\uAC12\uC774 \uB418\uB294 \uACBD\uC6B0)</li><li>\uCD5C\uC120\uC77C \uB54C \uC2DC\uAC04\uBCF5\uC7A1\uB3C4 : <code>T(n) = O(nlogn)</code></li></ul>`,22);function e(t,o){return p}var r=a(s,[["render",e]]);export{r as default};