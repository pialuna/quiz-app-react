import { React, useState } from "react";

import Option from "./Option";
import Button from "./Button";

import { RadioGroup } from "@headlessui/react";

function Question() {
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
          {({ checked }) => <Option text="Tokyo" checked={checked} />}
        </RadioGroup.Option>
        <RadioGroup.Option value="Hong Kong">
          {({ checked }) => <Option text="Hong Kong" checked={checked} />}
        </RadioGroup.Option>
        <RadioGroup.Option value="New York">
          {({ checked }) => <Option text="New York" checked={checked} />}
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
