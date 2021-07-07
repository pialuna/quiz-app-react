import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  //   useQuery,
  //   gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://tilda-quiz.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
});

// client
//   .query({
//     query: gql`
//       query GetQuizzes {
//         quizzes {
//           id
//           name
//           questions {
//             answer
//             options
//             text
//           }
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
