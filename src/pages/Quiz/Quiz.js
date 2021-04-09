import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        quizTitle: state.quizData.info.quizTitle,
        quizId: state.quizData.quizId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        quizMode: () => dispatch({ type: "CHANGE_QUIZ_MODE" })
    }
}

const Quiz = ({ quizTitle, quizId, quizMode }) => {

    const onClickBtn = () => {
        quizMode()
    }
    return (<>
        <div>{quizTitle}</div>
        <Link to={`/quiz/${quizId}`}>
            <button onClick={onClickBtn}>
                퀴즈 시작하기
            </button>
        </Link>
    </>);
}



export default connect(mapStateToProps, mapDispatchToProps)(Quiz);