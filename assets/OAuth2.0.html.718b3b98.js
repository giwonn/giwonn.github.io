import{e}from"./app.f389a198.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";var c="/images/TIL/CS-Network/oauth-naver.jpg",a="/images/TIL/CS-Network/oauth-payco.png";const p={},d=e('<h1 id="oauth-2-0" tabindex="-1"><a class="header-anchor" href="#oauth-2-0" aria-hidden="true">#</a> OAuth 2.0</h1><p>\uD68C\uC0AC \uC11C\uBE44\uC2A4\uC5D0\uB3C4 <code>OAuth 2.0</code>\uC774 \uC9C1\uC811 \uAD6C\uD604\uB418\uC5B4\uC838\uC788\uB2E4. (\uBB3C\uB860 \uD45C\uC900\uACFC \uC0B4\uC9DD \uB2E4\uB978\uAC78\uB85C \uC54C\uACE0 \uC788\uC9C0\uB9CC...)</p><p>\uB0B4\uBD80 \uC2A4\uD130\uB514\uB97C \uD1B5\uD574 <code>OAuth 2.0</code>\uC5D0 \uB300\uD574 \uBC30\uC6E0\uC9C0\uB9CC... \uADF8\uB798\uB3C4 \uC774\uAC8C \uC815\uD655\uD788 \uBB34\uC5C7\uC774\uB77C\uB3C4 \uB2E8\uC5B8\uD560 \uC218\uAC00 \uC5C6\uB2E4.</p><p>\uC544\uC9C1 \uC81C\uB300\uB85C \uC774\uD574\uB97C \uD558\uC9C0 \uBABB\uD588\uAE30 \uB54C\uBB38\uC5D0 \uBC1C\uC0DD\uD558\uB294 \uD604\uC0C1\uC778\uAC83 \uAC19\uB2E4.</p><p>\uADF8\uB7F0 \uC758\uBBF8\uC5D0\uC11C \uBCF5\uC2B5 \uACB8 <code>OAuth 2.0</code>\uC5D0 \uB300\uD558\uC5EC \uAC04\uB7B5\uD558\uAC8C \uC815\uB9AC\uD558\uACE0\uC790 \uD55C\uB2E4.</p><h2 id="oauth\u1102\u1173\u11AB-\u1106\u116E\u110B\u1165\u11BA\u110B\u1175\u11AF\u1101\u1161" tabindex="-1"><a class="header-anchor" href="#oauth\u1102\u1173\u11AB-\u1106\u116E\u110B\u1165\u11BA\u110B\u1175\u11AF\u1101\u1161" aria-hidden="true">#</a> OAuth\uB294 \uBB34\uC5C7\uC77C\uAE4C?</h2><p><code>OAuth 2.0</code>\uC744 \uC54C\uC544\uBCF4\uAE30\uC5D0 \uC55E\uC11C, <code>OAuth</code>\uB294 \uBB58\uAE4C? \uBB50\uAE38\uB798 2.0\uC774 \uBD99\uC5B4\uC788\uB294\uAC78\uAE4C?</p><p><code>OAuth</code>\uB294 <code>OpenID Authentication</code>, \uD574\uC11D\uD558\uBA74 \uB300\uAC15 <code>\uACF5\uAC1C\uB41C \uC544\uC774\uB514\uB97C \uD1B5\uD55C \uC778\uC99D</code> \uC815\uB3C4\uAC00 \uB418\uACA0\uB2E4.</p><p>\uC758\uC5ED\uD55C\uAC70\uB77C \uC774\uC0C1\uD558\uAC8C \uB290\uAEF4\uC9C8\uC218\uB3C4 \uC788\uC9C0\uB9CC \uADF8\uB0E5 \uB118\uC5B4\uAC00\uC790. \uC27D\uAC8C \uB9D0\uD574 <code>\uBE44\uBC00\uBC88\uD638\uB97C \uC81C\uACF5\uD558\uC9C0 \uC54A\uACE0 \uC811\uADFC \uAD8C\uD55C\uC744 \uB2E4\uB978 \uC571\uC5D0\uC11C \uBD80\uC5EC\uD55C\uB2E4</code> \uB77C\uACE0 \uC0DD\uAC01\uD558\uBA74 \uB41C\uB2E4.</p><p><code>OAuth 2.0</code>\uC740 \uBCF4\uC548\uC801\uC778 \uCDE8\uC57D\uC810\uC744 \uD574\uACB0\uD558\uAE30 \uC704\uD574 \uBC84\uC804 \uC5C5\uB370\uC774\uD2B8\uAC00 \uB41C \uAC83\uC774\uB2E4.</p><h2 id="\u1103\u1162\u1105\u1163\u11A8\u110C\u1165\u11A8\u110B\u1175\u11AB-\u1100\u116A\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1162\u1105\u1163\u11A8\u110C\u1165\u11A8\u110B\u1175\u11AB-\u1100\u116A\u110C\u1165\u11BC" aria-hidden="true">#</a> \uB300\uB7B5\uC801\uC778 \uACFC\uC815</h2><p>\uC790, \uC6B0\uB9AC\uAC00 SNS \uB85C\uADF8\uC778\uD558\uB294 \uACFC\uC815\uC744 \uC0DD\uAC01\uD574\uBCF4\uC790.</p><ol><li><p>\uB124\uC774\uBC84 \uB85C\uADF8\uC778 \uBC84\uD2BC\uC744 \uB204\uB978\uB2E4.</p></li><li><p>\uB124\uC774\uBC84 \uB85C\uADF8\uC778 \uD654\uBA74\uC73C\uB85C \uC774\uB3D9\uD55C\uB2E4.</p></li><li><p>\uB85C\uADF8\uC778\uD558\uBA74 \uC5B4\uB5A4 \uC815\uBCF4\uB97C \uB118\uACA8\uC904\uC9C0 \uC815\uD55C\uB2E4.</p></li><li><p>\uB118\uACA8\uC8FC\uAE30\uB85C \uD55C \uC815\uBCF4\uAC00 \uD574\uB2F9 \uC0AC\uC774\uD2B8\uB85C \uB118\uC5B4\uC628\uB2E4.</p></li><li><p>\uB85C\uADF8\uC778 \uC131\uACF5!</p></li></ol><p>\uC55E\uC73C\uB85C \uC124\uBA85\uD560 OAuth 2.0\uC758 \uACFC\uC815\uC740 \uC774 5\uAC00\uC9C0 \uACFC\uC815\uC5D0\uC11C \uC804\uBD80 \uC77C\uC5B4\uB09C\uB2E4.</p><h2 id="access-token" tabindex="-1"><a class="header-anchor" href="#access-token" aria-hidden="true">#</a> Access Token</h2><p>\uC5D1\uC138\uC2A4 \uD1A0\uD070\uC740 <code>OAuth</code>\uC758 \uD575\uC2EC\uC774\uB2E4.</p><p>\uC6B0\uB9AC\uAC00 \uB124\uC774\uBC84 \uB85C\uADF8\uC778\uC744 \uC9C4\uD589\uD558\uBA74(\uB124\uC774\uBC84 \uD68C\uC6D0\uC784\uC744 \uC778\uC99D\uD558\uBA74) \uB124\uC774\uBC84\uB294 \uB098\uC640 \uAD00\uB828\uB41C <code>Access Token</code>\uC744 \uBC1C\uAE09\uD574\uC900\uB2E4.</p><p>\uADFC\uB370 \uC5EC\uAE30\uC11C \uBB38\uC81C\uAC00 \uC0DD\uAE34\uB2E4. \uC6B0\uB9AC\uB294 \uB124\uC774\uBC84 \uB85C\uADF8\uC778 \uCC3D\uC5D0\uC11C \uC778\uC99D\uC744 \uD588\uB2E4...</p><p>\uC561\uC138\uC2A4 \uD1A0\uD070\uC774 \uD544\uC694\uD55C \uACF3\uC740 \uB124\uC774\uBC84 \uCC3D\uC774 \uC544\uB2C8\uB77C, \uB0B4\uAC00 \uAC00\uC785\uD560 \uC6F9\uC0AC\uC774\uD2B8\uB2E4.</p><p>\uD1A0\uD070\uC744 \uC5B4\uB5BB\uAC8C \uC804\uB2EC\uD574\uC904\uAE4C?</p><p>\uC815\uB2F5\uC740 <strong>redirect</strong>\uB2E4. url\uC5D0 redirect_url\uB97C \uBB36\uC5B4\uC90C\uC73C\uB85C\uC368 \uC561\uC138\uC2A4 \uD1A0\uD070\uC744 \uC804\uB2EC\uD574\uC900\uB2E4.</p><p><img src="'+c+'" alt="oauth-naver"></p><p>\uADFC\uB370 \uC5EC\uAE30\uC11C \uBB38\uC81C\uAC00 \uC0DD\uAE34\uB2E4.</p><p>redirect_uri\uB294 \uB85C\uADF8\uC778 \uD558\uAE30\uC804\uC5D0 url\uC744 \uB9D8\uB300\uB85C \uC870\uC791\uD560 \uC218 \uC788\uB2E4.</p><p>\uADF8\uB798\uC11C <code>OAuth 2.0</code>\uC744 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uC5D0\uAC8C redirect\uB97C \uD5C8\uC6A9\uD560 \uB3C4\uBA54\uC778\uC744 \uB4F1\uB85D\uD574\uC8FC\uC5B4\uC57C \uD55C\uB2E4.</p><p>\uC774\uB807\uAC8C \uD558\uBA74! \uB4DC\uB514\uC5B4 <code>Access Token</code>\uC744 \uBC1C\uAE09\uBC1B\uC744 \uC218 \uC788\uAC8C \uB41C\uB2E4.</p><p>\uC774 \uC561\uC138\uC2A4 \uD1A0\uD070\uC73C\uB85C \uC815\uBCF4\uB97C \uC694\uCCAD\uD558\uBA74 \uB124\uC774\uBC84 \uCE21\uC740 \uC815\uBCF4\uB97C \uC81C\uACF5\uD574\uC900\uB2E4.</p><h2 id="\u1109\u1161\u1109\u1175\u11AF-\u1103\u1165-\u110C\u1161\u1109\u1166\u1112\u1161\u11AB-\u1100\u116A\u110C\u1165\u11BC\u110B\u1175-\u110B\u1175\u11BB\u110C\u1175\u1106\u1161\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u1109\u1175\u11AF-\u1103\u1165-\u110C\u1161\u1109\u1166\u1112\u1161\u11AB-\u1100\u116A\u110C\u1165\u11BC\u110B\u1175-\u110B\u1175\u11BB\u110C\u1175\u1106\u1161\u11AB" aria-hidden="true">#</a> \uC0AC\uC2E4 \uB354 \uC790\uC138\uD55C \uACFC\uC815\uC774 \uC788\uC9C0\uB9CC</h2><p>\uC561\uC138\uC2A4 \uD1A0\uD070\uC744 \uBC1C\uAE09\uBC1B\uAE30 \uC704\uD574 <code>Authorization code</code>\uB97C \uBC1C\uAE09\uD55C\uB2E4\uB358\uAC00,</p><p><code>Refresh Token</code>\uC73C\uB85C \uC561\uC138\uC2A4 \uD1A0\uD070\uC744 \uC7AC\uBC1C\uAE09\uD55C\uB2E4\uB358\uAC00 \uD558\uB294 \uACFC\uC815\uC774 \uB9CE\uC774 \uBE60\uC838\uC788\uC9C0\uB9CC,</p><p><strong>\uD398\uC774\uCF54 \uAC1C\uBC1C\uC790 \uC13C\uD130</strong>\uC5D0\uC11C \uC81C\uACF5\uD574\uC8FC\uB294 \uB2E4\uC774\uC5B4\uADF8\uB7A8\uC73C\uB85C \uB300\uC2E0\uD558\uACA0\uB2E4.</p><p><img src="'+a+'" alt="/images/TIL/CS-Network/oauth-payco.png"></p><h2 id="etc" tabindex="-1"><a class="header-anchor" href="#etc" aria-hidden="true">#</a> etc</h2><p><code>OAuth Connect</code> \uB77C\uB294\uAC8C \uC788\uB2E4\uACE0 \uD558\uB294\uB370... \uB098\uC911\uC5D0 \uC54C\uC544\uBCF4\uC790.</p>',34);function t(r,h){return d}var s=o(p,[["render",t]]);export{s as default};
