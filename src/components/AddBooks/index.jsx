import { addBook, getBooksGql } from "ApolloClient/graphql/books";
import { queryAuthors } from "ApolloClient/graphql/authors";
import React, { useState } from "react";
import { flowRight as compose } from "lodash";
// compose was removed from React Apollo 3 (see the Breaking Changes). Now, to use compose, use lodash's flowRight.
// https://stackoverflow.com/questions/57445294/compose-not-exported-from-react-apollo
// import { compose } from "react-apollo";

const ADD_BOOK = "ADD_BOOK";
const QUERY_AUTHORS = "QUERY_AUTHORS";

const AddBooks = (props) => {
  // compose 后 props 会出现 graphql 里的 { name: "xxx"} 命名的对象
  const {
    [QUERY_AUTHORS]: { loading, authors },
  } = props;

  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  const submit = (e) => {
    e.preventDefault();

    // mutation 需要传递参数
    props[ADD_BOOK]({
      // mutation 参数
      variables: {
        name,
        genre,
        authorId,
      },
      // 执行 mutation 后触发查询
      refetchQueries: [
        {
          query: getBooksGql,
        },
      ],
    });
  };

  const renderAuthors = () =>
    !loading &&
    authors.map(({ id, name }) => (
      <option key={id} value={id}>
        {name}
      </option>
    ));

  return (
    <form id="add-book" onSubmit={submit}>
      <div className="field">
        <label>Book name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" onChange={(e) => setGenre(e.target.value)} />
      </div>
      <div className="field">
        <label>Author:</label>
        <select onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select author</option>
          {renderAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

// 多个 graphql 需要用 name 对其命名
export default compose(
  addBook({ name: ADD_BOOK }),
  queryAuthors({ name: QUERY_AUTHORS })
)(AddBooks);
