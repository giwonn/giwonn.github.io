import{e}from"./app.2999feef.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";var a="/images/TIL/APP-Android/activity-lifecycle.png";const r={},t=e('<h1 id="android-activity-life-cycle-\u110B\u1161\u11AB\u1103\u1173\u1105\u1169\u110B\u1175\u1103\u1173-\u1109\u1162\u11BC\u1106\u1167\u11BC-\u110C\u116E\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#android-activity-life-cycle-\u110B\u1161\u11AB\u1103\u1173\u1105\u1169\u110B\u1175\u1103\u1173-\u1109\u1162\u11BC\u1106\u1167\u11BC-\u110C\u116E\u1100\u1175" aria-hidden="true">#</a> Android Activity Life Cycle (\uC548\uB4DC\uB85C\uC774\uB4DC \uC0DD\uBA85 \uC8FC\uAE30)</h1><h2 id="\u110B\u1162\u11A8\u1110\u1175\u1107\u1175\u1110\u1175\u1105\u1161\u11AB" tabindex="-1"><a class="header-anchor" href="#\u110B\u1162\u11A8\u1110\u1175\u1107\u1175\u1110\u1175\u1105\u1161\u11AB" aria-hidden="true">#</a> \uC561\uD2F0\uBE44\uD2F0\uB780?</h2><blockquote><p>\uC0AC\uC6A9\uC790 &quot;\uC778\uD130\uD398\uC774\uC2A4 \uD654\uBA74&quot; \uC744 \uAC00\uC9C0\uBA70 \uD2B9\uC815\uD55C \uC791\uC5C5\uC744 \uB2F4\uB2F9\uD558\uB294 \uCEF4\uD3EC\uB10C\uD2B8</p></blockquote><ul><li>\uC77C\uBC18\uC801\uC73C\uB85C <strong>UI\uB97C \uAC16\uB294 \uD558\uB098\uC758 \uC2A4\uD06C\uB9B0</strong>\uC744 \uB098\uD0C0\uB0B8\uB2E4.</li><li>\uC548\uB4DC\uB85C\uC774\uB4DC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740</li></ul><h2 id="activity\u110B\u1174-\u110B\u1167\u11A8\u1112\u1161\u11AF" tabindex="-1"><a class="header-anchor" href="#activity\u110B\u1174-\u110B\u1167\u11A8\u1112\u1161\u11AF" aria-hidden="true">#</a> Activity\uC758 \uC5ED\uD560</h2><h3 id="oncreate-\u110B\u1162\u11A8\u1110\u1175\u1107\u1175\u1110\u1175-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1112\u1161\u11AF-\u1104\u1162" tabindex="-1"><a class="header-anchor" href="#oncreate-\u110B\u1162\u11A8\u1110\u1175\u1107\u1175\u1110\u1175-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1112\u1161\u11AF-\u1104\u1162" aria-hidden="true">#</a> onCreate() - \uC561\uD2F0\uBE44\uD2F0 \uC0DD\uC131\uD560 \uB54C</h3><ul><li>\uC561\uD2F0\uBE44\uD2F0\uAC00 \uB9CC\uB4E4\uC5B4\uC9C0\uACE0 \uB098\uC11C \uCD5C\uCD08\uC5D0 \uD55C\uBC88\uB9CC \uD638\uCD9C</li><li><strong>\uC561\uD2F0\uBE44\uD2F0\uC5D0 \uD544\uC694\uD55C \uB9AC\uC18C\uC2A4\uB4E4\uC744 \uCD08\uAE30\uD654</strong> \uBC0F View\uC758 \uC0C1\uD0DC\uB4E4\uC744 \uC124\uC815\uD568</li><li>\uC774\uC804 \uC0C1\uD0DC\uAC00 \uC800\uC7A5\uB418\uC5B4 \uC788\uC744 \uACBD\uC6B0, \uBC88\uB4E4 \uAC1D\uCCB4\uB97C \uCC38\uC870\uD558\uC5EC \uBCF5\uC6D0 \uAC00\uB2A5</li><li>onCreate() <strong>\uC774\uD6C4\uC5D0\uB294 \uD56D\uC0C1 onStart()\uAC00 \uD638\uCD9C</strong>\uB428</li></ul><h3 id="onstart-\u1112\u116A\u1106\u1167\u11AB\u110B\u1166-\u1107\u1169\u110B\u1167\u110C\u1175\u1100\u1175-\u1109\u1175\u110C\u1161\u11A8\u1112\u1161\u11AF-\u1104\u1162" tabindex="-1"><a class="header-anchor" href="#onstart-\u1112\u116A\u1106\u1167\u11AB\u110B\u1166-\u1107\u1169\u110B\u1167\u110C\u1175\u1100\u1175-\u1109\u1175\u110C\u1161\u11A8\u1112\u1161\u11AF-\u1104\u1162" aria-hidden="true">#</a> onStart() - \uD654\uBA74\uC5D0 \uBCF4\uC5EC\uC9C0\uAE30 \uC2DC\uC791\uD560 \uB54C</h3><ul><li><strong>\uC544\uC9C1 \uC0AC\uC6A9\uC790\uC640 \uC0C1\uD638\uC791\uC6A9\uC740 \uD560 \uC218 \uC5C6\uB294 \uB2E8\uACC4</strong></li><li>\uC561\uD2F0\uBE44\uD2F0\uAC00 \uC2DC\uC791\uB418\uAE30 \uC804\uC5D0 \uD638\uCD9C\uB418\uB294 \uD568\uC218/\uC561\uD2F0\uBE44\uD2F0\uAC00 \uBA48\uCD98 \uD6C4, \uB2E4\uC2DC \uD638\uCD9C\uD558\uB294 \uD568\uC218</li><li>\uC561\uD2F0\uBE44\uD2F0\uAC00 \uD654\uBA74\uC5D0 \uBCF4\uC774\uAE30 \uC9C1\uC804\uC5D0 \uD638\uCD9C\uB428</li><li>\uB9E4\uC6B0 \uBE60\uB974\uAC8C \uB05D\uB098\uACE0 onResume() \uB2E8\uACC4\uB85C \uB118\uC5B4\uAC10</li><li>\uBCF4\uD1B5 <strong>Broadcast Receiver</strong>\uB294 \uC774 \uB2E8\uACC4\uC5D0\uC11C \uB4F1\uB85D\uD558\uB294 \uAC83\uC774 \uC88B\uB2E4.</li></ul><h3 id="onresume-\u1112\u116A\u1106\u1167\u11AB\u110B\u1175-\u1102\u1161\u1110\u1161\u1102\u1161-\u110B\u1175\u11BB\u1100\u1169-\u1109\u1175\u11AF\u1112\u1162\u11BC\u110C\u116E\u11BC\u110B\u1175\u11AF-\u1104\u1162" tabindex="-1"><a class="header-anchor" href="#onresume-\u1112\u116A\u1106\u1167\u11AB\u110B\u1175-\u1102\u1161\u1110\u1161\u1102\u1161-\u110B\u1175\u11BB\u1100\u1169-\u1109\u1175\u11AF\u1112\u1162\u11BC\u110C\u116E\u11BC\u110B\u1175\u11AF-\u1104\u1162" aria-hidden="true">#</a> onResume() - \uD654\uBA74\uC774 \uB098\uD0C0\uB098 \uC788\uACE0 \uC2E4\uD589\uC911\uC77C \uB54C</h3><ul><li><strong>\uC0AC\uC6A9\uC790\uC640 \uC0C1\uD638\uC791\uC6A9\uC774 \uAC00\uB2A5\uD574\uC9C0\uB294 \uB2E8\uACC4</strong></li><li>\uC561\uD2F0\uBE44\uD2F0\uAC00 \uC0AC\uC6A9\uC790\uC640 \uC0C1\uD638 \uC791\uC6A9\uD558\uAE30 \uBC14\uB85C \uC9C1\uC804\uC5D0 \uD638\uCD9C\uB418\uB294 \uD568\uC218</li><li>\uC774 \uBA54\uC18C\uB4DC\uAC00 \uD638\uCD9C\uB418\uACE0 \uB098\uC11C \uC561\uD2F0\uBE44\uD2F0\uAC00 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uBCF4\uC774\uAE30 \uC2DC\uC791\uD568</li><li>\uC0AC\uC6A9\uC790\uC5D0\uAC8C focus\uB97C \uC7A1\uC740 \uC0C1\uD0DC</li></ul><h3 id="onrestart" tabindex="-1"><a class="header-anchor" href="#onrestart" aria-hidden="true">#</a> onRestart()</h3><ul><li>\uC561\uD2F0\uBE44\uD2F0\uAC00 <strong>\uC911\uC9C0\uB41C \uC774\uD6C4\uC5D0 \uD638\uCD9C\uB418\uB294 \uBA54\uC18C\uB4DC</strong>\uB85C, \uB2E4\uC2DC \uC2DC\uC791\uB418\uAE30 \uC9C1\uC804\uC5D0 \uD638\uCD9C\uB428 <br></li></ul><h2 id="\u1103\u1161\u1105\u1173\u11AB-\u110B\u1162\u11A8\u1110\u1175\u1107\u1175\u1110\u1175\u1100\u1161-\u1112\u1169\u110E\u116E\u11AF\u1103\u116C\u1102\u1173\u11AB-\u1100\u1167\u11BC\u110B\u116E" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u1105\u1173\u11AB-\u110B\u1162\u11A8\u1110\u1175\u1107\u1175\u1110\u1175\u1100\u1161-\u1112\u1169\u110E\u116E\u11AF\u1103\u116C\u1102\u1173\u11AB-\u1100\u1167\u11BC\u110B\u116E" aria-hidden="true">#</a> \uB2E4\uB978 \uC561\uD2F0\uBE44\uD2F0\uAC00 \uD638\uCD9C\uB418\uB294 \uACBD\uC6B0</h2><h3 id="onpause-\u1112\u116A\u1106\u1167\u11AB\u110B\u1174-\u110B\u1175\u11AF\u1107\u116E\u1100\u1161-\u1103\u1161\u1105\u1173\u11AB-\u110B\u1162\u11A8\u1110\u1175\u1107\u1175\u1110\u1175\u110B\u1166-\u1100\u1161\u1105\u1167\u110C\u1175\u11AF-\u1104\u1162" tabindex="-1"><a class="header-anchor" href="#onpause-\u1112\u116A\u1106\u1167\u11AB\u110B\u1174-\u110B\u1175\u11AF\u1107\u116E\u1100\u1161-\u1103\u1161\u1105\u1173\u11AB-\u110B\u1162\u11A8\u1110\u1175\u1107\u1175\u1110\u1175\u110B\u1166-\u1100\u1161\u1105\u1167\u110C\u1175\u11AF-\u1104\u1162" aria-hidden="true">#</a> onPause() - \uD654\uBA74\uC758 \uC77C\uBD80\uAC00 \uB2E4\uB978 \uC561\uD2F0\uBE44\uD2F0\uC5D0 \uAC00\uB824\uC9C8 \uB54C</h3><ul><li>\uC561\uD2F0\uBE44\uD2F0 \uC704\uC5D0 \uC561\uD2F0\uBE44\uD2F0\uAC00 \uC62C\uB77C\uC640\uC11C <strong>focus\uB97C \uC783\uC5C8\uC744 \uB54C \uD638\uCD9C</strong>\uB428</li><li>\uC561\uD2F0\uBE44\uD2F0\uAC00 \uC644\uC804\uD788 \uAC00\uB824\uC9C0\uC9C0 \uC54A\uACE0 \uBD80\uBD84\uB9CC \uAC00\uB824\uC9C4 \uC0C1\uD0DC\uC5D0\uC11C \uD638\uCD9C\uB418\uB294 \uD568\uC218</li><li>\uB2E4\uB978 \uC561\uD2F0\uBE44\uD2F0\uAC00 \uD638\uCD9C\uB418\uAE30 \uC804\uC5D0 \uC2E4\uD589\uB418\uAE30 \uB54C\uBB38\uC5D0 \uC2DC\uAC04\uC774 \uB9CE\uC774 \uC18C\uC694\uB418\uB294 \uC791\uC5C5\uC744 \uD558\uC9C0 \uC54A\uB3C4\uB85D \uC8FC\uC758\uD574\uC57C\uD568</li><li>\uC601\uAD6C\uC801\uC778 data\uB294 \uC5EC\uAE30\uC11C \uC800\uC7A5\uD568</li><li>\uC561\uD2F0\uBE44\uD2F0\uAC00 \uC774 \uC0C1\uD0DC\uC5D0 \uB4E4\uC5B4\uAC00\uBA74 \uC2DC\uC2A4\uD15C\uC740 \uC561\uD2F0\uBE44\uD2F0\uB97C \uAC15\uC81C \uC885\uB8CC \uD560 \uC218 \uC788\uC74C</li></ul><h3 id="onstop-\u1103\u1161\u1105\u1173\u11AB-\u110B\u1162\u11A8\u1110\u1175\u1107\u1175\u1110\u1175\u110B\u1174-\u1109\u1175\u11AF\u1112\u1162\u11BC\u110B\u1173\u1105\u1169-\u110B\u116A\u11AB\u110C\u1165\u11AB\u1112\u1175-\u1100\u1161\u1105\u1167\u110C\u1175\u11AF-\u1104\u1162" tabindex="-1"><a class="header-anchor" href="#onstop-\u1103\u1161\u1105\u1173\u11AB-\u110B\u1162\u11A8\u1110\u1175\u1107\u1175\u1110\u1175\u110B\u1174-\u1109\u1175\u11AF\u1112\u1162\u11BC\u110B\u1173\u1105\u1169-\u110B\u116A\u11AB\u110C\u1165\u11AB\u1112\u1175-\u1100\u1161\u1105\u1167\u110C\u1175\u11AF-\u1104\u1162" aria-hidden="true">#</a> onStop() - \uB2E4\uB978 \uC561\uD2F0\uBE44\uD2F0\uC758 \uC2E4\uD589\uC73C\uB85C \uC644\uC804\uD788 \uAC00\uB824\uC9C8 \uB54C</h3><ul><li>\uC561\uD2F0\uBE44\uD2F0 \uC704\uC5D0 \uB2E4\uB978 \uC561\uD2F0\uBE44\uD2F0\uAC00 \uC644\uC804\uD788 \uC62C\uB77C\uC640\uC11C 100% \uAC00\uB824\uC9C8 \uB54C \uD638\uCD9C\uB418\uB294 \uD568\uC218</li><li>\uC989, <strong>\uC0AC\uC6A9\uC790\uC5D0\uAC8C\uC11C \uB354 \uC774\uC0C1 \uBCF4\uC774\uC9C0 \uC54A\uC744 \uB54C \uD638\uCD9C</strong>\uB41C\uB2E4.</li><li>\uC774 \uC0C1\uD0DC\uC5D0\uC11C \uC561\uD2F0\uBE44\uD2F0\uAC00 \uB2E4\uC2DC \uBD88\uB824\uC9C0\uBA74 onRestart()\uAC00 \uD638\uCD9C\uB428</li><li>\uC2DC\uC2A4\uD15C\uC774 onstop() \uC0C1\uD0DC\uC5D0 \uB4E4\uC5B4\uC624\uBA74 onSaveInstanceState()\uB77C\uB294 \uBA54\uC18C\uB4DC\uB97C \uD638\uCD9C\uD558\uB294\uB370, \uC5EC\uAE30\uC11C k-v\uD615\uD0DC\uB85C \uAC12 \uC800\uC7A5\uC774 \uB418\uACE0 onCreate()\uC5D0\uC11C \uBCF5\uC6D0\uC774 \uAC00\uB2A5\uD568</li></ul><h3 id="ondestroy-\u110B\u1162\u11A8\u1110\u1175\u1107\u1175\u1110\u1175-\u110C\u1169\u11BC\u1105\u116D" tabindex="-1"><a class="header-anchor" href="#ondestroy-\u110B\u1162\u11A8\u1110\u1175\u1107\u1175\u1110\u1175-\u110C\u1169\u11BC\u1105\u116D" aria-hidden="true">#</a> onDestroy() - \uC561\uD2F0\uBE44\uD2F0 \uC885\uB8CC</h3><ul><li>\uC561\uD2F0\uBE44\uD2F0\uAC00 \uC644\uC804\uD788 \uC2A4\uD0DD\uC5D0\uC11C \uC5C6\uC5B4\uC9C8 \uB54C \uD638\uCD9C\uB418\uB294 \uD568\uC218</li><li>Finish() <strong>\uBA54\uC18C\uB4DC\uAC00 \uD638\uCD9C</strong>\uB418\uAC70\uB098 <strong>\uC2DC\uC2A4\uD15C \uBA54\uBAA8\uB9AC \uD655\uBCF4</strong>\uB97C \uC704\uD574\uC11C \uC2DC\uC2A4\uD15C\uC774 \uAC15\uC81C\uB85C \uC885\uB8CC\uC2DC\uD0A4\uB294 \uACBD\uC6B0\uC5D0 \uD638\uCD9C\uB420 \uC218 \uC788\uC74C</li></ul><h2 id="\u1109\u1161\u110B\u116D\u11BC-\u110B\u1168" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u110B\u116D\u11BC-\u110B\u1168" aria-hidden="true">#</a> \uC0AC\uC6A9 \uC608</h2><ul><li><p>\uC571\uC744 \uC0AC\uC6A9\uD558\uB294\uB370 \uCE74\uCE74\uC624\uD1A1 \uBA54\uC2DC\uC9C0\uAC00 \uC628\uB2E4\uBA74?</p><blockquote><p>\uBD80\uBD84\uB9CC \uAC00\uB824\uC9C0\uBBC0\uB85C onPause()\uAC00 \uD638\uCD9C\uB41C\uB2E4.</p></blockquote></li><li><p>\uB370\uC774\uD130\uB97C \uBD88\uB7EC\uC624\uB294 \uC791\uC5C5\uC740 \uC5B4\uB514\uC11C \uD574\uC57C\uD560\uAE4C?</p><blockquote><p>onCreate()</p></blockquote></li></ul><hr><p><img src="'+a+'" alt="activity-lifecycle"></p>',24);function l(n,o){return t}var h=i(r,[["render",l]]);export{h as default};
