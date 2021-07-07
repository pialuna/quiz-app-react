import { React, useState } from "react";

import AnswerOption from "./AnswerOption";

import { RadioGroup } from "@headlessui/react";

function Question({ text, answer, options }) {
  // options to array
  const optionsArray = options.split(",");
  console.log(optionsArray);

  const [selectedOption, setSelectedOption] = useState(optionsArray[0]);

  // TO DO: check answer

  return (
    <div>
      <h3 className={`text-center mb-4`}>{text}</h3>

      <RadioGroup value={selectedOption} onChange={setSelectedOption}>
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
