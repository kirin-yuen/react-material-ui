/*
 * @Author: ywl
 * @LastEditors: ywl
 */
import {
    gql
} from "apollo-boost";
import {
    graphql
} from "react-apollo";

const getBooksGql = gql `
{
    books{
        name
        id
    }
}
`;
const getBooks = (params) => graphql(getBooksGql, params)


// ! 代表不能为空
const addBookGql = gql `
mutation($name: String!, $genre: String!, $authorId: ID!){
    addBook(name:$name, genre:$genre, authorId:$authorId) {
        name
        id
    }
}
`;
const addBook = (params) => graphql(addBookGql, params)


const getBookDetailGql = gql `
    query($id: ID){
        book(id:$id){
            id
            name
            genre
            author{
                id
                name
                age
                books{
                    id
                    name
                    genre
                }
            }
        }
    }
`
const getBookDetail = (params) => graphql(getBookDetailGql, params)

export {
    getBooksGql,
    getBookDetailGql,
    getBooks,
    addBook,
    getBookDetail
}