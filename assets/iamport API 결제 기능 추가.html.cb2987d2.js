import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,e as s}from"./app.404da4f0.js";const d={},a=s(`<h1 id="\u110B\u1161\u110B\u1175\u11B7\u1111\u1169\u1110\u1173-iamport-api-\u1100\u1167\u11AF\u110C\u1166-\u1100\u1175\u1102\u1173\u11BC-\u110E\u116E\u1100\u1161" tabindex="-1"><a class="header-anchor" href="#\u110B\u1161\u110B\u1175\u11B7\u1111\u1169\u1110\u1173-iamport-api-\u1100\u1167\u11AF\u110C\u1166-\u1100\u1175\u1102\u1173\u11BC-\u110E\u116E\u1100\u1161" aria-hidden="true">#</a> \uC544\uC784\uD3EC\uD2B8(iamport) API \uACB0\uC81C \uAE30\uB2A5 \uCD94\uAC00</h1><p>\uC774 \uAE00\uC740 \uB9AC\uC561\uD2B8\uC5D0\uC11C \uC544\uC784\uD3EC\uD2B8 API\uB97C \uB2E4\uB8E8\uB294 \uBC29\uBC95\uC744 \uC124\uBA85\uD569\uB2C8\uB2E4.</p><h2 id="_1-\u1109\u1166\u1110\u1175\u11BC\u1112\u1161\u1100\u1175-\u1105\u1161\u110B\u1175\u1107\u1173\u1105\u1165\u1105\u1175-\u1112\u1169\u110E\u116E\u11AF" tabindex="-1"><a class="header-anchor" href="#_1-\u1109\u1166\u1110\u1175\u11BC\u1112\u1161\u1100\u1175-\u1105\u1161\u110B\u1175\u1107\u1173\u1105\u1165\u1105\u1175-\u1112\u1169\u110E\u116E\u11AF" aria-hidden="true">#</a> 1. \uC138\uD305\uD558\uAE30 - \uB77C\uC774\uBE0C\uB7EC\uB9AC \uD638\uCD9C</h2><p>React\uC640 useEffect\uB97C import \uD574\uC900\uB2E4.</p><p>useEffect\uB97C \uC0AC\uC6A9\uD558\uB294 \uC774\uC720\uB294 \uBE0C\uB77C\uC6B0\uC800\uAC00 \uC774 \uD30C\uC77C\uC744 \uCC98\uC74C \uD638\uCD9C\uD588\uC744 \uB54C</p><p>useEffect\uC758 \uB0B4\uBD80\uCF54\uB4DC\uAC00 \uBCC0\uD558\uB294 \uAC83\uC774 \uC5C6\uB2E4\uBA74 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uD638\uCD9C\uB418\uB294 \uCCAB \uC2DC\uC810\uC5D0 \uD55C\uBC88\uB9CC \uD638\uCD9C\uB41C\uB2E4.</p><p>\uADF8\uB9AC\uACE0 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC18C\uBA78\uD558\uAE30 \uC9C1\uC804\uC5D0 useEffect\uC758 \uB9AC\uD134\uC744 \uD638\uCD9C\uD55C\uB2E4.</p><p>react\uC5D0\uC11C \uC544\uB798\uC640 \uAC19\uC774 jquery\uC640 iamport \uB97C \uD638\uCD9C\uD560 \uC218 \uC788\uB2E4.</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>import React, { useEffect } from &#39;react&#39;;

const Payment = (effect, deps) =&gt; {
	    useEffect(() =&gt; {
        const jquery = document.createElement(&quot;script&quot;);
        jquery.src = &quot;https://code.jquery.com/jquery-1.12.4.min.js&quot;;
        const iamport = document.createElement(&quot;script&quot;);
        iamport.src = &quot;https://cdn.iamport.kr/js/iamport.payment-1.1.7.js&quot;;
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);
        return () =&gt; {
            document.head.removeChild(jquery);
            document.head.removeChild(iamport);
        }
    }, []);


    return ();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="_2-\u1100\u1161\u1106\u1162\u11BC\u110C\u1165\u11B7-\u1109\u1175\u11A8\u1107\u1167\u11AF\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_2-\u1100\u1161\u1106\u1162\u11BC\u110C\u1165\u11B7-\u1109\u1175\u11A8\u1107\u1167\u11AF\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 2. \uAC00\uB9F9\uC810 \uC2DD\uBCC4\uD558\uAE30</h2><p>pg \uB294 \uC5B4\uB290 \uD50C\uB7AB\uD3FC\uC744 \uC774\uC6A9\uD558\uC5EC \uACB0\uC81C\uD560\uC9C0 \uBB3C\uC5B4\uBCF4\uB294\uAC70\uACE0,</p><p>pay_method\uB294 \uACB0\uC81C\uC218\uB2E8\uC744 \uB9D0\uD558\uB294\uAC83\uC774\uB2E4. card\uB85C \uC124\uC815\uD558\uBA74 \uCE74\uB4DC\uACB0\uC81C\uBC16\uC5D0 \uB418\uC9C0\uC54A\uB294\uB2E4.</p><p>\uC774\uB2C8\uC2DC\uC2A4\uC5D0\uC11C \uCE74\uCE74\uC624\uD398\uC774\uB97C \uC0AC\uC6A9\uD558\uB354\uB77C\uB3C4 \uACB0\uC81C\uAC00 \uC2E4\uD328\uD55C\uB2E4. \uC774\uAC74 \uC880 \uB354 \uC54C\uC544\uBCFC \uC608\uC815\uC774\uB2E4.</p><p>\uADF8\uB9AC\uACE0 \uCF54\uB4DC \uC544\uB7AB\uCABD\uC5D0 IMP.request_pay(data, callback)\uC5D0 \uB4E4\uC5B4\uAC00\uB294 callback\uC744 \uAD6C\uD604\uD574\uC57C\uD55C\uB2E4.</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>const onClickPayment = () =&gt; {
const { IMP } = window;
IMP.init(&#39;imp77220765&#39;); // \uAC00\uB9F9\uC810 \uC2DD\uBCC4\uCF54\uB4DC

        // \uACB0\uC81C \uB370\uC774\uD130 \uC815\uC758
        const data = {
            pg: &#39;html5_inicis&#39;,     // PG\uC0AC (\uD544\uC218\uD56D\uBAA9)
            pay_method: &#39;card&#39;,     // \uACB0\uC81C\uC218\uB2E8 (\uD544\uC218\uD56D\uBAA9)
            merchant_uid: \`mid_\${new Date().getTime()}\`,  // \uACB0\uC81C\uAE08\uC561 (\uD544\uC218\uD56D\uBAA9)
            name: &#39;\uACB0\uC81C \uD14C\uC2A4\uD2B8&#39;,     // \uC8FC\uBB38\uBA85 (\uD544\uC218\uD56D\uBAA9)
            amount: &#39;1000&#39;,         // \uAE08\uC561 (\uD544\uC218\uD56D\uBAA9)
            custom_data: {
                name: &#39;\uBD80\uAC00\uC815\uBCF4&#39;,
                desc: &#39;\uC138\uBD80 \uBD80\uAC00\uC815\uBCF4&#39;
            },
            buyer_name: &#39;\uC784\uAE30\uC6D0&#39;,       // \uAD6C\uB9E4\uC790 \uC774\uB984
            buyer_tel: &#39;01099558701&#39;,   // \uAD6C\uB9E4\uC790 \uC804\uD654\uBC88\uD638 (\uD544\uC218\uD56D\uBAA9)
            buyer_email: &#39;l4279625@gmail.com&#39;, // \uAD6C\uB9E4\uC790 \uC774\uBA54\uC77C
            buyer_addr: &#39;\uC8FC\uC18C&#39;,
            buyer_postalcode: &#39;\uC6B0\uD3B8\uBC88\uD638&#39;
    		// ....
        };

        IMP.request_pay(data, callback);
    }
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uCC38\uACE0 : <a href="https://docs.iamport.kr/implementation/payment" target="_blank" rel="noopener noreferrer">https://docs.iamport.kr/implementation/payment</a></p><br><h2 id="_3-\u110F\u1169\u11AF\u1107\u1162\u11A8-\u1100\u116E\u1112\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#_3-\u110F\u1169\u11AF\u1107\u1162\u11A8-\u1100\u116E\u1112\u1167\u11AB" aria-hidden="true">#</a> 3. \uCF5C\uBC31 \uAD6C\uD604</h2><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>const callback = (response) =&gt; {
  const { success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status } = response;

  if (success) {
    alert(&#39;\uACB0\uC81C \uC131\uACF5&#39;);
  } else {
    alert(\`\uACB0\uC81C \uC2E4\uD328 : \${error_msg}\`);
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="_3-\u110C\u1165\u11AB\u110E\u1166-\u110F\u1169\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#_3-\u110C\u1165\u11AB\u110E\u1166-\u110F\u1169\u1103\u1173" aria-hidden="true">#</a> 3. \uC804\uCCB4 \uCF54\uB4DC</h2><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>import React, { useEffect } from &#39;react&#39;;

const Payment = (effect, deps) =&gt; {
  useEffect(() =&gt; {
    const jquery = document.createElement(&#39;script&#39;);
    jquery.src = &#39;https://code.jquery.com/jquery-1.12.4.min.js&#39;;
    const iamport = document.createElement(&#39;script&#39;);
    iamport.src = &#39;https://cdn.iamport.kr/js/iamport.payment-1.1.7.js&#39;;
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () =&gt; {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  const onClickPayment = () =&gt; {
    const { IMP } = window;
    IMP.init(&#39;imp77220765&#39;); // \uAC00\uB9F9\uC810 \uC2DD\uBCC4\uCF54\uB4DC

    // \uACB0\uC81C \uB370\uC774\uD130 \uC815\uC758
    const data = {
      pg: &#39;html5_inicis&#39;, // PG\uC0AC (\uD544\uC218\uD56D\uBAA9)
      pay_method: &#39;card&#39;, // \uACB0\uC81C\uC218\uB2E8 (\uD544\uC218\uD56D\uBAA9)
      merchant_uid: \`mid_\${new Date().getTime()}\`, // \uACB0\uC81C\uAE08\uC561 (\uD544\uC218\uD56D\uBAA9)
      name: &#39;\uACB0\uC81C \uD14C\uC2A4\uD2B8&#39;, // \uC8FC\uBB38\uBA85 (\uD544\uC218\uD56D\uBAA9)
      amount: &#39;1000&#39;, // \uAE08\uC561 (\uD544\uC218\uD56D\uBAA9)
      custom_data: {
        name: &#39;\uBD80\uAC00\uC815\uBCF4&#39;,
        desc: &#39;\uC138\uBD80 \uBD80\uAC00\uC815\uBCF4&#39;,
      },
      buyer_name: &#39;\uC784\uAE30\uC6D0&#39;, // \uAD6C\uB9E4\uC790 \uC774\uB984
      buyer_tel: &#39;01099558701&#39;, // \uAD6C\uB9E4\uC790 \uC804\uD654\uBC88\uD638 (\uD544\uC218\uD56D\uBAA9)
      buyer_email: &#39;l4279625@gmail.com&#39;, // \uAD6C\uB9E4\uC790 \uC774\uBA54\uC77C
      buyer_addr: &#39;\uAD6C\uCC9C\uBA74\uB85C 365-13&#39;,
      buyer_postalcode: &#39;05258&#39;,
    };

    IMP.request_pay(data, callback);
  };

  const callback = (response) =&gt; {
    const { success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status } = response;

    if (success) {
      alert(&#39;\uACB0\uC81C \uC131\uACF5&#39;);
    } else {
      alert(\`\uACB0\uC81C \uC2E4\uD328 : \${error_msg}\`);
    }
  };

  return (
    &lt;&gt;
      &lt;button onClick={onClickPayment}&gt;\uACB0\uC81C\uD558\uAE30&lt;/button&gt;
    &lt;/&gt;
  );
};

export default Payment;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p>\uC5EC\uAE30\uAE4C\uC9C0 \uD558\uBA74 \uACB0\uC81C\uAE30\uB2A5\uC774 \uB2F4\uAE34 Component \uD558\uB098 \uC644\uC131\uC774\uB2E4.</p>`,25),l=[a];function r(c,v){return n(),i("div",null,l)}var u=e(d,[["render",r],["__file","iamport API \uACB0\uC81C \uAE30\uB2A5 \uCD94\uAC00.html.vue"]]);export{u as default};
