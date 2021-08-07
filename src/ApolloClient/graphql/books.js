/*
 * @Author: ywl
 * @LastEditors: ywl
 */
// import {
//     gql
// } from "apollo-boost";
// import {
//     graphql
// } from "react-apollo";
import {
    gql
} from "@apollo/client";

const getBooksGql = gql `
{
    books{
        name
        id
    }
}
`;

// ! 代表不能为空
const addBookGql = gql `
mutation($name: String!, $genre: String!, $authorId: ID!){
    addBook(name:$name, genre:$genre, authorId:$authorId) {
        name
        id
    }
}
`;

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

export {
    addBookGql,
    getBooksGql,
    getBookDetailGql,
}