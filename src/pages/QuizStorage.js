import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import QuizStorageIntro from '../Components/QuizStorage.js/QuizStorageIntro';
import useTitle from '../Hooks/useTitle';

const QuizStorage = () => {
    const titleUpdataer = useTitle("Quiz Hi | QuizStorage")

    return (<>
        <Header />
        <div className="quizStorage_page main">
            <Switch>
                <Route exact path="/storage"><QuizStorageIntro /></Route>
            </Switch>
        </div>
        <Footer />
    </>);
}

export default connect()(QuizStorage);