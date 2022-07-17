import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,e as s}from"./app.404da4f0.js";const a={},d=s(`<h1 id="_2-\u110B\u1161\u11AF\u110B\u1161\u1103\u116E\u110B\u1165\u110B\u1163-\u1112\u1161\u11AF-\u110C\u1161\u1107\u1161\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#_2-\u110B\u1161\u11AF\u110B\u1161\u1103\u116E\u110B\u1165\u110B\u1163-\u1112\u1161\u11AF-\u110C\u1161\u1107\u1161\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173" aria-hidden="true">#</a> 2. \uC54C\uC544\uB450\uC5B4\uC57C \uD560 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8</h1><h2 id="const-let" tabindex="-1"><a class="header-anchor" href="#const-let" aria-hidden="true">#</a> const, let</h2><blockquote><p>\uBCC0\uC218 \uD0C0\uC785\uC778 var\uB97C \uB300\uCCB4\uD558\uB294 \uC0C8\uB85C\uC6B4 \uD0C0\uC785</p></blockquote><p>const\uB294 \uC0C1\uC218, let\uC740 \uBCC0\uC218\uB85C \uC4F0\uC778\uB2E4.<br> (const : \uC8FC\uC18C\uAC12\uC744 \uBC14\uAFB8\uC9C0 \uBABB\uD560 \uBFD0 \uB0B4\uBD80\uAC12\uC740 \uC218\uC815\uC774 \uAC00\uB2A5\uD558\uB2E4.)</p><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">var</th><th style="text-align:center;">const, let</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>\uC2A4\uCF54\uD504</strong></td><td style="text-align:center;">\uD568\uC218 \uB808\uBCA8 \uC2A4\uCF54\uD504</td><td style="text-align:center;">\uBE14\uB85D \uB808\uBCA8 \uC2A4\uCF54\uD504</td></tr><tr><td style="text-align:center;"><strong>\uD638\uC774\uC2A4\uD305 \uACFC\uC815</strong></td><td style="text-align:center;">\uC120\uC5B8 \uBC0F undefined \uCD08\uAE30\uD654</td><td style="text-align:center;">\uC120\uC5B8</td></tr></tbody></table><br><h2 id="\u1110\u1166\u11B7\u1111\u1173\u11AF\u1105\u1175\u11BA-\u1106\u116E\u11AB\u110C\u1161\u110B\u1167\u11AF" tabindex="-1"><a class="header-anchor" href="#\u1110\u1166\u11B7\u1111\u1173\u11AF\u1105\u1175\u11BA-\u1106\u116E\u11AB\u110C\u1161\u110B\u1167\u11AF" aria-hidden="true">#</a> \uD15C\uD50C\uB9BF \uBB38\uC790\uC5F4</h2><blockquote><p>\uBC31\uD2F1(\`)\uC744 \uC774\uC6A9\uD558\uC5EC \uBB38\uC790\uC5F4\uC744 \uAC10\uC2F8\uC8FC\uB294 \uBC29\uBC95</p></blockquote><p>string \uC548\uC5D0 \${\uBCC0\uC218} \uD615\uC2DD\uC73C\uB85C \uBCC0\uC218\uB97C \uB123\uC744 \uC218 \uC788\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const num1 = 1;
const num2 = 2;
console.log(\`num1 = \${num1}, num2 = \${num2}\`);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="\u1100\u1162\u11A8\u110E\u1166-\u1105\u1175\u1110\u1165\u1105\u1165\u11AF" tabindex="-1"><a class="header-anchor" href="#\u1100\u1162\u11A8\u110E\u1166-\u1105\u1175\u1110\u1165\u1105\u1165\u11AF" aria-hidden="true">#</a> \uAC1D\uCCB4 \uB9AC\uD130\uB7F4</h2><p>ES6\uC5D0\uC11C\uB294 \uAC1D\uCCB4 \uB9AC\uD130\uB7F4\uC5D0 \uB2E4\uC74C\uACFC \uAC19\uC740 \uAE30\uB2A5\uC774 \uCD94\uAC00\uB418\uC5C8\uB2E4.</p><ol><li><p>K:V \uD615\uD0DC\uB97C \uC0AC\uC6A9\uD560 \uB54C \uC18D\uC131\uBA85\uACFC \uBCC0\uC218\uBA85\uC774 \uAC19\uC73C\uBA74 \uBCC0\uC218\uBA85\uCC98\uB7FC \uD45C\uD604\uD560 \uC218 \uC788\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const a = 1;
const obj = {
    a : a, // \uAE30\uC874 \uBC29\uC2DD
    a,     // \uC18D\uC131\uBA85\uACFC \uBCC0\uC218\uBA85\uC774 \uAC19\uC744 \uACBD\uC6B0 \uBCC0\uC218\uBA85\uC73C\uB85C\uB9CC \uD45C\uD604 \uAC00\uB2A5
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\uAC1D\uCCB4 \uB9AC\uD130\uB7F4 \uC548\uC5D0\uC11C \uC18D\uC131\uBA85\uC744 \uB3D9\uC801\uC73C\uB85C \uC0DD\uC131\uD560 \uC218 \uC788\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const es = &#39;ES&#39;;
const obj = {
    [es + 6]: &#39;This is ES6&#39;,
}
console.log(obj.ES6) // This is ES6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><br><h2 id="\u1112\u116A\u1109\u1161\u11AF\u1111\u116D-\u1112\u1161\u11B7\u1109\u116E" tabindex="-1"><a class="header-anchor" href="#\u1112\u116A\u1109\u1161\u11AF\u1111\u116D-\u1112\u1161\u11B7\u1109\u116E" aria-hidden="true">#</a> \uD654\uC0B4\uD45C \uD568\uC218</h2><p>\uAE30\uC874\uC758 function\uACFC \uB2E4\uB978 \uC810\uC740 \uD654\uC0B4\uD45C \uD568\uC218\uB294 this\uAC00 \uC5C6\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const func1 = () =&gt; {};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uADF8\uB798\uC11C this\uB97C \uD638\uCD9C\uD558\uBA74 \uAC00\uC7A5 \uAC00\uAE4C\uC774\uC5D0 \uC788\uB294 this\uB97C \uCC3E\uB294\uB2E4.<br> \uC774\uB7EC\uD55C \uD2B9\uC9D5\uC744 \uC774\uC6A9\uD558\uC5EC \uAC1D\uCCB4\uC758 \uBA54\uC11C\uB4DC \uC548\uC5D0\uC11C \uD654\uC0B4\uD45C \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uBA74 this\uB97C \uC774\uC6A9\uD558\uC5EC \uAC1D\uCCB4\uC758 \uD504\uB85C\uD37C\uD2F0\uB97C \uAC00\uC838\uC62C \uC218 \uC788\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const group = {
    title: &quot;1\uC870&quot;,
    students: [&#39;\uAE30\uC6D0&#39;, &#39;\uBCF4\uB78C&#39;, &#39;\uD638\uC9C4&#39;],

    getList() {
        // this -&gt; group\uC744 \uAC00\uB9AC\uD0B4
        this.students.forEach(
            // this -&gt; group\uC744 \uAC00\uB9AC\uD0B4
            student =&gt; alert(this.title + &#39;:&#39; + student);
        )
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>\uD654\uC0B4\uD45C \uD568\uC218\uB294 \uC790\uC2E0\uB9CC\uC758 this\uAC00 \uC5C6\uAE30 \uB54C\uBB38\uC5D0 new\uC640 \uD568\uAED8 \uC2E4\uD589\uD560 \uC218 \uC5C6\uB2E4.</p></li><li><p>\uD654\uC0B4\uD45C \uD568\uC218\uC5D4 super\uB3C4 \uC5C6\uB2E4. \uADF8\uB798\uC11C super\uB85C \uBD80\uBAA8 \uD074\uB798\uC2A4\uC5D0 \uC811\uADFC\uD560 \uC218 \uC5C6\uB2E4.</p></li></ul><p><strong>\uC989, \uD074\uB798\uC2A4\uC758 \uD504\uB85C\uD37C\uD2F0\uB85C \uD654\uC0B4\uD45C\uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC740 \uC88B\uC9C0 \uC54A\uB2E4.</strong></p><br><h2 id="\u1100\u116E\u110C\u1169\u1107\u116E\u11AB\u1112\u1162-\u1112\u1161\u11AF\u1103\u1161\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1100\u116E\u110C\u1169\u1107\u116E\u11AB\u1112\u1162-\u1112\u1161\u11AF\u1103\u1161\u11BC" aria-hidden="true">#</a> \uAD6C\uC870\uBD84\uD574 \uD560\uB2F9</h2><p>\uAD6C\uC870\uBD84\uD574 \uD560\uB2F9\uC744 \uC0AC\uC6A9\uD558\uBA74 \uAC1D\uCCB4\uB098 \uBC30\uC5F4\uB85C\uBD80\uD130 \uD544\uC694\uD55C \uC18D\uC131\uB9CC \uACE8\uB77C\uC11C \uBE7C\uB0BC \uC218 \uC788\uB2E4.<br> \uC544\uB798\uC640 \uAC19\uC774 \uAE4A\uC774\uAC00 \uB2E4\uB978 \uD504\uB85C\uD37C\uD2F0 \uB610\uD55C \uBE7C\uB0BC \uC218 \uC788\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const people = {
    info: {
        name: &#39;giwon&#39;,
        age: 28,
        view: 0,
    },
    getView() {
        this.info.view++;
        return this.info.view
    },
};
const { getView, info: { view } } = people;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br> \uBC30\uC5F4\uC5D0\uB3C4 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4. \uAC12\uC744 \uAC00\uC838\uC624\uC9C0 \uC54A\uC744\uAC70\uB77C\uBA74 \uBCC0\uC218\uBA85\uC744 \uC791\uC131\uD558\uC9C0 \uC54A\uC73C\uBA74 \uB41C\uB2E4. <div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const arr = [&#39;nodejs&#39;, {}, 10, true];
const [node, obj, , bool] = arr;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="\u110F\u1173\u11AF\u1105\u1162\u1109\u1173" tabindex="-1"><a class="header-anchor" href="#\u110F\u1173\u11AF\u1105\u1162\u1109\u1173" aria-hidden="true">#</a> \uD074\uB798\uC2A4</h2><p>\uD504\uB85C\uD1A0\uD0C0\uC785 \uAE30\uBC18 \uBB38\uBC95\uC744 \uD074\uB798\uC2A4 \uD615\uC2DD\uC73C\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uAC8C \uAFB8\uBA70\uB1A8\uB2E4\uACE0 \uBCF4\uBA74 \uB420 \uB4EF \uD558\uB2E4.</p><ul><li><strong>constructor</strong> : \uC0DD\uC131\uC790\uB97C \uB73B\uD55C\uB2E4.</li><li><strong>static</strong> \uD0A4\uC6CC\uB4DC : <strong>\uBA54\uC11C\uB4DC\uC5D0 \uC0AC\uC6A9</strong>\uD558\uBA70 \uC778\uC2A4\uD134\uC2A4\uB97C \uC0DD\uC131\uD558\uC9C0 \uC54A\uACE0 \uBC14\uB85C <code>Class.method()</code> \uAC19\uC740 \uD615\uC2DD\uC73C\uB85C \uAC00\uC838\uB2E4 \uC4F8 \uC218 \uC788\uAC8C \uD574\uC900\uB2E4.</li><li><strong>extends</strong> \uD0A4\uC6CC\uB4DC : \uD074\uB798\uC2A4\uB97C \uC0C1\uC18D \uBC1B\uC744 \uC218 \uC788\uB2E4.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>class Human {
    constructor(type = &#39;human&#39;) {
        this.type = type;
    }

    static isHuman(human) {
        return human instanceof Human;
    }

    breathe() {
        alert(&#39;h-a-a-a-m&#39;);
    }
}

class Zero extends Human {
    constructor(type, firstName, lastName) {
        super(type); // \uBD80\uBAA8\uC758 \uD0C0\uC785\uC744 \uAC00\uC838\uC628\uB2E4.
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName() {
        super.breathe(); // \uBD80\uBAA8\uC758 breathe()\uBA54\uC11C\uB4DC\uB97C \uC2E4\uD589
        alert(\`\${this.firstName} \${this.lastName}\`);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="\u1107\u1175\u1103\u1169\u11BC\u1100\u1175-\u1105\u1169\u110C\u1175\u11A8-\u110E\u1165\u1105\u1175-\u1107\u1161\u11BC\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#\u1107\u1175\u1103\u1169\u11BC\u1100\u1175-\u1105\u1169\u110C\u1175\u11A8-\u110E\u1165\u1105\u1175-\u1107\u1161\u11BC\u1107\u1165\u11B8" aria-hidden="true">#</a> \uBE44\uB3D9\uAE30 \uB85C\uC9C1 \uCC98\uB9AC \uBC29\uBC95</h2><p>Javascript\uB294 \uD55C\uC904\uC529 \uCF54\uB4DC\uB97C \uCC98\uB9AC\uD558\uBA70 \uC77D\uC5B4\uB0B4\uB824\uAC04\uB2E4. \uD558\uC9C0\uB9CC \uBE44\uB3D9\uAE30 \uCF54\uB4DC\uB294 \uCF54\uB4DC\uB97C \uC644\uB8CC\uC2DC\uD0A4\uC9C0 \uC54A\uACE0 \uBC31\uADF8\uB77C\uC6B4\uB4DC\uC5D0\uC11C \uB530\uB85C \uB3D9\uC791\uD55C\uB2E4.<br> \uADF8\uB798\uC11C \uC2E4\uD589 \uC21C\uC11C\uB97C \uB9DE\uCDB0\uC8FC\uAE30 \uC704\uD574 \uCF5C\uBC31\uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC2E4\uD589 \uC21C\uC11C\uB97C \uC815\uD574\uC900\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>setTimeout((name) =&gt; {
    let list = name;
    console.log(list);

    setTimeout((name) =&gt; {
        list += &#39;, &#39; + name;
        console.log(list);

        setTimeout((name) =&gt; {
            list += &#39;, &#39; + name;
            console.log(list);
        }, 500, &#39;\uB77C\uB5BC&#39;);
    }, 500, &#39;\uBAA8\uCE74&#39;);
}, 500, &#39;\uC544\uBA54\uB9AC\uCE74\uB178&#39;);
// &#39;\uC544\uBA54\uB9AC\uCE74\uB178&#39;
// &#39;\uC544\uBA54\uB9AC\uCE74\uB178, \uBAA8\uCE74&#39;
// &#39;\uC544\uBA54\uB9AC\uCE74\uB178, \uBAA8\uCE74, \uB77C\uB5BC&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uCF5C\uBC31\uC758 \uB2E8\uC810\uC740 \uCF5C\uBC31\uC774 \uC911\uCCA9\uB420\uC218\uB85D \uC810\uC810 \uBCF4\uAE30\uAC00 \uD798\uB4E4\uC5B4\uC9C4\uB2E4.</p><p>\uAC00\uB3C5\uC131\uC774 \uB5A8\uC5B4\uC9C0\uB294\uB9CC\uD07C \uC608\uC678\uCC98\uB9AC\uAC19\uC740 \uB85C\uC9C1\uB4E4\uC744 \uC9DC\uAE30 \uD798\uB4E4\uC5B4\uC9C4\uB2E4.</p><p>\uC774\uB7EC\uD55C \uBE44\uB3D9\uAE30 \uCC98\uB9AC\uB97C \uD574\uACB0\uD558\uAE30 \uC704\uD574 Promise\uAC00 \uB3C4\uC785\uB418\uC5C8\uB2E4.</p><h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> <strong>Promise</strong></h2><p>Promise\uB294 \uCF5C\uBC31\uD568\uC218\uB97C .then()\uACFC .catch()\uC640 \uAC19\uC740 \uBC29\uC2DD\uC744 \uC774\uC6A9\uD558\uC5EC \uAC00\uB3C5\uC131\uC744 \uC99D\uAC00\uC2DC\uCF30\uB2E4.</p><p>\uADF8\uB9AC\uACE0 Promise\uB294 \uC0C1\uD0DC\uB77C\uB294\uAC83\uC744 \uAC16\uB294\uB2E4.</p><ul><li>\uC774\uD589 : fulfilled <code>[Promise &lt;fulfilled&gt;]</code></li><li>\uB300\uAE30 : pending <code>[Promise &lt;pending&gt;]</code></li><li>\uC2E4\uD328 : rejected <code>[Promise &lt;rejected&gt;]</code></li></ul><p>Promise\uC758 \uC0C1\uD0DC\uAC00 fulfilled\uAC00 \uB418\uC5B4\uC57C \uC6D0\uD558\uB294 \uACB0\uACFC\uAC12\uC744 \uBC18\uD658\uD55C\uB2E4.</p><p>Promise\uB294 \uD30C\uB77C\uBBF8\uD130\uB85C resolve, reject\uB97C \uBC1B\uB294\uB370 \uB450 \uD30C\uB77C\uBBF8\uD130\uB97C \uD1B5\uD574\uC11C \uC131\uACF5,\uC2E4\uD328\uC5D0 \uAD00\uD55C \uB85C\uC9C1\uC744 \uC791\uC131\uD55C\uB2E4.<br> \uB610\uB294 .then(), .catch()\uB85C \uB2E4\uC74C \uCF5C\uBC31\uC758 \uC131\uACF5\uC5EC\uBD80\uC5D0 \uAD00\uD55C \uB85C\uC9C1\uC744 \uC2E4\uD589\uC2DC\uD0AC \uC218 \uC788\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const promise1 = (result) =&gt; {
    return new Promise((resolve, reject) =&gt; {
        if (result) {
            resolve(&quot;\uC131\uACF5&quot;);
        } else {
            reject(&quot;\uC2E4\uD328&quot;);
        }
    });
}

// \uCCAB \uBC88\uC9F8 \uBC29\uBC95 (\uD30C\uB77C\uBBF8\uD130 2\uAC1C \uC0AC\uC6A9\uD558\uAE30)
promise1(true).then(
    (res) =&gt; {
        console.log(res); // &quot;\uC131\uACF5&quot; \uCD9C\uB825
    },
    (err) =&gt; {
        console.log(err); // \uD30C\uB77C\uBBF8\uD130\uAC00 false\uBA74 &quot;\uC2E4\uD328&quot; \uCD9C\uB825
    }
);

// \uB450 \uBC88\uC9F8 \uBC29\uBC95 (then or catch)
promise1(true).then(
    (res) =&gt; {
        console.log(res); // &quot;\uC131\uACF5&quot;
    });

promise1(false).catch(
    (err) =&gt; {
        console.log(err); // &quot;\uC2E4\uD328&quot;
    }
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uD558\uC9C0\uB9CC Promise\uB3C4 .then()\uACFC .catch()\uAC00 \uACC4\uC18D\uD574\uC11C \uC774\uC5B4\uC9C0\uAE30\uC5D0 \uCF54\uB4DC\uAC00 \uAE54\uB054\uD558\uC9C4 \uBABB\uD558\uB2E4. (=<code>\uD504\uB85C\uBBF8\uC2A4 \uCCB4\uC774\uB2DD</code>)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>promise1()
.then((res) =&gt; new Promise((resolve, reject) =&gt; {}))
.then((res1) =&gt; new Promise((resolve, reject) =&gt; {}))
// ......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="async-await" tabindex="-1"><a class="header-anchor" href="#async-await" aria-hidden="true">#</a> <strong>async, await</strong></h2><p>\uC720\uC800\uC758 \uC774\uB984\uC744 \uAC00\uC838\uC624\uB294 \uBE44\uB3D9\uAE30 \uD568\uC218\uB97C \uC9DC\uBCF4\uC790.<br> \uC774\uBC88\uC5D4 Promise\uB97C \uB9AC\uD134\uD558\uB294 fetch\uD568\uC218\uB97C \uC0AC\uC6A9\uD574\uBCF4\uACA0\uB2E4.<br> \uC544\uB798\uC640 \uAC19\uC774 then\uC744 \uC774\uC6A9\uD558\uC5EC \uC720\uC800\uC758 \uC815\uBCF4\uB97C \uAC00\uC838\uC62C \uC218 \uC788\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function getName() {
    let user = {};

    let promise1 = fetch(&#39;domain.com/users/1&#39;)
    .then((resp) =&gt; resp.json())
    .then((resp) =&gt; {
        user = resp;
        console.log(user);
    });

    promise1();

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC5EC\uAE30\uC11C async, await\uC744 \uC774\uC6A9\uD558\uBA74 \uB3D9\uAE30\uC2DD \uCF54\uB4DC \uC9DC\uB4EF\uC774 \uCF54\uB4DC \uD615\uD0DC\uB97C \uBC14\uAFD4\uC904 \uC218 \uC788\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>async function getName() {
    let user = await fetch(&#39;domain.com/users/1&#39;)
    
    user = await user.json();

    console.log(user); // {id: 1}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB9C8\uCE58 \uB3D9\uAE30\uC2DD\uC73C\uB85C \uCF54\uB4DC\uB97C \uC9E0 \uB4EF\uD55C \uBAA8\uC591\uC0C8\uAC00 \uB098\uC628\uB2E4.<br> async, await\uC740 \uC774\uB807\uAC8C \uBE44\uB3D9\uAE30 \uB85C\uC9C1\uC744 \uB3D9\uAE30 \uB85C\uC9C1\uCC98\uB7FC \uC9E4 \uC218 \uC788\uAC8C \uD574\uC900\uB2E4.</p><blockquote><p>async, await\uC740 \uC2A4\uCF54\uD504 \uCD5C\uC0C1\uB2E8\uC5D0\uC11C\uB294 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uB2E4!<br> \uC774\uB7F0 \uACBD\uC6B0\uC5D0\uB294 then\uC73C\uB85C promise\uB97C \uCC98\uB9AC\uD574\uC8FC\uB294 \uAC83\uC774 \uAC00\uC7A5 \uC88B\uC744\uB4EF</p></blockquote><br><h2 id="ajax-asynchronous-javascript-and-xml" tabindex="-1"><a class="header-anchor" href="#ajax-asynchronous-javascript-and-xml" aria-hidden="true">#</a> AJAX (Asynchronous Javascript And XML)</h2><p>\uBA85\uCE6D\uC5D0 \uC368\uC788\uB2E4\uC2DC\uD53C \uC8FC\uB85C XML..\uB85C \uC751\uB2F5\uC744 \uBC1B\uB294\uB2E4.<br><s>\uAC70\uC758 JSON\uC73C\uB85C \uD1B5\uC2E0\uD558\uB294 \uB9C8\uB2F9\uC5D0 AJAJ\uB77C \uBD88\uB7EC\uC57C \uD558\uC9C0 \uC54A\uB098 \uC2F6\uAE30\uB3C4...</s></p><p>AJAX\uB294 \uBE44\uB3D9\uAE30\uC801 \uC6F9 \uC11C\uBE44\uC2A4\uB97C \uAC1C\uBC1C\uD560 \uB54C \uC0AC\uC6A9\uD558\uB294 <strong>\uAE30\uBC95</strong>\uC774\uB2E4.</p><p>\uAE30\uBCF8\uC801\uC73C\uB85C \uC6F9\uD398\uC774\uC9C0\uB294 \uB370\uC774\uD130\uAC00 \uBC14\uB00C\uBA74 \uC11C\uBC84\uC5D0\uC11C HTML\uD30C\uC77C\uC744 \uBC1B\uC544\uC11C \uBB38\uC11C \uC790\uCCB4\uB97C \uC0C8\uB85C \uAC31\uC2E0\uD574\uC900\uB2E4.</p><p>\uADF8\uCE58\uB9CC \uB9CC\uC57D \uB370\uC774\uD130\uAC00 \uC870\uAE08\uB9CC \uBC14\uB00C\uB294\uB370 \uBB38\uC11C \uC804\uCCB4\uB97C \uB9AC\uB85C\uB529\uD558\uB294\uAC83\uC740 \uB0AD\uBE44\uB2E4.</p><p>\uADF8\uB798\uC11C \uBE44\uB3D9\uAE30 \uD1B5\uC2E0\uC744 \uC774\uC6A9\uD558\uC5EC \uB370\uC774\uD130\uB9CC \uBC1B\uC544\uC640\uC11C Client\uB2E8\uC744 \uC870\uC791\uD574\uC8FC\uACE0\uB294 \uD55C\uB2E4.</p><p>\uBCF4\uD1B5 AJAX \uC694\uCCAD\uC740 jQuery, Axios, fetch \uAC19\uC740 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC774\uC6A9\uD55C\uB2E4.</p><br><h2 id="formdata" tabindex="-1"><a class="header-anchor" href="#formdata" aria-hidden="true">#</a> FormData</h2><p>HTML form \uD0DC\uADF8\uC758 \uB370\uC774\uD130\uB97C \uB3D9\uC801\uC73C\uB85C \uC81C\uC5B4\uD560 \uC218 \uC788\uB294 \uAE30\uB2A5\uC774\uB2E4.<br> \uC8FC\uB85C AJAX\uC640 \uC0AC\uC6A9\uB418\uBA70 \uB370\uC774\uD130 \uD615\uC2DD\uC740 K:V \uC774\uB2E4. \uC544\uB798\uC640 \uAC19\uC740 \uBC29\uC2DD\uC73C\uB85C \uC0AC\uC6A9\uD55C\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const formData = new FormData();
formData.append(&#39;name&#39;, &#39;giwon&#39;);
formData.append(&#39;item&#39;, &#39;orange&#39;);
formData.append(&#39;item&#39;, &#39;melon&#39;);
formData.has(&#39;money&#39;); // false
formData.get(&#39;item&#39;); // orange
formData.getAll(&#39;item&#39;); // [&#39;orange&#39;, &#39;melon&#39;];
formData.delete(&#39;item&#39;);
formData.set(&#39;name&#39;, &#39;Allen&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>FormData\uB294 K:V \uD615\uD0DC\uC774\uAE30\uC5D0, \uD1B5\uC2E0\uD560 \uB54C json\uC744 \uC790\uC8FC \uC0AC\uC6A9\uD558\uACE0 FormData\uB294 \uC798 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294\uB2E4.<br> \uD558\uC9C0\uB9CC \uC774\uBBF8\uC9C0\uB97C \uC804\uC1A1\uD560 \uB54C\uB294 FormData\uB97C \uC0AC\uC6A9\uD574\uC57C \uD55C\uB2E4.</p><br><h2 id="encodeuricomponent-decodeuricomponent" tabindex="-1"><a class="header-anchor" href="#encodeuricomponent-decodeuricomponent" aria-hidden="true">#</a> encodeURIComponent, decodeURIComponent</h2><p>\uC11C\uBC84\uC5D0 \uC694\uCCAD\uC744 \uBCF4\uB0BC \uB54C \uC11C\uBC84\uAC00 \uD55C\uAE00\uC774 \uD3EC\uD568\uB41C \uC8FC\uC18C\uB97C \uC774\uD574\uD558\uC9C0 \uBABB\uD558\uB294 \uACBD\uC6B0\uAC00 \uC788\uB294\uB370, \uC774\uB7F4 \uB54C window \uAC1D\uCCB4\uC758 \uBA54\uC11C\uB4DC\uC778 encodeURIComponent\uB97C \uC0AC\uC6A9\uD55C\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const str = &#39;\uB178\uB4DC&#39;;
const encodedStr = encodeURIComponent(str);
const decodedStr = decodeURIComponent(encodedStr);

console.log(encodedStr); // %EB%85%B8%EB%93%9C
console.log(decodedStr); // \uB178\uB4DC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,74),l=[d];function r(t,c){return n(),i("div",null,l)}var o=e(a,[["render",r],["__file","02. \uC54C\uC544\uB450\uC5B4\uC57C \uD560 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8.html.vue"]]);export{o as default};
