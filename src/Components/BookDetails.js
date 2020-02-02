import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBookQuery } from '../schema/schema';
const BookDetails = (props) => {
    const { loading, error, data } = useQuery(getBookQuery, { variables: { id: "5e0ddb65d23a7d2fb0a8ef54" } });
console.log(data,"single Book",error,"error");
    const displayBookDetails=()=>{
        const book=[{name:'ram',genre:'dasd'}];
        if (book.length>0) {
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    {/* <p>{book.author.name}</p>
                    <p>All books by this author:</p>
                    <ul className="other-books">
                        {book.author.books.map(item => {
                            return <li key={item.id}>{item.name}</li>
                        })}
                    </ul> */}
                </div>
            );
        } else {
            return (<div>No book selected...</div>);
        }
    }

    return (
        <div id="book-details">
            {displayBookDetails()}
        </div>
    );
}

export default BookDetails;