import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { NoQuizInStorage, QuizInStorage, WarningIcon } from '../../icon';
import { LS_quizArr, LS_saveQuizData, setLS_quizData } from '../../localStorage';

const CreationQuizSave = () => {
    setLS_quizData()
    const [quizArr, setQuizArr] = useState(LS_quizArr())
    const [save, setSave] = useState(false)

    const onClickQSBtn = (e) => {
        const { target: { name } } = e
        if (name) {
            LS_saveQuizData(name)
            setSave(true)
        } else {
            return
        }
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