import React from 'react';
import { LeftIcon, RightIcon } from '../../icon';
import { LS_getQuizData } from '../../localStorage';

const QuizContent = ({ num, numOfQuiz, openAnswer, onClickAnswerBtn, onClickNextBtn, onClickBeforeBtn }) => {
    const { contents } = LS_getQuizData()

    let quizzes = []
    let answers = []
    for (let i = 0; i < numOfQuiz; i++) {
        quizzes.push(contents[i].quiz)
        answers.push(contents[i].answer)
    }
    const selectArr = contents[num].select ? contents[num].select : null

    return (<div className="quizContainer">
        {contents[num].type === "sub" &&
            <div className="quiz_content">
                <div className="content_quiz">{quizzes[num]}</div>
                <div className="content_answer">
                    <button className="answer_btn btn" onClick={onClickAnswerBtn}>정답</button>
                    {openAnswer &&
                        <div className="answer_right">{answers[num]}</div>
                    }
                </div>
            </div>}
        {contents[num].type === "obj" &&
            <div className="quiz_content">
                <div className="content_quiz">{quizzes[num]}</div>
                <div className="content_select">
                    {selectArr.map((item, index) => {
                        return (<div className="select_items" key={index}>
                            <div className="select_num">{index + 1}</div>
                            <div className="select_item">{item}</div>
                        </div>)
                    })}
                </div>
                <div className="content_answer">
                    <button className="answer_btn btn" onClick={onClickAnswerBtn}>정답</button>
                    {openAnswer &&
                        <div className="answer_right">{answers[num]}</div>
                    }
                </div>
            </div>}
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
        </div>
    </div>);
}

export default QuizContent;