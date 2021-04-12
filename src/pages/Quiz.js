import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapDispatchToProps = (dispatch) => {
    return {
        quizMode: () => dispatch({ type: "CHANGE_QUIZ_MODE" }),
    }
}

const Quiz = ({ quizMode }) => {

    if (JSON.parse(localStorage.getItem("mode")) === "quiz") {
        quizMode()
    }

    const quizTitle = JSON.parse(localStorage.getItem("quizTitle"))

    const onClickBtn = () => {
        localStorage.setItem("mode", JSON.stringify("quiz"))
        quizMode()
    }

    return (<>
        <div>{quizTitle}</div>
        <Link to={`/quiz/start`}>
            <button onClick={onClickBtn}>
                퀴즈 시작하기
            </button>
        </Link>
    </>);
}



export default connect(null, mapDispatchToProps)(Quiz);