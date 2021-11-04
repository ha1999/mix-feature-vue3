export default {
    addTodo(state, user){
        state.user.push(user)
    },
    remove(state, id){
        state.user = state.user.filter(el => el.id !== id)
    }
}