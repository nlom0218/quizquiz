import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import QuizBgImg from './QuizBgImg';
import QuizDownload from './QuizDownload';
import QuizTimer from './QuizTimer';


const QuizIntro = () => {
    const [start, setStart] = useState(false)

    const onClickStart = () => {
        setStart(true)
    }


    return (<>
        <Header />
        <div className="quiz_page main">
            <div className="quiz_intro">
                <div className="quiz_introMsg">퀴즈 설정하기</div>
                <div className="quiz_setting">
                    <QuizBgImg />
                    <QuizTimer />
                </div>
            </div>
            <QuizDownload />
            <button className="btn" onClick={onClickStart}>
                퀴즈 시작하기
            </button>
        </div >
        <Footer />
        { start && <Redirect push to="/quiz/start" />}
    </>);
}



export default connect()(QuizIntro);