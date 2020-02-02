import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import './App.css';
import BookList from './Components/BookList';
import AddBook from './Components/AddBook';

const client=new ApolloClient({
  uri:'http://localhost:4000/graphql'
});
function App() {
 
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <BookList />
      <AddBook />
    </div>
    </ApolloProvider>
  );
  
}

export default App;
