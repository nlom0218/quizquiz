import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import QuizEdit from '../Components/Quiz/QuizEdit';
import QuizIntro from '../Components/Quiz/QuizIntro';
import QuizTaking from '../Components/Quiz/QuizTaking';


const Quiz = () => {

    return (<>
        <Switch>
            <Route exact path="/quiz"><QuizIntro /></Route>
            <Route path="/quiz/start"><QuizTaking /></Route>
            <Route path="/quiz/edit"><QuizEdit /></Route>
        </Switch>
    </>);
}



export default connect()(Quiz);