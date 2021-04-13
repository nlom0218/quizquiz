import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import QuizAll from './QuizAll';

const QuizFinish = () => {
    const [showQuiz, setShowQuiz] = useState(false)

    const onClickShowingBtn = (e) => {
        const { target: { className } } = e
        if (className === "showQuiz") {
            setShowQuiz(true)
        } else if (className === "hideQuiz") {
            setShowQuiz(false)
        }
    }

    return (<div className="quizFinish main">
        { showQuiz ?
            <div>
                <QuizAll />
                <button
                    className="hideQuiz"
                    onClick={onClickShowingBtn}
                >이전 페이지로 돌아가기
                    </button>
            </div>
            :
            <>
                <div>
                    <button
                        className="showQuiz"
                        onClick={onClickShowingBtn}
                    >모든 퀴즈 및 정답 보기</button>
                </div>
                <div className="quizNavBtn">
                    <Link to="/creation"><button className="quizNavBtn_creation">새로운 퀴즈 만들기</button></Link>
                    <Link to="/storage"><button className="quizNavBtn_storage">퀴즈 저장소로 돌아가기</button></Link>
                </div>
            </>
        }
    </div>);
}

export default connect()(QuizFinish);