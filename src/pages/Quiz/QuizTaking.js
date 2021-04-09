import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        quizTitle: state.quizData.info.quizTitle,
        numOfQuiz: state.quizData.info.numOfQuiz,
        quizzes: state.quizData.quizzes,
        answers: state.quizData.answers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        normalMode: () => dispatch({ type: "CHANGE_NORMAL_MODE" }),
        resetStoreState: () => dispatch({ type: "RESET" })
    }
}

const QuizTaking = ({ quizTitle, numOfQuiz, quizzes, answers, normalMode, resetStoreState }) => {
    console.log(quizTitle, numOfQuiz, quizzes, answers);
    const onClickBtn = () => {
        normalMode()
        resetStoreState()
    }
    return (<>
        <Link to="/"><button onClick={onClickBtn}>Home</button></Link>
        퀴즈 문제가 솨라라라
    </>);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizTaking);