const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./aTa61G_T.js","./CqkleIqs.js","./CQgsVD5f.js"])))=>i.map(i=>d[i]);
import{l as me,m as ve,q as fe,s as pe,k as Q,v as F,x as H,y as he,c as o,o as s,a as e,_ as ge,z as b,A as Y,d as ye,t as a,B as O,C as V,F as C,r as R,j as m,D as be,E as _e,G as xe,b as A,H as J,w as U,I as z,J as ke,K as Pe,L as E,M as $e}from"./CC8Ugsi_.js";import{_ as we,F as Ce}from"./_KMWV1gj.js";import"./BO6BrK7q.js";const Le=me({foo:"bar",domainUrl:"https://cjzopen.github.io/trip-inn",theme:{primaryColor:"#ababab"},api:{scenic:"https://media.taiwan.net.tw/XMLReleaseALL_public/scenic_spot_C_f.json",hotel:"https://media.taiwan.net.tw/XMLReleaseALL_public/hotel_C_f.json"}}),Me={nuxt:{}},Ie=ve(Le,Me);function Re(){const t=fe();return t._appConfig||(t._appConfig=pe(Ie)),t._appConfig}const De={id:"loading","aria-hidden":"true"},Te={__name:"Loading",props:{loading:{type:Boolean,required:!0}},setup(t){return Q(async()=>{await F();const p=document.getElementById("loading"),u=document.querySelector(".loading-wave");p&&u&&(u.classList.add("active"),await F(),p.classList.add("active"))}),(p,u)=>H((s(),o("div",De,u[0]||(u[0]=[e("div",{class:"loading-wave"},null,-1),e("p",null,"載入中...",-1)]),512)),[[he,t.loading]])}},Se={key:0,class:"modal"},Ne={class:"modal-wrapper"},Ae={class:"model-content"},Ee={__name:"Modal",props:{isOpen:Boolean},setup(t){return(p,u)=>t.isOpen?(s(),o("div",Se,[e("div",Ne,[e("span",{class:"close",onClick:u[0]||(u[0]=y=>p.$emit("close"))},"×"),e("div",Ae,[Y(p.$slots,"default",{},void 0,!0)])])])):b("",!0)}},He=ge(Ee,[["__scopeId","data-v-e17ff7bf"]]),Oe={class:"geo-label","aria-hidden":"true"},Ve={class:"figure shrink-0 w-full h-48 lg:w-[200px] lg:h-[200px] *:w-full *:h-full"},je=["src","alt"],Be={class:"p-2"},K={__name:"Card",props:{item:Object},emits:["click"],setup(t,{emit:p}){const u=new URL(""+new URL("../default.webp",import.meta.url).href,import.meta.url).href,y=p;return(g,h)=>(s(),o("li",{class:"card overflow-hidden rounded-xl bg-white shadow-md max-w-[480px] lg:flex",onClick:h[0]||(h[0]=d=>y("click",t.item))},[e("span",Oe,[h[1]||(h[1]=e("svg",{class:"geo-label-icon",role:"presentation","aria-hidden":"true"},[e("use",{href:"#pin"})],-1)),ye(" "+a(t.item.Region),1)]),e("figure",Ve,[e("img",{src:t.item.Pictures[0]||O(u),alt:t.item.Name},null,8,je)]),e("div",Be,[Y(g.$slots,"default")])]))}},qe={key:0},Ue={class:"text-2xl font-bold mb-2"},ze={class:"model-photos flex"},Fe=["href"],Xe=["src","alt","title"],Ge={class:"mb-2"},We={key:0,class:"mb-2"},Ze={key:1,class:"mb-2"},Je={class:"mb-2"},Ke={key:1,class:"mb-2"},Qe={class:"list-disc mb-2"},Ye={key:3},et={key:4},tt={key:1},it={__name:"DetailHotel",props:{item:Object},setup(t){const p=t,u=V(()=>p.item??{}),y=u.value.Serviceinfo?u.value.Serviceinfo.split(",").filter(h=>h.trim()!==""):[],g=u.value.Spec?u.value.Spec.split(";").filter(h=>h.trim()!=="").join("、"):"";return(h,d)=>{var $,w,v,x,k;return t.item?(s(),o("div",qe,[e("h2",Ue,a(t.item.Name),1),e("address",null,a(t.item.Add),1),e("div",ze,[(s(!0),o(C,null,R(t.item.Pictures,(L,I)=>(s(),o("figure",null,[e("a",{href:L,target:"_blank",rel:"noopener noreferrer"},[(s(),o("img",{key:I,src:L,alt:t.item.PicDescribes[I]||"業主提供的住宿環境照片",title:t.item.PicDescribes[I]||""},null,8,Xe))],8,Fe)]))),256))]),e("p",Ge,a(t.item.Description||""),1),($=t.item)!=null&&$.LowestPrice?(s(),o(C,{key:0},[t.item.LowestPrice===t.item.CeilingPrice?(s(),o("p",We,"價位："+a(t.item.CeilingPrice)+" 元。",1)):(s(),o("p",Ze,"價位："+a(t.item.LowestPrice)+" ~ "+a(t.item.CeilingPrice)+" 元。",1))],64)):b("",!0),e("p",Je,"房間數："+a((w=t.item)==null?void 0:w.TotalNumberofRooms),1),O(g)?(s(),o("p",Ke,"特殊房型與價格："+a(O(g)),1)):b("",!0),(v=t.item)!=null&&v.Serviceinfo?(s(),o(C,{key:2},[d[0]||(d[0]=e("h3",{class:"text-lg font-bold"},"服務：",-1)),e("ul",Qe,[(s(!0),o(C,null,R(O(y),(L,I)=>(s(),o("li",{key:I},a(L),1))),128))])],64)):b("",!0),(x=t.item)!=null&&x.Tel?(s(),o("p",Ye,"電話："+a(t.item.Tel),1)):b("",!0),(k=t.item)!=null&&k.IndustryEmail?(s(),o("p",et,"Email："+a(t.item.IndustryEmail),1)):b("",!0)])):(s(),o("div",tt,d[1]||(d[1]=[e("p",null,"沒有資料",-1)])))}}},nt={key:0},st={class:"text-2xl font-bold mb-2"},lt={class:"model-photos flex"},ot=["href"],at=["src","alt","title"],ct={class:"mb-2"},rt={key:0,class:"mb-2"},ut={key:1,class:"mb-2"},dt={key:2,class:"mb-2"},mt={key:3,class:"mb-2"},vt={key:4,class:"mb-2"},ft={key:5,class:"mb-2"},pt=["href"],ht={key:6,class:"mb-2"},gt={key:1},yt={__name:"DetailScenic",props:{item:Object},setup(t){return(p,u)=>{var y,g,h,d,$,w,v;return t.item?(s(),o("div",nt,[e("h2",st,a(t.item.Name),1),e("address",null,a(t.item.Add),1),e("div",lt,[(s(!0),o(C,null,R(t.item.Pictures,(x,k)=>(s(),o("figure",null,[e("a",{href:x,target:"_blank",rel:"noopener noreferrer"},[(s(),o("img",{key:k,src:x,alt:t.item.PicDescribes[k]||t.item.Name,title:t.item.PicDescribes[k]||""},null,8,at))],8,ot)]))),256))]),e("p",ct,a(t.item.Toldescribe||""),1),(y=t.item)!=null&&y.Opentime?(s(),o("p",rt,"開放時間："+a(t.item.Opentime),1)):b("",!0),(g=t.item)!=null&&g.Ticketinfo?(s(),o("p",ut,"入場費："+a(t.item.Ticketinfo),1)):b("",!0),(h=t.item)!=null&&h.Travellinginfo?(s(),o("p",dt,"大眾交通資訊："+a(t.item.Travellinginfo),1)):b("",!0),(d=t.item)!=null&&d.Parkinginfo?(s(),o("p",mt,"停車資訊："+a(t.item.Parkinginfo),1)):b("",!0),($=t.item)!=null&&$.Tel?(s(),o("p",vt,"電話："+a(t.item.Tel),1)):b("",!0),(w=t.item)!=null&&w.Website?(s(),o("p",ft,[e("a",{href:t.item.Website,target:"_blank",rel:"noopener noreferrer"},"官方網站",8,pt)])):b("",!0),(v=t.item)!=null&&v.Remarks?(s(),o("p",ht,"注意事項："+a(t.item.Remarks),1)):b("",!0)])):(s(),o("div",gt,u[0]||(u[0]=[e("p",null,"沒有資料",-1)])))}}},bt={class:"text-center pb-5"},_t={key:0,id:"hotel-area",class:"pt-5"},xt={class:"text-center mb-5"},kt={for:"city-select",class:"bg-violet-100 text-violet-800 text-xl px-5 py-2 rounded-full"},Pt=["value"],$t={class:"grid justify-self-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-4"},wt={class:"title text-2xl font-bold mb-2"},Ct={class:"min-h-[48px]"},Lt=["innerHTML"],Mt={key:1,id:"scenic-area",class:"pt-5"},It={class:"text-center mb-5"},Rt={for:"scenic-city-select",class:"bg-violet-100 text-violet-800 text-xl px-5 py-2 rounded-full"},Dt=["value"],Tt={class:"grid justify-self-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-4"},St={class:"title text-xl font-bold mb-2"},Nt={class:"text-2xl"},At={class:"range-wrap",style:{"--min":"5","--max":"20","--val":"10"}},Et={for:"range-input"},Ht={id:"description"},qt={__name:"index",setup(t){const p=Re();p.domainUrl,m("台灣住宿與景點資訊"),m("根據政府提供的資訊，從景點附近整理出台灣各地的民宿、旅店、旅館。");const u=m([]),y=m([]),g=m([]),h=m(!0),d=m(""),$=m([]),w=m(!0);m(null),m(null);const v=m(null),x=m("");m([]);const k=m([]),L=m(10),I=m([]),D=m(!0),ee=m(!0),T=m({iconUrl:"/images/taiwan/home.svg",iconSize:[27,24],iconAnchor:[14,14]}),S=m({iconUrl:"/images/taiwan/pin.svg",iconSize:[21,28],iconAnchor:[10,18]});let P,f;const j=be(),te=xe(),ie=V(()=>d.value?y.value.filter(l=>l.Region===d.value):u.value),ne=V(()=>w.value?u.value.slice(0,15):ie.value),se=V(()=>d.value?g.value.filter(l=>l.Region===d.value):g.value.slice(0,15));function le(){D.value=!D.value,d.value||(w.value=!0)}function X(l,n){let i=l.length,r,_;for(;i;)_=Math.floor(oe(n)*i--),r=l[i],l[i]=l[_],l[_]=r,++n;return l}function oe(l){const n=Math.sin(l)*1e4;return n-Math.floor(n)}function ae(l,n,i,r){const c=(i-l)*Math.PI/180,M=(r-n)*Math.PI/180,q=Math.sin(c/2)*Math.sin(c/2)+Math.cos(l*Math.PI/180)*Math.cos(i*Math.PI/180)*Math.sin(M/2)*Math.sin(M/2);return 6371*(2*Math.atan2(Math.sqrt(q),Math.sqrt(1-q)))}function G(){if(!v.value)return;const n=x.value==="hotel"?g.value:y.value;k.value=n.filter(i=>ae(v.value.Py,v.value.Px,i.Py,i.Px)<=L.value),I.value=k.value.map(i=>[i.Py,i.Px,{name:i.Name}]),ue()}function W(l,n){v.value=l,x.value=n,G(),F(()=>{re(l.Py,l.Px)})}function ce(){v.value=null}async function re(l,n){f||(f=await E(()=>import("./aTa61G_T.js").then(M=>M.l),__vite__mapDeps([0,1]),import.meta.url).then(M=>M.default)),await E(()=>import("./CQgsVD5f.js").then(M=>M.l),__vite__mapDeps([2,1]),import.meta.url),P&&P.remove();const i=x.value==="hotel",r=i?f.icon(T.value):f.icon(S.value),_=i?f.icon(S.value):f.icon(T.value);P=f.map("map").setView([l,n],13),f.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{minZoom:10,maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(P),f.marker([l,n],{icon:r}).addTo(P).bindPopup(v.value.Name).openPopup(),Z(_,i)}async function ue(){if(f||(f=await E(()=>import("./aTa61G_T.js").then(r=>r.l),__vite__mapDeps([0,1]),import.meta.url).then(r=>r.default)),await E(()=>import("./CQgsVD5f.js").then(r=>r.l),__vite__mapDeps([2,1]),import.meta.url),!P||(P.eachLayer(r=>{r instanceof f.Marker&&P.removeLayer(r)}),!v.value))return;const l=x.value==="hotel",n=l?f.icon(T.value):f.icon(S.value),i=l?f.icon(S.value):f.icon(T.value);f.marker([v.value.Py,v.value.Px],{icon:n}).addTo(P).bindPopup(v.value.Name).openPopup(),Z(i,l)}function Z(l,n){if(!P||!k.value.length)return;const i=f.markerClusterGroup();k.value.forEach(r=>{const _=f.marker([r.Py,r.Px],{icon:l});_.on("click",()=>{const c=document.querySelector("#description");c&&$e(n?yt:it,{item:r}).mount(c)}),i.addLayer(_)}),P.addLayer(i)}Q(async()=>{try{const n=await(await fetch(`${p.api.hotel}`)).json();y.value=n.XML_Head.Infos.Info.map(c=>({...c,Region:c.Region===null?c.Add.slice(0,3):c.Region,Pictures:[c.Picture1,c.Picture2,c.Picture3].filter(Boolean),PicDescribes:[c.Picdescribe1,c.Picdescribe2,c.Picdescribe3].filter(Boolean)}));const r=await(await fetch(`${p.api.scenic}`)).json();g.value=r.XML_Head.Infos.Info.map(c=>({...c,Region:c.Region===null?c.Add.slice(0,3):c.Region,Pictures:[c.Picture1,c.Picture2,c.Picture3].filter(Boolean),PicDescribes:[c.Picdescribe1,c.Picdescribe2,c.Picdescribe3].filter(Boolean)}));const _=new Date().getDate();u.value=X([...y.value],_),g.value=X([...g.value],_),$.value=[...new Set(y.value.map(c=>c.Region))],j.query.city&&($.value.includes(j.query.city)?(d.value=j.query.city,w.value=!1):(d.value="",N()))}catch(l){console.error("Error fetching data:",l)}finally{setTimeout(()=>{h.value=!1},1600)}}),_e(d,l=>{w.value=!1,N()});function N(){te.push({query:{city:d.value||void 0}})}const B=l=>l<3e3?"text-emerald-500":l>9e3?"text-pink-700":"",de=l=>{const{LowestPrice:n,CeilingPrice:i}=l;return`價位：${n===i?`<span class="${B(i)}">${i}</span>`:`<span class="${B(n)}">${n}</span> ~ <span class="${B(i)}">${i}</span>`}。`};return(l,n)=>(s(),o(C,null,[e("div",null,[A(we),e("main",null,[n[8]||(n[8]=e("h1",{class:"text-center py-[5rem] text-cyan-500 text-4xl"},"找住宿？找景點？",-1)),e("div",bt,[e("button",{class:"bg-violet-700 text-violet-50 text-2xl px-5 py-3 min-w-80 rounded-full cursor-pointer",type:"button",onClick:le},a(D.value?"改用景點找住宿地點":"改用旅宿找附近景點"),1)]),D.value?(s(),o("div",_t,[e("div",xt,[e("label",kt,[H(e("select",{class:"city-select",id:"city-select","onUpdate:modelValue":n[0]||(n[0]=i=>d.value=i),onChange:N},[n[3]||(n[3]=e("option",{value:"",disabled:"",selected:""},"選擇縣市",-1)),n[4]||(n[4]=e("option",{value:""},"全部",-1)),(s(!0),o(C,null,R($.value,i=>(s(),o("option",{key:i,value:i},a(i),9,Pt))),128))],544),[[J,d.value]])])]),e("div",null,[e("ul",$t,[(s(!0),o(C,null,R(ne.value,i=>(s(),z(K,{key:i.Id,item:i,onClick:r=>W(i,"hotel")},{default:U(()=>[e("div",wt,a(i.Name),1),e("p",Ct,a(i.Add),1),e("ul",null,[e("li",null,"共有 "+a(i.TotalNumberofRooms)+" 間房間。",1),e("li",{innerHTML:de(i)},null,8,Lt)])]),_:2},1032,["item","onClick"]))),128))])])])):(s(),o("div",Mt,[e("div",It,[e("label",Rt,[H(e("select",{class:"city-select",id:"scenic-city-select","onUpdate:modelValue":n[1]||(n[1]=i=>d.value=i),onChange:N},[n[5]||(n[5]=e("option",{value:"",disabled:"",selected:""},"選擇縣市",-1)),n[6]||(n[6]=e("option",{value:""},"全部",-1)),(s(!0),o(C,null,R($.value,i=>(s(),o("option",{key:i,value:i},a(i),9,Dt))),128))],544),[[J,d.value]])])]),e("div",null,[e("ul",Tt,[(s(!0),o(C,null,R(se.value,i=>(s(),z(K,{key:i.Id,item:i,onClick:r=>W(i,"scenic")},{default:U(()=>[e("div",St,a(i.Name),1),n[7]||(n[7]=e("p",{class:"min-h-[48px]"},null,-1))]),_:2},1032,["item","onClick"]))),128))])])]))]),A(Ce)]),A(He,{isOpen:!!v.value,onClose:ce},{default:U(()=>{var i;return[e("h2",Nt,a((i=v.value)==null?void 0:i.Name),1),e("div",At,[H(e("input",{id:"range-input",type:"range",min:"5",max:"20",list:"dl","onUpdate:modelValue":n[2]||(n[2]=r=>L.value=r),onInput:G},null,544),[[ke,L.value]]),n[9]||(n[9]=e("output",{for:"range-input"},"10",-1)),e("label",Et,"方圓 "+a(L.value)+" 公里內的"+a(x.value==="hotel"?"景點":"旅宿"),1)]),n[10]||(n[10]=e("div",{id:"map-wrapper"},[e("div",{id:"map"})],-1)),e("div",Ht,[(s(),z(Pe(ee.value?"DetailHotel":"DetailScenic"),{item:v.value},null,8,["item"]))])]}),_:1},8,["isOpen"]),A(Te,{loading:h.value},null,8,["loading"])],64))}};export{qt as default};
