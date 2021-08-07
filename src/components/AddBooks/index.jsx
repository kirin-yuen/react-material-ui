import { addBookGql, getBooksGql } from "ApolloClient/graphql/books";
import { queryAuthorsGql } from "ApolloClient/graphql/authors";
import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

// 多个 graphql 需要用 name 对其命名
export default (props) => {
  const { loading, error, data } = useQuery(queryAuthorsGql);
  const [addBook, addBookState] = useMutation(addBookGql);

  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");
  
  const submit = (e) => {
    e.preventDefault();

    // mutation 需要传递参数
    addBook({
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
    data.authors.map(({ id, name }) => (
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
