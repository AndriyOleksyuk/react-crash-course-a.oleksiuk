(this["webpackJsonpreact-crash-course-a.oleksiuk"]=this["webpackJsonpreact-crash-course-a.oleksiuk"]||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),u=(a(64),a(14)),o=a(31),s=a.n(o),i=a(110),d=a(57),m=function(e){var t=e.text,a=e.resendHandler,n=e.closeModalHandler;return r.a.createElement(i.a,{show:!!t,onHide:n},r.a.createElement(i.a.Header,null,r.a.createElement(i.a.Title,null,"Request failed")),r.a.createElement(i.a.Body,null,r.a.createElement("p",null,t)),r.a.createElement(i.a.Footer,null,r.a.createElement(d.a,{onClick:a,variant:"secondary"},"Resend")))},E=a(106),b=a(107),f=a(108),h=a(111),v=a(112),O=a(58),p=a(24),y=a(25),j=a(28),k=a(26),H=a(29),g=r.a.createContext("lg");var C,S=r.a.createContext("outline-"),q=(C=function(e){var t=Object(n.useContext)(S),a=Object(n.useRef)(null),l=e.requestHandler,c=e.size,u=e.isRequestSended,o=e.cancelHandler;return Object(n.useEffect)((function(){u&&a.current.focus()}),[u]),r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{onClick:l,variant:t+"primary",size:c,block:!0,disabled:u},"Get Email"),r.a.createElement(d.a,{onClick:o,ref:a,variant:t+"danger",size:c,block:!0,disabled:!u},"Cancel request"))},function(e){function t(){return Object(p.a)(this,t),Object(j.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(H.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(g.Consumer,null,(function(t){return r.a.createElement(C,Object.assign({size:t},e.props))}))}}]),t}(r.a.Component)),x=function(e){var t=e.cancelHandler,a=e.requestHandler,n=e.isRequestSended;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,"First lesson"),r.a.createElement(q,{cancelHandler:t,requestHandler:a,isRequestSended:n})))},w=function(e){var t=e.text,l=e.cancelHandler,c=e.requestHandler,o=e.isRequestSended,s=Object(n.useState)("sm"),i=Object(u.a)(s,2),d=i[0],m=i[1],p=Object(n.useState)(""),y=Object(u.a)(p,2),j=y[0],k=y[1],H=r.a.lazy((function(){return a.e(3).then(a.bind(null,113))}));return r.a.createElement(E.a,null,r.a.createElement(b.a,{className:"show-grid",float:"center"},r.a.createElement(f.a,{xs:12,xsOffset:6},r.a.createElement(h.a,null,r.a.createElement(h.a.Header,null,"Featured"),r.a.createElement(v.a,{type:"radio",defaultValue:d,name:"sizeSwitcher",onChange:m},r.a.createElement(O.a,{variant:"secondary",value:"sm"},"Set small buttons by HOC"),r.a.createElement(O.a,{variant:"secondary",value:"lg"},"Set big buttons by HOC")),r.a.createElement(v.a,{type:"radio",defaultValue:j,name:"outlinedSwitcher",onChange:k},r.a.createElement(O.a,{variant:"outline-secondary",value:"outline-"},"set outline by hook useContext"),r.a.createElement(O.a,{variant:"outline-secondary",value:""},"delete outline by hook useContext")),r.a.createElement(S.Provider,{value:j},r.a.createElement(g.Provider,{value:d},r.a.createElement(x,{text:t,cancelHandler:l,requestHandler:c,isRequestSended:o}))),r.a.createElement(n.Suspense,{fallback:""},r.a.createElement(H,{text:t}))))))},R=function(e){function t(){return Object(p.a)(this,t),Object(j.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(H.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return c.a.createPortal(this.props.children,document.getElementById("response"))}}]),t}(n.Component),z=a(109),F=s.a.CancelToken,B=F.source(),T=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(!1),i=Object(u.a)(o,2),d=i[0],b=i[1],f=Object(n.useState)({}),h=Object(u.a)(f,2),v=h[0],O=h[1],p=function(){c(""),b(!0),O({}),s.a.get("https://randomuser.me/api/",{cancelToken:B.token}).then((function(e){return e.data})).then((function(e){var t=e.results[0];O({email:t.email,data:JSON.stringify(e,null,4)})})).catch((function(e){s.a.isCancel(e)?O({}):c(e.message)})).finally((function(){b(!1),B=F.source()}))},y=function(){d?B.cancel("Operation canceled by the user."):(c(""),b(!1),O({}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{text:v.email,cancelHandler:y,requestHandler:p,isRequestSended:d}),r.a.createElement(m,{text:l,closeModalHandler:y,resendHandler:p}),r.a.createElement(R,null,r.a.createElement(E.a,null,r.a.createElement(z.a,null,v.data))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(103);c.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},59:function(e,t,a){e.exports=a(104)},64:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.f4af1a67.chunk.js.map