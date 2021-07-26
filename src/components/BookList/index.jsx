import { getBooks } from "ApolloClient/graphql/books";
import React, { useState } from "react";
import BookDetail from "components/BookDetail/index";

export default getBooks()(({ data: { loading, books } }) => {
  const [selected, setSelected] = useState(null);
  
  const renderBooks = () =>
    !loading &&
    books.map(({ id, name }) => (
      <li key={id} onClick={() => setSelected(id)}>
        {name}
      </li>
    ));

  return (
    <div>
      <ul id="book-list">{renderBooks()}</ul>
      <BookDetail selectBookId={selected} />
    </div>
  );
});
