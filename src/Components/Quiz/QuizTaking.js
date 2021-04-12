import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { HomeIcon } from '../../icon';
import { LS_getAnswersArr, LS_getQuizInfo, LS_getQuizzesArr } from '../../localStorage';
import QuizContent from './QuizContent';
import QuizNav from './QuizNav';

const mapDispatchToProps = (dispatch) => {
    return {
        normalMode: () => dispatch({ type: "CHANGE_NORMAL_MODE" })
    }
}

const QuizTaking = ({ normalMode }) => {
    const [num, setNum] = useState(0)
    const [openAnswer, setOpenAnswer] = useState(false)

    const { quizTitle, numOfQuiz } = LS_getQuizInfo()

    const onClickMoveBtn = (e) => {
        const { target: { className } } = e
        setOpenAnswer(false)
        if (className === "beforeBtn") {
            setNum(num - 1)
        } else if (className === "nextBtn") {
            setNum(num + 1)
        } else if (className === "initBtn") {
            setNum(0)
        }
        else {
            return
        }
    }

    const onClickAnswerBtn = () => {
        setOpenAnswer(prev => !prev)
    }

    const onClickHomeBtn = () => {
        localStorage.setItem("mode", JSON.stringify("normal"));
        normalMode()
    }

    return (<div className="quizTaking">
        <div className="quizTaking_header">
            <Link to="/"><div className="homeBtn" onClick={onClickHomeBtn}>{HomeIcon}</div></Link>
            <input readOnly value={quizTitle} className="quizTitle" />
            <div className="quizNum">
                <span className="quizNum_current">{num + 1}</span>
                / {numOfQuiz}
            </div>
        </div>
        <QuizContent
            num={num}
            openAnswer={openAnswer}
            onClickMoveBtn={onClickMoveBtn}
            onClickAnswerBtn={onClickAnswerBtn}
        />
        {num === numOfQuiz - 1 && <QuizNav />}
    </div>);
}

export default connect(null, mapDispatchToProps)(QuizTaking);