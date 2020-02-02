import { useState} from 'react';
import * as apis from '../api/apiDataInterceptor';
const useGraphQL = () => {

    //get database Record
    const [databaseRecord, setDatabaseRecord] = useState([]);
    const [gettingDatabaseRecord, setGettingDatabaseRecord] = useState(false);
    const [GettingDatabaseRecordError, setGettingDatabaseRecordError] = useState(false);
    const getDatabaseRecordDetail = async (queryOptions) => {
        console.log(queryOptions, "aaaaaaaaaaaaaaa");
        try {
            setGettingDatabaseRecord(true);
            const result = await apis.getDatabaseRecord(queryOptions);
            console.log(result.data);
            setDatabaseRecord(result.data);
        } catch (error) {
            setGettingDatabaseRecordError(true);
        }
        setGettingDatabaseRecord(false);
    }


    //get database Record
    const [databaseRecords, setDatabaseRecords] = useState([]);
    const [gettingDatabaseRecords, setGettingDatabaseRecords] = useState(false);
    const [gettingDatabaseRecordsError, setGettingDatabaseRecordsError] = useState(false);
    const getDatabaseRecordsDetail = async (queryOptions) => {
        try {
            setGettingDatabaseRecords(true);
            const result = await apis.getDatabaseRecords(queryOptions);
            console.log(result.data);
            setDatabaseRecords(result.data);
        } catch (error) {
            setGettingDatabaseRecordsError(true);
        }
        setGettingDatabaseRecords(false);
    }


    //Create database Record
    const [CreateDatabaseRecords, setCreateDatabaseRecords] = useState([]);
    const [creatingDatabaseRecords, setCreatingDatabaseRecords] = useState(false);
    const [creatingDatabaseRecordsError, setCreatingDatabaseRecordsError] = useState(false);
    const createDatabaseRecordDetail = async (queryOptions) => {
        try {
            setCreatingDatabaseRecords(true);
            const result = await apis.createDatabaseRecords(queryOptions);
            console.log(result.data);
            setCreateDatabaseRecords(result.data);
        } catch (error) {
            setCreatingDatabaseRecordsError(true);
        }
        setCreatingDatabaseRecords(false);
    }


    //update database Record
    const [updateDatabaseRecord, setUpdateDatabaseRecord] = useState([]);
    const [updatingDatabaseRecord, setUpdatingDatabaseRecord] = useState(false);
    const [updatingDatabaseRecordError, setUpdatingDatabaseRecordError] = useState(false);
    const updateDatabaseRecordDetail = async (queryOptions) => {
        try {
            setUpdatingDatabaseRecord(true);
            const result = await apis.createDatabaseRecords(queryOptions);
            console.log(result.data);
            setUpdateDatabaseRecord(result.data);
        } catch (error) {
            setUpdatingDatabaseRecordError(true);
        }
        setUpdatingDatabaseRecord(false);
    }


    //delete database Record
    const [deleteDatabaseRecord, setDeleteDatabaseRecord] = useState([]);
    const [deletingDatabaseRecord, setDeletingDatabaseRecord] = useState(false);
    const [deletingDatabaseRecordError, setDeletingDatabaseRecordError] = useState(false);





    const removeDatabaseRecord = async (queryOptions) => {
        try {
            setDeletingDatabaseRecord(true);
            const result = await apis.deleteDatabaseRecord(queryOptions);
            console.log(result.data);
            setDeleteDatabaseRecord(result.data);
        } catch (error) {
            setDeletingDatabaseRecordError(true);
        }
        setDeletingDatabaseRecord(false);
    }

    return {

        databaseRecord,
        gettingDatabaseRecord,
        GettingDatabaseRecordError,
        databaseRecords,
        gettingDatabaseRecords,
        gettingDatabaseRecordsError,
        CreateDatabaseRecords,
        creatingDatabaseRecords,
        creatingDatabaseRecordsError,
        updateDatabaseRecord,
        updatingDatabaseRecord,
        updatingDatabaseRecordError,
        deleteDatabaseRecord,
        deletingDatabaseRecord,
        deletingDatabaseRecordError,

        getDatabaseRecordDetail,
        getDatabaseRecordsDetail,
        updateDatabaseRecordDetail,
        createDatabaseRecordDetail,
        removeDatabaseRecord
    }
}

export default useGraphQL