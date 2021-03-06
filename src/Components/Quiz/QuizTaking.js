import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { HomeIcon, FullScr, SmallScr, QuizStorage } from '../../icon';
import { LS_getQuizData, LS_getQuizInfo, LS_setQuizData } from '../../localStorage';
import QuizContent from './QuizContent';
import BgImg1 from "../../Images/BackgroundImg/BgImg1.jpg"

const QuizTaking = () => {
    let quizSetting = JSON.parse(localStorage.getItem("quizSetting"));
    quizSetting = quizSetting ? quizSetting : { num: 0, BgName: BgImg1, timer: 0 }
    const { timer: LS_quizSettingTimer, BgName } = quizSetting

    const [num, setNum] = useState(0)
    const [openAnswer, setOpenAnswer] = useState(false)
    const [timer, setTimer] = useState(LS_quizSettingTimer)

    useEffect(() => {
        if (document.documentElement.requestFullscreen) {
            document.querySelector(".quizMode").requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {    // Firefox
            document.querySelector(".quizMode").mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {  // Chrome & Safari
            document.querySelector(".quizMode").webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { //IE
            document.querySelector(".quizMode").msRequestFullscreen();
        }
        // document.querySelector(".quizMode").webkitRequestFullscreen()
    }, [])

    useEffect(() => {
        const countDown = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1)
            } else {
                clearInterval(countDown)
            }
        }, 1000)
        return () => clearInterval(countDown)
    }, [timer])

    const { info: { quizTitle, numOfQuiz } } = LS_getQuizData()

    const onClickBeforeBtn = () => {
        setOpenAnswer(false)
        if (num === 0) {
            alert("첫번째 문제입니다.")
            return
        }
        setNum(num - 1)
        setTimer(LS_quizSettingTimer)
        document.querySelector(".quizContainer").scrollTo(0, 0)
    }

    const onClickNextBtn = () => {
        setOpenAnswer(false)
        if (num === numOfQuiz - 1) {
            alert("마지막 문제입니다.")
            return
        }
        setNum(num + 1)
        setTimer(LS_quizSettingTimer)
        document.querySelector(".quizContainer").scrollTo(0, 0)
    }

    const onClickAnswerBtn = () => {
        setOpenAnswer(prev => !prev)
    }

    const getScr = (e) => {
        let { target: { parentNode: { parentNode: { id: id1 } } } } = e
        let { target: { parentNode: { id: id2 } } } = e
        const BtnName = id1 ? id1 : id2
        return BtnName
    }

    const onClickScrBtn = (e) => {
        const BtnName = getScr(e)
        if (BtnName === "smallScr") {
            if (document.documentElement.requestFullscreen) {
                document.exitFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {    // Firefox
                document.mozExitFullscree();
            } else if (document.documentElement.webkitRequestFullscreen) {  // Chrome & Safari
                document.webkitExitFullscree();
            } else if (document.documentElement.msRequestFullscreen) { //IE
                document.msExitFullscree();
            }
            // document.webkitExitFullscreen()
        } else if (BtnName === "fullScr") {
            if (document.documentElement.requestFullscreen) {
                document.querySelector(".quizMode").requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {    // Firefox
                document.querySelector(".quizMode").mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {  // Chrome & Safari
                document.querySelector(".quizMode").webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) { //IE
                document.querySelector(".quizMode").msRequestFullscreen();
            }
            // document.querySelector(".quizMode").webkitRequestFullscreen()
        }
    }

    return (<div className="quizMode" style={{
        backgroundImage: `url(${BgName})`,
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
                    <div className="quizTimer">
                        {LS_quizSettingTimer === 0 ? null : timer === 0 ? "시간종료" : `${timer}초`}
                    </div>
                </div>
            </div>
            <QuizContent
                num={num}
                openAnswer={openAnswer}
                onClickAnswerBtn={onClickAnswerBtn}
                onClickBeforeBtn={onClickBeforeBtn}
                onClickNextBtn={onClickNextBtn}
                numOfQuiz={numOfQuiz}
            />
        </div>
    </div>);
}

export default connect()(QuizTaking);