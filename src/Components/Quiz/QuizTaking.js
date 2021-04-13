import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { HomeIcon } from '../../icon';
import { LS_getQuizInfo } from '../../localStorage';
import QuizContent from './QuizContent';

const QuizTaking = () => {
    const [num, setNum] = useState(0)
    const [openAnswer, setOpenAnswer] = useState(false)

    useEffect(() => {
        document.querySelector(".quizMode").webkitRequestFullscreen()
    }, [])

    const { quizTitle, numOfQuiz } = LS_getQuizInfo()
    console.log(quizTitle);

    const onClickBeforeBtn = () => {
        setOpenAnswer(false)
        if (num === 0) {
            alert("첫번째 문제입니다.")
            return
        }
        setNum(num - 1)
    }

    const onClickNextBtn = () => {
        setOpenAnswer(false)
        if (num === numOfQuiz - 1) {
            alert("마지막 문제입니다.")
            return
        }
        setNum(num + 1)
    }

    const onClickAnswerBtn = () => {
        setOpenAnswer(prev => !prev)
    }

    return (<div className="quizMode">
        <div className="quizTaking">
            <div className="quizTaking_header">
                <Link to="/"><div className="homeBtn">{HomeIcon}</div></Link>
                <input readOnly value={quizTitle} className="quizTitle" />
                <div className="quizNum">
                    <span className="quizNum_current">{num + 1}</span>
                / {numOfQuiz}
                </div>
            </div>
            <QuizContent
                num={num}
                openAnswer={openAnswer}
                onClickAnswerBtn={onClickAnswerBtn}
                onClickBeforeBtn={onClickBeforeBtn}
                onClickNextBtn={onClickNextBtn}
            />
        </div>
    </div>);
}

export default connect()(QuizTaking);