import{e as a}from"./app.f43e426a.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const i={},s=a('<h1 id="webassembly-\u1105\u1161\u11AB" tabindex="-1"><a class="header-anchor" href="#webassembly-\u1105\u1161\u11AB" aria-hidden="true">#</a> WebAssembly \uB780?</h1><p>WebAssembly\uB780 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC2E4\uD589\uAC00\uB2A5\uD55C \uC0C8\uB85C\uC6B4 \uD30C\uC77C \uD615\uC2DD\uC774\uB2E4. (.wasm \uD655\uC7A5\uC790)</p><p>Java, C++, Go \uB4F1 \uB2E4\uB978 \uC5B8\uC5B4\uB85C \uC791\uC131\uD55C \uD30C\uC77C\uC744 wasm \uD655\uC7A5\uC790\uB85C \uBCC0\uD658\uD558\uC5EC \uC6F9\uC5D0\uC11C \uC2E4\uD589\uC2DC\uD0AC \uC218 \uC788\uAC8C \uD574\uC900\uB2E4.</p><h2 id="javascript\u110B\u116A\u110B\u1174-\u110E\u1161\u110B\u1175\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#javascript\u110B\u116A\u110B\u1174-\u110E\u1161\u110B\u1175\u110C\u1165\u11B7" aria-hidden="true">#</a> Javascript\uC640\uC758 \uCC28\uC774\uC810</h2><ul><li><p>Javascript : JS\uD30C\uC77C -&gt; parsing -&gt; Bytecode \uBCC0\uD658 -&gt; \uC778\uD130\uD504\uB9AC\uD130\uB97C \uD1B5\uD574 \uC2E4\uD589 (\uD06C\uB86C\uC5D0\uC11C\uB294 Ignition\uC774\uB77C\uACE0 \uBD80\uB984) (\uBC18\uBCF5\uB418\uB294 \uCF54\uB4DC\uB294 \uAE30\uACC4\uC5B4\uC5D0 \uAC00\uAE4C\uC6B4 Optimizied Code\uB85C \uBC14\uAFD4\uC918\uC11C \uC2E4\uD589\uD574\uC90C (\uCD5C\uC801\uD654 \uCEF4\uD30C\uC77C\uB7EC\uC778 Turbofan\uC774\uB77C\uB294\uAC78 \uC0AC\uC6A9\uD568)</p></li><li><p>Webassembly : wasm\uD30C\uC77C -&gt; \uC2E4\uD589 (\uB9C8\uCC2C\uAC00\uC9C0\uB85C \uBC18\uBCF5\uB418\uB294 \uCF54\uB4DC\uB294 Optimizing \uAC00\uB2A5\uD568)</p></li></ul><h2 id="\u1110\u1173\u11A8\u110C\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1110\u1173\u11A8\u110C\u1175\u11BC" aria-hidden="true">#</a> \uD2B9\uC9D5</h2><ol><li>\uC77C\uBC18\uC801\uC73C\uB85C Javascript\uBCF4\uB2E4 \uBE60\uB974\uB2E4.</li><li>C/C++ \uB4F1\uC758 \uC5B8\uC5B4\uC5D0\uB294 GC\uB300\uC2E0 \uBA54\uBAA8\uB9AC\uB97C \uC218\uB3D9\uC73C\uB85C \uAD00\uB9AC\uD560 \uC218 \uC788\uB2E4. (\uC774\uAC74 \uAC1C\uC778\uC801\uC73C\uB85C \uD070 \uC7A5\uC810\uAC19\uC74C... \uC77C\uAD00\uC801\uC778 \uC131\uB2A5\uC744 \uAE30\uB300\uD560 \uC218 \uC788\uC744 \uB4EF)</li><li>Sandboxing \uB418\uC5B4\uC788\uC5B4, \uC678\uBD80\uC640 \uC18C\uD1B5\uD558\uAE30 \uC704\uD574\uC120 \uBA85\uC2DC\uC801\uD568\uC218 \uB610\uB294 syscall\uC744 \uC774\uC6A9\uD574\uC57C \uD55C\uB2E4.</li></ol><h2 id="\u1112\u116A\u11AF\u110B\u116D\u11BC-\u110B\u1168" tabindex="-1"><a class="header-anchor" href="#\u1112\u116A\u11AF\u110B\u116D\u11BC-\u110B\u1168" aria-hidden="true">#</a> \uD65C\uC6A9 \uC608</h2><ul><li>\uAC8C\uC784\uACFC \uAC19\uC740 CPU\uB97C \uB9CE\uC774 \uC0AC\uC6A9\uD558\uB294 \uACC4\uC0B0</li><li>Javascript\uC5D0\uC11C \uB290\uB9B0 \uBD80\uBD84\uB9CC Webassembly\uB85C \uAD6C\uD604 (DOM \uC870\uC791\uC774\uB098 \uD50C\uB7AB\uD3FC API\uB97C \uB9CE\uC774 \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 JS\uAC00 \uB354 \uC801\uC808\uD568)</li><li></li></ul>',9);function r(l,t){return s}var h=e(i,[["render",r]]);export{h as default};
