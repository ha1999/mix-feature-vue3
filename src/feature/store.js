import { createStore,createLogger } from 'vuex'

import TodoModule from './modules/todo'

import UserModule from './modules/user'

const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
    modules:{
        todo: TodoModule,
        user: UserModule
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})

export default store