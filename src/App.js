import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Quizzes from "./components/Quizzes";
import Quiz from "./components/Quiz";

function App() {
  return (
    <>
      <Router>
        <Header />

        <div className="p-4">
          <Switch>
            <Route exact path="/">
              <Quizzes />
            </Route>
            <Route exact path="/dashboard">
              <Quizzes />
            </Route>
            <Route exact path="/quiz/:quizId/question/:questionId">
              <Quiz id="03daf064-0b47-40c5-9b39-0d81a5f58397" />
            </Route>
            <Route exact path="/quiz">
              <Quiz id="03daf064-0b47-40c5-9b39-0d81a5f58397" />
            </Route>
            <Route path="*">
              <div></div>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
