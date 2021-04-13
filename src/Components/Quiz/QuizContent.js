import React, { useState } from 'react';
import { LeftIcon, RightIcon } from '../../icon';
import { LS_getAnswersArr, LS_getQuizInfo, LS_getQuizzesArr } from '../../localStorage';
import QuizNav from './QuizNav';

const QuizContent = ({ num, openAnswer, onClickAnswerBtn, onClickNextBtn, onClickBeforeBtn }) => {
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
        <div className="quizMoveBtn">
            <button
                name="beforeBtn"
                className="btn beforeBtn"
                onClick={onClickBeforeBtn}
            >{LeftIcon}</button>
            <button
                name="nextBtn"
                className="btn nextBtn"
                onClick={onClickNextBtn}
            >{RightIcon}</button>
            {num === numOfQuiz - 1 && <QuizNav />}
        </div>
    </div>);
}

export default QuizContent;