import React from "react";
// import { ApolloProvider } from "react-apollo";
// import ApolloClient from "apollo-boost";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

export default function MyApolloClient({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
