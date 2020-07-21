import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "@apollo/react-hooks";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "apollo-link-context";
import { ApolloClient, InMemoryCache } from "apollo-boost";
import "./index.css";
import App from "./components/App";

const httpLink = createUploadLink({
  uri: process.env.REACT_APP_BACKEND_URL + "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ?? "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
