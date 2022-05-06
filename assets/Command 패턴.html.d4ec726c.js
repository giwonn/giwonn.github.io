import{e as n}from"./app.f43e426a.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="command-\u1111\u1162\u1110\u1165\u11AB" tabindex="-1"><a class="header-anchor" href="#command-\u1111\u1162\u1110\u1165\u11AB" aria-hidden="true">#</a> Command \uD328\uD134</h1><p>\uCEE4\uB9E8\uB4DC \uD328\uD134\uC740 \uAC1D\uCCB4\uC758 <strong>\uD589\uC704(\uBA54\uC11C\uB4DC)\uB97C \uD074\uB798\uC2A4\uB85C \uB9CC\uB4E4\uC5B4 \uCEA1\uC290\uD654</strong> \uD558\uB294 \uD328\uD134\uC774\uB2E4.</p><p>\uBA54\uC11C\uB4DC\uB97C \uD074\uB798\uC2A4\uB85C \uB9CC\uB4E4\uC5B4 \uCEA1\uC290\uD654\uD558\uBA74 \uC5B4\uB5A4 \uAC1D\uCCB4\uC5D0\uC11C \uB2E4\uB978 \uAC1D\uCCB4\uC758 \uBA54\uC11C\uB4DC\uB97C \uC0AC\uC6A9\uD560 \uB54C \uBC1C\uC0DD\uD558\uB294 \uC758\uC874\uC131\uC744 \uC81C\uAC70\uD560 \uC218 \uC788\uB2E4.</p><p>Vue\uC5D0\uC11C\uB3C4 Command\uD328\uD134\uACFC \uC591\uBC29\uD5A5 \uBC14\uC778\uB529\uC744 \uC774\uC6A9\uD558\uC5EC View\uC640 ViewModel \uAC04\uC758 \uC758\uC874\uC131\uC744 \uC81C\uAC70\uD558\uC600\uB2E4.</p><h2 id="\u110B\u1168\u1109\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1168\u1109\u1175" aria-hidden="true">#</a> \uC608\uC2DC</h2><h3 id="tv-\u110F\u1173\u11AF\u1105\u1162\u1109\u1173" tabindex="-1"><a class="header-anchor" href="#tv-\u110F\u1173\u11AF\u1105\u1162\u1109\u1173" aria-hidden="true">#</a> TV \uD074\uB798\uC2A4</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">TV</span> <span class="token punctuation">{</span>
    <span class="token function">powerOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;TV on&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="okgoogle-\u110F\u1173\u11AF\u1105\u1162\u1109\u1173" tabindex="-1"><a class="header-anchor" href="#okgoogle-\u110F\u1173\u11AF\u1105\u1162\u1109\u1173" aria-hidden="true">#</a> OKGoogle \uD074\uB798\uC2A4</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">OKGoogle</span> <span class="token punctuation">{</span>
    tv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TV</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">tv</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tv <span class="token operator">=</span> tv<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">talk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tv<span class="token punctuation">.</span><span class="token function">powerOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u1100\u1167\u11AF\u1100\u116A" tabindex="-1"><a class="header-anchor" href="#\u1100\u1167\u11AF\u1100\u116A" aria-hidden="true">#</a> \uACB0\uACFC</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> tv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TV</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> okGoogle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OKGoogle</span><span class="token punctuation">(</span>tv<span class="token punctuation">)</span><span class="token punctuation">;</span>

