/*
 * @Author: ywl
 * @LastEditors: ywl
 */
// import {
//     gql
// } from "apollo-boost";
// import {
//     graphql
// } from "react-apollo"
import {
    gql
} from "@apollo/client";

const queryAuthorsGql = gql `
    {
        authors{
            name
            id
        }
    }
`;

export {
    queryAuthorsGql,
}