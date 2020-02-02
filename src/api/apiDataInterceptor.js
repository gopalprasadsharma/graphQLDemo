import axios from 'axios';
const baseUrl="http://localhost:4000";

export const getDatabaseRecord=({collectionName,id})=>{
    return axios.request({
        method:'GET',
        url:`${baseUrl}/${collectionName}/${id}`
    })
}

export const getDatabaseRecords=(queryOptions)=>{
    return axios.request({
        method:'GET',
        url:`${baseUrl}/${queryOptions}`
    })
}


export const createDatabaseRecords =(queryOptions)=>{
    return axios.request({
        method:'POST',
        url:baseUrl,
        data:queryOptions.data
    })
}


export const updateDatabaseRecords =({id,data})=>{
    return axios.request({
        method:'PATCH',
        url:`${baseUrl}/${id}`,
        data
    })
}


export const deleteDatabaseRecord =({id})=>{
    return axios.request({
        method:'DELETE',
        url:`${baseUrl}/${id}`
    })
}