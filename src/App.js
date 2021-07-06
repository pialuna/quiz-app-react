import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import QuizList from "./components/QuizList";

function App() {
  return (
    <>
      <Router>
        <Header />

        <div className="p-4">
          <Switch>
            <Route exact path="/">
              <QuizList />
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
