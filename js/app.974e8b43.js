(function(e){function t(t){for(var r,a,i=t[0],s=t[1],c=t[2],p=0,f=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},u=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/postgres-express-node-todolist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v(" MY TODO LIST WITH POSTGRESQL EXPRESS NODE TODOLIST ")])],1),n("router-view")],1)},u=[],a=(n("034f"),n("2877")),i={},s=Object(a["a"])(i,o,u,!1,null,null,null),c=s.exports,l=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("TodoList")],1)},f=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.todos,(function(t){return n("div",{key:t.id},[n("p",[e._v(e._s(t.title))])])})),0)},v=[],h=(n("96cf"),n("1da1")),b=n("bc3a"),m=n.n(b),O={name:"TodoList",data:function(){return{todos:[]}},methods:{getAllTodoTitle:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://localhost:4000/api/todos/");case 2:t=e.sent,this.todos=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){this.getAllTodoTitle()}},y=O,g=Object(a["a"])(y,d,v,!1,null,null,null),w=g.exports,T={name:"home",components:{TodoList:w}},_=T,j=Object(a["a"])(_,p,f,!1,null,null,null),x=j.exports;r["a"].use(l["a"]);var S=[{path:"/",name:"home",component:x}],P=new l["a"]({mode:"history",base:"/postgres-express-node-todolist/",routes:S}),E=P,k=n("289d");n("5abe");r["a"].use(k["a"]),r["a"].config.productionTip=!1,new r["a"]({router:E,render:function(e){return e(c)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.974e8b43.js.map