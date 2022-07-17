import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as a}from"./app.404da4f0.js";const d={},s=a(`<h1 id="mutationobserver" tabindex="-1"><a class="header-anchor" href="#mutationobserver" aria-hidden="true">#</a> MutationObserver</h1><p>DOM\uC758 \uAE30\uB2A5\uC911 \uD558\uB098\uC774\uBA70, DOM \uC694\uC18C\uC5D0 \uBC1C\uC0DD\uD558\uB294 \uBCC0\uACBD\uC0AC\uD56D\uC744 \uAC10\uC9C0\uD558\uB294 \uAC1D\uCCB4\uC774\uB2E4.</p><h2 id="\u110B\u1168\u110C\u1166" tabindex="-1"><a class="header-anchor" href="#\u110B\u1168\u110C\u1166" aria-hidden="true">#</a> \uC608\uC81C</h2><h3 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> html</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;body&gt;
    &lt;div id=&quot;main&quot;&gt;&lt;/div&gt;
    &lt;button id=&quot;attributes&quot;&gt;attributes&lt;/button&gt;
    &lt;button id=&quot;childList&quot;&gt;childList&lt;/button&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> javascript</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>var target = document.getElementById(&#39;main&#39;);

var observer = new MutationObserver((mutations) =&gt; {
    mutations.forEach((mutation) =&gt; {
        console.log(mutation);
    })
})

var config = {
    attributes : true, // \uD0DC\uADF8\uC758 \uC18D\uC131(id, class \uB4F1)\uC774 \uBCC0\uACBD\uB418\uB294 \uAC83\uC744 \uAC10\uC9C0\uD568
    attributeOldValue: true || null, // true\uBA74 \uBCC0\uACBD\uC804 \uC18D\uC131\uAC12\uB3C4 \uBCF4\uC5EC\uC90C
    characterData: true, // \uD0DC\uADF8\uC758 \uD14D\uC2A4\uD2B8 \uB300\uC774\uD130\uAC00 \uBCC0\uACBD\uB418\uB294\uC9C0 \uAC10\uC2DC\uD568
    characterDataOldValue: true | null, // childList \uC18D\uC131\uACFC \uACB9\uCCD0\uC11C childList\uB97C false\uB85C \uD574\uC57C \uAE30\uB85D\uB428
    childList: true, // \uD574\uB2F9 \uD0DC\uADF8\uC758 \uC790\uC2DD \uD0DC\uADF8\uB4E4\uC774 \uBCC0\uACBD\uB418\uB294\uC9C0 \uCD94\uC801\uD568
    subtree: true || null, // true\uBA74 \uC790\uC2DD \uD0DC\uADF8\uC5D0 \uBCC0\uACBD\uC774 \uC77C\uC5B4\uB098\uB3C4 \uBCC0\uACBD\uC810\uC744 \uAE30\uB85D\uD574\uC90C
}; // \uAC10\uC2DC\uD560 \uB0B4\uC6A9 \uC124\uC815

observer.observe(target, config); // \uAC10\uC2DC \uB300\uC0C1 \uC124\uC815

document.getElementById(&#39;attributes&#39;).addEventListener(&#39;click&#39;, () =&gt; {
    target.setAttribute(&#39;class&#39;, &#39;main-new&#39;);
});

document.getElementById(&#39;childList&#39;).addEventListener(&#39;click&#39;, () =&gt; {
    target.textContent = &#39;giwon&#39;;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u110F\u1169\u11AB\u1109\u1169\u11AF\u110B\u1166-\u110D\u1175\u11A8\u1112\u1175\u1102\u1173\u11AB-\u1100\u1167\u11AF\u1100\u116A" tabindex="-1"><a class="header-anchor" href="#\u110F\u1169\u11AB\u1109\u1169\u11AF\u110B\u1166-\u110D\u1175\u11A8\u1112\u1175\u1102\u1173\u11AB-\u1100\u1167\u11AF\u1100\u116A" aria-hidden="true">#</a> \uCF58\uC194\uC5D0 \uCC0D\uD788\uB294 \uACB0\uACFC</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>MutationRecords = {
  addedNodes: [], // \uCD94\uAC00\uB41C \uC790\uC2DD \uB178\uB4DC,
  attributeName: null, // \uBCC0\uACBD\uB41C \uC18D\uC131\uBA85
  attributeNamespace: null, // \uBCC0\uACBD\uB41C \uC18D\uC131\uB124\uC784\uC2A4\uD398\uC774\uC2A4
  nextSibling: null, // \uB2E4\uC74C \uD615\uC81C \uD0DC\uADF8
  previousSibling: null, // \uC774\uC804 \uD615\uC81C \uD0DC\uADF8
  oldValue: null, // \uBCC0\uACBD\uC804 \uAC12 
  removedNodes: [], // \uC81C\uAC70\uB41C \uC790\uC2DD \uB178\uB4DC 
  target: Element, // \uB300\uC0C1 \uD0DC\uADF8 
  type: &#39;attributes&#39; || &#39;childList&#39; || &#39;characterData&#39; // \uC5B4\uB5A4 \uC885\uB958\uAC00 \uBCC0\uACBD\uB418\uC5C8\uB294\uC9C0
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1100\u1161\u11B7\u1109\u1175-\u110C\u116E\u11BC\u110C\u1175" tabindex="-1"><a class="header-anchor" href="#\u1100\u1161\u11B7\u1109\u1175-\u110C\u116E\u11BC\u110C\u1175" aria-hidden="true">#</a> \uAC10\uC2DC \uC911\uC9C0</h2><p>\uD574\uB2F9 \uBA54\uC11C\uB4DC\uB97C \uC0AC\uC6A9\uD558\uBA74 \uAC10\uC2DC\uAC00 \uC911\uC9C0\uB41C\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>objserver.disconnect();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),t=[s];function l(r,v){return i(),n("div",null,t)}var m=e(d,[["render",l],["__file","MutationObserver.html.vue"]]);export{m as default};
