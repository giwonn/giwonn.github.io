import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as r,e as i}from"./app.404da4f0.js";var t="/images/TIL/CS-Database/\uBA54\uBAA8\uB9AC-\uACC4\uCE35\uAD6C\uC870.png",l="/images/TIL/CS-Database/IMDG.png";const n={},s=i('<h1 id="\u110B\u1175\u11AB\u1106\u1166\u1106\u1169\u1105\u1175-\u1103\u1166\u110B\u1175\u1110\u1165\u1107\u1166\u110B\u1175\u1109\u1173" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u11AB\u1106\u1166\u1106\u1169\u1105\u1175-\u1103\u1166\u110B\u1175\u1110\u1165\u1107\u1166\u110B\u1175\u1109\u1173" aria-hidden="true">#</a> \uC778\uBA54\uBAA8\uB9AC \uB370\uC774\uD130\uBCA0\uC774\uC2A4</h1><p>\uB514\uC2A4\uD06C\uAC00 \uC544\uB2CC \uC8FC \uBA54\uBAA8\uB9AC\uC5D0 \uBAA8\uB4E0 \uB370\uC774\uD130\uB97C \uBCF4\uC720\uD558\uACE0 \uC788\uB294 \uB370\uC774\uD130\uBCA0\uC774\uC2A4</p><h2 id="\u110C\u1161\u11BC\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#\u110C\u1161\u11BC\u110C\u1165\u11B7" aria-hidden="true">#</a> \uC7A5\uC810</h2><ul><li>\uB514\uC2A4\uD06C \uAC80\uC0C9\uBCF4\uB2E4 \uC790\uB8CC \uC811\uADFC\uC774 \uD6E8\uC52C \uBE60\uB974\uB2E4</li><li>\uBA54\uBAA8\uB9AC\uC0C1\uC5D0 \uC0C9\uC778(\uC778\uB371\uC2A4)\uB97C \uB123\uC5B4 \uBE60\uB974\uAC8C \uAC80\uC0C9\uD560 \uC218 \uC788\uB2E4.</li></ul><h2 id="\u1103\u1161\u11AB\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u110C\u1165\u11B7" aria-hidden="true">#</a> \uB2E8\uC810</h2><ul><li>\uB370\uC774\uD130\uAC00 \uD718\uBC1C\uC131\uC774\uB2E4. (\uC601\uC18D\uC801\uC774\uC9C0 \uC54A\uB2E4)</li><li>\uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uC6A9\uB7C9\uC774 RAM\uC758 \uC6A9\uB7C9\uC5D0 \uC88C\uC6B0\uB41C\uB2E4.</li></ul><p>:::warning \uC8FC\uC758 \uC778\uBA54\uBAA8\uB9AC DB\uB294 \uAF2D Nosql\uC774\uC9C0 \uC54A\uB2E4. \uAC00\uC7A5 \uC720\uBA85\uD55C Redis\uAC00 Nosql\uC774\uB77C\uC11C \uD5F7\uAC08\uB9AC\uB294 \uACBD\uC6B0\uAC00 \uB9CE\uC740\uB370 Mysql \uB610\uD55C \uC778\uBA54\uBAA8\uB9AC \uAE30\uB2A5\uC744 \uC9C0\uC6D0\uD55C\uB2E4. :::</p><h2 id="\u110B\u116B-\u1108\u1161\u1105\u1173\u11AF\u1101\u1161" tabindex="-1"><a class="header-anchor" href="#\u110B\u116B-\u1108\u1161\u1105\u1173\u11AF\u1101\u1161" aria-hidden="true">#</a> \uC65C \uBE60\uB97C\uAE4C?</h2><p><img src="'+t+'" alt="\uBA54\uBAA8\uB9AC \uACC4\uCE35\uAD6C\uC870"><br> \uC778\uBA54\uBAA8\uB9AC DB\uAC00 \uC704\uCE58\uD558\uB294 \uACF3\uC740 RAM(\uC8FC \uAE30\uC5B5\uC7A5\uCE58)\uC774\uB2E4.</p><p>\uB514\uC2A4\uD06C \uAE30\uBC18 \uC800\uC7A5\uC7A5\uCE58(HDD, SDD)\uB294 <strong>\uBCF4\uC870 \uAE30\uC5B5 \uC7A5\uCE58</strong>\uB77C\uACE0 \uBD88\uB9B0\uB2E4.</p><p>\uC678\uBD80 \uB514\uC2A4\uD06C\uC758 \uB370\uC774\uD130\uC5D0 \uC811\uADFC\uD558\uAE30 \uC704\uD574\uC11C\uB294, \uB370\uC774\uD130\uB97C \uCE90\uC2DC\uB098 RAM\uC73C\uB85C \uC774\uB3D9\uC2DC\uD0A4\uACE0\uB098\uC11C \uC811\uADFC\uD560 \uC218 \uC788\uB2E4.</p><p>\uC544\uBB34\uB798\uB3C4 \uB370\uC774\uD130\uB97C RAM\uC73C\uB85C \uAC00\uC838\uC640\uC11C \uC77D\uC5B4\uC57C\uD55C\uB2E4\uB294 \uC810 \uB54C\uBB38\uC5D0 \uB290\uB9B4 \uC218 \uBC16\uC5D0 \uC5C6\uB294\uB370, <strong>\uC778 \uBA54\uBAA8\uB9AC DB\uB97C \uC0AC\uC6A9\uD558\uBA74 \uB370\uC774\uD130\uB97C \uAC00\uC838\uC624\uB294 \uB2E8\uACC4\uB97C \uC0DD\uB7B5\uD560 \uC218 \uC788\uB2E4.</strong></p><p>\uD558\uC9C0\uB9CC RAM\uC740 \uC601\uC18D\uC131\uC744 \uBCF4\uC7A5\uD558\uC9C0 \uC54A\uB294\uB2E4. \uC989, <strong>\uC778\uBA54\uBAA8\uB9AC DB \uB610\uD55C \uC601\uC18D\uC131\uC744 \uBCF4\uC7A5\uD558\uC9C0 \uC54A\uB294\uB2E4.</strong></p><p>\uADF8\uB807\uAE30\uC5D0 \uC9C0\uC18D\uC131\uC744 \uBCF4\uC7A5\uD558\uAE30 \uC704\uD558\uC5EC \uBA54\uBAA8\uB9AC\uC5D0 CRUD\uB41C \uAC12\uB4E4\uC740 \uBAA8\uB4DC \uB514\uC2A4\uD06C\uC5D0 \uB85C\uADF8\uB85C \uAE30\uB85D\uB418\uC5B4 DB\uAC00 \uC7AC\uAD6C\uB3D9\uB420 \uB54C \uB85C\uADF8\uB97C \uD1B5\uD574 \uB2E4\uC2DC \uC7AC\uAD6C\uCD95\uD55C\uB2E4.</p><h2 id="\u110C\u116E\u110B\u1174\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#\u110C\u116E\u110B\u1174\u110C\u1165\u11B7" aria-hidden="true">#</a> \uC8FC\uC758\uC810</h2><ul><li>\uBCF8\uC778\uC774 \uC0AC\uC6A9\uD558\uB294 \uAE30\uAE30\uC758 RAM \uC6A9\uB7C9\uC744 \uB118\uAE30\uC9C0 \uB9D0\uC544\uC57C\uD55C\uB2E4.<br> (\uB370\uC774\uD130 \uC591\uC774 RAM \uC6A9\uB7C9\uC744 \uB118\uAE30\uB294 \uACBD\uC6B0, \uAC00\uC0C1 \uBA54\uBAA8\uB9AC\uB97C \uC0AC\uC6A9\uD558\uAC8C \uB418\uC5B4 \uB354 \uB290\uB824\uC9C4\uB2E4)</li></ul><h2 id="in-memory-data-grid-imdg" tabindex="-1"><a class="header-anchor" href="#in-memory-data-grid-imdg" aria-hidden="true">#</a> In-Memory Data Grid (IMDG)</h2><p>In-Memory Data Grid\uB294 \uC5EC\uB7EC \uC11C\uBC84\uC5D0 \uB370\uC774\uD130\uB97C \uBD84\uC0B0\uD558\uC5EC \uC800\uC7A5\uD558\uB294 <strong>\uBD84\uC0B0 \uBA54\uBAA8\uB9AC \uC2DC\uC2A4\uD15C</strong>\uC774\uB2E4.</p><p>\uB2E4\uC218\uC758 \uCEF4\uD4E8\uD130 \uBA54\uBAA8\uB9AC\uB97C \uADF8\uB9AC\uB4DC\uB85C \uC5F0\uACB0\uD574\uC11C \uB9C8\uCE58 \uD558\uB098\uC758 \uBA54\uBAA8\uB9AC \uC800\uC7A5\uC18C\uCC98\uB7FC \uC6B4\uC6A9\uD558\uB294 \uAC83\uC774\uB2E4.</p><p>\uC6A9\uB7C9\uC774 \uBD80\uC871\uD558\uBA74 \uC11C\uBC84\uB97C \uCD94\uAC00\uD558\uC5EC \uC6A9\uB7C9\uC744 \uC99D\uC124\uD560 \uC218 \uC788\uB2E4.</p><p>IMDG\uB294 \uBA54\uC778 \uBA54\uBAA8\uB9AC\uC5D0 \uB370\uC774\uD130\uB97C \uC800\uC7A5\uD55C\uB2E4\uB294 \uC810\uC774 \uAC19\uC744 \uBFD0, In-Memory Database\uB791 \uC544\uD0A4\uD14D\uCC98\uAC00 \uB9CE\uC774 \uB2E4\uB974\uB2E4\uACE0 \uD55C\uB2E4.</p><p><img src="'+l+'" alt="IMDG"></p><p>\uD2B9\uC9D5\uC740 \uB2E4\uC74C\uACFC \uAC19\uB2E4.</p><ul><li>\uB2E4\uC218\uC758 \uCEF4\uD4E8\uD130 \uBA54\uBAA8\uB9AC\uB97C \uD074\uB7EC\uC2A4\uD130\uB9C1\uD558\uC5EC \uD558\uB098\uC758 \uD070 \uBA54\uBAA8\uB9AC \uC800\uC7A5\uC18C\uB85C \uAD6C\uCD95</li><li>\uAC01 \uC11C\uBC84\uB294 active \uBAA8\uB4DC\uB85C \uB3D9\uC791\uD568 (\uC11C\uBC84\uAC00 \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0 \uC811\uC18D\uC744 \uD568)</li><li>\uBA54\uBAA8\uB9AC \uD074\uB7EC\uC2A4\uD130\uC758 \uC218\uD3C9\uC801 \uD655\uC7A5\uC744 \uD1B5\uD55C \uBB34\uC81C\uD55C \uC6A9\uB7C9 \uC9C0\uC6D0 \uAC00\uB2A5</li><li>\uB370\uC774\uD130\uB294 \uAC1D\uCCB4 \uC9C0\uD5A5 \uBC0F \uBE44 \uAD00\uACC4\uD615 \uB370\uC774\uD130 \uBAA8\uB378\uB85C \uAD00\uB9AC</li><li>\uB370\uC774\uD130 \uC694\uCCAD\uC740 \uB2E4\uC218\uC758 \uC11C\uBC84\uC5D0\uC11C \uBCD1\uB82C\uB85C \uCC98\uB9AC</li><li>\uB514\uC2A4\uD06C, DBMS\uB97C \uC774\uC6A9\uD558\uC5EC \uB370\uC774\uD130\uC758 \uC601\uC18D\uC131 \uBCF4\uC7A5</li></ul><h2 id="etc" tabindex="-1"><a class="header-anchor" href="#etc" aria-hidden="true">#</a> etc</h2><p>::: tip</p><ul><li><p><strong>Register</strong><br> \uCEF4\uD4E8\uD130\uC5D0\uC11C \uC81C\uC77C \uBE60\uB978 \uBA54\uBAA8\uB9AC\uC774\uB2E4. CPU \uB0B4\uBD80\uC5D0 \uC704\uCE58\uD574 \uC788\uC73C\uBA70, \uADF9\uD788 \uC18C\uB7C9\uC758 \uB370\uC774\uD130\uB098 \uD504\uB85C\uC138\uC11C\uAC00 \uBC14\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uB370\uC774\uD130\uB97C \uB2F4\uACE0 \uC788\uB294 \uC601\uC5ED\uC774\uB2E4.</p></li><li><p><strong>Cache</strong><br> \uB808\uC9C0\uC2A4\uD130 \uB2E4\uC74C\uC73C\uB85C \uBE60\uB978 \uBA54\uBAA8\uB9AC\uC774\uBA70 CPU \uB0B4\uBD80\uC5D0 \uC874\uC7AC\uD55C\uB2E4. RAM\uC774 CPU \uC678\uBD80\uC5D0 \uC704\uCE58\uD558\uAE30 \uB54C\uBB38\uC5D0 \uC18D\uB3C4 \uCC28\uC774\uB85C \uC778\uD55C \uC131\uB2A5 \uC800\uD558\uB97C \uB9C9\uAE30 \uC704\uD574 \uC0AC\uC6A9\uB41C\uB2E4. \uC18D\uB3C4\uC5D0 \uB530\uB77C L1, L2, L3 \uCE90\uC2DC \uB4F1\uC73C\uB85C \uBD84\uB958\uB418\uBA70, \uC22B\uC790\uAC00 \uC791\uC744\uC218\uB85D \uC6A9\uB7C9\uC774 \uC791\uACE0 \uBE60\uB974\uB2E4. \uC9C0\uC5ED\uC131\uC5D0 \uC758\uAC70\uD558\uC5EC \uC790\uC8FC \uCC38\uC870\uB420\uAC83 \uAC19\uC740 \uB370\uC774\uD130\uB4E4\uC774 \uC800\uC7A5\uB41C\uB2E4. :::</p></li></ul>',27),d=[s];function h(o,p){return e(),r("div",null,d)}var g=a(n,[["render",h],["__file","In-Memory-Database.html.vue"]]);export{g as default};
