(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{12:function(e,t,n){e.exports={wrapper:"Navigation_wrapper__1lctD",list:"Navigation_list__2Z6uO",NavLink:"Navigation_NavLink__3ura2",active:"Navigation_active__1fD5T"}},21:function(e,t,n){e.exports={toggleWrapper:"settings_toggleWrapper__2Mcfs",active:"settings_active__kJacf"}},25:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return s}));var a=n(3),o=n.n(a),r=n(9),i=n.n(r),l={enter:o.a["textToggle-enter"],enterActive:o.a["textToggle-enter-active"],enterDone:o.a["textToggle-enter-done"],exit:o.a["textToggle-exit"],exitDone:o.a["textToggle-exit-done"]},g={enter:o.a["imgToggle-enter"],enterActive:o.a["imgToggle-enter-active"],enterDone:o.a["imgToggle-enter-done"],exit:o.a["imgToggle-exit"],exitDone:o.a["imgToggle-exit-done"]},c={enter:o.a["page-enter"],enterActive:o.a["page-enter-active"],enterDone:o.a["page-enter-done"],exit:o.a["page-exit"],exitDone:o.a["page-exit-done"]},s={enter:i.a["buttonToggle-enter"],enterActive:i.a["buttonToggle-enter-active"],enterDone:i.a["buttonToggle-enter-done"],exit:i.a["buttonToggle-exit"],exitDone:i.a["buttonToggle-exit-done"]}},3:function(e,t,n){e.exports={"textToggle-enter":"transition_textToggle-enter__1-CG0","textToggle-enter-done":"transition_textToggle-enter-done__d-yi9","textToggle-exit":"transition_textToggle-exit__ifTRU","textToggle-exit-done":"transition_textToggle-exit-done__3Okpc","imgToggle-enter":"transition_imgToggle-enter__2AFYK","imgToggle-enter-done":"transition_imgToggle-enter-done__3LoGe","imgToggle-exit":"transition_imgToggle-exit__15qi9","imgToggle-exit-done":"transition_imgToggle-exit-done__1MC9X","page-enter":"transition_page-enter__1pjJu","page-enter-done":"transition_page-enter-done__13VPS","page-exit":"transition_page-exit__2RfNl","page-exit-done":"transition_page-exit-done__1BT0i"}},38:function(e,t,n){e.exports={App:"App_App__1rcVN"}},41:function(e,t,n){},44:function(e,t,n){e.exports=n(59)},49:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(10),i=n.n(r),l=(n(49),n(14)),g=n(15),c=n(17),s=n(16),u=n(38),_=n.n(u),p=n(1),m=n(12),d=n.n(m),v=n(18),f=n(21),h=n.n(f),b=n(13),E=n(34),x=n(60),T=n(9),N=n.n(T),j=n(25),O=function(e){var t=Object(a.useState)(!1),n=Object(E.a)(t,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){i(!0)}),[]),o.a.createElement("div",{className:N.a.switch},o.a.createElement(x.a,{in:r,classNames:j.a,timeout:{enter:0,exit:0}},o.a.createElement("div",{className:N.a.toggler,onClick:function(){i((function(e){return!e}))}},o.a.createElement("i",{className:N.a.sun+" fas fa-sun"}),o.a.createElement("i",{className:N.a.moon+" far fa-moon"}))))},k=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).changeToEnglish=function(){"ENG"!==e.props.language&&e.props.changeLanguage("ENG")},e.changeToPolish=function(){"PL"!==e.props.language&&e.props.changeLanguage("PL")},e}return Object(g.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:h.a.toggleWrapper},o.a.createElement("div",{className:h.a.language,onClick:this.changeToPolish},o.a.createElement("p",{className:"PL"===this.props.language?h.a.active:null},"PL")),o.a.createElement("div",{className:h.a.language,onClick:this.changeToEnglish},o.a.createElement("p",{className:"ENG"===this.props.language?h.a.active:null},"ENG")),o.a.createElement(O,null))}}]),n}(a.Component),A=Object(b.b)((function(e){return{language:e.language,theme:e.theme}}),(function(e){return{changeLanguage:function(t){return e({type:"CHANGE_LANGUAGE",language:t})}}}))(k),y=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={nav_bars_pl:["Zaczynamy!","Umiej\u0119tno\u015bci","Skontaktuj si\u0119"],nav_bars_eng:["Here we go!","My skills","Contact details"],paths:["/Start","/Skills","/Hire"]},e}return Object(g.a)(n,[{key:"render",value:function(){var e=this,t=0;return o.a.createElement("div",{className:d.a.wrapper},o.a.createElement("div",{className:d.a.list,onMouseOver:this.props.onMouseOver},"PL"===this.props.language?this.state.nav_bars_pl.map((function(n){return o.a.createElement(v.b,{key:n,to:e.state.paths[t++],className:d.a.NavLink,activeClassName:d.a.active},n)})):this.state.nav_bars_eng.map((function(n){return o.a.createElement(v.b,{key:n,to:e.state.paths[t++],className:d.a.NavLink,activeClassName:d.a.active},n)}))),o.a.createElement(A,null))}}]),n}(a.Component),w=Object(b.b)((function(e){return{language:e.language,theme:e.theme}}))(Object(p.g)(y)),L=n(61),C=n(41),G=n.n(C),S=function(){return o.a.createElement("div",{className:G.a.loader},"Loading...")},D=n(27),P=n.n(D),H=P()((function(){return n.e(6).then(n.bind(null,95))})),M=P()((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,96))})),B=P()((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,97))})),I=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={preload:!1},e.preloadContainers=function(){e.state.preload||("/Start"!==e.props.history.location.pathname&&H.preload(),M.preload(),B.preload(),e.setState({preload:!0}))},e.componentDidMount=function(){M.preload()},e}return Object(g.a)(n,[{key:"render",value:function(){var e=o.a.createElement(L.a,null,o.a.createElement(x.a,{key:this.props.location.pathname,classNames:j.c,timeout:0},o.a.createElement(p.d,null,o.a.createElement(p.b,{path:"/Start",render:function(){return o.a.createElement(a.Suspense,{fallback:o.a.createElement(S,null)},o.a.createElement(H,null))}}),o.a.createElement(p.b,{path:"/Skills",render:function(){return o.a.createElement(a.Suspense,{fallback:o.a.createElement(S,null)},o.a.createElement(M,null))}}),o.a.createElement(p.b,{path:"/Hire",render:function(){return o.a.createElement(a.Suspense,{fallback:o.a.createElement(S,null)},o.a.createElement(B,null))}}),o.a.createElement(p.a,{from:"/",to:"/Start"}))));return o.a.createElement("div",{className:_.a.App},o.a.createElement(w,{lang:"PL",onMouseOver:this.preloadContainers}),e)}}]),n}(a.Component),U=Object(p.g)(I);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=n(23),J=n(24),R={language:"ENG",theme:"LIGHT"},Z=function(e,t){return Object(J.a)(Object(J.a)({},e),{},{language:t.language})},F=function(e,t){return Object(J.a)(Object(J.a)({},e),{},{theme:t.theme})},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_LANGUAGE":return Z(e,t);case"CHANGE_THEME":return F(e,t);default:return e}},q=(n(58),W.b,Object(W.c)(Y)),V=o.a.createElement(b.a,{store:q},o.a.createElement(v.a,null,o.a.createElement(U,null)));i.a.render(V,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports={switch:"toggle_switch__1b724",toggler:"toggle_toggler__ljUBA",sun:"toggle_sun__wSaBj",moon:"toggle_moon__2hEBk",ul:"toggle_ul__2meLE",active:"toggle_active__IYIRv","buttonToggle-enter":"toggle_buttonToggle-enter__LXCA4","buttonToggle-enter-done":"toggle_buttonToggle-enter-done__3YqZi","buttonToggle-exit":"toggle_buttonToggle-exit__37f1Q","buttonToggle-exit-done":"toggle_buttonToggle-exit-done__304sw","slide-enter":"toggle_slide-enter__1FcAI","slide-enter-done":"toggle_slide-enter-done__tRF8a","slide-exit":"toggle_slide-exit__3AsE9","slide-exit-done":"toggle_slide-exit-done__Anv2Z"}}},[[44,2,3]]]);
//# sourceMappingURL=main.3c16bc9d.chunk.js.map