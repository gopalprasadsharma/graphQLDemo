import axios from 'axios';
const baseUrl="http://localhost:4000";


export const createRecord =(props)=>{
    return axios.request({
        method:'post',
        url:baseUrl,
        data:props.data
    })
}

export const getRecord=(queryOptions)=>{
    return axios.request({
        method:'GET',
        url:`${baseUrl}/${queryOptions}`
    })
}

