import{d as r,r as d,m as _,$ as p,c as n,f as t,F as i,b as u,s as h,o as c,v as f,t as m,p as w,j as g,_ as v}from"./index-C0KZXnhx.js";const k=s=>(w("data-v-a2eccd9f"),s=s(),g(),s),x=k(()=>t("div",{class:"news-header",style:{"text-align":"center","font-size":"50px"}},"新闻资讯",-1)),B={class:"news-list"},I=["onClick"],S=["src"],y={class:"news-title"},C=r({__name:"News",setup(s){const l=h(),o=d([]);return _(()=>{console.log("newsList: ",o),p.get("/newslist").then(({data:a})=>{console.log("res: ",a),o.value=a.res})}),(a,L)=>(c(),n(i,null,[x,t("div",B,[(c(!0),n(i,null,u(o.value,e=>(c(),n("div",{class:"news-item",key:e.id,onClick:()=>f(l).push(`/news/show/${e.id}`)},[t("img",{src:e.image,alt:"",class:"news-image"},null,8,S),t("div",y,m(e.title),1)],8,I))),128))])],64))}}),$=v(C,[["__scopeId","data-v-a2eccd9f"]]);export{$ as default};
