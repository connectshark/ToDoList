import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LS ={
  load(){
    return JSON.parse(localStorage.getItem('vue-todo')||'[]')
  },
  save(data){
    localStorage.setItem('vue-todo',JSON.stringify(data))
  }
}

const filter={
  all(todos){
    return todos
  },
  active(todos){
    return todos.filter(todo=>{
      return !todo.complete
    })
  },
  complete(todos){
    return todos.filter(todo=>{
      return todo.complete
    })
  }
}


export default new Vuex.Store({
  state: {
    todos:[
      {content:'todo-content',complete:false},
      {content:'todo-content',complete:true},
      {content:'todo-content',complete:false},
    ],
  },
  mutations: {
    setTodos:(state,data)=>{
      state.todos=data
      // save
      LS.save(state.todos)
    },
    addTodo:(state,data)=>{
      state.todos.push(data)
      //save
      LS.save(state.todos)
    },
    updateTodo:(state,{index,data})=>{
      state.todos[index].content=data.content
      state.todos[index].complete=data.complete
      //save
      LS.save(state.todos)
    },
    removeTodo:(state,index)=>{
      state.todos.splice(index,1)
      //save
      LS.save(state.todos)
    }
  },
  actions: {
    initTodos:(context)=>{
      context.commit('setTodos',LS.load())
    },
  },
  getters:{
    todoIndex(state){
      return filter[state.route.name](state.todos).map(todo=>state.todos.indexOf(todo))
    }
  },
  modules: {
  }
})