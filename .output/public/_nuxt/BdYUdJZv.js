import{p as c,_ as p,j as v,k as _,c as s,b as i,a as m,g as u,o}from"./CC8Ugsi_.js";import{_ as b,F as f}from"./_KMWV1gj.js";import"./BO6BrK7q.js";const k=c("/video/hiking.webm"),n=c("/images/hiking.webp"),g={class:"bg-sky-900 bg-linear-to-bl from-sky-900 to-purple-300"},y={key:0,src:k,autoplay:"",muted:"",loop:"",playsinline:"",poster:n,class:"background-video"},x={key:1,src:n,alt:"*",class:"background-image"},h={__name:"index",setup(w){const a=v(!1),d=()=>document.createElement("video").canPlayType("video/webm")!=="",r=()=>/Mobi|Android/i.test(navigator.userAgent),l=()=>navigator.connection?navigator.connection.effectiveType==="wifi":!1;return _(async()=>{const t=d(),e=await l();a.value=t&&(!r()||e)}),(t,e)=>(o(),s("div",null,[i(b),m("main",g,[e[0]||(e[0]=u('<div class="wrapper p-4" data-v-06d5d1cb><div class="text-center flex justify-center items-center h-full" data-v-06d5d1cb><div class="pb-[15cqh]" data-v-06d5d1cb><h1 class="text-center py-[2rem] text-sky-400 text-5xl" data-v-06d5d1cb>旅遊住宿地點查詢</h1><p class="text-sky-400" data-v-06d5d1cb>用景點尋找附近合適的旅宿，或是用旅宿查看附近有哪些知名景點</p></div></div></div>',1)),a.value?(o(),s("video",y)):(o(),s("img",x))]),i(f)]))}},A=p(h,[["__scopeId","data-v-06d5d1cb"]]);export{A as default};
