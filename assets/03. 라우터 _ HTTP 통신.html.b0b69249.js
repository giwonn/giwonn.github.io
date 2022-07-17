import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as d,a as i,b as r,w as a,e as t,d as e,r as v}from"./app.404da4f0.js";const u={},c=t('<h1 id="_3-\u1105\u1161\u110B\u116E\u1110\u1165-http-\u1110\u1169\u11BC\u1109\u1175\u11AB" tabindex="-1"><a class="header-anchor" href="#_3-\u1105\u1161\u110B\u116E\u1110\u1165-http-\u1110\u1169\u11BC\u1109\u1175\u11AB" aria-hidden="true">#</a> 3. \uB77C\uC6B0\uD130 &amp; HTTP \uD1B5\uC2E0</h1><h2 id="vue-router" tabindex="-1"><a class="header-anchor" href="#vue-router" aria-hidden="true">#</a> Vue Router</h2><p>\uBDF0\uC5D0\uC11C \uB77C\uC6B0\uD305 \uAE30\uB2A5\uC744 \uAD6C\uD604\uD560 \uC218 \uC788\uB3C4\uB85D \uC9C0\uC6D0\uD558\uB294 \uACF5\uC2DD \uB77C\uC774\uBE0C\uB7EC\uB9AC</p><table><thead><tr><th style="text-align:center;">\uD0DC\uADF8</th><th style="text-align:center;">\uC124\uBA85</th></tr></thead><tbody><tr><td style="text-align:center;"><code>&lt;router-link to=&quot;URL \uAC12&quot;&gt;</code></td><td style="text-align:center;">\uD398\uC774\uC9C0 \uC774\uB3D9 <br>(\uD654\uBA74\uC5D0\uC11C\uB294 <code>&lt;a&gt;</code>\uB85C \uD45C\uD604 \uB428)</td></tr><tr><td style="text-align:center;"><code>&lt;router-view&gt;</code></td><td style="text-align:center;">\uD398\uC774\uC9C0 \uD45C\uC2DC \uD0DC\uADF8<br>(router-link \uD0DC\uADF8\uB97C \uD074\uB9AD\uD558\uBA74 router-view \uC601\uC5ED\uC774 \uBC14\uB01C)</td></tr></tbody></table>',4),o=e("\uCF54\uB4DC \uC608\uC81C ("),m=e("\uB9C1\uD06C"),b=e(")"),h=t(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;html&gt;
  &lt;head&gt;
    &lt;!-- ...\uC911\uB7B5... --&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- ...\uC911\uB7B5... --&gt;

    &lt;!-- \uB77C\uC6B0\uD130 \uB9C1\uD06C \uC601\uC5ED --&gt;
    &lt;router-link to=&quot;/main&quot;&gt;Main\uC73C\uB85C \uC774\uB3D9&lt;/router-link&gt;
    &lt;router-link to=&quot;/login&quot;&gt;Login\uC73C\uB85C \uC774\uB3D9&lt;/router-link&gt;

    &lt;!-- \uB77C\uC6B0\uD305 \uB418\uB294 \uC601\uC5ED --&gt;
    &lt;router-view&gt;&lt;/router-view&gt;

    &lt;script src=&quot;vue CDN&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;vue \uB77C\uC6B0\uD130 CDN&quot;&gt;&lt;/script&gt;
    &lt;script&gt;
      var Main = { template: &#39;&lt;div&gt;main&lt;/div&gt;&#39; };
      var Login = { template: &#39;&lt;div&gt;login&lt;/div&gt;&#39; };

      var routes = [
        { path: &#39;/main&#39;, component: Main },
        { path: &#39;/login&#39;, component: Login },
      ];

      var router = new VueRouter({
        mode: &#39;history&#39;,
        routes,
      });

      var app = new Vue({
        router,
      }).$mount(&#39;#app&#39;);
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>$mount() : el \uC18D\uC131\uACFC \uB3D9\uC77C\uD558\uAC8C \uC778\uC2A4\uD134\uC2A4\uB97C \uD654\uBA74\uC5D0 \uBD99\uC774\uB294 \uC5ED\uD560\uC744 \uD558\uB294 API</p></blockquote><h2 id="nested-router-\u1102\u1166\u1109\u1173\u1110\u1175\u1103\u1173-\u1105\u1161\u110B\u116E\u1110\u1165" tabindex="-1"><a class="header-anchor" href="#nested-router-\u1102\u1166\u1109\u1173\u1110\u1175\u1103\u1173-\u1105\u1161\u110B\u116E\u1110\u1165" aria-hidden="true">#</a> Nested Router (\uB124\uC2A4\uD2F0\uB4DC \uB77C\uC6B0\uD130)</h2><p>\uD55C\uAE00\uB85C \uBC88\uC5ED\uD558\uBA74 <strong>\uC911\uCCA9 \uB77C\uC6B0\uD130</strong>\uB77C\uB294 \uB73B\uC774\uB2E4.<br> &lt;router-view&gt;\uB85C \uBCF4\uC5EC\uC904 view \uB0B4\uBD80\uC5D0\uC11C\uB3C4 &lt;router-view&gt;\uB97C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0\uB97C \uB9D0\uD55C\uB2E4.<br> \uB77C\uC6B0\uD305\uC744 \uC815\uC758\uD560 \uB54C <strong>children</strong> \uC18D\uC131\uC744 \uC0AC\uC6A9\uD558\uBA74 \uB41C\uB2E4.</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>var routes = [
  {
    path: &#39;/user&#39;,
    component: User,
    children: [
      {
        path: &#39;posts&#39;, // = /user/posts
        component: UserPost,
      },
      {
        path: &#39;profile&#39;, // = /user/profile
        component: UserProfile,
      },
    ],
  },
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="named-view-\u1102\u1166\u110B\u1175\u11B7\u1103\u1173-\u1107\u1172" tabindex="-1"><a class="header-anchor" href="#named-view-\u1102\u1166\u110B\u1175\u11B7\u1103\u1173-\u1107\u1172" aria-hidden="true">#</a> Named View (\uB124\uC784\uB4DC \uBDF0)</h2><p>\uB124\uC784\uB4DC \uBDF0\uB294 \uAC19\uC740 \uB808\uBCA8\uC5D0\uC11C \uC5EC\uB7EC\uAC1C\uC758 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD55C\uBC88\uC5D0 \uBCF4\uC5EC\uC904 \uB54C \uC0AC\uC6A9\uD55C\uB2E4.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;!-- ..\uC911\uB7B5.. --&gt;
&lt;div id=&quot;app&quot;&gt;
  &lt;router-view name=&quot;header&quot;&gt;&lt;/router-view&gt;
  &lt;router-view&gt;&lt;/router-view&gt;
  &lt;router-view name=&quot;footer&quot;&gt;&lt;/router-view&gt;
&lt;/div&gt;

&lt;!-- ..\uC911\uB7B5.. --&gt;

&lt;script&gt;
  var Body = { template: &#39;&lt;div&gt;This is Body&lt;/div&gt;&#39; };
  var Header = { template: &#39;&lt;div&gt;This is Header&lt;/div&gt;&#39; };
  var Footer = { template: &#39;&lt;div&gt;This is Footer&lt;/div&gt;&#39; };

  var router = new VueRouter({
      routes: [
          path: &#39;/&#39;,
          components: {
              default: Body,
              header: Header,
              footer: Footer
          }
      ]
  });

  // ..\uC911\uB7B5..
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-http-\u1110\u1169\u11BC\u1109\u1175\u11AB" tabindex="-1"><a class="header-anchor" href="#vue-http-\u1110\u1169\u11BC\u1109\u1175\u11AB" aria-hidden="true">#</a> Vue HTTP \uD1B5\uC2E0</h2><p>HTTP\uB294 \uBE0C\uB77C\uC6B0\uC800\uC640 \uC11C\uBC84 \uAC04\uC5D0 \uB370\uC774\uD130\uB97C \uC8FC\uACE0\uBC1B\uB294 \uD1B5\uC2E0 \uD504\uB85C\uD1A0\uCF5C\uC774\uB2E4.</p><h3 id="\u1107\u1172-\u1105\u1175\u1109\u1169\u1109\u1173-vue-resource" tabindex="-1"><a class="header-anchor" href="#\u1107\u1172-\u1105\u1175\u1109\u1169\u1109\u1173-vue-resource" aria-hidden="true">#</a> \uBDF0 \uB9AC\uC18C\uC2A4 (vue-resource)</h3><p>http \uD1B5\uC2E0 \uAD00\uB828 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC774\uB2E4.<br> axios, fetch \uB4F1 \uB300\uC548\uC774 \uB9CE\uC73C\uBBC0\uB85C \uAD73\uC774 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC544\uB3C4 \uB428</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;!-- ..\uC911\uB7B5.. --&gt;
&lt;body&gt;
  &lt;div id=&quot;app&quot;&gt;
    &lt;button @click=&quot;getData&quot;&gt;\uD504\uB808\uC784\uC6CC\uD06C \uBAA9\uB85D \uAC00\uC838\uC624\uAE30&lt;/button&gt;
  &lt;/div&gt;
  &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js&quot;&gt;&lt;/script&gt;
  &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue-resource@1.3.4&quot;&gt;&lt;/script&gt;
  &lt;script&gt;
    new Vue({
      el: &#39;#app&#39;,
      methods: {
        getData: function () {
          // this.$http.get() : vue resource\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 API
          this.$http
            .get(\`https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json\`)
            .then(function (response) {
              console.log(response);
              console.log(JSON.parse(response.data));
            });
        },
      },
    });
  &lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> Axios</h3><p>\uD604\uC7AC Vue\uC5D0\uC11C \uAC00\uC7A5 \uB9CE\uC774 \uC0AC\uC6A9\uB418\uB294 HTTP \uD1B5\uC2E0 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC774\uB2E4.<br> fetch\uC640 \uB2E4\uB974\uAC8C \uAD6C\uD615 \uBE0C\uB77C\uC6B0\uC800\uB97C \uC9C0\uC6D0\uD558\uBA70, \uB370\uC774\uD130\uB97C json(\uAC1D\uCCB4)\uD615\uD0DC\uB85C \uC790\uB3D9 \uBCC0\uD658\uD574\uC900\uB2E4.</p><table><thead><tr><th style="text-align:center;">API \uC720\uD615</th><th style="text-align:center;">\uCC98\uB9AC \uACB0\uACFC</th></tr></thead><tbody><tr><td style="text-align:center;">axios.get(&#39;url \uC8FC\uC18C&#39;).then().catch()</td><td style="text-align:center;">get\uC694\uCCAD\uC5D0 \uB300\uD55C \uC751\uB2F5\uC744 \uBC1B\uB294\uB2E4.</td></tr><tr><td style="text-align:center;">axios.post(&#39;url \uC8FC\uC18C&#39;).then().catch()</td><td style="text-align:center;">post \uC694\uCCAD\uC5D0 \uB300\uD55C \uC751\uB2F5\uC744 \uBC1B\uB294\uB2E4.</td></tr><tr><td style="text-align:center;">axios({ \uC635\uC158 \uC18D\uC131 })</td><td style="text-align:center;">http \uC694\uCCAD\uC5D0 \uB300\uD55C \uC815\uC758\uB97C \uC9C1\uC811 \uD560 \uC218 \uC788\uB2E4.</td></tr></tbody></table>`,16);function g(p,x){const n=v("RouterLink");return s(),d("div",null,[c,i("ul",null,[i("li",null,[o,r(n,{to:"/TIL/FW%20-%20Vue/test/router.html"},{default:a(()=>[m]),_:1}),b])]),h])}var q=l(u,[["render",g],["__file","03. \uB77C\uC6B0\uD130 & HTTP \uD1B5\uC2E0.html.vue"]]);export{q as default};
