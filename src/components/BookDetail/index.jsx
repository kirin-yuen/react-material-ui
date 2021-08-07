import { getBookDetailGql } from "ApolloClient/graphql/books";
import React from "react";
import { useQuery } from "@apollo/client";

export default function BookDetail(props) {
  const { loading, error, data } = useQuery(getBookDetailGql, {
    variables: {
      id: props.selectBookId,
    },
  });

  const displayBookDetails = () => {
    const book = !loading && data.book;
    
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {book.author.books.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div>No book selected...</div>;
    }
  };

  return <div id="book-details">{displayBookDetails()}</div>;
}
