(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{101:function(e,t,a){"use strict";a.r(t);var n=a(13),i=a(14),o=a(16),s=a(15),r=a(0),c=a.n(r),l=a(86),m=a.n(l),u=a(22),d=a(62),p=a.n(d),g=a(87),h=a.n(g),b=a(88),w=a.n(b),f=a(89),j=a.n(f),y=a(90),v=a.n(y),E=a(91),_=a.n(E),O=a(92),k=a.n(O),z=a(59),S=a(93),L=a.n(S),N=a(57),P=a(32),R=a(12),x=Object(R.b)((function(e){return{language:e.language,theme:e.theme}}))((function(e){var t=Object(r.useState)("Odezwij si\u0119! :) "),a=Object(z.a)(t,1)[0],n=Object(r.useState)("Feel free to contact me :)"),i=Object(z.a)(n,1)[0],o=Object(r.useState)([{content:"Numer telefonu ",data:"+48 735 409 012"},{content:"E-mail",data:"tymoteusz.jagiello@interia.pl"},{content:"Konto Github",data:"https://github.com/Tymoteusz12"},{content:"Linkedin",data:"https://linkedin.com/in/tymoteusz-jagie\u0142\u0142o-1300601b6"},{content:"Moje projekty",data:"https://tymoteusz12.github.io/Projects_web"}]),s=Object(z.a)(o,1)[0],l=Object(r.useState)([{content:"Phone number ",data:"+48 735 409 012"},{content:"E-mail",data:"tymoteusz.jagiello@interia.pl"},{content:"Github account",data:"https://github.com/Tymoteusz12"},{content:"Linkedin",data:"linkedin.com/in/tymoteusz-jagie\u0142\u0142o-1300601b6"},{content:"My projects",data:"https://tymoteusz12.github.io/Projects_web"}]),m=(Object(z.a)(l,1)[0],Object(r.useState)(!1)),u=Object(z.a)(m,2),d=u[0],p=u[1];function g(){document.getElementById("hire").getBoundingClientRect().y<window.innerHeight/4?p(!0):p(!1)}return Object(r.useEffect)((function(){window.addEventListener("scroll",g),p(!1)}),[]),Object(r.useEffect)((function(){return function(){window.removeEventListener("scroll",g),p(!1)}}),[]),c.a.createElement(N.a,{in:d,classNames:P.d,timeout:0},c.a.createElement("div",{className:L.a.Contact,id:"hire"},c.a.createElement("h2",null,"PL"===e.language?a:i),c.a.createElement("ul",null,(e.language,s.map((function(e){return console.log(e.data.slice(0,4)),c.a.createElement("li",{key:e.data},c.a.createElement("p",null,e.content),"https"===e.data.slice(0,5)?c.a.createElement("a",{href:e.data,className:L.a.data},e.data):c.a.createElement("p",{className:L.a.data},e.data))}))))))})),C=a(94),T=a.n(C),W=a(95),G=a.n(W),H=a(96),M=a.n(H),B=a(97),D=a.n(B),J=a(98),F=a.n(J),U=a(67),I=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={hireReasonsPL:[{content:"Zatem, je\u015bli szukasz Front-end Developera, gotowego podj\u0105\u0107 si\u0119 ambitnych zada\u0144",image:window.innerWidth>800?w.a:T.a,id:"za",visible:!1},{content:"Otwartego na wsp\xf3\u0142prac\u0119 z do\u015bwiadczonym zespo\u0142em deweloper\xf3w",image:window.innerWidth>800?j.a:G.a,id:"ot",visible:!1},{content:"Unikaj\u0105cego stagnacji w rozwoju i zdobywaniu do\u015bwiadczenia",image:window.innerWidth>800?v.a:M.a,id:"un",visible:!1},{content:"Stale wzbogacaj\u0105cego swoje portfolio, m\u0142odego i chc\u0105cego zmieni\u0107 otaczaj\u0105c\u0105 rzeczywisto\u015b\u0107 na lepsz\u0105",image:window.innerWidth>800?_.a:D.a,id:"st",visible:!1},{content:"Posiadaj\u0105cego 9 projekt\xf3w stworzonych z w\u0142asnej inicjatywy i 1-go w ramach nauki stworzonego w trakcie kursu Reacta",image:window.innerWidth>800?k.a:F.a,id:"po",visible:!1}],hireReasonsENG:[{content:"Therefore, if you are looking for Front-end Developer, who is ready to take up ambitious tasks",image:window.innerWidth>800?w.a:T.a,id:"za",visible:!1},{content:"The person, who is open for cooperation with experienced developers",image:window.innerWidth>800?j.a:G.a,id:"ot",visible:!1},{content:"The avoidant of stagnation in growth and experience gains",image:window.innerWidth>800?v.a:M.a,id:"un",visible:!1},{content:"Continously enriching his portfolio, young and with will of world change to better",image:window.innerWidth>800?_.a:D.a,id:"st",visible:!1},{content:"Owner of 9 independent projects created from my initiative, and one created during React Course",image:window.innerWidth>800?k.a:F.a,id:"po",visible:!1}],reasonsIMG:[w.a,j.a,v.a,_.a,k.a],identificators:["za","ot","un","st","po"],goToPL:"Przejd\u017a do danych kontaktowych",goToENG:"Go to contact data"},e.scrollHandler=function(){for(var t=0;t<e.state.identificators.length;t++){var a=document.getElementById(e.state.identificators[t]).getBoundingClientRect(),n=0;n="PL"===e.props.language?Object(u.a)({},e.state.hireReasonsPL):Object(u.a)({},e.state.hireReasonsENG),a.y<window.innerHeight/2?(n[t].visible=!0,e.setState(Object(u.a)(Object(u.a)({},e.state.hireReasonsPL),{},{hireReasonsCopy:n}))):(n[t].visible=!1,e.setState(Object(u.a)(Object(u.a)({},e.state.hireReasonsPL),{},{hireReasonsCopy:n})))}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){("PL"===this.props.language?Object(u.a)({},this.state.hireReasonsPL):Object(u.a)({},this.state.hireReasonsENG))[0].visible=!0,window.addEventListener("scroll",this.scrollHandler),this.setState({shouldBeVisible:!1})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollHandler),this.setState({shouldBeVisible:!1})}},{key:"render",value:function(){var e;return e="PL"===this.props.language?this.state.hireReasonsPL.map((function(e){return c.a.createElement(N.a,{key:e.id,in:e.visible,classNames:P.a,timeout:0},c.a.createElement("li",{id:e.id},c.a.createElement("p",null,e.content),c.a.createElement("img",{src:e.image,alt:e.content})))})):this.state.hireReasonsENG.map((function(e){return c.a.createElement(N.a,{key:e.id,in:e.visible,classNames:P.a,timeout:0},c.a.createElement("li",{id:e.id},c.a.createElement("p",null,e.content),c.a.createElement("img",{src:e.image,alt:e.content})))})),c.a.createElement("div",{className:p.a.Summary+" "+h.a.Summary},c.a.createElement(U.Link,{className:h.a.goToContact,to:"hire",smooth:!0,spy:!0,duration:600},c.a.createElement("p",null,"PL"===this.props.language?this.state.goToPL:this.state.goToENG),c.a.createElement("i",{className:"fas fa-mouse-pointer"})),c.a.createElement("ul",{className:h.a.list},e),c.a.createElement(x,null))}}]),a}(r.Component),V=Object(R.b)((function(e){return{language:e.language,theme:e.theme}}))(I),A=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:m.a.Hire},c.a.createElement("div",{className:m.a.overlay}),c.a.createElement(V,null))}}]),a}(r.Component);t.default=A},62:function(e,t,a){e.exports={Summary:"summary_Summary__57bxM",image:"summary_image__3JeCe",close:"summary_close__2Sr6L",background:"summary_background__2-Ok6"}},86:function(e,t,a){e.exports={Hire:"Hire_Hire__GgUrO",overlay:"Hire_overlay__AtfUg"}},87:function(e,t,a){e.exports={Summary:"Summary_Summary__2u4WS",list:"Summary_list__2Jz9j",wrapper:"Summary_wrapper__RHRtQ",goToContact:"Summary_goToContact__1FhaD"}},88:function(e,t,a){e.exports=a.p+"static/media/ambition.9fe65a99.jpg"},89:function(e,t,a){e.exports=a.p+"static/media/team_work.8466f46b.jpg"},90:function(e,t,a){e.exports=a.p+"static/media/grow.eff52e39.jpg"},91:function(e,t,a){e.exports=a.p+"static/media/investment.3e6259a0.jpg"},92:function(e,t,a){e.exports=a.p+"static/media/knowledge.c37753eb.jpg"},93:function(e,t,a){e.exports={Contact:"ContactData_Contact__3kO_8",data:"ContactData_data__2rdJV"}},94:function(e,t,a){e.exports=a.p+"static/media/ambitionMobile.929dc1d8.jpg"},95:function(e,t,a){e.exports=a.p+"static/media/team_workMobile.3113b73f.jpg"},96:function(e,t,a){e.exports=a.p+"static/media/growMobile.f3f0e0d8.jpg"},97:function(e,t,a){e.exports=a.p+"static/media/investmentMobile.03e56aff.jpg"},98:function(e,t,a){e.exports=a.p+"static/media/knowledgeMobile.6f9a55bf.jpg"}}]);
//# sourceMappingURL=4.84614394.chunk.js.map