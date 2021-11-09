import {get, put, post, del} from './instanceAxios'
async function getPageWord({skip, limit, search}){
    return get(`/english/get-all?search=${search}&skip=${skip}&limit=${limit}`)
            .then(res => res.data)
            .catch(err => console.log(err))
}

export {
    getPageWord
}