import{e as n}from"./app.c837ccd9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/images/Book/\uD074\uB9B0\uCF54\uB4DC/8\uC7A5_\uC1A1\uC2E0\uAE30.jpg";const p={},e=n(`<h1 id="_8\u110C\u1161\u11BC-\u1100\u1167\u11BC\u1100\u1168" tabindex="-1"><a class="header-anchor" href="#_8\u110C\u1161\u11BC-\u1100\u1167\u11BC\u1100\u1168" aria-hidden="true">#</a> 8\uC7A5. \uACBD\uACC4</h1><p>\uC624\uD508 \uC18C\uC2A4\uB098 \uC0AC\uB0B4 \uB77C\uC774\uBE0C\uB7EC\uB9AC \uB4F1 \uC678\uBD80 \uBAA8\uB4C8\uC744 \uC6B0\uB9AC \uCF54\uB4DC\uC5D0 \uAE54\uB054\uD558\uAC8C \uD1B5\uD569\uD558\uB824\uBA74 \uC5B4\uB5BB\uAC8C \uD574\uC57C\uD560\uAE4C?</p><h2 id="\u110B\u116C\u1107\u116E-\u110F\u1169\u1103\u1173-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u116C\u1107\u116E-\u110F\u1169\u1103\u1173-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uC678\uBD80 \uCF54\uB4DC \uC0AC\uC6A9\uD558\uAE30</h2><p><code>java.util.Map</code>\uC758 \uC778\uD130\uD398\uC774\uC2A4\uB294 <code>clear()</code> \uBA54\uC11C\uB4DC\uB97C \uC9C0\uC6D0\uD55C\uB2E4.</p><p>\uC989, <code>Map</code>\uC744 \uB9CC\uB4E4\uC5B4\uC11C \uC5EC\uAE30\uC800\uAE30\uC11C \uC0AC\uC6A9\uD558\uBA74 <code>clear()</code> \uB610\uD55C \uB204\uAD6C\uB098 \uC0AC\uC6A9\uD560 \uC218 \uC788\uAC8C \uB41C\uB2E4.</p><p><code>Map.get()</code>\uAC00 \uB9AC\uD134\uD558\uB294 \uAC1D\uCCB4\uAC00 Sensor\uB77C\uB294 \uAC83\uC744 \uBA85\uC2DC\uD574\uC8FC\uAE30 \uC704\uD574 <code>(Sensor)</code>\uB97C \uC55E\uC5D0 \uBD99\uC600\uB2E4. \uD558\uC9C0\uB9CC \uC774\uB7F0 \uBC29\uC2DD\uBCF4\uB2E4 \uB354 \uC88B\uC740 \uBC29\uC2DD\uC774 \uC788\uB2E4.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Map</span> sensors <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Sensor</span> sensor <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Sensor</span><span class="token punctuation">)</span> sensors<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>sensorId<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><br><p>\uC774\uCC98\uB7FC \uC81C\uB124\uB9AD\uC744 \uC0AC\uC6A9\uD558\uBA74 <code>Map</code>\uC774 \uC5B4\uB5A4 \uD0C0\uC785\uC744 \uB9AC\uD134\uD558\uB294\uC9C0 \uD655\uC2E4\uD788 \uC54C \uC218 \uC788\uB2E4.<br> \uD558\uC9C0\uB9CC \uC0AC\uC6A9\uC790\uAC00 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294 \uAE30\uB2A5\uAE4C\uC9C0 \uC804\uBD80 \uC9C0\uC6D0\uD558\uACE0 \uC788\uB294 \uBB38\uC81C\uB294 \uD574\uACB0\uD558\uC9C0 \uBABB\uD55C\uB2E4.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Sensor</span><span class="token punctuation">&gt;</span></span> sensors <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Sensor</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token class-name">Sensor</span> s <span class="token operator">=</span> sensors<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>sensorId<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><br><p>\uC774\uB7F0 \uC810\uC744 \uBC29\uC9C0\uD558\uAE30 \uC704\uD574\uC11C <code>Map</code>\uC744 \uCEA1\uC290\uD654\uD574\uC8FC\uB294 \uBC29\uBC95\uC774 \uC788\uB2E4.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>publc <span class="token keyword">class</span> <span class="token class-name">Sensors</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Map</span> sensors <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Sensor</span> <span class="token class-name">GetById</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">Sensor</span><span class="token punctuation">)</span> sensors<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\uBB3C\uB860 \uB9E4\uBC88 \uCEA1\uC290\uD654\uB97C \uD560 \uD544\uC694\uB294 \uC5C6\uB2E4.</p><p>\uB9CC\uC57D <code>Map</code> \uC778\uC2A4\uD134\uC2A4\uB97C \uC5EC\uAE30\uC800\uAE30 \uB118\uAE30\uC9C0 \uC54A\uB294\uB2E4\uBA74 \uC704\uC640 \uAC19\uC774 \uAD73\uC774 \uCEA1\uC290\uD654\uB97C \uD558\uC9C0 \uC54A\uACE0 \uC0AC\uC6A9\uD574\uB3C4 \uD06C\uAC8C \uBB38\uC81C\uB420 \uAC83\uC740 \uC5C6\uC744 \uAC83\uC774\uB2E4. <br></p><h2 id="\u1100\u1167\u11BC\u1100\u1168-\u1109\u1161\u11AF\u1111\u1175\u1100\u1169-\u110B\u1175\u11A8\u1112\u1175\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1100\u1167\u11BC\u1100\u1168-\u1109\u1161\u11AF\u1111\u1175\u1100\u1169-\u110B\u1175\u11A8\u1112\u1175\u1100\u1175" aria-hidden="true">#</a> \uACBD\uACC4 \uC0B4\uD53C\uACE0 \uC775\uD788\uAE30</h2><p>\uC678\uBD80 \uBAA8\uB4C8\uC744 \uC0AC\uC6A9\uD558\uAE30 \uC704\uD574\uC11C\uB294 \uBB38\uC11C\uB97C \uC77D\uC73C\uBA70 \uC0AC\uC6A9\uBC95\uC744 \uC775\uD600\uC57C \uD55C\uB2E4.</p><p>\uB610\uD55C \uC6B0\uB9AC\uC758 \uC758\uB3C4\uB300\uB85C \uD574\uB2F9 \uBAA8\uB4C8\uC774 \uB3D9\uC791\uD558\uB294\uC9C0 \uD14C\uC2A4\uD2B8\uB3C4 \uD574\uBD10\uC57C \uD55C\uB2E4.</p><p>\uC774\uAC83\uB4E4\uC744 \uC804\uBD80 \uB2E4 \uD558\uAE30\uC5D4 \uC624\uB798\uAC78\uB9B0\uB2E4. \uADF8 \uB300\uC2E0 <strong>\uD559\uC2B5 \uD14C\uC2A4\uD2B8</strong>\uB97C \uD558\uBA74 \uD6A8\uC728\uC774 \uC88B\uB2E4.</p><div class="custom-container tip"><p class="custom-container-title">\uD559\uC2B5 \uD14C\uC2A4\uD2B8</p><p>\uD504\uB85C\uADF8\uB7A8\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB824\uB294 \uBC29\uC2DD\uB300\uB85C \uC678\uBD80 API\uB97C \uD638\uCD9C\uD574\uBCF4\uB294 \uD14C\uC2A4\uD2B8</p></div><br><h2 id="log4j-\u110B\u1175\u11A8\u1112\u1175\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#log4j-\u110B\u1175\u11A8\u1112\u1175\u1100\u1175" aria-hidden="true">#</a> log4j \uC775\uD788\uAE30</h2><p>\uD559\uC2B5 \uD14C\uC2A4\uD2B8 \uBC29\uC2DD\uC73C\uB85C log4j\uB97C \uC775\uD788\uBA74 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC9C4\uD589\uB41C\uB2E4.</p><h3 id="\u1112\u116A\u1106\u1167\u11AB\u110B\u1166-hello-\u110E\u116E\u11AF\u1105\u1167\u11A8\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1112\u116A\u1106\u1167\u11AB\u110B\u1166-hello-\u110E\u116E\u11AF\u1105\u1167\u11A8\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uD654\uBA74\uC5D0 &quot;hello&quot; \uCD9C\uB825\uD558\uAE30</h3><ol><li>\uCD9C\uB825\uC744 \uB2F4\uB2F9\uD558\uB294 \uBA54\uC11C\uB4DC\uC778 <code>info</code>\uB97C \uC0AC\uC6A9\uD574\uBCF8\uB2E4. \uC2E4\uD589\uD574\uBCF4\uBA74 <code>ConsoleAppender</code>\uB77C\uB294 \uD074\uB798\uC2A4\uAC00 \uD544\uC694\uD558\uB2E4\uB294 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD55C\uB2E4.</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testLogCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token string">&quot;MyLogger&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><br><ol start="2"><li><code>ConsoleAppender</code>\uB97C \uCD94\uAC00\uD55C\uB2E4. \uC774\uBC88\uC5D4 Appender\uC5D0 \uCD9C\uB825\uC2A4\uD2B8\uB9BC\uC774 \uC5C6\uB2E4\uACE0 \uB72C\uB2E4.</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testLogAddAppender</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token string">&quot;MyLogger&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ConsoleAppender</span> appender <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConsoleAppender</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    logger<span class="token punctuation">.</span><span class="token function">addAppender</span><span class="token punctuation">(</span>appender<span class="token punctuation">)</span><span class="token punctuation">;</span>
    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><br><ol start="3"><li><code>ConsoleAppender</code>\uC5D0 <code>PatternLayout</code>\uACFC <code>ConsoleAppender.SYSTEM_OUT</code>\uC744 \uC804\uB2EC\uD574\uC900\uB2E4. \uC774\uC81C\uB294 \uCF58\uC194\uC5D0 &#39;hello&#39;\uAC00 \uCC0D\uD78C\uB2E4.</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testLogAddAppender</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token string">&quot;MyLogger&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    logger<span class="token punctuation">.</span><span class="token function">removeAllAppenders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    logger<span class="token punctuation">.</span><span class="token function">addAppender</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConsoleAppender</span><span class="token punctuation">(</span>
        <span class="token keyword">new</span> <span class="token class-name">PatternLayout</span><span class="token punctuation">(</span><span class="token string">&quot;$p %t %m%n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name">ConsoleAppender</span><span class="token punctuation">.</span>SYSTEM_OUT<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><br><ol start="4"><li><code>PatternLayout</code>\uC744 \uC9C0\uC6B0\uBA74 \uC2A4\uD2B8\uB9BC\uC774 \uC5C6\uB2E4\uB294 \uC624\uB958\uAC00 \uB728\uC9C0\uB9CC <code>ConsoleAppender.SYSTEM_OUT</code>\uB294 \uC81C\uAC70\uD574\uB3C4 \uBB38\uC81C\uC5C6\uC774 &#39;hello&#39;\uAC00 \uCD9C\uB825\uB41C\uB2E4.<br> \uC774\uB97C \uBC14\uD0D5\uC73C\uB85C \uD14C\uC2A4\uD2B8\uCF00\uC774\uC2A4\uB97C \uBA87 \uAC00\uC9C0 \uB354 \uCD94\uAC00\uD55C\uB2E4.</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LogTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Logger</span> logger<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Before</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        logger <span class="token operator">=</span> <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token string">&quot;logger&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        logger<span class="token punctuation">.</span><span class="token function">removeAllAppenders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getRootLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeAllAppenders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">basicLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BasicConfigurator</span><span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;basicLogger&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAppenderWithStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        logger<span class="token punctuation">.</span><span class="token function">addAppender</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConsoleAppender</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PatternLayout</span><span class="token punctuation">(</span><span class="token string">&quot;%p %t %m%n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">ConsoleAppender</span><span class="token punctuation">.</span>SYSTEM_OUT<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;addAppenderWithStream&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAppenderWithoutStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        logger<span class="token punctuation">.</span><span class="token function">addAppender</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConsoleAppender</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PatternLayout</span><span class="token punctuation">(</span><span class="token string">&quot;%p %t %m%n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;addAppenderWithoutStream&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="\u1112\u1161\u11A8\u1109\u1173\u11B8-\u1110\u1166\u1109\u1173\u1110\u1173\u1102\u1173\u11AB-\u1100\u1169\u11BC\u110D\u1161-\u110B\u1175\u1109\u1161\u11BC\u110B\u1175\u1103\u1161" tabindex="-1"><a class="header-anchor" href="#\u1112\u1161\u11A8\u1109\u1173\u11B8-\u1110\u1166\u1109\u1173\u1110\u1173\u1102\u1173\u11AB-\u1100\u1169\u11BC\u110D\u1161-\u110B\u1175\u1109\u1161\u11BC\u110B\u1175\u1103\u1161" aria-hidden="true">#</a> \uD559\uC2B5 \uD14C\uC2A4\uD2B8\uB294 \uACF5\uC9DC \uC774\uC0C1\uC774\uB2E4.</h2><p>\uC0AC\uC6A9\uD558\uB294 \uBAA8\uB4C8\uC774 \uC5C5\uB370\uC774\uD2B8 \uB418\uBA74\uC11C \uB3D9\uC791\uC774 \uB2EC\uB77C\uC9C0\uB354\uB77C\uB3C4 \uD14C\uC2A4\uD2B8\uB97C \uC2E4\uD589\uD558\uC5EC \uD574\uB2F9 \uBAA8\uB4C8\uC774 \uC608\uC0C1\uB300\uB85C \uB3D9\uC791\uD558\uB294\uC9C0 \uAC80\uC99D\uD560 \uC218 \uC788\uB2E4.</p><p>\uC774\uB7EC\uD55C \uC810\uC740 \uD604\uC7AC \uC0AC\uC6A9\uD558\uB294 \uBAA8\uB4C8\uC758 \uBC84\uC804\uC5C5\uC744 \uD558\uAE30 \uC26C\uC6CC\uC9C0\uB294 \uC7A5\uC810\uC774 \uC788\uB2E4.</p><br><h2 id="\u110B\u1161\u110C\u1175\u11A8-\u110C\u1169\u11AB\u110C\u1162\u1112\u1161\u110C\u1175-\u110B\u1161\u11AD\u1102\u1173\u11AB-\u110F\u1169\u1103\u1173\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1161\u110C\u1175\u11A8-\u110C\u1169\u11AB\u110C\u1162\u1112\u1161\u110C\u1175-\u110B\u1161\u11AD\u1102\u1173\u11AB-\u110F\u1169\u1103\u1173\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uC544\uC9C1 \uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uCF54\uB4DC\uB97C \uC0AC\uC6A9\uD558\uAE30</h2><p>\uACBD\uACC4\uC640 \uAD00\uB828\uD574 \uB610 \uB2E4\uB978 \uC720\uD615\uC740 \uC544\uB294 \uCF54\uB4DC\uC640 \uBAA8\uB974\uB294 \uCF54\uB4DC\uB97C \uBD84\uB9AC\uD558\uB294 \uACBD\uACC4\uB2E4.</p><p>\uBAA8\uB974\uB294 \uCF54\uB4DC\uB97C \uC774\uD574\uD558\uB824\uACE0 \uB178\uB825\uD558\uC9C0 \uC54A\uC544\uB3C4 \uB41C\uB2E4. \uC6B0\uB9AC\uAC00 \uD544\uC694\uD55C\uAC74 \uD574\uB2F9 \uAE30\uB2A5\uC758 \uC785\uCD9C\uB825\uB9CC \uC54C\uBA74 \uB41C\uB2E4.</p><p>\uC1A1\uC2E0\uAE30\uB97C \uC608\uB85C \uB4E4\uC5B4\uBCF4\uC790. \uC1A1\uC2E0\uAE30\uB97C \uB9CC\uB4DC\uB294 \uD300\uC774 \uC544\uC9C1 API\uB97C \uC124\uACC4\uD558\uC9C0 \uC54A\uC558\uB2E4\uBA74 \uC6B0\uB9AC\uAC00 \uC790\uCCB4\uC801\uC73C\uB85C \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC815\uC758\uD574\uBCF4\uC790.</p><img src="`+a+'" style="width:70%;"><p>\uC778\uD130\uD398\uC774\uC2A4\uB294 \uC8FC\uD30C\uC218\uC640 \uC790\uB8CC \uC2A4\uD2B8\uB9BC\uC744 \uC785\uB825\uC73C\uB85C \uBC1B\uB294\uB2E4. \uC989, \uC6B0\uB9AC\uAC00 \uBC14\uB77C\uB294 \uC778\uD130\uD398\uC774\uC2A4\uB2E4.</p><p>\uC6B0\uB9AC\uAC00 \uBC14\uB77C\uB294 \uC778\uD130\uD398\uC774\uC2A4\uB294 \uC804\uC801\uC73C\uB85C \uC6B0\uB9AC\uAC00 \uD1B5\uC81C\uD55C\uB2E4\uB294 \uC7A5\uC810\uC774 \uC0DD\uAE34\uB2E4.</p><p>\uADF8\uB7EC\uBBC0\uB85C \uCF54\uB4DC\uC758 \uAC00\uB3C5\uC131\uB3C4 \uB192\uC544\uC9C0\uACE0 \uCF54\uB4DC \uC758\uB3C4\uB3C4 \uBD84\uBA85\uD574\uC9C4\uB2E4.</p><p>\uB530\uB77C\uC11C \uC6B0\uB9AC\uAC00 \uD1B5\uC81C\uD558\uC9C0 \uBABB\uD558\uB294 \uC1A1\uC2E0\uAE30 API\uC5D0\uC11C <code>CommunicationsController</code>\uB97C \uBD84\uB9AC\uD588\uB2E4.</p><p>\uB610\uD55C \uC800\uCABD \uD300\uC5D0\uC11C API\uB97C \uC815\uC758\uD55C \uD6C4\uC5D0\uB294 <code>TransmitterAdapter</code>\uB97C \uAD6C\uD604\uD574 \uAC04\uADF9\uC744 \uBA54\uAFBC\uB2E4.</p><p>\uB610\uD55C \uC5B4\uB311\uD130 \uD328\uD134\uC73C\uB85C API \uC0AC\uC6A9\uC744 \uCEA1\uC290\uD654\uD574 API\uAC00 \uBC14\uB014 \uB54C \uC218\uC815\uD560 \uCF54\uB4DC\uB97C \uD55C \uACF3\uC73C\uB85C \uBAA8\uC558\uB2E4.</p><br><p>\uC774\uC820 FakeTransmitter \uD074\uB798\uC2A4\uB97C \uC0AC\uC6A9\uD574\uC11C CommunicationController \uD074\uB798\uC2A4\uB97C \uD14C\uC2A4\uD2B8 \uD560 \uC218 \uC788\uB2E4.<br> Transmitter \uC778\uD130\uD398\uC774\uC2A4\uAC00 \uAD6C\uD604\uB418\uBA74 \uACBD\uACC4 \uD14C\uC2A4\uD2B8 \uCF00\uC774\uC2A4\uB97C \uC0DD\uC131\uD574 \uC6B0\uB9AC\uAC00 API\uB97C \uC81C\uB300\uB85C \uC0AC\uC6A9\uD558\uB294\uC9C0 \uD14C\uC2A4\uD2B8\uD560 \uC218\uB3C4 \uC788\uB2E4.</p><h2 id="\u1101\u1162\u1101\u1173\u11BA\u1112\u1161\u11AB-\u1100\u1167\u11BC\u1100\u1168" tabindex="-1"><a class="header-anchor" href="#\u1101\u1162\u1101\u1173\u11BA\u1112\u1161\u11AB-\u1100\u1167\u11BC\u1100\u1168" aria-hidden="true">#</a> \uAE68\uB057\uD55C \uACBD\uACC4</h2><p>\uC678\uBD80 \uD328\uD0A4\uC9C0\uB97C \uD638\uCD9C\uD558\uB294 \uCF54\uB4DC\uB97C \uAC00\uB2A5\uD55C \uC904\uC5EC \uACBD\uACC4\uB97C \uAD00\uB9AC\uD558\uC790.</p><p>\uC0C8\uB85C\uC6B4 \uD074\uB798\uC2A4\uB85C \uACBD\uACC4\uB97C \uAC10\uC2F8\uAC70\uB098, \uC5B4\uB311\uD130 \uD328\uD134\uC744 \uC0AC\uC6A9\uD574 \uC6B0\uB9AC\uAC00 \uC6D0\uD558\uB294 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uD328\uD0A4\uC9C0\uAC00 \uC81C\uACF5\uD558\uB294 \uC778\uD130\uD398\uC774\uC2A4\uB85C \uBCC0\uD658\uD558\uC790.</p><p>\uC5B4\uB290 \uBC29\uBC95\uC774\uB4E0 \uCF54\uB4DC \uAC00\uB3C5\uC131\uC774 \uB192\uC544\uC9C0\uBA70, \uACBD\uACC4 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC0AC\uC6A9\uD558\uB294 \uC77C\uAD00\uC131\uB3C4 \uB192\uC544\uC9C0\uBA70, \uC678\uBD80 \uD328\uD0A4\uC9C0\uAC00 \uBCC0\uD588\uC744 \uB54C \uBCC0\uACBD\uD560 \uCF54\uB4DC\uB3C4 \uC904\uC5B4\uB4E0\uB2E4.</p>',56);function t(o,c){return e}var i=s(p,[["render",t]]);export{i as default};
