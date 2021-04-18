import React from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import './CSS/App.css';

// Pages
import Creation from './pages/Creation';
import Home from './pages/Home';
import Method from './pages/Method';
import QuizStorage from './pages/QuizStorage';
import Quiz from './pages/Quiz';
import Notice from './pages/Notice';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"><Home /></Route>
        {/* <Route path="/method"><Method /></Route> */}
        <Route path="/creation"><Creation /></Route>
        <Route path="/storage"><QuizStorage /></Route>
        <Route path="/notice"><Notice /></Route>
        <Route path="/quiz"><Quiz /></Route>
      </Switch>
    </div>
  );
}

export default connect()(App);
