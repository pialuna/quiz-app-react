import React from "react";

import { useQuery, gql } from "@apollo/client";

import Quiz from "./Quiz";

function Quizzes() {
  const QUIZZES = gql`
    query GetQuizzes {
      quizzes {
        id
        name
      }
    }
  `;
  const { loading, error, data } = useQuery(QUIZZES);

  if (loading) return <p className="text-purple-300">Loading ...</p>;
  if (error) return <p>Error</p>;

  return data.quizzes.map(({ id, name }) => (
    <Quiz key={id} id={id} name={name} />
  ));
}

export default Quizzes;
