import{e}from"./app.6fd63cae.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";var s="/images/TIL/Cloud-GCP/PubSub/\uAC1C\uC694.png",a="/images/TIL/Cloud-GCP/PubSub/Observer\uC640\uC758-\uCC28\uC774\uC810.png",u="/images/TIL/Cloud-GCP/PubSub/\uD615\uD0DC.png",b="/images/TIL/Cloud-GCP/PubSub/\uAC1C\uB150-\uBC0F-\uBA54\uC2DC\uC9C0-\uD750\uB984.png",i="/images/TIL/Cloud-GCP/PubSub/pull-\uBC29\uC2DD.png",o="/images/TIL/Cloud-GCP/PubSub/push-\uBC29\uC2DD.png";const d={},p=e('<h1 id="pub-sub" tabindex="-1"><a class="header-anchor" href="#pub-sub" aria-hidden="true">#</a> Pub/Sub</h1><p>\uD68C\uC0AC\uC5D0\uC11C <code>Pub/Sub</code>\uC774\uB77C\uB294 \uBA85\uCE6D\uC774 \uC790\uAFB8 \uB4F1\uC7A5\uD574\uC11C \uB2F5\uB2F5\uD55C \uB9C8\uC74C\uC5D0 \uD55C\uBC88 \uD6D1\uC5B4\uBCF4\uAE30\uB85C \uD588\uB2E4.</p><h2 id="pub-sub\u110B\u1175\u1105\u1161\u11AB" tabindex="-1"><a class="header-anchor" href="#pub-sub\u110B\u1175\u1105\u1161\u11AB" aria-hidden="true">#</a> Pub/Sub\uC774\uB780?</h2><p>\uC804\uC1A1\uC790\uC640 \uC218\uC2E0\uC790\uB97C \uBD84\uB9AC\uD558\uB294 \uB2E4\uB300\uB2E4 \uBE44\uB3D9\uAE30\uC2DD \uBA54\uC2DC\uC9C0 \uC11C\uBE44\uC2A4<br> \uB9C8\uC774\uD06C\uB85C\uC11C\uBE44\uC2A4\uB97C \uC704\uD55C \uC11C\uBE44\uC2A4\uB77C\uACE0 \uC0DD\uAC01\uD558\uBA74 \uB41C\uB2E4.<br> \uC544\uB798\uC640 \uAC19\uC774 \uAD6C\uAE00\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uC5EC\uB7EC \uC11C\uBE44\uC2A4\uAC04\uC758 \uBA54\uC2DC\uC9C0 \uD1B5\uC2E0\uC5D0 \uC8FC\uB85C \uC0AC\uC6A9\uB41C\uB2E4. <img src="'+s+'" alt="PubSub \uAC1C\uC694"></p><p>\uB3D9\uC791 \uBC29\uC2DD\uC740 \uB2E8\uC21C\uD558\uB2E4. <code>Pub/Sub</code>\uC740 <code>\uAC8C\uC2DC\uC790(Publisher)</code>, <code>\uAD6C\uB3C5\uC790(Subscriber)</code>\uB77C\uB294 \uCEE8\uC149\uC758 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uB4E4\uB85C \uC774\uB8E8\uC5B4\uC9C4\uB2E4.</p><p>Publisher \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uBA54\uC2DC\uC9C0\uB97C \uB9CC\uB4E4\uC5B4 <code>\uC8FC\uC81C(Topic)</code>\uB85C \uC804\uB2EC\uD558\uB294\uB370, Subscriber\uB294 \uC8FC\uC81C\uC5D0 \uB300\uD55C \uAD6C\uB3C5\uC744 \uB9CC\uB4E4\uC5B4 \uD574\uB2F9 \uC8FC\uC81C\uB85C\uBD80\uD130 \uBA54\uC2DC\uC9C0\uB97C \uC218\uC2E0\uD55C\uB2E4.</p><p>\uC544\uB9C8 \uB9CE\uC740 \uC0AC\uB78C\uB4E4\uC774 \uC5EC\uAE30\uC11C \uC5B4? \uD558\uACE0 \uC758\uBB38\uC744 \uAC00\uC9C8 \uC218\uB3C4 \uC788\uB2E4. Observer \uD328\uD134\uACFC \uAD49\uC7A5\uD788 \uC720\uC0AC\uD558\uAC8C \uB290\uAEF4\uC9C0\uAE30 \uB54C\uBB38\uC774\uB2E4.</p><p>Head First Design Patterns \uCC45\uC5D0\uC11C\uB3C4 \uB450 \uAC1C\uB150\uC740 \uAC19\uB2E4\uACE0 \uB098\uC640\uC788\uC9C0\uB9CC \uC2E4\uC81C\uB85C\uB294 \uCC28\uC774\uC810\uC774 \uBD84\uBA85\uD788 \uC874\uC7AC\uD55C\uB2E4.</p><h2 id="observer-\u1111\u1162\u1110\u1165\u11AB\u1100\u116A\u110B\u1174-\u110E\u1161\u110B\u1175\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#observer-\u1111\u1162\u1110\u1165\u11AB\u1100\u116A\u110B\u1174-\u110E\u1161\u110B\u1175\u110C\u1165\u11B7" aria-hidden="true">#</a> Observer \uD328\uD134\uACFC\uC758 \uCC28\uC774\uC810</h2><h3 id="_1-message-broker-\u1104\u1169\u1102\u1173\u11AB-event-bus\u110B\u1174-\u110C\u1169\u11AB\u110C\u1162\u110B\u1167\u1107\u116E" tabindex="-1"><a class="header-anchor" href="#_1-message-broker-\u1104\u1169\u1102\u1173\u11AB-event-bus\u110B\u1174-\u110C\u1169\u11AB\u110C\u1162\u110B\u1167\u1107\u116E" aria-hidden="true">#</a> 1. <code>Message Broker</code> \uB610\uB294 <code>Event Bus</code>\uC758 \uC874\uC7AC\uC5EC\uBD80</h3><p>Observer \uD328\uD134\uACFC\uC758 \uAC00\uC7A5 \uD070 \uCC28\uC774\uC810\uC740 <code>Message Broker</code> \uB610\uB294 <code>Event Bus</code>\uC758 \uC874\uC7AC\uC5EC\uBD80\uB2E4.<br> Observer \uD328\uD134\uC740 Observer\uC640 Subject\uAC00 \uC11C\uB85C\uB97C \uC778\uC9C0\uD558\uC9C0\uB9CC, Pub/Sub\uC758 \uACBD\uC6B0\uC5D0\uB294 Broker \uC5ED\uD560\uC744 \uD558\uB294 \uC911\uAC04\uC9C0\uC810\uC774 \uC788\uC5B4\uC11C \uC11C\uB85C\uB97C \uC54C \uD544\uC694\uAC00 \uC5C6\uB2E4.<br><strong>(\uC989, Observer \uD328\uD134\uBCF4\uB2E4 \uACB0\uD569\uB3C4\uAC00 \uB0AE\uB2E4!)</strong><br><img src="'+a+'" alt="Observer\uC640\uC758-\uCC28\uC774\uC810"></p><h3 id="_2-pub-sub\u110B\u1173\u11AB-\u1103\u1162\u1107\u116E\u1107\u116E\u11AB-\u1107\u1175\u1103\u1169\u11BC\u1100\u1175\u1105\u1169-\u1103\u1169\u11BC\u110C\u1161\u11A8\u1112\u1161\u11AB\u1103\u1161" tabindex="-1"><a class="header-anchor" href="#_2-pub-sub\u110B\u1173\u11AB-\u1103\u1162\u1107\u116E\u1107\u116E\u11AB-\u1107\u1175\u1103\u1169\u11BC\u1100\u1175\u1105\u1169-\u1103\u1169\u11BC\u110C\u1161\u11A8\u1112\u1161\u11AB\u1103\u1161" aria-hidden="true">#</a> 2. Pub/Sub\uC740 \uB300\uBD80\uBD84 \uBE44\uB3D9\uAE30\uB85C \uB3D9\uC791\uD55C\uB2E4.</h3><p>Broker\uB85C <code>\uBA54\uC138\uC9C0 \uD050(Message Queue)</code>\uB97C \uB9CE\uC774 \uC0AC\uC6A9\uD558\uAE30 \uB54C\uBB38\uC774\uB2E4.</p><div class="custom-container tip"><p class="custom-container-title">Message Queue\uB780?</p><p>api \uD638\uCD9C\uD560 \uB54C \uBCF4\uB0B4\uB294 \uBA54\uC2DC\uC9C0\uC640 \uAC19\uC740 \uAC83\uB4E4\uC744 \uC784\uC2DC\uB85C \uC800\uC7A5\uD558\uB294 <strong>\uBC84\uD37C</strong>\uC774\uB2E4.<br> \uC11C\uBC84\uAC00 \uB9DB\uC774 \uAC14\uC744 \uB54C \uB4E4\uC5B4\uC624\uB294 \uC694\uCCAD\uB4E4\uC744 \uBA54\uC2DC\uC9C0 \uD050\uC5D0 \uB2F4\uC544\uB193\uC558\uB2E4\uAC00 \uC11C\uBC84\uAC00 \uBCF5\uAD6C\uB418\uBA74 \uBC00\uB9B0 \uC694\uCCAD\uB4E4\uC744 \uCC98\uB9AC\uD558\uB294 \uB4F1 \uC5EC\uB7EC\uBA74\uC5D0\uC11C \uB3C4\uC6C0\uC774 \uB418\uB294 \uBC29\uC2DD\uC774\uB2E4.</p></div><h3 id="_3-pub-sub\u110B\u1173\u11AB-\u110F\u1173\u1105\u1169\u1109\u1173-\u1103\u1169\u1106\u1166\u110B\u1175\u11AB-\u1109\u1161\u11BC\u1112\u116A\u11BC\u110B\u1166\u1109\u1165\u1103\u1169-\u1100\u116E\u1112\u1167\u11AB\u110B\u1175-\u1100\u1161\u1102\u1173\u11BC\u1112\u1161\u1103\u1161" tabindex="-1"><a class="header-anchor" href="#_3-pub-sub\u110B\u1173\u11AB-\u110F\u1173\u1105\u1169\u1109\u1173-\u1103\u1169\u1106\u1166\u110B\u1175\u11AB-\u1109\u1161\u11BC\u1112\u116A\u11BC\u110B\u1166\u1109\u1165\u1103\u1169-\u1100\u116E\u1112\u1167\u11AB\u110B\u1175-\u1100\u1161\u1102\u1173\u11BC\u1112\u1161\u1103\u1161" aria-hidden="true">#</a> 3. Pub/Sub\uC740 \uD06C\uB85C\uC2A4 \uB3C4\uBA54\uC778 \uC0C1\uD669\uC5D0\uC11C\uB3C4 \uAD6C\uD604\uC774 \uAC00\uB2A5\uD558\uB2E4.</h3><p>\uC774 \uC5ED\uC2DC Broker\uB77C\uB294 \uC911\uAC04 \uB9E4\uAC1C\uCCB4\uAC00 \uC788\uAE30 \uB54C\uBB38\uC774\uB2E4. \uB3C4\uBA54\uC778\uC774 \uB2E4\uB974\uB354\uB77C\uB3C4 Broker\uC5D0 \uC811\uADFC\uB9CC \uAC00\uB2A5\uD558\uB2E4\uBA74 \uCC98\uB9AC\uAC00 \uAC00\uB2A5\uD558\uAE30 \uB54C\uBB38\uC774\uB2E4.<br> (\uB2F9\uC5F0\uD788 cors \uCC98\uB9AC\uAC00 \uC81C\uB300\uB85C \uB418\uC5B4\uC788\uC5B4\uC57C\uACA0\uC9C0?)</p><h2 id="pub-sub\u110B\u1174-\u1110\u1173\u11A8\u110C\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#pub-sub\u110B\u1174-\u1110\u1173\u11A8\u110C\u1175\u11BC" aria-hidden="true">#</a> Pub/Sub\uC758 \uD2B9\uC9D5</h2><p>Pub/Sub \uD1B5\uC2E0\uC740 \uC77C\uB300\uB2E4(fan-in), \uB2E4\uB300\uC77C(fan-out), \uB2E4\uB300\uB2E4 \uD615\uD0DC\uB97C \uCDE8\uD55C\uB2E4.<br><img src="'+u+'" alt="\uD615\uD0DC"></p><ul><li><strong>\uD655\uC7A5\uC131</strong> : \uAE30\uBCF8\uC801\uC73C\uB85C 1\uCD08\uC5D0 1\uB9CC\uAC74\uC758 \uBA54\uC2DC\uC9C0 \uC804\uC1A1 \uAC00\uB2A5</li><li><strong>Push / Poll \uC804\uB2EC</strong> : Subscriber\uB4E4\uC774 \uC778\uD130\uB137 \uC704\uCE58\uC5D0 \uC0C1\uAD00\uC5C6\uC774 \uC720\uC5F0\uD55C \uC804\uB2EC \uC635\uC158\uC744 \uAC00\uC9D0</li><li><strong>\uC554\uD638\uD654</strong> : \uD56D\uC0C1 \uC554\uD638\uD654 \uB418\uC5B4 \uC804\uC1A1 \uBC0F \uC800\uC7A5\uB428</li><li><strong>\uBA54\uC2DC\uC9C0 \uD050</strong> : 1:1 \uD1B5\uC2E0 \uD328\uD134\uC744 \uC9C0\uC6D0\uD558\uAE30 \uC704\uD574 \uB2E8\uC77C Topic\uACFC Subscription\uC744 \uC0AC\uC6A9\uD558\uB294 \uBA54\uC2DC\uC9C0 \uD050 \uC0DD\uC131</li></ul><h2 id="\u1100\u1162\u1102\u1167\u11B7-\u1106\u1175\u11BE-\u1106\u1166\u1109\u1175\u110C\u1175-\u1112\u1173\u1105\u1173\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1100\u1162\u1102\u1167\u11B7-\u1106\u1175\u11BE-\u1106\u1166\u1109\u1175\u110C\u1175-\u1112\u1173\u1105\u1173\u11B7" aria-hidden="true">#</a> \uAC1C\uB150 \uBC0F \uBA54\uC2DC\uC9C0 \uD750\uB984</h2><p><img src="'+b+'" alt="\uAC1C\uB150-\uBC0F-\uBA54\uC2DC\uC9C0-\uD750\uB984.png"></p><ol><li>Publisher\uAC00 Pub/Sub\uC5D0\uC11C Topic\uC744 \uC0DD\uC131\uD558\uACE0 \uBA54\uC2DC\uC9C0\uB85C \uC804\uC1A1\uD55C\uB2E4.<br> (\uBA54\uC2DC\uC9C0\uC5D0\uB294 \uD398\uC774\uB85C\uB4DC\uC640 \uD398\uC774\uB85C\uB4DC \uCEE8\uD150\uCE20\uB97C \uC124\uBA85\uD558\uB294 \uCD94\uAC00 \uC18D\uC131\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uB2E4.)</li><li>\uBA54\uC2DC\uC9C0\uB294 \uC804\uC1A1 \uD6C4 Subscriber\uAC00 \uD655\uC778\uD560 \uB54C\uAE4C\uC9C0 \uBA54\uC2DC\uC9C0 \uC800\uC7A5\uC18C\uC5D0 \uB0A8\uC544\uC788\uB294\uB2E4.</li><li>Pub/Sub \uC11C\uBE44\uC2A4\uAC00 \uBA54\uC2DC\uC9C0\uB97C Topic\uC5D0\uC11C \uAC1C\uBCC4 \uAD6C\uB3C5\uC73C\uB85C \uC804\uC1A1\uD55C\uB2E4.</li><li>Subscriber\uB294 \uB300\uAE30 \uC911\uC778 \uBA54\uC2DC\uC9C0\uB97C Publisher\uB85C\uBD80\uD130 \uC218\uC2E0\uD558\uACE0 \uBA54\uC2DC\uC9C0\uB97C \uD655\uC778\uD588\uC74C\uC744 Pub/Sub \uC11C\uBE44\uC2A4\uC5D0 \uC54C\uB9B0\uB2E4.</li><li>Subscriber\uAC00 \uBA54\uC2DC\uC9C0\uB97C \uD655\uC778\uD558\uBA74 \uD574\uB2F9 \uBA54\uC2DC\uC9C0\uB294 \uAD6C\uB3C5 \uBA54\uC2DC\uC9C0 \uB300\uAE30\uC5F4\uC5D0\uC11C \uC0AC\uB77C\uC9C4\uB2E4.</li></ol><h2 id="subscribe-\u1100\u116E\u1103\u1169\u11A8-\u1107\u1161\u11BC\u1107\u1165\u11B8-\u1110\u1173\u11A8\u110C\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#subscribe-\u1100\u116E\u1103\u1169\u11A8-\u1107\u1161\u11BC\u1107\u1165\u11B8-\u1110\u1173\u11A8\u110C\u1175\u11BC" aria-hidden="true">#</a> Subscribe(\uAD6C\uB3C5) \uBC29\uBC95 \uD2B9\uC9D5</h2><h3 id="pull" tabindex="-1"><a class="header-anchor" href="#pull" aria-hidden="true">#</a> Pull</h3><p><strong>\uAD6C\uB3C5\uC790 \uC571\uC774 Pub/Sub\uC5D0 \uBA54\uC2DC\uC9C0 \uAC80\uC0C9\uC744 \uC694\uCCAD</strong>\uD558\uB294 \uBC29\uC2DD.</p><p><strong>\uB300\uB7C9 \uBA54\uC2DC\uC9C0 \uCC98\uB9AC\uC5D0 \uC720\uB9AC</strong>\uD558\uAE30 \uB54C\uBB38\uC5D0 \uBA54\uC2DC\uC9C0 \uCC98\uB9AC \uD6A8\uC728\uC131\uACFC \uCC98\uB9AC\uB7C9\uC774 \uC911\uC694\uD55C \uC571\uC5D0\uC11C \uC0AC\uC6A9\uD558\uBA74 \uC88B\uB2E4.</p><p><img src="'+i+'" alt="pull-\uBC29\uC2DD.png"></p><h3 id="push" tabindex="-1"><a class="header-anchor" href="#push" aria-hidden="true">#</a> Push</h3><p><strong>Pub/Sub\uC774 \uAD6C\uB3C5\uC790 \uC571\uC5D0 \uBA54\uC2DC\uC9C0 \uC218\uC2E0\uC744 \uC694\uCCAD</strong>\uD558\uB294 \uBC29\uC2DD</p><p>\uD574\uB2F9 \uAD6C\uB3C5\uC790 \uC571\uC774 GCP Console\uC758 \uC571\uC774\uB77C\uBA74 \uC778\uC99D\uC774 \uD544\uC694\uC5C6\uC9C0\uB9CC, \uC544\uB2C8\uBA74 \uC778\uC99D \uC808\uCC28\uAC00 \uD544\uC694\uD558\uB2E4.</p><p><img src="'+o+'" alt="push-\uBC29\uC2DD.png"></p>',31);function t(c,n){return p}var g=r(d,[["render",t]]);export{g as default};
