"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[413],{3:function(n,e,r){r.d(e,{w:function(){return i}});var i={colors:{white:"#FFFFFF",darkwhite:"#F7F7FB",black:"#28130e",blue:"#3470FF",darkblue:"#0B44CD",orange:"#fe9a00",grey:"#8A8A89",borderGrey:"#F3F3F2",overlayBcg:"rgba(18, 20, 23, 0.50)"},animation:{duration:"0.25s",cubicBezier:"cubic-bezier(0.4, 0, 0.2, 1)"}}},4628:function(n,e,r){r.d(e,{Dx:function(){return F},H:function(){return B},L6:function(){return j},_6:function(){return v},dk:function(){return C},fI:function(){return y},fO:function(){return Z},fX:function(){return k},jh:function(){return w},xD:function(){return P},zx:function(){return z}});var i,t,o,c,a,l,s,d,p,u,x,h=r(168),f=r(7924),g=r(3),b=r(2202),m=r(4316),w=f.ZP.li(i||(i=(0,h.Z)(["\n  /* width: 274px; */\n"]))),j=f.ZP.img(t||(t=(0,h.Z)(["\n    width: 100%;\n  height: 268px;\n  object-fit: cover;\n\n  border-radius: 14px;\n"]))),Z=f.ZP.div(o||(o=(0,h.Z)(["\nposition: relative;\n\n\n\n"]))),v=f.ZP.button(c||(c=(0,h.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n\n  background-color: transparent;\n  border: none;\n\n  cursor: pointer;\n"]))),k=(0,f.ZP)(b.BgW)(a||(a=(0,h.Z)(["\n  height: 18px;\n  width: 18px;\n\n  color: white;\n"]))),y=(0,f.ZP)(m.$0H)(l||(l=(0,h.Z)(["\n  height: 18px;\n  width: 18px;\n  color: #3470ff;\n"]))),P=f.ZP.div(s||(s=(0,h.Z)(["\n  padding: 14px 0 28px 0;\n"]))),z=f.ZP.button(d||(d=(0,h.Z)(["\nwidth: 100%;\n  color: ",";\n  font-size: 14px;\n  font-weight: 600;\n  line-height: calc(20 / 16);\n  padding: 12px 50px;\n  border: none;\n  border-radius: 12px;\n  background-color: ",";\n  transition: background-color 250ms ",";\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"])),g.w.colors.white,g.w.colors.blue,g.w.animation.cubicBezier,g.w.colors.darkblue),F=f.ZP.div(p||(p=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n\n  & p {\n    color: ",";\n    font-size: 16px;\n    font-weight: 500;\n    line-height: calc(24 / 16);\n  }\n\n  & span {\n    color: ",";\n  }\n"])),g.w.colors.black,g.w.colors.blue),C=f.ZP.div(u||(u=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  row-gap: 4px;\n  height: 40px;\n  overflow: hidden;\n\n  & p {\n    color: rgba(18, 20, 23, 0.5);\n    font-size: 12px;\n    line-height: calc(18 / 12);\n  }\n\n  & p:not(:last-child) {\n    padding-right: 6px;\n    border-right: 1px solid rgba(18, 20, 23, 0.1);\n  }\n\n  & p:not(:first-child) {\n    padding-left: 6px;\n  }\n"]))),B=f.ZP.a(x||(x=(0,h.Z)(["\n  color: ",";\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: calc(20 / 16);\n  padding: 12px 50px;\n  border: none;\n  border-radius: 12px;\n  background-color: ",";\n  transition: background-color 250ms ",";\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"])),g.w.colors.white,g.w.colors.blue,g.w.animation.cubicBezier,g.w.colors.darkblue)},2846:function(n,e,r){r.d(e,{o:function(){return o}});var i,t=r(168),o=r(7924).ZP.ul(i||(i=(0,t.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 29px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"])))},4413:function(n,e,r){r.r(e);var i=r(3433),t=r(9439),o=r(2791),c=r(6214),a=r(4420),l=r(710),s=r(4628),d=r(2846),p=r(8365),u=r(3391),x=r(184);e.default=function(){var n=(0,o.useState)(null),e=(0,t.Z)(n,2),r=e[0],h=e[1],f=(0,o.useState)((function(){var n=localStorage.getItem("favorites");return n?JSON.parse(n):[]})),g=(0,t.Z)(f,2),b=g[0],m=g[1],w=(0,a.v9)(l.qW),j=(0,o.useState)(!1),Z=(0,t.Z)(j,2),v=Z[0],k=Z[1];(0,o.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(b))}),[b]);var y=w.filter((function(n){return b.includes(n.id)}));return(0,x.jsxs)(c.W2,{children:[(0,x.jsx)("h1",{children:"Favorite Cars"}),(0,x.jsxs)(d.o,{children:[y.length>0?y.map((function(n){var e=n.address.split(",").slice(-2),r=(0,t.Z)(e,2),o=r[0],c=r[1];return(0,x.jsxs)(s.jh,{children:[(0,x.jsxs)(s.fO,{children:[(0,x.jsx)(s.L6,{src:n.img,alt:"".concat(n.make," ").concat(n.model)}),(0,x.jsx)(s._6,{type:"button",onClick:function(){return e=n.id,void m((function(n){return n.includes(e)?n.filter((function(n){return n!==e})):[].concat((0,i.Z)(n),[e])}));var e},children:b.includes(n.id)?(0,x.jsx)(s.fI,{}):(0,x.jsx)(s.fX,{})})]}),(0,x.jsxs)(s.xD,{children:[(0,x.jsxs)(s.Dx,{children:[(0,x.jsxs)("p",{children:["".concat(n.make," "),(0,x.jsx)("span",{children:"".concat(n.model,", ")}),n.year]}),(0,x.jsx)("p",{children:n.rentalPrice})]}),(0,x.jsxs)(s.dk,{children:[(0,x.jsx)("p",{children:o}),(0,x.jsx)("p",{children:c}),(0,x.jsx)("p",{children:n.rentalCompany}),(0,x.jsx)("p",{children:n.type}),(0,x.jsx)("p",{children:n.model}),(0,x.jsx)("p",{children:n.mileage}),(0,x.jsx)("p",{children:n.functionalities[0]})]})]}),(0,x.jsx)(s.zx,{type:"button",onClick:function(){return function(n){h(n),k(!0)}(n)},children:"Learn more"})]},n.id)})):(0,x.jsx)("p",{children:"No cars in the favorites list yet."}),v&&r&&(0,x.jsxs)(p.Z,{close:function(){k(!1)},children:[(0,x.jsx)(u.p,{car:r}),(0,x.jsx)(s.H,{href:"tel:+380730000000",children:"Rental car"})]})]})]})}},6214:function(n,e,r){r.d(e,{Ts:function(){return x},W2:function(){return u},oJ:function(){return h}});var i,t,o,c,a,l,s=r(168),d=r(7924),p=r(3),u=d.ZP.div(i||(i=(0,s.Z)(["\n  width: 320px;\n  margin: 0 auto;\n  padding: 0 16px;\n  \n  @media screen and (min-width: 768px) {\n      width: 768px;\n      padding: 0 20px;\n    }\n    \n    @media screen and (min-width: 1440px) {\n        width: 1440px;\n        padding: 0 30px;\n    }\n    "]))),x=(d.ZP.div(t||(t=(0,s.Z)(["\n      padding: 10px 0;\n    "]))),d.ZP.div(o||(o=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])))),h=(d.ZP.img(c||(c=(0,s.Z)(["\n  width: 100px;\n  height: 100px;\n  object-fit: cover;\n"]))),d.ZP.div(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n"]))),d.ZP.button(l||(l=(0,s.Z)(["\n  margin-top: 40px;\n  color: ",";\n  font-size: 14px;\n  font-weight: 600;\n  line-height: calc(20 / 16);\n  padding: 12px 50px;\n  border: none;\n  border-radius: 12px;\n  background-color: ",";\n  transition: background-color 250ms ",";\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"])),p.w.colors.white,p.w.colors.blue,p.w.animation.cubicBezier,p.w.colors.darkblue))},710:function(n,e,r){r.d(e,{qW:function(){return i}});var i=function(n){return n.adverts.items}},8365:function(n,e,r){r.d(e,{Z:function(){return j}});var i,t,o,c,a,l=r(2791),s=r(4164),d=r(4794),p=r(168),u=r(7924),x=r(3),h=r(358),f=u.ZP.div(i||(i=(0,p.Z)(["\n  position: fixed;\n    top: 0px;\n    left: 0px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    overflow-y: auto;\n    z-index: 1;\n    background-color: ",";\n"])),x.w.colors.overlayBcg),g=u.ZP.div(t||(t=(0,p.Z)(["\n    width: 541px;\n    padding: 40px;\n    position: relative;\n    overflow-y: auto;\n    border-radius: 24px;\n    background-color: white;\n    \n"]))),b=u.ZP.div(o||(o=(0,p.Z)(["\nposition: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n  color: #3f51b5;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),m=(u.ZP.button(c||(c=(0,p.Z)(["\n  color: ",";\n  font-size: 14px;\n  font-weight: 600;\n  line-height: calc(20 / 16);\n  padding: 12px 50px;\n  border: none;\n  border-radius: 12px;\n  background-color: ",";\n  transition: background-color 250ms ",";\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"])),x.w.colors.white,x.w.colors.blue,x.w.animation.cubicBezier,x.w.colors.darkblue),(0,u.ZP)(h.apv)(a||(a=(0,p.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 24px;\n  height: 24px;\n  stroke: #121417;\n  cursor: pointer;\n"]))),r(184)),w=document.querySelector("#modal-root"),j=function(n){var e=n.children,r=n.close,i=(0,l.useCallback)((function(n){var e=n.target,i=n.currentTarget,t=n.code;e!==i&&"Escape"!==t||r()}),[r]);return(0,l.useEffect)((function(){return window.addEventListener("keydown",i),function(){return window.removeEventListener("keydown",i)}}),[i]),(0,s.createPortal)((0,m.jsx)(f,{onClick:i,children:(0,m.jsxs)(g,{children:[(0,m.jsx)(b,{type:"button","aria-label":"close button",onClick:r,children:(0,m.jsx)(d.Fk5,{})}),e]})}),w)}},3391:function(n,e,r){r.d(e,{p:function(){return j}});var i,t,o,c,a,l,s=r(5984),d=r(168),p=r(7924),u=r(3),x=p.ZP.div(i||(i=(0,d.Z)(["\n  overflow: hidden;\n  position: relative;\n  height: 248px;\n  border-radius: 14px;\n  background: ",";\n\n  & img {\n    width: 100%;\n    min-height: 248px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n"])),u.w.colors.borderGrey),h=p.ZP.div(t||(t=(0,d.Z)(["\n  padding: 14px 0 28px 0;\n\n  & h1 {\n    color: ",";\n    font-size: 18px;\n    font-weight: 500;\n    line-height: calc(24 / 18);\n    text-align: left;\n    margin-bottom: 8px;\n  }\n\n  & span {\n    color: ",";\n  }\n\n  & h2 {\n    color: ",";\n    font-size: 14px;\n    font-weight: 500;\n    line-height: calc(20 / 14);\n    text-align: left;\n    margin-top: 24px;\n    margin-bottom: 8px;\n  }\n"])),u.w.colors.black,u.w.colors.blue,u.w.colors.black),f=p.ZP.div(o||(o=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n   margin-bottom: 4px;\n\n  & p {\n    color: rgba(18, 20, 23, 0.5);\n    font-size: 12px;\n    line-height: calc(18 / 12);\n  }\n\n  & p:not(:last-child) {\n    padding-right: 6px;\n    border-right: 1px solid rgba(18, 20, 23, 0.1);\n  }\n\n  & p:not(:first-child) {\n    padding-left: 6px;\n  }\n"]))),g=p.ZP.p(c||(c=(0,d.Z)(["\n  margin-top: 14px;\n"]))),b=p.ZP.div(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-bottom: 4px;\n\n  & p {\n    color: rgba(18, 20, 23, 0.5);\n    font-size: 12px;\n    line-height: calc(18 / 12);\n  }\n\n  & p:not(:last-child) {\n    padding-right: 6px;\n  }\n\n  & p:not(:first-child) {\n    padding-left: 6px;\n    border-left: 1px solid rgba(18, 20, 23, 0.1);\n  }\n"]))),m=p.ZP.div(l||(l=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: left;\n  align-items: center;\n  gap: 8px;\n\n  & p {\n    padding: 7px 14px;\n    border-radius: 35px;\n    background: #f9f9f9;\n    font-family: 'Montserrat', sans-serif;\n    color: #363535;\n    font-size: 12px;\n    line-height: calc(18 / 12);\n    letter-spacing: -0.24px;\n  }\n\n  & span {\n    color: ",";\n    font-weight: 600;\n  }\n"])),u.w.colors.blue),w=r(184),j=function(n){var e=n.car,r=e.id,i=e.year,t=e.make,o=e.model,c=e.img,a=e.rentalPrice,l=e.address,d=e.type,p=e.mileage,u=e.accessories,j=e.functionalities,Z=e.description,v=e.rentalConditions,k=e.fuelConsumption,y=e.engineSize,P=l.split(","),z=P[P.length-1],F=P[P.length-2],C=(0,s.x0)();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(x,{children:(0,w.jsx)("img",{src:c,alt:"".concat(t," ").concat(o)})}),(0,w.jsxs)(h,{children:[(0,w.jsxs)("h1",{children:["".concat(t," "),(0,w.jsx)("span",{children:"".concat(o,", ")}),i]}),(0,w.jsxs)(f,{children:[(0,w.jsx)("p",{children:F}),(0,w.jsx)("p",{children:z}),(0,w.jsx)("p",{children:"Id: ".concat(r)}),(0,w.jsx)("p",{children:"Year: ".concat(i)}),(0,w.jsx)("p",{children:"Type: ".concat(d)})]}),(0,w.jsxs)(f,{children:[(0,w.jsx)("p",{children:"Fuel Consumption: ".concat(k)}),(0,w.jsx)("p",{children:"Engine Size: ".concat(y)})]}),(0,w.jsx)(g,{children:Z}),(0,w.jsx)("h2",{children:"Accessories and functionalities:"}),(0,w.jsx)(b,{children:u.map((function(n,e){return(0,w.jsx)("p",{children:n},"".concat(C).concat(e))}))}),(0,w.jsx)(b,{children:j.map((function(n,e){return(0,w.jsx)("p",{children:n},"".concat(C,"0").concat(e))}))}),(0,w.jsx)("h2",{children:"Rental Conditions: "}),(0,w.jsxs)(m,{children:[v.split("\n").map((function(n,e){return(0,w.jsx)("p",{children:0!==e?n:(0,w.jsxs)(w.Fragment,{children:["Minimum age: ",(0,w.jsx)("span",{children:n.substr(13,2)})]})},"".concat(C,"00").concat(e))})),(0,w.jsxs)("p",{children:["Mileage: ",(0,w.jsx)("span",{children:p})]}),(0,w.jsxs)("p",{children:["Price: ",(0,w.jsx)("span",{children:a})]})]})]})]})}}}]);
//# sourceMappingURL=413.b89808e2.chunk.js.map