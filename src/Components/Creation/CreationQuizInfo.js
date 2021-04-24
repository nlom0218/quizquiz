import React, { useState } from 'react';
import { EditQuiz, WarningIcon } from '../../icon';
import { LS_setQuizData } from '../../localStorage';
import KakaoAdFit, { AdFitInCreationInfo } from '../KakaoAdFit';

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

    return (<>
        <div className="quizInfo">
            <div className="creationQuiz_msg">퀴즈의 제목과 퀴즈의 수를 입력하세요</div>
            <div className="creationQuiz_warning">
                <div className="warning_icon">{WarningIcon}</div>
                <div className="warning_msg">새로고침 & 페이지 이동을 하면 퀴즈 데이터는 사라집니다</div>
            </div>
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
                    maxLength="30"
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
            <div className="creationQuiz_editMsg">퀴즈 추가, 삭제, 수정은 퀴즈 저장소에서 가능합니다</div>
        </div >
        <AdFitInCreationInfo />
    </>);
}

export default CreationQuizInfo;