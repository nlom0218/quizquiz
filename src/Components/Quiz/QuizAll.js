import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        numOfQuiz: state.quizData.info.numOfQuiz
    }
}

const QuizAll = ({ numOfQuiz }) => {
    const quizzes = JSON.parse(localStorage.getItem("quizzes"))
    const answers = JSON.parse(localStorage.getItem("answers"))

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

export default connect(mapStateToProps)(QuizAll);