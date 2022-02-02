import{e as a}from"./app.28e06276.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";var e="/images/TIL/APP-Android/android-fragment.png";const i={},t=a('<h1 id="fragment" tabindex="-1"><a class="header-anchor" href="#fragment" aria-hidden="true">#</a> Fragment</h1><h2 id="fragment-\u1105\u1161\u11AB" tabindex="-1"><a class="header-anchor" href="#fragment-\u1105\u1161\u11AB" aria-hidden="true">#</a> Fragment \uB780?</h2><ul><li>\uC571\uC758 \uC804\uCCB4 UI\uC5D0\uC11C \uC5B4\uB518\uAC00\uC5D0 \uBC18\uBCF5\uC801\uC73C\uB85C <strong>\uC7AC\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uBD80\uBD84</strong>\uC744 \uB9D0\uD55C\uB2E4. (\uAC1D\uCCB4\uB791 \uBE44\uC2B7\uD558\uB2E4\uACE0 \uBCF4\uBA74 \uB420\uB4EF?)</li><li>Fragment\uB294 **\uC790\uCCB4 \uB808\uC774\uC544\uC6C3(xml)**\uC744 \uAC00\uC9C8 \uC218 \uC788\uC73C\uBA70 <strong>\uC790\uCCB4 \uC0DD\uBA85 \uC8FC\uAE30</strong>\uB97C \uBCF4\uC720\uD55C\uB2E4. (Activity LifeCycle \uBD80\uD130 \uC81C\uB300\uB85C \uC775\uD788\uACE0 \uB098\uC11C \uACF5\uBD80\uD558\uC790..)</li><li>Fragment\uB294 <strong>\uB3C5\uB9BD\uC801\uC73C\uB85C \uC874\uC7AC\uD560 \uC218 \uC5C6\uACE0</strong>, \uBC18\uB4DC\uC2DC Activity\uB098 \uB2E4\uB978 Fragment\uC5D0 \uD638\uC2A4\uD305\uB418\uC5B4\uC57C\uD55C\uB2E4.</li><li>Android Jetpack Library \uC911 Navigation, BottomNavigationView, ViewPager2 \uB4F1\uC740 Fragment\uC640 \uD638\uD658\uB418\uB3C4\uB85D \uC124\uACC4\uB418\uC5B4 \uC788\uC5B4\uC11C \uD568\uAED8 \uC790\uC8FC \uC0AC\uC6A9\uB41C\uB2E4.</li></ul><h2 id="activity\u110B\u116A\u110B\u1174-\u1103\u1161\u1105\u1173\u11AB-\u1106\u1169\u11A8\u110C\u1165\u11A8\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#activity\u110B\u116A\u110B\u1174-\u1103\u1161\u1105\u1173\u11AB-\u1106\u1169\u11A8\u110C\u1165\u11A8\u1109\u1165\u11BC" aria-hidden="true">#</a> Activity\uC640\uC758 \uB2E4\uB978 \uBAA9\uC801\uC131</h2><ul><li>Activity : \uC571\uC758 \uC804\uCCB4\uC801\uC778 UI\uC5D0 \uD3EC\uD568\uB420 \uC694\uC18C\uB4E4\uC744 \uBC30\uCE58\uD558\uB294 \uACF3</li><li>Fragment : \uB2E8\uC77C \uD654\uBA74\uC774\uB098 \uD654\uBA74 \uC77C\uBD80\uC5D0 \uAD00\uD55C UI\uB97C \uC815\uC758\uD558\uAE30\uC5D0 \uC801\uD569\uD568</li><li>\uD558\uB298\uC0C9 \uBD80\uBD84\uC740 Activity\uC5D0 \uBC30\uCE58\uB41C UI\uC774\uACE0, \uC5F0\uB450\uC0C9\uC740 Fragment \uC790\uCCB4 UI\uC774\uB2E4. Activity\uB294 \uC5F0\uB450\uC0C9 Fragment\uB97C \uD638\uC2A4\uD305\uD558\uACE0 \uC788\uB2E4\uACE0 \uBCF4\uBA74 \uB41C\uB2E4. <img src="'+e+'" alt="android-fragment"></li></ul><h2 id="\u110C\u1161\u11BC\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#\u110C\u1161\u11BC\u110C\u1165\u11B7" aria-hidden="true">#</a> \uC7A5\uC810</h2><ul><li>\uC571\uC758 \uB2E8\uC77C \uD654\uBA74\uC774\uB098 \uBD80\uBD84\uD654\uBA74\uC744 Fragment\uB85C \uAD6C\uD604\uD558\uBA74 \uB7F0\uD0C0\uC784 \uC2DC UI\uB97C \uC0AC\uC6A9\uC790\uC640 \uC0C1\uD638\uC791\uC6A9\uD558\uBA74\uC11C \uC2E4\uC2DC\uAC04\uC73C\uB85C \uC218\uC815 \uAC00\uB2A5\uD568 (\uB124\uBE44\uAC8C\uC774\uC158 \uBC14\uC5D0\uC11C \uBA54\uB274\uB97C \uB204\uB974\uBA74 \uD574\uB2F9 \uBA54\uB274\uB85C \uD654\uBA74\uC774 \uBC14\uB00C\uB294 \uAC83\uC744 \uB73B\uD568)</li><li>\uB300\uC2E0 UI\uB97C \uC2E4\uC2DC\uAC04\uC73C\uB85C \uBC14\uAFC0 \uB584\uB294 \uD638\uC2A4\uD2B8 Activity\uC758 \uC218\uBA85 \uC8FC\uAE30\uAC00 STARTED \uC0C1\uD0DC\uC77C \uB54C\uB9CC \uAC00\uB2A5\uD558\uB2E4.</li><li>Fragment\uC758 \uBCC0\uACBD\uC0AC\uD56D\uC740 FragmentManager\uC758 <strong>Fragment BackStack</strong>\uC5D0 \uD788\uC2A4\uD1A0\uB9AC\uB97C \uC800\uC7A5\uD558\uC5EC \uAE30\uB85D\uD560 \uC218 \uC788\uB2E4.</li><li>\uC774 \uBC31\uC2A4\uD0DD\uC5D0 \uC800\uC7A5\uB41C \uC0AC\uD56D\uB4E4\uC5D0 \uD55C\uD558\uC5EC \uC0AC\uC6A9\uC790\uAC00 &quot;\uB4A4\uB85C&quot;\uBC84\uD2BC\uC744 \uB204\uB97C \uACBD\uC6B0 \uC774\uC804 \uD654\uBA74\uC73C\uB85C \uB418\uB3CC\uB9AC\uAE30 \uC791\uC5C5\uC744 \uC9C4\uD589\uD560 \uC218 \uC788\uB2E4.</li></ul><h2 id="\u110C\u116E\u110B\u1174\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#\u110C\u116E\u110B\u1174\u110C\u1165\u11B7" aria-hidden="true">#</a> \uC8FC\uC758\uC810</h2><ul><li>Fragment\uB294 \uC7AC\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC790\uCCB4 UI\uB97C \uAC00\uC9C0\uAE30 \uB54C\uBB38\uC5D0 \uC5B4\uB290 Activity\uB098 Fragment\uC5D0\uB3C4 \uD638\uC2A4\uD305 \uB420 \uC218 \uC788\uB2E4.</li><li>\uB530\uB77C\uC11C Fragment \uD074\uB798\uC2A4\uC5D0\uB294 \uC790\uCCB4 UI\uB97C \uAD00\uB9AC\uD558\uB294 \uB85C\uC9C1\uB9CC \uAD6C\uD604\uD574\uC57C\uD55C\uB2E4. (\uBAA8\uB4C8\uC131, \uC7AC\uC0AC\uC6A9\uC131\uC744 \uD574\uCE58\uAC8C \uB428)</li><li>\uC989, Fragment\uAC00 <strong>\uB2E4\uB978 Activy\uB098 Fragment\uC5D0 \uC758\uC874\uD558\uBA74 \uC548\uB41C\uB2E4.</strong> (\uC774\uAC70 \uB9E4\uC6B0 \uC911\uC694\uD55C\uB4EF!!!!!)</li></ul><h2 id="fragmentmanager" tabindex="-1"><a class="header-anchor" href="#fragmentmanager" aria-hidden="true">#</a> FragmentManager</h2><ul><li>FragmentManager\uB294 BackStack\uC5D0 Fragment \uCD94\uAC00/\uAD50\uCCB4/\uC0AD\uC81C \uC791\uC5C5\uC5D0 \uC758\uD55C \uBCC0\uACBD\uC0AC\uD56D\uC744 push \uBC0F pop \uD558\uB294 \uC791\uC5C5\uC744 \uB2F4\uB2F9\uD558\uB294 \uD074\uB798\uC2A4\uB2E4</li></ul><h2 id="\u110C\u1161\u1109\u1166\u1112\u1161\u11AB\u1100\u1165\u11AB-\u110C\u1175\u11A8\u110C\u1165\u11B8-\u1109\u1161\u110B\u116D\u11BC\u1112\u1162\u1107\u1169\u1106\u1167\u11AB\u1109\u1165-\u1100\u1169\u11BC\u1107\u116E\u1112\u1162\u1107\u1169\u110C\u1161" tabindex="-1"><a class="header-anchor" href="#\u110C\u1161\u1109\u1166\u1112\u1161\u11AB\u1100\u1165\u11AB-\u110C\u1175\u11A8\u110C\u1165\u11B8-\u1109\u1161\u110B\u116D\u11BC\u1112\u1162\u1107\u1169\u1106\u1167\u11AB\u1109\u1165-\u1100\u1169\u11BC\u1107\u116E\u1112\u1162\u1107\u1169\u110C\u1161" aria-hidden="true">#</a> \uC790\uC138\uD55C\uAC74 \uC9C1\uC811 \uC0AC\uC6A9\uD574\uBCF4\uBA74\uC11C \uACF5\uBD80\uD574\uBCF4\uC790</h2><p>\uC0AC\uC2E4 \uB354 \uC801\uC744\uAC8C \uB9CE\uC9C0\uB9CC \uC774\uB860\uC744 \uC801\uC5B4\uAC00\uBA74\uC11C \uACF5\uBD80\uD574\uBD24\uC790 \uC774 \uC774\uC0C1\uC740 \uBA38\uB9AC\uC5D0 \uB4E4\uC5B4\uC624\uC9C8 \uC54A\uC558\uB2E4. \uC9C1\uC811 \uC0AC\uC6A9\uD574\uBCF4\uBA74\uC11C \uC775\uD600\uC57C \uD560 \uB4EF \uD558\uB2E4</p>',13);function n(l,d){return t}var c=r(i,[["render",n]]);export{c as default};
