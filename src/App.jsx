import AddBooks from "components/AddBooks/index";
import React from "react";
import ApolloClient from "./ApolloClient";
import BookList from "./components/BookList";

export default function App() {
  return (
    <ApolloClient>
      <div id="main">
        <h1>Ninja's Reading List</h1>
        <BookList />
        <AddBooks />
      </div>
    </ApolloClient>
  );
}
