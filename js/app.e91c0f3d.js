(function(t){function e(e){for(var n,c,a=e[0],s=e[1],d=e[2],l=0,p=[];l<a.length;l++)c=a[l],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&p.push(i[c][0]),i[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,d||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,a=1;a<o.length;a++){var s=o[a];0!==i[s]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},i={app:0},r=[];function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/ToDoList/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var d=0;d<a.length;d++)e(a[d]);var u=s;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"31a2":function(t,e,o){},"3e8e":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[o("router-link",{staticClass:"link",attrs:{to:"all"}},[t._v("全部")]),o("router-link",{staticClass:"link",attrs:{to:"active"}},[t._v("未完成")]),o("router-link",{staticClass:"link",attrs:{to:"complete"}},[t._v("已完成")])],1),o("todoInput"),o("div",{attrs:{id:"todoList"}},t._l(t.todoIndex,(function(t){return o("todoItem",{key:t,attrs:{index:t}})})),1)],1)},r=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"todo-input"}},[o("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model.trim",value:t.todo,expression:"todo",modifiers:{trim:!0}}],staticClass:"todo-bar",attrs:{type:"text",placeholder:"請輸入代辦事項"},domProps:{value:t.todo},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitHandler(e)},input:function(e){e.target.composing||(t.todo=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])},a=[],s={name:"todoInput",data:function(){return{todo:""}},methods:{submitHandler:function(){0!==this.todo.length&&(this.$store.commit("addTodo",{content:this.todo,complete:!1}),this.todo="")}}},d=s,u=(o("b120"),o("2877")),l=Object(u["a"])(d,c,a,!1,null,"01be75ad",null),p=l.exports,m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item"},[o("div",{staticClass:"todo-content",on:{dblclick:t.editItem}},[null!==t.edit?o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.edit,expression:"edit",modifiers:{trim:!0}},{name:"focus",rawName:"v-focus"}],staticClass:"edit-bar",attrs:{type:"text"},domProps:{value:t.edit},on:{blur:[t.cancelEdit,function(e){return t.$forceUpdate()}],keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.comfirmEdit(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancelEdit(e)}],input:function(e){e.target.composing||(t.edit=e.target.value.trim())}}}):[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.complete,expression:"complete"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.complete)?t._i(t.complete,null)>-1:t.complete},on:{change:function(e){var o=t.complete,n=e.target,i=!!n.checked;if(Array.isArray(o)){var r=null,c=t._i(o,r);n.checked?c<0&&(t.complete=o.concat([r])):c>-1&&(t.complete=o.slice(0,c).concat(o.slice(c+1)))}else t.complete=i}}}),t._m(0),o("span",{staticClass:"content"},[t._v(t._s(t.todoContent.content))])]),o("i",{staticClass:"material-icons cancel",on:{click:t.deleteItem}},[t._v("clear")])]],2)])},f=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"check"},[o("i",{staticClass:"material-icons"},[t._v("check")])])}],v=(o("a9e3"),{name:"todoItem",data:function(){return{edit:null}},props:{index:{type:Number,required:!0}},methods:{deleteItem:function(){confirm("是否確認刪除".concat(this.todoContent.content,"呢?"))&&this.$store.commit("removeTodo",this.index)},editItem:function(){this.edit=this.todoContent.content},cancelEdit:function(){this.edit=null},comfirmEdit:function(){""!==this.edit&&(this.$store.commit("updateTodo",{index:this.index,data:{content:this.edit,complete:this.todoContent.complete}}),this.cancelEdit())}},computed:{todoContent:function(){return this.$store.state.todos[this.index]},complete:{get:function(){return this.todoContent.complete},set:function(t){this.$store.commit("updateTodo",{index:this.index,data:{content:this.todoContent.content,complete:t}})}}},watch:{}}),h=v,y=(o("66e3"),Object(u["a"])(h,m,f,!1,null,"4e877fc3",null)),b=y.exports,k={name:"app",components:{todoInput:p,todoItem:b},methods:{},mounted:function(){this.$store.dispatch("initTodos")},computed:{todoIndex:function(){return this.$store.getters.todoIndex}}},x=k,g=(o("e805"),Object(u["a"])(x,i,r,!1,null,"d9db1f94",null)),_=g.exports,C=(o("4de4"),o("c975"),o("d81d"),o("a434"),o("b0c0"),o("2f62"));n["a"].use(C["a"]);var O={load:function(){return JSON.parse(localStorage.getItem("vue-todo")||"[]")},save:function(t){localStorage.setItem("vue-todo",JSON.stringify(t))}},w={all:function(t){return t},active:function(t){return t.filter((function(t){return!t.complete}))},complete:function(t){return t.filter((function(t){return t.complete}))}},I=new C["a"].Store({state:{todos:[{content:"todo-content",complete:!1},{content:"todo-content",complete:!0},{content:"todo-content",complete:!1}]},mutations:{setTodos:function(t,e){t.todos=e,O.save(t.todos)},addTodo:function(t,e){t.todos.push(e),O.save(t.todos)},updateTodo:function(t,e){var o=e.index,n=e.data;t.todos[o].content=n.content,t.todos[o].complete=n.complete,O.save(t.todos)},removeTodo:function(t,e){t.todos.splice(e,1),O.save(t.todos)}},actions:{initTodos:function(t){t.commit("setTodos",O.load())}},getters:{todoIndex:function(t){return w[t.route.name](t.todos).map((function(e){return t.todos.indexOf(e)}))}},modules:{}}),T=o("31bd"),E=(o("3e8e"),o("8c4f"));n["a"].use(E["a"]);var $=[{path:"/all",name:"all"},{path:"/active",name:"active"},{path:"/complete",name:"complete"},{path:"*",redirect:"/all"}],j=new E["a"]({routes:$}),P=j;Object(T["sync"])(I,P),n["a"].config.productionTip=!1,n["a"].directive("focus",{inserted:function(t){t.focus()}}),new n["a"]({store:I,router:P,render:function(t){return t(_)}}).$mount("#app")},"66e3":function(t,e,o){"use strict";var n=o("31a2"),i=o.n(n);i.a},"89c8":function(t,e,o){},b120:function(t,e,o){"use strict";var n=o("cb75"),i=o.n(n);i.a},cb75:function(t,e,o){},e805:function(t,e,o){"use strict";var n=o("89c8"),i=o.n(n);i.a}});