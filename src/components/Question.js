import React from "react";

import Answer from "./Answer";
import Button from "./Button";

function Question() {
  return (
    <div>
      <h1 className={`text-center mb-4`}>Geography</h1>
      <h3 className={`text-center mb-4`}>
        What is the largest city in the world?
      </h3>
      <Answer />
      <Answer />
      <Answer />
      <Answer />
      <div className="w-full flex flex-row justify-center items-center">
        <Button text="back" />
        <Button text="next" />
      </div>
    </div>
  );
}

export default Question;
