import{r as l,o as n,c as i,a as t,b as r,F as o,e as d,d as a}from"./app.28e06276.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const h={},c=d('<h1 id="cookie\u110B\u116A-web-storage" tabindex="-1"><a class="header-anchor" href="#cookie\u110B\u116A-web-storage" aria-hidden="true">#</a> Cookie\uC640 Web Storage</h1><h1 id="cookie\u1105\u1161\u11AB" tabindex="-1"><a class="header-anchor" href="#cookie\u1105\u1161\u11AB" aria-hidden="true">#</a> Cookie\uB780?</h1><p>\uC11C\uBC84\uAC00 \uC0AC\uC6A9\uC790\uC758 \uC6F9 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC804\uC1A1\uD558\uB294 \uC791\uC740 \uB370\uC774\uD130 \uC870\uAC01\uC774\uB2E4.<br> \uBE0C\uB77C\uC6B0\uC800\uB294 \uADF8 \uB370\uC774\uD130 \uC870\uAC01\uB4E4\uC744 \uC800\uC7A5\uD574 \uB193\uC558\uB2E4\uAC00, \uB3D9\uC77C\uD55C \uC11C\uBC84\uC5D0 \uC7AC \uC694\uCCAD\uC2DC\uC5D0 \uC800\uC7A5\uB41C \uB370\uC774\uD130\uB97C \uD568\uAED8 \uC804\uC1A1\uD55C\uB2E4. \uCFE0\uD0A4\uB294 \uB450 \uC694\uCCAD\uC774 \uB3D9\uC77C\uD55C \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uB4E4\uC5B4\uC640\uB294\uC9C0\uB97C \uD310\uB2E8\uD560 \uB54C \uC8FC\uB85C \uC0AC\uC6A9\uD558\uB294\uB370, \uC774\uB97C \uC774\uC6A9\uD558\uC5EC \uB85C\uADF8\uC778 \uC0C1\uD0DC\uB97C \uC720\uC9C0\uD560 \uC218 \uC788\uB2E4.</p><h2 id="\u110F\u116E\u110F\u1175\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1102\u1173\u11AB-\u1106\u1169\u11A8\u110C\u1165\u11A8" tabindex="-1"><a class="header-anchor" href="#\u110F\u116E\u110F\u1175\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1102\u1173\u11AB-\u1106\u1169\u11A8\u110C\u1165\u11A8" aria-hidden="true">#</a> \uCFE0\uD0A4\uB97C \uC0AC\uC6A9\uD558\uB294 \uBAA9\uC801</h2><ol><li><strong>\uC138\uC158 \uAD00\uB9AC (Session Management)</strong> : \uC11C\uBC84\uC5D0 \uC800\uC7A5\uD574\uC57C \uD560 \uB85C\uADF8\uC778, \uC7A5\uBC14\uAD6C\uB2C8 \uB4F1\uC758 \uC815\uBCF4 \uAD00\uB9AC</li><li><strong>\uAC1C\uC778\uD654 (Personalization)</strong> : \uC0AC\uC6A9\uC790 \uC120\uD638, \uD14C\uB9C8 \uB4F1\uC758 \uC138\uD305</li><li><strong>\uD2B8\uB798\uD0B9 (Tracking)</strong> : \uC0AC\uC6A9\uC790\uC758 \uD589\uB3D9\uC744 \uAE30\uB85D\uD558\uACE0 \uBD84\uC11D\uD558\uB294 \uC6A9\uB3C4</li></ol><p>\uACFC\uAC70\uC5D4 \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21\uC5D0 \uC815\uBCF4\uB97C \uC800\uC7A5\uD560 \uB54C \uCFE0\uD0A4\uB97C \uC8FC\uB85C \uC0AC\uC6A9\uD558\uC600\uB2E4.<br> \uD558\uC9C0\uB9CC \uC9C0\uAE08\uC740 <strong>Modern Storage APIs</strong>\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC815\uBCF4\uB97C \uC800\uC7A5\uD558\uB294 \uAC78 \uAD8C\uC7A5\uD55C\uB2E4\uACE0 \uD55C\uB2E4.<br> (\uBAA8\uB4E0 \uC694\uCCAD\uB9C8\uB2E4 \uCFE0\uD0A4\uAC00 \uD568\uAED8 \uC804\uC1A1\uB418\uAE30 \uB54C\uBB38\uC5D0 \uC131\uB2A5\uC774 \uB5A8\uC5B4\uC9C0\uB294 \uC6D0\uC778\uC774 \uB420 \uC218 \uC788\uAE30 \uB54C\uBB38\uC774\uB2E4.)<br><br> \uC815\uBCF4\uB97C \uD074\uB77C\uC774\uC5B8\uD2B8 \uCE21\uC5D0 \uC800\uC7A5\uD558\uB824\uBA74 Modern APIs\uC758 \uD55C \uC885\uB958\uC778 <strong>\uC6F9 \uC2A4\uD1A0\uB9AC\uC9C0 API (localStorage, sessionStorage)\uC640 IndexDB</strong>\uB97C \uC0AC\uC6A9\uD558\uBA74 \uB41C\uB2E4.</p><h2 id="\u110F\u116E\u110F\u1175\u110B\u1174-\u1110\u1173\u11A8\u110C\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110F\u116E\u110F\u1175\u110B\u1174-\u1110\u1173\u11A8\u110C\u1175\u11BC" aria-hidden="true">#</a> \uCFE0\uD0A4\uC758 \uD2B9\uC9D5</h2><ul><li><strong>\uC8FC\uB85C \uC11C\uBC84\uC5D0\uC11C \uC0AC\uC6A9</strong><ul><li>Set-Cookie: &lt;cookie-name&gt;=&lt;cookie-value&gt;</li></ul></li><li><strong>\uC694\uCCAD \uC2DC Headers\uC5D0 \uC2E4\uB824\uC11C \uC11C\uBC84\uB85C \uC804\uC1A1</strong></li><li><strong>\uB9CC\uB8CC \uAE30\uAC04 \uC9C0\uC815\uAC00\uB2A5</strong><ul><li>Set-Cookie: &lt;cookie-name&gt;=&lt;cookie-value&gt;; Expires=&lt;date&gt;</li><li>Set-Cookie: &lt;cookie-name&gt;=&lt;cookie-value&gt;; Max-Age=&lt;number&gt;</li></ul></li></ul><h2 id="\u110F\u116E\u110F\u1175\u110B\u1174-\u110C\u1169\u11BC\u1105\u1172" tabindex="-1"><a class="header-anchor" href="#\u110F\u116E\u110F\u1175\u110B\u1174-\u110C\u1169\u11BC\u1105\u1172" aria-hidden="true">#</a> \uCFE0\uD0A4\uC758 \uC885\uB958</h2><ul><li><p>\uB9CC\uB8CC\uAE30\uD55C\uC5D0 \uB530\uB978 \uBD84\uB958</p><table><thead><tr><th style="text-align:center;">\uC601\uAD6C \uCFE0\uD0A4<br>(Persistent Cookie)</th><th style="text-align:center;">\uC138\uC158 \uCFE0\uD0A4<br>(Session Cookie)</th></tr></thead><tbody><tr><td style="text-align:center;">\uB9CC\uB8CC \uAE30\uAC04 O</td><td style="text-align:center;">\uB9CC\uB8CC \uAE30\uAC04 X</td></tr><tr><td style="text-align:center;">\uB9CC\uB8CC \uAE30\uAC04\uC774 \uB05D\uB09C \uD6C4 \uC0AD\uC81C</td><td style="text-align:center;">\uBE0C\uB77C\uC6B0\uC800 \uC885\uB8CC \uC2DC \uC0AD\uC81C</td></tr></tbody></table></li><li><p>\uB3C4\uBA54\uC778\uC5D0 \uB530\uB978 \uBD84\uB958</p><table><thead><tr><th style="text-align:center;">\uD37C\uC2A4\uD2B8\uD30C\uD2F0 \uCFE0\uD0A4<br>(First party Cookie)</th><th style="text-align:center;">\uC11C\uB4DC\uD30C\uD2F0 \uCFE0\uD0A4<br>(Third party Cookie)</th></tr></thead><tbody><tr><td style="text-align:center;">\uAC19\uC740 \uB3C4\uBA54\uC778<br>\uC11C\uBE0C \uB3C4\uBA54\uC778</td><td style="text-align:center;">\uB2E4\uB978 \uB3C4\uBA54\uC778</td></tr></tbody></table></li></ul><blockquote><p>\uC11C\uB4DC\uD30C\uD2F0 \uCFE0\uD0A4 : \uC0AC\uC6A9\uC790\uC758 \uBC29\uBB38 \uC0AC\uC774\uD2B8 \uD30C\uC545 (= \uAD11\uACE0)</p></blockquote><h2 id="\u110F\u116E\u110F\u1175\u110B\u1174-\u1106\u116E\u11AB\u110C\u1166\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#\u110F\u116E\u110F\u1175\u110B\u1174-\u1106\u116E\u11AB\u110C\u1166\u110C\u1165\u11B7" aria-hidden="true">#</a> \uCFE0\uD0A4\uC758 \uBB38\uC81C\uC810</h2><ul><li>CSRF : \uCFE0\uD0A4\uAC00 \uC790\uB3D9\uC73C\uB85C \uC804\uC1A1\uB41C\uB2E4\uB294 \uD2B9\uC9D5\uC744 \uC774\uC6A9\uD558\uC5EC \uC0AC\uC774\uD2B8\uC5D0 \uB85C\uADF8\uC778\uC774 \uB418\uC5B4\uC788\uB294 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC545\uC131 \uC2A4\uD06C\uB9BD\uD2B8 \uC2E4\uD589\uD558\uAC8C \uD568 (\uACB0\uC81C \uC694\uCCAD \uB4F1)</li><li>XSS : \uC0AC\uC6A9\uC790\uC758 \uBBFC\uAC10\uD55C \uC815\uBCF4 \uD0C8\uCDE8</li><li>\uBD80\uC871\uD55C \uC800\uC7A5 \uC6A9\uB7C9 (4KB)</li><li>HTTP \uC694\uCCAD \uC2DC \uC790\uB3D9\uC73C\uB85C \uBAA8\uB4E0 \uCFE0\uD0A4 \uC804\uC1A1 : \uBD88\uD544\uC694\uD55C \uD2B8\uB798\uD53D \uC99D\uAC00)</li></ul><hr><h1 id="web-storage\u1105\u1161\u11AB" tabindex="-1"><a class="header-anchor" href="#web-storage\u1105\u1161\u11AB" aria-hidden="true">#</a> Web Storage\uB780?</h1><p>\uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C Key/Value \uC30D\uC744 \uCFE0\uD0A4\uBCF4\uB2E4 \uD6E8\uC52C \uC9C1\uAD00\uC801\uC73C\uB85C \uC800\uC7A5\uD560 \uC218 \uC788\uB294 \uBC29\uBC95\uC744 \uC81C\uACF5\uD558\uB294 API</p><h2 id="web-storage\u110B\u1174-\u1110\u1173\u11A8\u110C\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#web-storage\u110B\u1174-\u1110\u1173\u11A8\u110C\u1175\u11BC" aria-hidden="true">#</a> Web Storage\uC758 \uD2B9\uC9D5</h2><ul><li>5MB\uC758 \uC800\uC7A5 \uC6A9\uB7C9 (Cookie\uB294 4KB)</li><li>\uC694\uCCAD \uC2DC Headers\uC5D0 \uC804\uC1A1\uD558\uC9C0 \uC54A\uC74C (CSRF, \uD2B8\uB798\uD53D \uBB38\uC81C \uD574\uACB0)</li><li>\uBB38\uC790\uC5F4\uB9CC \uC800\uC7A5 \uAC00\uB2A5 (\uC9C1\uB82C\uD654\uB97C \uC774\uC6A9\uD558\uBA74 \uAC1D\uCCB4\uB3C4 \uC800\uC7A5 \uAC00\uB2A5)</li></ul><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">localStorage</th><th style="text-align:center;">sessionStorage</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>\uC800\uC7A5 \uBC94\uC704</strong></td><td style="text-align:center;">\uB3C4\uBA54\uC778 / \uBE0C\uB77C\uC6B0\uC800</td><td style="text-align:center;">\uB3C4\uBA54\uC778 / \uBE0C\uB77C\uC6B0\uC800 / \uD0ED</td></tr><tr><td style="text-align:center;"><strong>\uC0AD\uC81C \uC2DC\uAE30</strong></td><td style="text-align:center;">\uC9C1\uC811 \uC0AD\uC81C \uC2DC</td><td style="text-align:center;">\uD0ED \uC885\uB8CC \uC2DC</td></tr></tbody></table><h2 id="\u1109\u1161\u110B\u116D\u11BC-\u1109\u1175-\u1100\u1169\u1105\u1167\u1112\u1161\u11AF-\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u110B\u116D\u11BC-\u1109\u1175-\u1100\u1169\u1105\u1167\u1112\u1161\u11AF-\u110C\u1165\u11B7" aria-hidden="true">#</a> \uC0AC\uC6A9 \uC2DC \uACE0\uB824\uD560 \uC810</h2><ul><li>\uAC1D\uCCB4\uB97C \uC800\uC7A5\uD558\uB824\uBA74 \uC9C1\uB82C\uD654\uB97C \uAF2D \uD574\uC918\uC57C \uD568 (JSON\uC744 \uC774\uC6A9\uD574\uC918\uC57C\uD568)</li><li>\uBE0C\uB77C\uC6B0\uC800\uC5D0 \uB530\uB77C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC744 \uC218\uB3C4 \uC788\uC74C (ex. \uC0AC\uD30C\uB9AC \uC2DC\uD06C\uB9BF\uBAA8\uB4DC\uC5D0\uC11C \uD560\uB2F9\uB7C9\uC774 0\uC73C\uB85C \uC81C\uD55C\uB418\uC5B4 \uC788\uC74C)</li></ul><h2 id="web-storage\u110B\u1174-\u1106\u116E\u11AB\u110C\u1166\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#web-storage\u110B\u1174-\u1106\u116E\u11AB\u110C\u1166\u110C\u1165\u11B7" aria-hidden="true">#</a> Web Storage\uC758 \uBB38\uC81C\uC810</h2><ul><li>XSS\uC5D0 \uCDE8\uC57D\uD568</li><li>\uB3C5\uB9BD\uB41C \uC2A4\uD1A0\uB9AC\uC9C0 (\uBE0C\uB77C\uC6B0\uC800 / \uD0ED \uAC04\uC5D0 \uB370\uC774\uD130 \uACF5\uC720 \uBD88\uAC00)</li><li>\uB9CC\uB8CC \uAE30\uAC04 \uC124\uC815 \uBD88\uAC00</li><li>\uB3D9\uAE30\uC801\uC73C\uB85C \uC2E4\uD589\uB428 <ul><li>\uBA54\uC778 \uC2A4\uB808\uB4DC\uB97C \uBE14\uB85C\uD0B9\uD558\uAC8C \uB428</li><li>\uC6A9\uB7C9\uC774 \uD06C\uB2E4\uBA74 IndexedDB\uB97C \uACE0\uB824\uD558\uB294\uAC83\uC774 \uC88B\uC74C</li></ul></li></ul><hr><h1 id="\u110C\u1165\u11BC\u1105\u1175" tabindex="-1"><a class="header-anchor" href="#\u110C\u1165\u11BC\u1105\u1175" aria-hidden="true">#</a> \uC815\uB9AC</h1><ul><li>\uCFE0\uD0A4\uB098 \uC6F9 \uC2A4\uD1A0\uB9AC\uC9C0 \uB458 \uB2E4 \uBCF4\uC548 \uBB38\uC81C\uAC00 \uC788\uAE30 \uB584\uBB38\uC5D0 \uBBFC\uAC10\uD55C \uC815\uBCF4\uB294 \uC800\uC7A5\uD558\uC9C0 \uC54A\uB294 \uAC83\uC774 \uC88B\uB2E4.</li></ul><h2 id="\u1109\u1161\u110B\u116D\u11BC\u110E\u1165" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u110B\u116D\u11BC\u110E\u1165" aria-hidden="true">#</a> \uC0AC\uC6A9\uCC98</h2><table><thead><tr><th style="text-align:center;">\uC885\uB958</th><th style="text-align:center;">\uC0AC\uC6A9\uCC98</th></tr></thead><tbody><tr><td style="text-align:center;">\uCFE0\uD0A4</td><td style="text-align:center;">n\uC77C \uB3D9\uC548 \uBCF4\uC9C0 \uC54A\uAE30<br>\uBE44\uB85C\uADF8\uC778 \uC7A5\uBC14\uAD6C\uB2C8</td></tr><tr><td style="text-align:center;">\uC138\uC158 \uC2A4\uD1A0\uB9AC\uC9C0</td><td style="text-align:center;">\uC774\uC804 \uD398\uC774\uC9C0 \uC800\uC7A5<br>\uC774\uC804 \uC2A4\uD06C\uB864 \uC704\uCE58 \uC800\uC7A5</td></tr><tr><td style="text-align:center;">\uB85C\uCEEC \uC2A4\uD1A0\uB9AC\uC9C0</td><td style="text-align:center;">\uC0AC\uC6A9\uC790 \uC124\uC815 \uC800\uC7A5<br>\uAE00 \uC784\uC2DC \uC800\uC7A5</td></tr></tbody></table><h2 id="\u1107\u1169\u110B\u1161\u11AB-\u1106\u116E\u11AB\u110C\u1166-\u1112\u1162\u1100\u1167\u11AF-\u1107\u1161\u11BC\u110B\u1161\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1107\u1169\u110B\u1161\u11AB-\u1106\u116E\u11AB\u110C\u1166-\u1112\u1162\u1100\u1167\u11AF-\u1107\u1161\u11BC\u110B\u1161\u11AB" aria-hidden="true">#</a> \uBCF4\uC548 \uBB38\uC81C \uD574\uACB0 \uBC29\uC548</h2><h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> Cookie</h3><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">\uD574\uACB0 \uBC29\uC548</th><th style="text-align:center;">\uC774\uC720</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>XSS</strong></td><td style="text-align:center;">httpOnly \uC801\uC6A9</td><td style="text-align:center;">\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uB85C \uC811\uADFC\uC774 \uBD88\uAC00\uB2A5\uD558\uAC8C \uB428</td></tr><tr><td style="text-align:center;"><strong>CSRF</strong></td><td style="text-align:center;">1. SameSite \uC801\uC6A9<br>2. Referer \uAC80\uC99D</td><td style="text-align:center;">2. \uAC19\uC740 \uB3C4\uBA54\uC778\uC758 \uC694\uCCAD\uC5D0\uB9CC \uCFE0\uD0A4\uB97C \uC804\uC1A1\uD558\uC9C0 \uC54A\uAC8C \uB428<br>\uC694\uCCAD \uC628 \uC0AC\uC774\uD2B8\uC758 \uB3C4\uBA54\uC778\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC74C</td></tr></tbody></table><h3 id="web-storage" tabindex="-1"><a class="header-anchor" href="#web-storage" aria-hidden="true">#</a> Web Storage</h3><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">\uD574\uACB0 \uBC29\uC548</th><th style="text-align:center;">\uC774\uC720</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>XSS</strong></td><td style="text-align:center;">innerHTML \uC0AC\uC6A9 X</td><td style="text-align:center;">\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uB85C \uCF54\uB4DC \uC0BD\uC785\uC744 \uD560 \uC218 \uC5C6\uAC8C\uB428</td></tr></tbody></table><blockquote><p><strong>innerHTML\uC744 \uC0AC\uC6A9\uD574\uC57C \uD55C\uB2E4\uBA74?</strong> <br>XSS \uBCF4\uC548 \uB77C\uC774\uBE0C\uB7EC\uB9AC(sanitize-html, DOMPurify)\uB97C \uC0AC\uC6A9</p></blockquote><hr><h3 id="\u110E\u1161\u11B7\u110C\u1169" tabindex="-1"><a class="header-anchor" href="#\u110E\u1161\u11B7\u110C\u1169" aria-hidden="true">#</a> \uCC38\uC870</h3>',36),g={href:"https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies",target:"_blank",rel:"noopener noreferrer"},b=a("https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies"),x=t("br",null,null,-1),y={href:"https://developer.mozilla.org/ko/docs/Web/API/Web_Storage_API",target:"_blank",rel:"noopener noreferrer"},u=a("https://developer.mozilla.org/ko/docs/Web/API/Web_Storage_API"),p=t("br",null,null,-1),k={href:"https://www.youtube.com/watch?v=-4ZsGy1LOiE",target:"_blank",rel:"noopener noreferrer"},_=a("[10\uBD84 \uD14C\uCF54\uD1A1] \u{1F984} \uB514\uD1A0\uC758 \uC6F9\uC2A4\uD1A0\uB9AC\uC9C0 & \uCFE0\uD0A4");function S(f,m){const e=l("ExternalLinkIcon");return n(),i(o,null,[c,t("p",null,[t("a",g,[b,r(e)]),x,t("a",y,[u,r(e)]),p,t("a",k,[_,r(e)])])],64)}var P=s(h,[["render",S]]);export{P as default};
