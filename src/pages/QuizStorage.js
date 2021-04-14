import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import QuizStorageIntro from '../Components/QuizStorage.js/QuizStorageIntro';

const QuizStorage = () => {
    return (<div className="quizStorage_page main">
        <Switch>
            <Route exact path="/storage"><QuizStorageIntro /></Route>
        </Switch>
    </div>);
}

export default connect()(QuizStorage);