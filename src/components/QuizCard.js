import React from "react";
import { Link } from "react-router-dom";

import Card from "./Card";
import Button from "./Button";

function QuizCard({ id, name, score }) {
  // TO DO: calculate score here ?
  return (
    <Card>
      <h2>{name}</h2>
      <div className="w-full flex flex-row items-center justify-between">
        <p>Score: {score || "not started"}</p>
        <Link to={`/quiz/${id}`}>
          <Button text="start" />
        </Link>
      </div>
    </Card>
  );
}

export default QuizCard;
