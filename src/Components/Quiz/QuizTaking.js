import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import QuizNav from './QuizNav';

const mapStateToProps = (state) => {
    return {
        numOfQuiz: state.quizData.info.numOfQuiz
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        normalMode: () => dispatch({ type: "CHANGE_NORMAL_MODE" }),
        resetStoreState: () => dispatch({ type: "RESET" })
    }
}

const QuizTaking = ({ numOfQuiz, normalMode, resetStoreState }) => {
    const [num, setNum] = useState(0)
    const [openAnswer, setOpenAnswer] = useState(false)

    const quizzes = JSON.parse(localStorage.getItem("quizzes"))
    const answers = JSON.parse(localStorage.getItem("answers"))
    const quizTitle = JSON.parse(localStorage.getItem("quizTitle"))

    const onClickHomeBtn = () => {
        localStorage.setItem("mode", JSON.stringify("normal"));
        normalMode()
        resetStoreState()
    }

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

    return (<div className="quizTaking">
        <Link to="/"><button onClick={onClickHomeBtn}>Home</button></Link>
        <div className="quizTitle">{quizTitle}</div>
        <div className="quizContainer">
            <div className="quiz_content">
                <div className="content_num">{num + 1}번 퀴즈</div>
                <div className="content_quiz">{quizzes[num]}</div>
            </div>
            <div className="answerBtn" onClick={onClickAnswerBtn}>
                <button>정답</button>
            </div>
            {openAnswer &&
                <div className="quiz_answer">{answers[num]}</div>
            }
            <div className="quizMoveBtn" onClick={onClickMoveBtn}>
                {num === 0 ? null :
                    <button
                        className="beforeBtn"
                    >이전문제</button>
                }
                {num === numOfQuiz - 1 ?
                    <button
                        className="initBtn"
                    >처음으로 돌아가기</button>
                    :
                    <button
                        className="nextBtn"
                    >다음문제</button>
                }
            </div>
        </div>
        {num === numOfQuiz - 1 && <QuizNav />}
    </div>);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizTaking);