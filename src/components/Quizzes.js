import React from "react";
import { useQuery, gql } from "@apollo/client";

import QuizCard from "./QuizCard";

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
  if (error) return <p className="text-purple-600">{error.message}</p>;

  return (
    <div className="w-full md:w-3/4 xl:w-1/2 flex flex-col md:flex-row justify-center items-center">
      {data.quizzes.map(({ id, name }) => (
        <QuizCard key={id} id={id} name={name} />
      ))}
    </div>
  );
}

export default Quizzes;
