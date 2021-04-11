import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import QuizAll from './QuizAll';

const mapDispatchToProps = (dispatch) => {
    return {
        normalMode: () => dispatch({ type: "CHANGE_NORMAL_MODE" }),
        resetStoreState: () => dispatch({ type: "RESET" })
    }
}

const QuizFinish = ({ normalMode, resetStoreState }) => {
    const [showQuiz, setShowQuiz] = useState(false)

    const quizNavBtn = (e) => {
        if (e.target.className === "quizNavBtn") {
            return
        } else {
            localStorage.setItem("mode", JSON.stringify("normal"));
            normalMode()
            resetStoreState()
        }
    }

    const onClickShowingBtn = (e) => {
        const { target: { className } } = e
        if (className === "showQuiz") {
            setShowQuiz(true)
        } else if (className === "hideQuiz") {
            setShowQuiz(false)
        }
    }

    return (<>
        { showQuiz ?
            <>
                <QuizAll />
                <div>
                    <button
                        className="hideQuiz"
                        onClick={onClickShowingBtn}
                    >이전 페이지로 돌아가기
                    </button>
                </div>
            </>
            :
            <>
                <div>
                    <button
                        className="showQuiz"
                        onClick={onClickShowingBtn}
                    >모든 퀴즈 및 정답 보기</button>
                </div>
                <div className="quizNavBtn" onClick={quizNavBtn}>
                    <Link to="/"><button className="quizNavBtn_home">Home으로 돌아가기</button></Link>
                    <Link to="/creation"><button className="quizNavBtn_creation">새로운 퀴즈 만들기</button></Link>
                    <Link to="/storage"><button className="quizNavBtn_storage">퀴즈 저장소로 돌아가기</button></Link>
                </div>
            </>

        }
    </>);
}

export default connect(null, mapDispatchToProps)(QuizFinish);