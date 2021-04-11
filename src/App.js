import React from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import './CSS/App.css';

// Components
import Header from './Components/Header';
import Footer from "./Components/Footer"

// Pages
import Creation from './pages/Creation';
import Home from './pages/Home';
import Method from './pages/Method';
import QuizStorage from './pages/QuizStorage';
import QuizTaking from './Components/Quiz/QuizTaking';
import Quiz from './pages/Quiz';
import QuizFinish from './Components/Quiz/QuizFinish';

const mapStateToProps = (state) => {
  return {
    mode: state.mode
  }
}

function App({ mode }) {
  return (
    <div className="App">
      {mode === "normal" &&
        <>
          <Header />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/method"><Method /></Route>
            <Route path="/creation"><Creation /></Route>
            <Route path="/storage"><QuizStorage /></Route>
            <Route path="/quiz"><Quiz /></Route>
          </Switch>
          <Footer />
        </>}
      {mode === "quiz" &&
        <Switch>
          <Route path="/quiz/finish"><QuizFinish /></Route>
          <Route path="/quiz/:id"><QuizTaking /></Route>
        </Switch>
      }

    </div>
  );
}

export default connect(mapStateToProps)(App);
