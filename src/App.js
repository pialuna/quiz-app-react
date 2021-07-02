import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="p-4">
          <Switch>
            <Route exact path="/">
              <div>Hello World</div>
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
