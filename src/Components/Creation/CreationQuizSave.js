import React, { useState } from 'react';
import { WarningIcon } from '../../icon';
import { LS_getAnswersArr, LS_getQuizData1, LS_getQuizInfo, LS_getQuizzesArr, LS_setQuizData1, LS_setQuizData2 } from '../../localStorage';

const CreationQuizSave = () => {
    const { info: { quizTitle: quizTitle1 } } = LS_getQuizData1()
    console.log(quizTitle1);

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
        } else {
            return
        }
    }

    return (<div className="quizSave-page">
        <div className="quizSave_desc">
            <div className="quizSave_desc_normal">최대 10개의 퀴즈가 저장됩니다.</div>
            <div className="quizSave_desc_warning">
                <div className="warning_icon">{WarningIcon}</div>
                <div className="warning_msg">퀴즈가 저장된 저장소에 저장을 하면 기존 퀴즈는 사라집니다</div>
            </div>
        </div>
        <div className="quizSave_btn" onClick={onClickQSBtn}>
            <div className="quizSave_column">
                <button className="btn QS1Btn" name="QS1Btn">저장소 01</button>
                <div className="quizSave_msg">{quizTitle1 ? `저장된 퀴즈: ${quizTitle1}` : "저장된 퀴즈가 없습니다."}</div>
            </div>
            <button className="btn QS2Btn" name="QS2Btn">저장소 02</button>
            <button className="btn QS3Btn" name="QS3Btn">저장소 03</button>
            <button className="btn QS4Btn" name="QS4Btn">저장소 04</button>
            <button className="btn QS5Btn" name="QS5Btn">저장소 05</button>
            <button className="btn QS6Btn" name="QS6Btn">저장소 06</button>
            <button className="btn QS7Btn" name="QS7Btn">저장소 07</button>
            <button className="btn QS8Btn" name="QS8Btn">저장소 08</button>
            <button className="btn QS9Btn" name="QS9Btn">저장소 09</button>
            <button className="btn QS10Btn" name="QS10Btn">저장소 10</button>
        </div >
    </div >);
}

export default CreationQuizSave;