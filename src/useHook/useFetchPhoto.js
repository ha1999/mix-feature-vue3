import axios from 'axios'
import {ref, onMounted, watch} from 'vue'

async function fetchTodo(){
    return axios.get('https://jsonplaceholder.typicode.com/todos')
}

export default function useFetchTodo(search){
    const searchQuery = ref('')
    const listTodo = ref([])
    let timer
    const getToDoList = async () => {
        clearTimeout(timer)
        const {data} = await fetchTodo()
        listTodo.value = data.filter(todo => todo.title.includes(searchQuery.value))
    }
    onMounted(getToDoList)
    watch(searchQuery, () => {
        clearTimeout(timer)
        timer = setTimeout(()=> getToDoList(), 1000)
    })
    watch(search, () => console.log(search, '----------------------------'))
    // watch(searchQuery, getToDoList)
    return {
        listTodo,
        searchQuery
    }
}