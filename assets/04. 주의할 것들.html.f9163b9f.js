import{r as p,o as t,c as o,a as n,b as c,F as r,e as a,d as s}from"./app.dfce561e.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=a(`<h1 id="tip-04-\u110C\u116E\u110B\u1174\u1112\u1161\u11AF-\u1100\u1165\u11BA\u1103\u1173\u11AF" tabindex="-1"><a class="header-anchor" href="#tip-04-\u110C\u116E\u110B\u1174\u1112\u1161\u11AF-\u1100\u1165\u11BA\u1103\u1173\u11AF" aria-hidden="true">#</a> Tip-04. \uC8FC\uC758\uD560 \uAC83\uB4E4</h1><h2 id="\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u110C\u1175-\u1106\u1161\u11AF\u110B\u1161\u110B\u1163-\u1112\u1161\u11AF-\u1100\u1165\u11BA\u1103\u1173\u11AF" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u110C\u1175-\u1106\u1161\u11AF\u110B\u1161\u110B\u1163-\u1112\u1161\u11AF-\u1100\u1165\u11BA\u1103\u1173\u11AF" aria-hidden="true">#</a> \uC0AC\uC6A9\uD558\uC9C0 \uB9D0\uC544\uC57C \uD560 \uAC83\uB4E4</h2><h3 id="\u110B\u1167\u11AF\u1100\u1165\u1112\u1167\u11BC-enum" tabindex="-1"><a class="header-anchor" href="#\u110B\u1167\u11AF\u1100\u1165\u1112\u1167\u11BC-enum" aria-hidden="true">#</a> \uC5F4\uAC70\uD615(enum)</h3><p>\uC544\uB798 \uCF54\uB4DC\uCC98\uB7FC \uAC12\uC73C\uB85C \uC22B\uC790\uAC00 \uB4E4\uC5B4\uAC00\uBA74 \uAD1C\uCC2E\uC9C0\uB9CC, \uC22B\uC790 \uC678\uC758 \uB2E4\uB978 \uAC12\uC774 \uB4E4\uC5B4\uAC00\uBA74 \uC758\uB3C4\uC640 \uB2E4\uB974\uAC8C \uB3D9\uC791\uD560 \uC218 \uC788\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">enum</span> Flavor <span class="token punctuation">{</span>
  <span class="token constant">VANILLA</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token constant">CHOCOLATE</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token constant">STRAWBERRY</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><br><p>\uC544\uB798\uC640 \uAC19\uC740 \uBB38\uC790\uC5F4 \uC5F4\uAC70\uD615\uC740 <code>\uB355 \uD0C0\uC774\uD551</code>\uC774 \uC544\uB2CC <code>\uBA85\uBAA9\uC801 \uD0C0\uC774\uD551</code>\uC744 \uC0AC\uC6A9\uD55C\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">enum</span> Flavor <span class="token punctuation">{</span>
    <span class="token constant">VANILLA</span> <span class="token operator">=</span> <span class="token string">&#39;vanilla&#39;</span>
    <span class="token constant">CHOCOLATE</span> <span class="token operator">=</span> <span class="token string">&#39;chocolate&#39;</span>
    <span class="token constant">STRAWBERRY</span> <span class="token operator">=</span> <span class="token string">&#39;strawberry&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> flavor <span class="token operator">=</span> Flavor<span class="token punctuation">.</span><span class="token constant">CHOCOLATE</span> <span class="token comment">// \uD0C0\uC785\uC774 Flavor</span>
