import React from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import './CSS/App.css';

// Pages
import Creation from './pages/Creation';
import Home from './pages/Home';
import QuizStorage from './pages/QuizStorage';
import Quiz from './pages/Quiz';
import Notice from './pages/Notice';

function App() {
  return (<>
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
    <div className="smallScreen">
      <div className="smallScreen_column">큰 화면으로 키워주세요😅</div>
      <div className="smallScreen_column">모바일에서는 현재 QUIZ HI이용이 불가능합니다😭</div>
      <div className="smallScreen_column">앞으로의 업데이트에서 개선하도록 하겠습니다🤓</div>
    </div>
  </>);
}

export default connect()(App);
