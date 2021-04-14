import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { NoQuizInStorage, QuizInStorage, WarningIcon } from '../../icon';
import { LS_getAnswersArr, LS_getQuizInfo, LS_getQuizzesArr, LS_quizArr, LS_quizRemove, LS_setQuizData1, LS_setQuizData10, LS_setQuizData2, LS_setQuizData3, LS_setQuizData4, LS_setQuizData5, LS_setQuizData6, LS_setQuizData7, LS_setQuizData8, LS_setQuizData9, setLS_quizDate } from '../../localStorage';

const CreationQuizSave = () => {
    setLS_quizDate()
    const [quizArr, setQuizArr] = useState(LS_quizArr())
    const [save, setSave] = useState(false)

    const onClickQSBtn = (e) => {
        const quizzes = LS_getQuizzesArr()
        const answers = LS_getAnswersArr()
        const info = LS_getQuizInfo()
        const quizData = { info, quizzes, answers }
        const { target: { name } } = e
        if (name === "QS1Btn") {
            LS_setQuizData1(quizData)
        } else if (name === "QS2Btn") {
            LS_setQuizData2(quizData)
        } else if (name === "QS3Btn") {
            LS_setQuizData3(quizData)
        } else if (name === "QS4Btn") {
            LS_setQuizData4(quizData)
        } else if (name === "QS5Btn") {
            LS_setQuizData5(quizData)
        } else if (name === "QS6Btn") {
            LS_setQuizData6(quizData)
        } else if (name === "QS7Btn") {
            LS_setQuizData7(quizData)
        } else if (name === "QS8Btn") {
            LS_setQuizData8(quizData)
        } else if (name === "QS9Btn") {
            LS_setQuizData9(quizData)
        } else if (name === "QS10Btn") {
            LS_setQuizData10(quizData)
        } else {
            return
        }
        setLS_quizDate()
        setQuizArr(LS_quizArr())
        setSave(true)
    }

    return (<div className="quizSave-page">
        <div className="quizSave_desc">
            <div className="quizSave_desc_normal">나의 퀴즈 저장하기</div>
            <div className="quizSave_desc_normal"></div>
            <div className="quizSave_desc_warning">
                <div className="warning_icon">{WarningIcon}</div>
                <div className="warning_msg">퀴즈가 저장된 저장소에 퀴즈를 저장을 하면 기존 퀴즈는 사라집니다</div>
            </div>
        </div>
        <ul className="quizSave_btn" onClick={onClickQSBtn}>
            {quizArr.map((quizData, index) => {
                return (<div style={{ "position": "relative", "width": "100%" }} key={index}>
                    <div className="quizSave_column">
                        <button className={`btn QS${index + 1}Btn ${quizData ? "isQuiz" : "noQuiz"}`} name={`QS${index + 1}Btn`}>
                            저장소 {index + 1 === 10 ? index + 1 : `0${index + 1}`}
                        </button>
                        <div className="quizSave_icon">{quizData ? QuizInStorage : NoQuizInStorage}</div>
                        {quizData ? <div className="quizSave_btn_msg title_msg">저장된 퀴즈: {quizData.info.quizTitle}</div>
                            :
                            <div className="quizSave_btn_msg save_msg">퀴즈 저장소{index + 1}에 저장됩니다.</div>}
                    </div>
                </div>)
            })}
        </ul>
        {save && <Redirect push to="/storage" />}
    </div >);
}

export default CreationQuizSave;