flavor <span class="token operator">=</span> <span class="token string">&#39;strawberry&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \uB355\uD0C0\uC774\uD551\uC774\uBA74 Flavor\uC5D0 \uD3EC\uD568\uB418\uBBC0\uB85C \uC5D0\uB7EC\uAC00 \uC548\uB728\uACD8\uC9C0\uB9CC, \uBA85\uBAA9\uC801 \uD0C0\uC774\uD551\uC774\uAE30 \uB54C\uBB38\uC5D0 \uC5D0\uB7EC\uAC00 \uB72C\uB2E4.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><br><p>\uADF8\uB9AC\uACE0 \uBB34\uC5C7\uBCF4\uB2E4... <code>Rollup</code>\uACFC \uAC19\uC740 \uBC88\uB4E4\uB7EC\uC5D0\uC11C \uD2B8\uB9AC\uC250\uC774\uD0B9\uC774 \uB418\uC9C0 \uC54A\uB294\uB2E4.<br> \uC989, \uCD5C\uC801\uD654\uAC00 \uC81C\uB300\uB85C \uC774\uB8E8\uC5B4\uC9C0\uC9C0 \uC54A\uB294\uB2E4.<br><code>enum</code> \uB300\uC2E0 <code>union type</code>\uC774\uB098 <code>const enum</code>\uC744 \uC0AC\uC6A9\uD558\uC790.<br><code>union type</code>\uC740 \uD0C0\uC785\uC2A4\uD06C\uB9BD\uD2B8\uB97C \uC4F4\uB2E4\uBA74 \uC218\uB3C4 \uC5C6\uC774 \uC4F8\uD14C\uB2C8 const enum\uC758 \uC608\uC81C\uB9CC \uC791\uC131\uD55C\uB2E4.<br> \uAC00\uB2A5\uD558\uBA74 <code>union type</code>\uC744 \uC0AC\uC6A9\uD558\uC790.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token keyword">enum</span> <span class="token constant">MOBILE_OS</span> <span class="token punctuation">{</span>
  <span class="token constant">IOS</span> <span class="token operator">=</span> <span class="token string">&#39;iOS&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">ANDROID</span> <span class="token operator">=</span> <span class="token string">&#39;Android&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> ios <span class="token operator">=</span> <span class="token constant">MOBILE_OS</span><span class="token punctuation">.</span><span class="token constant">IOS</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><br><h3 id="\u1106\u1162\u1100\u1162\u1107\u1167\u11AB\u1109\u116E-\u1109\u1169\u11A8\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1106\u1162\u1100\u1162\u1107\u1167\u11AB\u1109\u116E-\u1109\u1169\u11A8\u1109\u1165\u11BC" aria-hidden="true">#</a> \uB9E4\uAC1C\uBCC0\uC218 \uC18D\uC131</h3><p>\uC544\uB798\uC640 \uAC19\uC774 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uAC83\uC744 <code>\uB9E4\uAC1C\uBCC0\uC218 \uC18D\uC131</code>\uC774\uB77C\uACE0 \uD55C\uB2E4.<br> \uB9E4\uAC1C\uBCC0\uC218 \uC18D\uC131\uC740 \uB7F0\uD0C0\uC784\uC2DC\uC5D0 \uC2E4\uC81C\uB85C \uC0AC\uC6A9\uB418\uB294 \uCF54\uB4DC\uC774\uAE30 \uB54C\uBB38\uC5D0 \uBC88\uB4E4\uB420 \uB54C \uCF54\uB4DC\uAC00 \uB298\uC5B4\uB09C\uB2E4.<br> \uAC8C\uB2E4\uAC00 \uAC00\uB3C5\uC131\uB3C4 \uADF8\uB2E5\uC778\uB4EF... \uC77C\uAD00\uC131 \uC788\uAC8C \uD074\uB798\uC2A4 \uBCC0\uC218\uB97C \uC9C1\uC811 \uC120\uC5B8\uD574\uC8FC\uC790.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><br><h3 id="\u1102\u1166\u110B\u1175\u11B7\u1109\u1173\u1111\u1166\u110B\u1175\u1109\u1173\u110B\u116A-\u1110\u1173\u1105\u1175\u1111\u1173\u11AF-\u1109\u1173\u11AF\u1105\u1162\u1109\u1175-\u110B\u1175\u11B7\u1111\u1169\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#\u1102\u1166\u110B\u1175\u11B7\u1109\u1173\u1111\u1166\u110B\u1175\u1109\u1173\u110B\u116A-\u1110\u1173\u1105\u1175\u1111\u1173\u11AF-\u1109\u1173\u11AF\u1105\u1162\u1109\u1175-\u110B\u1175\u11B7\u1111\u1169\u1110\u1173" aria-hidden="true">#</a> \uB124\uC784\uC2A4\uD398\uC774\uC2A4\uC640 \uD2B8\uB9AC\uD50C \uC2AC\uB798\uC2DC \uC784\uD3EC\uD2B8</h3><p><code>namespace</code> \uD0A4\uC6CC\uB4DC\uB098 <code>///</code> \uC784\uD3EC\uD2B8 \uC0AC\uC6A9\uC744 \uC790\uC81C\uD558\uC790.<br> \uB458 \uB2E4 \uD638\uD658\uC131\uC744 \uC704\uD574 \uB0A8\uC544 \uC788\uC744 \uBFD0\uC774\uB2E4. ES2015 \uC2A4\uD0C0\uC77C\uC758 \uBAA8\uB4C8(import, export)\uB97C \uC0AC\uC6A9\uD558\uC790.<br> (namespace\uB294 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB4E4 \uAE4C\uBCF4\uBA74 \uAC00\uB054 \uBCF4\uC774\uB294\uB370... \uD2B8\uB9AC\uD50C \uC2AC\uB798\uC2DC\uB294 \uBCF8 \uC801 \uC5C6\uB294\uAC83 \uAC19\uB2E4.)<br><s>\uC0C8\uB85C \uAC1C\uBC1C\uD558\uB294\uB370 \uC774\uAC83\uB4E4\uC744 \uC4F4\uB2E4? \uC544 \uC774\uAC74 \uC880 \u314B\u314B\u314B;</s></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">namespace</span> foo <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/// &lt;reference path=&quot;other.ts&quot;/&gt;</span>
