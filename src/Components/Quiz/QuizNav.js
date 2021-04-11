import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


const QuizNav = () => {
    const [finish, setFinish] = useState(false)

    const onClickFinishBtn = () => {
        setFinish(true)
    }

    return (<>
        <div className="quizFinish">
            <div className="quizFinish_msg">마지막 문제입니다.</div>
            <button
                className="quizFinish_btn"
                onClick={onClickFinishBtn}>
                퀴즈 종료하기
            </button>
        </div>
        {finish && <Redirect push to="/quiz/finish" />}
    </>);
}

export default connect()(QuizNav);