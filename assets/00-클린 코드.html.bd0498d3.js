import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as a}from"./app.404da4f0.js";var s="/images/TIL/Lang-Javascript/00-\uD074\uB9B0-\uCF54\uB4DC/var-\uC804\uC5ED-\uACF5\uAC04-\uCE68\uBC94.jpg";const d={},r=a(`<h1 id="javascript-\u110F\u1173\u11AF\u1105\u1175\u11AB-\u110F\u1169\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#javascript-\u110F\u1173\u11AF\u1105\u1175\u11AB-\u110F\u1169\u1103\u1173" aria-hidden="true">#</a> Javascript \uD074\uB9B0 \uCF54\uB4DC</h1><p>\uAC1C\uBC1C\uACFC\uC815\uC758 \uB300\uBD80\uBD84\uC740 \uCF54\uB4DC \uB9AC\uD329\uD1A0\uB9C1\uC774\uACE0, \uB9AC\uD329\uD1A0\uB9C1\uC744 \uD558\uAE30 \uC704\uD574\uC11C\uB294 \uCF54\uB4DC\uC758 \uD750\uB984\uC744 \uC78A\uC5B4\uBC84\uB9AC\uC9C0 \uC54A\uACE0 \uACC4\uC18D \uD30C\uC545\uD558\uACE0 \uC788\uC5B4\uC57C \uD55C\uB2E4.</p><p>\uCF54\uB4DC\uC758 \uD750\uB984\uC744 \uD30C\uC545\uD558\uAE30 \uC704\uD574\uC11C\uB294 \uCF54\uB4DC\uB97C \uACC4\uC18D\uD574\uC11C \uC77D\uC5B4\uC57C\uD55C\uB2E4.<br> (\uC0AC\uC2E4.. \uAE30\uB2A5 \uAD6C\uD604 \uC870\uCC28 \uCF54\uB4DC\uC758 \uD750\uB984\uC744 \uD30C\uC545\uD558\uACE0 \uC788\uC5B4\uC57C \uD558\uAE30\uC5D0, \uC0AC\uC2E4\uC0C1 \uAC1C\uBC1C \uACFC\uC815 \uB0B4\uB0B4 \uCF54\uB4DC\uB97C \uC77D\uC5B4\uC57C \uD55C\uB2E4.)</p><p>\uCF54\uB4DC\uB97C \uC77D\uB294 \uC2DC\uAC04\uC744 \uC904\uC774\uB824\uBA74 \uCF54\uB4DC\uB97C \uCD5C\uB300\uD55C \uC9E7\uACE0 \uAC04\uACB0\uD558\uAC8C, \uC758\uBBF8\uB97C \uC54C\uAE30 \uC27D\uAC8C.... \uC989, \uD074\uB9B0\uD558\uAC8C \uC9DC\uC57C\uD55C\uB2E4.</p><p>\uB204\uAC00 \uD074\uB9B0 \uCF54\uB4DC\uB97C \uAD50\uC591 \uC11C\uC801\uC774\uB77C\uACE0 \uD588\uC744\uAE4C... \uB0B4\uAC00 \uB290\uB07C\uAE30\uC5D4 \uADF8\uB0E5 \uD544\uC218\uB2E4 \uD544\uC218.</p><p>\uD074\uB9B0 \uCF54\uB4DC\uB294 <strong>\uC2B5\uAD00</strong>\uC5D0 \uAC00\uAE5D\uB2E4\uACE0 \uC0DD\uAC01\uD55C\uB2E4. \uC2B5\uAD00\uC744 \uB4E4\uC774\uC790...</p><h2 id="_1-var-\u1103\u1162\u1109\u1175\u11AB-let-const\u1105\u1173\u11AF-\u110A\u1173\u110C\u1161" tabindex="-1"><a class="header-anchor" href="#_1-var-\u1103\u1162\u1109\u1175\u11AB-let-const\u1105\u1173\u11AF-\u110A\u1173\u110C\u1161" aria-hidden="true">#</a> 1. var \uB300\uC2E0 let, const\uB97C \uC4F0\uC790</h2><p>var\uB294 \uD568\uC218 \uB808\uBCA8 \uC2A4\uCF54\uD504\uB97C \uAC00\uC9C0\uACE0 \uC788\uACE0,<br> let, const\uB294 \uBE14\uB85D \uB2E8\uC704 \uC2A4\uCF54\uD504\uB97C \uAC00\uC9C0\uACE0 \uC788\uB2E4.</p><h3 id="tdz-temporal-dead-zone" tabindex="-1"><a class="header-anchor" href="#tdz-temporal-dead-zone" aria-hidden="true">#</a> TDZ (Temporal Dead Zone)</h3><p>TDZ\uB294 <strong>\uD638\uC774\uC2A4\uD305\uC73C\uB85C \uC778\uD574\uC11C \uC120\uC5B8\uB9CC \uB418\uACE0 \uCD08\uAE30\uD654\uB294 \uB418\uC9C0 \uC54A\uC740 \uAD6C\uAC04</strong>\uC744 \uB73B\uD55C\uB2E4.</p><p>\uD638\uC774\uC2A4\uD305\uC740 \uBE14\uB85D \uB2E8\uC704\uB85C \uBC1C\uC0DD\uD558\uB294\uB370<br> var\uB294 \uD568\uC218 \uB808\uBCA8 \uC2A4\uCF54\uD504\uC774\uBBC0\uB85C \uBE14\uB85D\uC5D0 \uAD6C\uC560\uBC1B\uC9C0 \uC54A\uACE0 \uC5B4\uB514\uC11C\uB4E0 \uD638\uCD9C\uC774 \uAC00\uB2A5\uD558\uB2E4. (\uBE44\uB85D undefined\uB85C \uBBF8\uB9AC \uCD08\uAE30\uD654\uB418\uC5B4\uC11C\uB77C\uB3C4 \uB9D0\uC774\uB2E4.)</p><p><strong>\uD558\uC9C0\uB9CC let, const\uB294 \uBE14\uB85D \uB808\uBCA8 \uC2A4\uCF54\uD504\uB97C \uAC00\uC9C0\uBBC0\uB85C \uCD08\uAE30\uD654 \uBE14\uB7ED\uC744 \uB9CC\uB098\uAE30 \uC804\uAE4C\uC9C0\uB294 \uBCC0\uC218\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uB2E4.</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console.log(test); // ReferenceError

let test = 0; // \uCD08\uAE30\uD654\uB85C \uC778\uD574 TDZ\uAC00 \uC704\uC5D0\uC11C \uB05D\uB0A8

console.log(test); // 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u110C\u1165\u11AB\u110B\u1167\u11A8-\u1100\u1169\u11BC\u1100\u1161\u11AB-\u1109\u1161\u110B\u116D\u11BC\u110B\u1173\u11AF-\u110E\u116C\u1109\u1169\u1112\u116A\u1112\u1161\u110C\u1161" tabindex="-1"><a class="header-anchor" href="#_2-\u110C\u1165\u11AB\u110B\u1167\u11A8-\u1100\u1169\u11BC\u1100\u1161\u11AB-\u1109\u1161\u110B\u116D\u11BC\u110B\u1173\u11AF-\u110E\u116C\u1109\u1169\u1112\u116A\u1112\u1161\u110C\u1161" aria-hidden="true">#</a> 2. \uC804\uC5ED \uACF5\uAC04 \uC0AC\uC6A9\uC744 \uCD5C\uC18C\uD654\uD558\uC790</h2><p>javascript\uB294 \uB7F0\uD0C0\uC784 \uD658\uACBD\uC744 \uC6B0\uB9AC\uAC00 \uC9C1\uC811 \uC81C\uC5B4\uD560 \uC218 \uC788\uB2E4.</p><p>\uC804\uC5ED \uACF5\uAC04 \uC0AC\uC6A9\uC744 \uCD5C\uC18C\uD654\uD574\uC11C \uBA54\uBAA8\uB9AC \uAD00\uB9AC\uB97C \uD558\uC790.</p><h3 id="\u1100\u1161\u11C0\u110B\u1173\u11AB-\u1105\u1165\u11AB\u1110\u1161\u110B\u1175\u11B7\u110B\u1175\u1105\u1161\u1106\u1167\u11AB-\u1103\u1161\u1105\u1173\u11AB-\u1106\u1169\u1103\u1172\u11AF\u110B\u1166\u1103\u1169-\u1112\u1162\u1103\u1161\u11BC-\u1107\u1167\u11AB\u1109\u116E\u1100\u1161-\u1102\u1161\u11B7\u110B\u1161\u110B\u1175\u11BB\u1103\u1161" tabindex="-1"><a class="header-anchor" href="#\u1100\u1161\u11C0\u110B\u1173\u11AB-\u1105\u1165\u11AB\u1110\u1161\u110B\u1175\u11B7\u110B\u1175\u1105\u1161\u1106\u1167\u11AB-\u1103\u1161\u1105\u1173\u11AB-\u1106\u1169\u1103\u1172\u11AF\u110B\u1166\u1103\u1169-\u1112\u1162\u1103\u1161\u11BC-\u1107\u1167\u11AB\u1109\u116E\u1100\u1161-\u1102\u1161\u11B7\u110B\u1161\u110B\u1175\u11BB\u1103\u1161" aria-hidden="true">#</a> \uAC19\uC740 \uB7F0\uD0C0\uC784\uC774\uB77C\uBA74 \uB2E4\uB978 \uBAA8\uB4C8\uC5D0\uB3C4 \uD574\uB2F9 \uBCC0\uC218\uAC00 \uB0A8\uC544\uC788\uB2E4.</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// index1.js
var globalVar = &#39;global&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// index2.js
console.log(globalVar); // global
console.log(window.globalVar); // global
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u110B\u1167\u11A8\u1109\u1175\u1102\u1161-var-\u1109\u1161\u110B\u116D\u11BC\u110B\u1173\u11AF-\u110C\u116E\u110B\u1174\u1112\u1161\u110C\u1161" tabindex="-1"><a class="header-anchor" href="#\u110B\u1167\u11A8\u1109\u1175\u1102\u1161-var-\u1109\u1161\u110B\u116D\u11BC\u110B\u1173\u11AF-\u110C\u116E\u110B\u1174\u1112\u1161\u110C\u1161" aria-hidden="true">#</a> \uC5ED\uC2DC\uB098 var \uC0AC\uC6A9\uC744 \uC8FC\uC758\uD558\uC790</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const array [10, 20, 30];

for (var i=0; i &lt; array.length; i++) {
    const element = array[i];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704\uC758 \uCF54\uB4DC\uC5D0\uC11C for\uBB38\uC5D0 \uC4F0\uC774\uB294 \uBCC0\uC218 i\uB294 \uBC18\uBCF5\uBB38\uC774 \uB05D\uB098\uBA74 GC\uB85C \uB118\uC5B4\uAC00\uC11C \uBA54\uBAA8\uB9AC \uD560\uB2F9\uC774 \uD574\uC81C\uB418\uAE38 \uAE30\uB2E4\uB9B4 \uAC83\uC774\uB2E4.</p><p>\uD558\uC9C0\uB9CC \uC0AC\uC2E4 \uADF8\uB807\uC9C0 \uC54A\uB2E4. \uBE0C\uB77C\uC6B0\uC800 \uCF58\uC194\uC5D0\uC11C <code>Window</code>\uB97C \uCC0D\uC5B4\uBCF4\uBA74 \uC544\uB798\uC640 \uAC19\uC774 \uC804\uC5ED \uBCC0\uC218\uB85C \uB0A8\uC544\uC788\uB2E4.</p><p><img src="`+s+`" alt="\uD074\uB9B0\uCF54\uB4DC1"></p><p>\uADF8\uB807\uAE30\uC5D0 var \uB300\uC2E0 let, const\uB97C \uC0AC\uC6A9\uD558\uC790.</p><br><h2 id="_3-\u110B\u1175\u11B7\u1109\u1175-\u1107\u1167\u11AB\u1109\u116E\u1105\u1173\u11AF-\u110C\u1166\u1100\u1165\u1112\u1161\u110C\u1161" tabindex="-1"><a class="header-anchor" href="#_3-\u110B\u1175\u11B7\u1109\u1175-\u1107\u1167\u11AB\u1109\u116E\u1105\u1173\u11AF-\u110C\u1166\u1100\u1165\u1112\u1161\u110C\u1161" aria-hidden="true">#</a> 3. \uC784\uC2DC \uBCC0\uC218\uB97C \uC81C\uAC70\uD558\uC790</h2><p>\uD55C\uBC88\uB9CC \uC4F0\uC774\uB294 \uBCC0\uC218\uB294 \uAC00\uB2A5\uD558\uBA74 \uC0AC\uC6A9\uD558\uC9C0 \uB9D0\uC790.<br> \uC784\uC2DC \uBCC0\uC218\uB97C \uC0AC\uC6A9\uD558\uBA74 \uADF8 \uBCC0\uC218\uB97C \uC0AC\uC6A9\uD574\uC11C \uBB34\uC5B8\uAC00\uB97C \uACC4\uC18D \uC870\uC791\uD558\uB824\uB294 \uC720\uD639\uC5D0 \uBE60\uC9C8 \uC218\uB3C4 \uC788\uB2E4.<br><br> \uC608\uC81C\uBD80\uD130 \uBCF4\uC790.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function getElements() {
    const result = {};

    result.title = document.querySelector(&#39;.title&#39;),
    result.text = document.querySelector(&#39;.text&#39;),
    result.value = document.querySelector(&#39;.value&#39;),

    return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704\uC758 \uCF54\uB4DC\uAC00 \uAC00\uB3C5\uC131\uC774 \uC88B\uC544\uBCF4\uC77C\uAE4C?<br><br> \uB9AC\uD134\uC744 \uBCF4\uBA74 \uACB0\uAD6D Object \uD558\uB098\uB97C \uB9AC\uD134\uD55C\uB2E4.<br><br> \uBCC0\uC218\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uAC8C \uBC14\uAFD4\uBCF4\uC790.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function getElements() {
  return {
    title: document.querySelector(&#39;.title&#39;),
    text: document.querySelector(&#39;.text&#39;),
    value: document.querySelector(&#39;.value&#39;),
  };
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uD6E8\uC52C \uB098\uC544\uC84C\uB2E4.</p><br><h2 id="isnan" tabindex="-1"><a class="header-anchor" href="#isnan" aria-hidden="true">#</a> isNaN</h2><p>\uC22B\uC790\uAC00 \uC544\uB2CC\uC9C0 \uD655\uC778\uD560 \uB54C isNaN\uC744 \uB9CE\uC774 \uC0AC\uC6A9\uD55C\uB2E4.<br><br></p><p>\uD558\uC9C0\uB9CC \uAC00\uB2A5\uD558\uBA74 <code>isNaN()</code> \uB300\uC2E0 \uC880 \uB354 \uC5C4\uACA9\uD558\uACE0 \uC9C1\uAD00\uC801\uC778 <code>Number.isNaN()</code>\uC744 \uC0AC\uC6A9\uD558\uC790.<br><br></p><p><code>isNaN</code>\uC740 \uC8FC\uC5B4\uC9C4 \uAC12\uC744 Number\uB85C \uD615\uBCC0\uD658\uD55C \uD6C4\uC5D0 \uAC80\uC0AC\uD55C\uB2E4.<br><br></p><p>\uC6B0\uB9AC\uAC00 isNaN\uC744 \uC0AC\uC6A9\uD558\uB294 \uC774\uC720\uB294 Number\uB97C \uC5F0\uC0B0\uD560 \uB54C \uC81C\uB300\uB85C \uC5F0\uC0B0\uC774 \uB418\uB294\uC9C0 \uD655\uC778\uD558\uB824\uACE0 \uC0AC\uC6A9\uD55C\uB2E4. <br></p><p>\uADF8\uB7F0 \uC758\uBBF8\uC5D0\uC11C <code>Number.isNaN</code>\uC740 \uC8FC\uC5B4\uC9C4 \uAC12\uC758 \uD0C0\uC785\uC774 Number\uC774\uACE0 NaN\uC77C \uB54C\uB9CC true\uB97C \uBC18\uD658\uD55C\uB2E4. <br></p><p>\uC560\uCD08\uC5D0 Number\uAC00 \uC544\uB2CC \uB2E4\uB978 \uD0C0\uC785\uC774 \uB4E4\uC5B4\uC624\uB294 \uC0C1\uD669\uC744 \uCC28\uB2E8\uD558\uB294 \uAC83\uC774\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Number.isNaN = function (x) {
  return typeof x === &#39;number&#39; &amp;&amp; isNaN(x);
};

Number.isNaN(NaN); // true
Number.isNaN(0 / 0); // true

Number.isNaN(true); // false
Number.isNaN(null); // false
Number.isNaN(29); // false
Number.isNaN(&#39;29&#39;); // false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="\u1109\u1161\u11B7\u1112\u1161\u11BC\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u11B7\u1112\u1161\u11BC\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161" aria-hidden="true">#</a> \uC0BC\uD56D\uC5F0\uC0B0\uC790</h2><p>\uC77C\uB2E8 \uCF54\uB4DC\uB97C \uBCF4\uC790.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function example() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}
// \uB610\uB294
function example() {
  return condition1 ? value1 : condition2 ? value2 : condition3 ? value3 : value4;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>condition \uBCC0\uC218\uB4E4\uC774 \uB2E8\uC21C\uD788 \uAC12\uC774 true\uC778\uC9C0 \uD655\uC778\uD558\uB294 \uAC70\uB77C\uBA74<br> \uC544\uB798 \uBC29\uBC95\uCC98\uB7FC object\uB97C \uD65C\uC6A9\uD558\uB294 \uAC83\uC774 \uB098\uC744 \uC218\uB3C4 \uC788\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const example = {
  condition1: value1,
  condition2: value2,
  condition3: value3,
};
return example[condition1] || value4;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="early-return" tabindex="-1"><a class="header-anchor" href="#early-return" aria-hidden="true">#</a> Early Return</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function check(active) {
  if (active === undefined) {
    return helloActive(&#39;active&#39;);
  } else {
    return active;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704\uC758 \uD568\uC218\uB97C \uC544\uB798\uCC98\uB7FC \uC904\uC77C \uC218 \uC788\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function check(active) {
  if (active === undefined) {
    return helloActive(&#39;active&#39;);
  }

  return active;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="\u1103\u1161\u11AB\u110E\u116E\u11A8\u1111\u1167\u11BC\u1100\u1161" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u110E\u116E\u11A8\u1111\u1167\u11BC\u1100\u1161" aria-hidden="true">#</a> \uB2E8\uCD95\uD3C9\uAC00</h2><p>\uB2E4\uC911 if\uBB38 \uB300\uC2E0 <code>&amp;&amp;</code>, <code>||</code>, <code>??</code>\uB97C \uC0AC\uC6A9\uD574\uBCF4\uC790.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>if (isLogin) {
  if (user) {
    if (user.name) {
      return user.name;
    } else {
      return &#39;\uC774\uB984\uC5C6\uC74C&#39;;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704\uC758 \uCF54\uB4DC\uB97C \uAC04\uB7B5\uD654\uD558\uBA74 \uB2E4\uC74C\uACFC \uAC19\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>if (isLogin &amp;&amp; user) {
  return user.name || &#39;\uC774\uB984\uC5C6\uC74C&#39;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uD558\uC9C0\uB9CC \uC704\uC758 \uCF54\uB4DC\uB294 <code>user.name</code>\uC774 &#39;undefined&#39; \uD639\uC740 &#39;null&#39;\uC640 \uAC19\uC740 <code>false</code>\uB97C \uCD9C\uB825\uC2DC\uD0A4\uB294 \uBB38\uC790\uC5F4\uC774\uBA74 \uBB38\uC81C\uAC00 \uB41C\uB2E4 \uADF8\uB7F4 \uB54C ??\uB97C \uC0AC\uC6A9\uD558\uBA74 \uB41C\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>if (isLogin &amp;&amp; user) {
  return user.name ?? &#39;\uC774\uB984\uC5C6\uC74C&#39;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="\u1106\u1167\u11BC\u1109\u1175\u110C\u1165\u11A8\u110B\u1175\u11AB-\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161-\u1109\u1161\u110B\u116D\u11BC-\u110C\u1175\u110B\u1163\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1106\u1167\u11BC\u1109\u1175\u110C\u1165\u11A8\u110B\u1175\u11AB-\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161-\u1109\u1161\u110B\u116D\u11BC-\u110C\u1175\u110B\u1163\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uBA85\uC2DC\uC801\uC778 \uC5F0\uC0B0\uC790 \uC0AC\uC6A9 \uC9C0\uC591\uD558\uAE30</h2><p>\uC804\uC704, \uD6C4\uC704 \uC5F0\uC0B0\uC790\uB97C \uC9C0\uC591\uD558\uACE0 \uCD5C\uB300\uD55C \uBA85\uC2DC\uC801\uC73C\uB85C \uC791\uC131\uD558\uC790.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function increment(number) {
  // return number++; (X)
  return number + 1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="if-\u1106\u116E\u11AB-switch-\u1106\u116E\u11AB-\u1103\u1162\u1109\u1175\u11AB-object-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#if-\u1106\u116E\u11AB-switch-\u1106\u116E\u11AB-\u1103\u1162\u1109\u1175\u11AB-object-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> if \uBB38, switch \uBB38 \uB300\uC2E0 object \uC0AC\uC6A9\uD558\uAE30</h2><p>\uC870\uAC74\uC2DD\uC774 \uAC12\uC2DD\uBB38\uC73C\uB85C \uD45C\uD604\uC774 \uAC00\uB2A5\uD560 \uACBD\uC6B0\uC5D0\uB294 object \uD615\uD0DC\uB85C \uB9AC\uD329\uD1A0\uB9C1\uC774 \uAC00\uB2A5\uD558\uB2E4</p><h3 id="if\u1106\u116E\u11AB-switch\u1106\u116E\u11AB" tabindex="-1"><a class="header-anchor" href="#if\u1106\u116E\u11AB-switch\u1106\u116E\u11AB" aria-hidden="true">#</a> if\uBB38 / switch\uBB38</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>if (category === &#39;total&#39;) {
	// ...
} else if (category === &#39;a&#39;) {
	// ...
} else if (category === &#39;b&#39;) {
	// ...
} else {
    // ...
}

switch(category) {
  case: &#39;total&#39;:
	// ...
    break;
  case: &#39;a&#39;:
	// ...
    break;
  case: &#39;b&#39;:
	// ...
    break;
  default:
	// ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-\u1112\u1167\u11BC\u1110\u1162" tabindex="-1"><a class="header-anchor" href="#object-\u1112\u1167\u11BC\u1110\u1162" aria-hidden="true">#</a> object \uD615\uD0DC</h3><p>key\uC5D0 \uC870\uAC74\uC2DD\uC744 \uB123\uC5B4\uC8FC\uACE0 value\uC5D0 \uAD6C\uD604\uB85C\uC9C1\uC744 \uB123\uB294\uB2E4.<br> value\uB97C \uC775\uBA85\uD568\uC218\uB85C \uB123\uC5B4\uC92C\uC73C\uBBC0\uB85C lazy\uD55C \uD2B9\uC131\uC744 \uB744\uACE0, \uB4A4\uC5D0 \uC18C\uAD04\uD638\uB97C \uBD99\uC5EC\uC918\uC57C\uB9CC \uD574\uB2F9 \uC775\uBA85\uD568\uC218\uB97C \uD638\uCD9C \uC5F0\uC0B0\uD55C\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// else \uC0C1\uD669\uAE4C\uC9C0 object\uC5D0 \uB123\uB294 \uACBD\uC6B0
const obj = {
  total: () =&gt; { // ... },
  a: () =&gt; { // ... },
  b: () =&gt; { // ... },
  c: () =&gt; { // ... },
  default: () =&gt; { // ... },
}
const result = obj[category]() || obj[&#39;default&#39;]();

// key\uC5D0 &#39;default&#39; \uBB38\uC790\uC5F4\uC774 \uB4E4\uC5B4\uAC08\uAE4C \uAC71\uC815\uB41C\uB2E4\uBA74
const obj = {
  total: () =&gt; { // ... },
  a: () =&gt; { // ... },
  b: () =&gt; { // ... },
  c: () =&gt; { // ... },
}
const result = obj[category]() || { // ... }; // \uB4A4\uC5D0 \uC624\uB294 \uD568\uC218\uB294 else\uC77C \uB54C\uC758 \uD568\uC218\uC774\uB2E4.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="reduce\u110B\u116A-spread-operator-\u1102\u1173\u11AB-\u1100\u1161\u11C0\u110B\u1175-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u110C\u1175-\u1106\u1161\u11AF\u110C\u1161" tabindex="-1"><a class="header-anchor" href="#reduce\u110B\u116A-spread-operator-\u1102\u1173\u11AB-\u1100\u1161\u11C0\u110B\u1175-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u110C\u1175-\u1106\u1161\u11AF\u110C\u1161" aria-hidden="true">#</a> reduce\uC640 ...(spread operator)\uB294 \uAC19\uC774 \uC0AC\uC6A9\uD558\uC9C0 \uB9D0\uC790.</h2><p>reduce\uB294 \uBC30\uC5F4\uC744 K:V \uD615\uD0DC\uC758 \uAC1D\uCCB4\uB85C \uC815\uB9AC\uD560 \uB54C \uAD49\uC7A5\uD788 \uC720\uC6A9\uD558\uB2E4.<br> (\uC774\uBC88\uC5D0 \uC77C\uD558\uBA74\uC11C \uD2B9\uD788 \uB290\uAF08\uB2E4... \uBC30\uC5F4\uB9CC \uACE0\uC9D1\uD558\uC9C0 \uB9D0\uC790)<br><br> reduce\uB97C \uC0AC\uC6A9\uD560 \uB54C acc\uC5D0 <code>...</code>\uB97C \uAC19\uC774 \uC0AC\uC6A9\uD558\uBA74 \uCF54\uB4DC\uAC00 \uAE54\uB054\uD574\uC9C0\uC9C0\uB9CC, \uC0AC\uC6A9\uD558\uB294 \uB370\uC774\uD130\uAC00 \uC218\uB9CC\uAC1C~\uC218\uC2ED\uB9CC\uAC1C\uC77C \uB54C \uC815\uB9D0 \uB9CE\uC774 \uB290\uB824\uC9C4\uB2E4.</p><p><code>...</code>\uC740 <code>Object.assign({}, arr)</code>\uC758 <strong>Syntatic Suger</strong>\uC774\uB2E4. \uC989, \uC5F4\uAC70 \uAC00\uB2A5\uD55C \uAC1D\uCCB4\uB97C <strong>\uC21C\uD68C\uD558\uBA74\uC11C</strong> \uB2E4\uB978 \uAC1D\uCCB4\uC5D0 \uADF8\uB300\uB85C \uBCF5\uC0AC\uD558\uB294\uAC83\uC774\uB2E4.<br> \uC5EC\uAE30\uC11C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD55C\uB2E4. acc\uAC00 \uAE38\uC5B4\uC9C8\uC218\uB85D \uC5F0\uC0B0\uB7C9\uC774 \uACC4\uC18D\uD574\uC11C \uB298\uC5B4\uB09C\uB2E4. (\uC804\uCCB4 \uAC2F\uC218 x \uC804\uCCB4 \uAC2F\uC218)<br> \uC989, O(n^2)\uC758 \uC2DC\uAC04\uBCF5\uC7A1\uB3C4\uAC00 \uB418\uC5B4\uBC84\uB9B0\uB2E4. \uB9CC\uC57D \uBE44\uC2B7\uD55C \uB85C\uC9C1\uC73C\uB85C \uAD6C\uD604\uD558\uACE0 \uC2F6\uB2E4\uBA74 \uC544\uB798\uC640 \uAC19\uC774 \uD558\uC790.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const arr = [
  { id: 0, name: &#39;giwon&#39; },
  // ...
];

const obj = Object.fromEntries(arr.map(({ id, name }) =&gt; [id, name]));
console.log(obj);
/*
{
  0: &#39;giwon&#39;,
  // ...
}
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,76),l=[r];function c(v,u){return i(),n("div",null,l)}var m=e(d,[["render",c],["__file","00-\uD074\uB9B0 \uCF54\uB4DC.html.vue"]]);export{m as default};
