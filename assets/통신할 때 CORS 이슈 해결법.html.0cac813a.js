import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as i,e as s}from"./app.404da4f0.js";const n={},t=s(`<h1 id="\u1110\u1169\u11BC\u1109\u1175\u11AB-\u1109\u1175\u110B\u1166-cors-\u110B\u1175\u1109\u1172-\u1112\u1162\u1100\u1167\u11AF\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#\u1110\u1169\u11BC\u1109\u1175\u11AB-\u1109\u1175\u110B\u1166-cors-\u110B\u1175\u1109\u1172-\u1112\u1162\u1100\u1167\u11AF\u1107\u1165\u11B8" aria-hidden="true">#</a> \uD1B5\uC2E0 \uC2DC\uC5D0 CORS \uC774\uC288 \uD574\uACB0\uBC95</h1><p>\uBCF4\uD1B5 \uBC31\uB2E8\uACFC \uD504\uB860\uD2B8\uB2E8 \uBD84\uB9AC\uD558\uC5EC \uC2E4\uD589\uC2DC\uD0A4\uBA74 CORS \uC774\uC288\uB97C \uB9CE\uC774 \uBCF4\uAC8C \uB41C\uB2E4.</p><p>CORS(\uD06C\uB85C\uC2A4 \uB3C4\uBA54\uC778 \uC774\uC288)\uB97C \uD574\uACB0\uD558\uB294 \uBC29\uBC95\uC740 \uBA87 \uAC00\uC9C0\uAC00 \uC788\uB2E4.</p><p>CORS \uC774\uC288\uB294 \uBCF4\uD1B5 \uC11C\uBC84\uCE21\uC5D0\uC11C \uD574\uACB0\uD558\uB294 \uAC83\uC774 \uBCF4\uD3B8\uC801\uC778 \uBC29\uBC95\uC774\uB2E4.</p><h2 id="crossorigin-origins" tabindex="-1"><a class="header-anchor" href="#crossorigin-origins" aria-hidden="true">#</a> @CrossOrigin(origins = &quot;*&quot;)</h2><p>:::tip \uC791\uC131\uBC29\uBC95 @CrossOrigin(origins = &quot;<strong>\uD5C8\uC6A9\uC8FC\uC18C:\uD3EC\uD2B8</strong>&quot;) :::</p><p>\uD574\uB2F9 \uC5B4\uB178\uD14C\uC774\uC158\uC744 \uD1B5\uC2E0\uD558\uB294 \uCEE8\uD2B8\uB864\uB7EC\uC5D0 \uBD99\uC5EC\uC8FC\uBA74 \uAC04\uB2E8\uD788 \uD574\uACB0\uB41C\uB2E4.</p><p>\uBCC4\uD45C \uB300\uC2E0 \uC8FC\uC18C\uB97C \uB123\uC5B4\uB3C4 \uB41C\uB2E4.</p><br><h2 id="resp-setheader" tabindex="-1"><a class="header-anchor" href="#resp-setheader" aria-hidden="true">#</a> resp.setHeader()</h2><p>:::tip \uC791\uC131\uBC29\uBC95 resp.setHeader(&quot;Access-Control-Allow-Origin&quot;, req.getHeader(&quot;<strong>\uD5C8\uC6A9\uC8FC\uC18C:\uD3EC\uD2B8</strong>&quot;)); :::</p><p>\uC694\uCCAD\uC774 \uB4E4\uC5B4\uC624\uBA74 response\uB85C \uD5E4\uB354\uB97C \uC9C1\uC811 \uD5C8\uC6A9\uD574\uC900\uB2E4. \uC694\uCCAD \uBC29\uC2DD(GET, POST)\uC5D0 \uB530\uB77C\uC11C \uD5C8\uC6A9\uD574\uC904 \uC218\uB3C4 \uC788\uACE0, \uADF8 \uC678\uC5D0 \uC635\uC158\uB3C4 \uB2E4\uC591\uD558\uB2E4.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class LogFilter implements Filter {

	// ...

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
                // ...

                HttpServletResponse resp = (HttpServletResponse) response;
                // req.getHeader(&quot;Origin&quot;) -&gt; http://localhost:3000

                // Origin \uB300\uC2E0 &quot;\uC8FC\uC18C:\uD3EC\uD2B8\uBC88\uD638&quot; \uD615\uC2DD\uC73C\uB85C \uB123\uC5B4\uB3C4 \uB41C\uB2E4.
                // \uC774\uC804 \uBC29\uBC95\uC778 \uC5B4\uB178\uD14C\uC774\uC158\uACFC \uB611\uAC19\uC774 \uB3D9\uC791\uD55C\uB2E4.
                resp.setHeader(&quot;Access-Control-Allow-Origin&quot;, req.getHeader(&quot;Origin&quot;));
                resp.setHeader(&quot;Access-Control-Allow-Credentials&quot;, &quot;true&quot;);
                resp.setHeader(&quot;Access-Control-Allow-Methods&quot;, &quot;GET, POST&quot;);
                resp.setHeader(&quot;Access-Control-Max-Age&quot;, &quot;10&quot;);
                resp.setHeader(&quot;Access-Control-Allow-Headers&quot;, &quot;Content-Type, Accept, X-Requested-With, remember-me&quot;);

                // ...

	}

    // ...

}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[t];function d(o,a){return r(),i("div",null,l)}var v=e(n,[["render",d],["__file","\uD1B5\uC2E0\uD560 \uB54C CORS \uC774\uC288 \uD574\uACB0\uBC95.html.vue"]]);export{v as default};