okGoogle<span class="token punctuation">.</span><span class="token function">talk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\uB2E4\uC74C\uACFC \uAC19\uC774 \uC791\uC131\uD55C\uB2E4\uBA74... TV \uC774\uC678\uC5D0 \uD788\uD130\uB97C \uC870\uC791\uC744 \uCD94\uAC00\uD55C\uB2E4\uBA74 OKGoogle \uD074\uB798\uC2A4 \uB610\uD55C \uC218\uC815\uB418\uC5B4\uC57C \uD55C\uB2E4.<br> (\uD788\uD130 \uD074\uB798\uC2A4 \uC791\uC131\uD558\uACE0, OKGoogle \uD074\uB798\uC2A4\uC5D0 \uD504\uB85C\uD37C\uD2F0\uB85C \uB123\uC5B4\uC8FC\uACE0, \uC0DD\uC131\uC790\uC5D0\uB3C4 \uCD94\uAC00\uD574\uC8FC\uACE0 <code>talk()</code>\uC5D0\uC11C \uBD84\uAE30\uBB38 \uC791\uC131\uD574\uC8FC\uACE0 \uB4F1\uB4F1...)</p><p>\uAE30\uB2A5\uC774 \uCD94\uAC00\uB420\uC218\uB85D \uC758\uC874\uC131\uC774 \uB298\uC5B4\uB098\uB294\uB370 \uC774\uB7F4 \uB54C \uCEE4\uB9E8\uB4DC \uD328\uD134\uC744 \uC801\uC6A9\uD558\uBA74 \uC88B\uB2E4.<br> \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC0AC\uC6A9\uD574\uC57C \uD558\uB2C8 <code>Typescript</code>\uB97C \uC0AC\uC6A9\uD558\uACA0\uB2E4.</p><h2 id="\u1109\u116E\u110C\u1165\u11BC-\u1112\u116E" tabindex="-1"><a class="header-anchor" href="#\u1109\u116E\u110C\u1165\u11BC-\u1112\u116E" aria-hidden="true">#</a> \uC218\uC815 \uD6C4</h2><h3 id="command-\u110B\u1175\u11AB\u1110\u1165\u1111\u1166\u110B\u1175\u1109\u1173" tabindex="-1"><a class="header-anchor" href="#command-\u110B\u1175\u11AB\u1110\u1165\u1111\u1166\u110B\u1175\u1109\u1173" aria-hidden="true">#</a> Command \uC778\uD130\uD398\uC774\uC2A4</h3><p>\uBA3C\uC800 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC815\uC758\uD55C\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
    <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="tv-\u1100\u116A\u11AB\u1105\u1167\u11AB-\u110F\u1173\u11AF\u1105\u1162\u1109\u1173" tabindex="-1"><a class="header-anchor" href="#tv-\u1100\u116A\u11AB\u1105\u1167\u11AB-\u110F\u1173\u11AF\u1105\u1162\u1109\u1173" aria-hidden="true">#</a> TV \uAD00\uB828 \uD074\uB798\uC2A4</h3><p>\uBC11\uC5D0 Heater \uD074\uB798\uC2A4\uB3C4 \uB9C8\uCC2C\uAC00\uC9C0\uC9C0\uB9CC,<br> TV\uB77C\uB294 \uC804\uC790\uC81C\uD488\uC5D0 \uB4E4\uC5B4\uAC00\uB294 <code>\uC804\uC6D0ON</code>\uAE30\uB2A5\uC744 \uD074\uB798\uC2A4\uB85C \uAD6C\uD604\uD574\uB193\uACE0 \uD574\uB2F9 \uAE30\uB2A5\uC73C\uB85C \uC5B4\uB290 TV\uB97C \uC870\uC791\uD560\uAC74\uC9C0 \uC0DD\uC131\uC790 \uD30C\uB77C\uBBF8\uD130\uB85C \uC804\uB2EC\uD574\uC904\uAC83\uC774\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">TV</span> <span class="token punctuation">{</span>
    <span class="token function">powerOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;TV on&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">TvOnCommand</span> <span class="token keyword">implements</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
    tv<span class="token operator">:</span> <span class="token constant">TV</span><span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>tv<span class="token operator">:</span> <span class="token constant">TV</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tv <span class="token operator">=</span> tv<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tv<span class="token punctuation">.</span><span class="token function">powerOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="heater-\u1100\u116A\u11AB\u1105\u1167\u11AB-\u110F\u1173\u11AF\u1105\u1162\u1109\u1173" tabindex="-1"><a class="header-anchor" href="#heater-\u1100\u116A\u11AB\u1105\u1167\u11AB-\u110F\u1173\u11AF\u1105\u1162\u1109\u1173" aria-hidden="true">#</a> Heater \uAD00\uB828 \uD074\uB798\uC2A4</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Heater</span> <span class="token punctuation">{</span>
    <span class="token function">turnOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Heater on&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">HeaterOnCommand</span> <span class="token keyword">implements</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
    heater<span class="token operator">:</span> Heater<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>heater<span class="token operator">:</span> Heater<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>heater <span class="token operator">=</span> heater<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        heater<span class="token punctuation">.</span><span class="token function">turnOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="okgoogle-\u110F\u1173\u11AF\u1105\u1162\u1109\u1173-\u110B\u1175\u11AB\u1107\u1169\u110F\u1165" tabindex="-1"><a class="header-anchor" href="#okgoogle-\u110F\u1173\u11AF\u1105\u1162\u1109\u1173-\u110B\u1175\u11AB\u1107\u1169\u110F\u1165" aria-hidden="true">#</a> OKGoogle \uD074\uB798\uC2A4 (\uC778\uBCF4\uCEE4)</h3><p>\uD074\uB798\uC2A4\uD654\uB97C \uD55C \uAE30\uB2A5\uB4E4\uC744 OKGoogle\uC744 \uD1B5\uD574 \uC0AC\uC6A9\uD55C\uB2E4.<br> \uBAA8\uB4E0 \uAE30\uB2A5\uB4E4\uC740 Command\uB97C \uD1B5\uD574 \uAD6C\uD604\uB418\uC5C8\uC73C\uBBC0\uB85C Command \uD0C0\uC785\uC73C\uB85C \uAC00\uC838\uC628\uB2E4. \uC774\uB7F0\uC2DD\uC73C\uB85C \uC2E4\uD589\uD560 \uAE30\uB2A5(\uD074\uB798\uC2A4\uD654 \uD55C \uBA54\uC11C\uB4DC)\uC744 \uAC08\uC544\uB084 \uC218 \uC788\uB294 \uD074\uB798\uC2A4\uB97C <strong>\uC778\uBCF4\uCEE4</strong>\uB77C\uACE0 \uBD80\uB978\uB2E4.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">OKGoogle</span> <span class="token punctuation">{</span>
    command<span class="token operator">:</span> Command<span class="token punctuation">;</span>

    <span class="token function">setCommand</span><span class="token punctuation">(</span>command<span class="token operator">:</span> Command<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>command <span class="token operator">=</span> command<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">talk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>command<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u1100\u1167\u11AF\u1100\u116A-1" tabindex="-1"><a class="header-anchor" href="#\u1100\u1167\u11AF\u1100\u116A-1" aria-hidden="true">#</a> \uACB0\uACFC</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> tv1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">TV</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> heater1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Heater</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> okGoogle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OKGoogle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token comment">// tv\uC758 \uC778\uC2A4\uD134\uC2A4 \uC911\uC5D0 \uC5B4\uB5A4\uAC83\uC744 \uC870\uC791\uD560\uAC74\uC9C0 \uD30C\uB77C\uBBF8\uD130\uC5D0 \uB123\uC5B4\uC900\uB2E4.</span>
 <span class="token comment">// \uC0AC\uC6A9\uD560 \uAE30\uB2A5\uB4E4\uC5D0 \uC778\uC2A4\uD134\uC2A4\uD654 \uB41C \uAE30\uAE30\uB97C \uC5F0\uB3D9\uD574\uC900\uB2E4.</span>
<span class="token keyword">const</span> tvOnCommand<span class="token operator">:</span> Command <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TvOnCommand</span><span class="token punctuation">(</span>tv1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> heaterOnCommand<span class="token operator">:</span> Command <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HeaterOnCommand</span><span class="token punctuation">(</span>heater1<span class="token punctuation">)</span><span class="token punctuation">;</span>

okGoogle<span class="token punctuation">.</span><span class="token function">setCommand</span><span class="token punctuation">(</span>tvOnCommand<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// okGoogle\uC5D0 TV\uB97C \uD0A4\uB77C\uACE0 \uBA85\uB839\uD588\uB2E4.</span>
okGoogle<span class="token punctuation">.</span><span class="token function">talk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// okGoogle\uC774 \uD574\uB2F9 \uBA85\uB839\uC744 \uC2E4\uD589\uD55C\uB2E4.</span>

okGoogle<span class="token punctuation">.</span><span class="token function">setCommand</span><span class="token punctuation">(</span>heaterOnCommand<span class="token punctuation">)</span><span class="token punctuation">;</span>
okGoogle<span class="token punctuation">.</span><span class="token function">talk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\uC774\uB807\uAC8C \uD558\uBA74 \uAE30\uB2A5\uB4E4\uC774 OKGoogle\uC5D0 \uCD94\uAC00\uB418\uC9C0 \uC54A\uACE0 \uD544\uC694\uD560 \uB54C \uBE14\uB7ED \uC870\uB9BD\uD558\uB4EF\uC774 \uAC16\uB2E4 \uBD99\uC77C \uC218 \uC788\uAC8C \uB41C\uB2E4.</p><h2 id="\u1112\u116E\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1112\u116E\u1100\u1175" aria-hidden="true">#</a> \uD6C4\uAE30</h2><p>Vue\uB97C \uCC98\uC74C \uACF5\uBD80\uD560 \uB54C Command \uD328\uD134\uC744 \uC0AC\uC6A9\uD55C\uB2E4\uAE38\uB798 <code>\uC774\uAC8C \uB300\uCCB4 \uBB50\uC9C0..?</code> \uC2F6\uC5C8\uACE0</p><p>Command \uD328\uD134\uC744 \uCC98\uC74C \uACF5\uBD80\uD560 \uB54C\uB294 <code>\uC544 \uC774\uB7EC\uBA74 \uC758\uC874\uC131\uC774 \uC81C\uAC70\uB418\uAE34 \uD558\uACA0\uAD6C\uB098...</code>\uB77C\uB294 \uCC1C\uCC1C\uD568\uC774 \uB0A8\uC544\uC788\uC5C8\uB2E4.</p><p>\uC774\uBC88\uC5D0 \uB2E4\uC2DC \uACF5\uBD80\uD558\uBA74\uC11C \uC6D0\uB9AC\uB97C \uAC70\uC758 \uC774\uD574\uD558\uAC8C \uB418\uC5C8\uB2E4.</p><p>\uB514\uC790\uC778 \uD328\uD134\uC740 \uC5ED\uC2DC \uC5B4\uB835\uB2E4...</p><p>\uC0AC\uC2E4 \uB514\uC790\uC778 \uD328\uD134\uC774\uB780\uAC8C \uC774\uB860\uAC19\uC740\uAC8C \uC544\uB2C8\uAE30\uC5D0, \uC554\uAE30\uD558\uAE30\uBCF4\uB2E4\uB294 \uC774\uD574\uD558\uACE0 \uB0B4 \uAC83\uC73C\uB85C \uC2B5\uB4DD\uD558\uB294\uAC8C \uC911\uC694\uD558\uB2E4\uACE0 \uC0DD\uAC01\uD55C\uB2E4.</p><p>\uADF8\uB798\uC11C \uC77C\uB2E8 \uCEE4\uB9E8\uB4DC \uD328\uD134\uC740 \uC5EC\uAE30\uC11C \uB9C8\uBB34\uB9AC \uC9C0\uC73C\uB824\uACE0 \uD55C\uB2E4.</p><p>\uAE30\uC5B5\uC774 \uC548\uB09C\uB2E4\uBA74 \uB2E4\uC2DC \uC774 \uAE00\uC744 \uBCF4\uBA70 \uB9AC\uB9C8\uC778\uB529\uC744 \uB04A\uC784\uC5C6\uC774 \uD558\uBA70 \uC810\uC810 \uC644\uBCBD\uD558\uAC8C \uB0B4 \uAC83\uC73C\uB85C \uC775\uD788\uC790.</p>`,38);function e(t,o){return p}var u=s(a,[["render",e]]);export{u as default};
