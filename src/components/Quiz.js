import React from "react";

import Card from "./Card";
import Button from "./Button";

function Quiz() {
  return (
    <Card>
      <h2>Geography</h2>
      <div className="w-full flex flex-row items-center justify-between">
        <p>Score: 8/10</p>
        <Button text="start" />
      </div>
    </Card>
  );
}

export default Quiz;
