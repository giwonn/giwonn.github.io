import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as d}from"./app.404da4f0.js";const a={},s=d(`<h1 id="dart-\u1106\u116E\u11AB\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#dart-\u1106\u116E\u11AB\u1107\u1165\u11B8" aria-hidden="true">#</a> dart \uBB38\uBC95</h1><p>\uB2E4\uD2B8 \uBB38\uBC95\uC740 main() \uD568\uC218\uAC00 \uC9C4\uC785\uC810(entry point)\uC774\uB2E4.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>void main() {
    print(&quot;Hello, World!&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1106\u1169\u11A8\u110E\u1161" tabindex="-1"><a class="header-anchor" href="#\u1106\u1169\u11A8\u110E\u1161" aria-hidden="true">#</a> \uBAA9\uCC28</h2><ol><li>\uAE30\uBCF8 \uBB38\uBC95</li><li>\uD568\uC218</li><li>\uBD84\uAE30\uC640 \uBC18\uBCF5</li></ol><br><br><br><h2 id="_1-\u1100\u1175\u1107\u1169\u11AB-\u1106\u116E\u11AB\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#_1-\u1100\u1175\u1107\u1169\u11AB-\u1106\u116E\u11AB\u1107\u1165\u11B8" aria-hidden="true">#</a> 1. \uAE30\uBCF8 \uBB38\uBC95</h2><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>// \uD55C \uC904 \uC8FC\uC11D

/**
* \uC5EC\uB7EC \uC904 \uC8FC\uC11D
*
**/

/// \uBB38\uC11C \uC8FC\uC11D (\uBA54\uC11C\uB4DC\uB098 \uD074\uB798\uC2A4 \uC704\uC5D0 \uC791\uC131\uD558\uBA74 \uBB38\uC11C\uB97C \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uD574\uC90C)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="\u1107\u1167\u11AB\u1109\u116E" tabindex="-1"><a class="header-anchor" href="#\u1107\u1167\u11AB\u1109\u116E" aria-hidden="true">#</a> \uBCC0\uC218</h3><p>dart\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uAE30\uBCF8 \uD0C0\uC785\uC744 \uC81C\uACF5\uD55C\uB2E4.</p><ul><li>int : \uC815\uC218<div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>int i = 10;
num i2 = 10; // int\uB294 num\uC73C\uB85C \uD45C\uD604 \uAC00\uB2A5\uD558\uB2E4.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>double : \uC2E4\uC218<div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>double d = 10.00;
num d2 = 10.00; // double \uB610\uD55C num\uC73C\uB85C \uD45C\uD604 \uAC00\uB2A5\uD558\uB2E4.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>String : \uBB38\uC790\uC5F4<div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>String name;
// \uC791\uC740 \uB530\uC634\uD45C, \uD070 \uB530\uC634\uD45C \uB458 \uB2E4 \uC0AC\uC6A9 \uAC00\uB2A5\uD568
name = &#39;\uC784\uAE30\uC6D0&#39;;
name = &quot;\uC784\uAE30\uC6D0&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>bool : \uCC38 \uB610\uB294 \uAC70\uC9D3<div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>bool b = true;
bool bw = i &lt; 10;
bool b3 = s.isEmpty;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><br><h3 id="\u1110\u1161\u110B\u1175\u11B8-\u110E\u116E\u1105\u1169\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1110\u1161\u110B\u1175\u11B8-\u110E\u116E\u1105\u1169\u11AB" aria-hidden="true">#</a> \uD0C0\uC785 \uCD94\uB860</h3><p>dart\uB294 var, dynamic \uD0A4\uC6CC\uB4DC\uB97C \uD1B5\uD574 \uD0C0\uC785 \uCD94\uB860\uC744 \uC9C0\uC6D0\uD55C\uB2E4.</p><ul><li><p><strong>var</strong><strong>\uCD5C\uCD08 \uD560\uB2F9\uB41C \uAC12</strong>\uC5D0 \uB530\uB77C \uD0C0\uC785\uC774 \uC815\uD574\uC9C4\uB2E4.<br> (\uC120\uC5B8\uB9CC \uD558\uACE0 \uB098\uC911\uC5D0 \uCD08\uAE30\uD654\uB97C \uC9C4\uD589\uD558\uBA74 dynamic \uD0C0\uC785\uCC98\uB7FC \uD0C0\uC785\uC744 \uBCC0\uB3D9\uC2DC\uCF1C\uB3C4 \uC5D0\uB7EC\uAC00 \uB098\uC9C0 \uC54A\uB294\uB2E4.)</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>var i = 10; // int \uD0C0\uC785
var d = 10.0; // double \uD0C0\uC785
var s = &#39;hello&#39;; // \uBB38\uC790\uC5F4 \uD0C0\uC785
var b = true; // \uBD88\uB9AC\uC5B8 \uD0C0\uC785

var n; // \uCD08\uAE30\uD654\uB97C \uC548\uD55C\uB2E4\uBA74?
var n = 1; // int\uB3C4 \uB4E4\uC5B4\uAC00\uACE0
var n = &#39;\uC548\uB155?&#39;; // int -&gt; String\uB3C4 \uB41C\uB2E4. (dynamic\uCC98\uB7FC \uB3D9\uC791\uD568)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>dynamic</strong> var\uC640 \uB2EC\uB9AC \uD560\uB2F9\uB41C \uD0C0\uC785\uC5D0 \uAD00\uACC4\uC5C6\uC774 \uD0C0\uC785\uC744 \uBCC0\uACBD\uD560 \uC218 \uC788\uB2E4.<br> dart\uB97C JS\uCC98\uB7FC \uC0AC\uC6A9\uD558\uACE0 \uC2F6\uB2E4\uBA74 dynamic\uC744 \uC4F0\uBA74 \uB41C\uB2E4!</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>dynamic name = &#39;\uC784\uAE30\uC6D0&#39;;
name = 1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><br><h3 id="\u1109\u1161\u11BC\u1109\u116E-final-const" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u11BC\u1109\u116E-final-const" aria-hidden="true">#</a> \uC0C1\uC218 final, const</h3><p>Java\uC758 final, JavaScript\uC758 const\uC5D0 \uB300\uC751\uD55C\uB2E4\uACE0 \uC0DD\uAC01\uD558\uBA74 \uB41C\uB2E4.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>final String name = &#39;\uC784\uAE30\uC6D0&#39;;
final name = &#39;\uC784\uAE30\uC6D0&#39;; // \uD0C0\uC785\uC744 \uC0DD\uB7B5\uD558\uC5EC \uC9E7\uAC8C \uC791\uC131\uD560 \uC218\uB3C4 \uC788\uB2E4.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="\u1109\u1161\u11AB\u1109\u116E\u11AF-\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u11AB\u1109\u116E\u11AF-\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161" aria-hidden="true">#</a> \uC0B0\uC220 \uC5F0\uC0B0\uC790</h3><ul><li>+ : \uB354\uD558\uAE30</li><li>- : \uBE7C\uAE30</li><li>* : \uACF1\uD558\uAE30</li><li>/ : \uB098\uB204\uAE30 (double \uD0C0\uC785 \uBC18\uD658)</li><li>~/ : \uBAAB (int \uD0C0\uC785 \uBC18\uD658)</li><li>% : \uB098\uBA38\uC9C0 (int \uD0C0\uC785 \uBC18\uD658)</li></ul><p>assert() \uD568\uC218\uB294 \uACC4\uC0B0 \uACB0\uACFC\uAC00 \uCC38\uC778\uC9C0 \uAC80\uC0AC\uD55C\uB2E4.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>assert(2 + 3 == 5); // true
assert(&#39;hello&#39; + &#39; world&#39; == &#39;hello world&#39;); // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="\u110C\u1173\u11BC\u1100\u1161\u11B7-\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161" tabindex="-1"><a class="header-anchor" href="#\u110C\u1173\u11BC\u1100\u1161\u11B7-\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161" aria-hidden="true">#</a> \uC99D\uAC10 \uC5F0\uC0B0\uC790</h3><ul><li>\uD6C4\uC704 \uC5F0\uC0B0 : [\uC2DD]++, [\uC2DD]--</li><li>\uC804\uC704 \uC5F0\uC0B0 : ++[\uC2DD], --[\uC2DD]</li></ul><br><h3 id="\u1107\u1175\u1100\u116D-\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161" tabindex="-1"><a class="header-anchor" href="#\u1107\u1175\u1100\u116D-\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161" aria-hidden="true">#</a> \uBE44\uAD50 \uC5F0\uC0B0\uC790</h3><ul><li>== : \uAC19\uB2E4</li><li>!= : \uB2E4\uB974\uB2E4</li><li>&gt; : \uB354 \uD06C\uB2E4</li><li>&lt; : \uB354 \uC791\uB2E4</li><li>&gt;= : \uD06C\uAC70\uB098 \uAC19\uB2E4</li><li>&lt;= : \uC791\uAC70\uB098 \uAC19\uB2E4.</li></ul><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>assert(2 == 2);
assert(2 != 3);
assert(3 &gt; 2);
// ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="\u1102\u1169\u11AB\u1105\u1175-\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161" tabindex="-1"><a class="header-anchor" href="#\u1102\u1169\u11AB\u1105\u1175-\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161" aria-hidden="true">#</a> \uB17C\uB9AC \uC5F0\uC0B0\uC790</h3><ul><li>&amp;&amp; : and</li><li>|| : or</li><li>== : equal</li><li>! : not</li><li>!= : not equal</li></ul><br><h3 id="\u1110\u1161\u110B\u1175\u11B8-\u1100\u1165\u11B7\u1109\u1161-is-is-\u110F\u1175\u110B\u116F\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u1110\u1161\u110B\u1175\u11B8-\u1100\u1165\u11B7\u1109\u1161-is-is-\u110F\u1175\u110B\u116F\u1103\u1173" aria-hidden="true">#</a> \uD0C0\uC785 \uAC80\uC0AC (is, is! \uD0A4\uC6CC\uB4DC)</h3><ul><li>is : \uAC19\uC740 \uD0C0\uC785\uC774\uBA74 true</li><li>is! : \uB2E4\uB978 \uD0C0\uC785\uC774\uBA74 true</li></ul><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>int a = 10;
if (a is int) {
    print(&#39;\uC815\uC218&#39;);
}

String text = &#39;hello&#39;;
if (text is! int) {
    print(&#39;\uC22B\uC790\uAC00 \uC544\uB2D8&#39;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="\u1112\u1167\u11BC\u1107\u1167\u11AB\u1112\u116A\u11AB-as-\u110F\u1175\u110B\u116F\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u1112\u1167\u11BC\u1107\u1167\u11AB\u1112\u116A\u11AB-as-\u110F\u1175\u110B\u116F\u1103\u1173" aria-hidden="true">#</a> \uD615\uBCC0\uD658 (as \uD0A4\uC6CC\uB4DC)</h3><p>\uD615\uBCC0\uD658(\uD0C0\uC785 \uCE90\uC2A4\uD305)\uC5D0\uB294 as \uD0A4\uC6CC\uB4DC\uB97C \uC0AC\uC6A9\uD55C\uB2E4. <strong>\uB2E4\uB978 \uD0C0\uC785\uB07C\uB9AC\uB294 \uBCC0\uD658\uC774 \uC548 \uB418\uACE0 \uB354 \uC0C1\uC704 \uAC1C\uB150\uC73C\uB85C \uBCC0\uD658\uD560 \uC218 \uC788\uB2E4.</strong></p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>var c = 30.5;
int d = c as int; // c\uB294 double\uD0C0\uC785\uC73C\uB85C \uCD94\uB860 -&gt; int\uB294 double\uC758 \uC0C1\uC704\uAC00 \uC544\uB2C8\uAE30\uC5D0 \uBCC0\uD658 \uBD88\uAC00

var d = 30.5;
num n = d; // as num; \uC0DD\uB7B5 \uAC00\uB2A5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="_2-\u1112\u1161\u11B7\u1109\u116E" tabindex="-1"><a class="header-anchor" href="#_2-\u1112\u1161\u11B7\u1109\u116E" aria-hidden="true">#</a> 2. \uD568\uC218</h2><h3 id="\u1112\u1161\u11B7\u1109\u116E\u110B\u1174-\u1100\u1175\u1107\u1169\u11AB-\u1112\u1167\u11BC\u1110\u1162" tabindex="-1"><a class="header-anchor" href="#\u1112\u1161\u11B7\u1109\u116E\u110B\u1174-\u1100\u1175\u1107\u1169\u11AB-\u1112\u1167\u11BC\u1110\u1162" aria-hidden="true">#</a> \uD568\uC218\uC758 \uAE30\uBCF8 \uD615\uD0DC</h3><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>int f(int x, int y) {
    return x + y + 10;
}

void greeting(String greet) {
    print(&#39;hello $greet&#39;);
}


// \uBC18\uD658\uD0C0\uC785 \uC5ED\uC2DC \uD0C0\uC785 \uCD94\uB860\uC5D0 \uC758\uD574 \uC0DD\uB7B5\uD560 \uC218 \uC788\uB2E4.
f(int x, int y) {
    return x + y + 10;
}

greeting(String greet) {
    print(&#39;hello $greet&#39;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u1112\u1161\u11B7\u1109\u116E\u110B\u116A-\u1106\u1166\u1109\u1165\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u1112\u1161\u11B7\u1109\u116E\u110B\u116A-\u1106\u1166\u1109\u1165\u1103\u1173" aria-hidden="true">#</a> \uD568\uC218\uC640 \uBA54\uC11C\uB4DC</h3><p>\uD074\uB798\uC2A4 \uBC16\uC5D0 \uC791\uC131\uD558\uB294 \uD568\uC218\uB97C \uCD5C\uC0C1\uC704 \uD568\uC218\uB77C\uACE0 \uD55C\uB2E4.<br> \uCD5C\uC0C1\uC704 \uD568\uC218\uB294 \uC5B4\uB514\uC5D0\uC11C\uB098 \uD638\uCD9C\uD560 \uC218 \uC788\uC73C\uBA70,<br> \uD074\uB798\uC2A4 \uB0B4\uBD80\uD568\uC218\uB294 \uBA54\uC11C\uB4DC\uB77C\uACE0 \uBD80\uB974\uAE30 \uB54C\uBB38\uC5D0 \uC0AC\uC2E4\uC0C1 \uB300\uBD80\uBD84\uC758 \uD568\uC218\uB294 \uCD5C\uC0C1\uC704 \uD568\uC218\uB77C\uACE0 \uBCFC \uC218 \uC788\uB2E4.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>// \uCD5C\uC0C1\uC704 \uD568\uC218
bool isEven(int number) {
    return number &amp; 2 == 0;
}

void main() {
    print(isEven(10));
}

class MyClass {
    // static \uD0A4\uC6CC\uB4DC\uB85C \uC815\uC801 \uBA54\uC11C\uB4DC\uB97C \uB9CC\uB4E4\uC5B4\uC8FC\uBA74 \uCD5C\uC0C1\uC704 \uD568\uC218\uCC98\uB7FC \uC0AC\uC6A9 \uAC00\uB2A5\uD558\uB2E4.
    static bool isEven(int number) {
        return number % 2 == 0;
    }

    // ...\uC0DD\uB7B5...
    print(MyClass.isEven(10));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="\u110B\u1175\u11A8\u1106\u1167\u11BC-\u1112\u1161\u11B7\u1109\u116E" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u11A8\u1106\u1167\u11BC-\u1112\u1161\u11B7\u1109\u116E" aria-hidden="true">#</a> \uC775\uBA85 \uD568\uC218</h3><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>(number) { // \uC775\uBA85 \uD568\uC218 \uC5ED\uC2DC \uD0C0\uC785 \uCD94\uB860 \uAC00\uB2A5
    return number % 2 == 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="\u1105\u1161\u11B7\u1103\u1161\u1109\u1175\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1105\u1161\u11B7\u1103\u1161\u1109\u1175\u11A8" aria-hidden="true">#</a> \uB78C\uB2E4\uC2DD</h3><blockquote><p>([\uC778\uC218\uBA85]) -&gt; [\uB3D9\uC791 \uB610\uB294 \uBC18\uD658\uAC12]</p></blockquote><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>(number) =&gt; number % 2 == 0;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h3 id="\u1109\u1165\u11AB\u1110\u1162\u11A8-\u1106\u1162\u1100\u1162\u1107\u1167\u11AB\u1109\u116E" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u11AB\u1110\u1162\u11A8-\u1106\u1162\u1100\u1162\u1107\u1167\u11AB\u1109\u116E" aria-hidden="true">#</a> \uC120\uD0DD \uB9E4\uAC1C\uBCC0\uC218</h3><p>{}\uB85C \uAC10\uC2FC \uB9E4\uAC1C\uBCC0\uC218\uB294 \uC120\uD0DD\uC801\uC73C\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>void something(String name, {int age}) {
    // ...
}

void main() {
    something(name: &#39;\uD64D\uAE38\uB3D9&#39;, age: 10);
    something(name: &#39;\uD64D\uAE38\uB3D9&#39;);
    something(age: 10); // \uC5D0\uB7EC
    something(); // \uC5D0\uB7EC
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB610\uD55C \uC120\uD0DD \uB9E4\uAC1C\uBCC0\uC218\uB294 \uAE30\uBCF8\uAC12\uC744 \uC9C0\uC815\uD560 \uC218 \uC788\uB2E4.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>void something(String name, {int age = 10}) {
    // ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="_3-\u1107\u116E\u11AB\u1100\u1175\u110B\u116A-\u1107\u1161\u11AB\u1107\u1169\u11A8" tabindex="-1"><a class="header-anchor" href="#_3-\u1107\u116E\u11AB\u1100\u1175\u110B\u116A-\u1107\u1161\u11AB\u1107\u1169\u11A8" aria-hidden="true">#</a> 3. \uBD84\uAE30\uC640 \uBC18\uBCF5</h2><h3 id="if-else" tabindex="-1"><a class="header-anchor" href="#if-else" aria-hidden="true">#</a> if else</h3><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>String text = &#39;hello&#39;;

if (text is int) {
    print(&#39;\uC815\uC218&#39;);
} else if (text is double) {
    print(&#39;\uC2E4\uC218&#39;);
} else {
    print(&#39;\uC815\uC218\uB3C4 \uC2E4\uC218\uB3C4 \uC544\uB2D8&#39;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="\u1109\u1161\u11B7\u1112\u1161\u11BC-\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u11B7\u1112\u1161\u11BC-\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161" aria-hidden="true">#</a> \uC0BC\uD56D \uC5F0\uC0B0\uC790</h3><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>// [\uC870\uAC74] ? [\uCC38\uC77C \uB54C] : [\uAC70\uC9D3\uC77C \uB54C]
var todo = isRainy ? &#39;\uBE68\uB798\uB97C \uD558\uC9C0 \uC54A\uB294\uB2E4&#39; : &#39;\uBE68\uB798\uB97C \uD55C\uB2E4&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="switch-cast" tabindex="-1"><a class="header-anchor" href="#switch-cast" aria-hidden="true">#</a> switch cast</h3><p>dart\uC758 \uC2A4\uC704\uCE58\uBB38\uC740 \uC5F4\uAC70(enum)\uD0C0\uC785\uACFC \uD568\uAED8 \uC0AC\uC6A9\uD560 \uACBD\uC6B0,<br> \uBAA8\uB4E0 \uCF00\uC774\uC2A4\uB97C \uC804\uBD80 \uAC80\uC0AC\uD574\uC57C \uD558\uB294 \uAC15\uC81C\uC131\uC774 \uC0DD\uAE34\uB2E4.<br> \uC0AC\uB78C\uC758 \uC2E4\uC218\uB97C \uBC29\uC9C0\uD558\uB294 \uC774\uB7F0 \uAE30\uB2A5\uC774 \uC788\uC5B4\uC11C \uD2B9\uC218\uD55C \uACBD\uC6B0\uC5D0\uB294 if \uBB38 \uBCF4\uB2E4 \uC720\uC6A9\uD558\uB2E4.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>enum Status { Uninitialized, Authenticated, Authenticating, Unauthenticated }

void main() {
    var status = Status.Authenticated;
    switch (status) {
        case Status.Authenticated:
            print(&#39;\uC778\uC99D\uB428&#39;);
            break;
        case Status.Authenticating:
            print(&#39;\uC778\uC99D \uCC98\uB9AC \uC911&#39;);
            break;
        case Status.Unauthenticated:
            print(&#39;\uBBF8\uC778\uC99D&#39;);
            break;
        case Status.Uninitialized:
            print(&#39;\uCD08\uAE30\uD654\uB428&#39;);
            break;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h3><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>var items = [&#39;\uC9DC\uC7A5&#39;, &#39;\uB77C\uBA74&#39;, &#39;\uBCF6\uC74C\uBC25&#39;];

for (var i = 0; i &lt; items.length; i++) {
    print(items[i]);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="_4-\u1100\u1162\u11A8\u110E\u1166-\u110C\u1175\u1112\u1163\u11BC-\u1111\u1173\u1105\u1169\u1100\u1173\u1105\u1162\u1106\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#_4-\u1100\u1162\u11A8\u110E\u1166-\u110C\u1175\u1112\u1163\u11BC-\u1111\u1173\u1105\u1169\u1100\u1173\u1105\u1162\u1106\u1175\u11BC" aria-hidden="true">#</a> 4. \uAC1D\uCCB4 \uC9C0\uD5A5 \uD504\uB85C\uADF8\uB798\uBC0D</h2><h3 id="\u110F\u1173\u11AF\u1105\u1162\u1109\u1173-class" tabindex="-1"><a class="header-anchor" href="#\u110F\u1173\u11AF\u1105\u1162\u1109\u1173-class" aria-hidden="true">#</a> \uD074\uB798\uC2A4 (Class)</h3><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>class Person {
    String name;
    int age;

    void addOneYear() {
        age++;
    }
}

// ...\uC0DD\uB7B5...

var person = Person(); // new \uD0A4\uC6CC\uB4DC \uC0DD\uB7B5 \uAC00\uB2A5
person.age = 10;
person.addOneYear();
print(person.age); // 11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="\u110C\u1165\u11B8\u1100\u1173\u11AB-\u110C\u1175\u110C\u1165\u11BC\u110C\u1161" tabindex="-1"><a class="header-anchor" href="#\u110C\u1165\u11B8\u1100\u1173\u11AB-\u110C\u1175\u110C\u1165\u11BC\u110C\u1161" aria-hidden="true">#</a> \uC811\uADFC \uC9C0\uC815\uC790</h3><p>\uBCC0\uC218\uBA85 \uC55E\uC5D0 _ \uAE30\uD638\uB97C \uBD99\uC774\uBA74 \uD574\uB2F9 \uD074\uB798\uC2A4\uAC00 \uC815\uC758\uB418\uC9C0 \uC54A\uC740 \uC678\uBD80\uC5D0\uC11C \uC811\uADFC\uC774 \uBD88\uAC00\uB2A5\uD574\uC9C4\uB2E4.<br><strong>(Java\uC758 private \uC5ED\uD560)</strong></p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>// person.dart \uD30C\uC77C
class Person {
    String name;
    int _age;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>// main.dart \uD30C\uC77C
import &#39;person.dart&#39;;
// ...\uC0DD\uB7B5...
var person = Person();
person._age = 10; // \uC5D0\uB7EC!!! \uC811\uADFC \uBD88\uAC00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="\u1109\u1162\u11BC\u1109\u1165\u11BC\u110C\u1161" tabindex="-1"><a class="header-anchor" href="#\u1109\u1162\u11BC\u1109\u1165\u11BC\u110C\u1161" aria-hidden="true">#</a> \uC0DD\uC131\uC790</h3><p>\uAE30\uBCF8 \uC0DD\uC131\uC790\uB294 \uD074\uB798\uC2A4\uBA85\uACFC \uAC19\uC740 \uC774\uB984\uC758 \uBA54\uC11C\uB4DC\uC774\uB2E4.<br> \uC0AC\uC6A9\uC790 \uC815\uC758 \uC0DD\uC131\uC790\uB97C \uCD94\uAC00\uD558\uBA74 \uAE30\uBCF8 \uC0DD\uC131\uC790\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uAC8C \uB418\uC9C0\uB9CC,<br> \uC120\uD0DD \uB9E4\uAC1C\uBCC0\uC218\uB97C \uC0AC\uC6A9\uD558\uBA74 \uAE30\uBCF8\uC0DD\uC131\uC790\uB3C4 \uD638\uCD9C \uAC00\uB2A5\uD558\uB2E4.<br><strong>(\uC815\uD655\uD788\uB294 \uAE30\uBCF8\uC0DD\uC131\uC790\uB97C \uD638\uCD9C \uAC00\uB2A5\uD55C\uAC8C \uC544\uB2CC \uC120\uD0DD\uB9E4\uAC1C\uBCC0\uC218\uC5D0 null\uC744 \uB300\uC785\uD55C \uC0DD\uC131\uC790\uAC00 \uD638\uCD9C\uB418\uB294 \uAC83\uC774\uB2E4.)</strong></p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>class Person {
    String name;
    int _age;

    Person({this.name, this._age}); // \uC0DD\uC131\uC790
}

// ...\uC0DD\uB7B5...
var person = Person();
var person2 = Person(name: &#39;\uC784\uAE30\uC6D0&#39;, _age: 28);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="getter-setter" tabindex="-1"><a class="header-anchor" href="#getter-setter" aria-hidden="true">#</a> getter, setter</h3><p>_\uB97C \uBD99\uC774\uB294 private \uBCC0\uC218\uC758 \uACBD\uC6B0, \uD074\uB798\uC2A4 \uC678\uBD80\uC5D0\uC11C \uC811\uADFC\uD558\uB824\uBA74 getter, setter\uB97C \uC0AC\uC6A9\uD574\uC57C \uD55C\uB2E4.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>// person.dart
class Rectangle {
    num left, top, width, height;

    Rectangle(this.left, this.top, this.width, this.height);

    // getter : [\uB9AC\uD134\uD0C0\uC785] [get] [\uD568\uC218\uC774\uB984] =&gt; [\uB9AC\uD134\uAC12]
    num get right =&gt; left + width;
    // setter : [set] [\uD568\uC218\uC774\uB984]([\uB9E4\uAC1C\uBCC0\uC218]) =&gt; [\uD568\uC218\uB85C\uC9C1]
    set right(num value) =&gt; left = value - width;

    num get bottom =&gt; top + height;
    set bottom(num value) =&gt; top = value - height;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="\u1109\u1161\u11BC\u1109\u1169\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u11BC\u1109\u1169\u11A8" aria-hidden="true">#</a> \uC0C1\uC18D</h3><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>class Hero {
    String name = &#39;\uC601\uC6C5&#39;;

    void run() {}
}

class SuperHero extends Hero {

    @Override
    void run() {
        super.run(); // \uBD80\uBAA8\uC758 run()\uC744 \uC2E4\uD589
        this.fly(); // \uCD94\uAC00\uB85C fly()\uB3C4 \uC2E4\uD589
    }

    void fly() {}
}

void main() {
    var hero = SuperHero();
    hero.run(); // ok
    hero.fly(); // ok
    print(hero.name); // \uC601\uC6C5
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="\u110E\u116E\u1109\u1161\u11BC-\u110F\u1173\u11AF\u1105\u1162\u1109\u1173" tabindex="-1"><a class="header-anchor" href="#\u110E\u116E\u1109\u1161\u11BC-\u110F\u1173\u11AF\u1105\u1162\u1109\u1173" aria-hidden="true">#</a> \uCD94\uC0C1 \uD074\uB798\uC2A4</h3><p>\uCD94\uC0C1 \uD074\uB798\uC2A4\uB294 \uCD94\uC0C1 \uBA54\uC11C\uB4DC\uB97C \uD3EC\uD568\uD558\uB294 \uBA54\uC11C\uB4DC\uB2E4.<br> \uCD94\uC0C1 \uBA54\uC11C\uB4DC\uB294 \uC120\uC5B8\uB9CC \uB418\uACE0 \uC815\uC758\uAC00 \uC5C6\uB294 \uBA54\uC11C\uB4DC\uB2E4.<br> \uB2E4\uC911\uC0C1\uC18D \uB610\uD55C \uC9C0\uC6D0\uD55C\uB2E4.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>abstract class Flyable {
    void fly();
}

class Bat implements Monster, Flyable {
    @override
    void attack() {
        print(&#39;\uD560\uD034\uAE30!&#39;);
        
    @override
    void fly() {
        print(&#39;\uD384\uB7ED\uD384\uB7ED&#39;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="\u1106\u1175\u11A8\u1109\u1173\u110B\u1175\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1106\u1175\u11A8\u1109\u1173\u110B\u1175\u11AB" aria-hidden="true">#</a> \uBBF9\uC2A4\uC778</h3><p>with \uD0A4\uC6CC\uB4DC\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC0C1\uC18D\uD558\uC9C0 \uC54A\uACE0 \uB2E4\uB978 \uD074\uB798\uC2A4\uC758 \uAE30\uB2A5\uC744 \uAC00\uC838\uC624\uAC70\uB098 \uC624\uBC84\uB77C\uC774\uB4DC\uD560 \uC218 \uC788\uB2E4.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>class Goblin implements Monster {
    @override
    void attack() {
        print(&#39;\uACE0\uBE14\uB9B0 \uC5B4\uD0DD&#39;);
    }
}

class DarkGoblin extends Goblin with Hero {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="\u110B\u1167\u11AF\u1100\u1165-\u1110\u1161\u110B\u1175\u11B8" tabindex="-1"><a class="header-anchor" href="#\u110B\u1167\u11AF\u1100\u1165-\u1110\u1161\u110B\u1175\u11B8" aria-hidden="true">#</a> \uC5F4\uAC70 \uD0C0\uC785</h3><p>\uC0C1\uC218\uB97C \uC815\uC758\uD558\uB294 \uD2B9\uC218\uD55C \uD615\uD0DC\uC758 \uD074\uB798\uC2A4\uC774\uB2E4. \uC5F4\uAC70 \uD0C0\uC785\uC744 switch\uBB38\uC5D0 \uC0AC\uC6A9\uD558\uBA74 \uBAA8\uB4E0 \uC0C1\uC218\uB97C \uC804\uBD80 \uAC80\uC0AC\uD574\uC57C \uD55C\uB2E4.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>enum Status { login, logout }
var authStatus = Status.logout;

switch(authStatus) {
    case Status.login:
        print(&#39;\uB85C\uADF8\uC778&#39;);
        break;
    case Status.logout:     // \uC5C6\uC73C\uBA74 \uC5D0\uB7EC
        print(&#39;\uB85C\uADF8\uC544\uC6C3&#39;);
        break;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,111),r=[s];function l(v,t){return i(),n("div",null,r)}var b=e(a,[["render",l],["__file","Dart \uAE30\uBCF8 \uBB38\uBC95.html.vue"]]);export{b as default};
