(this["webpackJsonpreact-crash-course-a.oleksiuk"]=this["webpackJsonpreact-crash-course-a.oleksiuk"]||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(10),l=n.n(c),u=(n(72),n(123)),o=n(58),i=n(12),s=n(20),E=n.n(s),d={START_FETCH_DATA:"START_FETCH_DATA",FINISH_FETCH_DATA:"FINISH_FETCH_DATA",HANDLE_ERROR:"HANDLE_ERROR",SET_BUTTONS_SIZE:"SET_BUTTONS_SIZE",SET_BUTTONS_OUTLINE:"SET_BUTTONS_OUTLINE",SET_CANCEL_TOKEN:"SET_CANCEL_TOKEN"},O=function(){return function(e,t){var n=t().request.source,r=E.a.CancelToken;n.cancel("Operation canceled by the user."),n=r.source(),e(m(n))}},b=function(){return function(e,t){var n=t().request.source.token;return e(f()),E.a.get("https://randomuser.me/api/",{cancelToken:n}).then((function(e){return e.data})).then((function(t){var n=t.results[0];e(T({email:n.email,data:JSON.stringify(t,null,4)}))})).catch((function(t){E.a.isCancel(t)?e(T({})):e(p(t.message))}))}},m=function(e){return{type:d.SET_CANCEL_TOKEN,source:e}},f=function(){return{type:d.START_FETCH_DATA}},T=function(e){return{type:d.FINISH_FETCH_DATA,response:e}},p=function(e){return{type:d.HANDLE_ERROR,error:e}};var S={closeModalHandler:O,resendHandler:b},v=Object(i.b)((function(e){return{error:e.request.error}}),S)((function(e){var t=e.error,n=e.resendHandler,r=e.closeModalHandler;return a.a.createElement(u.a,{show:!!t,onHide:r},a.a.createElement(u.a.Header,null,a.a.createElement(u.a.Title,null,"Request failed")),a.a.createElement(u.a.Body,null,a.a.createElement("p",null,t)),a.a.createElement(u.a.Footer,null,a.a.createElement(o.a,{onClick:n,variant:"secondary"},"Resend")))})),y=n(119),h=n(120),_=n(121),g=n(125),j=n(124),N=n(59);var D={cancelHandler:O,requestHandler:b},A=Object(i.b)((function(e){var t=e.request.requestIsSended,n=e.theme;return{btnSize:n.btnSize,btnOutline:n.btnOutline,requestIsSended:t}}),D)((function(e){var t=Object(r.useRef)(null),n=e.requestHandler,c=e.btnSize,l=e.btnOutline,u=e.requestIsSended,i=e.cancelHandler;return Object(r.useEffect)((function(){u&&t.current.focus()}),[u]),a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{onClick:n,variant:l+"primary",size:c,block:!0,disabled:u},"Get Email"),a.a.createElement(o.a,{onClick:i,ref:t,variant:l+"danger",size:c,block:!0,disabled:!u},"Cancel request"))})),w=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(g.a.Body,null,a.a.createElement(g.a.Title,null,"Fourth lesson"),a.a.createElement(A,null)))};var H={setBtnSize:function(e){return{type:d.SET_BUTTONS_SIZE,size:e}},setBtnOutline:function(e){return{type:d.SET_BUTTONS_OUTLINE,outlineValue:e}}},C=Object(i.b)((function(e){var t=e.theme;return{btnSize:t.btnSize,btnOutline:t.btnOutline}}),H)((function(e){var t=e.btnSize,c=e.btnOutline,l=e.setBtnOutline,u=e.setBtnSize,o=a.a.lazy((function(){return n.e(3).then(n.bind(null,126))}));return a.a.createElement(y.a,null,a.a.createElement(h.a,{className:"show-grid",float:"center"},a.a.createElement(_.a,{xs:12,xsOffset:6},a.a.createElement(g.a,null,a.a.createElement(g.a.Header,null,"Featured"),a.a.createElement(j.a,{type:"radio",defaultValue:t,name:"sizeSwitcher",onChange:u},a.a.createElement(N.a,{variant:"secondary",value:"sm"},"Set small buttons"),a.a.createElement(N.a,{variant:"secondary",value:"lg"},"Set big buttons")),a.a.createElement(j.a,{type:"radio",defaultValue:c,name:"outlinedSwitcher",onChange:l},a.a.createElement(N.a,{variant:"outline-secondary",value:"outline-"},"Set outline"),a.a.createElement(N.a,{variant:"outline-secondary",value:""},"Delete outline")),a.a.createElement(w,null),a.a.createElement(r.Suspense,{fallback:""},a.a.createElement(o,null))))))})),I=n(60),k=n(61),R=n(65),q=n(62),F=n(66),z=function(e){function t(){return Object(I.a)(this,t),Object(R.a)(this,Object(q.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return l.a.createPortal(this.props.children,document.getElementById("response"))}}]),t}(r.Component),B=n(122);var P=Object(i.b)((function(e){return{serviceData:e.request.serviceData}}))((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(C,null),a.a.createElement(v,null),a.a.createElement(z,null,a.a.createElement(y.a,null,a.a.createElement(B.a,null,e.serviceData&&e.serviceData.data))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(116);var L=n(63),U=n(64),K=n(13),V=n(26);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(n,!0).forEach((function(t){Object(V.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(n,!0).forEach((function(t){Object(V.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W=Object(K.combineReducers)({request:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{error:"",requestIsSended:!1,serviceData:null,source:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.START_FETCH_DATA:return x({},e,{requestIsSended:!0,error:""});case d.FINISH_FETCH_DATA:return x({},e,{serviceData:t.response,requestIsSended:!1});case d.HANDLE_ERROR:return x({},e,{requestIsSended:!1,error:t.error});case d.SET_CANCEL_TOKEN:return x({},e,{source:t.source});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{btnSize:"sm",btnOutline:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.SET_BUTTONS_SIZE:return M({},e,{btnSize:t.size});case d.SET_BUTTONS_OUTLINE:return M({},e,{btnOutline:t.outlineValue});default:return e}}}),G={request:{error:"",requestIsSended:!1,serviceData:null,source:E.a.CancelToken.source()},theme:{btnSize:"sm",btnOutline:""}},$=Object(K.createStore)(W,G,Object(U.composeWithDevTools)(Object(K.applyMiddleware)(L.a)));l.a.render(a.a.createElement(i.a,{store:$},a.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},67:function(e,t,n){e.exports=n(117)},72:function(e,t,n){}},[[67,1,2]]]);
//# sourceMappingURL=main.8897e3f7.chunk.js.map