import{_ as d}from"./SmallCard.f84c14ad.js";import{u,h as p,f as m,a as t,d as s,t as i,i as e,b as h,j as f,o as g}from"./entry.9a0680c0.js";import{u as b}from"./fetch.fd6107ab.js";import{_ as w}from"./home-image.b2ceb427.js";import"./nuxt-link.ef7593ae.js";import"./asyncData.4e30b45e.js";function y(a){return a.replaceAll(". ",".<br>")}const L={class:"info-group"},v=t("img",{id:"main-img",src:w},null,-1),N={id:"data-container"},S={class:"data"},k={class:"data"},x={class:"data"},B=t("h2",null,"Description",-1),F=["innerHTML"],H={__name:"[id]",async setup(a){let o,l;const _=u().params.id,{data:n}=([o,l]=p(()=>b(f().public.serverURL+"/dogs/"+_,"$Mw9N6YKiXu")),o=await o,l(),o);return(r,C)=>{const c=d;return g(),m("main",null,[t("div",L,[v,t("div",N,[t("p",S,[s("Name: "),t("span",null,i(e(n).name),1)]),t("p",k,[s("Breed: "),t("span",null,i(e(n).breed),1)]),t("p",x,[s("Age: "),t("span",null,i(e(n).age),1)])])]),B,t("p",{id:"description",innerHTML:("newLineOnFullStop"in r?r.newLineOnFullStop:e(y))(e(n).description)},null,8,F),h(c,{title:e(n).location.name,subtitle:e(n).location.city,link:"/locations/"+e(n).location.id},null,8,["title","subtitle","link"])])}}};export{H as default};
