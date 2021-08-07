import { getBooksGql } from "ApolloClient/graphql/books";
import React, { useState } from "react";
import BookDetail from "components/BookDetail/index";
import { useQuery } from "@apollo/client";

export default () => {
  const [selected, setSelected] = useState(null);
  const { loading, error, data } = useQuery(getBooksGql);

  const renderBooks = () =>
    !loading &&
    data.books.map(({ id, name }) => (
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
};
