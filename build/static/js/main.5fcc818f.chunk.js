(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{103:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),i=a(20),s=a(25),o=a(70),m=a(87),u=Object(s.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.payload;case"LIKE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"CREATE":return[].concat(Object(m.a)(e),[t.payload]);case"UPDATE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==t.payload}));default:return e}}}),p=a(31),d=(a(103),a(8)),f=["btn--primary","btn--outline","btn--test"],E=["btn--medium","btn--large"],b=function(e){var t=e.children,a=e.type,n=e.onClick,c=e.buttonStyle,l=e.buttonSize,i=f.includes(c)?c:f[0],s=E.includes(l)?l:E[0];return r.a.createElement(d.b,{to:"/sign-up",className:"btn-mobile"},r.a.createElement("button",{className:"btn ".concat(i," ").concat(s),onClick:n,type:a},t))};a(105);var g=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),i=Object(p.a)(l,2),s=i[0],o=i[1],m=function(){return c(!1)},u=function(){window.innerWidth<=960?o(!1):o(!0)};return Object(n.useEffect)((function(){u()}),[]),window.addEventListener("resize",u),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-container"},r.a.createElement(d.b,{to:"/",className:"navbar-logo",onClick:m},"Jo. HOBBY"),r.a.createElement("div",{className:"menu-icon",onClick:function(){return c(!a)}},r.a.createElement("i",{className:a?"fas fa-times":"fas fa-bars"})),r.a.createElement("ul",{className:a?"nav-menu active":"nav-menu"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/",className:"nav-links",onClick:m},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/",className:"nav-links",onClick:m},"Products")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{to:"/Ins",className:"nav-links",onClick:m},"GunplaINS")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/sign-up",className:"nav-links-mobile",onClick:m},"Sign Up"))),s&&r.a.createElement(b,{buttonStyle:"btn--outline"},"SIGN UP"))))};a(48),a(106);var v=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"cards__item"},r.a.createElement(d.b,{className:"cards__item__link",to:"/Products"},r.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},r.a.createElement("img",{className:"cards__item__img",alt:"Image",src:e.src})),r.a.createElement("div",{className:"cards__item__info"},r.a.createElement("h5",{className:"cards__item__text"},e.text)))))},h=a(72),y=a.n(h),x=a(73),k=a.n(x),N=a(74),j=a.n(N),O=a(75),w=a.n(O),_=a(76),C=a.n(_);var S=function(){return r.a.createElement("div",{className:"cards"},r.a.createElement("h1",null,"Check out NEW Arrivals!"),r.a.createElement("div",{className:"cards__container"},r.a.createElement("div",{className:"cards__wrapper"},r.a.createElement("ul",{className:"cards__items"},r.a.createElement(v,{src:k.a,text:'MGEX RX-0 Unicorn Gundam "Ver.Ka"',label:"NEW",path:"/services"}),r.a.createElement(v,{src:j.a,text:'MG XXXG-00W0 Wing Gundam Zero EW "Ver.Ka"',label:"OUT OF STOCK",path:"/services"})),r.a.createElement("ul",{className:"cards__items"},r.a.createElement(v,{src:w.a,text:"PG Unleashed RX-78-2 Gundam",label:"NEW",path:"/services"}),r.a.createElement(v,{src:y.a,text:"HGUC XI Gundam VS Penelope Funnel Missile Effect Set 1/144",label:"Pre-Order",path:"/products"}),r.a.createElement(v,{src:C.a,text:"RG MSN-02 Zeong",label:"NEW",path:"/sign-up"})))))},I=(a(107),a(77)),F=a.n(I);var T=function(){return r.a.createElement("div",{className:"hero-container"},r.a.createElement("video",{src:F.a,autoPlay:!0,loop:!0,muted:!0}),r.a.createElement("h1",null,"PG UNLEASHED RX-78-2"),r.a.createElement("p",null,"It is now coming out!"),r.a.createElement("div",{className:"hero-btns"},r.a.createElement(b,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"BUY"),r.a.createElement(b,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:console.log("hey")},"WATCH TRAILER ",r.a.createElement("i",{className:"far fa-play-circle"}))))};a(108);var W=function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement("section",{className:"footer-subscription"},r.a.createElement("p",{className:"footer-subscription-heading"},"Join the newsletter to receive new arrivals"),r.a.createElement("div",{className:"input-areas"},r.a.createElement("form",null,r.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),r.a.createElement(b,{buttonStyle:"btn--outline"},"Subscribe")))),r.a.createElement("div",{class:"footer-links"},r.a.createElement("div",{className:"footer-link-wrapper"},r.a.createElement("div",{class:"footer-link-items"},r.a.createElement("h2",null,"About Us"),r.a.createElement(d.b,{to:"/"},"Careers"),r.a.createElement(d.b,{to:"/"},"Investors"),r.a.createElement(d.b,{to:"/"},"Terms of Service")),r.a.createElement("div",{class:"footer-link-items"},r.a.createElement("h2",null,"Contact Us"),r.a.createElement(d.b,{to:"/"},"Contact"),r.a.createElement(d.b,{to:"/"},"Support"))),r.a.createElement("div",{className:"footer-link-wrapper"},r.a.createElement("div",{class:"footer-link-items"},r.a.createElement("h2",null,"Social Media"),r.a.createElement(d.b,{to:"/"},"Instagram"),r.a.createElement(d.b,{to:"/"},"Facebook"),r.a.createElement(d.b,{to:"/"},"Youtube"),r.a.createElement(d.b,{to:"/"},"Twitter")))),r.a.createElement("section",{class:"social-media"},r.a.createElement("div",{class:"social-media-wrap"},r.a.createElement("div",{class:"footer-logo"},r.a.createElement(d.b,{to:"/",className:"social-logo"},"Jo.HOBBY")),r.a.createElement("small",{class:"website-rights"},"Jo.HOBBY \xa9 2020"),r.a.createElement("div",{class:"social-icons"},r.a.createElement(d.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook"},r.a.createElement("i",{class:"fab fa-facebook-f"})),r.a.createElement(d.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},r.a.createElement("i",{class:"fab fa-instagram"})),r.a.createElement(d.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube"},r.a.createElement("i",{class:"fab fa-youtube"})),r.a.createElement(d.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter"},r.a.createElement("i",{class:"fab fa-twitter"})),r.a.createElement(d.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},r.a.createElement("i",{class:"fab fa-linkedin"}))))))};var B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(S,null),r.a.createElement(W,null))},A=a(171),G=a(170),L=a(172),z=a(165),D=a(175),U=a(169),H=a(168),P=a(162),R=a(164),M=a(174),X=a(166),Y=a(167),J=a(83),K=a.n(J),V=a(84),Z=a.n(V),q=a(82),Q=a.n(q),$=a(78),ee=a.n($),te=a(15),ae=a.n(te),ne=a(27),re=a(37),ce=a.n(re),le="http://localhost:5000/posts",ie=function(e){return ce.a.patch("".concat(le,"/").concat(e,"/likePost"))},se=function(e,t){return ce.a.patch("".concat(le,"/").concat(e),t)},oe=function(e){return ce.a.delete("".concat(le,"/").concat(e))},me=function(e){return function(){var t=Object(ne.a)(ae.a.mark((function t(a){var n,r;return ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,ce.a.post(le,c);case 3:n=t.sent,r=n.data,a({type:"CREATE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},ue=function(e,t){return function(){var a=Object(ne.a)(ae.a.mark((function a(n){var r,c;return ae.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,se(e,t);case 3:r=a.sent,c=r.data,n({type:"UPDATE",payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},pe=a(159),de=Object(pe.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),fe=function(e){var t=e.post,a=e.setCurrentId,n=Object(i.b)(),c=de();return r.a.createElement(P.a,{className:c.card},r.a.createElement(R.a,{className:c.media,image:t.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:t.title}),r.a.createElement("div",{className:c.overlay},r.a.createElement(z.a,{variant:"h6"},t.creator),r.a.createElement(z.a,{variant:"body2"},ee()(t.createdAt).fromNow())),r.a.createElement("div",{className:c.overlay2},r.a.createElement(M.a,{style:{color:"white"},size:"small",onClick:function(){return a(t._id)}},r.a.createElement(Q.a,{fontSize:"default"}))),r.a.createElement("div",{className:c.details},r.a.createElement(z.a,{variant:"body2",color:"textSecondary",component:"h2"},t.tags.map((function(e){return"#".concat(e," ")})))),r.a.createElement(z.a,{className:c.title,gutterBottom:!0,variant:"h5",component:"h2"},t.title),r.a.createElement(X.a,null,r.a.createElement(z.a,{variant:"body2",color:"textSecondary",component:"p"},t.message)),r.a.createElement(Y.a,{className:c.cardActions},r.a.createElement(M.a,{size:"small",color:"primary",onClick:function(){return n((e=t._id,function(){var t=Object(ne.a)(ae.a.mark((function t(a){var n,r;return ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ie(e);case 3:n=t.sent,r=n.data,a({type:"LIKE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(K.a,{fontSize:"small"})," Like ",t.likeCount," "),r.a.createElement(M.a,{size:"small",color:"primary",onClick:function(){return n((e=t._id,function(){var t=Object(ne.a)(ae.a.mark((function t(a){return ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,oe(e);case 3:a({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(Z.a,{fontSize:"small"})," Delete")))},Ee=Object(pe.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),be=function(e){var t=e.setCurrentId,a=Object(i.c)((function(e){return e.posts})),n=Ee();return a.length?r.a.createElement(U.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},a.map((function(e){return r.a.createElement(U.a,{key:e._id,item:!0,xs:12,sm:6,md:6},r.a.createElement(fe,{post:e,setCurrentId:t}))}))):r.a.createElement(H.a,null)},ge=a(21),ve=a(89),he=a(173),ye=a(85),xe=a.n(ye),ke=Object(pe.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(1)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"100%",margin:"20px 0"},buttonSubmit:{marginBottom:20}}})),Ne=function(e){var t=e.currentId,a=e.setCurrentId,c=Object(n.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),l=Object(p.a)(c,2),s=l[0],o=l[1],m=Object(i.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),u=Object(i.b)(),d=ke();Object(n.useEffect)((function(){m&&o(m)}),[m]);var f=function(){a(0),o({creator:"",title:"",message:"",tags:"",selectedFile:""})},E=function(){var e=Object(ne.a)(ae.a.mark((function e(a){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),0===t?(u(me(s)),f()):(u(ue(t,s)),f());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(ve.a,{className:d.paper},r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(d.root," ").concat(d.form),onSubmit:E},r.a.createElement(G.a,{className:d.appBar,position:"static"},r.a.createElement(z.a,{variant:"h5"},t?'Editing "'.concat(m.title,'"'):"Share your work")),r.a.createElement(he.a,{name:"creator",variant:"outlined",label:"FROM WHO",fullWidth:!0,value:s.creator,onChange:function(e){return o(Object(ge.a)(Object(ge.a)({},s),{},{creator:e.target.value}))}}),r.a.createElement(he.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return o(Object(ge.a)(Object(ge.a)({},s),{},{title:e.target.value}))}}),r.a.createElement(he.a,{name:"message",variant:"outlined",label:"Description",fullWidth:!0,multiline:!0,rows:4,value:s.message,onChange:function(e){return o(Object(ge.a)(Object(ge.a)({},s),{},{message:e.target.value}))}}),r.a.createElement(he.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:s.tags,onChange:function(e){return o(Object(ge.a)(Object(ge.a)({},s),{},{tags:e.target.value.split(",")}))}}),r.a.createElement("div",{className:d.fileInput},r.a.createElement(xe.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return o(Object(ge.a)(Object(ge.a)({},s),{},{selectedFile:t}))}})),r.a.createElement(M.a,{className:d.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"upload",fullWidth:!0},"upload"),r.a.createElement(M.a,{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"red",size:"small",onClick:f,fullWidth:!0},"Clear")))},je=Object(pe.a)((function(){return{appBar:{margin:"10px 0px",display:"flex",flexDirection:"row",justifyContent:"flex",alignItems:"center"},heading:{color:"secondary"},image:{marginLeft:"15px"}}})),Oe=a(86),we=a.n(Oe),_e=function(){var e=Object(n.useState)(0),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(i.b)(),s=je();return Object(n.useEffect)((function(){l(function(){var e=Object(ne.a)(ae.a.mark((function e(t){var a,n;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce.a.get(le);case 3:a=e.sent,n=a.data,t({type:"FETCH_ALL",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,l]),r.a.createElement(A.a,null,r.a.createElement(G.a,{className:s.appBar,position:"static"},r.a.createElement(L.a,null,r.a.createElement("img",{className:s.image,src:we.a,alt:"icon",height:"60"}),r.a.createElement(z.a,{className:s.heading,variant:"h2",align:"center"},"GunplaINS"))),r.a.createElement(D.a,{in:!0},r.a.createElement(A.a,{maxWidth:"100%"},r.a.createElement(U.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:2},r.a.createElement(U.a,{item:!0,xs:2,sm:8},r.a.createElement(be,{setCurrentId:c})),r.a.createElement(U.a,{item:!0,xs:10,sm:4},r.a.createElement(Ne,{currentId:a,setCurrentId:c}))))))},Ce=a(12);var Se=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(g,null),r.a.createElement(Ce.c,null,r.a.createElement(Ce.a,{path:"/index.html",component:B}),r.a.createElement(Ce.a,{path:"/",exact:!0,component:B}),r.a.createElement(Ce.a,{path:"/Ins",exact:!0,component:_e}))))},Ie=(a(130),Object(s.e)(u,Object(s.d)(Object(s.a)(o.a))));l.a.render(r.a.createElement(i.a,{store:Ie},r.a.createElement(Se,null)),document.getElementById("root"))},48:function(e,t,a){},72:function(e,t,a){e.exports=a.p+"static/media/p1.f655e101.jpg"},73:function(e,t,a){e.exports=a.p+"static/media/p2.93b287f4.jpg"},74:function(e,t,a){e.exports=a.p+"static/media/p3.fb042986.jpg"},75:function(e,t,a){e.exports=a.p+"static/media/p4.27f0a097.jpg"},76:function(e,t,a){e.exports=a.p+"static/media/p5.a73bf0b4.jpg"},77:function(e,t,a){e.exports=a.p+"static/media/video-1.afffafb5.mp4"},86:function(e,t,a){e.exports=a.p+"static/media/memories.24f82e71.png"},94:function(e,t,a){e.exports=a(131)}},[[94,1,2]]]);
//# sourceMappingURL=main.5fcc818f.chunk.js.map