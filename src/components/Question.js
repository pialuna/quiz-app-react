import { React, useState } from "react";

import AnswerOption from "./AnswerOption";
import Button from "./Button";

import { RadioGroup } from "@headlessui/react";

function Question({ id }) {
  let [answer, setAnswer] = useState("Tokyo");

  return (
    <div>
      <h1 className={`text-center mb-4`}>Geography</h1>
      <h3 className={`text-center mb-4`}>
        What is the largest city in the world?
      </h3>

      <RadioGroup value={answer} onChange={setAnswer}>
        <RadioGroup.Label className="sr-only">Answer</RadioGroup.Label>
        <RadioGroup.Option value="Tokyo">
          {({ checked }) => <AnswerOption text="Tokyo" checked={checked} />}
        </RadioGroup.Option>
        <RadioGroup.Option value="Hong Kong">
          {({ checked }) => <AnswerOption text="Hong Kong" checked={checked} />}
        </RadioGroup.Option>
        <RadioGroup.Option value="New York">
          {({ checked }) => <AnswerOption text="New York" checked={checked} />}
        </RadioGroup.Option>
      </RadioGroup>

      <div className="w-full flex flex-row justify-center items-center">
        <Button text="back" />
        <Button text="next" />
      </div>
    </div>
  );
}

export default Question;
