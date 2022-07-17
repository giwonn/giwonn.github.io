import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as l,c as d,a as e,b as s,d as t,e as a,r}from"./app.404da4f0.js";const o={},c=e("h1",{id:"vue-\u1111\u1161\u110B\u1175\u11AF-\u1100\u116E\u110C\u1169",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue-\u1111\u1161\u110B\u1175\u11AF-\u1100\u116E\u110C\u1169","aria-hidden":"true"},"#"),t(" vue \uD30C\uC77C \uAD6C\uC870")],-1),v=t(":::tip \uD574\uB2F9 \uAE00\uC740 Vue "),u=t(" \uBC84\uC804\uC744 \uAE30\uC900\uC73C\uB85C \uC791\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4."),m=e("br",null,null,-1),b=e("strong",null,"Composition API",-1),g=t("\uB97C \uC774\uC6A9\uD55C \uC791\uC131\uBC95\uC740 \uD3EC\uD568\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. :::"),h=a(`<ul><li><strong>&lt;template&gt;</strong>: HTML \uCF54\uB4DC \uC791\uC131</li><li><strong>&lt;script&gt;</strong>: javascript \uCF54\uB4DC \uC791\uC131</li><li><strong>&lt;style&gt;</strong> : CSS \uCF54\uB4DC \uC791\uC131</li></ul><h2 id="template" tabindex="-1"><a class="header-anchor" href="#template" aria-hidden="true">#</a> &lt;template&gt;</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;!-- :\uBCC0\uC218 \uD615\uC2DD\uC73C\uB85C \uBCC0\uC218 \uC0C1\uC18D \uAC00\uB2A5 --&gt;
    &lt;!-- @close-modal \uACFC \uAC19\uC774 \uC790\uC2DD\uC758 \uD568\uC218\uB97C \uBC1B\uC544\uC904 \uC218 \uC788\uC74C --&gt;
    &lt;Modal @close-modal=&quot;modalCheck = false;&quot; :onerooms=&quot;onerooms&quot; :clickedIndex=&quot;clickedIndex&quot; :modalCheck=&quot;modalCheck&quot; /&gt;

    &lt;div class=&quot;menu&quot;&gt;
      &lt;!-- \uBC18\uBCF5\uBB38 --&gt;
      &lt;!-- v-for=&quot;(element, idx) in \uB370\uC774\uD130&quot; :key=&quot;\uAD6C\uBD84\uC790&quot; --&gt;
      &lt;a v-for=&quot;(menu, i) in menus&quot; :key=&quot;i&quot;&gt;{{ menu }}&lt;/a&gt;
    &lt;/div&gt;

    &lt;Discount v-if=&quot;showDiscount&quot; /&gt;

    &lt;button @click=&quot;priceSort&quot;&gt;\uAC00\uACA9\uC21C\uC815\uB82C&lt;/button&gt;
    &lt;button @click=&quot;sortBack&quot;&gt;\uB418\uB3CC\uB9AC\uAE30&lt;/button&gt;
    
    &lt;Card @open-modal=&quot;modalCheck = true; clickedIndex = i;&quot; v-for=&quot;(oneroom, i) in onerooms&quot; :key=&quot;i&quot; :oneroom=&quot;oneroom&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="script" tabindex="-1"><a class="header-anchor" href="#script" aria-hidden="true">#</a> &lt;script&gt;</h2><table><thead><tr><th style="text-align:center;">\uC18D\uC131</th><th style="text-align:center;">\uB73B</th></tr></thead><tbody><tr><td style="text-align:center;">name</td><td style="text-align:center;">\uD574\uB2F9 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC774\uB984\uC744 \uC9C0\uC815\uD574\uC90C</td></tr><tr><td style="text-align:center;">data</td><td style="text-align:center;">\uC0AC\uC6A9\uD560 \uB370\uC774\uD130(state)\uB97C \uC5EC\uAE30\uC11C \uC120\uC5B8\uD568</td></tr><tr><td style="text-align:center;">components</td><td style="text-align:center;">\uC0AC\uC6A9\uD560 \uCEF4\uD3EC\uB10C\uD2B8\uB4E4\uC744 \uC5EC\uAE30\uC11C \uAD00\uB9AC\uD568</td></tr><tr><td style="text-align:center;">props</td><td style="text-align:center;">\uC0C1\uC18D\uBC1B\uC740 \uB370\uC774\uD130\uB97C \uAD00\uB9AC\uD568</td></tr><tr><td style="text-align:center;">watch</td><td style="text-align:center;">\uD574\uB2F9 \uB370\uC774\uD130\uAC00 \uBCC0\uD654\uD558\uBA74 \uCD94\uAC00\uC801\uC778 \uCC98\uB9AC\uB97C \uD574\uC90C</td></tr><tr><td style="text-align:center;">computed</td><td style="text-align:center;">\uB370\uC774\uD130\uB97C \uC774\uC6A9\uD574 \uC0C8\uB85C\uC6B4 \uAC12\uC744 \uC800\uC7A5\uD560 \uB54C \uC0AC\uC6A9\uD568</td></tr><tr><td style="text-align:center;">methods</td><td style="text-align:center;">\uC0AC\uC6A9\uD560 \uBA54\uC11C\uB4DC\uB97C \uC5EC\uAE30\uC11C \uAD00\uB9AC\uD568</td></tr></tbody></table><h3 id="\u1109\u1161\u110B\u116D\u11BC-\u110B\u1168" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u110B\u116D\u11BC-\u110B\u1168" aria-hidden="true">#</a> \uC0AC\uC6A9 \uC608</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;script&gt;
import Modal from &#39;./Modal.vue&#39;;

export default {
  name: &#39;App&#39;,
  data() {
    return {
      price1: 60,
      colorRed: &#39;color:red&#39;,
    }
  },
  components: {
    Modal: Modal,
  }
  props: {
    onerooms: Array, // (\uBCC0\uC218\uC774\uB984: \uD0C0\uC785) \uD615\uC2DD\uC73C\uB85C \uC800\uC7A5\uD568
  },
  watch: {
    price1(a, b) {   // \uD568\uC218 \uC774\uB984\uC740 \uAC10\uC2DC\uD560 \uBCC0\uC218\uBA85\uACFC \uAC19\uAC8C \uC9C0\uC5B4\uC90C (a=\uBC14\uB010\uAC12, b=\uC774\uC804\uAC12)
      if (a == 70) { // a\uB97C 70\uC73C\uB85C \uBC14\uAFBC\uB2E4\uBA74?
        console.log(\`a\uB294 \${a}\`);            // &quot;a\uB294 70&quot;
        console.log(\`\uC774\uC804\uC758 a\uB294 \${b}\uC600\uC74C\`) // &quot;\uC774\uC804\uC758 a\uB294 60\uC774\uC5C8\uC74C&quot;
      }
    }
  },
  computed: {

  },
  methods: {
    printOne() {
      console.log(&quot;\uBC84\uD2BC1 \uD074\uB9AD&quot;);
    }
    printTwo(\uBCC0\uC218) {
      console.log(&quot;\uBC84\uD2BC1 \uD074\uB9AD&quot;);
    }
    printTwo(\uBCC0\uC218, event) {
      console.log(&quot;\uBC84\uD2BC1 \uD074\uB9AD&quot;, event.target.value);
    }
  }
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function p(q,x){const n=r("Badge");return l(),d("div",null,[c,e("p",null,[v,s(n,{type:"tip",text:"v2",vertical:"top"}),u,m,b,g]),h])}var f=i(o,[["render",p],["__file","Vue \uAD6C\uC870.html.vue"]]);export{f as default};
