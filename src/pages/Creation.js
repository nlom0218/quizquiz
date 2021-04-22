import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import CreationQuiz from '../Components/Creation/CreationQuiz';
import CreationCompletion from '../Components/Creation/CreationCompletion';

import CreationQuizSave from '../Components/Creation/CreationQuizSave';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import CreationLoading from '../Components/Creation/CreationLoading';

const Creation = () => {
    return (<>
        <Header />
        <div className="creation_page main">
            <Switch>
                <Route exact path="/creation" > <CreationQuiz /></Route >
                <Route path="/creation/loading"><CreationLoading /></Route>
                <Route path="/creation/completion"><CreationCompletion /></Route>
                <Route path="/creation/quizsave"><CreationQuizSave /></Route>
            </Switch >
        </div >
        <Footer />
    </>);
}

export default connect()(Creation);