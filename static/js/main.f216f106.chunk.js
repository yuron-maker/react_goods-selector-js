(this["webpackJsonpreact_goods-selector-js"]=this["webpackJsonpreact_goods-selector-js"]||[]).push([[0],{11:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var n=c(4),s=c.n(n),a=c(3),o=(c(10),c(11),c(1)),r=c(5),i=c.n(r),l=c(0),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(){var t=Object(o.useState)("Jam"),e=Object(a.a)(t,2),c=e[0],n=e[1],s=Object(o.useState)(!0),r=Object(a.a)(s,2),j=r[0],b=r[1];function u(t){n(t),b(!!t)}return Object(l.jsxs)("main",{className:"section container",children:[Object(l.jsx)("h1",{className:"title is-flex is-align-items-center",children:j?Object(l.jsxs)(l.Fragment,{children:["".concat(c," is selected"),Object(l.jsx)("button",{"data-cy":"ClearButton",onClick:function(){return u("")},type:"button",className:"delete ml-3"})]}):"No goods selected"}),Object(l.jsx)("table",{className:"table",children:Object(l.jsx)("tbody",{children:d.map((function(t){return Object(l.jsxs)("tr",{"data-cy":"Good",className:c===t?i()("has-background-success-light"):"",children:[Object(l.jsx)("td",{children:c!==t?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return u(t)},children:"+"})}):Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:function(){return u("")},children:"-"})})}),Object(l.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t})]},t)}))})})]})};s.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.f216f106.chunk.js.map