import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { LS_getQuizInfo } from '../../localStorage';
import Footer from '../Footer';
import Header from '../Header';

import BgImg1 from "../../Images/BackgroundImg/BgImg1.jpg"
import BgImg2 from "../../Images/BackgroundImg/BgImg2.jpg"
import BgImg3 from "../../Images/BackgroundImg/BgImg3.jpg"
import BgImg4 from "../../Images/BackgroundImg/BgImg4.jpg"
import BgImg5 from "../../Images/BackgroundImg/BgImg5.jpg"


const QuizIntro = () => {
    const [start, setStart] = useState(false)

    const { quizTitle, numOfQuiz } = LS_getQuizInfo()

    const onClickStart = () => {
        setStart(true)
    }

    const onClickBgImg = (e) => {
        const { target: { name } } = e
        localStorage.setItem("quizBgImg", JSON.stringify(name))
    }

    return (<>
        <Header />
        <div className="quiz_page main">
            <div>{quizTitle} 설정하기</div>
            <div className="setting_BgImg">
                <div className="BgImg_1">
                    <img className="BgImg_img" src={BgImg1} />
                    <button
                        className="BgImg_seleted btn"
                        name="/static/media/BgImg1.536e8e6b.jpg"
                        onClick={onClickBgImg}
                    >
                        선택하기
                    </button>
                </div>
                <div className="BgImg_2">
                    <img className="BgImg_img" src={BgImg2} />
                    <button
                        className="BgImg_seleted btn"
                        name="/static/media/BgImg2.eb36a260.jpg"
                        onClick={onClickBgImg}
                    >
                        선택하기
                    </button>
                </div>
                <div className="BgImg_3">
                    <img className="BgImg_img" src={BgImg3} />
                    <button
                        className="BgImg_seleted btn"
                        name="/static/media/BgImg3.fca2bc08.jpg"
                        onClick={onClickBgImg}
                    >
                        선택하기
                    </button>
                </div>
                <div className="BgImg_4">
                    <img className="BgImg_img" src={BgImg4} />
                    <button
                        className="BgImg_seleted btn"
                        name="/static/media/BgImg4.feaa5d3f.jpg"
                        onClick={onClickBgImg}
                    >
                        선택하기
                    </button>
                </div>
                <div className="BgImg_5">
                    <img className="BgImg_img" src={BgImg5} />
                    <button
                        className="BgImg_seleted btn"
                        name="/static/media/BgImg5.0de2b4aa.jpg"
                        onClick={onClickBgImg}
                    >
                        선택하기
                    </button>
                </div>
            </div>
            <button className="btn" onClick={onClickStart}>
                퀴즈 시작하기
            </button>
        </div>
        <Footer />
        {start && <Redirect push to="/quiz/start" />}
    </>);
}



export default connect()(QuizIntro);