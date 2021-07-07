import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Quizzes from "./components/Quizzes";
import Question from "./components/Question";

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
            <Route exact path="/question">
              <Question />
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
