import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';


const QuizNav = () => {

    return (<div className="quizFinish">
        <Link to="/quiz/finish">
            <button className="btn quizFinish_btn">
                퀴즈 종료하기
            </button>
        </Link>
    </div>);
}

export default connect()(QuizNav);