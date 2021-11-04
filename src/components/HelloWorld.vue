<script>
import {ref, onMounted, computed, toRefs, watch} from 'vue'
import { useStore } from 'vuex'
import useFetchTodo from '../useHook/useFetchPhoto'
export default {
	props: {
		name: String,
		age: Number,
		date: Number
	},
  	setup(props, context) {
		const store = useStore()
		const count = ref(0)
		const {listTodo, searchQuery} = useFetchTodo()
		return {
			searchQuery,
			count,
			listTodo,
			incrementTodo: () => store.commit('addTodo', {id: Math.floor(Math.random() * 100), name: 'Hello'}),
			incrementUser: () => store.commit('addTodo', {id: Math.floor(Math.random() * 100), name: 'Hello'}),
	}
  }
}
</script>

<template>
	<h1>Composition API vue3</h1>
	<button @click="count++">Click me  {{count}}</button>
	<button @click="incrementTodo">Add todo</button>
	<button @click="incrementUser">Add user</button>
	<input type="text" name="search-todo" id="search" v-model="searchQuery" />
	<ul>
		<li v-for="todo in listTodo" :key="todo.id">
			{{todo.id}} --- {{todo.title}} - {{todo.completed}}
		</li>
	</ul>
</template>