foo<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><br><h3 id="\u1103\u1166\u110F\u1169\u1105\u1166\u110B\u1175\u1110\u1165" tabindex="-1"><a class="header-anchor" href="#\u1103\u1166\u110F\u1169\u1105\u1166\u110B\u1175\u1110\u1165" aria-hidden="true">#</a> \uB370\uCF54\uB808\uC774\uD130</h3>`,21),d=s("\uB370\uCF54\uB808\uC774\uD130 \uD328\uD134! \uC2A4\uD504\uB9C1\uC5D0\uC11C "),k=n("code",null,"\uC5B4\uB178\uD14C\uC774\uC158",-1),b=s("\uC774\uB77C\uB294 \uC774\uB984\uC73C\uB85C \uB9CE\uC774 \uC0AC\uC6A9\uD574\uBD24\uB358 \uD328\uD134\uC774\uB2E4."),m=n("br",null,null,-1),h=n("code",null,"2020.04.27",-1),_=s("\uC77C\uC790 \uAE30\uC900\uC73C\uB85C tc39\uC5D0 "),g=n("code",null,"stage 3",-1),y=s("\uC5D0 \uC704\uCE58\uD574 \uC788\uB2E4.("),v={href:"https://github.com/tc39/proposal-decorators",target:"_blank",rel:"noopener noreferrer"},f=s("\uAD00\uB828 repo \uB9C1\uD06C"),x=s(")"),w=n("br",null,null,-1),O=s(" \uBE60\uB974\uBA74 \uB0B4\uB144, \uB2A6\uC73C\uBA74 \uB0B4\uD6C4\uB144\uC5D0 \uD45C\uC900\uC73C\uB85C \uD569\uB958\uD560 \uAC00\uB2A5\uC131\uC774 \uB9E4\uC6B0 \uB192\uC9C0\uB9CC... \uC5B4\uB514\uAE4C\uC9C0\uB098 \uAC00\uB2A5\uC131\uC77C \uBFD0\uC774\uB2E4."),E=n("br",null,null,-1),A=s(" \uBE44\uD45C\uC900\uC774 \uB420 \uC218\uB3C4 \uC788\uC73C\uB2C8 \uC77C\uB2E8\uC740 \uC0AC\uC6A9\uC744 \uC790\uC81C\uD558\uC790."),L=a(`<br><h2 id="\u110C\u116E\u110B\u1174\u1112\u1161\u11AF-\u1100\u1165\u11BA\u1103\u1173\u11AF" tabindex="-1"><a class="header-anchor" href="#\u110C\u116E\u110B\u1174\u1112\u1161\u11AF-\u1100\u1165\u11BA\u1103\u1173\u11AF" aria-hidden="true">#</a> \uC8FC\uC758\uD560 \uAC83\uB4E4</h2><h3 id="\u1100\u1162\u11A8\u110E\u1166-\u1109\u116E\u11AB\u1112\u116C" tabindex="-1"><a class="header-anchor" href="#\u1100\u1162\u11A8\u110E\u1166-\u1109\u116E\u11AB\u1112\u116C" aria-hidden="true">#</a> \uAC1D\uCCB4 \uC21C\uD68C</h3><p>\uB355 \uD0C0\uC774\uD551\uC73C\uB85C \uC778\uD574 \uAC1D\uCCB4\uB97C \uC21C\uD68C\uD558\uB294 <code>for in</code> \uBB38\uBC95\uC774 \uC81C\uB300\uB85C \uBA39\uD788\uC9C0 \uC54A\uB294\uB2E4.<br> \uD504\uB85C\uD1A0\uD0C0\uC785 \uC624\uC5FC\uC774 \uB418\uC5B4\uC788\uC744 \uACBD\uC6B0 \uC6B0\uB9AC\uAC00 \uC791\uC131\uD55C \uC18D\uC131 \uC678\uC5D0 \uB2E4\uB978 \uAC12\uB3C4 \uC21C\uD68C\uC5D0 \uD3EC\uD568\uB420 \uC218\uB3C4 \uC788\uAE30 \uB54C\uBB38\uC774\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  one<span class="token operator">:</span> <span class="token string">&#39;uno&#39;</span><span class="token punctuation">,</span>
  two<span class="token operator">:</span> <span class="token string">&#39;dos&#39;</span><span class="token punctuation">,</span>
  three<span class="token operator">:</span> <span class="token string">&#39;tres&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> k <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> v <span class="token operator">=</span> obj<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \uC5EC\uAE30\uC11C \uC5D0\uB7EC</span>
