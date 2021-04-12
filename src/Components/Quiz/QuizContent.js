import React, { useState } from 'react';
import { LS_getAnswersArr, LS_getQuizInfo, LS_getQuizzesArr } from '../../localStorage';

const QuizContent = ({ num, onClickMoveBtn, openAnswer, onClickAnswerBtn }) => {
    const quizzes = LS_getQuizzesArr()
    const answers = LS_getAnswersArr()
    const { numOfQuiz } = LS_getQuizInfo()

    return (<div className="quizContainer">
        <div className="quiz_content">
            <div className="content_quiz">{quizzes[num]}</div>
            <div className="content_answer">
                <button className="answer_btn btn" onClick={onClickAnswerBtn}>정답</button>
                {openAnswer &&
                    <div className="answer_right">{answers[num]}</div>
                }
            </div>
        </div>
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
    </div>);
}

export default QuizContent;