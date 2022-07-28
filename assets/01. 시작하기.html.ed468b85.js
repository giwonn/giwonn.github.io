import{_ as n,o as e,c as s,e as i}from"./app.b39a4b27.js";var a="/images/TIL/Infra-Kubernetes/01-cluster.svg";const l={},d=i('<h1 id="\u110F\u116E\u1107\u1165\u1102\u1166\u1110\u1175\u1109\u1173-\u1109\u1165\u11AF\u110E\u1175" tabindex="-1"><a class="header-anchor" href="#\u110F\u116E\u1107\u1165\u1102\u1166\u1110\u1175\u1109\u1173-\u1109\u1165\u11AF\u110E\u1175" aria-hidden="true">#</a> \uCFE0\uBC84\uB124\uD2F0\uC2A4 \uC124\uCE58</h1><h2 id="\u110F\u116E\u1107\u1165\u1102\u1166\u1110\u1175\u1109\u1173\u1105\u1161\u11AB" tabindex="-1"><a class="header-anchor" href="#\u110F\u116E\u1107\u1165\u1102\u1166\u1110\u1175\u1109\u1173\u1105\u1161\u11AB" aria-hidden="true">#</a> \uCFE0\uBC84\uB124\uD2F0\uC2A4\uB780?</h2><p>\uCFE0\uBC84\uB124\uD2F0\uC2A4\uB294 \uCEE8\uD14C\uC774\uB108 \uC624\uCF00\uC2A4\uD2B8\uB808\uC774\uC158(Container Orchestration)\uC774\uB77C\uACE0 \uBD88\uB9B0\uB2E4.<br> \uC544\uB798 \uC774\uBBF8\uC9C0\uB294 \uCFE0\uBC84\uB124\uD2F0\uC2A4 \uD074\uB7EC\uC2A4\uD130\uC758 \uAD6C\uC131 \uC694\uC18C\uC774\uB2E4. <img src="'+a+`" style="background:white;"></p><p>\uC704 \uC774\uBBF8\uC9C0\uB97C \uC694\uC57D\uD558\uC790\uBA74 \uC544\uB798\uC640 \uAC19\uB2E4.</p><ul><li>Pod: \uC5EC\uB7EC \uAC1C\uC758 \uCEE8\uD14C\uC774\uB108\uB97C \uD3EC\uD568\uD560 \uC218 \uC788\uB294 k8s\uC5D0\uC11C \uAC00\uC7A5 \uC791\uC740 \uBC30\uD3EC \uB2E8\uC704</li><li>Node: \uC5EC\uB7EC \uAC1C\uC758 Pod\uC744 \uD3EC\uD568\uD560 \uC218 \uC788\uB294 \uB9AC\uC18C\uC2A4 \uB2E8\uC704\uC774\uB2E4. \uCEE8\uD14C\uC774\uB108\uAC00 \uBC30\uD3EC\uB420 \uBB3C\uB9AC or \uAC00\uC0C1 \uC11C\uBC84\uC774\uBA70 Worker Node\uB77C\uACE0\uB3C4 \uBD80\uB978\uB2E4.</li><li>Control Plane : \uB178\uB4DC\uB97C \uC81C\uC5B4\uD558\uACE0 \uC804\uCCB4 \uD074\uB7EC\uC2A4\uD130\uB97C \uAD00\uB9AC\uD574\uC8FC\uB294 \uCEE8\uD2B8\uB864\uB7EC\uB85C, \uC804\uCCB4\uC801\uC778 \uC81C\uC5B4/\uAD00\uB9AC\uB97C \uD558\uAE30 \uC704\uD55C \uAD00\uB9AC \uC11C\uBC84\uC774\uB2E4.</li></ul><h2 id="\u1109\u1165\u11AF\u110E\u1175\u1107\u1161\u11BC\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#\u1109\u1165\u11AF\u110E\u1175\u1107\u1161\u11BC\u1107\u1165\u11B8" aria-hidden="true">#</a> \uC124\uCE58\uBC29\uBC95</h2><p>minikube\uB97C \uD1B5\uD574 \uC2E4\uC2B5\uC744 \uC9C4\uD589\uD55C\uB2E4.</p><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> windows</h3><p>\uC708\uB3C4\uC6B0 \uC124\uCE58\uBC95\uC740 \uC77C\uB2E8 \uC2A4\uD0B5</p><h3 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> MacOS</h3><ul><li>\uC124\uCE58</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> minikube
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\uBA85\uB839\uC5B4</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \uBC84\uC804\uD655\uC778</span>
minikube version

<span class="token comment"># \uAC00\uC0C1\uBA38\uC2E0 \uC2DC\uC791 (intel \uBC84\uC804)</span>
minikube start --driver<span class="token operator">=</span>hyperkit
<span class="token comment"># \uAC00\uC0C1\uBA38\uC2E0 \uC2DC\uC791 (M1 \uBC84\uC804 - docker desktop \uC124\uCE58 \uD544\uC694)</span>
minikube start --driver<span class="token operator">=</span>docker
<span class="token comment"># driver \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD558\uBA74 virtual box\uB97C \uC0AC\uC6A9</span>
minikube start --driver<span class="token operator">=</span>virtualbox
<span class="token comment"># \uD2B9\uC815 k8s \uBC84\uC804 \uC2E4\uD589</span>
minikube start --kubernetes-version<span class="token operator">=</span>v1.23.1

<span class="token comment"># \uC0C1\uD0DC\uD655\uC778</span>
minikube status

<span class="token comment"># \uC815\uC9C0</span>
minikube stop

<span class="token comment"># \uC0AD\uC81C</span>
minikube delete

<span class="token comment"># ssh \uC811\uC18D</span>
minikube <span class="token function">ssh</span>

<span class="token comment"># ip \uD655\uC778</span>
minikube <span class="token function">ip</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Docker Desktop</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>minikube <span class="token function">service</span> <span class="token punctuation">[</span>service name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC2E4\uD589\uACB0\uACFC</p>`,17),r=[d];function c(t,o){return e(),s("div",null,r)}var v=n(l,[["render",c],["__file","01. \uC2DC\uC791\uD558\uAE30.html.vue"]]);export{v as default};
