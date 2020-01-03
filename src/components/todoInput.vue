<template>
	<div id="todo-input">
		<input class="todo-bar" type="text" placeholder="請輸入代辦事項"
		v-focus
		v-model.trim="todo"
		@keyup.enter="submitHandler">
	</div>
</template>

<script>
export default {
	name:'todoInput',
	data() {
		return {
			todo:'',
		}
	},
	methods: {
		submitHandler:function () {
			if(this.todo.length===0) return
			this.$store.commit('addTodo',{
				content:this.todo,
				complete:false,
			})
			this.todo=''
		}
	},
}
</script>

<style lang="scss" scoped>
@import "~@/style/mixin/_mixin.scss";
#todo-input{
	padding: 50px 0;
	.todo-bar{
		display: block;
		box-sizing: border-box;
		padding: 15px 10px;
		width: 90%;
		margin: auto;
		max-width: 650px;
		min-width: 0;
		border: none;
		border-radius: 3px;
		font-size: 20px;
		@include font;
		&::placeholder{
			color: #ccc;
		}
		&:focus{
			outline: none;
		}
	}
}
</style>