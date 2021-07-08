import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  makeVar,
} from "@apollo/client";

// create reactive variable
export const givenAnswersVar = makeVar([]);

const client = new ApolloClient({
  uri: "https://tilda-quiz.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  //   cache: new InMemoryCache({
  //     // add score as local-only field
  //     typePolicies: {
  //       quizzes: {
  //         fields: {
  //           score: {
  //             read(value, { readField }) {
  //               //   const givenAnswers = givenAnswersVar().map(
  //               //     (question) => {}
  //               //   );

  //               const correctlyAnsweredQuestions = givenAnswersVar().filter(
  //                 (question) => question.correct === true
  //               );
  //               console.log(correctlyAnsweredQuestions);

  //               const numberOfCorrectlyAnsweredQuestions =
  //                 correctlyAnsweredQuestions.length;

  //               console.log(numberOfCorrectlyAnsweredQuestions);

  //               if (numberOfCorrectlyAnsweredQuestions > 0) {
  //                 return `${correctlyAnsweredQuestions.length}/${
  //                   givenAnswersVar().length
  //                 }`;
  //               } else {
  //                 return "not started";
  //               }
  //             },
  //           },
  //         },
  //       },
  //     },
  //   }),
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
