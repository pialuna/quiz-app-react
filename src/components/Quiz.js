import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import Question from "./Question";
import Button from "./Button";

function Quiz() {
  const { id, questionId } = useParams();

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
  if (error) return <p className="text-purple-600">{error.message}</p>;

  // Get the current question

  const quiz = { ...data.quizzes[0] };
  let currentIndex = 0;

  if (questionId) {
    currentIndex = quiz.questions.findIndex(
      (question) => question.id === questionId
    );
  }
  const currentQuestion = quiz.questions[currentIndex];

  const previousQuestionId = quiz.questions[currentIndex - 1]?.id;
  const nextQuestionId = quiz.questions[currentIndex + 1]?.id;

  return (
    <div>
      <h1 className={`text-center mb-4`}>{quiz.name}</h1>
      <Question
        quizId={id}
        id={currentQuestion.id}
        text={currentQuestion.text}
        correctAnswer={currentQuestion.answer}
        options={currentQuestion.options}
      />

      <div className="w-full flex flex-row justify-center items-center">
        {previousQuestionId ? (
          <Link to={`/quiz/${id}/question/${previousQuestionId}`}>
            <Button text="back" />
          </Link>
        ) : (
          <Link to={`/dashboard`}>
            <Button text="back" />
          </Link>
        )}
        {nextQuestionId ? (
          <Link to={`/quiz/${id}/question/${nextQuestionId}`}>
            <Button text="next" />
          </Link>
        ) : (
          <Link to={`/dashboard`}>
            <Button text="finish" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Quiz;
