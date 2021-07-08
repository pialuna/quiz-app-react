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
            <Route exact path="/quiz/:id/question/:questionId">
              <Quiz />
            </Route>
            <Route path="/quiz/:id">
              <Quiz />
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
