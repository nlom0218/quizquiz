import React from 'react';
import { connect } from 'react-redux';
import { LS_getAnswersArr, LS_getQuizInfo, LS_getQuizzesArr } from '../../localStorage';

const QuizAll = () => {
    const quizzes = LS_getQuizzesArr()
    const answers = LS_getAnswersArr()
    const { numOfQuiz } = LS_getQuizInfo()

    let numArr = []
    for (let i = 0; i < numOfQuiz; i++) {
        numArr.push(i)
    }

    return (<>
        <ul className="quizAll_list">
            {numArr.map(item => {
                return (<li key={item}>
                    <div className="quiz">{quizzes[item]}</div>
                    <div className="answer">{answers[item]}</div>
                </li>)
            })}
        </ul>
    </>);
}

export default connect()(QuizAll);