import{e as n}from"./app.c837ccd9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/images/TIL/FW-Vue/vue-lifecycle.png";const e={},t=n(`<h1 id="vue-\u1105\u1161\u110B\u1175\u1111\u1173\u1109\u1161\u110B\u1175\u110F\u1173\u11AF" tabindex="-1"><a class="header-anchor" href="#vue-\u1105\u1161\u110B\u1175\u1111\u1173\u1109\u1161\u110B\u1175\u110F\u1173\u11AF" aria-hidden="true">#</a> Vue \uB77C\uC774\uD504\uC0AC\uC774\uD074</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\uD574\uB2F9 \uAE00\uC740 Vue v2\uB97C \uAE30\uBC18\uC73C\uB85C \uC791\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4.</p></div><ol><li><strong>create \uB2E8\uACC4</strong> - \uB370\uC774\uD130(data, methods)\uB9CC \uC874\uC7AC\uD558\uB294 \uB2E8\uACC4</li><li><strong>mount \uB2E8\uACC4</strong> - &lt;template&gt;\uC744 \uB80C\uB354\uB9C1\uD558\uC5EC \uC9C0\uC815\uD55C \uC694\uC18C\uC5D0 \uBD80\uCC29\uD574\uC90C</li><li><strong>update \uB2E8\uACC4</strong> - data\uAC00 \uBCC0\uD558\uBA74 \uD574\uB2F9 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 re-Rendering \uB428</li><li><strong>destroy \uB2E8\uACC4</strong> - \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC0AD\uC81C\uB418\uBA74 \uBC1C\uC0DD</li></ol><br><h2 id="lifecycle-hook" tabindex="-1"><a class="header-anchor" href="#lifecycle-hook" aria-hidden="true">#</a> Lifecycle Hook</h2><p>Lifecycle \uC0AC\uC774\uC0AC\uC774\uC5D0\uC11C \uCF54\uB4DC\uB97C \uC2E4\uD589\uC2DC\uD0A4\uACE0 \uC2F6\uC744 \uB54C \uC0AC\uC6A9\uD568</p><p>script\uBB38\uC5D0 <strong>beforeCreate, created, beforeMount, mounted, beforeUpdate</strong> \uB4F1\uC744 \uC774\uC6A9\uD558\uC5EC<br> \uD544\uC694\uD560 \uB54C \uC6B0\uB9AC\uAC00 \uC6D0\uD558\uB294 \uBA85\uB839\uC744 \uC0BD\uC785\uD560 \uC218 \uC788\uB2E4. (\uBB54\uAC00 \uC548\uB4DC\uB85C\uC774\uB4DC\uB791 \uBE44\uC2B7\uD55C\uB4EF?)</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;abcd&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
  <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \uAE30\uB2A5 \uC791\uC131</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img src="`+a+'" alt="vue-lifecycle"></p><h3 id="_1-create-\u1103\u1161\u11AB\u1100\u1168" tabindex="-1"><a class="header-anchor" href="#_1-create-\u1103\u1161\u11AB\u1100\u1168" aria-hidden="true">#</a> 1. Create \uB2E8\uACC4</h3><p>\uB370\uC774\uD130(data, methods)\uB97C \uC815\uC758\uD574\uC900\uB2E4.</p><ul><li><p><strong>beforeCreate</strong> : data, methods \uC18D\uC131\uC774 \uC544\uC9C1 \uC815\uC758\uB418\uC9C0 \uC54A\uC740 \uC2DC\uC810\uC774\uB77C \uC811\uADFC\uD560 \uC218 \uC5C6\uACE0, DOM\uACFC \uAC19\uC740 \uD654\uBA74 \uC694\uC18C \uB610\uD55C \uC811\uADFC\uD560 \uC218 \uC5C6\uB2E4.</p></li><li><p><strong>created</strong> : data, methods \uC18D\uC131\uC774 \uC815\uC758\uB418\uACE0 \uB098\uC11C \uD638\uCD9C\uB418\uB294 \uBA54\uC18C\uB4DC<br><strong>(\uC8FC\uB85C \uC11C\uBC84\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uBC1B\uC544\uC640\uC11C \uB85C\uCEEC\uB370\uC774\uD130\uC5D0 \uB9E4\uD551\uC2DC\uD0AC \uB54C \uC0AC\uC6A9\uD55C\uB2E4.)</strong></p></li></ul><h3 id="_2-mount-\u1103\u1161\u11AB\u1100\u1168" tabindex="-1"><a class="header-anchor" href="#_2-mount-\u1103\u1161\u11AB\u1100\u1168" aria-hidden="true">#</a> 2. Mount \uB2E8\uACC4</h3><p>\uC778\uC2A4\uD134\uC2A4\uAC00 \uD654\uBA74\uC5D0 \uBD80\uCC29\uB41C\uB2E4.</p><ul><li><p><strong>beforeMount</strong> : DOM\uC5D0 \uC778\uC2A4\uD134\uC2A4\uB97C \uBD80\uCC29\uD558\uAE30 \uC804\uC5D0 \uD638\uCD9C\uB418\uB294 \uBA54\uC18C\uB4DC<br><strong>(render()\uAC00 \uD638\uCD9C\uB418\uAE30 \uC9C1\uC804\uC758 \uB85C\uC9C1\uC744 \uCD94\uAC00\uD560 \uB54C \uC0AC\uC6A9\uD55C\uB2E4.)</strong></p></li><li><p><strong>mounted</strong> : DOM\uC5D0 \uC778\uC2A4\uD134\uC2A4\uAC00 \uBD80\uCC29\uB418\uACE0 \uD638\uCD9C\uB418\uB294 \uBA54\uC18C\uB4DC<br><strong>(DOM\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uC5B4 \uD654\uBA74 \uC81C\uC5B4 \uB85C\uC9C1\uC744 \uC218\uD589\uD558\uAE30 \uC88B\uB2E4.)</strong></p></li></ul><h3 id="_3-update-\u1103\u1161\u11AB\u1100\u1168" tabindex="-1"><a class="header-anchor" href="#_3-update-\u1103\u1161\u11AB\u1100\u1168" aria-hidden="true">#</a> 3. Update \uB2E8\uACC4</h3><p>\uB370\uC774\uD130\uAC00 \uBCC0\uACBD\uB418\uBA74 \uC778\uC2A4\uD134\uC2A4\uB97C \uC0C8\uB85C \uAC31\uC2E0\uD55C\uB2E4.</p><ul><li><p><strong>beforeUpdate</strong> : watch\uB97C \uD1B5\uD574 \uAC10\uC2DC\uD558\uB294 \uAC12\uB4E4\uC774 \uBC14\uB00C\uAE30 \uC804\uC5D0 \uBD80\uB978\uB2E4.<br><strong>(\uBCC0\uACBD \uC608\uC815\uC778 \uC0C8 \uB370\uC774\uD130\uB97C \uC870\uC791\uD558\uAC70\uB098 \uC774\uC640 \uAD00\uB828\uB41C \uB85C\uC9C1\uC744 \uB123\uC5B4\uC904 \uB54C \uB9CE\uC774 \uC0AC\uC6A9\uD55C\uB2E4.)</strong></p></li><li><p><strong>updated</strong> : mounted\uC640 \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uD654\uBA74\uC744 \uADF8\uB9AC\uACE0 \uB098\uC11C \uC2E4\uD589\uB41C\uB2E4. \uAC12\uC744 \uBCC0\uACBD\uD558\uBA74 \uB2E4\uC2DC \uD654\uBA74\uC744 \uB80C\uB354\uB9C1\uD558\uBA74\uC11C \uBB34\uD55C\uB8E8\uD504\uC5D0 \uBE60\uC9C8 \uC218 \uC788\uAE30 \uB54C\uBB38\uC5D0, computed, watch\uC640 \uAC19\uC740 \uC18D\uC131\uC744 \uC0AC\uC6A9\uD574\uC57C \uD55C\uB2E4.<br><strong>(\uBCF4\uD1B5\uC740 \uBCC0\uACBD\uB41C \uB370\uC774\uD130\uC758 DOM\uACFC \uAD00\uB828\uB41C \uB85C\uC9C1\uC744 \uCD94\uAC00\uD55C\uB2E4.)</strong></p></li></ul><h3 id="_4-destroy-\u1103\u1161\u11AB\u1100\u1168" tabindex="-1"><a class="header-anchor" href="#_4-destroy-\u1103\u1161\u11AB\u1100\u1168" aria-hidden="true">#</a> 4. Destroy \uB2E8\uACC4</h3><p>\uC778\uC2A4\uD134\uC2A4\uAC00 \uC18C\uBA78\uB41C\uB2E4.</p><ul><li><p><strong>beforeDestroy</strong> : vue \uC778\uC2A4\uD134\uC2A4\uAC00 \uD30C\uAD34\uB418\uAE30 \uC9C1\uC804\uC5D0 \uD638\uCD9C\uB41C\uB2E4.<br> \uC544\uC9C1 \uC778\uC2A4\uD134\uC2A4\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uAE30 \uB54C\uBB38\uC5D0, <strong>\uC778\uC2A4\uD134\uC2A4\uC758 \uB370\uC774\uD130\uB97C \uC0AD\uC81C\uD558\uAE30 \uC88B\uC740 \uB2E8\uACC4\uB2E4.</strong></p></li><li><p><strong>destroyed</strong> : vue \uC778\uC2A4\uD134\uC2A4\uAC00 \uD30C\uAD34\uB41C \uC774\uD6C4\uC5D0 \uD638\uCD9C\uB41C\uB2E4.</p></li></ul>',21);function r(p,o){return t}var i=s(e,[["render",r]]);export{i as default};
