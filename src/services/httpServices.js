import axios from 'axios';

axios.interceptors.response.use(null,err =>{
    if(err)
    return Promise.reject(err);
})

export default {
    get:axios.get,
    post:axios.post
}