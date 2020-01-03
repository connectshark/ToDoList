<template>
  <div id="app">
    <div id="nav">
      <router-link to="all" class="link">全部</router-link>
      <router-link to="active" class="link">未完成</router-link>
      <router-link to="complete" class="link">已完成</router-link>
    </div>
    <todoInput/>
    <div id="todoList">
      <todoItem
        v-for="index in todoIndex"
        :key="index"
        :index="index"
      />
    </div>
  </div>
</template>
<script>
import todoInput from '@/components/todoInput.vue'
import todoItem from '@/components/todoItem.vue'
export default {
  name:'app',
  components:{
    todoInput,
    todoItem,
  },
  methods: {
  },
  mounted(){
    this.$store.dispatch('initTodos')
  },
  computed: {
    todoIndex:function(){
      return this.$store.getters.todoIndex
    },
  },
}
</script>
<style lang="scss" scoped>
@import "~@/style/mixin/_mixin.scss";
@include scroll-bar-hidden(todoList);
#app{
  background-color: #41B883;
  width: 100%;
  height: 100vh;
  @include font;
  #nav{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: auto;
    padding: 100px 0 0 0;
  }
  #todoList{
    width: 90%;
    margin: auto;
    max-width: 650px;
    height: calc(100vh - 299px);
    overflow-y: scroll;
  }
}
.link{
  color: #fff;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  box-sizing: border-box;
  font-size: 20px;
  margin: 0 15px;
  &:not(:first-child)::before{
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: #fff;
    right: 115%;
  }
}
.router-link-active{
  color: #333;
  background-color: #fff;
}
</style>
