import{_ as a,o as e,c as i,e as r}from"./app.c9fb633c.js";const d={},h=r('<h1 id="sql-\u1100\u116A\u11AB\u1105\u1167\u11AB-\u1110\u1175\u11B8" tabindex="-1"><a class="header-anchor" href="#sql-\u1100\u116A\u11AB\u1105\u1167\u11AB-\u1110\u1175\u11B8" aria-hidden="true">#</a> SQL \uAD00\uB828 \uD301</h1><h3 id="distinct" tabindex="-1"><a class="header-anchor" href="#distinct" aria-hidden="true">#</a> DISTINCT</h3><p>DISTINCT\uB97C \uD568\uC218\uCC98\uB7FC <code>DISTINCT(COLUMN)</code> \uC774\uB807\uAC8C \uC0AC\uC6A9\uD558\uC9C0\uB9D0\uC790.<br><code>DISTINCT COLUMN</code> \uC774\uAC8C \uB9DE\uB294 \uD45C\uD604\uC774\uB2E4.</p><h3 id="with" tabindex="-1"><a class="header-anchor" href="#with" aria-hidden="true">#</a> WITH</h3><p>\uC9C8\uC758\uBB38 \uACB0\uACFC\uB97C \uBA54\uBAA8\uB9AC\uC5D0 \uC784\uC2DC \uD14C\uC774\uBE14\uB85C \uC800\uC7A5\uD558\uC5EC, \uBA54\uC778 \uC9C8\uC758\uBB38\uC774 \uC784\uC2DC \uD14C\uC774\uBE14\uC744 \uC77C\uBC18 \uD14C\uC774\uBE14\uCC98\uB7FC \uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4.</p><h3 id="truncate-delete-drop-\u110E\u1161\u110B\u1175" tabindex="-1"><a class="header-anchor" href="#truncate-delete-drop-\u110E\u1161\u110B\u1175" aria-hidden="true">#</a> TRUNCATE, DELETE, DROP \uCC28\uC774</h3><p>DELETE\uB294 \uB370\uC774\uD130\uB294 \uC9C0\uC6CC\uC9C0\uC9C0\uB9CC \uD14C\uC774\uBE14 \uC6A9\uB7C9\uC740 \uC904\uC5B4\uB4E4\uC9C0 \uC54A\uB294\uB2E4. \uC644\uC804\uD788 COMMIT\uC774 \uB418\uB294 \uAC83\uC774 \uC544\uB2C8\uAE30 \uB54C\uBB38\uC774\uB2E4.<br> TRUNCATE, DROP\uC740 auto commit\uC774 \uB0B4\uD3EC\uB418\uC5B4 \uC788\uAE30 \uB584\uBB38\uC5D0 \uC2E4\uD589\uD558\uBA74 \uC774\uC804\uC73C\uB85C \uB3CC\uC544\uAC08 \uC218 \uC5C6\uB2E4.</p><h3 id="\u1102\u1161\u11AF\u110D\u1161-\u110B\u1167\u11AB\u1109\u1161\u11AB-\u1109\u1175-\u110C\u116E\u110B\u1174\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1102\u1161\u11AF\u110D\u1161-\u110B\u1167\u11AB\u1109\u1161\u11AB-\u1109\u1175-\u110C\u116E\u110B\u1174\u110C\u1165\u11B7" aria-hidden="true">#</a> \uB0A0\uC9DC \uC5F0\uC0B0 \uC2DC \uC8FC\uC758\uC810</h3><p>\uB0A0\uC9DC\uB4E4\uC744 \uB354\uD558\uAC70\uB098 \uBE7C\uBA74 \uC6D0\uD558\uB294 \uAC12\uC774 \uC548\uB098\uC634</p><ul><li><strong>\uD574\uACB0 \uBC29\uBC95</strong><ul><li>INTERVAL \uC0AC\uC6A9</li><li>TIMESTAMPDIFF() \uC0AC\uC6A9</li></ul></li></ul><h3 id="datetime-timestamp" tabindex="-1"><a class="header-anchor" href="#datetime-timestamp" aria-hidden="true">#</a> DATETIME, TIMESTAMP</h3><p>DATETIME\uC740 TIMESTAMP\uC5D0 \uBE44\uD574 \uB370\uC774\uD130\uB97C 1\uBC14\uC774\uD2B8 \uB35C \uC0AC\uC6A9\uD558\uC9C0\uB9CC, \uC870\uD68C \uC2DC \uB370\uC774\uD130\uB97C \uBCC0\uD658\uD558\uBBC0\uB85C TIMESTAMP\uB97C \uC0AC\uC6A9\uD558\uC790.</p><h3 id="top-n-query-\u110C\u116E\u110B\u1174\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#top-n-query-\u110C\u116E\u110B\u1174\u110C\u1165\u11B7" aria-hidden="true">#</a> TOP-N QUERY \uC8FC\uC758\uC810</h3><p>ROW_NUMBER, RANK\uC5D0\uC11C ORDER BY \uB97C \uD558\uB290\uB0D0 \uD639\uC740 SELECT\uBB38\uC5D0\uC11C \uD558\uB290\uB0D0\uC758 \uCC28\uC774\uB97C \uBA85\uD655\uD788 \uC54C\uC544\uC57C \uD55C\uB2E4.<br> ROW_NUMBER \uB0B4\uBD80\uC5D0\uC11C \uC4F0\uC774\uB294 ORDER BY\uAC00 \uC6B0\uC120\uC21C\uC704\uB97C \uAC00\uC9C4\uB2E4.</p><h3 id="\u1109\u1175\u1100\u1161\u11AB\u1103\u1162-\u110E\u1165\u1105\u1175" tabindex="-1"><a class="header-anchor" href="#\u1109\u1175\u1100\u1161\u11AB\u1103\u1162-\u110E\u1165\u1105\u1175" aria-hidden="true">#</a> \uC2DC\uAC04\uB300 \uCC98\uB9AC</h3><p>DATE, TIME, DATETIME\uC740 global time zone \uC2DC\uAC04\uC73C\uB85C \uC800\uC7A5\uD558\uACE0 \uAC80\uC0C9\uD568<br> (session time zone\uC744 \uACE0\uB824\uD558\uC9C0 \uC54A\uB294\uB2E4)</p><ul><li>NOW()\uD568\uC218\uB294 \uC800\uC7A5\uC2DC session\uC5D0\uC11C UTC\uB85C \uBCC0\uD658\uD568</li><li>\uD574\uB2F9 \uB370\uC774\uD130\uB97C \uBD88\uB7EC\uC624\uBA74 UTC\uC5D0\uC11C session\uC73C\uB85C \uBCC0\uD658\uD574\uC11C \uAC00\uC838\uC634</li></ul><h3 id="null-\u110E\u1165\u1105\u1175-\u1112\u1161\u11B7\u1109\u116E" tabindex="-1"><a class="header-anchor" href="#null-\u110E\u1165\u1105\u1175-\u1112\u1161\u11B7\u1109\u116E" aria-hidden="true">#</a> NULL \uCC98\uB9AC \uD568\uC218</h3><p>COALESCE()\uAC00 \uD45C\uC900\uD568\uC218\uB2E4. MYSQL\uC758 NULLIF\uB098 NVL\uC740 \uBE44\uD45C\uC900\uD568\uC218\uC774\uBBC0\uB85C \uC0AC\uC6A9\uC744 \uC9C0\uC591\uD558\uC790.</p><h3 id="join" tabindex="-1"><a class="header-anchor" href="#join" aria-hidden="true">#</a> JOIN</h3><ul><li>a.id = b.id\uC640 \uAC19\uC740 \uC870\uAC74\uC744 \uD45C\uD604\uD558\uB824\uBA74 JOIN \uB4A4\uC5D0 <code>USING(id)</code>\uB9CC \uBD99\uC5EC\uC918\uB3C4 \uCDA9\uBD84\uD558\uB2E4.</li><li>\uADF8 \uC678\uC758 \uC870\uAC74\uC2DD\uC740 ON \uC808\uC744 \uC0AC\uC6A9\uD558\uB294\uAC8C \uC88B\uC744\uB4EF</li><li>WHERE\uC808 join === FROM\uC808 \uC870\uC778\uC758 ON \uC808\uACFC \uB3D9\uC77C\uD55C \uCD9C\uB825 \uACB0\uACFC\uB97C \uAC00\uC9D0</li></ul><h3 id="natural-join" tabindex="-1"><a class="header-anchor" href="#natural-join" aria-hidden="true">#</a> Natural JOIN</h3><ul><li>\uC11C\uB85C \uACB9\uCE58\uB294 \uCEEC\uB7FC\uC774 \uD558\uB098\uC77C \uACBD\uC6B0 \uC0AC\uC6A9 \uAC00\uB2A5</li><li>inner join\uC5D0\uC11C a.id = b.id\uB97C \uD55C\uAC83\uACFC \uAC19\uC740 \uACB0\uACFC</li><li>\uC870\uC778\uC5D0 \uC0AC\uC6A9\uB418\uB294 \uCEEC\uB7FC\uC774 \uB531 \uD558\uB098\uB9CC \uB098\uC634 (inner join\uACFC\uC758 \uCC28\uC774\uC810)</li><li>\uC911\uBCF5\uCEEC\uB7FC\uC774 \uD558\uB098\uB85C \uD569\uCCD0\uC838\uC11C \uCD9C\uB825\uB418\uAE30 \uB54C\uBB38\uC5D0 CTAS \uAC00\uB2A5</li><li></li><li><h3 id="ctas" tabindex="-1"><a class="header-anchor" href="#ctas" aria-hidden="true">#</a> CTAS</h3></li><li>ON \uC808 \uC870\uC778\uC744 CTAS\uB85C \uC800\uC7A5\uD558\uB294 \uC2DC\uB3C4\uB294 \uD574\uB2F9 \uCEEC\uB7FC\uC774 2\uAC1C\uAC00 \uCD9C\uB825\uB418\uBBC0\uB85C \uD56D\uC0C1 \uC5D0\uB7EC\uC784</li><li>USING \uC808\uC740 \uD574\uB2F9 \uCEEC\uB7FC\uC744 \uD558\uB098\uB9CC \uCD9C\uB825\uD574\uC8FC\uBBC0\uB85C \uC815\uC0C1\uC801\uC73C\uB85C \uC2E4\uD589\uB428</li></ul>',23),l=[h];function n(t,s){return e(),i("div",null,l)}var c=a(d,[["render",n],["__file","SQL-\uAD00\uB828-\uD301.html.vue"]]);export{c as default};
