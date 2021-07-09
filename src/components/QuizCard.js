import React from "react";
import { Link } from "react-router-dom";

import Card from "./Card";
import Button from "./Button";

import { useReactiveVar } from "@apollo/client";
import { givenAnswersVar } from "../App";

function QuizCard({ id, name }) {
  const allGivenAnswers = useReactiveVar(givenAnswersVar);
  const thisQuizGivenAnswers = allGivenAnswers.filter(
    (answer) => answer.quizId === id
  );
  // calculate the score
  const score = () => {
    const correctAnswers = thisQuizGivenAnswers.filter(
      (answer) => answer.isCorrect
    );
    return correctAnswers.length;
  };

  return (
    <Card>
      <h2>{name}</h2>
      <div className="w-full flex flex-row items-center justify-between">
        <p>
          {thisQuizGivenAnswers.length > 0
            ? `Score: ${score()} / ${thisQuizGivenAnswers.length} `
            : "not started"}
        </p>
        <Link to={`/quiz/${id}`}>
          {thisQuizGivenAnswers.length > 0 ? (
            <Button text="redo" />
          ) : (
            <Button text="start" />
          )}
        </Link>
      </div>
    </Card>
  );
}

export default QuizCard;
