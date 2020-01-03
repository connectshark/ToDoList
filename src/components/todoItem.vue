<template>
  <div class="todo-item">
    <div class="todo-content" @dblclick="editItem">
      <input type="text"
      class="edit-bar"
      v-if="edit!==null"
      v-model="edit"
      @blur="cancelEdit"
      @keyup.enter="comfirmEdit"
      @keyup.esc="cancelEdit"
      v-focus>
      <template v-else>
      <label>
        <input type="checkbox" v-model="complete" />
        <span class="check">
          <i class="material-icons">check</i>
        </span>
        <span class="content">{{todoContent.content}}</span>
      </label>
      <i class="material-icons cancel" @click="deleteItem">clear</i>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "todoItem",
  data() {
    return {
      edit:null,
    };
  },
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    deleteItem: function() {
      if (confirm(`是否確認刪除${this.todoContent.content}呢?`)) {
        this.$store.commit("removeTodo", this.index);
      }
    },
    editItem:function () {
      this.edit=this.todoContent.content
    },
    cancelEdit:function () {
      this.edit=null
    },
    comfirmEdit:function(){
      this.$store.commit('updateTodo',{
        index:this.index,
        data:{
          content:this.edit,
          complete:this.todoContent.complete
        }
      })
      this.cancelEdit()
    },
  },
  computed: {
    todoContent: function() {
      return this.$store.state.todos[this.index];
    },
    complete: {
      get() {
        return this.todoContent.complete;
      },
      set(val) {
        this.$store.commit("updateTodo", {
          index: this.index,
          data: {
            content: this.todoContent.content,
            complete: val
          }
        });
      }
    }
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
.todo-item {
  padding: 5px 0;
  .todo-content {
    background-color: #fff;
    padding: 30px 10px;
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    border-radius: 3px;
    .edit-bar{
      width: 90%;
      border: 1px solid #ccc;
      padding:4px 10px;
      box-sizing: border-box;
      font-size: 20px;
    }
    label {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
      position: relative;
      min-width: 0;
      input {
        position: absolute;
        z-index: -5;
        left: 0;
        top: 0;
        opacity: 0;
        &:checked~.check i{
          display: block;
        }
        &:checked~.content{
          text-decoration: line-through;
        }
      }
      .check {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid #ccc;
        flex-shrink: 0;
        margin: 0 15px 0 0;
        overflow: hidden;
        i{
          display: none;
          color: #53eda8;
          font-size: 30px;
        }
      }
      .content{
        font-size: 20px;
        line-height: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .cancel {
      margin-left: auto;
      cursor: pointer;
      color: #b12a5b;
      border-radius: 50%;
      flex-shrink: 0;
      &:hover {
        box-shadow: 1px 1px 5px #ccc;
      }
    }
  }
}
</style>