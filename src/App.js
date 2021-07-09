import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Quizzes from "./components/Quizzes";
import Quiz from "./components/Quiz";
import NotFound from "./components/NotFound";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  makeVar,
} from "@apollo/client";

// create reactive variable
export const givenAnswersVar = makeVar([]);

const client = new ApolloClient({
  uri: "https://tilda-quiz.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />

          <div className="p-4 flex justify-center items-center">
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
                <NotFound />
              </Route>
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
