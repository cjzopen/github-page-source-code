const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./aTa61G_T.js","./CqkleIqs.js","./CQgsVD5f.js"])))=>i.map(i=>d[i]);
import{l as ve,m as fe,q as pe,s as ge,k as Q,v as F,x as H,y as he,c as o,o as s,a as e,_ as ye,z as y,A as Y,d as be,t as a,B as O,F as M,r as I,C as q,j as d,D as _e,E as xe,G as ke,b as A,H as J,w as U,I as z,J as $e,K as Pe,L as E,M as we}from"./CfRcheFQ.js";import{_ as Ce,F as Me}from"./DY8qRePK.js";import"./CFfMduLE.js";const Le=ve({foo:"bar",domainUrl:"https://cjzopen.github.io/trip-inn",theme:{primaryColor:"#ababab"},api:{scenic:"https://media.taiwan.net.tw/XMLReleaseALL_public/scenic_spot_C_f.json",hotel:"https://media.taiwan.net.tw/XMLReleaseALL_public/hotel_C_f.json"}}),De={nuxt:{}},Ie=fe(Le,De);function Re(){const t=pe();return t._appConfig||(t._appConfig=ge(Ie)),t._appConfig}const Te={id:"loading","aria-hidden":"true"},Se={__name:"Loading",props:{loading:{type:Boolean,required:!0}},setup(t){return Q(async()=>{await F();const g=document.getElementById("loading"),u=document.querySelector(".loading-wave");g&&u&&(u.classList.add("active"),await F(),g.classList.add("active"))}),(g,u)=>H((s(),o("div",Te,u[0]||(u[0]=[e("div",{class:"loading-wave"},null,-1),e("p",null,"載入中...",-1)]),512)),[[he,t.loading]])}},Ne={key:0,class:"modal"},Ae={class:"modal-wrapper"},Ee={class:"model-content"},He={__name:"Modal",props:{isOpen:Boolean},setup(t){return(g,u)=>t.isOpen?(s(),o("div",Ne,[e("div",Ae,[e("span",{class:"close",onClick:u[0]||(u[0]=b=>g.$emit("close"))},"×"),e("div",Ee,[Y(g.$slots,"default",{},void 0,!0)])])])):y("",!0)}},Oe=ye(He,[["__scopeId","data-v-e17ff7bf"]]),Ve={class:"geo-label","aria-hidden":"true"},je={class:"figure shrink-0 w-full h-48 lg:w-[200px] lg:h-[200px] *:w-full *:h-full"},Be=["src","alt"],qe={class:"p-2"},K={__name:"Card",props:{item:Object},emits:["click"],setup(t,{emit:g}){const u=g;return(b,p)=>(s(),o("li",{class:"card overflow-hidden rounded-xl bg-white shadow-md max-w-[480px] lg:flex",onClick:p[0]||(p[0]=h=>u("click",t.item))},[e("span",Ve,[p[1]||(p[1]=e("svg",{class:"geo-label-icon",role:"presentation","aria-hidden":"true"},[e("use",{href:"#pin"})],-1)),be(" "+a(t.item.Region),1)]),e("figure",je,[e("img",{src:t.item.Pictures[0]||`${b.domainUrl}/images/default.webp`,alt:t.item.Name},null,8,Be)]),e("div",qe,[Y(b.$slots,"default")])]))}},Ue={key:0},ze={class:"text-2xl font-bold mb-2"},Fe={class:"model-photos flex"},Xe=["href"],Ge=["src","alt","title"],We={class:"mb-2"},Ze={key:0,class:"mb-2"},Je={key:1,class:"mb-2"},Ke={class:"mb-2"},Qe={key:1,class:"mb-2"},Ye={class:"list-disc mb-2"},et={key:3},tt={key:4},it={key:1},nt={__name:"DetailHotel",props:{item:Object},setup(t){const g=t,u=O(()=>g.item??{}),b=u.value.Serviceinfo?u.value.Serviceinfo.split(",").filter(h=>h.trim()!==""):[],p=u.value.Spec?u.value.Spec.split(";").filter(h=>h.trim()!=="").join("、"):"";return(h,$)=>{var m,P,w,v,_;return t.item?(s(),o("div",Ue,[e("h2",ze,a(t.item.Name),1),e("address",null,a(t.item.Add),1),e("div",Fe,[(s(!0),o(M,null,I(t.item.Pictures,(L,C)=>(s(),o("figure",null,[e("a",{href:L,target:"_blank",rel:"noopener noreferrer"},[(s(),o("img",{key:C,src:L,alt:t.item.PicDescribes[C]||"業主提供的住宿環境照片",title:t.item.PicDescribes[C]||""},null,8,Ge))],8,Xe)]))),256))]),e("p",We,a(t.item.Description||""),1),(m=t.item)!=null&&m.LowestPrice?(s(),o(M,{key:0},[t.item.LowestPrice===t.item.CeilingPrice?(s(),o("p",Ze,"價位："+a(t.item.CeilingPrice)+" 元。",1)):(s(),o("p",Je,"價位："+a(t.item.LowestPrice)+" ~ "+a(t.item.CeilingPrice)+" 元。",1))],64)):y("",!0),e("p",Ke,"房間數："+a((P=t.item)==null?void 0:P.TotalNumberofRooms),1),q(p)?(s(),o("p",Qe,"特殊房型與價格："+a(q(p)),1)):y("",!0),(w=t.item)!=null&&w.Serviceinfo?(s(),o(M,{key:2},[$[0]||($[0]=e("h3",{class:"text-lg font-bold"},"服務：",-1)),e("ul",Ye,[(s(!0),o(M,null,I(q(b),(L,C)=>(s(),o("li",{key:C},a(L),1))),128))])],64)):y("",!0),(v=t.item)!=null&&v.Tel?(s(),o("p",et,"電話："+a(t.item.Tel),1)):y("",!0),(_=t.item)!=null&&_.IndustryEmail?(s(),o("p",tt,"Email："+a(t.item.IndustryEmail),1)):y("",!0)])):(s(),o("div",it,$[1]||($[1]=[e("p",null,"沒有資料",-1)])))}}},st={key:0},lt={class:"text-2xl font-bold mb-2"},ot={class:"model-photos flex"},at=["href"],ct=["src","alt","title"],rt={class:"mb-2"},ut={key:0,class:"mb-2"},dt={key:1,class:"mb-2"},mt={key:2,class:"mb-2"},vt={key:3,class:"mb-2"},ft={key:4,class:"mb-2"},pt={key:5,class:"mb-2"},gt=["href"],ht={key:6,class:"mb-2"},yt={key:1},bt={__name:"DetailScenic",props:{item:Object},setup(t){return(g,u)=>{var b,p,h,$,m,P,w;return t.item?(s(),o("div",st,[e("h2",lt,a(t.item.Name),1),e("address",null,a(t.item.Add),1),e("div",ot,[(s(!0),o(M,null,I(t.item.Pictures,(v,_)=>(s(),o("figure",null,[e("a",{href:v,target:"_blank",rel:"noopener noreferrer"},[(s(),o("img",{key:_,src:v,alt:t.item.PicDescribes[_]||t.item.Name,title:t.item.PicDescribes[_]||""},null,8,ct))],8,at)]))),256))]),e("p",rt,a(t.item.Toldescribe||""),1),(b=t.item)!=null&&b.Opentime?(s(),o("p",ut,"開放時間："+a(t.item.Opentime),1)):y("",!0),(p=t.item)!=null&&p.Ticketinfo?(s(),o("p",dt,"入場費："+a(t.item.Ticketinfo),1)):y("",!0),(h=t.item)!=null&&h.Travellinginfo?(s(),o("p",mt,"大眾交通資訊："+a(t.item.Travellinginfo),1)):y("",!0),($=t.item)!=null&&$.Parkinginfo?(s(),o("p",vt,"停車資訊："+a(t.item.Parkinginfo),1)):y("",!0),(m=t.item)!=null&&m.Tel?(s(),o("p",ft,"電話："+a(t.item.Tel),1)):y("",!0),(P=t.item)!=null&&P.Website?(s(),o("p",pt,[e("a",{href:t.item.Website,target:"_blank",rel:"noopener noreferrer"},"官方網站",8,gt)])):y("",!0),(w=t.item)!=null&&w.Remarks?(s(),o("p",ht,"注意事項："+a(t.item.Remarks),1)):y("",!0)])):(s(),o("div",yt,u[0]||(u[0]=[e("p",null,"沒有資料",-1)])))}}},_t={class:"text-center pb-5"},xt={key:0,id:"hotel-area",class:"pt-5"},kt={class:"text-center mb-5"},$t={for:"city-select",class:"bg-violet-100 text-violet-800 text-xl px-5 py-2 rounded-full"},Pt=["value"],wt={class:"grid justify-self-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-4"},Ct={class:"title text-2xl font-bold mb-2"},Mt={class:"min-h-[48px]"},Lt=["innerHTML"],Dt={key:1,id:"scenic-area",class:"pt-5"},It={class:"text-center mb-5"},Rt={for:"scenic-city-select",class:"bg-violet-100 text-violet-800 text-xl px-5 py-2 rounded-full"},Tt=["value"],St={class:"grid justify-self-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-4"},Nt={class:"title text-xl font-bold mb-2"},At={class:"text-2xl"},Et={class:"range-wrap",style:{"--min":"5","--max":"20","--val":"10"}},Ht={for:"range-input"},Ot={id:"description"},Ut={__name:"index",setup(t){const g=Re(),u=g.domainUrl;d("台灣住宿與景點資訊"),d("根據政府提供的資訊，從景點附近整理出台灣各地的民宿、旅店、旅館。");const b=d([]),p=d([]),h=d([]),$=d(!0),m=d(""),P=d([]),w=d(!0);d(null),d(null);const v=d(null),_=d("");d([]);const L=d([]),C=d(10),ee=d([]),R=d(!0),te=d(!0),T=d({iconUrl:`${u}/images/taiwan/home.svg`,iconSize:[27,24],iconAnchor:[14,14]}),S=d({iconUrl:`${u}/images/taiwan/pin.svg`,iconSize:[21,28],iconAnchor:[10,18]});let k,f;const V=_e(),ie=ke(),ne=O(()=>m.value?p.value.filter(l=>l.Region===m.value):b.value),se=O(()=>w.value?b.value.slice(0,15):ne.value),le=O(()=>m.value?h.value.filter(l=>l.Region===m.value):h.value.slice(0,15));function oe(){R.value=!R.value,m.value||(w.value=!0)}function X(l,n){let i=l.length,r,x;for(;i;)x=Math.floor(ae(n)*i--),r=l[i],l[i]=l[x],l[x]=r,++n;return l}function ae(l){const n=Math.sin(l)*1e4;return n-Math.floor(n)}function ce(l,n,i,r){const c=(i-l)*Math.PI/180,D=(r-n)*Math.PI/180,B=Math.sin(c/2)*Math.sin(c/2)+Math.cos(l*Math.PI/180)*Math.cos(i*Math.PI/180)*Math.sin(D/2)*Math.sin(D/2);return 6371*(2*Math.atan2(Math.sqrt(B),Math.sqrt(1-B)))}function G(){if(!v.value)return;const n=_.value==="hotel"?h.value:p.value;L.value=n.filter(i=>ce(v.value.Py,v.value.Px,i.Py,i.Px)<=C.value),ee.value=L.value.map(i=>[i.Py,i.Px,{name:i.Name}]),de()}function W(l,n){v.value=l,_.value=n,G(),F(()=>{ue(l.Py,l.Px)})}function re(){v.value=null}async function ue(l,n){f||(f=await E(()=>import("./aTa61G_T.js").then(D=>D.l),__vite__mapDeps([0,1]),import.meta.url).then(D=>D.default)),await E(()=>import("./CQgsVD5f.js").then(D=>D.l),__vite__mapDeps([2,1]),import.meta.url),k&&k.remove();const i=_.value==="hotel",r=i?f.icon(T.value):f.icon(S.value),x=i?f.icon(S.value):f.icon(T.value);k=f.map("map").setView([l,n],13),f.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{minZoom:10,maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(k),f.marker([l,n],{icon:r}).addTo(k).bindPopup(v.value.Name).openPopup(),Z(x,i)}async function de(){if(f||(f=await E(()=>import("./aTa61G_T.js").then(r=>r.l),__vite__mapDeps([0,1]),import.meta.url).then(r=>r.default)),await E(()=>import("./CQgsVD5f.js").then(r=>r.l),__vite__mapDeps([2,1]),import.meta.url),!k||(k.eachLayer(r=>{r instanceof f.Marker&&k.removeLayer(r)}),!v.value))return;const l=_.value==="hotel",n=l?f.icon(T.value):f.icon(S.value),i=l?f.icon(S.value):f.icon(T.value);f.marker([v.value.Py,v.value.Px],{icon:n}).addTo(k).bindPopup(v.value.Name).openPopup(),Z(i,l)}function Z(l,n){if(!k||!L.value.length)return;const i=f.markerClusterGroup();L.value.forEach(r=>{const x=f.marker([r.Py,r.Px],{icon:l});x.on("click",()=>{const c=document.querySelector("#description");c&&we(n?bt:nt,{item:r}).mount(c)}),i.addLayer(x)}),k.addLayer(i)}Q(async()=>{try{const n=await(await fetch(`${g.api.hotel}`)).json();p.value=n.XML_Head.Infos.Info.map(c=>({...c,Region:c.Region===null?c.Add.slice(0,3):c.Region,Pictures:[c.Picture1,c.Picture2,c.Picture3].filter(Boolean),PicDescribes:[c.Picdescribe1,c.Picdescribe2,c.Picdescribe3].filter(Boolean)}));const r=await(await fetch(`${g.api.scenic}`)).json();h.value=r.XML_Head.Infos.Info.map(c=>({...c,Region:c.Region===null?c.Add.slice(0,3):c.Region,Pictures:[c.Picture1,c.Picture2,c.Picture3].filter(Boolean),PicDescribes:[c.Picdescribe1,c.Picdescribe2,c.Picdescribe3].filter(Boolean)}));const x=new Date().getDate();b.value=X([...p.value],x),h.value=X([...h.value],x),P.value=[...new Set(p.value.map(c=>c.Region))],V.query.city&&(P.value.includes(V.query.city)?(m.value=V.query.city,w.value=!1):(m.value="",N()))}catch(l){console.error("Error fetching data:",l)}finally{setTimeout(()=>{$.value=!1},1600)}}),xe(m,l=>{w.value=!1,N()});function N(){ie.push({query:{city:m.value||void 0}})}const j=l=>l<3e3?"text-emerald-500":l>9e3?"text-pink-700":"",me=l=>{const{LowestPrice:n,CeilingPrice:i}=l;return`價位：${n===i?`<span class="${j(i)}">${i}</span>`:`<span class="${j(n)}">${n}</span> ~ <span class="${j(i)}">${i}</span>`}。`};return(l,n)=>(s(),o(M,null,[e("div",null,[A(Ce),e("main",null,[n[8]||(n[8]=e("h1",{class:"text-center py-[5rem] text-cyan-500 text-4xl"},"找住宿？找景點？",-1)),e("div",_t,[e("button",{class:"bg-violet-700 text-violet-50 text-2xl px-5 py-3 min-w-80 rounded-full cursor-pointer",type:"button",onClick:oe},a(R.value?"改用景點找住宿地點":"改用旅宿找附近景點"),1)]),R.value?(s(),o("div",xt,[e("div",kt,[e("label",$t,[H(e("select",{class:"city-select",id:"city-select","onUpdate:modelValue":n[0]||(n[0]=i=>m.value=i),onChange:N},[n[3]||(n[3]=e("option",{value:"",disabled:"",selected:""},"選擇縣市",-1)),n[4]||(n[4]=e("option",{value:""},"全部",-1)),(s(!0),o(M,null,I(P.value,i=>(s(),o("option",{key:i,value:i},a(i),9,Pt))),128))],544),[[J,m.value]])])]),e("div",null,[e("ul",wt,[(s(!0),o(M,null,I(se.value,i=>(s(),z(K,{key:i.Id,item:i,onClick:r=>W(i,"hotel")},{default:U(()=>[e("div",Ct,a(i.Name),1),e("p",Mt,a(i.Add),1),e("ul",null,[e("li",null,"共有 "+a(i.TotalNumberofRooms)+" 間房間。",1),e("li",{innerHTML:me(i)},null,8,Lt)])]),_:2},1032,["item","onClick"]))),128))])])])):(s(),o("div",Dt,[e("div",It,[e("label",Rt,[H(e("select",{class:"city-select",id:"scenic-city-select","onUpdate:modelValue":n[1]||(n[1]=i=>m.value=i),onChange:N},[n[5]||(n[5]=e("option",{value:"",disabled:"",selected:""},"選擇縣市",-1)),n[6]||(n[6]=e("option",{value:""},"全部",-1)),(s(!0),o(M,null,I(P.value,i=>(s(),o("option",{key:i,value:i},a(i),9,Tt))),128))],544),[[J,m.value]])])]),e("div",null,[e("ul",St,[(s(!0),o(M,null,I(le.value,i=>(s(),z(K,{key:i.Id,item:i,onClick:r=>W(i,"scenic")},{default:U(()=>[e("div",Nt,a(i.Name),1),n[7]||(n[7]=e("p",{class:"min-h-[48px]"},null,-1))]),_:2},1032,["item","onClick"]))),128))])])]))]),A(Me)]),A(Oe,{isOpen:!!v.value,onClose:re},{default:U(()=>{var i;return[e("h2",At,a((i=v.value)==null?void 0:i.Name),1),e("div",Et,[H(e("input",{id:"range-input",type:"range",min:"5",max:"20",list:"dl","onUpdate:modelValue":n[2]||(n[2]=r=>C.value=r),onInput:G},null,544),[[$e,C.value]]),n[9]||(n[9]=e("output",{for:"range-input"},"10",-1)),e("label",Ht,"方圓 "+a(C.value)+" 公里內的"+a(_.value==="hotel"?"景點":"旅宿"),1)]),n[10]||(n[10]=e("div",{id:"map-wrapper"},[e("div",{id:"map"})],-1)),e("div",Ot,[(s(),z(Pe(te.value?"DetailHotel":"DetailScenic"),{item:v.value},null,8,["item"]))])]}),_:1},8,["isOpen"]),A(Se,{loading:$.value},null,8,["loading"])],64))}};export{Ut as default};
