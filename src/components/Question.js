import { React, useState } from "react";

import { RadioGroup } from "@headlessui/react";
import AnswerOption from "./AnswerOption";

import { useReactiveVar } from "@apollo/client";
import { givenAnswersVar } from "../App";

function Question({ quizId, id, text, correctAnswer, options }) {
  // options to array
  const optionsArray = options.split(",");

  const [selectedOption, setSelectedOption] = useState("");
  let givenAnswers = useReactiveVar(givenAnswersVar);

  const saveAnswer = (answer) => {
    setSelectedOption(answer);
    // find the answer of the current question in the givenAnswers array
    let currentQuestionAnswer = givenAnswers.find(
      (question) => question.questionId === id
    );
    // if it was not answered yet, add to givenAnswers array
    if (!currentQuestionAnswer) {
      givenAnswers.push({
        quizId: quizId,
        questionId: id,
        answer: answer,
        isCorrect: answer === correctAnswer,
      });
    } else {
      // update the current answer
      currentQuestionAnswer.answer = answer;
      currentQuestionAnswer.isCorrect = answer === correctAnswer;
    }
    // update the reactive variable givenAnswersVar
    givenAnswersVar(givenAnswers);
  };

  return (
    <div>
      <h3 className={`text-center mb-4`}>{text}</h3>

      <RadioGroup value={selectedOption} onChange={saveAnswer}>
        <RadioGroup.Label className="sr-only">Answer</RadioGroup.Label>
        {optionsArray.map((option, index) => {
          return (
            <RadioGroup.Option value={option} key={index}>
              {({ checked }) => (
                <AnswerOption text={option} checked={checked} />
              )}
            </RadioGroup.Option>
          );
        })}
      </RadioGroup>
    </div>
  );
}

export default Question;
