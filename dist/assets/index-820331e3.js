import{B,H as D,e as C,a1 as X,a0 as _e,n as j,R as ve,aa as me,O as fe,f as l,Z as G,D as ee,P as O,E as te,a6 as he,ab as be,ac as ge,J as Ce,K as ne,a2 as ye,ad as se,G as Y,a7 as xe,ae as Ie,af as ke,W as oe,I as L,Y as R,C as we,ag as $e,ah as Se,ai as Pe,L as Ae,q as Oe,_ as E,a as g,c as x,b as f,t as S,u as P,h as Z,p as Ve,d as Be,w as V,F as N,g as U,m as W,aj as De,s as q}from"./index-335f02a3.js";import{u as ae,h as J}from"./index-3fc27af5.js";import"./index-7cca7dcd.js";import{P as Re,u as Ee,C as Fe}from"./homeStore-93c17bc4.js";import{u as Te}from"./cityStore-a457a344.js";import{C as ze}from"./index-fdf78771.js";import{u as Ge}from"./use-id-ad399dd1.js";import{s as Ne}from"./index-057378b2.js";const[ce,T]=B("dropdown-menu"),Me={overlay:G,zIndex:ee,duration:O(.2),direction:te("down"),activeColor:String,closeOnClickOutside:G,closeOnClickOverlay:G},le=Symbol(ce);var Ue=D({name:ce,props:Me,setup(e,{slots:o}){const s=Ge(),p=C(),a=C(),i=C(0),{children:r,linkChildren:v}=X(le),m=_e(p),n=j(()=>r.some(t=>t.state.showWrapper)),_=j(()=>{if(n.value&&ve(e.zIndex))return{zIndex:+e.zIndex+1}}),c=()=>{r.forEach(t=>{t.toggle(!1)})},d=()=>{e.closeOnClickOutside&&c()},u=()=>{if(a.value){const t=he(a);e.direction==="down"?i.value=t.bottom:i.value=be.value-t.top}},I=()=>{n.value&&u()},k=t=>{r.forEach((b,y)=>{y===t?b.toggle():b.state.showPopup&&b.toggle(!1,{immediate:!0})})},h=(t,b)=>{const{showPopup:y}=t.state,{disabled:w,titleClass:$}=t;return l("div",{id:`${s}-${b}`,role:"button",tabindex:w?void 0:0,class:[T("item",{disabled:w}),{[ge]:!w}],onClick:()=>{w||k(b)}},[l("span",{class:[T("title",{down:y===(e.direction==="down"),active:y}),$],style:{color:y?e.activeColor:""}},[l("div",{class:"van-ellipsis"},[t.renderTitle()])])])};return ae({close:c}),v({id:s,props:e,offset:i,updateOffset:u}),me(p,d),fe("scroll",I,{target:m,passive:!0}),()=>{var t;return l("div",{ref:p,class:T()},[l("div",{ref:a,style:_.value,class:T("bar",{opened:n.value})},[r.map(h)]),(t=o.default)==null?void 0:t.call(o)])}}});const[We,z]=B("dropdown-item"),Le={title:String,options:se(),disabled:Boolean,teleport:[String,Object],lazyRender:G,modelValue:Y,titleClass:Y};var He=D({name:We,inheritAttrs:!1,props:Le,emits:["open","opened","close","closed","change","update:modelValue"],setup(e,{emit:o,slots:s,attrs:p}){const a=Ce({showPopup:!1,transition:!0,showWrapper:!1}),{parent:i,index:r}=ne(le);if(!i)return;const v=t=>()=>o(t),m=v("open"),n=v("close"),_=v("opened"),c=()=>{a.showWrapper=!1,o("closed")},d=t=>{e.teleport&&t.stopPropagation()},u=(t=!a.showPopup,b={})=>{t!==a.showPopup&&(a.showPopup=t,a.transition=!b.immediate,t&&(i.updateOffset(),a.showWrapper=!0))},I=()=>{if(s.title)return s.title();if(e.title)return e.title;const t=e.options.find(b=>b.value===e.modelValue);return t?t.text:""},k=t=>{const{activeColor:b}=i.props,y=t.value===e.modelValue,w=()=>{a.showPopup=!1,t.value!==e.modelValue&&(o("update:modelValue",t.value),o("change",t.value))},$=()=>{if(y)return l(L,{class:z("icon"),color:b,name:"success"},null)};return l(ze,{role:"menuitem",key:t.value,icon:t.icon,title:t.text,class:z("option",{active:y}),style:{color:y?b:""},tabindex:y?0:-1,clickable:!0,onClick:w},{value:$})},h=()=>{const{offset:t}=i,{zIndex:b,overlay:y,duration:w,direction:$,closeOnClickOverlay:pe}=i.props,M=xe(b);return $==="down"?M.top=`${t.value}px`:M.bottom=`${t.value}px`,Ie(l("div",oe({style:M,class:z([$]),onClick:d},p),[l(Re,{show:a.showPopup,"onUpdate:show":F=>a.showPopup=F,role:"menu",class:z("content"),overlay:y,position:$==="down"?"top":"bottom",duration:a.transition?w:0,lazyRender:e.lazyRender,overlayStyle:{position:"absolute"},"aria-labelledby":`${i.id}-${r.value}`,closeOnClickOverlay:pe,onOpen:m,onClose:n,onOpened:_,onClosed:c},{default:()=>{var F;return[e.options.map(k),(F=s.default)==null?void 0:F.call(s)]}})]),[[ke,a.showWrapper]])};return ae({state:a,toggle:u,renderTitle:I}),()=>e.teleport?l(ye,{to:e.teleport},{default:()=>[h()]}):h()}});const ie=R(He),re=R(Ue),[de,Ke]=B("sidebar"),ue=Symbol(de),je={modelValue:O(0)};var Ye=D({name:de,props:je,emits:["change","update:modelValue"],setup(e,{emit:o,slots:s}){const{linkChildren:p}=X(ue),a=()=>+e.modelValue;return p({getActive:a,setActive:r=>{r!==a()&&(o("update:modelValue",r),o("change",r))}}),()=>{var r;return l("div",{role:"tablist",class:Ke()},[(r=s.default)==null?void 0:r.call(s)])}}});const Ze=R(Ye),[qe,Q]=B("sidebar-item"),Je=we({},$e,{dot:Boolean,title:String,badge:ee,disabled:Boolean,badgeProps:Object});var Qe=D({name:qe,props:Je,emits:["click"],setup(e,{emit:o,slots:s}){const p=Se(),{parent:a,index:i}=ne(ue);if(!a)return;const r=()=>{e.disabled||(o("click",i.value),a.setActive(i.value),p())};return()=>{const{dot:v,badge:m,title:n,disabled:_}=e,c=i.value===a.getActive();return l("div",{role:"tab",class:Q({select:c,disabled:_}),tabindex:_?void 0:0,"aria-selected":c,onClick:r},[l(Pe,oe({dot:v,class:Q("text"),content:m},e.badgeProps),{default:()=>[s.title?s.title():n]})])}}});const Xe=R(Qe),[et,A]=B("tree-select"),tt={max:O(1/0),items:se(),height:O(300),selectedIcon:te("success"),mainActiveIndex:O(0),activeId:{type:[Number,String,Array],default:0}};var nt=D({name:et,props:tt,emits:["clickNav","clickItem","update:activeId","update:mainActiveIndex"],setup(e,{emit:o,slots:s}){const p=n=>Array.isArray(e.activeId)?e.activeId.includes(n):e.activeId===n,a=n=>{const _=()=>{if(n.disabled)return;let c;if(Array.isArray(e.activeId)){c=e.activeId.slice();const d=c.indexOf(n.id);d!==-1?c.splice(d,1):c.length<+e.max&&c.push(n.id)}else c=n.id;o("update:activeId",c),o("clickItem",n)};return l("div",{key:n.id,class:["van-ellipsis",A("item",{active:p(n.id),disabled:n.disabled})],onClick:_},[n.text,p(n.id)&&l(L,{name:e.selectedIcon,class:A("selected")},null)])},i=n=>{o("update:mainActiveIndex",n)},r=n=>o("clickNav",n),v=()=>{const n=e.items.map(_=>l(Xe,{dot:_.dot,badge:_.badge,class:[A("nav-item"),_.className],disabled:_.disabled,onClick:r},{title:()=>s["nav-text"]?s["nav-text"](_):_.text}));return l(Ze,{class:A("nav"),modelValue:e.mainActiveIndex,onChange:i},{default:()=>[n]})},m=()=>{if(s.content)return s.content();const n=e.items[+e.mainActiveIndex]||{};if(n.children)return n.children.map(a)};return()=>l("div",{class:A(),style:{height:Ae(e.height)}},[v(),l("div",{class:A("content")},[m()])])}});const st=R(nt),H=Oe("search",{state:()=>({itemLabel:[],hotFilters:[],items:[]}),actions:{async httpSearch(e,o){const s=await J(e,o);this.itemLabel=s.data.data.data.allConditions},async httpSearchItem(e,o){const s=await J(e,o);this.hotFilters=s.data.data.data.hotFilters,this.items=s.data.data.data.items}}});const K=e=>(Ve("data-v-40cafd5f"),e=e(),Be(),e),ot={class:"app"},at={class:"search"},ct={class:"title"},lt={class:"city"},it={class:"left"},rt=K(()=>f("span",null,"住",-1)),dt={class:"bottom"},ut=K(()=>f("span",null,"离",-1)),pt=K(()=>f("div",{class:"input"},[f("input",{type:"text",name:"",id:"",placeholder:"搜索博尔塔拉的景点、地标、房源"})],-1)),_t={__name:"search",setup(e){const o=Ee(),s=C(!1),p=Te(),a=()=>{history.back()},i=r=>{const[v,m]=r;s.value=!1,p.start=v,p.end=m,p.count=(m.getTime()-v.getTime())/(1e3*60*60*24)+1};return(r,v)=>{const m=L,n=Fe;return g(),x("div",ot,[f("div",at,[l(m,{name:"arrow-left",size:"25",class:"icon",onClick:a,color:"#ff9645"}),f("div",ct,[f("div",lt,S(P(p).cityName),1),f("div",it,[f("div",{class:"top",onClick:v[0]||(v[0]=_=>s.value=!0)},[rt,Z(S(P(o).start.getMonth()+1)+"."+S(P(o).start.getDate()),1)]),f("div",dt,[ut,Z(S(P(o).end.getMonth()+1)+"."+S(P(o).end.getDate()),1)])]),pt,l(m,{name:"wap-nav",size:"30",class:"wap",color:"#ff9645"})]),l(n,{show:s.value,"onUpdate:show":v[1]||(v[1]=_=>s.value=_),type:"range",onConfirm:i,color:"#ff9645"},null,8,["show"])])])}}},vt=E(_t,[["__scopeId","data-v-40cafd5f"]]);const mt={class:"app"},ft={class:"dropMenu"},ht={__name:"dropMenu",setup(e){const o=H(),s=C(1),p=C(1),a=C(0),i=C(0),r=C(0),v=C(null),m=()=>{v.value.close()},n=c=>{let d=[];if(c.subGroups.length!=0)for(let u=0;u<(c==null?void 0:c.subGroups.length);u++)d.push({text:c==null?void 0:c.subGroups[u].label,children:_(c==null?void 0:c.subGroups[u])});else for(let u=0;u<c.items.length;u++)d.push({text:c.items[u].label,value:u});return d},_=c=>{let d=[];for(let u=0;u<c.items.length;u++)d.push({text:c.items[u].label,id:u+1});return d};return(c,d)=>{const u=st,I=ie,k=re;return g(),x("div",mt,[f("div",ft,[l(k,{ref_key:"menuRef",ref:v,"active-color":"#ff9645"},{default:V(()=>[(g(!0),x(N,null,U(P(o).itemLabel,h=>(g(),x(N,null,[h.subGroups.length!=0?(g(),W(I,{key:0,title:h.label},{default:V(()=>[l(u,{items:n(h),"active-id":s.value,"onUpdate:activeId":d[2]||(d[2]=t=>s.value=t),"main-active-index":a.value,"onUpdate:mainActiveIndex":d[3]||(d[3]=t=>a.value=t)},De({_:2},[h.subGroups[a.value].subGroups.length!=0?{name:"content",fn:V(()=>[l(u,{items:n(h.subGroups[a.value]),"active-id":p.value,"onUpdate:activeId":d[0]||(d[0]=t=>p.value=t),"main-active-index":i.value,"onUpdate:mainActiveIndex":d[1]||(d[1]=t=>i.value=t)},null,8,["items","active-id","main-active-index"])]),key:"0"}:void 0]),1032,["items","active-id","main-active-index"]),f("button",{onClick:m},"查看房屋（220套）")]),_:2},1032,["title"])):(g(),W(I,{key:1,title:h.label,options:n(h),modelValue:r.value,"onUpdate:modelValue":d[4]||(d[4]=t=>r.value=t)},null,8,["title","options","modelValue"]))],64))),256))]),_:1},512)])])}}},bt=E(ht,[["__scopeId","data-v-58954ec1"]]);const gt={class:"app"},Ct={class:"hotFilters"},yt={class:"dropMenu"},xt={class:"buttons"},It=["onClick"],kt=["onClick"],wt={__name:"hotFilters",setup(e){const o=H(),s=C(0),p=C(null),a=()=>{p.value[0].close()},i=C(0),r=C(-1),v=n=>{i.value=n},m=n=>{r.value=n};return(n,_)=>{const c=ie,d=re;return g(),x("div",gt,[f("div",Ct,[(g(!0),x(N,null,U(P(o).hotFilters,(u,I)=>(g(),x("div",yt,[I==0?(g(),W(d,{key:0,"active-color":"#ff9645",ref_for:!0,ref_key:"menuRef",ref:p},{default:V(()=>[l(c,{modelValue:s.value,"onUpdate:modelValue":_[0]||(_[0]=k=>s.value=k),title:u.label},{default:V(()=>[f("div",xt,[(g(!0),x(N,null,U(u.subFilterItems,(k,h)=>(g(),x("div",{class:q(["button",{actButton:r.value===h}]),onClick:t=>m(h)},S(k.label),11,It))),256))]),f("button",{onClick:a,class:"look"},"查看房屋（220套）")]),_:2},1032,["modelValue","title"])]),_:2},1536)):(g(),x("div",{key:1,class:q({act:i.value===I}),onClick:k=>v(I)},S(u.label),11,kt))]))),256))])])}}},$t=E(wt,[["__scopeId","data-v-1aba3fed"]]);const St={class:"app"},Pt={class:"top"},At={__name:"top",setup(e){return(o,s)=>(g(),x("div",St,[f("div",Pt,[l(vt),l(bt),l($t)])]))}},Ot=E(At,[["__scopeId","data-v-082894ec"]]);const Vt={class:"app"},Bt={__name:"index",setup(e){const o=H(),s=C([]);async function p(){await o.httpSearch("http://codercba.com:1888/api/search/top"),await o.httpSearchItem("http://codercba.com:1888/api/search/result"),s.value=o.items}return p(),(a,i)=>(g(),x("div",Vt,[l(Ot),l(Ne,{items:s.value},null,8,["items"])]))}},Mt=E(Bt,[["__scopeId","data-v-5208acbd"]]);export{Mt as default};
