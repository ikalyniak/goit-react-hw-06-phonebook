(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={form:"Form_form__2TM1N",input:"Form_input__2ESfd"}},17:function(e,t,n){e.exports={contacts:"Contacts_contacts__nkQh1",input:"Contacts_input__jXMGf"}},18:function(e,t,n){e.exports={filter:"Filter_filter__1E5tH"}},19:function(e,t,n){e.exports={app:"App_app__1kX79"}},22:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},31:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(7),o=n.n(r),i=n(5),u=n(16),s=(n(31),n(15)),l=n(38),b=n(3),d={addNewContact:Object(b.b)("phonebook/addNewContact",(function(e){var t=e.name,n=e.number;return{payload:{id:Object(l.a)(),name:t,number:n}}})),deleteContact:Object(b.b)("phonebook/deleteContact"),changeFilter:Object(b.b)("phonebook/changeFilter")},j=n(10),m=n.n(j),f=n(1);var p=Object(i.b)(null,(function(e){return{addContact:function(t){return e(d.addNewContact(t))}}}))((function(e){var t=e.addContact,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),u=Object(s.a)(i,2),l=u[0],b=u[1],d=function(e){var t=e.currentTarget,n=t.name,c=t.value;switch(n){case"name":o(c);break;case"number":b(c);break;default:return}},j=function(){o(""),b("")};return Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({name:r,number:l}),j()},className:m.a.form,children:[Object(f.jsxs)("label",{htmlFor:"",children:["Name",Object(f.jsx)("input",{type:"text",name:"name",value:r,onChange:d,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:m.a.input})]}),Object(f.jsxs)("label",{htmlFor:"",children:["Number",Object(f.jsx)("input",{type:"tel",name:"number",value:l,onChange:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,className:m.a.input})]}),Object(f.jsx)("button",{type:"submit",children:"Add contact"})]})})),O=n(17),h=n.n(O);var x=Object(i.b)((function(e){var t=e.contacts,n=t.filter,c=t.items,a=n.toLowerCase();return{contacts:c.filter((function(e){return e.name.toLowerCase().includes(a)}))}}),(function(e){return{onClick:function(t){return e(d.deleteContact(t))}}}))((function(e){var t=e.onClick,n=e.contacts,c=function(e){t(e)};return Object(f.jsx)("ul",{className:h.a.contacts,children:n.map((function(e){return Object(f.jsxs)("li",{children:[Object(f.jsxs)("p",{children:[e.name,":",e.number]}),Object(f.jsx)("button",{type:"button",onClick:function(){return c(e.id)},children:"Delete"})]},e.id)}))})})),C=n(18),v=n.n(C);var g=Object(i.b)((function(e){return{value:e.filter}}),(function(e){return{onChange:function(t){return e(d.changeFilter(t.target.value))}}}))((function(e){var t=e.value,n=e.onChange;return Object(f.jsxs)("label",{children:["Find contact by name",Object(f.jsx)("input",{name:"filter",type:"text",value:t,onChange:n,className:v.a.filter})]})})),k=n(19),_=n.n(k);function N(){return Object(f.jsxs)("div",{className:_.a.app,children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(p,{}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(g,{}),Object(f.jsx)(x,{})]})}var w,y=n(9),F=n(20),A=n.n(F),S=n(4),z=n(21),E=n.n(z),J=n(11),M=n(2),T=n(22),Z=Object(b.c)(T,(w={},Object(J.a)(w,d.addNewContact,(function(e,t){return[].concat(Object(y.a)(e),[t.payload])})),Object(J.a)(w,d.deleteContact,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),w)),q=Object(b.c)("",Object(J.a)({},d.changeFilter,(function(e,t){return t.payload}))),B=Object(M.b)({items:Z,filter:q}),D=[].concat(Object(y.a)(Object(b.d)({serializableCheck:{ignoredActions:[S.a,S.f,S.b,S.c,S.d,S.e]}})),[A.a]),H={key:"contacts",storage:E.a,blacklist:["filter"]},L=Object(b.a)({reducer:{contacts:Object(S.g)(H,B)},middleware:D,devTools:!1}),X=Object(S.h)(L);o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(i.a,{store:L,children:Object(f.jsx)(u.a,{loading:null,persistor:X,children:Object(f.jsx)(N,{})})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.45b3e62d.chunk.js.map