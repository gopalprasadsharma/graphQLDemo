import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
//import ApolloClient from 'apollo-boost';

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

import './App.css';
import BookList from './Components/BookList';
import AddBook from './Components/AddBook';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  console.log(token,"tokennnnnnnnnnnnnnn");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
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
