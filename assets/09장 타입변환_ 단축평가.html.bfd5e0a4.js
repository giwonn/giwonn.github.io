import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as i,e as l}from"./app.404da4f0.js";const s={},d=l(`<h1 id="_9\u110C\u1161\u11BC-\u1110\u1161\u110B\u1175\u11B8\u1107\u1167\u11AB\u1112\u116A\u11AB\u1100\u116A-\u1103\u1161\u11AB\u110E\u116E\u11A8\u1111\u1167\u11BC\u1100\u1161" tabindex="-1"><a class="header-anchor" href="#_9\u110C\u1161\u11BC-\u1110\u1161\u110B\u1175\u11B8\u1107\u1167\u11AB\u1112\u116A\u11AB\u1100\u116A-\u1103\u1161\u11AB\u110E\u116E\u11A8\u1111\u1167\u11BC\u1100\u1161" aria-hidden="true">#</a> 9\uC7A5. \uD0C0\uC785\uBCC0\uD658\uACFC \uB2E8\uCD95\uD3C9\uAC00</h1><h2 id="\u1110\u1161\u110B\u1175\u11B8-\u1107\u1167\u11AB\u1112\u116A\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1110\u1161\u110B\u1175\u11B8-\u1107\u1167\u11AB\u1112\u116A\u11AB" aria-hidden="true">#</a> \uD0C0\uC785 \uBCC0\uD658</h2><hr><ul><li>\uBA85\uC2DC\uC801 \uD0C0\uC785 \uBCC0\uD658 : \uAC1C\uBC1C\uC790\uAC00 \uC758\uB3C4\uC801\uC73C\uB85C \uAC12\uC758 \uD0C0\uC785\uC744 \uBCC0\uD658\uD558\uB294 \uAC83 (=\uD0C0\uC785 \uCE90\uC2A4\uD305)</li><li>\uC554\uBB35\uC801 \uD0C0\uC785 \uBCC0\uD658 : \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uC5D4\uC9C4\uC5D0 \uC758\uD574 \uC554\uBB35\uC801\uC73C\uB85C \uD0C0\uC785\uC774 \uBCC0\uD658\uD558\uB294 \uAC83 (=\uD0C0\uC785 \uAC15\uC81C \uBCC0\uD658)</li></ul><p>ex) \uD15C\uD50C\uB9BF \uB9AC\uD130\uB7F4\uC740 \uD45C\uD604\uC2DD\uC758 \uD3C9\uACFC \uACB0\uACFC\uB97C \uBB38\uC790\uC5F4 \uD0C0\uC785\uC73C\uB85C \uC554\uBB35\uC801 \uD0C0\uC785 \uBCC0\uD658\uD55C\uB2E4.</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>0 +
  &#39;&#39; - // -&gt; &quot;0&quot;
  0 +
  &#39;&#39;; // -&gt; &quot;0&quot;
1 +
  &#39;&#39; - // -&gt; &quot;1&quot;
  1 +
  &#39;&#39;; // -&gt; &quot;-1&quot;
NaN + &#39;&#39;; // -&gt; &quot;NaN&quot;
Infinity +
  &#39;&#39; - // -&gt; &quot;Infinity&quot;
  Infinity +
  &#39;&#39;; // -&gt; &quot;-Infinity&quot;

true + &#39;&#39;; // &quot;true&quot;

null + &#39;&#39;; // &quot;null&quot;

undefined +
  &#39;&#39;(
    // &quot;undefined&quot;

    Symbol()
  ) +
  &#39;&#39;(
    // TypeError

    {}
  ) +
  &#39;&#39;; // &quot;[object Object]&quot;
Math +
  &#39;&#39;[(10, 20)] + // &quot;[object Math]&quot;
  &#39;&#39;(
    // &quot;10,20&quot;
    function () {}
  ) +
  &#39;&#39;; // &quot;function(){}&quot;
Array + &#39;&#39;; // &quot;function Array() { [native code] }&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\uC22B\uC790 \uD0C0\uC785 \uBCC0\uD658 : \uC0B0\uC220 \uC5F0\uC0B0\uC790 \uD45C\uD604\uC2DD\uC744 \uD3C9\uAC00\uD560 \uB54C \uC22B\uC790 \uD0C0\uC785\uC774 \uC544\uB2C8\uBA74 \uC554\uBB35\uC801\uC73C\uB85C \uC22B\uC790 \uD0C0\uC785\uC73C\uB85C \uBCC0\uD658\uD55C\uB2E4.</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>1 - &#39;1&#39;; // 0
1 * &#39;10&#39;; // 10
1 / &#39;one&#39;; // NaN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>boolean \uD0C0\uC785\uC73C\uB85C \uBCC0\uD658 : \uC544\uB798\uC758 false\uAC12\uB4E4 \uC678\uC5D0\uB294 \uC804\uBD80 true\uB2E4.</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>// false\uB85C \uD3C9\uAC00\uB418\uB294 \uAC12\uB4E4
false;
undefined;
null;
0, -0;
NaN;
(&#39;&#39;); // \uBE48 \uBB38\uC790\uC5F4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1106\u1167\u11BC\u1109\u1175\u110C\u1165\u11A8-\u1110\u1161\u110B\u1175\u11B8-\u1107\u1167\u11AB\u1112\u116A\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1106\u1167\u11BC\u1109\u1175\u110C\u1165\u11A8-\u1110\u1161\u110B\u1175\u11B8-\u1107\u1167\u11AB\u1112\u116A\u11AB" aria-hidden="true">#</a> \uBA85\uC2DC\uC801 \uD0C0\uC785 \uBCC0\uD658</h2><ul><li><p>\uD45C\uC900 \uBE4C\uD2B8\uC778 \uC0DD\uC131\uC790 \uD568\uC218 : \uAC1D\uCCB4\uB97C \uC0DD\uC131\uD558\uAE30 \uC704\uD55C \uD568\uC218\uC774\uBA70 new \uC5F0\uC0B0\uC790\uC640 \uD568\uAED8 \uD638\uCD9C\uD55C\uB2E4.</p></li><li><p>\uD45C\uC900 \uBE4C\uD2B8\uC778 \uBA54\uC11C\uB4DC : \uBE4C\uD2B8\uC778 \uAC1D\uCCB4\uC758 \uBA54\uC11C\uB4DC (21\uC7A5\uC5D0\uC11C \uC790\uC138\uD788!)</p></li><li><p>\uBB38\uC790\uC5F4 \uD0C0\uC785\uC73C\uB85C \uBCC0\uD658</p></li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>// String \uC0DD\uC131\uC790 \uD568\uC218\uB97C new \uC5F0\uC0B0\uC790 \uC5C6\uC774 \uD638\uCD9C\uD558\uB294 \uBC29\uBC95
String(\uAC12);

// Object.prototype.toString \uBA54\uC11C\uB4DC\uB97C \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95
\uAC12.toString();

// \uBB38\uC790\uC5F4 \uC5F0\uACB0 \uC5F0\uC0B0\uC790\uB97C \uC774\uC6A9\uD558\uB294 \uBC29\uBC95
\uAC12 + &#39;&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\uC22B\uC790 \uD0C0\uC785\uC73C\uB85C \uBCC0\uD658</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>// Numebr \uC0DD\uC131\uC790 \uD568\uC218\uB97C new \uC5F0\uC0B0\uC790 \uC5C6\uC774 \uD638\uCD9C\uD558\uB294 \uBC29\uBC95
Numebr(\uAC12);

// parseInt, parseFloat \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95(\uBB38\uC790\uC5F4\uB9CC \uAC00\uB2A5)
parseInt(&#39;1&#39;); // 1
parseFloat(&#39;10.53&#39;); // 10.53

// + \uB2E8\uD56D \uC0B0\uC220 \uC5F0\uC0B0\uC790\uB97C \uC774\uC6A9\uD558\uB294 \uBC29\uBC95
+&#39;0&#39;; // 0
+true; // 1
+false; // 0

// * \uC0B0\uC220 \uC5F0\uC0B0\uC790\uB97C \uC774\uC6A9\uD558\uB294 \uBC29\uBC95
// \uBB38\uC790\uC5F4 -&gt; \uC22B\uC790
&#39;0&#39; * 1; // 0
true * 1; // 1
false * 1; // 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\uBD88\uB9AC\uC5B8 \uD0C0\uC785\uC73C\uB85C \uBCC0\uD658</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>// boolean \uC0DD\uC131\uC790 \uD568\uC218\uB97C new \uC5F0\uC0B0\uC790 \uC5C6\uC774 \uD638\uCD9C\uD558\uB294 \uBC29\uBC95
Boolean(&#39;x&#39;); // true
Boolean(&#39;&#39;); // false

Boolean(0); // false
Boolean(1); // true
Boolean(NaN); // false
Boolean(Infinity); // true

Boolean(null); // false
Boolean(undefined); // false

Boolean({}); // true
Boolean([]); // true

// \uB2E4\uC911 \uBD80\uC815(!!)\uC744 \uC774\uC6A9\uD55C \uBC29\uBC95
// 1. \uCCAB\uBC88\uC9F8 \uBD80\uC815\uC73C\uB85C \uC6D0\uB798 \uAC12\uC744 boolean\uD0C0\uC785\uC73C\uB85C \uBC14\uAFB8\uACE0 \uBC18\uB300\uB85C \uBCC0\uD658\uD574\uC900\uB2E4.
// 2. \uBC18\uB300\uB85C \uCD9C\uB825\uB41C \uAC12\uC744 \uB2E4\uC2DC \uBC18\uB300\uB85C(\uC6D0\uB798\uB300\uB85C) \uBCC0\uD658\uD574\uC900\uB2E4.

!!&#39;x&#39;; // true
!!&#39;&#39;; // false

!!0; // false
!!1; // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1103\u1161\u11AB\u110E\u116E\u11A8-\u1111\u1167\u11BC\u1100\u1161" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u110E\u116E\u11A8-\u1111\u1167\u11BC\u1100\u1161" aria-hidden="true">#</a> \uB2E8\uCD95 \uD3C9\uAC00</h2><hr><ul><li>\uB17C\uB9AC \uC5F0\uC0B0\uC790\uB97C \uC0AC\uC6A9\uD55C \uB2E8\uCD95 \uD3C9\uAC00</li></ul><p>\uB17C\uB9AC\uD569(||) \uD639\uC740 \uB17C\uB9AC\uACF1(&amp;&amp;) \uC5F0\uC0B0\uC758 \uD3C9\uAC00 \uACB0\uACFC\uB294 \uBD88\uB9AC\uC5B8 \uAC12\uC774 \uC544\uB2D0 \uC218\uB3C4 \uC788\uB2E4.</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>// &amp;&amp; : \uB9C8\uC9C0\uB9C9 \uD53C\uC5F0\uC0B0\uC790\uB97C \uCD9C\uB825\uD55C\uB2E4.
&#39;Cat&#39; &amp;&amp; &#39;Dog&#39;; // &quot;Dog&quot;

// || : \uCCAB\uBC88\uC9F8 \uD53C\uC5F0\uC0B0\uC790\uB97C \uCD9C\uB825\uD55C\uB2E4.
&#39;Cat&#39; || &#39;Dog&#39;; // &quot;Cat&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704\uCC98\uB7FC \uB17C\uB9AC\uD569, \uB17C\uB9AC\uACF1\uC740 <strong>\uD53C\uC5F0\uC0B0\uC790\uB97C \uD0C0\uC785 \uBCC0\uD658\uD558\uC9C0 \uC54A\uACE0 \uADF8\uB300\uB85C \uBC18\uD658\uD55C\uB2E4(=\uB2E8\uCD95\uD3C9\uAC00).</strong></p><p>\uB2E8\uCD95\uD3C9\uAC00 : \uD45C\uD604\uC2DD\uC744 \uD3C9\uAC00\uD558\uB294 \uB3C4\uC911\uC5D0 \uD3C9\uAC00 \uACB0\uACFC\uAC00 \uD655\uC815\uB41C \uACBD\uC6B0 \uB098\uBA38\uC9C0 \uD3C9\uAC00 \uACFC\uC815\uC744 \uC0DD\uB7B5\uD558\uB294 \uAC83</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>&#39;Cat&#39; || &#39;Dog&#39;; // &quot;Cat&quot;
false || &#39;Dog&#39;; // &quot;Dog&quot;
&#39;Cat&#39; || false; // &quot;Cat&quot;

&#39;Cat&#39; &amp;&amp; &#39;Dog&#39;; // &quot;Dog&quot;
false &amp;&amp; &#39;Dog&#39;; // false
&#39;Cat&#39; &amp;&amp; false; // false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\uD504\uB85C\uD37C\uD2F0\uB97C \uCC38\uC870\uD560 \uB54C</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>var elem = null;
var value = elem.value; // TypeError : Cannot read property &#39;value&#39; of null

/* ----------------------------------- */

var elem = null;
// elem\uC774 \uAC12\uC744 \uAC00\uC9C0\uACE0 \uC788\uC73C\uBA74 elem\uC73C\uB85C \uD3C9\uAC00\uB418\uACE0
// \uAC12\uC774 \uC5C6\uB2E4\uBA74(null, undefined) elem.value\uB85C \uD3C9\uAC00\uB41C\uB2E4.
var value = elem &amp;&amp; elem.value; // null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\uD568\uC218 \uB9E4\uAC1C\uBCC0\uC218\uC5D0 \uAE30\uBCF8\uAC12\uC744 \uC124\uC815\uD560 \uB54C (undefined\uB85C \uC778\uD55C \uC5D0\uB7EC \uBC29\uC9C0)</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>function getStringLength(str) {
  str = str || &#39;&#39;;
  return str.length;
}

getStringLength(); // 0 (undefined \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uB294\uB2E4.)
getStringLength(&#39;hi&#39;); // 2

/* ------------------------------------------- */

function getStringLength(str = &#39;&#39;) {
  // \uB9E4\uAC1C\uBCC0\uC218\uC758 \uAE30\uBCF8\uAC12 \uC124\uC815
  return str.length;
}

getStringLength(); // 0
getStringLength(&#39;hi&#39;); // 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\uC635\uC154\uB110 \uCCB4\uC774\uB2DD \uC5F0\uC0B0\uC790 (\uC88C\uD56D\uC758 \uD53C\uC5F0\uC0B0\uC790\uAC00 null \uB610\uB294 undefined\uC778 \uACBD\uC6B0\uB9CC undeifned\uB97C \uBC18\uD658\uD558\uACE0, \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uC6B0\uD56D\uC758 \uD504\uB85C\uD37C\uD2F0 \uCC38\uC870\uB97C \uC774\uC5B4\uAC04\uB2E4.)</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>var elem = null;

var value = elem?.value;
console.log(value); // elem\uC774 null\uC774\uAE30 \uB54C\uBB38\uC5D0 undefined\uB97C \uBC18\uD658
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>null \uBCD1\uD569 \uC5F0\uC0B0\uC790 (\uC88C\uD56D\uC774 null \uB610\uB294 undefined\uC778 \uACBD\uC6B0 \uC6B0\uD56D\uC744 \uBC18\uD658\uD558\uACE0, \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uC88C\uD56D\uC744 \uBC18\uD658\uD55C\uB2E4.)</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>// null \uBCD1\uD569 \uC5F0\uC0B0\uC790\uB294 \uBCC0\uC218\uC5D0 \uAE30\uBCF8\uAC12\uC744 \uC124\uC815\uD560 \uB54C \uC720\uC6A9\uD558\uB2E4.
var foo = null ?? &#39;default string&#39;;
console.log(foo); // &quot;default string
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),a=[d];function v(u,r){return e(),i("div",null,a)}var t=n(s,[["render",v],["__file","09\uC7A5 \uD0C0\uC785\uBCC0\uD658, \uB2E8\uCD95\uD3C9\uAC00.html.vue"]]);export{t as default};
