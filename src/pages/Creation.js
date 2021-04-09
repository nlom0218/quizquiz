import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import CreationQuizzes from '../Components/Creation/CreationQuizzes';
import CreationQuizInfo from '../Components/Creation/CreationQuizInfo';
import CreationCompletion from '../Components/Creation/CreationCompletion';

const Creation = () => {
    const [quizzes, setQuizzes] = useState(false)

    const startCreateQuizzes = () => {
        setQuizzes(true)
    }
    return (<>
        <Route exact path="/creation">
            <div className="creation_intro">퀴즈를 만드는 간단한 방법</div>
            <Link to="/creation/info"><button>시작하기</button></Link>
        </Route>
        <Route path="/creation/info">
            <CreationQuizInfo startCreateQuizzes={startCreateQuizzes} />
            {quizzes && <CreationQuizzes />}
        </Route>
        <Route path="/creation/completion"><CreationCompletion /></Route>
    </>);
}

export default connect()(Creation);