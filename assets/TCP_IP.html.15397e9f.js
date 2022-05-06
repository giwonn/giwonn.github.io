import{e as t}from"./app.f43e426a.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";var i="/images/TIL/CS-Network/tcpip.png",e="/images/TIL/CS-Network/web-access-protocol.jpg",a="/images/TIL/CS-Network/network-interface-layer.jpg",r="/images/TIL/CS-Network/end-to-end.jpg",d="/images/TIL/CS-Network/application-layer.jpg",n="/images/TIL/CS-Network/capsulation-sequence.jpg",s="/images/TIL/CS-Network/data-name.jpg",p="/images/TIL/CS-Network/icmp-error-report.jpg",h="/images/TIL/CS-Network/tcp-data-send.jpg",c="/images/TIL/CS-Network/data-division.jpg",o="/images/TIL/CS-Network/udp.png",g="/images/TIL/CS-Network/dhcp.jpg";const u={},P=t('<h1 id="tcp-ip" tabindex="-1"><a class="header-anchor" href="#tcp-ip" aria-hidden="true">#</a> TCP/IP</h1><h2 id="tcp-ip\u1105\u1161\u11AB" tabindex="-1"><a class="header-anchor" href="#tcp-ip\u1105\u1161\u11AB" aria-hidden="true">#</a> TCP/IP\uB780?</h2><p>\uB370\uC774\uD130\uAC00 \uC758\uB3C4\uB41C \uBAA9\uC801\uC9C0\uC5D0 \uB2FF\uC744 \uC218 \uC788\uB3C4\uB85D \uBCF4\uC7A5\uD574\uC8FC\uB294 \uD1B5\uC2E0 \uADDC\uC57D\uC774\uB2E4.</p><p>TCP, IP \uB450\uAC00\uC9C0\uC758 \uD504\uB85C\uD1A0\uCF5C\uB85C \uC774\uB8E8\uC5B4\uC838 \uC788\uB2E4.</p><ul><li>\uD504\uB85C\uD1A0\uCF5C : PC\uC640 \uC2A4\uB9C8\uD2B8\uD3F0 \uB4F1\uC774 \uD1B5\uC2E0\uD558\uB294 \uADDC\uCE59</li><li>\uB124\uD2B8\uC6CC\uD06C \uC544\uD0A4\uD14D\uCC98 : \uBCF5\uC218\uC758 \uD504\uB85C\uD1A0\uCF5C\uC744 \uC870\uD569\uD55C \uAC83 (\uB124\uD2B8\uC6CC\uD06C \uC544\uD0A4\uD14D\uCC98\uB294 \uC6B0\uB9AC\uAC00 \uC0AC\uC6A9\uD558\uB294 \uC5B8\uC5B4\uC5D0 \uD574\uB2F9\uD55C\uB2E4.)</li></ul><p>\uD604\uC7AC\uB294 TCP/IP\uB9CC \uAC70\uC758 \uC0AC\uC6A9\uD55C\uB2E4.</p><h2 id="tcp-ip\u110B\u1174-\u1100\u1168\u110E\u1173\u11BC\u1100\u116E\u110C\u1169" tabindex="-1"><a class="header-anchor" href="#tcp-ip\u110B\u1174-\u1100\u1168\u110E\u1173\u11BC\u1100\u116E\u110C\u1169" aria-hidden="true">#</a> TCP/IP\uC758 \uACC4\uCE35\uAD6C\uC870</h2><p>TCP/IP\uB294 OSI 7\uACC4\uCE35 \uC911 4\uACC4\uCE35\uC73C\uB85C \uC774\uB8E8\uC5B4\uC838 \uC788\uB2E4.<br> (7\uACC4\uCE35\uC740 \uC2E4\uBB34\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0\uAC00 \uC5C6\uC73C\uBBC0\uB85C, \uC790\uC138\uD788 \uB2E4\uB8E8\uC9C0 \uC54A\uACA0\uB2E4.)<br><img src="'+i+'" alt="7\uACC4\uCE35/4\uACC4\uCE35"></p><ul><li>\uC6F9 \uC561\uC138\uC2A4\uC758 \uD504\uB85C\uD1A0\uCF5C \uC870\uD569 <img src="'+e+'" alt="web-access-protocol"></li></ul><h3 id="\u1103\u1166\u110B\u1175\u1110\u1165\u1105\u1173\u11AF-\u110C\u1165\u11AB\u1109\u1169\u11BC\u1112\u1161\u1102\u1173\u11AB-\u110B\u1167\u11A8\u1112\u1161\u11AF\u110B\u1173\u11AF-\u1112\u1161\u1102\u1173\u11AB-\u1100\u1168\u110E\u1173\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1166\u110B\u1175\u1110\u1165\u1105\u1173\u11AF-\u110C\u1165\u11AB\u1109\u1169\u11BC\u1112\u1161\u1102\u1173\u11AB-\u110B\u1167\u11A8\u1112\u1161\u11AF\u110B\u1173\u11AF-\u1112\u1161\u1102\u1173\u11AB-\u1100\u1168\u110E\u1173\u11BC" aria-hidden="true">#</a> \uB370\uC774\uD130\uB97C \uC804\uC1A1\uD558\uB294 \uC5ED\uD560\uC744 \uD558\uB294 \uACC4\uCE35</h3><ul><li><p>\uB124\uD2B8\uC6CC\uD06C \uC778\uD130\uD398\uC774\uC2A4\uCE35 : \uAC19\uC740 \uB124\uD2B8\uC6CC\uD06C \uC548\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uC804\uC1A1\uD558\uB294 \uCE35</p><p>\uD558\uB098\uC758 \uB124\uD2B8\uC6CC\uD06C\uB294 [\uB77C\uC6B0\uD130]\uC640 [\uB808\uC774\uC5B42 or 3 \uC2A4\uC704\uCE58]\uB85C \uAD6C\uD68D\uD558\uB294 \uBC94\uC704\uC774\uB2E4.</p></li></ul><p><img src="'+a+'" alt="network-interface-layer"></p><ul><li>\uC778\uD130\uB137\uCE35 : \uB124\uD2B8\uC6CC\uD06C \uC0AC\uC774\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uC804\uC1A1\uD558\uB294 \uC5ED\uD560\uC744 \uD55C\uB2E4. <ul><li>\uB77C\uC6B0\uD305 : \uB77C\uC6B0\uD130\uC5D0 \uC758\uD55C \uB124\uD2B8\uC6CC\uD06C \uAC04 \uC804\uC1A1\uC744 \uB73B\uD568</li><li>\uC5D4\uB4DC\uD22C\uC5D4\uB4DC \uD1B5\uC2E0 : \uC6D0\uACA9\uC9C0 \uB124\uD2B8\uC6CC\uD06C\uC5D0\uC11C \uCD5C\uC885 \uCD9C\uBC1C\uC9C0\uC640 \uBAA9\uC801\uC9C0 \uC0AC\uC774\uC758 \uB370\uC774\uD130 \uC804\uC1A1\uC744 \uB73B\uD568</li></ul></li></ul><p><img src="'+r+'" alt="end-to-end"></p><h3 id="\u110B\u1162\u1111\u1173\u11AF\u1105\u1175\u110F\u1166\u110B\u1175\u1109\u1167\u11AB\u110B\u1174-\u1103\u1169\u11BC\u110C\u1161\u11A8\u110B\u1173\u11AF-\u110C\u116E\u11AB\u1107\u1175\u1112\u1161\u1102\u1173\u11AB-\u1100\u1168\u110E\u1173\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110B\u1162\u1111\u1173\u11AF\u1105\u1175\u110F\u1166\u110B\u1175\u1109\u1167\u11AB\u110B\u1174-\u1103\u1169\u11BC\u110C\u1161\u11A8\u110B\u1173\u11AF-\u110C\u116E\u11AB\u1107\u1175\u1112\u1161\u1102\u1173\u11AB-\u1100\u1168\u110E\u1173\u11BC" aria-hidden="true">#</a> \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uB3D9\uC791\uC744 \uC900\uBE44\uD558\uB294 \uACC4\uCE35</h3><ul><li><p>\uD2B8\uB79C\uC2A4\uD3EC\uD2B8\uCE35 : \uB370\uC774\uD130\uB97C \uC801\uC808\uD55C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uBC30\uBD84\uD558\uB294 \uC77C\uC744 \uB2F4\uB2F9</p><ul><li>\uD2B8\uB79C\uC2A4\uD3EC\uD2B8\uCE35\uC740 TCP, UDP\uB97C \uD3EC\uD568\uD558\uB294 \uACC4\uCE35\uC774\uB2E4.</li><li>TCP : TCP\uB294 \uB370\uC774\uD130\uAC00 \uC720\uC2E4\uB418\uB354\uB77C\uB3C4 \uADF8 \uC0AC\uC2E4\uC744 \uAC80\uCD9C\uD574 \uB370\uC774\uD130\uB97C \uB2E4\uC2DC \uBCF4\uB0B4\uC900\uB2E4. (\uC5D4\uB4DC\uD22C\uC5D4\uB4DC\uC758 \uC2E0\uB8B0\uC131\uC744 \uD655\uBCF4\uD574\uC900\uB2E4.)</li></ul></li><li><p>\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uCE35 : \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uAE30\uB2A5\uC744 \uC2E4\uD589\uD558\uAE30 \uC704\uD55C \uB370\uC774\uD130\uC758 \uD615\uC2DD\uACFC \uCC98\uB9AC \uC808\uCC28\uB4F1 \uACB0\uC815\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.</p></li></ul><p><img src="'+d+'" alt="application-layer"></p><h2 id="\u1103\u1166\u110B\u1175\u1110\u1165-\u1109\u1169\u11BC\u1109\u116E\u1109\u1175\u11AB-\u1100\u1172\u110E\u1175\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1103\u1166\u110B\u1175\u1110\u1165-\u1109\u1169\u11BC\u1109\u116E\u1109\u1175\u11AB-\u1100\u1172\u110E\u1175\u11A8" aria-hidden="true">#</a> \uB370\uC774\uD130 \uC1A1\uC218\uC2E0 \uADDC\uCE59</h2><ul><li><p>\uD5E4\uB354</p><p>\uAC01 \uD504\uB85C\uD1A0\uCF5C\uC5D0\uB294 \uAC01\uAC01\uC758 \uAE30\uB2A5\uC744 \uC2E4\uD604\uD558\uAE30 \uC704\uD55C \uC81C\uC5B4 \uC815\uBCF4(<strong>\uD5E4\uB354</strong>)\uAC00 \uD544\uC694\uD568</p><ul><li><p>\uCEA1\uC290\uD654</p></li><li><p>\uC5ED\uCEA1\uC290\uD654</p></li></ul></li><li><p>\uCEA1\uC290\uD654 \uC21C\uC11C</p><p><img src="'+n+'" alt="capsulation-sequence"></p></li></ul><h3 id="\u1103\u1166\u110B\u1175\u1110\u1165-\u1109\u116E\u1109\u1175\u11AB-\u110C\u1165\u11AB\u1109\u1169\u11BC\u1112\u1161\u11AF-\u1104\u1162\u110B\u1174-\u1100\u1172\u110E\u1175\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1103\u1166\u110B\u1175\u1110\u1165-\u1109\u116E\u1109\u1175\u11AB-\u110C\u1165\u11AB\u1109\u1169\u11BC\u1112\u1161\u11AF-\u1104\u1162\u110B\u1174-\u1100\u1172\u110E\u1175\u11A8" aria-hidden="true">#</a> \uB370\uC774\uD130 \uC218\uC2E0, \uC804\uC1A1\uD560 \uB54C\uC758 \uADDC\uCE59</h3><ul><li><p>\uB370\uC774\uD130 \uC804\uC1A1</p></li><li><p>\uC6F9\uC11C\uBC84 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uB370\uC774\uD130 \uC218\uC2E0 (\uD5E4\uB354\uB85C \uBAA9\uC801\uC9C0\uB97C \uD655\uC778\uD558\uACE0 \uC218\uC2E0)</p><p><strong>\uC774\uB354\uB137 \u2192 IP \u2192 TCP \u2192 HTTP \u2192 \uC6F9\uBE0C\uB77C\uC6B0\uC800</strong></p></li></ul><ol><li>\uC774\uB354\uB137(\uB124\uD2B8\uC6CC\uD06C \uC778\uD130\uD398\uC774\uC2A4 \uACC4\uCE35) : <ul><li>\uC774\uB354\uB137 \uD5E4\uB354\uB97C \uCC38\uC870\uD558\uC5EC \uC790\uAE30 \uC55E\uC73C\uB85C \uC628 \uB370\uC774\uD130\uC778\uC9C0 \uD655\uC778</li><li>FCS\uB85C \uB370\uC774\uD130\uC5D0 \uC624\uB958\uAC00 \uC5C6\uB294\uC9C0 \uD655\uC778</li><li>\uC774\uB354\uB137 \uD5E4\uB354, FCS\uB97C \uC81C\uAC70\uD568</li></ul></li><li>IP(\uC778\uD130\uB137 \uACC4\uCE35) : <ul><li>IP\uD5E4\uB354\uB97C \uCC38\uC870\uD558\uC5EC \uC790\uAE30 \uC55E\uC73C\uB85C \uC628 \uB370\uC774\uD130\uC778\uC9C0 \uD655\uC778</li><li>IP \uD5E4\uB354\uB97C \uC81C\uAC70\uD568</li></ul></li><li>TCP(\uC804\uC1A1 \uACC4\uCE35) : <ul><li>TCP \uD5E4\uB354\uB97C \uCC38\uC870\uD574 \uC5B4\uB290 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uB370\uC774\uD130\uC778\uC9C0 \uD655\uC778</li><li>TCP \uD5E4\uB354\uB97C \uC81C\uAC70\uD568</li></ul></li><li>HTTP(\uC751\uC6A9 \uACC4\uCE35) : <ul><li>HTTP \uD5E4\uB354\uB97C \uC77D\uACE0 \uC6F9 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD560 \uC218 \uC788\uB3C4\uB85D \uB370\uC774\uD130\uB97C \uCC98\uB9AC</li></ul></li><li>\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC73C\uB85C \uB370\uC774\uD130 \uCC98\uB9AC\uB97C \uB118\uAE40</li><li>HTTP \uD5E4\uB354\uC640 \uADF8\uB4A4\uC758 \uB370\uC774\uD130 \uBD80\uBD84\uC744 \uCC98\uB9AC\uD568</li></ol><h2 id="\u1103\u1166\u110B\u1175\u1110\u1165\u1105\u1173\u11AF-\u1107\u116E\u1105\u1173\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#\u1103\u1166\u110B\u1175\u1110\u1165\u1105\u1173\u11AF-\u1107\u116E\u1105\u1173\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8" aria-hidden="true">#</a> \uB370\uC774\uD130\uB97C \uBD80\uB974\uB294 \uBC29\uBC95</h2><ul><li>\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uCE35 \u2192 \uBA54\uC2DC\uC9C0</li><li>\uD2B8\uB79C\uC2A4\uD3EC\uD2B8\uCE35 \u2192 \uC138\uADF8\uBA3C\uD2B8(TCP) or \uB370\uC774\uD130\uADF8\uB7A8(UDP)</li><li>\uC778\uD130\uB137\uCE35 : IP \uD328\uD0B7 or IP \uB370\uC774\uD130\uADF8\uB7A8</li><li>\uB124\uD2B8\uC6CC\uD06C \uC778\uD130\uD398\uC774\uC2A4\uCE35 : \uD504\uB808\uC784</li></ul><p><img src="'+s+'" alt="data-name"></p><p><strong>HTTP \uBA54\uC2DC\uC9C0</strong> = \uC6F9\uBE0C\uB77C\uC6B0\uC800\uC758 \uB370\uC774\uD130 + HTTP \uD5E4\uB354</p><p><strong>TCP \uC138\uADF8\uBA3C\uD2B8</strong> = HTTP\uBA54\uC2DC\uC9C0 + TCP \uD5E4\uB354</p><p><strong>IP \uD328\uD0B7(IP \uB370\uC774\uD130\uADF8\uB7A8)</strong> = TCP \uC138\uADF8\uBA3C\uD2B8 + IP \uD5E4\uB354</p><p><strong>\uC774\uB354\uB137 \uD504\uB808\uC784</strong> = IP\uD328\uD0B7 + \uC774\uB354\uB137 + FCS</p><h2 id="\u110B\u1175\u11AB\u1110\u1165\u1102\u1166\u11BA\u110B\u1166\u1109\u1165-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1102\u1173\u11AB-\u110C\u116E\u1109\u1169\u110B\u116A-\u1109\u1161\u1109\u1165\u11AF-\u1102\u1166\u1110\u1173\u110B\u116F\u110F\u1173\u110B\u1166\u1109\u1165-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1102\u1173\u11AB-\u110C\u116E\u1109\u1169" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u11AB\u1110\u1165\u1102\u1166\u11BA\u110B\u1166\u1109\u1165-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1102\u1173\u11AB-\u110C\u116E\u1109\u1169\u110B\u116A-\u1109\u1161\u1109\u1165\u11AF-\u1102\u1166\u1110\u1173\u110B\u116F\u110F\u1173\u110B\u1166\u1109\u1165-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1102\u1173\u11AB-\u110C\u116E\u1109\u1169" aria-hidden="true">#</a> \uC778\uD130\uB137\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uC8FC\uC18C\uC640 \uC0AC\uC124 \uB124\uD2B8\uC6CC\uD06C\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uC8FC\uC18C</h2><ul><li><p>IP\uC8FC\uC18C\uB294 \uACF5\uC778/\uC0AC\uC124 IP\uC8FC\uC18C 2\uAC00\uC9C0\uB85C \uB098\uB25C\uB2E4.</p><ol><li><p>\uACF5\uC778\uC8FC\uC18C : \uC778\uD130\uB137 \uD1B5\uC2E0\uC744 \uC704\uD574 \uC0AC\uC6A9\uD558\uB294 IP \uC8FC\uC18C(=\uD37C\uBE14\uB9AD \uC8FC\uC18C, \uAE00\uB85C\uBC8C \uC8FC\uC18C)</p></li><li><p>\uC0AC\uC124\uC8FC\uC18C : \uC0AC\uC124\uB124\uD2B8\uC6CC\uD06C\uC5D0\uC11C \uC774\uC6A9\uD558\uB294 IP\uC8FC\uC18C</p><p>(10.0.0.0 ~ 10.255.255.255)</p><p>(172.16.0.0 ~ 172.31.255.255)</p><p>(192.168.0.0 ~ 192.168.255.255)</p></li></ol></li><li><p>NAT (Network Address Translation)</p><ul><li><p>\uBAA9\uC801\uC9C0\uAC00 \uC0AC\uC124\uC8FC\uC18C\uC778 \uACBD\uC6B0?</p><ol><li>\uC11C\uBC84\uC5D0\uC11C \uC0AC\uC124IP\uB97C \uD3D0\uAE30\uC2DC\uD0B4</li></ol></li><li><p>\uC0AC\uC124\uC5D0\uC11C \uC778\uD130\uB137\uC73C\uB85C \uD1B5\uC2E0\uD558\uB294 \uBC29\uBC95</p><ol><li>\uC778\uD130\uB137\uC73C\uB85C \uC694\uCCAD\uC744 \uC804\uC1A1\uD560 \uB54C, \uCD9C\uBC1C\uC9C0 IP \uC8FC\uC18C\uB97C \uBCC0\uD658\uD568</li><li>\uB77C\uC6B0\uD130\uB294 \uB098\uC911\uC5D0 \uC6D0\uB798\uB300\uB85C \uB418\uB3CC\uB9AC\uAE30 \uC704\uD574, \uBCC0\uD658\uD55C \uC8FC\uC18C\uC758 \uB300\uC751\uC744 NAT \uD14C\uC774\uBE14\uC5D0 \uBCF4\uC874\uD574\uB454\uB2E4.</li><li>\uC694\uCCAD\uC5D0 \uB300\uD574 \uC751\uB2F5\uC774 \uB77C\uC6B0\uD130\uB85C \uB3CC\uC544\uC624\uBA74, \uBAA9\uC801\uC9C0 IP\uC8FC\uC18C\uB97C \uBCC0\uD658\uD55C\uB2E4. \uC774\uB54C, NAT \uD14C\uC774\uBE14\uC5D0 \uBCF4\uC874\uD574 \uB454 \uC8FC\uC18C\uC758 \uB300\uC751\uC744 \uC774\uC6A9\uD55C\uB2E4.</li><li>\uC0AC\uC124\uC8FC\uC18C\uC640 \uACF5\uC778\uC8FC\uC18C\uB97C 1:N \uB300\uC751\uC2DC\uD0A4\uB294 \uC8FC\uC18C\uBCC0\uD658\uC744 NAPT\uB77C\uACE0 \uD55C\uB2E4.</li></ol></li></ul></li></ul><h2 id="\u1103\u1166\u110B\u1175\u1110\u1165\u1100\u1161-\u110C\u1161\u11AF-\u1103\u1169\u110E\u1161\u11A8\u1112\u1162\u11BB\u1102\u1173\u11AB\u110C\u1175-\u1112\u116A\u11A8\u110B\u1175\u11AB\u1112\u1161\u1102\u1173\u11AB-\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#\u1103\u1166\u110B\u1175\u1110\u1165\u1100\u1161-\u110C\u1161\u11AF-\u1103\u1169\u110E\u1161\u11A8\u1112\u1162\u11BB\u1102\u1173\u11AB\u110C\u1175-\u1112\u116A\u11A8\u110B\u1175\u11AB\u1112\u1161\u1102\u1173\u11AB-\u1107\u1165\u11B8" aria-hidden="true">#</a> \uB370\uC774\uD130\uAC00 \uC798 \uB3C4\uCC29\uD588\uB294\uC9C0 \uD655\uC778\uD558\uB294 \uBC95</h2><ul><li>IP\uB294 \uB370\uC774\uD130\uB97C \uBCF4\uB0B4\uB294 \uC2DC\uB3C4\uB97C \uD560 \uBFD0, \uB370\uC774\uD130\uAC00 \uBCF4\uB0B4\uC84C\uB294\uC9C0 \uC54C \uC218 \uC5C6\uB2E4.</li><li><strong>ICMP : IP\uC5D0 \uC758\uD55C \uC5D4\uB4DC\uD22C\uC5D4\uB4DC \uD1B5\uC2E0\uC774 \uC815\uC0C1\uC801\uC73C\uB85C \uC774\uB8E8\uC5B4\uC84C\uB294\uC9C0 \uD655\uC778\uD558\uB294 \uAE30\uB2A5\uC744 \uAC16\uCD98 \uD504\uB85C\uD1A0\uCF5C</strong></li></ul><h2 id="icmp" tabindex="-1"><a class="header-anchor" href="#icmp" aria-hidden="true">#</a> ICMP</h2><ul><li>\uC8FC\uC694 \uAE30\uB2A5 <ol><li>\uC5D0\uB7EC \uB9AC\uD3EC\uD2B8 <ul><li>IP\uD328\uD0B7\uC744 \uD3D0\uAE30\uD588\uB2E4\uBA74, \uCD9C\uBC1C\uC9C0\uB85C \uC5D0\uB7EC\uB9AC\uD3EC\uD2B8\uB97C \uC804\uC1A1\uD55C\uB2E4.</li><li>\uC774 \uC5D0\uB7EC \uB9AC\uD3EC\uD2B8\uB97C <strong>\uB3C4\uB2EC\uBD88\uB2A5 \uBA54\uC2DC\uC9C0</strong>\uB77C\uACE0 \uBD80\uB978\uB2E4.</li></ul></li></ol></li></ul><p><img src="'+p+'" alt="icmp-error-report"></p><ol start="2"><li>\uC9C4\uB2E8 \uAE30\uB2A5</li></ol><ul><li>IP\uC758 \uC5D4\uB4DC\uD22C\uC5D4\uB4DC \uD1B5\uC2E0\uC774 \uAC00\uB2A5\uD55C\uC9C0 \uC9C4\uB2E8\uD55C\uB2E4.</li><li>\uC9C4\uB2E8\uC744 \uC704\uD574\uC11C \uC774\uC6A9\uD558\uB294 \uBA85\uB839\uC73C\uB85C <strong>ping \uCEE4\uB9E8\uB4DC</strong>\uAC00 \uC788\uC2B5\uB2C8\uB2E4.</li></ul><h2 id="arp\u1105\u1161\u11AB" tabindex="-1"><a class="header-anchor" href="#arp\u1105\u1161\u11AB" aria-hidden="true">#</a> ARP\uB780?</h2><ul><li><p>IP \uC8FC\uC18C\uC640 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC2DD\uBCC4\uD558\uAE30 \uC704\uD55C <strong>MAC\uC8FC\uC18C(\uBB3C\uB9AC\uC8FC\uC18C)\uB97C \uB300\uC751</strong>\uC2DC\uCF1C\uC90C</p></li><li><p><strong>IP\uC8FC\uC18C\uC640 MAC\uC8FC\uC18C\uB97C \uB300\uC751</strong>\uC2DC\uD0A4\uB294 \uAC83 \u2192 <strong>\uC8FC\uC18C\uD574\uC11D</strong></p></li><li><p>ARP \uB3D9\uC791 \uD750\uB984</p><ol><li>ARP\uC694\uCCAD\uC73C\uB85C IP\uC8FC\uC18C\uC5D0 \uB300\uC751\uD558\uB294 MAC\uC8FC\uC18C\uB97C \uC9C8\uC758\uD55C\uB2E4.</li><li>\uC9C8\uC758\uBC1B\uC740 IP \uC8FC\uC18C\uB97C \uAC00\uC9C4 \uD638\uC2A4\uD2B8\uAC00 ARP \uC751\uB2F5\uC73C\uB85C MAC \uC8FC\uC18C\uB97C \uC54C\uB824\uC900\uB2E4.</li><li>\uC8FC\uC18C \uD574\uC11D\uD55C IP\uC8FC\uC18C\uC640 MAC\uC8FC\uC18C\uC758 \uB300\uC751\uC744 ARP \uCE90\uC2DC\uC5D0 \uBCF4\uC874\uD55C\uB2E4.</li></ol></li></ul><h2 id="\u1111\u1169\u1110\u1173-\u1107\u1165\u11AB\u1112\u1169" tabindex="-1"><a class="header-anchor" href="#\u1111\u1169\u1110\u1173-\u1107\u1165\u11AB\u1112\u1169" aria-hidden="true">#</a> \uD3EC\uD2B8 \uBC88\uD638</h2><ul><li>\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC2DD\uBCC4\uD558\uB294 \uC2DD\uBCC4 \uBC88\uD638\uC774\uB2E4.</li><li>\uD3EC\uD2B8\uBC88\uD638\uB294 16\uBE44\uD2B8\uC774\uACE0, \uBC94\uC704\uB294 0~65535\uC774\uB2E4. <ol><li>\uC6F0\uB178\uC6B4 \uD3EC\uD2B8 : \uC11C\uBC84 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC6A9\uC73C\uB85C \uC608\uC57D\uB41C \uD3EC\uD2B8\uBC88\uD638</li><li>\uB4F1\uB85D\uB41C \uD3EC\uD2B8 : \uC11C\uBC84 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC2DD\uBCC4\uD558\uAE30 \uC704\uD55C \uD3EC\uD2B8\uBC88\uD638</li><li>\uB3D9\uC801/\uC0AC\uC124 \uD3EC\uD2B8 : \uD1B5\uC2E0\uD560 \uB54C \uB3D9\uC801\uC73C\uB85C \uD560\uB2F9\uB418\uB294 \uD3EC\uD2B8\uBC88\uD638</li></ol></li></ul><br><p><strong>\uD3EC\uD2B8 \uBC88\uD638 \uBC94\uC704</strong></p><table><thead><tr><th style="text-align:center;">\uBA85\uCE6D</th><th style="text-align:center;">\uD3EC\uD2B8 \uBC88\uD638 \uBC94\uC704</th><th style="text-align:center;">\uC758\uBBF8</th></tr></thead><tbody><tr><td style="text-align:center;">\uC6F0\uB178\uC6B4 \uD3EC\uD2B8</td><td style="text-align:center;">0 ~ 1023</td><td style="text-align:center;">\uC11C\uBC84 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC6A9\uC73C\uB85C \uC608\uC57D\uB41C \uD3EC\uD2B8 \uBC88\uD638</td></tr><tr><td style="text-align:center;">\uB4F1\uB85D\uB41C \uD3EC\uD2B8</td><td style="text-align:center;">1024 ~ 49151</td><td style="text-align:center;">\uC790\uC8FC \uC774\uC6A9\uB418\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC11C\uBC84 \uCABD \uD3EC\uD2B8 \uBC88\uD638</td></tr><tr><td style="text-align:center;">\uB3D9\uC801/\uC0AC\uC124\uD3EC\uD2B8</td><td style="text-align:center;">49152 ~ 65535</td><td style="text-align:center;">\uD074\uB77C\uC774\uC5B8\uD2B8 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC6A9 \uD3EC\uD2B8 \uBC88\uD638</td></tr></tbody></table><br><p><strong>\uC8FC\uC694 \uC6F0\uB178\uC6B4 \uD3EC\uD2B8 \uBC88\uD638</strong></p><table><thead><tr><th style="text-align:center;">\uD504\uB85C\uD1A0\uCF5C</th><th style="text-align:center;">TCP</th><th style="text-align:center;">UDP</th></tr></thead><tbody><tr><td style="text-align:center;">HTTP</td><td style="text-align:center;">80</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">HTTPS</td><td style="text-align:center;">443</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">SMTP</td><td style="text-align:center;">25</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">POP3</td><td style="text-align:center;">110</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">IMAP4</td><td style="text-align:center;">143</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">FTP</td><td style="text-align:center;">20/21</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">DHCP</td><td style="text-align:center;">-</td><td style="text-align:center;">67/68</td></tr></tbody></table><h2 id="tcp\u1105\u1161\u11AB" tabindex="-1"><a class="header-anchor" href="#tcp\u1105\u1161\u11AB" aria-hidden="true">#</a> TCP\uB780?</h2><ul><li><p>TCP\uB780 \uC2E0\uB8B0\uC131\uC774 \uC788\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAC04\uC758 \uB370\uC774\uD130 \uC804\uC1A1\uC744 \uD558\uAE30 \uC704\uD55C \uD504\uB85C\uD1A0\uCF5C\uC785\uB2C8\uB2E4.</p><h3 id="tcp\u110B\u1166-\u110B\u1174\u1112\u1161\u11AB-\u1103\u1166\u110B\u1175\u1110\u1165-\u110C\u1165\u11AB\u1109\u1169\u11BC-\u110C\u1165\u11AF\u110E\u1161-3\u110B\u1170\u110B\u1175-\u1112\u1162\u11AB\u1103\u1173\u1109\u1170\u110B\u1175\u110F\u1173" tabindex="-1"><a class="header-anchor" href="#tcp\u110B\u1166-\u110B\u1174\u1112\u1161\u11AB-\u1103\u1166\u110B\u1175\u1110\u1165-\u110C\u1165\u11AB\u1109\u1169\u11BC-\u110C\u1165\u11AF\u110E\u1161-3\u110B\u1170\u110B\u1175-\u1112\u1162\u11AB\u1103\u1173\u1109\u1170\u110B\u1175\u110F\u1173" aria-hidden="true">#</a> TCP\uC5D0 \uC758\uD55C \uB370\uC774\uD130 \uC804\uC1A1 \uC808\uCC28 (3\uC6E8\uC774 \uD578\uB4DC\uC250\uC774\uD06C)</h3><ol><li>TCP \uCEE4\uB125\uC158 \uB9FA\uAE30</li><li>\uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAC04 \uB370\uC774\uD130 \uC1A1\uC218\uC2E0</li><li>TCP \uCEE4\uB125\uC158 \uB04A\uAE30 <img src="'+h+'" alt="tcp-data-send"></li></ol></li></ul><h2 id="tcp-\u1112\u1166\u1103\u1165-\u1112\u1167\u11BC\u1109\u1175\u11A8-\u110C\u116E\u11BC\u110B\u116D\u1112\u1161\u11AB-\u1109\u116E\u11AB\u1109\u1165\u1103\u1162\u1105\u1169" tabindex="-1"><a class="header-anchor" href="#tcp-\u1112\u1166\u1103\u1165-\u1112\u1167\u11BC\u1109\u1175\u11A8-\u110C\u116E\u11BC\u110B\u116D\u1112\u1161\u11AB-\u1109\u116E\u11AB\u1109\u1165\u1103\u1162\u1105\u1169" aria-hidden="true">#</a> TCP \uD5E4\uB354 \uD615\uC2DD (\uC911\uC694\uD55C \uC21C\uC11C\uB300\uB85C!)</h2><ol><li>\uD3EC\uD2B8 \uBC88\uD638 (\uC801\uC808\uD55C \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD504\uB85C\uD1A0\uCF5C\uC5D0 \uB370\uC774\uD130\uB97C \uBC30\uBD84\uD560 \uC218 \uC788\uAE30 \uB54C\uBB38)</li><li>\uC2DC\uD000\uC2A4 \uBC88\uD638</li><li>ACK \uBC88\uD638</li></ol><h2 id="\u1103\u1166\u110B\u1175\u1110\u1165-\u1107\u116E\u11AB\u1112\u1161\u11AF-\u1100\u116E\u110C\u1169" tabindex="-1"><a class="header-anchor" href="#\u1103\u1166\u110B\u1175\u1110\u1165-\u1107\u116E\u11AB\u1112\u1161\u11AF-\u1100\u116E\u110C\u1169" aria-hidden="true">#</a> \uB370\uC774\uD130 \uBD84\uD560 \uAD6C\uC870</h2><ul><li>\uB370\uC774\uD130\uB97C \uBD84\uD560\uD558\uB294 \uAE30\uC900 \uB2E8\uC704\uB294 MSS(Maximum Segment Size)\uB77C\uACE0 \uBD80\uB978\uB2E4.</li><li>MSS\uC758 \uD45C\uC900 \uD06C\uAE30\uB294 1460byte\uC774\uB2E4. <img src="'+c+'" alt="data-division"></li></ul><h2 id="udp\u1105\u1161\u11AB" tabindex="-1"><a class="header-anchor" href="#udp\u1105\u1161\u11AB" aria-hidden="true">#</a> UDP\uB780?</h2><ul><li>\uB370\uC774\uD130\uB97C \uC801\uC808\uD55C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uBC30\uBD84\uD558\uB294 \uAE30\uB2A5\uB9CC \uC788\uB294 \uD504\uB85C\uD1A0\uCF5C</li><li>\uD655\uC778\uC740 \uC804\uD600 \uD558\uC9C0 \uC54A\uC74C</li></ul><h3 id="udp\u110B\u1174-\u110C\u1161\u11BC\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#udp\u110B\u1174-\u110C\u1161\u11BC\u110C\u1165\u11B7" aria-hidden="true">#</a> UDP\uC758 \uC7A5\uC810</h3><ol><li>\uD655\uC778\uC744 \uD558\uC9C0 \uC54A\uC73C\uBBC0\uB85C TCP\uC5D0 \uBE44\uD574 \uC804\uC1A1\uD6A8\uC728\uC774 \uC88B\uB2E4.</li><li>\uB370\uC774\uD130\uB97C \uC77C\uBC29\uC801\uC73C\uB85C \uBCF4\uC5EC\uC8FC\uB294 \uC2A4\uD2B8\uB9AC\uBC0D \uAC19\uC740 \uBC29\uC2DD\uC5D0 \uD2B9\uD788 \uC88B\uB2E4. <img src="'+o+'" alt="udp"></li></ol><h2 id="\u1102\u1166\u1110\u1173\u110B\u116F\u110F\u1173\u110B\u1174-\u110C\u1165\u11AB\u1112\u116A\u1107\u1165\u11AB\u1112\u1169\u1107\u116E" tabindex="-1"><a class="header-anchor" href="#\u1102\u1166\u1110\u1173\u110B\u116F\u110F\u1173\u110B\u1174-\u110C\u1165\u11AB\u1112\u116A\u1107\u1165\u11AB\u1112\u1169\u1107\u116E" aria-hidden="true">#</a> \uB124\uD2B8\uC6CC\uD06C\uC758 \uC804\uD654\uBC88\uD638\uBD80</h2><ul><li>\uC774\uB984\uD574\uC11D <ol><li>\uC0AC\uC6A9\uC790\uAC00 IP\uC8FC\uC18C\uB97C \uC774\uD574\uD558\uAE30 \uC5B4\uB835\uAE30 \uB54C\uBB38\uC5D0 \uD638\uC2A4\uD2B8\uBA85\uC744 \uBD99\uC5EC\uC11C \uAD6C\uBD84\uC744 \uC27D\uAC8C \uD55C\uB2E4. a. URL\uACFC \uBA54\uC77C\uC8FC\uC18C\uC5D0 \uD638\uC2A4\uD2B8\uBA85 \uC790\uCCB4\uB098 \uD638\uC2A4\uD2B8\uBA85\uC744 \uAD6C\uD558\uAE30 \uC704\uD55C \uC815\uBCF4\uAC00 \uD3EC\uD568\uB418\uC5B4\uC788\uB2E4.</li></ol></li><li>DNS : URL\uB4F1\uC73C\uB85C \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC8FC\uC18C\uB97C \uC9C0\uC815\uD558\uBA74, \uD638\uC2A4\uD2B8 \uC774\uB984\uC5D0 \uB300\uC751\uD558\uB294 IP\uC8FC\uC18C\uB97C \uC790\uB3D9\uC73C\uB85C \uAD6C\uD568 (\uAC00\uC7A5 \uB9CE\uC774 \uC4F0\uC774\uB294 \uC774\uB984\uD574\uC11D)</li></ul><h2 id="dns-\u1109\u1165\u1107\u1165" tabindex="-1"><a class="header-anchor" href="#dns-\u1109\u1165\u1107\u1165" aria-hidden="true">#</a> DNS \uC11C\uBC84</h2><ul><li>DNS\uB97C \uC774\uC6A9\uD558\uB824\uBA74 DNS \uC11C\uBC84\uAC00 \uD544\uC694\uD558\uB2E4.</li><li>DNS\uC11C\uBC84\uC5D0 \uBBF8\uB9AC \uD638\uC2A4\uD2B8\uBA85\uACFC IP \uC8FC\uC18C\uC758 \uB300\uC751\uAD00\uACC4\uB97C \uB4F1\uB85D\uD574\uB454\uB2E4.</li><li>DNS \uB9AC\uC878\uBC84 : DNS\uC11C\uBC84\uC5D0 \uC9C8\uC758\uD558\uB294 \uAE30\uB2A5</li></ul><h2 id="\u1109\u1165\u11AF\u110C\u1165\u11BC-\u110C\u1161\u1103\u1169\u11BC\u1112\u116A" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u11AF\u110C\u1165\u11BC-\u110C\u1161\u1103\u1169\u11BC\u1112\u116A" aria-hidden="true">#</a> \uC124\uC815 \uC790\uB3D9\uD654</h2><ul><li>DHCP : \uC124\uC815\uC744 \uC790\uB3D9\uD654 \uD558\uB294 \uD504\uB85C\uD1A0\uCF5C 1. DHCP DISCOVER 2. DHCP OFFER 3. DHCP REQUEST 4. DHCP ACK <img src="'+g+'" alt="dhcp"></li></ul><h1 id="\u1101\u1173\u11BA" tabindex="-1"><a class="header-anchor" href="#\u1101\u1173\u11BA" aria-hidden="true">#</a> \uB057!</h1>',65);function x(T,C){return P}var y=l(u,[["render",x]]);export{y as default};
