import {
    gql
} from "apollo-boost";
import {
    graphql
} from "react-apollo"

const queryAuthorsGql = gql `
    {
        authors{
            name
            id
        }
    }
`;
const queryAuthors = (params) => graphql(queryAuthorsGql, params)


export {
    queryAuthors,
}