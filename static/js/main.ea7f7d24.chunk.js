(this["webpackJsonpweb-task-tracker-self"]=this["webpackJsonpweb-task-tracker-self"]||[]).push([[0],{15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(7),a=n.n(i),s=(n(15),n(10)),o=n(6),d=n(2),l=n(8),j=n.n(l),b=n(0),u=function(e){var t=e.className,n=e.text,r=e.onClick;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("button",{className:t,onClick:r,children:n})})},O=function(e){var t=e.title,n=e.showAdd;return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)(u,{className:"btn",text:"Add",onClick:n})]})};O.prototype={title:j.a.string.isRequired},O.defaultProps={title:"SKN Task Tracker"};var h=O,m=n(9),k=function(e){var t=e.task,n=e.onDelete,r=e.setReminder;return Object(b.jsxs)("div",{className:t.reminder?"reminder":"task",onDoubleClick:function(){return r(t.id)},children:[Object(b.jsx)("h3",{children:t.taskTitle}),Object(b.jsxs)("p",{children:[t.date," ",Object(b.jsx)(m.a,{color:"red",onClick:function(){return n(t)}})]})]})},x=function(e){var t=e.tasks,n=e.onDelete,r=e.setReminder;return Object(b.jsx)("div",{children:t.map((function(e){return Object(b.jsx)(k,{task:e,onDelete:n,setReminder:r},e.id)}))})},f=function(e){var t=e.addTask,n=Object(r.useState)(""),c=Object(d.a)(n,2),i=c[0],a=c[1],s=Object(r.useState)(""),o=Object(d.a)(s,2),l=o[0],j=o[1],u=Object(r.useState)(!1),O=Object(d.a)(u,2),h=O[0],m=O[1],k=Object(r.useState)(!1),x=Object(d.a)(k,2),f=x[0],p=x[1];return Object(b.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!i.trim())return p(!0),void a("");t({taskTitle:i,date:l,reminder:h}),a(""),j(""),m(!1)},children:[Object(b.jsx)("label",{htmlFor:"taskTitle",children:"Task title : "}),Object(b.jsx)("input",{type:"text",id:"taskTitle",value:i,onChange:function(e){a(e.target.value),p(!1)}}),f&&Object(b.jsx)("p",{style:{color:"red"},children:"Task title is required"}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"dateTime",children:"Date & Time : "}),Object(b.jsx)("input",{type:"text",id:"dateTime",value:l,onChange:function(e){return j(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"reminder",children:"Reminder : "}),Object(b.jsx)("input",{type:"checkbox",id:"reminder",checked:h,onChange:function(e){return m(e.target.checked)}}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"submit"})]})},p=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)([{id:1,taskTitle:"Doctors Appt",date:"Feb 5th at 2.30pm",reminder:!0},{id:2,taskTitle:"School meeting",date:"Feb 15th at 10am",reminder:!0},{id:3,taskTitle:"Food shopping",date:"Mar 1st at 12.15pm",reminder:!1}]),a=Object(d.a)(i,2),l=a[0],j=a[1];return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(h,{showAdd:function(){c(!n),console.log("Set show addTask to "+!n)}}),n&&Object(b.jsx)(f,{addTask:function(e){var t=Math.floor(1e4*Math.random());e.id=t,j([].concat(Object(s.a)(l),[e])),console.log(l)}}),l.length>0?Object(b.jsx)(x,{tasks:l,onDelete:function(e){window.confirm('Delete "'.concat(e.taskTitle,'" ?'))&&j(l.filter((function(t){return t.id!==e.id})))},setReminder:function(e){j(l.map((function(t){return t.id===e?Object(o.a)(Object(o.a)({},t),{},{reminder:!t.reminder}):t}))),console.log("Setting reminder for id: "+e)}}):"No task to show"]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),g()}},[[19,1,2]]]);
//# sourceMappingURL=main.ea7f7d24.chunk.js.map