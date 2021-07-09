# React Quiz App

A quiz app that consumes a GraphQL API. Built with React (Create React App), Tailwind CSS, and Apollo GraphQL.

## Features

This React app uses the Apollo client to retrieve trivia quizzes from a GraphQL API (that is not public).

A user can see a list of quizzes (`Quizzes` component) and then start a quiz (`Quiz` component) that consists of multiple questions (`Question` component).

After answering the questions of a quiz, a score is displayed for each quiz on the quizzes screen.

## Architecture

The app mainly contains of the following components:

- `Quizzes`, including `QuizCard`
- `Quiz`, including `Question`, including `AnswerOption`

## Design Considerations

- The GraphQL API is called in two places.
  In `Quizzes.js` (to get ID and name of each quiz) and in `Quiz.js` (to get all questions of the quiz), to query only the data that is needed, where it is needed.
- In `App.js`, there is created and exported a [Apollo reactive variable](https://www.apollographql.com/docs/react/local-state/reactive-variables/) to cache all given answers. In `Question.js` the answers are stored in this array, in `QuizCard.js` the score for this quiz is calculated with it and is displayed.

---

## Getting Started

### Development

```sh
# Install dependencies
npm install

# Run the app in development mode
npm start
```

Then open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Testing

There are currently no tests specified.

### Production

To prepare the app for production deployment, run the following command:

```sh
# Build app for production
npm run build
```

---
