(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{11:function(e,t,n){e.exports={wrapper:"Navigation_wrapper__1lctD",list:"Navigation_list__2Z6uO",NavLink:"Navigation_NavLink__3ura2",active:"Navigation_active__1fD5T"}},20:function(e,t,n){e.exports={toggleWrapper:"settings_toggleWrapper__2Mcfs",comment:"settings_comment__3gnyW",active:"settings_active__kJacf"}},3:function(e,t,n){e.exports={"textToggle-enter":"transition_textToggle-enter__1-CG0","textToggle-enter-done":"transition_textToggle-enter-done__d-yi9","textToggle-exit":"transition_textToggle-exit__ifTRU","textToggle-exit-done":"transition_textToggle-exit-done__3Okpc","imgToggle-enter":"transition_imgToggle-enter__2AFYK","imgToggle-enter-done":"transition_imgToggle-enter-done__3LoGe","imgToggle-exit":"transition_imgToggle-exit__15qi9","imgToggle-exit-done":"transition_imgToggle-exit-done__1MC9X","page-enter":"transition_page-enter__1pjJu","page-enter-done":"transition_page-enter-done__13VPS","page-exit":"transition_page-exit__2RfNl","page-exit-done":"transition_page-exit-done__1BT0i"}},32:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var a=n(3),r=n.n(a),o={enter:r.a["textToggle-enter"],enterActive:r.a["textToggle-enter-active"],enterDone:r.a["textToggle-enter-done"],exit:r.a["textToggle-exit"],exitDone:r.a["textToggle-exit-done"]},i={enter:r.a["imgToggle-enter"],enterActive:r.a["imgToggle-enter-active"],enterDone:r.a["imgToggle-enter-done"],exit:r.a["imgToggle-exit"],exitDone:r.a["imgToggle-exit-done"]},l={enter:r.a["page-enter"],enterActive:r.a["page-enter-active"],enterDone:r.a["page-enter-done"],exit:r.a["page-exit"],exitDone:r.a["page-exit-done"]}},36:function(e,t,n){e.exports={App:"App_App__1rcVN"}},39:function(e,t,n){},41:function(e,t,n){e.exports=n(55)},46:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),i=n.n(o),l=(n(46),n(13)),c=n(14),g=n(16),s=n(15),u=n(36),p=n.n(u),m=n(1),_=n(11),h=n.n(_),d=n(17),v=n(20),f=n.n(v),E=n(12),b=function(e){Object(g.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).changeToEnglish=function(){"ENG"!==e.props.language&&e.props.changeLanguage("ENG")},e.changeToPolish=function(){"PL"!==e.props.language&&e.props.changeLanguage("PL")},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:f.a.toggleWrapper},r.a.createElement("div",{className:f.a.language,onClick:this.changeToPolish},r.a.createElement("p",{className:"PL"===this.props.language?f.a.active:null},"PL")),r.a.createElement("div",{className:f.a.language,onClick:this.changeToEnglish},r.a.createElement("p",{className:"ENG"===this.props.language?f.a.active:null},"ENG")))}}]),n}(a.Component),x=Object(E.b)((function(e){return{language:e.language,theme:e.theme}}),(function(e){return{changeLanguage:function(t){return e({type:"CHANGE_LANGUAGE",language:t})}}}))(b),N=function(e){Object(g.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={nav_bars_pl:["Zaczynamy!","Umiej\u0119tno\u015bci","Skontaktuj si\u0119"],nav_bars_eng:["Here we go!","My skills","Contact details"],paths:["/Start","/Skills","/Hire"]},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=0;return r.a.createElement("div",{className:h.a.wrapper},r.a.createElement("div",{className:h.a.list,onMouseOver:this.props.onMouseOver},"PL"===this.props.language?this.state.nav_bars_pl.map((function(n){return r.a.createElement(d.b,{key:n,to:e.state.paths[t++],className:h.a.NavLink,activeClassName:h.a.active},n)})):this.state.nav_bars_eng.map((function(n){return r.a.createElement(d.b,{key:n,to:e.state.paths[t++],className:h.a.NavLink,activeClassName:h.a.active},n)}))),r.a.createElement(x,null))}}]),n}(a.Component),T=Object(E.b)((function(e){return{language:e.language,theme:e.theme}}))(Object(m.g)(N)),k=n(32),O=n(58),j=n(57),y=n(39),A=n.n(y),L=function(){return r.a.createElement("div",{className:A.a.loader},"Loading...")},w=n(25),C=n.n(w),G=C()((function(){return n.e(6).then(n.bind(null,93))})),S=C()((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,94))})),P=C()((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,95))})),D=function(e){Object(g.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={preload:!1},e.preloadContainers=function(){e.state.preload||("/Start"!==e.props.history.location.pathname&&G.preload(),S.preload(),P.preload(),e.setState({preload:!0}))},e.componentDidMount=function(){S.preload()},e}return Object(c.a)(n,[{key:"render",value:function(){var e=r.a.createElement(O.a,null,r.a.createElement(j.a,{key:this.props.location.pathname,classNames:k.b,timeout:0},r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/Start",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(L,null)},r.a.createElement(G,null))}}),r.a.createElement(m.b,{path:"/Skills",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(L,null)},r.a.createElement(S,null))}}),r.a.createElement(m.b,{path:"/Hire",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(L,null)},r.a.createElement(P,null))}}),r.a.createElement(m.a,{from:"/",to:"/Start"}))));return r.a.createElement("div",{className:p.a.App},r.a.createElement(T,{lang:"PL",onMouseOver:this.preloadContainers}),e)}}]),n}(a.Component),M=Object(m.g)(D);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=n(24),W=n(22),J={language:"ENG",theme:!1},U=function(e,t){return Object(W.a)(Object(W.a)({},e),{},{language:t.language})},B=function(e,t){return Object(W.a)(Object(W.a)({},e),{},{theme:!e.theme})},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_LANGUAGE":return U(e,t);case"CHANGE_THEME":return B(e);default:return e}},V=Object(H.b)(R),Z=r.a.createElement(E.a,{store:V},r.a.createElement(d.a,null,r.a.createElement(M,null)));i.a.render(Z,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,2,3]]]);
//# sourceMappingURL=main.1d32e025.chunk.js.map