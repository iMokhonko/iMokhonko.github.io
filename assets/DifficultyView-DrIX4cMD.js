import{g as i,d as k,u as x,h as _,s as v,c,e as l,b as e,a as o,F as w,r as M,w as r,_ as z,i as C,f as L,t as p,j as $,o as n,n as d,k as h,l as B,m as D}from"./index-DxCNx9JZ.js";import{_ as H}from"./ScreenHeader.vue_vue_type_script_setup_true_lang-CyQO1_aF.js";import{_ as S,a as V}from"./CardContent.vue_vue_type_script_setup_true_lang-rTyWZdSi.js";/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=i("flame",[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=i("gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=i("mountain",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=i("shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=i("wand-sparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]),I={class:"flex flex-1 flex-col gap-page pb-page-with-floating-nav pt-page min-h-0"},R={class:"grid min-h-0 flex-1 grid-cols-2 gap-4"},T=["onClick"],E={class:"bottom-floating-nav fixed left-0 right-0 z-40 border-t border-border/60 bg-background/95 px-page pb-safe pt-4 backdrop-blur-md"},Q=k({__name:"DifficultyView",setup(W){const{t}=x(),u=$(),f=_(),{difficulty:s}=v(f),b=C(()=>[{id:"easy",label:t("difficulty.easy"),icon:q},{id:"medium",label:t("difficulty.medium"),icon:F},{id:"hard",label:t("difficulty.hard"),icon:N},{id:"mixed",label:t("difficulty.mixed"),icon:j},{id:"custom",label:t("difficulty.custom"),icon:G}]);function y(m){f.setDifficulty(m)}function g(){if(s.value){if(s.value==="custom"){u.push({name:"custom"});return}u.push({name:"setup"})}}return(m,A)=>(n(),c("div",I,[l(H,{title:e(t)("difficulty.title"),subtitle:e(t)("difficulty.description",{customLabel:e(t)("difficulty.custom")}),"back-route":{name:"home"}},null,8,["title","subtitle"]),o("div",R,[(n(!0),c(w,null,M(b.value,a=>(n(),c("button",{key:a.id,type:"button",class:"text-left focus-visible:ring-ring rounded-2xl focus-visible:ring-2 focus-visible:outline-none",onClick:J=>y(a.id)},[l(e(V),{class:d(e(h)("border-0 shadow-sm transition-all",e(s)===a.id?"bg-primary shadow-md ring-2 ring-amber-400/60":"bg-card hover:shadow-md"))},{default:r(()=>[l(e(S),{class:"flex flex-col items-center gap-3 p-5 sm:p-6"},{default:r(()=>[o("div",{class:d(e(h)("flex size-14 items-center justify-center rounded-2xl",e(s)===a.id?"bg-white/30":"bg-accent"))},[(n(),B(D(a.icon),{class:d(["size-8",e(s)===a.id?"text-primary-foreground":"text-foreground"])},null,8,["class"]))],2),o("span",{class:d(["text-center text-sm font-bold",e(s)===a.id?"text-primary-foreground":"text-muted-foreground"])},p(a.label),3)]),_:2},1024)]),_:2},1032,["class"])],8,T))),128))]),o("div",E,[l(e(z),{class:"from-primary h-12 w-full rounded-full bg-linear-to-b to-amber-500 text-base font-bold text-white shadow-lg disabled:opacity-40",disabled:!e(s),onClick:g},{default:r(()=>[L(p(e(t)("difficulty.next")),1)]),_:1},8,["disabled"])])]))}});export{Q as default};
