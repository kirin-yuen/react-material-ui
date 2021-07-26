import { getBookDetail } from "ApolloClient/graphql/books";
import React from "react";

function BookDetail(props) {
  const {
    data: { book },
  } = props;
  
  const displayBookDetails = () => {
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

export default getBookDetail({
  // props 变化 则会重新执行 graphql，然后给查询赋参数，并将查询数据返回给 props
  options: (props) => ({
    variables: {
      id: props.selectBookId,
    },
  }),
})(BookDetail);
