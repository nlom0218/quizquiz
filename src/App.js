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
import Notice from './pages/Notice';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/method"><Method /></Route>
        <Route path="/creation"><Creation /></Route>
        <Route path="/storage"><QuizStorage /></Route>
        <Route path="/notice"><Notice /></Route>
        <Route exact path="/quiz"><Quiz /></Route>
        <Route path="/quiz/start"><QuizTaking /></Route>
        <Route path="/quiz/finish"><QuizFinish /></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default connect()(App);
