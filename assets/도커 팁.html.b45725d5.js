import{e as n}from"./app.9e0f94f9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u1103\u1169\u110F\u1165-\u1110\u1175\u11B8" tabindex="-1"><a class="header-anchor" href="#\u1103\u1169\u110F\u1165-\u1110\u1175\u11B8" aria-hidden="true">#</a> \uB3C4\uCEE4 \uD301</h1><h2 id="dockerfile\u110B\u1174-\u1105\u1166\u110B\u1175\u110B\u1165-\u1109\u116E\u11AB\u1109\u1165\u110B\u1166-\u110C\u116E\u110B\u1174\u1112\u1161\u110C\u1161" tabindex="-1"><a class="header-anchor" href="#dockerfile\u110B\u1174-\u1105\u1166\u110B\u1175\u110B\u1165-\u1109\u116E\u11AB\u1109\u1165\u110B\u1166-\u110C\u116E\u110B\u1174\u1112\u1161\u110C\u1161" aria-hidden="true">#</a> Dockerfile\uC758 \uB808\uC774\uC5B4 \uC21C\uC11C\uC5D0 \uC8FC\uC758\uD558\uC790</h2><p>\uC544\uB798\uC640 \uAC19\uC740 \uB3C4\uCEE4\uD30C\uC77C\uC774 \uC788\uB2E4.</p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> node</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token instruction"><span class="token keyword">COPY</span> . /app</span>

<span class="token instruction"><span class="token keyword">RUN</span> npm install</span>

<span class="token instruction"><span class="token keyword">EXPOSE</span> 80</span>

<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;node&quot;</span>, <span class="token string">&quot;server.js&quot;</span>]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\uC704 \uCF54\uB4DC\uC758 \uB2E8\uC810\uC740 \uCF54\uB4DC\uAC00 \uBC14\uB00C\uBA74 \uBAA8\uB4E0 \uB808\uC774\uC5B4\uAC00 \uC7AC\uC2E4\uD589 \uB41C\uB2E4\uB294 \uC810\uC774\uB2E4.<br><code>package.json</code>\uC740 \uC218\uC815\uB418\uC9C0 \uC54A\uC558\uB294\uB370\uB3C4 <code>npm install</code>\uC744 \uC7AC\uC2E4\uD589\uD55C\uB2E4.</p><p>\uC7AC\uC2E4\uD589\uB418\uB294 \uC774\uC720\uB294 \uC0C1\uC704 \uB808\uC774\uC5B4\uAC00 \uBC14\uB00C\uC5C8\uAE30 \uB584\uBB38\uC774\uB2E4.<br> \uC6B0\uB9AC\uB294 \uCE90\uC2DC\uB97C \uD65C\uC6A9\uD558\uACE0 \uC2F6\uB2E4. \uADF8\uB7EC\uBA74 \uC5B4\uB5BB\uAC8C \uD558\uBA74\uB420\uAE4C?</p><p>\uC77C\uB2E8 \uCF54\uB4DC\uBD80\uD130 \uBCF4\uC790. \uC544\uB798\uC640 \uAC19\uC774 \uBC14\uAFD4\uC8FC\uBA74 \uB41C\uB2E4.</p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> node</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token comment"># 1. package.json\uC744 \uBA3C\uC800 \uCD94\uAC00\uD55C\uB2E4.</span>
<span class="token instruction"><span class="token keyword">COPY</span> package.json /app</span>
<span class="token comment"># 2. package.json\uC744 \uC218\uC815\uD558\uC9C0 \uC54A\uC558\uB2E4\uBA74 \uC0C1\uC704 \uB808\uC774\uC5B4\uC5D0\uC11C\uB294 \uBC14\uB010\uAC8C \uC5C6\uC73C\uBBC0\uB85C \uCE90\uC2DC\uB97C \uD1B5\uD55C \uC7AC\uC2E4\uD589</span>
<span class="token instruction"><span class="token keyword">RUN</span> npm install</span>

<span class="token instruction"><span class="token keyword">COPY</span> . /app</span>

<span class="token instruction"><span class="token keyword">EXPOSE</span> 80</span>

<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;node&quot;</span>, <span class="token string">&quot;server.js&quot;</span>]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,8);function p(r,c){return e}var t=s(a,[["render",p]]);export{t as default};
