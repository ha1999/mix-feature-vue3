import axios from 'axios'

const instanceAxios = () =>  axios.create({
    baseURL: '',
    withCredentials: true,
    timeout: 1000
})

async function get(url, options){
    return instanceAxios().get(url, options)
}

async function post(url, data, options){
    return instanceAxios().post(url, data, options)
}

 async function put(url, data, options){
    return instanceAxios().put(url, data, options)
}

 async function del(url, options){
    return instanceAxios().delete(url, options)
}

export {get, post, put, del}