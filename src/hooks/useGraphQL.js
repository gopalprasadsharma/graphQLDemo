import { useState, useReducer, useRef } from 'react';
import * as apis from '../api/apiDataInterceptor';
const useGraphQL = () => {
    //create Record
    // const [createRecord, setCreateRecord] = useState();
    // const [creatingRecord, setCreatingRecord] = useState(false);
    // const [createRecordError, setCreateRecordError] = useState(false);
    // const createRecord = async () => {

    // }

    //get d
    const [record, setRecord] = useState([]);
    const [gettingRecord, setGettingRecord] = useState(false);
    const [gettingRecordError, setGettingRecordError] = useState(false);
    const getRecordDetails = async (queryOptions) => {
        try{

            const result = await apis.getRecord(queryOptions);
            console.log(result.data);
            setRecord(result.data);
        } catch(error){
            setGettingRecordError(true);
        }
        

    }

    //update Record
    // const [updateRecord, setUpdateRecord] = useState();
    // const [updatingRecord, setUpdatingRecord] = useState(false);
    // const [updatingRecordError, setUpdatingRecordError] = useState(false);
    // const updateRecord = async () => {

    // }

    //delete Record
    // const [deleteRecord, setDeleteRecord] = useState();
    // const [deletingRecord, setDeletingRecord] = useState(false);
    // const [deletingRecordError, setDeletingRecordError] = useState(false);
    // const deleteRecord = async () => {

    // }

    return {
        state : {
            record
        },
        getRecordDetails
    }
}

export default useGraphQL