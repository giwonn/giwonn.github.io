import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,e as d}from"./app.404da4f0.js";const s={},a=d(`<h1 id="\u1103\u1169\u110F\u1165-\u1110\u1175\u11B8" tabindex="-1"><a class="header-anchor" href="#\u1103\u1169\u110F\u1165-\u1110\u1175\u11B8" aria-hidden="true">#</a> \uB3C4\uCEE4 \uD301</h1><h2 id="dockerfile\u110B\u1174-\u1105\u1166\u110B\u1175\u110B\u1165-\u1109\u116E\u11AB\u1109\u1165\u110B\u1166-\u110C\u116E\u110B\u1174\u1112\u1161\u110C\u1161" tabindex="-1"><a class="header-anchor" href="#dockerfile\u110B\u1174-\u1105\u1166\u110B\u1175\u110B\u1165-\u1109\u116E\u11AB\u1109\u1165\u110B\u1166-\u110C\u116E\u110B\u1174\u1112\u1161\u110C\u1161" aria-hidden="true">#</a> Dockerfile\uC758 \uB808\uC774\uC5B4 \uC21C\uC11C\uC5D0 \uC8FC\uC758\uD558\uC790</h2><p>\uC544\uB798\uC640 \uAC19\uC740 \uB3C4\uCEE4\uD30C\uC77C\uC774 \uC788\uB2E4.</p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code>FROM node

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 80

CMD [&quot;node&quot;, &quot;server.js&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704 \uCF54\uB4DC\uC758 \uB2E8\uC810\uC740 \uCF54\uB4DC\uAC00 \uBC14\uB00C\uBA74 \uBAA8\uB4E0 \uB808\uC774\uC5B4\uAC00 \uC7AC\uC2E4\uD589 \uB41C\uB2E4\uB294 \uC810\uC774\uB2E4.<br><code>package.json</code>\uC740 \uC218\uC815\uB418\uC9C0 \uC54A\uC558\uB294\uB370\uB3C4 <code>npm install</code>\uC744 \uC7AC\uC2E4\uD589\uD55C\uB2E4.</p><p>\uC7AC\uC2E4\uD589\uB418\uB294 \uC774\uC720\uB294 \uC0C1\uC704 \uB808\uC774\uC5B4\uAC00 \uBC14\uB00C\uC5C8\uAE30 \uB584\uBB38\uC774\uB2E4.<br> \uC6B0\uB9AC\uB294 \uCE90\uC2DC\uB97C \uD65C\uC6A9\uD558\uACE0 \uC2F6\uB2E4. \uADF8\uB7EC\uBA74 \uC5B4\uB5BB\uAC8C \uD558\uBA74\uB420\uAE4C?</p><p>\uC77C\uB2E8 \uCF54\uB4DC\uBD80\uD130 \uBCF4\uC790. \uC544\uB798\uC640 \uAC19\uC774 \uBC14\uAFD4\uC8FC\uBA74 \uB41C\uB2E4.</p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code>FROM node

WORKDIR /app

# 1. package.json\uC744 \uBA3C\uC800 \uCD94\uAC00\uD55C\uB2E4.
COPY package.json /app
# 2. package.json\uC744 \uC218\uC815\uD558\uC9C0 \uC54A\uC558\uB2E4\uBA74 \uC0C1\uC704 \uB808\uC774\uC5B4\uC5D0\uC11C\uB294 \uBC14\uB010\uAC8C \uC5C6\uC73C\uBBC0\uB85C \uCE90\uC2DC\uB97C \uD1B5\uD55C \uC7AC\uC2E4\uD589
RUN npm install

COPY . /app

EXPOSE 80

CMD [&quot;node&quot;, &quot;server.js&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[a];function r(c,v){return n(),i("div",null,l)}var m=e(s,[["render",r],["__file","\uB3C4\uCEE4 \uD301.html.vue"]]);export{m as default};
