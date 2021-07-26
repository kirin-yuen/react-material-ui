import React from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
});


export default function MyApolloClient({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
