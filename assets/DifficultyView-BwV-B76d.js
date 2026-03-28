import{c as i,d as b,u as g,k as x,s as _,a as o,f as c,e,b as d,F as v,r as M,l as w,j as C,o as l,w as m,n,m as p,p as z,q as L,t as q}from"./index-9wTILqNt.js";import{u as B}from"./useFooterPrimaryAction-B_xygdD_.js";import{_ as D,a as F,b as H}from"./CardContent.vue_vue_type_script_setup_true_lang-8DxJbbKK.js";import"./chevron-left-BokxErcf.js";/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=i("flame",[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=i("gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=i("mountain",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=i("shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-vue-next v1.0.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=i("wand-sparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]),I={class:"flex min-h-0 flex-1 flex-col gap-page pt-page"},N={class:"grid min-h-0 grid-cols-2 gap-4"},R=["onClick"],O=b({__name:"DifficultyView",setup(A){const{t}=g(),r=C(),u=x(),{difficulty:s}=_(u),h=w(()=>[{id:"easy",label:t("difficulty.easy"),icon:S},{id:"medium",label:t("difficulty.medium"),icon:$},{id:"hard",label:t("difficulty.hard"),icon:V},{id:"mixed",label:t("difficulty.mixed"),icon:j},{id:"custom",label:t("difficulty.custom"),icon:G}]);function y(f){u.setDifficulty(f)}function k(){if(s.value){if(s.value==="custom"){r.push({name:"custom"});return}r.push({name:"setup"})}}return B(()=>({label:t("difficulty.next"),disabled:!s.value,onClick:k})),(f,E)=>(l(),o("div",I,[c(D,{title:e(t)("difficulty.title"),subtitle:e(t)("difficulty.description",{customLabel:e(t)("difficulty.custom")}),"back-route":{name:"home"}},null,8,["title","subtitle"]),d("div",N,[(l(!0),o(v,null,M(h.value,a=>(l(),o("button",{key:a.id,type:"button",class:"text-left focus-visible:ring-ring rounded-2xl focus-visible:ring-2 focus-visible:outline-none",onClick:P=>y(a.id)},[c(e(H),{class:n(e(p)("border-0 shadow-sm transition-all",e(s)===a.id?"bg-primary shadow-md ring-2 ring-amber-400/60":"bg-card hover:shadow-md"))},{default:m(()=>[c(e(F),{class:"flex flex-col items-center gap-3 p-5 sm:p-6"},{default:m(()=>[d("div",{class:n(e(p)("flex size-14 items-center justify-center rounded-2xl",e(s)===a.id?"bg-white/30":"bg-accent"))},[(l(),z(L(a.icon),{class:n(["size-8",e(s)===a.id?"text-primary-foreground":"text-foreground"])},null,8,["class"]))],2),d("span",{class:n(["text-center text-sm font-bold",e(s)===a.id?"text-primary-foreground":"text-muted-foreground"])},q(a.label),3)]),_:2},1024)]),_:2},1032,["class"])],8,R))),128))])]))}});export{O as default};
