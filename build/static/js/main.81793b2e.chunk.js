(this.webpackJsonpNotes=this.webpackJsonpNotes||[]).push([[1],{39:function(e,t,n){"use strict";var c=n(92),r=n(25),o=Object(r.b)("todos/add",(function(e){return{payload:{id:Object(c.a)(),todo:e}}})),a=Object(r.b)("todos/delete"),i=Object(r.b)("todos/changeFilter");t.a={addTodo:o,deleteTodo:a,changeFilter:i}},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(9),r=n(57),o=n.n(r);function a(e){var t=e.children;return Object(c.jsx)("div",{className:o.a.container,children:t})}},57:function(e,t,n){e.exports={container:"Container_container__3RIox",container_center:"Container_container_center__1k6Tq"}},75:function(e,t,n){},83:function(e,t,n){e.exports={App:"App_App__aOmNj"}},91:function(e,t,n){"use strict";n.r(t);var c,r=n(9),o=n(0),a=n.n(o),i=(n(75),n(55)),s=(n(83),n(8)),d=n(56),j=Object(o.lazy)((function(){return Promise.all([n.e(4),n.e(0)]).then(n.bind(null,129))})),b=Object(o.lazy)((function(){return n.e(5).then(n.bind(null,131))})),l=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(d.a,{children:Object(r.jsx)(o.Suspense,{fallback:Object(r.jsx)("h1",{children:"\u0417\u0410\u0413\u0420\u0423\u0416\u0410\u0415\u041c \u041c\u0410\u0420\u0428\u0420\u0423\u0422..."}),children:Object(r.jsxs)(s.c,{children:[Object(r.jsx)(s.a,{path:"/",component:j}),Object(r.jsx)(s.a,{children:Object(r.jsx)(b,{})})]})})})})},u=n(49),O=n(45),h=n(46),p=n(15),f=n(25),x=n(39),_=Object(f.c)([],(c={},Object(h.a)(c,x.a.addTodo,(function(e,t){var n=t.payload;return[].concat(Object(O.a)(e),[n])})),Object(h.a)(c,x.a.deleteTodo,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),c)),v=Object(f.c)("",Object(h.a)({},x.a.changeFilter,(function(e,t){return t.payload}))),g=Object(p.c)({items:_,filter:v}),m=n(59),y=n.n(m),k=n(28),T=n(60),A=n.n(T),N=[].concat(Object(O.a)(Object(f.d)({serializableCheck:{ignoredActions:[k.a,k.f,k.b,k.c,k.d,k.e]}})),[y.a]),w={key:"todos",storage:A.a,blacklist:["filter"]},z=Object(f.a)({reducer:{todos:Object(k.g)(w,g)},middleware:N,devTools:!1}),C={store:z,persistor:Object(k.h)(z)},F=n(17),I=n(61),J=n(96);n(87),n(88);Object(F.render)(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(i.a,{store:C.store,children:Object(r.jsx)(I.a,{loading:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c",persistor:C.persistor,children:Object(r.jsxs)(u.a,{children:[Object(r.jsx)(J.a,{}),Object(r.jsx)(l,{})]})})})}),document.getElementById("root"))}},[[91,2,3]]]);
//# sourceMappingURL=main.81793b2e.chunk.js.map