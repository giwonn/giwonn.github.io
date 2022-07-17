import{_ as n,o as s,c as a,e}from"./app.c9fb633c.js";var t="/images/TIL/CS-OS/4\uC7A5/\uC6B0\uC120\uC21C\uC704-\uADF8\uB798\uD504.jpg";const i={},l=e('<h1 id="\u1107\u1167\u11BC\u1112\u1162\u11BC-\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1173-1" tabindex="-1"><a class="header-anchor" href="#\u1107\u1167\u11BC\u1112\u1162\u11BC-\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1173-1" aria-hidden="true">#</a> \uBCD1\uD589 \uD504\uB85C\uC138\uC2A4 - 1</h1><p>\uB3D9\uC2DC\uC5D0 \uC2E4\uD589\uB418\uB294 \uC5EC\uB7EC \uAC1C\uC758 \uD504\uB85C\uC138\uC2A4 \uB610\uB294 \uC4F0\uB808\uB4DC</p><div class="custom-container tip"><p class="custom-container-title">\uBCD1\uD589\uC131 (concurrency)</p><p>\uC5EC\uB7EC \uAC1C\uC758 \uD504\uB85C\uC138\uC2A4 \uB610\uB294 \uC4F0\uB808\uB4DC\uAC00 \uB3D9\uC2DC\uC5D0 \uC2E4\uD589\uB418\uB294 \uC2DC\uC2A4\uD15C</p></div><h2 id="\u1107\u1167\u11BC\u1112\u1162\u11BC-\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1173\u110B\u1174-\u1100\u1162\u1102\u1167\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1107\u1167\u11BC\u1112\u1162\u11BC-\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1173\u110B\u1174-\u1100\u1162\u1102\u1167\u11B7" aria-hidden="true">#</a> \uBCD1\uD589 \uD504\uB85C\uC138\uC2A4\uC758 \uAC1C\uB150</h2><h3 id="\u1107\u1167\u11BC\u1112\u1162\u11BC-\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1173\u110B\u1174-\u1109\u1175\u11AF\u1112\u1162\u11BC-\u1112\u1167\u11BC\u1110\u1162" tabindex="-1"><a class="header-anchor" href="#\u1107\u1167\u11BC\u1112\u1162\u11BC-\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1173\u110B\u1174-\u1109\u1175\u11AF\u1112\u1162\u11BC-\u1112\u1167\u11BC\u1110\u1162" aria-hidden="true">#</a> \uBCD1\uD589 \uD504\uB85C\uC138\uC2A4\uC758 \uC2E4\uD589 \uD615\uD0DC</h3><ul><li><strong>CPU\uC758 \uAC1C\uC218\uC5D0 \uB530\uB978 \uBCD1\uD589 \uD504\uB85C\uC138\uC2A4\uC758 \uC2E4\uD589 \uD615\uD0DC</strong><ul><li><strong>\uB2E8\uC77C CPU</strong> : \uD558\uB098\uC758 CPU\uC5D0\uC11C \uC778\uD130\uB9AC\uBE59 \uD615\uC2DD\uC73C\uB85C \uC2E4\uD589</li><li><strong>\uBA40\uD2F0 CPU</strong> : \uC5EC\uB7EC \uAC1C\uC758 CPU\uC5D0\uC11C \uBCD1\uB82C \uCC98\uB9AC \uD615\uC2DD\uC73C\uB85C \uC2E4\uD589</li></ul></li></ul><br><ul><li><strong>\uBA40\uD2F0 CPU\uC5D0\uC11C\uC758 \uBA54\uBAA8\uB9AC \uAD6C\uC870\uC5D0 \uB530\uB978 \uBCD1\uD589 \uD504\uB85C\uC138\uC2A4\uC758 \uC2E4\uD589 \uD615\uD0DC</strong><ul><li><strong>\uAC15\uACB0\uD569 \uBA40\uD2F0\uD504\uB85C\uC138\uC11C \uC2DC\uC2A4\uD15C</strong> : \uACF5\uC720 \uBA54\uBAA8\uB9AC \uAD6C\uC870 (\uC5EC\uB7EC CPU\uAC00 \uD558\uB098\uC758 \uBA54\uBAA8\uB9AC\uB97C \uACF5\uC720\uD568)</li><li><strong>\uC57D\uACB0\uD569 \uBA40\uD2F0\uD504\uB85C\uC138\uC11C \uC2DC\uC2A4\uD15C</strong> : \uBD84\uC0B0 \uBA54\uBAA8\uB9AC \uAD6C\uC870 (CPU\uB9C8\uB2E4 \uC790\uC2E0\uB9CC\uC758 \uBA54\uBAA8\uB9AC\uB97C \uAC00\uC9C0\uACE0 \uC788\uC74C) =&gt; CPU \uAC04 \uD1B5\uC2E0\uC120\uC73C\uB85C \uC5F0\uACB0\uB428</li></ul></li></ul><br><h3 id="\u1107\u1167\u11BC\u1112\u1162\u11BC\u1109\u1165\u11BC-\u1106\u116E\u11AB\u110C\u1166" tabindex="-1"><a class="header-anchor" href="#\u1107\u1167\u11BC\u1112\u1162\u11BC\u1109\u1165\u11BC-\u1106\u116E\u11AB\u110C\u1166" aria-hidden="true">#</a> \uBCD1\uD589\uC131 \uBB38\uC81C</h3><ul><li><p><strong>\uBCD1\uD589 \uD504\uB85C\uC138\uC2A4\uB4E4\uC774 \uC0C1\uD638\uC791\uC6A9 \uD558\uB294 \uACBD\uC6B0</strong></p><ul><li>\uACF5\uC720\uC790\uC6D0 \uC810\uC720 \uBB38\uC81C</li><li>\uB3D9\uAE30\uD654 \uBB38\uC81C</li><li>\uD1B5\uC2E0 \uBB38\uC81C</li></ul></li><li><p><strong>\uC0C1\uD669\uC5D0 \uB530\uB978 \uAD6C\uBD84</strong></p><ul><li>\uB2E8\uC77C \uD504\uB85C\uC138\uC2A4 \uB0B4\uC758 \uBCD1\uD589\uC131</li><li>\uD504\uB85C\uC138\uC2A4 \uAC04\uC758 \uBCD1\uD589\uC131</li></ul></li></ul><h3 id="\u1103\u1161\u11AB\u110B\u1175\u11AF-\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1173-\u1102\u1162\u110B\u1174-\u1107\u1167\u11BC\u1112\u1162\u11BC\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u110B\u1175\u11AF-\u1111\u1173\u1105\u1169\u1109\u1166\u1109\u1173-\u1102\u1162\u110B\u1174-\u1107\u1167\u11BC\u1112\u1162\u11BC\u1109\u1165\u11BC" aria-hidden="true">#</a> \uB2E8\uC77C \uD504\uB85C\uC138\uC2A4 \uB0B4\uC758 \uBCD1\uD589\uC131</h3><div class="custom-container tip"><p class="custom-container-title">\uC6B0\uC120\uC21C\uC704 \uADF8\uB798\uD504</p><ul><li>\uC815\uC810: \uBB38\uC7A5</li><li>\uBC29\uD5A5 \uC788\uB294 \uAC04\uC120: \uC6B0\uC120\uC21C\uC704 \uAD00\uACC4</li></ul><p><img src="'+t+`" alt="\uC6B0\uC120\uC21C\uC704 \uADF8\uB798\uD504"></p></div><div class="custom-container tip"><p class="custom-container-title">Fork/Join \uAD6C\uC870</p><ul><li>fork L : 2\uAC1C\uC758 \uBCD1\uD589 \uC218\uD589\uC744 \uB9CC\uB4E6 (\uB808\uC774\uBE14 L \uC704\uCE58, fork \uBA85\uB839\uC5B4 \uB2E4\uC74C)</li><li>join n : \uBCD1\uD589\uD558\uB294 n\uAC1C\uC758 \uD750\uB984\uC744 \uD558\uB098\uB85C \uC7AC\uACB0\uD569</li></ul></div><div class="custom-container tip"><p class="custom-container-title">\uBCD1\uD589\uBB38</p><ul><li>1\uAC1C\uC758 \uD504\uB85C\uC138\uC2A4\uAC00 \uC5EC\uB7EC \uAC00\uB2E5\uC758 \uBCD1\uB82C \uD504\uB85C\uC138\uC2A4\uB85C \uBD84\uD560\uB418\uC5C8\uB2E4\uAC00 \uB2E4\uC2DC \uD558\uB098\uB85C \uACB0\uD569</li><li>parbegin / parend \uBB38</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>parbegin <span class="token comment">// parbegin ~ parend \uC0AC\uC774\uC5D0 \uC788\uB294 a, b\uB294 \uBCD1\uD589\uCC98\uB9AC\uB41C\uB2E4.</span>
    <span class="token literal-property property">a</span> <span class="token operator">:</span><span class="token operator">=</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
    <span class="token literal-property property">b</span> <span class="token operator">:</span><span class="token operator">=</span> z <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
parend
    <span class="token literal-property property">c</span> <span class="token operator">:</span><span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
    <span class="token function">write</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="\u1103\u1169\u11BC\u1100\u1175\u1112\u116A\u110B\u116A-\u110B\u1175\u11B7\u1100\u1168\u110B\u1167\u11BC\u110B\u1167\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1103\u1169\u11BC\u1100\u1175\u1112\u116A\u110B\u116A-\u110B\u1175\u11B7\u1100\u1168\u110B\u1167\u11BC\u110B\u1167\u11A8" aria-hidden="true">#</a> \uB3D9\uAE30\uD654\uC640 \uC784\uACC4\uC601\uC5ED</h2><ul><li><strong>\uD504\uB85C\uC138\uC2A4 \uB3D9\uAE30\uD654</strong> : 2\uAC1C \uC774\uC0C1\uC758 \uD504\uB85C\uC138\uC2A4\uC5D0 \uB300\uD55C \uCC98\uB9AC\uC21C\uC11C\uB97C \uACB0\uC815\uD558\uB294 \uAC83</li><li><strong>\uC784\uACC4\uC601\uC5ED</strong> : 2\uAC1C \uC774\uC0C1\uC758 \uD504\uB85C\uC138\uC2A4\uAC00 \uB3D9\uC2DC\uC5D0 \uC5D1\uC138\uC2A4\uD558\uBA74 \uC548\uB418\uB294 \uACF5\uC720\uC790\uC6D0\uC744 \uC561\uC138\uC2A4\uD558\uB294 \uCF54\uB4DC \uC601\uC5ED</li><li><strong>\uC0C1\uD638\uBC30\uC81C</strong> : 2\uAC1C \uC774\uC0C1\uC758 \uD504\uB85C\uC138\uC2A4\uAC00 \uB3D9\uC2DC\uC5D0 \uC784\uACC4\uC601\uC5ED\uC5D0 \uC9C4\uC785\uD558\uC9C0 \uBABB\uD558\uB3C4\uB85D \uD558\uB294 \uAC83</li></ul><div class="custom-container tip"><p class="custom-container-title">\uC784\uACC4\uC601\uC5ED\uC744 \uAC16\uB294 \uD504\uB85C\uC138\uC2A4\uC758 \uC77C\uBC18\uC801 \uAD6C\uC870</p><p>\uC9C4\uC785\uC601\uC5ED - \uC784\uACC4\uC601\uC5ED - \uD574\uC81C\uC601\uC5ED - \uC794\uB958\uC601\uC5ED</p></div><h3 id="\u110B\u1175\u11B7\u1100\u1168\u110B\u1167\u11BC\u110B\u1167\u11A8-\u1106\u116E\u11AB\u110C\u1166-\u1112\u1162\u1100\u1167\u11AF\u110B\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u110B\u116D\u1100\u116E\u110C\u1169\u1100\u1165\u11AB" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u11B7\u1100\u1168\u110B\u1167\u11BC\u110B\u1167\u11A8-\u1106\u116E\u11AB\u110C\u1166-\u1112\u1162\u1100\u1167\u11AF\u110B\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u110B\u116D\u1100\u116E\u110C\u1169\u1100\u1165\u11AB" aria-hidden="true">#</a> \uC784\uACC4\uC601\uC5ED \uBB38\uC81C \uD574\uACB0\uC744 \uC704\uD55C \uC694\uAD6C\uC870\uAC74</h3><ul><li><p><strong>\uC0C1\uD638\uBC30\uC81C</strong> : \uD55C \uD504\uB85C\uC138\uC2A4\uAC00 \uC784\uACC4\uC601\uC5ED\uC5D0\uC11C \uC2E4\uD589 \uC911\uC77C \uB54C \uB2E4\uB978 \uC5B4\uB5A4 \uD504\uB85C\uC138\uC2A4\uB3C4 \uC784\uACC4\uC601\uC5ED\uC5D0\uC11C \uC2E4\uD589\uB420 \uC218 \uC5C6\uC74C</p></li><li><p><strong>\uC9C4\uD589</strong> : \uC784\uACC4\uC601\uC5ED\uC5D0\uC11C \uC2E4\uD589 \uC911\uC778 \uD504\uB85C\uC138\uC2A4\uAC00 \uC5C6\uACE0 \uC5EC\uB7EC \uD504\uB85C\uC138\uC2A4\uAC00 \uC784\uACC4\uC601\uC5ED\uC5D0 \uC9C4\uC785\uD558\uACE0\uC790 \uD560 \uB54C \uADF8 \uC911\uC5D0\uC11C \uC801\uC808\uD788 \uD55C \uD504\uB85C\uC138\uC11C\uB97C \uACB0\uC815\uD574\uC57C \uD558\uBA70 \uC774 \uACB0\uC815\uC740 \uBB34\uD55C\uC815 \uBBF8\uB8F0 \uC218 \uC5C6\uC74C</p></li><li><p><strong>\uC81C\uD55C\uB41C \uB300\uAE30</strong> : \uD55C \uD504\uB85C\uC138\uC2A4\uAC00 \uC784\uACC4\uC601\uC5ED \uC9C4\uC785 \uC694\uCCAD\uC744 \uD55C \uD6C4 \uC218\uB77D\uB420 \uB54C\uAE4C\uC9C0 \uB2E4\uB978 \uD504\uB85C\uC138\uC2A4\uAC00 \uC784\uACC4\uC601\uC5ED \uC9C4\uC785\uC744 \uD5C8\uAC00 \uBC1B\uB294 \uD69F\uC218\uB294 \uC81C\uD55C\uC774 \uC788\uC5B4\uC57C \uD568</p></li></ul><h3 id="\u110B\u1175\u11B7\u1100\u1168\u110B\u1167\u11BC\u110B\u1167\u11A8-\u1106\u116E\u11AB\u110C\u1166-\u1112\u1162\u1100\u1167\u11AF\u110B\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u1103\u1169\u1100\u116E" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u11B7\u1100\u1168\u110B\u1167\u11BC\u110B\u1167\u11A8-\u1106\u116E\u11AB\u110C\u1166-\u1112\u1162\u1100\u1167\u11AF\u110B\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u1103\u1169\u1100\u116E" aria-hidden="true">#</a> \uC784\uACC4\uC601\uC5ED \uBB38\uC81C \uD574\uACB0\uC744 \uC704\uD55C \uB3C4\uAD6C</h3><div class="custom-container tip"><p class="custom-container-title">Test-and-Set \uBA85\uB839\uC5B4 (TS \uBA85\uB839\uC5B4)</p><ul><li>\uC0C1\uD638\uBC30\uC81C\uC758 \uD558\uB4DC\uC6E8\uC5B4\uC801 \uD574\uACB0 \uBC29\uBC95</li><li>\uBD84\uB9AC\uAC00 \uBD88\uAC00\uB2A5\uD55C \uB2E8\uC77C \uAE30\uACC4 \uBA85\uB839\uC5B4(\uC6D0\uC790\uC801\uC73C\uB85C \uC218\uD589)</li></ul><p><strong>\uAD6C\uD604\uBC29\uBC95</strong></p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>repeat
    <span class="token comment">// \uC784\uACC4\uC601\uC5ED\uC774 \uC0AC\uC6A9\uC911\uC774\uBA74 \uC811\uADFC \uBABB\uD558\uAC8C \uB9C9\uC544\uC90C</span>
    <span class="token keyword">while</span> <span class="token function">Test_and_Set</span><span class="token punctuation">(</span>lock<span class="token punctuation">)</span> <span class="token keyword">do</span> skip<span class="token punctuation">;</span> <span class="token comment">// (\uC9C4\uC785\uC601\uC5ED): lock=false</span>
    <span class="token punctuation">(</span>\uC784\uACC4\uC601\uC5ED<span class="token punctuation">)</span>
    lock <span class="token operator">:</span><span class="token operator">=</span> false<span class="token punctuation">;</span> <span class="token comment">// (\uD574\uC81C\uC601\uC5ED)</span>
    <span class="token punctuation">(</span>\uC794\uB958\uC601\uC5ED<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\uBB38\uC81C\uC810</strong></p><ul><li>\uB9CE\uC740 \uD504\uB85C\uC138\uC2A4\uAC00 \uC784\uACC4\uC601\uC5ED\uC5D0 \uB4E4\uC5B4\uAC00\uAE30\uB97C \uC6D0\uD560 \uB54C \uAE30\uC544\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC74C (\uACC4\uC18D \uB300\uAE30\uD558\uAC8C \uB420 \uC218\uB3C4 \uC788\uC74C)</li><li>\uC9C4\uC785\uC601\uC5ED\uC5D0 \uAC07\uD600\uC11C Busy waiting\uC744 \uD568\uC73C\uB85C\uC368 \uB2E4\uB978 \uC791\uC5C5\uC774 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 CPU \uC0AC\uC774\uD074\uC744 \uB0AD\uBE44</li></ul></div><div class="custom-container tip"><p class="custom-container-title">\uC138\uB9C8\uD3EC\uC5B4(semaphore)</p><ul><li>Dijkstra\uAC00 \uC81C\uC548\uD55C \uB3D9\uAE30\uD654 \uB3C4\uAD6C</li><li>\uC138\uB9C8\uD3EC\uC5B4 s : \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC790\uC6D0\uC758 \uC218 \uB610\uB294 \uC7A0\uAE40/\uC5F4\uB9BC \uB4F1\uC758 \uC0C1\uD0DC\uB97C \uB098\uD0C0\uB0B4\uB294 \uAC12\uC744 \uC800\uC7A5\uD558\uB294 \uC815\uC218\uD615 \uACF5\uC6A9\uBCC0\uC218</li><li>\uC138\uB9C8\uD3EC\uC5B4 s\uB294 \uB450 \uD45C\uC900\uB2E8\uC704 \uC5F0\uC0B0 P\uC640 V\uC5D0 \uC758\uD574\uC11C\uB9CC \uC811\uADFC\uB428</li></ul><p><strong>P(s) : \uAC80\uC0AC, \uAC10\uC18C\uC2DC\uD0A4\uB824\uB294 \uC2DC\uB3C4</strong></p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> then
    s <span class="token operator">:</span><span class="token operator">=</span> s <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">else</span>
    \uD604\uC7AC \uD504\uB85C\uC138\uC2A4 \uB300\uAE30<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>V(s) : \uC99D\uAC00</strong></p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">1</span>\uAC1C \uC774\uC0C1\uC758 \uD504\uB85C\uC138\uC2A4\uAC00 \uB300\uAE30 \uC911<span class="token punctuation">)</span> then
    \uADF8 \uC911 <span class="token number">1</span>\uAC1C\uC758 \uD504\uB85C\uC138\uC2A4\uB9CC \uC9C4\uD589<span class="token punctuation">;</span>
<span class="token keyword">else</span>
    s <span class="token operator">:</span><span class="token operator">=</span> s <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\uC0C1\uD638\uBC30\uC81C \uAD6C\uD604 \uBC29\uBC95</strong></p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>repeat
    <span class="token function">p</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \uC9C4\uC785\uC601\uC5ED</span>
    <span class="token punctuation">(</span>\uC784\uACC4\uC601\uC5ED<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">V</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \uD574\uC81C\uC601\uC5ED</span>
    <span class="token punctuation">(</span>\uC794\uB958\uC601\uC5ED<span class="token punctuation">)</span><span class="token punctuation">;</span>
until false<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\uB3D9\uAE30\uD654 \uBB38\uC81C \uD574\uACB0</strong><br> \uD504\uB85C\uC138\uC2A41\uC774 \uBB38\uC7A5 S1\uC744 \uC2E4\uD589\uD55C \uD6C4, \uD504\uB85C\uC138\uC2A42\uAC00 \uBB38\uC7A5 S2\uB97C \uC2E4\uD589\uD558\uB3C4\uB85D \uB3D9\uAE30\uD654\uD558\uACE0 \uC2F6\uB2E4\uBA74? <strong>(block / wakeup \uD504\uB85C\uD1A0\uCF5C)</strong></p><ul><li>\uD504\uB85C\uC138\uC2A41</li></ul><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>S1<span class="token punctuation">;</span>
<span class="token function">V</span><span class="token punctuation">(</span>sync<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \uB2E4\uC74C \uD504\uB85C\uC138\uC2A4\uB97C \uAE68\uC6CC\uC8FC\uAE30 \uB54C\uBB38\uC5D0 wakeup\uC774\uB77C\uACE0 \uD45C\uD604\uD568</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\uD504\uB85C\uC138\uC2A42</li></ul><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token function">P</span><span class="token punctuation">(</span>sync<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \uC791\uC5C5\uC744 \uAE30\uB2E4\uB9AC\uAE30 \uB54C\uBB38\uC5D0 block\uC774\uB77C\uACE0 \uD45C\uD604\uD568</span>
S2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div>`,23),p=[l];function o(c,r){return s(),a("div",null,p)}var d=n(i,[["render",o],["__file","04. \uBCD1\uD589 \uD504\uB85C\uC138\uC2A4 - 1.html.vue"]]);export{d as default};
