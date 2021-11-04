export default {
    addTodo(state, todo){
        state.todo.push(todo)
    },
    remove(state, id){
        state.todo = state.todo.filter(el => el.id !== id)
    }
}