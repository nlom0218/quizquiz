import React, { useState } from 'react';
import { LS_setQuizData } from '../../localStorage';

const CreationQuizInfo = ({ completeQuizInfo }) => {
    const [quizTitle, setQuizTItle] = useState("")
    const [numOfQuiz, setNumOfQuiz] = useState(3)
    const [num, setNum] = useState(3)

    let quizData = {
        info: {
            quizTitle: "",
            quizId: "",
            numOfQuiz: "",
            storage: ""
        },
        contents: []
    }

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

    const onSubmitQuizInfo = (e) => {
        e.preventDefault()
        const quizId = createQuizId()
        quizData = { ...quizData, info: { ...quizData.info, quizTitle, quizId, numOfQuiz } }
        LS_setQuizData(quizData)
        setNum(numOfQuiz)
        completeQuizInfo()
    }

    return (
        <div className="quizInfo">
            <form className="quizInfo_form" onSubmit={onSubmitQuizInfo}>
                <input
                    className="quizInfo_title"
                    type="text"
                    placeholder="만들고자 하는 퀴즈의 제목은 무엇인가요?"
                    value={quizTitle}
                    name="quizTitle"
                    onChange={onChangeValue}
                    required
                    autoComplete='off'
                    maxLength="50"
                />
                <div className="quizInfo_num">
                    <div className="quizInfo_num_msg">몇 개의 퀴즈를 만드나요? (1~20)</div>
                    <input
                        className="quizInfo_num_input"
                        type="number"
                        min={1} max={20}
                        value={numOfQuiz}
                        name="numOfQuiz"
                        onChange={onChangeValue}
                        required
                    />
                    <input
                        className="quizInfo_btn btn"
                        type="submit"
                        value="만들기"
                    />
                </div>
            </form>
        </div >
    );
}

export default CreationQuizInfo;