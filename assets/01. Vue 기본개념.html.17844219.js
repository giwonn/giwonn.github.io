import{r as t,o,c as l,a,t as r,b as i,F as p,e,d as n}from"./app.997e5a3f.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";var d="/images/TIL/FW-Vue/mvvm.png";const u={},h=e('<h1 id="_1-vue-\u1105\u1161\u11AB" tabindex="-1"><a class="header-anchor" href="#_1-vue-\u1105\u1161\u11AB" aria-hidden="true">#</a> 1. Vue \uB780?</h1><p>\uC6F9 \uAC1C\uBC1C\uC744 \uC704\uD55C <strong>FrontEnd \uD504\uB808\uC784\uC6CC\uD06C</strong>\uC774\uBA70,<br> MVVM \uD328\uD134\uC758 ViewModel\uC5D0 \uD574\uB2F9\uD558\uB294 \uD654\uBA74\uB2E8 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC774\uAE30\uB3C4 \uD558\uB2E4.</p><h3 id="\u1110\u1173\u11A8\u110C\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1110\u1173\u11A8\u110C\u1175\u11BC" aria-hidden="true">#</a> \uD2B9\uC9D5</h3><ol><li><strong>MVVM \uD328\uD134</strong></li><li><strong>\uC591\uBC29\uD5A5 \uB370\uC774\uD130 \uBC14\uC778\uB529</strong>(\uC575\uADE4\uB7EC)\uC640 <strong>\uB2E8\uBC29\uD5A5 \uB370\uC774\uD130 \uD750\uB984</strong>(\uB9AC\uC561\uD2B8)</li></ol><h2 id="mvvm-\u1111\u1162\u1110\u1165\u11AB" tabindex="-1"><a class="header-anchor" href="#mvvm-\u1111\u1162\u1110\u1165\u11AB" aria-hidden="true">#</a> MVVM \uD328\uD134</h2><p><img src="'+d+`" alt="mvvm \uD328\uD134"></p><p>View\uAC00 \uD2B9\uC815 \uBAA8\uB378(View-Model, Model)\uC5D0 \uC885\uC18D\uB418\uC9C0 \uC54A\uB3C4\uB85D \uB85C\uC9C1\uC744 \uBD84\uB9AC\uD55C \uD328\uD134\uC774\uB2E4.<br> \uBDF0, \uBAA8\uB378, \uBDF0\uBAA8\uB378\uC744 \uBD84\uB9AC\uD558\uC5EC \uB3C5\uB9BD\uC801\uC73C\uB85C \uAC1C\uBC1C\uC744 \uD560 \uC218 \uC788\uC73C\uBA70, View-Model \uACC4\uCE35\uC744 \uD1B5\uD574 View\uC640 Model\uC774 \uC5C5\uB370\uC774\uD2B8\uB41C\uB2E4.</p><table><thead><tr><th style="text-align:center;">Layer</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">View</td><td style="text-align:center;">\uC0AC\uC6A9\uC790\uAC00 \uBCF4\uBA70 \uC0C1\uD638\uC791\uC6A9\uD558\uB294 UI</td></tr><tr><td style="text-align:center;">ViewModel</td><td style="text-align:center;">Model\uACFC View\uB97C \uB3D9\uAE30\uD654\uD574\uC8FC\uBA70 Vue\uC5D0\uC11C\uB294 Vue\uC778\uC2A4\uD134\uC2A4\uB97C \uB73B\uD55C\uB2E4.<br>DOM Listener\uC640 \uB370\uC774\uD130 \uBC14\uC778\uB529\uC744 \uC81C\uACF5\uD55C\uB2E4.</td></tr><tr><td style="text-align:center;">Model</td><td style="text-align:center;">\uB370\uC774\uD130\uC640 \uBE44\uC988\uB2C8\uC2A4 \uB85C\uC9C1\uC744 \uB2F4\uB294 \uACF3.<br>JS\uC5D0\uC11C\uB294 Object(JSON) \uD615\uD0DC\uB85C \uC800\uC7A5\uB418\uC5B4\uC788\uB2E4\uACE0 \uBCF4\uBA74 \uB41C\uB2E4.<br>Vue\uC758 Data \uC18D\uC131\uC5D0 \uD574\uB2F9\uD55C\uB2E4.</td></tr></tbody></table><h3 id="view" tabindex="-1"><a class="header-anchor" href="#view" aria-hidden="true">#</a> View</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{message}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="viewmodel" tabindex="-1"><a class="header-anchor" href="#viewmodel" aria-hidden="true">#</a> ViewModel</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>const vue = new Vue({
  el: &#39;#app&#39;, // \uC5F0\uACB0\uD560 View\uB97C \uC9C0\uC815
  data: model, // \uC5F0\uACB0\uD560 Model\uC744 \uC9C0\uC815
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="model" tabindex="-1"><a class="header-anchor" href="#model" aria-hidden="true">#</a> Model</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> model <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;hi&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\uC5B8\uB73B \uBCF4\uBA74 \uBDF0\uAC00 \uBDF0\uBAA8\uB378\uC5D0 \uC758\uC874\uC801\uC778\uAC83\uCC98\uB7FC \uBCF4\uC774\uC9C0\uB9CC, <strong>Command \uD328\uD134</strong>\uACFC <strong>\uB370\uC774\uD130 \uBC14\uC778\uB529</strong>\uC744 \uD1B5\uD574 \uC758\uC874\uC131\uC744 \uC81C\uAC70\uD558\uC600\uB2E4.</p><blockquote><p>Command \uD328\uD134 : \uD2B9\uC815 \uAC1D\uCCB4\uC5D0 \uB300\uD55C \uAE30\uB2A5(\uBA85\uB839)\uB4E4\uC744 \uAC1D\uCCB4 \uB0B4\uBD80\uC5D0\uC11C \uAD6C\uD604\uD558\uB294\uAC83\uC774 \uC544\uB2CC, \uAC1D\uCCB4\uD654\uD558\uC5EC \uC778\uD130\uD398\uC774\uC2A4\uB97C \uD1B5\uD574 \uC81C\uACF5\uD558\uB294\uAC83</p></blockquote>`,16),m=e('<br><h2 id="\u110B\u1163\u11BC\u1107\u1161\u11BC\u1112\u1163\u11BC-\u1103\u1166\u110B\u1175\u1110\u1165-\u1107\u1161\u110B\u1175\u11AB\u1103\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110B\u1163\u11BC\u1107\u1161\u11BC\u1112\u1163\u11BC-\u1103\u1166\u110B\u1175\u1110\u1165-\u1107\u1161\u110B\u1175\u11AB\u1103\u1175\u11BC" aria-hidden="true">#</a> \uC591\uBC29\uD5A5 \uB370\uC774\uD130 \uBC14\uC778\uB529</h2><p>View\uB098 Model\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uBCC0\uACBD\uD558\uBA74 \uB2E4\uB978 \uD55C\uCABD\uB3C4 \uB370\uC774\uD130\uAC00 \uC790\uB3D9\uC73C\uB85C \uBCC0\uACBD\uB41C\uB2E4.</p><br><h2 id="\u1103\u1161\u11AB\u1107\u1161\u11BC\u1112\u1163\u11BC-\u1103\u1166\u110B\u1175\u1110\u1165-\u1112\u1173\u1105\u1173\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1107\u1161\u11BC\u1112\u1163\u11BC-\u1103\u1166\u110B\u1175\u1110\u1165-\u1112\u1173\u1105\u1173\u11B7" aria-hidden="true">#</a> \uB2E8\uBC29\uD5A5 \uB370\uC774\uD130 \uD750\uB984</h2><p>\uB370\uC774\uD130\uC758 \uD750\uB984\uC774 \uD55C\uCABD\uC73C\uB85C \uC815\uD574\uC838 \uC788\uB294 \uAC83\uC744 \uB73B\uD55C\uB2E4.<br> \uC0C1\uC704 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uD558\uC704 \uCEF4\uD3EC\uB10C\uD2B8\uB85C\uB9CC \uC804\uB2EC\uB418\uAC8C \uAD6C\uC870\uD654\uB418\uC5B4\uC788\uB2E4.<br> (\uB370\uC774\uD130\uB97C \uC0C1\uC704\uB85C \uC804\uB2EC\uD558\uB824\uBA74 \uC774\uBCA4\uD2B8\uBC84\uC2A4\uC640 \uAC19\uC740 \uBC29\uBC95\uC73C\uB85C \uB370\uC774\uD130\uB97C \uC804\uB2EC\uD558\uBA74 \uAC00\uB2A5\uD558\uAE34 \uD558\uB2E4.)</p><br><h2 id="\u1100\u1161\u1109\u1161\u11BC-dom" tabindex="-1"><a class="header-anchor" href="#\u1100\u1161\u1109\u1161\u11BC-dom" aria-hidden="true">#</a> \uAC00\uC0C1 DOM</h2>',8),b=a("strong",null,"DOM\uC744 \uBCF8 \uB530 \uB9CC\uB4E0 \uAC1D\uCCB4 \uB369\uC5B4\uB9AC",-1),g=n("\uC774\uBA70, diff \uC54C\uACE0\uB9AC\uC998\uC744 \uD1B5\uD574 Real DOM \uB300\uC2E0 \uBC14\uB010 \uC810\uC744 \uD0D0\uC0C9\uD574\uC8FC\uC5B4 \uB80C\uB354\uB9C1 \uACFC\uC815\uC744 \uC904\uC5EC\uC8FC\uACE0 \uBE0C\uB77C\uC6B0\uC800\uC758 \uBD80\uB2F4\uC744 \uB35C\uC5B4\uC900\uB2E4."),_=a("br",null,null,-1),v=n(" \uC6D0\uB798\uB294 \uAD00\uB828\uB41C DOM \uC694\uC18C\uAC00 \uBC14\uB014 \uB54C\uB9C8\uB2E4 \uBC14\uB010 \uD69F\uC218\uB9CC\uD07C \uB80C\uB354\uB9C1\uC744 \uD574\uC8FC\uB294\uB370,"),k=a("br",null,null,-1),V=n(" \uAC00\uC0C1 DOM\uC744 \uD1B5\uD574\uC11C \uBC14\uB010 \uACF3\uC744 \uD30C\uC545\uD558\uACE0 \uCD5C\uC885\uC801\uC73C\uB85C "),x=a("strong",null,"\uD55C\uBC88\uB9CC \uB80C\uB354\uB9C1\uD574\uC900\uB2E4",-1),M=n(". "),f={href:"https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Virtual-DOM/#_1-%E1%84%80%E1%85%A1%E1%84%89%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A9%E1%86%B7-virtualdom-%E1%84%86%E1%85%A1%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF%E1%84%80%E1%85%B5",target:"_blank",rel:"noopener noreferrer"},w=n("(\uCC38\uACE0)"),E=a("div",{class:"custom-container tip"},[a("p",{class:"custom-container-title"},"TIP"),a("p",null,"DOM\uC694\uC18C\uB97C \uC870\uC791\uD558\uB294\uAC83\uBCF4\uB2E4 \uB80C\uB354\uB9C1\uC744 \uC5EC\uB7EC\uBC88 \uD574\uC8FC\uB294 \uBE44\uC6A9\uC774 \uD6E8\uC52C \uD06C\uB2E4.")],-1);function y(D,O){const s=t("ExternalLinkIcon");return o(),l(p,null,[h,a("blockquote",null,[a("p",null,"\uB370\uC774\uD130 \uBC14\uC778\uB529 : view\uC758 \uC694\uC18C\uB4E4\uC744 \uB370\uC774\uD130\uC640 \uC5F0\uACB0\uD574\uC900\uB2E4. Vue\uC5D0\uC11C\uB294 \uC8FC\uB85C "+r()+"\uC640 v-bind\uB97C \uD1B5\uD574 \uC591\uBC29\uD5A5 \uB370\uC774\uD130 \uBC14\uC778\uB529\uC744 \uAD6C\uD604\uD55C\uB2E4.",1)]),m,a("p",null,[b,g,_,v,k,V,x,M,a("a",f,[w,i(s)])]),E],64)}var q=c(u,[["render",y]]);export{q as default};
