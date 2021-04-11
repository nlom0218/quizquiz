import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setQuizInfo } from '../../localStorage';

const mapStateToProps = (state) => {
    return {
        title: state.quizData.info.quizTitle,
        num: state.quizData.info.numOfQuiz
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        QuizInfo: (quizId, quizTitle, numOfQuiz) => dispatch({
            type: "QUIZ_INFO",
            quizId,
            quizTitle,
            numOfQuiz
        })
    }
}

const CreationQuizInfo = ({ QuizInfo, title, num, startCreateQuizzes }) => {
    const [quizTitle, setQuizTItle] = useState(title ? title : "")
    const [numOfQuiz, setNumOfQuiz] = useState(num)

    const onChangeValue = (e) => {
        let { target: { name, value } } = e
        if (name === "quizTitle") {
            setQuizTItle(value)
        } else if (name === "numOfQuiz") {
            value = parseInt(value)
            setNumOfQuiz(value)
        }
    }
    const createQuizId = () => {
        const quizId = Date.now()
        return quizId
    }

    return (
        <div className="quizInfo">
            <form onSubmit={(e) => {
                e.preventDefault()
                setQuizInfo(quizTitle)
                QuizInfo(createQuizId(), quizTitle, numOfQuiz)
                startCreateQuizzes()
            }
            }>
                <input
                    type="text"
                    placeholder="만들고자 하는 퀴즈의 주제는 무엇인가요?"
                    value={quizTitle}
                    name="quizTitle"
                    onChange={onChangeValue}
                    required
                    autoComplete='off'
                />
                <input
                    type="number"
                    min={1} max={50}
                    value={numOfQuiz}
                    name="numOfQuiz"
                    onChange={onChangeValue}
                    required
                />
                <input
                    type="submit"
                    value="생성하기"
                />
            </form>
        </div >
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(CreationQuizInfo);