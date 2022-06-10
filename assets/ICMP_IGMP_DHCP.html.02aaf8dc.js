import{e as i}from"./app.2600dd1f.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const e={},a=i('<h1 id="icmp-igmp-dhcp" tabindex="-1"><a class="header-anchor" href="#icmp-igmp-dhcp" aria-hidden="true">#</a> ICMP / IGMP / DHCP</h1><h2 id="icmp-internet-control-message-protocol" tabindex="-1"><a class="header-anchor" href="#icmp-internet-control-message-protocol" aria-hidden="true">#</a> ICMP (Internet Control Message Protocol)</h2><ul><li>\uC778\uD130\uB137 \uACC4\uCE35 \uD504\uB85C\uD1A0\uCF5C</li><li>\uC804\uC1A1 \uC624\uB958 \uC81C\uC5B4 <ul><li>IP\uB294 \uBE44\uC5F0\uACB0\uC131 \uBE44\uC2E0\uB8B0\uC131 \uC804\uC1A1 \uC11C\uBE44\uC2A4 (\uC2E4\uD328 \uAC00\uB2A5\uC131 \uC788\uC74C)</li><li>IP \uB370\uC774\uD130\uADF8\uB7A8 \uC804\uC1A1\uC758 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD560 \uACBD\uC6B0 \uC624\uB958 \uBA54\uC2DC\uC9C0 \uB610\uB294 \uC81C\uC5B4 \uBA54\uC2DC\uC9C0\uB97C \uC81C\uACF5\uD574\uC8FC\uB294 \uD504\uB85C\uD1A0\uCF5C</li><li>IP \uB370\uC774\uD130\uADF8\uB7A8\uC758 \uC804\uC1A1\uACFC\uC815\uC5D0\uC11C \uBC1C\uC0DD\uD558\uB294 \uC624\uB958\uB97C \uB77C\uC6B0\uD130\uB098 \uBC1C\uC2E0\uC9C0 \uD638\uC2A4\uD2B8\uC5D0\uAC8C \uBCF4\uACE0\uD558\uB294 \uBA54\uCEE4\uB2C8\uC998\uC744 \uC81C\uACF5</li></ul></li></ul><h3 id="icmp-\u1106\u1166\u1109\u1175\u110C\u1175-\u1112\u1167\u11BC\u1109\u1175\u11A8" tabindex="-1"><a class="header-anchor" href="#icmp-\u1106\u1166\u1109\u1175\u110C\u1175-\u1112\u1167\u11BC\u1109\u1175\u11A8" aria-hidden="true">#</a> ICMP \uBA54\uC2DC\uC9C0 \uD615\uC2DD</h3><ol><li>\uC720\uD615 (8 bit) : ICMP \uBA54\uC2DC\uC9C0 \uC2DD\uBCC4</li><li>\uCF54\uB4DC (8 bit) : \uC720\uD615\uC5D0 \uAD00\uD55C \uCD94\uAC00 \uC815\uBCF4</li><li>\uAC80\uC0AC\uD569 (16 bit) : \uC804\uCCB4 ICMP \uBA54\uC2DC\uC9C0\uC758 \uC624\uB958 \uAC80\uC0AC</li><li>ICMP \uBA54\uC2DC\uC9C0 (32 bit) : \uC624\uB958 \uBC0F \uC81C\uC5B4 \uBA54\uC2DC\uC9C0\uB85C\uC11C echo, timestamp \uB4F1</li></ol><h3 id="icmp-\u1106\u1166\u1109\u1175\u110C\u1175-\u110B\u1172\u1112\u1167\u11BC" tabindex="-1"><a class="header-anchor" href="#icmp-\u1106\u1166\u1109\u1175\u110C\u1175-\u110B\u1172\u1112\u1167\u11BC" aria-hidden="true">#</a> ICMP \uBA54\uC2DC\uC9C0 \uC720\uD615</h3><ol><li>\uC624\uB958 \uBCF4\uACE0 \uBA54\uC2DC\uC9C0(error reporting)</li></ol><ul><li>ICMP\uB294 \uC624\uB958\uB97C \uC218\uC815\uD558\uC9C0 \uC54A\uACE0, \uB2E8\uC9C0 \uBCF4\uACE0\uB9CC \uC218\uD589</li><li>IP \uC8FC\uC18C\uB97C \uC774\uC6A9\uD558\uC5EC \uBC1C\uC2E0\uC9C0\uC5D0 \uC624\uB958 \uC804\uC1A1</li></ul><ol start="2"><li>\uC9C8\uC758 \uBA54\uC2DC\uC9C0(simple query)</li></ol><ul><li>\uC77C\uBD80 \uB124\uD2B8\uC6CC\uD06C\uC758 \uBB38\uC81C\uB97C \uC9C4\uB2E8</li></ul><h3 id="\u110B\u1169\u1105\u1172\u1107\u1169\u1100\u1169-\u1106\u1166\u1109\u1175\u110C\u1175-\u110B\u1172\u1112\u1167\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110B\u1169\u1105\u1172\u1107\u1169\u1100\u1169-\u1106\u1166\u1109\u1175\u110C\u1175-\u110B\u1172\u1112\u1167\u11BC" aria-hidden="true">#</a> \uC624\uB958\uBCF4\uACE0 \uBA54\uC2DC\uC9C0 \uC720\uD615</h3><ul><li>\uBAA9\uC801\uC9C0 \uB3C4\uB2EC \uBD88\uAC00 (Destination Unreachable)</li><li>\uBC1C\uC2E0\uC9C0 \uC5B5\uC81C (Source Quench) : \uD63C\uC7A1\uC73C\uB85C \uC778\uD574 \uB370\uC774\uD130\uADF8\uB7A8\uC758 \uD3D0\uAE30\uB97C \uC54C\uB9BC</li><li>\uC7AC\uC9C0\uC815 (Redirection) : \uB77C\uC6B0\uD130\uAC00 \uCD5C\uC801 \uACBD\uB85C\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC744\uB54C \uCD5C\uC801\uACBD\uB85C \uBC1C\uACAC\uC2DC \uC54C\uB9AC\uAE30 \uC704\uD574 \uC0AC\uC6A9</li><li>\uC2DC\uAC04 \uCD08\uACFC (Time Exceeded) : IP \uD5E4\uB354\uC758 TTL \uD544\uB4DC \uAC12 \uB9CC\uB8CC\uB97C \uB098\uD0C0\uB0C4</li><li>\uD30C\uB77C\uBBF8\uD130 \uBB38\uC81C (Parameter Problems) : \uB370\uC774\uD130\uADF8\uB7A8\uC758 \uD5E4\uB354 \uC5D0\uB7EC \uBB38\uC81C \uBC1C\uC0DD\uC2DC \uC0AC\uC6A9</li></ul><h3 id="\u110C\u1175\u11AF\u110B\u1174-\u1106\u1166\u1109\u1175\u110C\u1175-\u110B\u1172\u1112\u1167\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110C\u1175\u11AF\u110B\u1174-\u1106\u1166\u1109\u1175\u110C\u1175-\u110B\u1172\u1112\u1167\u11BC" aria-hidden="true">#</a> \uC9C8\uC758 \uBA54\uC2DC\uC9C0 \uC720\uD615</h3><ul><li>Echo request and reply (\uC5D0\uCF54 \uC694\uCCAD/\uC751\uB2F5) : IP \uD638\uC2A4\uD2B8 \uC9C4\uB2E8\uC5D0 \uC0AC\uC6A9</li><li>Timestamp request and reply (\uC655\uBCF5\uC2DC\uAC04 \uC694\uCCAD/\uC751\uB2F5)</li><li>Address mask request and reply (\uC8FC\uC18C \uB9C8\uC2A4\uD06C \uC694\uCCAD/\uC751\uB2F5) : \uD638\uC2A4\uD2B8\uAC00 \uB77C\uC6B0\uD130\uC5D0\uAC8C \uC11C\uBE0C\uB137 \uB9C8\uC2A4\uD06C \uC694\uCCAD</li><li>Router solicitation and advertisement (\uB77C\uC6B0\uD130 \uC8FC\uC18C \uC694\uCCAD/\uC751\uB2F5) : \uB2E4\uB978 \uB124\uD2B8\uC6CC\uD06C\uC758 \uD638\uC2A4\uD2B8\uC5D0\uAC8C \uB370\uC774\uD130 \uC804\uC1A1 \uC2DC \uC790\uC2E0\u3147\uC758 \uB124\uD2B8\uC6CC\uD06C\uC5D0 \uC5F0\uACB0\uB41C \uB77C\uC6B0\uD130 \uC8FC\uC18C \uC694\uCCAD</li></ul><h2 id="igmp-internet-group-management-protocol" tabindex="-1"><a class="header-anchor" href="#igmp-internet-group-management-protocol" aria-hidden="true">#</a> IGMP (Internet Group Management Protocol)</h2><ul><li>\uC778\uD130\uB137\uC5D0\uC11C <strong>multicast \uC11C\uBE44\uC2A4</strong>\uB97C \uC704\uD574 \uC0AC\uC6A9\uB418\uB294 \uD504\uB85C\uD1A0\uCF5C</li><li>IP \uD638\uC2A4\uD2B8\uAC00 \uC5B4\uB5A4 \uBA40\uD2F0\uCE90\uC2A4\uD2B8 \uADF8\uB8F9\uC5D0 \uCC38\uAC00\uD558\uACE0 \uC788\uB294\uC9C0\uB97C \uBA40\uD2F0\uCE90\uC2A4\uD2B8 \uB77C\uC6B0\uD130\uC5D0 \uD1B5\uBCF4\uD558\uB294 \uD504\uB85C\uD1A0\uCF5C</li></ul><div class="custom-container tip"><p class="custom-container-title">Multicast</p><ul><li>multicast : 1-to-many</li><li>unicast : 1-to-1</li><li>broadcast : 1-to-all</li></ul></div><h3 id="ip-\u1106\u1165\u11AF\u1110\u1175\u110F\u1162\u1109\u1173\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#ip-\u1106\u1165\u11AF\u1110\u1175\u110F\u1162\u1109\u1173\u1110\u1173" aria-hidden="true">#</a> IP \uBA40\uD2F0\uCE90\uC2A4\uD2B8</h3><ul><li>\uD074\uB798\uC2A4 D \uC8FC\uC18C \uC0AC\uC6A9 ( 1110 + \uBA40\uD2F0\uCE90\uC2A4\uD2B8 \uC8FC\uC18C(28bit) )</li><li>\uC608\uC57D\uB41C \uBA40\uD2F0\uCE90\uC2A4\uD2B8 \uC8FC\uC18C <ul><li>220.0.0.0 : \uC608\uC57D</li><li>224.0.0.1 : \uBAA8\uB4E0 \uD638\uC2A4\uD2B8 \uBC0F \uB77C\uC6B0\uD130</li><li>224.0.0.2 : \uBAA8\uB4E0 \uB77C\uC6B0\uD130</li></ul></li></ul><h3 id="igmp-\u1106\u1166\u1109\u1175\u110C\u1175" tabindex="-1"><a class="header-anchor" href="#igmp-\u1106\u1166\u1109\u1175\u110C\u1175" aria-hidden="true">#</a> IGMP \uBA54\uC2DC\uC9C0</h3><ol><li>\uC720\uD615 (8 bit)</li></ol><ul><li>Query (general/special)</li><li>Membership report</li><li>Leave report</li></ul><ol start="2"><li>\uCD5C\uB300 \uC751\uB2F5\uC2DC\uAC04 (8 bit) : \uC9C8\uC758\uC5D0 \uC751\uB2F5\uD574\uC57C \uD558\uB294 \uCD5C\uB300 \uD5C8\uC6A9 \uC2DC\uAC04</li><li>\uAC80\uC0AC\uD569 (16 bit) : \uC804\uCCB4 IGMP \uBA54\uC2DC\uC9C0\uC758 \uC624\uB958 \uAC80\uC0AC</li><li>\uADF8\uB8F9 \uC8FC\uC18C (32 bit) : \uBA45\uD2F0\uCE90\uC2A4\uD2B8 \uC8FC\uC18C (\uD074\uB798\uC2A4 D IP \uC8FC\uC18C)</li></ol><h2 id="dhcp-dynamic-host-configuration-protocol" tabindex="-1"><a class="header-anchor" href="#dhcp-dynamic-host-configuration-protocol" aria-hidden="true">#</a> DHCP (Dynamic Host Configuration Protocol)</h2><h3 id="ip-\u110C\u116E\u1109\u1169-\u1100\u116A\u11AB\u1105\u1175-\u1107\u1161\u11BC\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#ip-\u110C\u116E\u1109\u1169-\u1100\u116A\u11AB\u1105\u1175-\u1107\u1161\u11BC\u1107\u1165\u11B8" aria-hidden="true">#</a> IP \uC8FC\uC18C \uAD00\uB9AC \uBC29\uBC95</h3><ul><li>Host Table : \uBAA8\uB4E0 IP \uC8FC\uC18C\uC640 \uC774\uC640 mapping\uB418\uB294 \uD638\uC2A4\uD2B8 \uC774\uB984\uC73C\uB85C \uAD6C\uC131\uB41C \uD14C\uC774\uBE14 (\uC815\uC801)</li><li>DNS : \uACC4\uCE35\uC801 \uAD6C\uC870 \uBC0F \uBD84\uC0B0 \uAD00\uB9AC \uD2B9\uC131\uC744 \uC9C0\uB2D8 (\uC815\uC801)</li><li>BOOTP : \uB514\uC2A4\uD06C\uAC00 \uC5C6\uB294 \uD638\uC2A4\uD2B8\uC5D0 \uB300\uD574 \uC8FC\uC18C \uBC0F \uC124\uC815 \uC815\uBCF4\uB97C \uC790\uB3D9\uC801\uC73C\uB85C \uD560\uB2F9\uD558\uACE0 \uAD00\uB9AC\uD558\uB294 \uD504\uB85C\uD1A0\uCF5C (\uB3D9\uC801\uC73C\uB85C IP \uC8FC\uC18C\uB97C \uD560\uB2F9)</li><li>DHCP (\uB3D9\uC801)</li></ul><h3 id="dhcp-\u110C\u1165\u11BC\u110B\u1174" tabindex="-1"><a class="header-anchor" href="#dhcp-\u110C\u1165\u11BC\u110B\u1174" aria-hidden="true">#</a> DHCP \uC815\uC758</h3><ul><li>\uC751\uC6A9 \uACC4\uCE35 \uD504\uB85C\uD1A0\uCF5C</li><li>IP \uC8FC\uC18C\uB97C \uC911\uC559\uC5D0\uC11C \uAD00\uB9AC\uD558\uACE0 \uAC1C\uBCC4 \uD074\uB77C\uC774\uC5B8\uD2B8\uB4E4\uC5D0\uAC8C \uC790\uB3D9\uC73C\uB85C IP \uC8FC\uC18C\uB97C \uD560\uB2F9\uD574\uC8FC\uB294 \uD504\uB85C\uD1A0\uCF5C</li><li>BOOTP\uC5D0\uC11C \uBC1C\uC804\uB41C \uB3D9\uC801 \uC8FC\uC18C \uD560\uB2F9 \uD504\uB85C\uD1A0\uCF5C\uB85C\uC11C IP \uC8FC\uC18C \uC7AC\uC0AC\uC6A9\uC774 \uAC00\uB2A5\uD568</li><li>DHCP \uBA54\uC2DC\uC9C0 \uD615\uC2DD\uC740 BOOTP\uC640 \uB3D9\uC77C\uD568</li></ul><div class="custom-container tip"><p class="custom-container-title">\uB3D9\uC801 \uC8FC\uC18C \uD560\uB2F9 \uD504\uB85C\uD1A0\uCF5C</p><p>IP \uC8FC\uC18C pool\uC5D0\uC11C \uC0AC\uC6A9 \uAC00\uB2A5\uD55C IP \uC8FC\uC18C\uB97C \uC120\uD0DD\uD558\uC5EC \uC6D0\uD558\uB294 \uD638\uC2A4\uD2B8\uC5D0\uAC8C \uC77C\uC815 \uAE30\uAC04 \uC784\uB300\uD574\uC90C</p></div><h3 id="dhcp-\u1102\u1166\u1110\u1173\u110B\u116F\u110F\u1173-\u1100\u116E\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#dhcp-\u1102\u1166\u1110\u1173\u110B\u116F\u110F\u1173-\u1100\u116E\u1109\u1165\u11BC" aria-hidden="true">#</a> DHCP \uB124\uD2B8\uC6CC\uD06C \uAD6C\uC131</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>\uC774\uAC70 \uC2DC\uD5D8\uBB38\uC81C 4\uC9C0\uC120\uB2E4\uD615\uC73C\uB85C \uB098\uC62C\uB4EF?</p></div><ul><li>DHCP Server</li><li>DHCP Client</li><li>BOOTP/DHCP Relay Agent</li></ul><h3 id="dhcp-\u1111\u1173\u1105\u1169\u1110\u1169\u110F\u1169\u11AF-ip-\u110C\u116E\u1109\u1169-\u110C\u1161\u1103\u1169\u11BC-\u1112\u1161\u11AF\u1103\u1161\u11BC" tabindex="-1"><a class="header-anchor" href="#dhcp-\u1111\u1173\u1105\u1169\u1110\u1169\u110F\u1169\u11AF-ip-\u110C\u116E\u1109\u1169-\u110C\u1161\u1103\u1169\u11BC-\u1112\u1161\u11AF\u1103\u1161\u11BC" aria-hidden="true">#</a> DHCP \uD504\uB85C\uD1A0\uCF5C - IP \uC8FC\uC18C \uC790\uB3D9 \uD560\uB2F9</h3><ol><li>DHCP<strong>DISCOVER</strong> - DHCP\uAC00 \uC874\uC7AC\uD558\uB294\uC9C0 \uD655\uC778</li><li>DHCP<strong>OFFER</strong> - DHCP\uC5D0\uAC8C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 IP \uD655\uC778</li><li>DHCP<strong>REQUEST</strong> - DHCP IP\uC8FC\uC18C \uD560\uB2F9 \uC694\uCCAD</li><li>DHCP<strong>ACK</strong> - \uD074\uB77C\uC774\uC5B8\uD2B8\uC5D0\uAC8C IP\uC8FC\uC18C, \uC11C\uBE0C\uB137\uB9C8\uC2A4\uD06C, DNS \uC11C\uBC84 \uC8FC\uC18C, WINS \uC11C\uBC84, \uB178\uB4DC \uC720\uD615, \uB3C4\uBA54\uC778 \uC774\uB984 \uD560\uB2F9</li></ol>',34);function r(t,o){return a}var c=l(e,[["render",r]]);export{c as default};
