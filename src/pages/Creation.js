import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import CreationQuizInfo from '../Components/Creation/CreationQuizInfo';
import CreationCompletion from '../Components/Creation/CreationCompletion';

import CreationQuizSave from '../Components/Creation/CreationQuizSave';

const Creation = () => {
    return (<div className="creation_page main">
        <Switch>
            <Route exact path="/creation" > <CreationQuizInfo /></Route >
            <Route path="/creation/completion"><CreationCompletion /></Route>
            <Route path="/creation/quizsave"><CreationQuizSave /></Route>
        </Switch >
    </div >);
}

export default connect()(Creation);