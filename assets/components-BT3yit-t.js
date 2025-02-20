import{m as R,n as te,h as c,p as be,q as Se,u as ze,t as de,v as ye,x as ve,g as he,y as fe,r as g,z as _e,A as Ie,c as u,w as A,B as Te,Q as J,C as N,D as xe,E as qe,G as le,H as we,I as Q,J as Ce,K,L as Oe,M as ke,N as He,O as ae,d as ge,R as Le,P as ne,o as Ae,S as W,U as Z,V as Be,W as k,X as Pe,Y as Me,f as q,Z as oe,_ as $e,$ as pe,a0 as U,a1 as Qe,a2 as je,a3 as Ee,j as De}from"./index-Cv7eowTT.js";import{Q as Ne,a as ee,b as D,c as ie,d as Re}from"./QScrollObserver-g1drXhPL.js";import{Q as Ve}from"./selection-sucgDov1.js";import{T as re,Q as Fe}from"./QInnerLoading-DmmJBuvQ.js";import{c as Ye}from"./bundle-full-CZ7S0EfI.js";import{_ as Ge}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Ke=R({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:b,emit:y}){let d=!1,h,r,o=null,t=null,v,x;function _(){h&&h(),h=null,d=!1,o!==null&&(clearTimeout(o),o=null),t!==null&&(clearTimeout(t),t=null),r!==void 0&&r.removeEventListener("transitionend",v),v=null}function S(i,z,I){z!==void 0&&(i.style.height=`${z}px`),i.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,d=!0,h=I}function f(i,z){i.style.overflowY=null,i.style.height=null,i.style.transition=null,_(),z!==x&&y(z)}function B(i,z){let I=0;r=i,d===!0?(_(),I=i.offsetHeight===i.scrollHeight?0:void 0):(x="hide",i.style.overflowY="hidden"),S(i,I,z),o=setTimeout(()=>{o=null,i.style.height=`${i.scrollHeight}px`,v=T=>{t=null,(Object(T)!==T||T.target===i)&&f(i,"show")},i.addEventListener("transitionend",v),t=setTimeout(v,e.duration*1.1)},100)}function P(i,z){let I;r=i,d===!0?_():(x="show",i.style.overflowY="hidden",I=i.scrollHeight),S(i,I,z),o=setTimeout(()=>{o=null,i.style.height=0,v=T=>{t=null,(Object(T)!==T||T.target===i)&&f(i,"hide")},i.addEventListener("transitionend",v),t=setTimeout(v,e.duration*1.1)},100)}return te(()=>{d===!0&&_()}),()=>c(be,{css:!1,appear:e.appear,onEnter:B,onLeave:P},b.default)}}),O=Se({}),Ue=Object.keys(ve),Xe=R({name:"QExpansionItem",props:{...ve,...ye,...de,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:{},headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...ze,"click","afterShow","afterHide"],setup(e,{slots:b,emit:y}){const{proxy:{$q:d}}=he(),h=fe(e,d),r=g(e.modelValue!==null?e.modelValue:e.defaultOpened),o=g(null),t=_e(),{show:v,hide:x,toggle:_}=Ie({showing:r});let S,f;const B=u(()=>`q-expansion-item q-item-type q-expansion-item--${r.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),P=u(()=>e.contentInsetLevel===void 0?null:{["padding"+(d.lang.rtl===!0?"Right":"Left")]:e.contentInsetLevel*56+"px"}),i=u(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),z=u(()=>{const n={};return Ue.forEach(m=>{n[m]=e[m]}),n}),I=u(()=>i.value===!0||e.expandIconToggle!==!0),T=u(()=>e.expandedIcon!==void 0&&r.value===!0?e.expandedIcon:e.expandIcon||d.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),V=u(()=>e.disable!==!0&&(i.value===!0||e.expandIconToggle===!0)),F=u(()=>({expanded:r.value===!0,detailsId:t.value,toggle:_,show:v,hide:x})),M=u(()=>{const n=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:d.lang.label[r.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":r.value===!0?"true":"false","aria-controls":t.value,"aria-label":n}});A(()=>e.group,n=>{f!==void 0&&f(),n!==void 0&&E()});function j(n){i.value!==!0&&_(n),y("click",n)}function H(n){n.keyCode===13&&$(n,!0)}function $(n,m){m!==!0&&o.value!==null&&o.value.focus(),_(n),we(n)}function w(){y("afterShow")}function Y(){y("afterHide")}function E(){S===void 0&&(S=Te()),r.value===!0&&(O[e.group]=S);const n=A(r,C=>{C===!0?O[e.group]=S:O[e.group]===S&&delete O[e.group]}),m=A(()=>O[e.group],(C,p)=>{p===S&&C!==void 0&&C!==S&&x()});f=()=>{n(),m(),O[e.group]===S&&delete O[e.group],f=void 0}}function L(){const n={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},m=[c(le,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&r.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:T.value})];return V.value===!0&&(Object.assign(n,{tabindex:0,...M.value,onClick:$,onKeyup:H}),m.unshift(c("div",{ref:o,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),c(D,n,()=>m)}function G(){let n;return b.header!==void 0?n=[].concat(b.header(F.value)):(n=[c(D,()=>[c(ee,{lines:e.labelLines},()=>e.label||""),e.caption?c(ee,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&n[e.switchToggleSide===!0?"push":"unshift"](c(D,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>c(le,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&n[e.switchToggleSide===!0?"unshift":"push"](L()),n}function l(){const n={ref:"item",style:e.headerStyle,class:e.headerClass,dark:h.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return I.value===!0&&(n.clickable=!0,n.onClick=j,Object.assign(n,i.value===!0?z.value:M.value)),c(Ne,n,G)}function a(){return N(c("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:P.value,id:t.value},qe(b.default)),[[xe,r.value]])}function s(){const n=[l(),c(Ke,{duration:e.duration,onShow:w,onHide:Y},a)];return e.expandSeparator===!0&&n.push(c(J,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:h.value}),c(J,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:h.value})),n}return e.group!==void 0&&E(),te(()=>{f!==void 0&&f()}),()=>c("div",{class:B.value},[c("div",{class:"q-expansion-item__container relative-position"},s())])}}),Je=R({props:["store","barStyle","verticalBarStyle","horizontalBarStyle"],setup(e){return()=>[c("div",{class:e.store.scroll.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:e.store.onVerticalMousedown}),c("div",{class:e.store.scroll.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:e.store.onHorizontalMousedown}),N(c("div",{ref:e.store.scroll.vertical.ref,class:e.store.scroll.vertical.thumbClass.value,style:e.store.scroll.vertical.style.value,"aria-hidden":"true"}),e.store.thumbVertDir),N(c("div",{ref:e.store.scroll.horizontal.ref,class:e.store.scroll.horizontal.thumbClass.value,style:e.store.scroll.horizontal.style.value,"aria-hidden":"true"}),e.store.thumbHorizDir)]}}),ue=["vertical","horizontal"],X={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},se={prevent:!0,mouse:!0,mouseAllDir:!0},ce=e=>e>=250?50:Math.ceil(e/5),We=R({name:"QScrollArea",props:{...de,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],verticalOffset:{type:Array,default:[0,0]},horizontalOffset:{type:Array,default:[0,0]},contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:b,emit:y}){const d=g(!1),h=g(!1),r=g(!1),o={vertical:g(0),horizontal:g(0)},t={vertical:{ref:g(null),position:g(0),size:g(0)},horizontal:{ref:g(null),position:g(0),size:g(0)}},{proxy:v}=he(),x=fe(e,v.$q);let _=null,S;const f=g(null),B=u(()=>"q-scrollarea"+(x.value===!0?" q-scrollarea--dark":""));Object.assign(o,{verticalInner:u(()=>o.vertical.value-e.verticalOffset[0]-e.verticalOffset[1]),horizontalInner:u(()=>o.horizontal.value-e.horizontalOffset[0]-e.horizontalOffset[1])}),t.vertical.percentage=u(()=>{const l=t.vertical.size.value-o.vertical.value;if(l<=0)return 0;const a=Q(t.vertical.position.value/l,0,1);return Math.round(a*1e4)/1e4}),t.vertical.thumbHidden=u(()=>(e.visible===null?r.value:e.visible)!==!0&&d.value===!1&&h.value===!1||t.vertical.size.value<=o.vertical.value+1),t.vertical.thumbStart=u(()=>e.verticalOffset[0]+t.vertical.percentage.value*(o.verticalInner.value-t.vertical.thumbSize.value)),t.vertical.thumbSize=u(()=>Math.round(Q(o.verticalInner.value*o.verticalInner.value/t.vertical.size.value,ce(o.verticalInner.value),o.verticalInner.value))),t.vertical.style=u(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${t.vertical.thumbStart.value}px`,height:`${t.vertical.thumbSize.value}px`,right:`${e.horizontalOffset[1]}px`})),t.vertical.thumbClass=u(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.vertical.barClass=u(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),t.horizontal.percentage=u(()=>{const l=t.horizontal.size.value-o.horizontal.value;if(l<=0)return 0;const a=Q(Math.abs(t.horizontal.position.value)/l,0,1);return Math.round(a*1e4)/1e4}),t.horizontal.thumbHidden=u(()=>(e.visible===null?r.value:e.visible)!==!0&&d.value===!1&&h.value===!1||t.horizontal.size.value<=o.horizontal.value+1),t.horizontal.thumbStart=u(()=>e.horizontalOffset[0]+t.horizontal.percentage.value*(o.horizontalInner.value-t.horizontal.thumbSize.value)),t.horizontal.thumbSize=u(()=>Math.round(Q(o.horizontalInner.value*o.horizontalInner.value/t.horizontal.size.value,ce(o.horizontalInner.value),o.horizontalInner.value))),t.horizontal.style=u(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[v.$q.lang.rtl===!0?"right":"left"]:`${t.horizontal.thumbStart.value}px`,width:`${t.horizontal.thumbSize.value}px`,bottom:`${e.verticalOffset[1]}px`})),t.horizontal.thumbClass=u(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.horizontal.barClass=u(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const P=u(()=>t.vertical.thumbHidden.value===!0&&t.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle);function i(){const l={};return ue.forEach(a=>{const s=t[a];Object.assign(l,{[a+"Position"]:s.position.value,[a+"Percentage"]:s.percentage.value,[a+"Size"]:s.size.value,[a+"ContainerSize"]:o[a].value,[a+"ContainerInnerSize"]:o[a+"Inner"].value})}),l}const z=Ce(()=>{const l=i();l.ref=v,y("scroll",l)},0);function I(l,a,s){if(ue.includes(l)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(l==="vertical"?ae:K)(f.value,a,s)}function T({height:l,width:a}){let s=!1;o.vertical.value!==l&&(o.vertical.value=l,s=!0),o.horizontal.value!==a&&(o.horizontal.value=a,s=!0),s===!0&&H()}function V({position:l}){let a=!1;t.vertical.position.value!==l.top&&(t.vertical.position.value=l.top,a=!0),t.horizontal.position.value!==l.left&&(t.horizontal.position.value=l.left,a=!0),a===!0&&H()}function F({height:l,width:a}){t.horizontal.size.value!==a&&(t.horizontal.size.value=a,H()),t.vertical.size.value!==l&&(t.vertical.size.value=l,H())}function M(l,a){const s=t[a];if(l.isFirst===!0){if(s.thumbHidden.value===!0)return;S=s.position.value,h.value=!0}else if(h.value!==!0)return;l.isFinal===!0&&(h.value=!1);const n=X[a],m=(s.size.value-o[a].value)/(o[a+"Inner"].value-s.thumbSize.value),C=l.distance[n.dist],p=S+(l.direction===n.dir?1:-1)*C*m;$(p,a)}function j(l,a){const s=t[a];if(s.thumbHidden.value!==!0){const n=a==="vertical"?e.verticalOffset[0]:e.horizontalOffset[0],m=l[X[a].offset]-n,C=s.thumbStart.value-n;if(m<C||m>C+s.thumbSize.value){const p=m-s.thumbSize.value/2,me=Q(p/(o[a+"Inner"].value-s.thumbSize.value),0,1);$(me*Math.max(0,s.size.value-o[a].value),a)}s.ref.value!==null&&s.ref.value.dispatchEvent(new MouseEvent(l.type,l))}}function H(){d.value=!0,_!==null&&clearTimeout(_),_=setTimeout(()=>{_=null,d.value=!1},e.delay),e.onScroll!==void 0&&z()}function $(l,a){f.value[X[a].scroll]=l}let w=null;function Y(){w!==null&&clearTimeout(w),w=setTimeout(()=>{w=null,r.value=!0},v.$q.platform.is.ios?50:0)}function E(){w!==null&&(clearTimeout(w),w=null),r.value=!1}let L=null;A(()=>v.$q.lang.rtl,l=>{f.value!==null&&K(f.value,Math.abs(t.horizontal.position.value)*(l===!0?-1:1))}),Oe(()=>{L={top:t.vertical.position.value,left:t.horizontal.position.value}}),ke(()=>{if(L===null)return;const l=f.value;l!==null&&(K(l,L.left),ae(l,L.top))}),te(z.cancel),Object.assign(v,{getScrollTarget:()=>f.value,getScroll:i,getScrollPosition:()=>({top:t.vertical.position.value,left:t.horizontal.position.value}),getScrollPercentage:()=>({top:t.vertical.percentage.value,left:t.horizontal.percentage.value}),setScrollPosition:I,setScrollPercentage(l,a,s){I(l,a*(t[l].size.value-o[l].value)*(l==="horizontal"&&v.$q.lang.rtl===!0?-1:1),s)}});const G={scroll:t,thumbVertDir:[[re,l=>{M(l,"vertical")},void 0,{vertical:!0,...se}]],thumbHorizDir:[[re,l=>{M(l,"horizontal")},void 0,{horizontal:!0,...se}]],onVerticalMousedown(l){j(l,"vertical")},onHorizontalMousedown(l){j(l,"horizontal")}};return()=>c("div",{class:B.value,onMouseenter:Y,onMouseleave:E},[c("div",{ref:f,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[c("div",{class:"q-scrollarea__content absolute",style:P.value},He(b.default,[c(ie,{debounce:0,onResize:F})])),c(Re,{axis:"both",onScroll:V})]),c(ie,{debounce:0,onResize:T}),c(Je,{store:G,barStyle:e.barStyle,verticalBarStyle:e.verticalBarStyle,horizontalBarStyle:e.horizontalBarStyle})])}}),Ze=ge({__name:"ExampleCode",props:{lang:{},code:{},height:{default:"500px"},fontSize:{default:"16px"}},setup(e){Le(h=>({"3d76be52":b.fontSize}));const b=e,y=g(null),d=async()=>{y.value&&(y.value.innerHTML=await Ye(b.code,{lang:b.lang,theme:ne.isActive?"github-dark":"github-light"}))};return A(()=>ne.isActive,d),A(()=>b.code,d),Ae(d),(h,r)=>(Z(),W(We,{style:Be({height:h.height})},{default:k(()=>[Pe("div",{ref_key:"codeRef",ref:y,class:"q-pa-md preview-code"},null,512)]),_:1},8,["style"]))}}),et=Ge(Ze,[["__scopeId","data-v-d53e4a36"]]),tt=ge({__name:"ExamplePreview",props:{lang:{},meta:{},code:{}},setup(e){const b=e,y=u(()=>b.meta.replace("preview","").replace("[","").replace("]","").trim()),d=g(!1),h=()=>{d.value=!0,setTimeout(()=>{d.value=!1},300)};return(r,o)=>{const t=Me("click-copy");return Z(),W(Ee,{bordered:"",class:"q-my-xl"},{default:k(()=>[q(Xe,{"hide-expand-icon":"","expand-icon-toggle":""},{header:k(({toggle:v,expanded:x})=>[q(D,null,{default:k(()=>[q(ee,null,{default:k(()=>[$e(pe(r.$t(`examples.${y.value}.title`)),1)]),_:1})]),_:1}),q(Ve),x?N((Z(),W(U,{key:0,flat:"",round:"",icon:"mdi-content-copy",color:"primary"},null,512)),[[t,{content:r.code,onSuccess:()=>{r.$q.notify({type:"positive",message:"Copied!"})}}]]):oe("",!0),q(U,{flat:"",round:"",icon:"mdi-reload",color:"primary",onClick:h}),q(U,{flat:"",round:"",icon:"mdi-code-tags",onClick:v,color:"primary"},null,8,["onClick"])]),default:k(()=>[q(et,{lang:r.lang,code:r.code},null,8,["lang","code"])]),_:1}),q(J),q(Qe,null,{default:k(()=>[d.value?oe("",!0):je(r.$slots,"default",{key:0}),q(Fe,{showing:d.value},null,8,["showing"])]),_:3})]),_:3})}}}),ut=De(({app:e})=>{e.component("CodePreview",tt)});export{ut as default};
