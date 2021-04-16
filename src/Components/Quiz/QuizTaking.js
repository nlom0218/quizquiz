import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { HomeIcon, FullScr, SmallScr, QuizStorage } from '../../icon';
import { LS_getQuizInfo } from '../../localStorage';
import QuizContent from './QuizContent';

const QuizTaking = () => {
    const [num, setNum] = useState(0)
    const [openAnswer, setOpenAnswer] = useState(false)

    useEffect(() => {
        document.querySelector(".quizMode").webkitRequestFullscreen()
    }, [])

    const { name } = JSON.parse(localStorage.getItem("quizBgImg"))

    const { quizTitle, numOfQuiz } = LS_getQuizInfo()

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

    const getScr = (e) => {
        console.dir(e.target.parentNode);
        let { target: { parentNode: { parentNode: { id: id1 } } } } = e
        let { target: { parentNode: { id: id2 } } } = e
        const name = id1 ? id1 : id2
        return name
    }

    const onClickScrBtn = (e) => {
        const name = getScr(e)
        if (name === "smallScr") {
            document.webkitExitFullscreen()
        } else if (name === "fullScr") {
            document.querySelector(".quizMode").webkitRequestFullscreen()
        }
    }

    return (<div className="quizMode" style={{
        backgroundImage: `url(${name})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
    }}>
        <div className="quizTaking">
            <div className="quizTaking_header">
                <div className="quizTaking_header_column">
                    <div className="header_btn">
                        <div className="homeBtn navBtn"><Link to="/">{HomeIcon}</Link></div>
                        <div className="StorageBtn navBtn"><Link to="/storage">{QuizStorage}</Link></div>
                        <div className="screenFullBtn navBtn" id="fullScr" onClick={onClickScrBtn}>{FullScr}</div>
                        <div className="screenSmallBtn navBtn" id="smallScr" onClick={onClickScrBtn}>{SmallScr}</div>
                    </div>
                    <input readOnly value={quizTitle} className="quizTitle" />
                </div>
                <div className="quizTaking_header_column">
                    <div className="quizNum">
                        <span className="quizNum_current">{num + 1}</span>
                        <span className="quizNum_all">/ {numOfQuiz}</span>
                    </div>
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