(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{15:function(e,t,n){e.exports={list:"Navigation_list__2Z6uO",NavLink:"Navigation_NavLink__3ura2",active:"Navigation_active__1fD5T"}},3:function(e,t,n){e.exports={"textToggle-enter":"transition_textToggle-enter__1-CG0","textToggle-enter-done":"transition_textToggle-enter-done__d-yi9","textToggle-exit":"transition_textToggle-exit__ifTRU","textToggle-exit-done":"transition_textToggle-exit-done__3Okpc","imgToggle-enter":"transition_imgToggle-enter__2AFYK","imgToggle-enter-done":"transition_imgToggle-enter-done__3LoGe","imgToggle-exit":"transition_imgToggle-exit__15qi9","imgToggle-exit-done":"transition_imgToggle-exit-done__1MC9X","page-enter":"transition_page-enter__1pjJu","page-enter-done":"transition_page-enter-done__13VPS","page-exit":"transition_page-exit__2RfNl","page-exit-done":"transition_page-exit-done__1BT0i"}},30:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var a=n(3),r=n.n(a),o={enter:r.a["textToggle-enter"],enterActive:r.a["textToggle-enter-active"],enterDone:r.a["textToggle-enter-done"],exit:r.a["textToggle-exit"],exitDone:r.a["textToggle-exit-done"]},i={enter:r.a["imgToggle-enter"],enterActive:r.a["imgToggle-enter-active"],enterDone:r.a["imgToggle-enter-done"],exit:r.a["imgToggle-exit"],exitDone:r.a["imgToggle-exit-done"]},l={enter:r.a["page-enter"],enterActive:r.a["page-enter-active"],enterDone:r.a["page-enter-done"],exit:r.a["page-exit"],exitDone:r.a["page-exit-done"]}},34:function(e,t,n){e.exports={App:"App_App__1rcVN"}},36:function(e,t,n){},41:function(e,t,n){e.exports=n(55)},46:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),i=n.n(o),l=(n(46),n(19)),c=n(20),s=n(22),g=n(21),u=n(34),p=n.n(u),m=n(1),d=n(15),_=n.n(d),v=n(12),f=function(e){Object(s.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={nav_bars_pl:["Zaczynamy!","Umiej\u0119tno\u015bci","Zatrudnij :)"],nav_bars_eng:["Here we go!","My skills","Hire me :)"],paths:["/Start","/Skills","/Hire"]},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=0;return r.a.createElement("div",{className:_.a.list,onMouseOver:this.props.onMouseOver},"PL"===this.props.language?this.state.nav_bars_pl.map((function(n){return r.a.createElement(v.b,{key:n,to:e.state.paths[t++],className:_.a.NavLink,activeClassName:_.a.active},n)})):this.state.nav_bars_eng.map((function(n){return r.a.createElement(v.b,{key:n,to:e.state.paths[t++],className:_.a.NavLink,activeClassName:_.a.active},n)})))}}]),n}(a.Component),h=Object(m.g)(f),x=n(30),b=n(58),E=n(57),T=n(36),O=n.n(T),j=function(){return r.a.createElement("div",{className:O.a.loader},"Loading...")},N=n(23),k=n.n(N),y=k()((function(){return n.e(6).then(n.bind(null,93))})),A=k()((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,94))})),w=k()((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,95))})),S=function(e){Object(s.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={preload:!1},e.preloadContainers=function(){e.state.preload||("/Start"!==e.props.history.location.pathname&&y.preload(),A.preload(),w.preload(),e.setState({preload:!0}))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=r.a.createElement(b.a,null,r.a.createElement(E.a,{key:this.props.location.pathname,classNames:x.b,timeout:0},r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/Start",render:function(e){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(j,null)},r.a.createElement(y,Object.assign({},e,{preload:A.preload})))}}),r.a.createElement(m.b,{path:"/Skills",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(j,null)},r.a.createElement(A,null))}}),r.a.createElement(m.b,{path:"/Hire",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(j,null)},r.a.createElement(w,null))}}),r.a.createElement(m.a,{from:"/",to:"/Start"}))));return r.a.createElement("div",{className:p.a.App},r.a.createElement(h,{lang:"PL",onMouseOver:this.preloadContainers}),e)}}]),n}(a.Component),C=Object(m.g)(S);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=n(39),G=n(11),H=n(17),D={lang:"ENG",theme:"LIGHT"},M=function(e,t){return Object(H.a)(Object(H.a)({},e),{},{lang:t.lang})},P=function(e,t){return Object(H.a)(Object(H.a)({},e),{},{theme:t.theme})},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_LANGUAGE":return M(e,t);case"CHANGE_THEME":return P(e,t);default:return e}},B=n(38),I=G.d,J=Object(G.c)({UIReducer:U}),R=Object(G.e)(J,I(Object(G.a)(B.a))),Z=r.a.createElement(L.a,{store:R},r.a.createElement(v.a,null,r.a.createElement(C,null)));i.a.render(Z,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,2,3]]]);
//# sourceMappingURL=main.1a41d674.chunk.js.map