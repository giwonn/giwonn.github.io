import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as c,c as l,a as e,b as s,w as t,e as d,d as n,r}from"./app.404da4f0.js";var p="/images/TIL/ETC-Docker/all-in-one-container.png",u="/images/TIL/ETC-Docker/exam-1.png",h="/images/TIL/ETC-Docker/exam-2.jpg";const m={},b=d('<h1 id="_2-1-\u1103\u1169\u110F\u1165-\u110B\u1168\u110C\u1166-\u1109\u1175\u11AF\u1109\u1173\u11B8" tabindex="-1"><a class="header-anchor" href="#_2-1-\u1103\u1169\u110F\u1165-\u110B\u1168\u110C\u1166-\u1109\u1175\u11AF\u1109\u1173\u11B8" aria-hidden="true">#</a> 2-1. \uB3C4\uCEE4 \uC608\uC81C \uC2E4\uC2B5</h1><p>:::tip \uBCF8 \uC2E4\uC2B5\uC740 <code>\uC2DC\uC791\uD558\uC138\uC694 \uB3C4\uCEE4 \uCFE0\uBC84\uB124\uD2F0\uC2A4</code> 31\uD398\uC774\uC9C0\uC758 <code>2.2.5 \uCEE8\uD14C\uC774\uB108 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAD6C\uCD95</code>\uBD80\uD130 \uC2DC\uC791\uD569\uB2C8\uB2E4.</p><p>\uAC00\uC7A5 \uAE30\uBCF8\uC778 <code>\uCEE8\uD14C\uC774\uB108 \uC0DD\uC131, \uC0AD\uC81C</code> \uBC0F <code>\uC774\uBBF8\uC9C0 pull, \uC0AD\uC81C</code> \uAC19\uC740 \uBA85\uB839\uC5B4\uB294 \uB2E4\uB8E8\uC9C0 \uC54A\uACA0\uC2B5\uB2C8\uB2E4.</p>',3),v=e("strong",null,"\uB3C4\uCEE4 \uAE30\uBCF8 \uBA85\uB839\uC5B4",-1),g=n("\uC640 \uAC19\uC774 \uBCF4\uBA74 \uC88B\uC9C0\uB9CC \uB0B4\uC6A9\uC774 \uAE34 \uD3B8\uC774\uBBC0\uB85C"),_=d('<p>\uB2F9\uC7A5 \uC54C\uACE0 \uC788\uC5B4\uC57C \uD560 \uBA85\uB839\uC5B4 \uC704\uC8FC\uB85C \uC694\uC57D\uD558\uC600\uC2B5\uB2C8\uB2E4. :::</p><h3 id="run-\u1106\u1167\u11BC\u1105\u1167\u11BC\u110B\u1165-\u1109\u1175\u11AF\u1112\u1162\u11BC-\u1109\u1175-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u11AF-\u110B\u1169\u11B8\u1109\u1167\u11AB\u1103\u1173\u11AF" tabindex="-1"><a class="header-anchor" href="#run-\u1106\u1167\u11BC\u1105\u1167\u11BC\u110B\u1165-\u1109\u1175\u11AF\u1112\u1162\u11BC-\u1109\u1175-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u11AF-\u110B\u1169\u11B8\u1109\u1167\u11AB\u1103\u1173\u11AF" aria-hidden="true">#</a> run \uBA85\uB839\uC5B4 \uC2E4\uD589 \uC2DC \uC0AC\uC6A9\uD560 \uC635\uC158\uB4E4</h3><ul><li><code>--name {\uCEE8\uD14C\uC774\uB108\uC774\uB984}</code> : \uCEE8\uD14C\uC774\uB108\uC758 \uC774\uB984\uC744 \uC9C0\uC815\uD574\uC900\uB2E4.</li><li><code>-p {host\uD3EC\uD2B8}:{container\uD3EC\uD2B8}</code> : \uD638\uC2A4\uD2B8\uC640 \uCEE8\uD14C\uC774\uB108\uC758 IP\uC640 \uD3EC\uD2B8\uB97C \uBC14\uC778\uB529\uD574\uC900\uB2E4.</li><li><code>-it</code> : \uCEE8\uD14C\uC774\uB108 \uB0B4\uBD80\uC5D0\uC11C \uD130\uBBF8\uB110 \uC785\uB825\uC744 \uD560 \uC218 \uC788\uAC8C \uD574\uC900\uB2E4.</li><li><code>-d</code> : \uCEE8\uD14C\uC774\uB108\uB97C \uBC31\uADF8\uB77C\uC6B4\uB4DC\uC5D0\uC11C \uC2E4\uD589\uC2DC\uCF1C\uC900\uB2E4.</li><li><code>-e</code> : \uCEE8\uD14C\uC774\uB108 \uB0B4\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uD658\uACBD\uBCC0\uC218\uB97C \uC124\uC815\uD574\uC900\uB2E4.</li></ul><h2 id="\u110F\u1165\u11AB\u1110\u1166\u110B\u1175\u1102\u1165-\u110B\u1162\u1111\u1173\u11AF\u1105\u1175\u110F\u1166\u110B\u1175\u1109\u1167\u11AB-\u1100\u116E\u110E\u116E\u11A8" tabindex="-1"><a class="header-anchor" href="#\u110F\u1165\u11AB\u1110\u1166\u110B\u1175\u1102\u1165-\u110B\u1162\u1111\u1173\u11AF\u1105\u1175\u110F\u1166\u110B\u1175\u1109\u1167\u11AB-\u1100\u116E\u110E\u116E\u11A8" aria-hidden="true">#</a> \uCEE8\uD14C\uC774\uB108 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAD6C\uCD95</h2><p>\uC5EC\uB7EC\uAC1C\uC758 \uC11C\uBE44\uC2A4(\uC5B4\uD50C\uB9AC\uCF00\uC774\uC158)\uC744 \uB3D9\uC2DC\uC5D0 \uC2E4\uD589\uC2DC\uCF1C\uC57C \uD55C\uB2E4\uBA74<br> \uC544\uB798 \uC774\uBBF8\uC9C0\uCC98\uB7FC <code>\uD558\uB098\uC758 \uCEE8\uD14C\uC774\uB108\uC5D0 \uC804\uBD80 \uB123\uAC70\uB098</code>, <code>\uC11C\uBE44\uC2A4\uB9C8\uB2E4 \uCEE8\uD14C\uC774\uB108\uD654 \uC2DC\uCF1C\uC8FC\uB294 \uBC29\uBC95</code>\uB3C4 \uC788\uB2E4. <img src="'+p+`" alt="all-in-one-container"></p><p>\uC0AC\uC2E4 All-in-one \uCEE8\uD14C\uC774\uB108 \uBC29\uC2DD\uC744 \uC0AC\uC6A9\uD55C\uB2E4\uBA74... \uCEE8\uD14C\uC774\uB108\uB97C \uC0AC\uC6A9\uD558\uB294 \uC758\uBBF8\uAC00 \uC5C6\uB2E4.</p><p><strong>\uD558\uB098\uC758 \uCEE8\uD14C\uC774\uB108\uC5D0 \uD558\uB098\uC758 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB3D9\uC791</strong>\uC2DC\uD0A4\uBA74 <strong>\uCEE8\uD14C\uC774\uB108\uAC04\uC758 \uB3C5\uB9BD\uC131\uC774 \uBCF4\uC7A5</strong>\uB418\uBBC0\uB85C</p><p>\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uBC84\uC804 \uAD00\uB9AC, \uC18C\uC2A4\uCF54\uB4DC \uBAA8\uB4C8\uD654 \uB4F1\uC774 \uB354\uC6B1 \uC26C\uC6CC\uC9C4\uB2E4.</p><p>\uC774 \uAC19\uC740 \uAD6C\uC870\uB294 <strong>\uB3C4\uCEE4\uC5D0\uC11C \uACF5\uC2DD\uC801\uC73C\uB85C \uAD8C\uC7A5\uD558\uB294 \uAD6C\uC870</strong>\uC774\uAE30\uB3C4 \uD558\uB2E4.</p><br><h2 id="mysql-wordpress-\u1109\u1175\u11AF\u1109\u1173\u11B8" tabindex="-1"><a class="header-anchor" href="#mysql-wordpress-\u1109\u1175\u11AF\u1109\u1173\u11B8" aria-hidden="true">#</a> mysql &amp; wordpress \uC2E4\uC2B5</h2><p>\uC77C\uB2E8 mysql\uACFC wordpress \uCEE8\uD14C\uC774\uB108\uB97C \uC0DD\uC131\uD574\uC900\uB2E4.<br> (\uC5ED\uC2AC\uB798\uC2DC\uB294 \uAC00\uB3C5\uC131\uC744 \uC704\uD574 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.)</p><ul><li><strong>mysql \uCEE8\uD14C\uC774\uB108 \uC0DD\uC131 \uBC0F \uBC31\uADF8\uB77C\uC6B4\uB4DC \uC2E4\uD589</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker run -d \\
--name wordpressdb \\
-e MYSQL_ROOT_PASSWORD=password \\
-e MYSQL_DATABASE=wordpress \\
mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>wordpress \uCEE8\uD14C\uC774\uB108 \uC0DD\uC131 \uBC0F \uBC31\uADF8\uB77C\uC6B4\uB4DC \uC2E4\uD589</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker run -d \\
-e WORDPRESS_DB_HOST=mysql \\
-e WORDPRESS_DB_USER=root \\
-e WORDPRESS_DB_PASSWORD=password \\
--name wordpress \\
--link wordpressdb:mysql \\
-p 80 \\
wordpress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC6CC\uB4DC\uD504\uB808\uC2A4\uC5D0\uC11C <code>-p 80</code>\uC744 \uC785\uB825\uD588\uC73C\uBBC0\uB85C \uD638\uC2A4\uD2B8\uC758 \uD3EC\uD2B8 \uC911 \uD558\uB098\uC640 \uC5F0\uACB0\uB410\uC744 \uAC83\uC774\uB2E4.</p><p>docker ps \uBA85\uB839\uC5B4\uB85C \uC5B4\uB290 \uD3EC\uD2B8\uC640 \uC5F0\uACB0\uB410\uB294\uC9C0 \uD655\uC778\uD560 \uC218 \uC788\uB2E4.<br> (\uC544\uB798 \uC774\uBBF8\uC9C0\uC5D0\uC11C\uB294 \uD638\uC2A4\uD2B8\uC758 3221\uD3EC\uD2B8\uC640 \uC5F0\uACB0\uB418\uC5C8\uB2E4.)</p><p><img src="`+u+`" alt="exam-1"></p><p>:::tip \uD638\uC2A4\uD2B8\uC640 \uBC14\uC778\uB529 \uB41C \uD3EC\uD2B8\uB9CC \uD655\uC778\uD558\uB824\uBA74 <code>docker port {image \uC774\uB984}</code>\uC73C\uB85C \uD655\uC778\uD560 \uC218 \uC788\uB2E4.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># docker port wordpress
80/tcp -&gt; 0.0.0.0:3221
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>::: <br><br> \uC774\uC81C \uC6F9\uBE0C\uB77C\uC6B0\uC800\uC758 \uC8FC\uC18C\uCC3D\uC5D0 <code>\uD638\uC2A4\uD2B8IP:3221</code>\uC744 \uC785\uB825\uD558\uBA74 \uC6CC\uB4DC\uD504\uB808\uC2A4 \uC6F9 \uC11C\uBC84\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uB2E4.</p><p><img src="`+h+`" alt="exam-2"></p><br><h2 id="it\u110B\u116A-d\u110B\u1174-\u110E\u1161\u110B\u1175" tabindex="-1"><a class="header-anchor" href="#it\u110B\u116A-d\u110B\u1174-\u110E\u1161\u110B\u1175" aria-hidden="true">#</a> -it\uC640 -d\uC758 \uCC28\uC774</h2><p>\uC704\uC5D0\uC11C <code>-it</code>\uB294 \uD130\uBBF8\uB110 \uC785\uB825\uC744 \uD560 \uC218 \uC788\uAC8C \uD574\uC8FC\uACE0, <code>-d</code>\uB294 \uBC31\uADF8\uB77C\uC6B4\uB4DC\uB77C\uACE0 \uC124\uBA85\uD558\uC600\uB2E4.</p><p><code>-d</code> \uC635\uC158\uC744 \uC0AC\uC6A9\uD558\uBA74 \uC785\uCD9C\uB825\uC774 \uC5C6\uB294 \uC0C1\uD0DC\uB85C \uCEE8\uD14C\uC774\uB108\uB97C \uBC31\uADF8\uB77C\uC6B4\uB4DC\uC5D0\uC11C \uC2E4\uD589\uD55C\uB2E4.</p><p>\uC785\uCD9C\uB825 \uC5C6\uC774 \uCEE8\uD14C\uC774\uB108\uB97C \uC2E4\uD589\uD55C\uB2E4\uB294\uAC74, <code>\uCEE8\uD14C\uC774\uB108 \uB0B4\uBD80\uC5D0\uC11C \uD504\uB85C\uADF8\uB7A8\uC774 \uD130\uBBF8\uB110\uC744 \uCC28\uC9C0\uD558\uB294</code> <strong>foreground</strong> \uC0C1\uD0DC\uB85C \uC2E4\uD589\uB41C\uB2E4\uB294 \uAC83\uC774\uB2E4.</p><p><strong>Detached \uBAA8\uB4DC\uC778 \uCEE8\uD14C\uC774\uB108(\uC11C\uBC84 \uB4F1)\uB294</strong> \uBC18\uB4DC\uC2DC <strong>\uCEE8\uD14C\uC774\uB108\uAC00 \uC2E4\uD589\uB418\uBA74 \uD504\uB85C\uADF8\uB7A8\uC774 \uC2E4\uD589\uB3FC\uC57C \uD558\uBA70</strong>, foreground \uD504\uB85C\uADF8\uB7A8\uC774 \uC2E4\uD589\uB418\uC9C0 \uC54A\uC73C\uBA74 \uCEE8\uD14C\uC774\uB108\uB294 \uC885\uB8CC\uB41C\uB2E4.</p><p>\uC6B0\uBD84\uD22C, CentOS\uC758 \uACBD\uC6B0\uC5D0\uB294 /bin/bash\uB97C \uCEE4\uB9E8\uB4DC\uB85C \uC124\uC815\uD574 \uC2E4\uD589\uD560 \uC218 \uC788\uAC8C \uD574\uB193\uC544\uC11C <code>-it</code>\uB97C \uD1B5\uD574 \uD130\uBBF8\uB110 \uC785\uB825\uC744 \uD65C\uC131\uD654\uD558\uBA74 \uBC30\uC26C\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uAC8C \uB41C\uB2E4.</p><p>\uD558\uC9C0\uB9CC mysql\uC740 mysqld, \uC6CC\uB4DC\uD504\uB808\uC2A4\uB294 apache2-foregorund\uAC00 \uCEE8\uD14C\uC774\uB108 \uC2DC\uC791\uC2DC\uC5D0 \uB3D9\uC791\uD558\uAC8C \uC124\uC815\uB418\uC5B4 \uC788\uC5B4\uC11C \uD558\uB098\uC758 \uD130\uBBF8\uB110\uC744 \uCC28\uC9C0\uD558\uAC8C \uB418\uBBC0\uB85C \uC0C1\uD638 \uC785\uCD9C\uB825\uC774 \uBD88\uAC00\uB2A5\uD558\uB2E4.</p><p>\uADF8\uB798\uC11C <code>-d</code> \uC635\uC158\uC73C\uB85C \uBC31\uADF8\uB77C\uC6B4\uB4DC\uC5D0\uC11C \uB3D9\uC791\uD558\uAC8C \uD574\uC8FC\uB294 \uAC83\uC774\uB2E4.</p><p>:::tip <strong>\uCEE8\uD14C\uC774\uB108\uB294 \uAC01\uAE30 \uD558\uB098\uC758 \uBAA8\uB2C8\uD130\uB97C \uAC00\uC9C0\uACE0 \uC788\uB2E4</strong>\uACE0 \uC0DD\uAC01\uD558\uBA74 \uC774\uD574\uD558\uAE30 \uC27D\uB2E4.</p><p>\uC608\uB97C \uB4E4\uC5B4, ubuntu \uCEE8\uD14C\uC774\uB108\uB97C \uD558\uB098 \uC0DD\uC131\uD558\uACE0<br><code>docker attach \uCEE8\uD14C\uC774\uB108</code>\uB85C <strong>\uD558\uB098\uC758 \uCEE8\uD14C\uC774\uB108\uB97C \uB450 \uAC1C\uC758 \uD130\uBBF8\uB110\uC5D0\uC11C \uB3D9\uC2DC\uC5D0 \uC2E4\uD589\uC2DC\uCF1C \uBCF4\uBA74</strong><br> \uB9C8\uCE58 \uBAA8\uB2C8\uD130\uB97C \uBCF5\uC81C\uD574\uB193\uC740\uB4EF\uC774 \uD55C\uCABD\uC5D0\uC11C \uC785\uB825\uD558\uBA74 <strong>\uB2E4\uB978 \uD55C\uCABD\uB3C4 \uADF8\uB300\uB85C \uBCF5\uC81C\uB418\uC5B4 \uBCF4\uC778\uB2E4</strong>. :::</p><br><h2 id="exec-\u1106\u1167\u11BC\u1105\u1167\u11BC\u110B\u1165" tabindex="-1"><a class="header-anchor" href="#exec-\u1106\u1167\u11BC\u1105\u1167\u11BC\u110B\u1165" aria-hidden="true">#</a> exec \uBA85\uB839\uC5B4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker exec {\uCEE8\uD14C\uC774\uB108} {\uBA85\uB839}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>exec</code> \uBA85\uB839\uC5B4\uB294 \uCEE8\uD14C\uC774\uB108\uC5D0\uAC8C \uD2B9\uC815 \uBA85\uB839\uC744 \uB0B4\uB9AC\uBA74 \uADF8 \uBA85\uB839\uC744 \uC2E4\uD589\uC2DC\uD0A4\uACE0 \uACB0\uACFC\uAC12\uC744 \uBC18\uD658\uD574\uC900\uB2E4.</p><p>\uD558\uC9C0\uB9CC \uC5EC\uAE30\uC5D0 <code>-it</code> \uC635\uC158\uC744 \uBD99\uC5EC\uC8FC\uACE0 <code>/bin/bash</code>\uB97C \uD638\uCD9C\uD55C\uB2E4\uBA74, \uC0C1\uD638 \uC785\uCD9C\uB825\uC774 \uAC00\uB2A5\uD55C \uC0C1\uD0DC\uB85C \uB9CC\uB4E4\uC5B4\uC900\uB2E4.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># docker exec -it wordpressdb /bin/bash
root@a0897ecfbbae:/# echo $MYSQL_ROOT_PASSWORD
password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uCEE8\uD14C\uC774\uB108\uC5D0\uC11C \uBE60\uC838 \uB098\uC624\uB824\uBA74 Ctrl + P, Q\uB97C \uC785\uB825\uD558\uBA74 \uB41C\uB2E4.</p><p>\uB610\uB294 <code>/bin/bash</code> \uD504\uB85C\uC138\uC2A4\uB97C \uC885\uB8CC\uD558\uBA70 \uBE60\uC838\uB098\uC624\uB824\uBA74 <code>exit</code>\uB97C \uC785\uB825\uD558\uBA74 \uB41C\uB2E4.</p><p><code>exec</code>\uB85C \uCEE8\uD14C\uC774\uB108\uC5D0 \uB4E4\uC5B4\uC654\uC744 \uB54C\uB294 exit\uB97C \uC368\uB3C4 \uCEE8\uD14C\uC774\uB108\uAC00 \uC885\uB8CC\uB418\uC9C0 \uC54A\uB294\uB370,<br> \uC774\uB294 <strong>mysqld \uD504\uB85C\uC138\uC2A4\uAC00 \uC5EC\uC804\uD788 foreground \uBAA8\uB4DC\uB85C \uB3D9\uC791\uD558\uACE0 \uC788\uAE30 \uB54C\uBB38</strong>\uC774\uB2E4.</p><br>`,44),x={id:"link-\u110B\u1169\u11B8\u1109\u1167\u11AB",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#link-\u110B\u1169\u11B8\u1109\u1167\u11AB","aria-hidden":"true"},"#",-1),w=n(" --link \uC635\uC158"),f=d(`<p>:::warning deprecated \uD604\uC7AC\uB294 <strong>\uB3C4\uCEE4 \uBE0C\uB9AC\uC9C0(bridge) \uB124\uD2B8\uC6CC\uD06C</strong>\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD55C\uB2E4\uACE0 \uD55C\uB2E4. :::</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># ...
--link wordpressdb:mysql
# ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB3C4\uCEE4 \uC5D4\uC9C4\uC740 \uCEE8\uD14C\uC774\uB108\uC5D0\uAC8C \uB0B4\uBD80 IP\uB97C <code>172.17.0.2, 3, 4...</code>\uC640 \uAC19\uC774 \uC21C\uCC28\uC801\uC73C\uB85C \uD560\uB2F9\uD55C\uB2E4.</p><p>\uC774\uB294 \uCEE8\uD14C\uC774\uB108\uB97C \uC2DC\uC791\uD560 \uB54C\uB9C8\uB2E4 \uC7AC\uD560\uB2F9\uD558\uB294 \uAC83\uC774\uBBC0\uB85C \uB9E4\uBC88 \uBCC0\uACBD\uB418\uB294 \uCEE8\uD14C\uC774\uB108\uC758 IP\uB85C \uC811\uADFC\uD558\uAE30 \uC5B4\uB835\uB2E4.</p><p><code>--link</code> \uC635\uC158\uC740 \uB0B4\uBD80 IP\uB97C \uC54C \uD544\uC694 \uC5C6\uC774 \uD56D\uC0C1 \uCEE8\uD14C\uC774\uB108\uC5D0 \uBCC4\uBA85(alias)\uB85C \uC811\uADFC\uD558\uAC8C \uD574\uC900\uB2E4.</p><p>\uC704\uC5D0\uC11C <code>wordpressdb:mysql</code>\uB294 <code>wordpressdb</code> \uCEE8\uD14C\uC774\uB108\uB97C <code>mysql</code>\uC774\uB77C\uB294 \uC774\uB984\uC73C\uB85C \uC124\uC815\uD55C\uB2E4\uB294 \uC758\uBBF8\uC774\uB2E4.</p><p>:::tip <code>--link</code> \uC635\uC158\uC5D0 \uC801\uC5B4\uC904 \uCEE8\uD14C\uC774\uB108\uAC00 \uC2E4\uD589 \uC911\uC774\uC9C0 \uC54A\uAC70\uB098 \uC874\uC7AC\uD558\uC9C0 \uC54A\uB294\uB2E4\uBA74, \uC635\uC158\uC744 \uC801\uC6A9\uD560 \uCEE8\uD14C\uC774\uB108 \uB610\uD55C \uC2E4\uD589\uD560 \uC218 \uC5C6\uB2E4.</p><p>\uC989, <code>--link</code> \uC635\uC158\uC740 <strong>\uCEE8\uD14C\uC774\uB108 \uC2E4\uD589 \uC21C\uC11C\uC758 \uC758\uC874\uC131\uB3C4 \uC815\uC758\uD574\uC900\uB2E4</strong>\uB294 \uAC83\uC744 \uC54C \uC218 \uC788\uB2E4. :::</p>`,8);function B(S,E){const o=r("RouterLink"),i=r("Badge");return c(),l("div",null,[b,e("p",null,[s(o,{to:"/TIL/ETC%20-%20Docker/00.%20%EB%8F%84%EC%BB%A4%20%EA%B8%B0%EB%B3%B8%20%EB%AA%85%EB%A0%B9%EC%96%B4.html"},{default:t(()=>[v]),_:1}),g]),_,e("h2",x,[k,w,s(i,{text:"deprecated",type:"warn"})]),f])}var q=a(m,[["render",B],["__file","02-1. \uB3C4\uCEE4 \uC608\uC81C \uC2E4\uC2B5.html.vue"]]);export{q as default};
