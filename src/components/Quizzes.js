import React from "react";
import { useQuery, gql } from "@apollo/client";

import QuizCard from "./QuizCard";

function Quizzes() {
  // TO DO: score as local-only field?

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
  if (error) return <p className="text-purple-600">{error.message}</p>;

  return data.quizzes.map(({ id, name }) => (
    <QuizCard key={id} id={id} name={name} score="" />
  ));
}

export default Quizzes;
