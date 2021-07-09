import React from "react";
import { Link } from "react-router-dom";

import Button from "./Button";

// The error / not found page

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <Link to="/" className="flex-shrink-0 mr-4 text-purple-50">
        <Button text="Go to Quiz Dashboard" />
      </Link>
    </div>
  );
};

export default NotFound;
