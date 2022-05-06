var Re=Object.defineProperty,Ae=Object.defineProperties;var ze=Object.getOwnPropertyDescriptors;var ve=Object.getOwnPropertySymbols;var He=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable;var he=(a,e,t)=>e in a?Re(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,Q=(a,e)=>{for(var t in e||(e={}))He.call(e,t)&&he(a,t,e[t]);if(ve)for(var t of ve(e))je.call(e,t)&&he(a,t,e[t]);return a},Z=(a,e)=>Ae(a,ze(e));import{r as O,o as l,c as p,b as y,f as L,i as j,j as g,k as me,h as s,F as D,l as A,m as x,a as b,t as I,n as N,p as G,q as ge,s as w,v as U,x as ee,w as P,y as fe,z as S,d as W,A as q,B as Ge,C as Fe,D as Ue,E as te,G as ne,H as V,I as _e,J as be,K as z,u as ke,g as T,T as ye,L as We,M as K,N as J,O as qe,P as Ve,Q as ae,R as $e,S as Le,e as Ke,U as Je,V as X,W as se,X as Xe,Y as Ye,Z as Qe}from"./app.f43e426a.js";import{_ as we}from"./plugin-vue_export-helper.21dcd24c.js";const Ze={},et={class:"theme-default-content custom"};function tt(a,e){const t=O("Content");return l(),p("div",et,[y(t)])}var nt=we(Ze,[["render",tt]]);const at={key:0,class:"features"},st=L({setup(a){const e=j(),t=g(()=>me(e.value.features)?e.value.features:[]);return(u,r)=>s(t).length?(l(),p("div",at,[(l(!0),p(D,null,A(s(t),m=>(l(),p("div",{key:m.title,class:"feature"},[b("h2",null,I(m.title),1),b("p",null,I(m.details),1)]))),128))])):x("",!0)}});var rt=Object.defineProperty,ot=Object.defineProperties,lt=Object.getOwnPropertyDescriptors,Se=Object.getOwnPropertySymbols,it=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable,xe=(a,e,t)=>e in a?rt(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;const Ce="Please consider reporting this error at https://github.com/laymonage/giscus/issues/new.";function Y(a){return`[giscus] An error occurred. Error message: "${a}".`}function Ie(a){const e=document.querySelector(`meta[property='og:${a}'],meta[name='${a}']`);return e?e.content:""}function ct(){const a=document.getElementById("giscus-css")||document.createElement("style");a.id="giscus-css",a.textContent=`
    .giscus, .giscus-frame {
      width: 100%;
    }
    .giscus-frame {
      border: none;
      color-scheme: normal;
    }
  `,document.head.prepend(a)}const dt=L({props:{repo:{type:String,required:!0},repoId:{type:String,required:!0},category:String,categoryId:String,mapping:{type:String,required:!0},term:String,lang:{type:String,default:"en"},theme:{type:String,default:"light"},reactionsEnabled:{type:String,default:"1"},emitMetadata:{type:String,default:"0"},inputPosition:{type:String,default:"bottom"}},setup(a){const e=N(""),t=g(()=>{return function({repo:h,repoId:c,category:n="",categoryId:o="",mapping:i,term:d="",theme:v="light",reactionsEnabled:_="1",emitMetadata:k="0",inputPosition:$="bottom",lang:f="en",session:C,origin:E}){const M=new URL(location.href);M.searchParams.delete("giscus");const H=M.toString(),B={origin:E=E||H,session:C,theme:v,reactionsEnabled:_,emitMetadata:k,inputPosition:$,repo:h,repoId:c,category:n,categoryId:o,description:Ie("description")};switch(i){case"url":B.term=H;break;case"title":B.term=document.title;break;case"og:title":B.term=Ie("title");break;case"specific":B.term=d;break;case"number":B.number=d;break;case"pathname":default:B.term=location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}return`https://giscus.app/${f}/widget?${new URLSearchParams(B)}`}((r=((h,c)=>{for(var n in c||(c={}))it.call(c,n)&&xe(h,n,c[n]);if(Se)for(var n of Se(c))ut.call(c,n)&&xe(h,n,c[n]);return h})({},a),m={session:e.value},ot(r,lt(m))));var r,m});G(()=>{const r=location.href,m=new URL(r),h=localStorage.getItem("giscus-session");if(e.value=m.searchParams.get("giscus")||"",e.value)localStorage.setItem("giscus-session",JSON.stringify(e.value)),m.searchParams.delete("giscus"),history.replaceState(void 0,document.title,m.toString());else if(h)try{e.value=JSON.parse(h||"")||""}catch(c){e.value="",localStorage.removeItem("giscus-session"),console.warn(`${Y(c==null?void 0:c.message)} Session has been cleared.`)}}),G(ct);const u=N();return G(()=>{const r=function(m,h=null){return function(c){if(c.origin!=="https://giscus.app")return;const{data:n}=c;if(typeof n!="object"||!n.giscus||(h&&n.giscus.resizeHeight&&(h.style.height=`${n.giscus.resizeHeight}px`),!n.giscus.error))return;const o=n.giscus.error;if(o.includes("Bad credentials")||o.includes("Invalid state value")){if(localStorage.getItem("giscus-session")!==null)return localStorage.removeItem("giscus-session"),m(),void console.warn(`${Y(o)} Session has been cleared.`);console.error(`${Y(o)} No session is stored initially. ${Ce}`)}o.includes("Discussion not found")?console.warn(`[giscus] ${o}. A new discussion will be created if a comment/reaction is submitted.`):console.error(`${Y(o)} ${Ce}`)}}(()=>e.value="",u.value);window.addEventListener("message",r),ge(()=>window.removeEventListener("message",r))}),()=>y("div",{className:"giscus"},[y("iframe",{className:"giscus-frame",title:"Comments",scrolling:"no",src:t.value,ref:u},null)])}}),pt={components:{Giscus:dt},setup(){const a=N(localStorage.getItem("vuepress-color-scheme"));return{theme:g(()=>a==="dark"?"dark":"light")}}};function vt(a,e,t,u,r,m){const h=O("Giscus");return l(),w(h,{repo:"giwonn/giwonn.github.io",repoId:"R_kgDOGRKbbA",category:"\uBE14\uB85C\uADF8 \uB313\uAE00",categoryId:"DIC_kwDOGRKbbM4CBGca",mapping:"title",term:"Welcome to Giwon's Github-blog",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:u.theme,lang:"en"},null,8,["theme"])}var Pe=we(pt,[["render",vt]]);const ht=["href","rel","target","aria-label"],mt=L({inheritAttrs:!1}),R=L(Z(Q({},mt),{props:{item:{type:Object,required:!0}},setup(a){const e=a,t=U(),u=Ue(),{item:r}=ee(e),m=g(()=>q(r.value.link)),h=g(()=>Ge(r.value.link)||Fe(r.value.link)),c=g(()=>{if(!h.value){if(r.value.target)return r.value.target;if(m.value)return"_blank"}}),n=g(()=>c.value==="_blank"),o=g(()=>!m.value&&!h.value&&!n.value),i=g(()=>{if(!h.value){if(r.value.rel)return r.value.rel;if(n.value)return"noopener noreferrer"}}),d=g(()=>r.value.ariaLabel||r.value.text),v=g(()=>{const $=Object.keys(u.value.locales);return $.length?!$.some(f=>f===r.value.link):r.value.link!=="/"}),_=g(()=>v.value?t.path.startsWith(r.value.link):!1),k=g(()=>o.value?r.value.activeMatch?new RegExp(r.value.activeMatch).test(t.path):_.value:!1);return($,f)=>{const C=O("RouterLink"),E=O("ExternalLinkIcon");return s(o)?(l(),w(C,fe({key:0,class:{"router-link-active":s(k)},to:s(r).link,"aria-label":s(d)},$.$attrs),{default:P(()=>[S($.$slots,"before"),W(" "+I(s(r).text)+" ",1),S($.$slots,"after")]),_:3},16,["class","to","aria-label"])):(l(),p("a",fe({key:1,class:"external-link",href:s(r).link,rel:s(i),target:s(c),"aria-label":s(d)},$.$attrs),[S($.$slots,"before"),W(" "+I(s(r).text)+" ",1),s(n)?(l(),w(E,{key:0})):x("",!0),S($.$slots,"after")],16,ht))}}})),gt={class:"hero"},ft={key:0,id:"main-title"},_t={key:1,class:"description"},bt={key:2,class:"actions"},kt=L({setup(a){const e=j(),t=te(),u=ne(),r=g(()=>u.value&&e.value.heroImageDark!==void 0?e.value.heroImageDark:e.value.heroImage),m=g(()=>e.value.heroText===null?null:e.value.heroText||t.value.title||"Hello"),h=g(()=>e.value.heroAlt||m.value||"hero"),c=g(()=>e.value.tagline===null?null:e.value.tagline||t.value.description||"Welcome to your VuePress site"),n=g(()=>me(e.value.actions)?e.value.actions.map(({text:i,link:d,type:v="primary"})=>({text:i,link:d,type:v})):[]),o=()=>{if(!r.value)return null;const i=V("img",{src:_e(r.value),alt:h.value});return e.value.heroImageDark===void 0?i:V(be,i)};return(i,d)=>(l(),p("header",gt,[y(o),s(m)?(l(),p("h1",ft,I(s(m)),1)):x("",!0),s(c)?(l(),p("p",_t,I(s(c)),1)):x("",!0),s(n).length?(l(),p("p",bt,[(l(!0),p(D,null,A(s(n),v=>(l(),w(R,{key:v.text,class:z(["action-button",[v.type]]),item:v},null,8,["class","item"]))),128))])):x("",!0)]))}}),yt={class:"home"},$t=L({setup(a){return(e,t)=>(l(),p("main",yt,[y(kt),y(st),y(nt),y(Pe)]))}}),Lt=L({setup(a){const e=ke(),t=te(),u=T(),r=ne(),m=g(()=>u.value.home||e.value),h=g(()=>t.value.title),c=g(()=>r.value&&u.value.logoDark!==void 0?u.value.logoDark:u.value.logo),n=()=>{if(!c.value)return null;const o=V("img",{class:"logo",src:_e(c.value),alt:h.value});return u.value.logoDark===void 0?o:V(be,o)};return(o,i)=>{const d=O("RouterLink");return l(),w(d,{to:s(m)},{default:P(()=>[y(n),s(h)?(l(),p("span",{key:0,class:z(["site-name",{"can-hide":s(c)}])},I(s(h)),3)):x("",!0)]),_:1},8,["to"])}}}),Ee=L({setup(a){const e=u=>{u.style.height=u.scrollHeight+"px"},t=u=>{u.style.height=""};return(u,r)=>(l(),w(ye,{name:"dropdown",onEnter:e,onAfterEnter:t,onBeforeLeave:e},{default:P(()=>[S(u.$slots,"default")]),_:3}))}}),wt=["aria-label"],St={class:"title"},xt=b("span",{class:"arrow down"},null,-1),Ct=["aria-label"],It={class:"title"},Pt={class:"navbar-dropdown"},Et={class:"navbar-dropdown-subtitle"},Tt={key:1},Dt={class:"navbar-dropdown-subitem-wrapper"},Mt=L({props:{item:{type:Object,required:!0}},setup(a){const e=a,{item:t}=ee(e),u=g(()=>t.value.ariaLabel||t.value.text),r=N(!1),m=U();We(()=>m.path,()=>{r.value=!1});const h=n=>{n.detail===0?r.value=!r.value:r.value=!1},c=(n,o)=>o[o.length-1]===n;return(n,o)=>(l(),p("div",{class:z(["navbar-dropdown-wrapper",{open:r.value}])},[b("button",{class:"navbar-dropdown-title",type:"button","aria-label":s(u),onClick:h},[b("span",St,I(s(t).text),1),xt],8,wt),b("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":s(u),onClick:o[0]||(o[0]=i=>r.value=!r.value)},[b("span",It,I(s(t).text),1),b("span",{class:z(["arrow",r.value?"down":"right"])},null,2)],8,Ct),y(Ee,null,{default:P(()=>[K(b("ul",Pt,[(l(!0),p(D,null,A(s(t).children,i=>(l(),p("li",{key:i.text,class:"navbar-dropdown-item"},[i.children?(l(),p(D,{key:0},[b("h4",Et,[i.link?(l(),w(R,{key:0,item:i,onFocusout:d=>c(i,s(t).children)&&i.children.length===0&&(r.value=!1)},null,8,["item","onFocusout"])):(l(),p("span",Tt,I(i.text),1))]),b("ul",Dt,[(l(!0),p(D,null,A(i.children,d=>(l(),p("li",{key:d.link,class:"navbar-dropdown-subitem"},[y(R,{item:d,onFocusout:v=>c(d,i.children)&&c(i,s(t).children)&&(r.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(l(),w(R,{key:1,item:i,onFocusout:d=>c(i,s(t).children)&&(r.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[J,r.value]])]),_:1})],2))}}),Te=a=>decodeURI(a).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Bt=(a,e)=>{if(e.hash===a)return!0;const t=Te(e.path),u=Te(a);return t===u},De=(a,e)=>a.link&&Bt(a.link,e)?!0:a.children?a.children.some(t=>De(t,e)):!1,Me=a=>!q(a)||/github\.com/.test(a)?"GitHub":/bitbucket\.org/.test(a)?"Bitbucket":/gitlab\.com/.test(a)?"GitLab":/gitee\.com/.test(a)?"Gitee":null,Nt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Ot=({docsRepo:a,editLinkPattern:e})=>{if(e)return e;const t=Me(a);return t!==null?Nt[t]:null},Rt=({docsRepo:a,docsBranch:e,docsDir:t,filePathRelative:u,editLinkPattern:r})=>{if(!u)return null;const m=Ot({docsRepo:a,editLinkPattern:r});return m?m.replace(/:repo/,q(a)?a:`https://github.com/${a}`).replace(/:branch/,e).replace(/:path/,qe(`${Ve(t)}/${u}`)):null},At={key:0,class:"navbar-items"},Be=L({setup(a){const e=()=>{const o=ae(),i=ke(),d=te(),v=T();return g(()=>{var C,E;const _=Object.keys(d.value.locales);if(_.length<2)return[];const k=o.currentRoute.value.path,$=o.currentRoute.value.fullPath;return[{text:(C=v.value.selectLanguageText)!=null?C:"unknown language",ariaLabel:(E=v.value.selectLanguageAriaLabel)!=null?E:"unkown language",children:_.map(M=>{var oe,le,ie,ue,ce,de;const H=(le=(oe=d.value.locales)==null?void 0:oe[M])!=null?le:{},B=(ue=(ie=v.value.locales)==null?void 0:ie[M])!=null?ue:{},re=`${H.lang}`,Ne=(ce=B.selectLanguageName)!=null?ce:re;let F;if(re===d.value.lang)F=$;else{const pe=k.replace(i.value,M);o.getRoutes().some(Oe=>Oe.path===pe)?F=pe:F=(de=B.home)!=null?de:M}return{text:Ne,link:F}})}]})},t=()=>{const o=T(),i=g(()=>o.value.repo),d=g(()=>i.value?Me(i.value):null),v=g(()=>i.value&&!q(i.value)?`https://github.com/${i.value}`:i.value),_=g(()=>v.value?o.value.repoLabel?o.value.repoLabel:d.value===null?"Source":d.value:null);return g(()=>!v.value||!_.value?[]:[{text:_.value,link:v.value}])},u=o=>$e(o)?Le(o):o.children?Z(Q({},o),{children:o.children.map(u)}):o,m=(()=>{const o=T();return g(()=>(o.value.navbar||[]).map(u))})(),h=e(),c=t(),n=g(()=>[...m.value,...h.value,...c.value]);return(o,i)=>s(n).length?(l(),p("nav",At,[(l(!0),p(D,null,A(s(n),d=>(l(),p("div",{key:d.text,class:"navbar-item"},[d.children?(l(),w(Mt,{key:0,item:d},null,8,["item"])):(l(),w(R,{key:1,item:d},null,8,["item"]))]))),128))])):x("",!0)}}),zt=["title"],Ht={class:"icon",focusable:"false",viewBox:"0 0 32 32"},jt=Ke('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Gt=[jt],Ft={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Ut=b("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Wt=[Ut],qt=L({setup(a){const e=T(),t=ne(),u=()=>{t.value=!t.value};return(r,m)=>(l(),p("button",{class:"toggle-dark-button",title:s(e).toggleDarkMode,onClick:u},[K((l(),p("svg",Ht,Gt,512)),[[J,!s(t)]]),K((l(),p("svg",Ft,Wt,512)),[[J,s(t)]])],8,zt))}}),Vt=["title"],Kt=b("div",{class:"icon","aria-hidden":"true"},[b("span"),b("span"),b("span")],-1),Jt=[Kt],Xt=L({emits:["toggle"],setup(a){const e=T();return(t,u)=>(l(),p("div",{class:"toggle-sidebar-button",title:s(e).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:u[0]||(u[0]=r=>t.$emit("toggle"))},Jt,8,Vt))}}),Yt=L({emits:["toggle-sidebar"],setup(a){const e=T(),t=N(null),u=N(null),r=N(0),m=g(()=>r.value?{maxWidth:r.value+"px"}:{}),h=g(()=>e.value.darkMode);G(()=>{const n=719,o=c(t.value,"paddingLeft")+c(t.value,"paddingRight"),i=()=>{var d;window.innerWidth<=n?r.value=0:r.value=t.value.offsetWidth-o-(((d=u.value)==null?void 0:d.offsetWidth)||0)};i(),window.addEventListener("resize",i,!1),window.addEventListener("orientationchange",i,!1)});function c(n,o){var v,_,k;const i=(k=(_=(v=n==null?void 0:n.ownerDocument)==null?void 0:v.defaultView)==null?void 0:_.getComputedStyle(n,null))==null?void 0:k[o],d=Number.parseInt(i,10);return Number.isNaN(d)?0:d}return(n,o)=>{const i=O("NavbarSearch");return l(),p("header",{ref_key:"navbar",ref:t,class:"navbar"},[y(Xt,{onToggle:o[0]||(o[0]=d=>n.$emit("toggle-sidebar"))}),b("span",{ref_key:"navbarBrand",ref:u},[y(Lt)],512),b("div",{class:"navbar-items-wrapper",style:Je(s(m))},[S(n.$slots,"before"),y(Be,{class:"can-hide"}),S(n.$slots,"after"),s(h)?(l(),w(qt,{key:0})):x("",!0),y(i)],4)],512)}}}),Qt={class:"page-meta"},Zt={key:0,class:"meta-item edit-link"},en={key:1,class:"meta-item last-updated"},tn={class:"meta-item-label"},nn={class:"meta-item-info"},an={key:2,class:"meta-item contributors"},sn={class:"meta-item-label"},rn={class:"meta-item-info"},on=["title"],ln=W(", "),un=L({setup(a){const e=()=>{const n=T(),o=X(),i=j();return g(()=>{var E,M,H;if(!((M=(E=i.value.editLink)!=null?E:n.value.editLink)!=null?M:!0))return null;const{repo:v,docsRepo:_=v,docsBranch:k="main",docsDir:$="",editLinkText:f}=n.value;if(!_)return null;const C=Rt({docsRepo:_,docsBranch:k,docsDir:$,filePathRelative:o.value.filePathRelative,editLinkPattern:(H=i.value.editLinkPattern)!=null?H:n.value.editLinkPattern});return C?{text:f!=null?f:"Edit this page",link:C}:null})},t=()=>{const n=T(),o=X(),i=j();return g(()=>{var _,k,$,f;return!((k=(_=i.value.lastUpdated)!=null?_:n.value.lastUpdated)!=null?k:!0)||!(($=o.value.git)==null?void 0:$.updatedTime)?null:new Date((f=o.value.git)==null?void 0:f.updatedTime).toLocaleString()})},u=()=>{const n=T(),o=X(),i=j();return g(()=>{var v,_,k,$;return((_=(v=i.value.contributors)!=null?v:n.value.contributors)!=null?_:!0)&&($=(k=o.value.git)==null?void 0:k.contributors)!=null?$:null})},r=T(),m=e(),h=t(),c=u();return(n,o)=>{const i=O("ClientOnly");return l(),p("footer",Qt,[s(m)?(l(),p("div",Zt,[y(R,{class:"meta-item-label",item:s(m)},null,8,["item"])])):x("",!0),s(h)?(l(),p("div",en,[b("span",tn,I(s(r).lastUpdatedText)+": ",1),y(i,null,{default:P(()=>[b("span",nn,I(s(h)),1)]),_:1})])):x("",!0),s(c)&&s(c).length?(l(),p("div",an,[b("span",sn,I(s(r).contributorsText)+": ",1),b("span",rn,[(l(!0),p(D,null,A(s(c),(d,v)=>(l(),p(D,{key:v},[b("span",{class:"contributor",title:`email: ${d.email}`},I(d.name),9,on),v!==s(c).length-1?(l(),p(D,{key:0},[ln],64)):x("",!0)],64))),128))])])):x("",!0)])}}}),cn={key:0,class:"page-nav"},dn={class:"inner"},pn={key:0,class:"prev"},vn={key:1,class:"next"},hn=L({setup(a){const e=n=>n===!1?null:$e(n)?Le(n):Xe(n)?n:!1,t=(n,o,i)=>{const d=n.findIndex(v=>v.link===o);if(d!==-1){const v=n[d+i];return(v==null?void 0:v.link)?v:null}for(const v of n)if(v.children){const _=t(v.children,o,i);if(_)return _}return null},u=j(),r=se(),m=U(),h=g(()=>{const n=e(u.value.prev);return n!==!1?n:t(r.value,m.path,-1)}),c=g(()=>{const n=e(u.value.next);return n!==!1?n:t(r.value,m.path,1)});return(n,o)=>s(h)||s(c)?(l(),p("nav",cn,[b("p",dn,[s(h)?(l(),p("span",pn,[y(R,{item:s(h)},null,8,["item"])])):x("",!0),s(c)?(l(),p("span",vn,[y(R,{item:s(c)},null,8,["item"])])):x("",!0)])])):x("",!0)}}),mn={class:"page"},gn={class:"theme-default-content"},fn=L({setup(a){return(e,t)=>{const u=O("Content");return l(),p("main",mn,[S(e.$slots,"top"),b("div",gn,[y(u)]),y(un),y(hn),S(e.$slots,"bottom")])}}}),_n={class:"sidebar-item-children"},bn=L({props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(a){const e=a,{item:t,depth:u}=ee(e),r=U(),m=ae(),h=g(()=>De(t.value,r)),c=g(()=>({"sidebar-item":!0,"sidebar-heading":u.value===0,active:h.value,collapsible:t.value.collapsible})),n=N(!0),o=N(void 0);return t.value.collapsible&&(n.value=h.value,o.value=()=>{n.value=!n.value},m.afterEach(()=>{n.value=h.value})),(i,d)=>{var _;const v=O("SidebarItem",!0);return l(),p("li",null,[s(t).link?(l(),w(R,{key:0,class:z(s(c)),item:s(t)},null,8,["class","item"])):(l(),p("p",{key:1,tabindex:"0",class:z(s(c)),onClick:d[0]||(d[0]=(...k)=>o.value&&o.value(...k)),onKeydown:d[1]||(d[1]=Ye((...k)=>o.value&&o.value(...k),["enter"]))},[W(I(s(t).text)+" ",1),s(t).collapsible?(l(),p("span",{key:0,class:z(["arrow",n.value?"down":"right"])},null,2)):x("",!0)],34)),((_=s(t).children)==null?void 0:_.length)?(l(),w(Ee,{key:2},{default:P(()=>[K(b("ul",_n,[(l(!0),p(D,null,A(s(t).children,k=>(l(),w(v,{key:`${s(u)}${k.text}${k.link}`,item:k,depth:s(u)+1},null,8,["item","depth"]))),128))],512),[[J,n.value]])]),_:1})):x("",!0)])}}}),kn={key:0,class:"sidebar-items"},yn=L({setup(a){const e=se();return(t,u)=>s(e).length?(l(),p("ul",kn,[(l(!0),p(D,null,A(s(e),r=>(l(),w(bn,{key:r.link||r.text,item:r},null,8,["item"]))),128))])):x("",!0)}}),$n={class:"sidebar"},Ln=L({setup(a){return(e,t)=>(l(),p("aside",$n,[y(Be),S(e.$slots,"top"),y(yn),S(e.$slots,"bottom")]))}}),wn=L({setup(a){const e=X(),t=j(),u=T(),r=g(()=>t.value.navbar!==!1&&u.value.navbar!==!1),m=se(),h=N(!1),c=f=>{h.value=typeof f=="boolean"?f:!h.value},n={x:0,y:0},o=f=>{n.x=f.changedTouches[0].clientX,n.y=f.changedTouches[0].clientY},i=f=>{const C=f.changedTouches[0].clientX-n.x,E=f.changedTouches[0].clientY-n.y;Math.abs(C)>Math.abs(E)&&Math.abs(C)>40&&(C>0&&n.x<=80?c(!0):c(!1))},d=g(()=>[{"no-navbar":!r.value,"no-sidebar":!m.value.length,"sidebar-open":h.value},t.value.pageClass]);let v;G(()=>{v=ae().afterEach(()=>{c(!1)})}),ge(()=>{v()});const _=Qe(),k=_.resolve,$=_.pending;return(f,C)=>(l(),p("div",{class:z(["theme-container",s(d)]),onTouchstart:o,onTouchend:i},[S(f.$slots,"navbar",{},()=>[s(r)?(l(),w(Yt,{key:0,onToggleSidebar:c},{before:P(()=>[S(f.$slots,"navbar-before")]),after:P(()=>[S(f.$slots,"navbar-after")]),_:3})):x("",!0)]),b("div",{class:"sidebar-mask",onClick:C[0]||(C[0]=E=>c(!1))}),S(f.$slots,"sidebar",{},()=>[y(Ln,null,{top:P(()=>[S(f.$slots,"sidebar-top")]),bottom:P(()=>[S(f.$slots,"sidebar-bottom")]),_:3})]),S(f.$slots,"page",{},()=>[s(t).home?(l(),w($t,{key:0})):(l(),w(ye,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:s(k),onBeforeLeave:s($)},{default:P(()=>[(l(),w(fn,{key:s(e).path},{top:P(()=>[S(f.$slots,"page-top")]),bottom:P(()=>[S(f.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});const In={setup(a){return(e,t)=>(l(),w(wn,null,{"page-bottom":P(()=>[y(Pe)]),_:1}))}};export{In as default};
