import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const Quiz = () => {
    const quizTitle = JSON.parse(localStorage.getItem("quizTitle"))

    return (<div className="quiz_page main">
        <div>{quizTitle}</div>
        <Link to={`/quiz/start`}>
            <button>
                퀴즈 시작하기
            </button>
        </Link>
    </div>);
}



export default connect()(Quiz);