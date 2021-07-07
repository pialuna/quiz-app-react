import React from "react";
import { useQuery, gql } from "@apollo/client";

import Question from "./Question";
import Button from "./Button";

function Quiz({ id }) {
  const QUIZ = gql`
    query GetQuiz($id: uuid!) {
      quizzes(where: { id: { _eq: $id } }) {
        name
        questions {
          id
          text
          answer
          options
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(QUIZ, {
    variables: {
      id,
    },
  });

  if (loading) return <p className="text-purple-300">Loading ...</p>;
  if (error) {
    console.log(error);
    return <p>Error</p>;
  }

  console.log(data);
  const quizName = data.quizzes[0].name;
  const questions = data.quizzes[0].questions;

  // TO DO: choose question
  const firstQuestion = questions[0];

  return (
    <div>
      <h1 className={`text-center mb-4`}>{quizName}</h1>
      <Question
        text={firstQuestion.text}
        answer={firstQuestion.answer}
        options={firstQuestion.options}
      />

      <div className="w-full flex flex-row justify-center items-center">
        <Button text="back" />
        <Button text="next" />
      </div>
    </div>
  );
}

export default Quiz;