<span class="token punctuation">}</span>
<span class="token comment">// \uC5D0\uB7EC \uBA54\uC138\uC9C0</span>
<span class="token comment">/*
Element implicitly has an &#39;any&#39; type because expression of type &#39;string&#39; can&#39;t be used to index type &#39;{ one: string; two: string; three: string; }&#39;.
  No index signature with a parameter of type &#39;string&#39; was found on type &#39;{ one: string; two: string; three: string; }&#39;
*/</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><br><p>\uAC1D\uCCB4\uB97C \uC21C\uD68C\uD558\uBA70 \uD0A4 \uAC12\uC744 \uC5BB\uACE0 \uC2F6\uB2E4\uBA74, <code>keyof</code>\uB97C \uC774\uC6A9\uD574\uC11C \uD0A4\uC5D0 \uC815\uD655\uD55C \uD0C0\uC785\uC744 \uC9C0\uC815\uD574\uC8FC\uAC70\uB098<br><code>Object.entries(obj)</code>\uC640 \uAC19\uC774 \uBC30\uC5F4\uB85C \uB9CC\uB4E4\uC5B4\uC918\uC11C <code>for of</code>\uB97C \uC0AC\uC6A9\uD558\uC790.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  one<span class="token operator">:</span> <span class="token string">&#39;uno&#39;</span><span class="token punctuation">,</span>
  two<span class="token operator">:</span> <span class="token string">&#39;dos&#39;</span><span class="token punctuation">,</span>
  three<span class="token operator">:</span> <span class="token string">&#39;tres&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>k<span class="token punctuation">,</span> v<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u110C\u1165\u11BC\u1107\u1169\u1105\u1173\u11AF-\u1100\u1161\u11B7\u110E\u116E\u1100\u1175-\u110B\u1171\u1112\u1162-private-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u110C\u1175-\u1106\u1161\u11AF\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110C\u1165\u11BC\u1107\u1169\u1105\u1173\u11AF-\u1100\u1161\u11B7\u110E\u116E\u1100\u1175-\u110B\u1171\u1112\u1162-private-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u110C\u1175-\u1106\u1161\u11AF\u1100\u1175" aria-hidden="true">#</a> \uC815\uBCF4\uB97C \uAC10\uCD94\uAE30 \uC704\uD574 private \uC0AC\uC6A9\uD558\uC9C0 \uB9D0\uAE30</h3><p>\uC5B4\uCC28\uD53C private\uC740 \uB7F0\uD0C0\uC784\uC5D0\uC11C \uC0AC\uB77C\uC9C4\uB2E4. \uC2EC\uC9C0\uC5B4 \uCEF4\uD30C\uC77C \uC2DC\uC810\uC5D0\uC11C\uB3C4 \uB2E8\uC5B8\uBB38\uC744 \uC774\uC6A9\uD558\uBA74 \uC811\uADFC\uC774 \uAC00\uB2A5\uD558\uB2E4.<br> \uC815\uB9D0\uB85C \uC815\uBCF4\uB97C \uAC10\uCD94\uACE0 \uC2F6\uC73C\uBA74 <code>\uD074\uB85C\uC800</code>\uB97C \uC0AC\uC6A9\uD558\uC790.</p><h3 id="\u1100\u1162\u110B\u1175\u11AB\u110C\u1165\u11A8\u110B\u1175\u11AB-\u1110\u1175\u11B8" tabindex="-1"><a class="header-anchor" href="#\u1100\u1162\u110B\u1175\u11AB\u110C\u1165\u11A8\u110B\u1175\u11AB-\u1110\u1175\u11B8" aria-hidden="true">#</a> \uAC1C\uC778\uC801\uC778 \uD301</h3><p><code>array.find&lt;T&gt;()</code>\uC640 \uAC19\uC740 \uD568\uC218\uB294 <code>T</code>\uD0C0\uC785\uC758 \uAC12 \uD639\uC740 undefined\uB97C \uBC18\uD658\uD55C\uB2E4.<br> \uB9CC\uC57D find\uB85C \uAC12\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC744 \uB54C \uB7F0\uD0C0\uC784\uC744 \uC885\uB8CC\uC2DC\uCF1C\uC57C \uD55C\uB2E4\uBA74... \uB9E4\uBC88 \uC608\uC678 \uCC98\uB9AC\uB97C \uD574\uC8FC\uC5B4\uC57C \uD560 \uAC83\uC774\uB2E4.<br> \uC774\uB7F0\uAC83\uB4E4\uC740 \uADF8\uB0E5 \uBAA8\uB4C8\uD654\uD574\uC11C \uC0AC\uC6A9\uC790 \uC815\uC758 \uD568\uC218\uB85C \uB9CC\uB4E4\uC5B4\uBC84\uB9AC\uC790. \uADF8\uAC8C \uC18D \uD3B8\uD558\uB2E4.</p>`,12);function j(I,S){const e=p("ExternalLinkIcon");return t(),o(r,null,[u,n("p",null,[d,k,b,m,h,_,g,y,n("a",v,[f,c(e)]),x,w,O,E,A]),L],64)}var R=l(i,[["render",j]]);export{R as default};
