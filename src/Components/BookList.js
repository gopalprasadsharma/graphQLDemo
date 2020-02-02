import React, { useEffect } from 'react';
import {useQuery} from '@apollo/react-hooks';
import useGraphQL from '../hooks/useGraphQL';
import {getBooksQuery} from '../schema/schema';

const BookList = () => {
    const { databaseRecords,
        gettingDatabaseRecords,
        getDatabaseRecordsDetail } = useGraphQL();

        const {loading,error,data}=useQuery(getBooksQuery);
        console.log(data,"dataaaaaaaaaaaaa");


    // useEffect(() => {
    //     getDatabaseRecordsDetail("posts")
    // }, [])

    const displayBook = () => {
        if (loading) {
            return (<div>Loading Data ................</div>)
        }
        return data.books.map(book => {
            return (
                    <li key={book.id}>{book.name}</li>
            )
        })

    }
    displayBook();
    return (
        <div>
            <ul id="book-list">
            {displayBook()}
            </ul>
            
        </div>
    )
}

export default BookList;