(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),r=n(6),i=n(8),a=n(1),u=(n(13),n(14),n(3)),l=n.n(u),b=n(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGHT=2]="LENGHT"}(s||(s={}));var j=function(){var t=Object(a.useState)(s.NONE),e=Object(r.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(!1),u=Object(r.a)(o,2),j=u[0],N=u[1],d=function(t,e){var n=e.sortType,c=e.isReversed,o=Object(i.a)(t);return o.sort((function(t,e){switch(n){case s.ALPHABET:return t.localeCompare(e);case s.LENGHT:return t.length-e.length;default:return 0}})),c&&o.reverse(),o}(h,{sortType:n,isReversed:j});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":n!==s.ALPHABET}),onClick:function(){return c(s.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":n!==s.LENGHT}),onClick:function(){return c(s.LENGHT)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!j}),onClick:function(){return N(!j)},children:"Reverse"}),Object(b.jsx)("button",{type:"button",className:l()("button is-danger",{"is-light":n===s.NONE&&!j}),onClick:function(){c(s.NONE),N(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:d.map((function(t){return Object(b.jsx)("li",{children:t},t)}))})]})};o.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1747089c.chunk.js.map