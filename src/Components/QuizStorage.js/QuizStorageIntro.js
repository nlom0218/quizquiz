import React, { useState } from 'react';
import { DelQuiz, EditQuiz, Play, Start } from '../../icon';
import { del_LS_quizData, LS_quizArr, setLS_quizDate } from '../../localStorage';

const QuizStorageIntro = () => {
    const [quizArr, setQuizArr] = useState(LS_quizArr())

    const onClickDel = (e) => {
        let { target: { parentNode: { parentNode: { id: num } } } } = e
        console.log(num);
        num = parseInt(num)
        if (num) {
            if (window.confirm(`저장소${num}에 저장된 퀴즈를 삭제하시겠습니까?`)) {
                del_LS_quizData(num)
                setLS_quizDate()
                console.log(LS_quizArr());
                setQuizArr(LS_quizArr())
                console.log(LS_quizArr());
            } else {
                return
            }
        } else {
            return
        }
    }

    return (<div className="quizStorage_intro">
        <div className="intro_msg">저장소를 클릭하면 퀴즈가 시작됩니다</div>
        <div className="quizList">
            <ul className="topStorage">
                {quizArr.map((quizData, index) => {
                    if (index > 4) {
                        return
                    }
                    return (<li
                        className={`quizItem ${quizData ? "isQuiz" : "noQuiz"}`}
                        key={index}
                        id={quizData ? quizData.info.quizId : null}
                    >
                        <div className="quizItem_infoMsg">
                            <div className="quizItem_storageName">저장소{index + 1}</div>
                            <div className="quizItem_quizTitle">
                                {quizData ? quizData.info.quizTitle : "퀴즈가 없습니다."}
                            </div>
                        </div>
                        {quizData && <div className="quiz_funBtn">
                            <div className="quiz_funBtn_column">
                                <div className="paly_btn">{Play}</div>
                            </div>
                            <div className="quiz_funBtn_column">
                                <div className="edit_btn" id="edit">{EditQuiz}</div>
                                <div className="del_btn" id={index + 1} onClick={onClickDel}>{DelQuiz}</div>
                            </div>
                        </div>}
                    </li>)
                })}
            </ul>
            <ul className="botStorage">
                {quizArr.map((quizData, index) => {
                    if (index < 5) {
                        return
                    }
                    return (<li
                        className={`quizItem ${quizData ? "isQuiz" : "noQuiz"}`}
                        key={index}
                        name={quizData ? quizData.info.quizId : null}
                    >
                        <div className="quizItem_infoMsg">
                            <div className="quizItem_storageName">저장소{index + 1}</div>
                            <div className="quizItem_quizTitle">
                                {quizData ? quizData.info.quizTitle : "퀴즈가 없습니다."}
                            </div>
                        </div>
                        {quizData && <div className="quiz_funBtn">
                            <div className="quiz_funBtn_column">
                                <div className="paly_btn">{Play}</div>
                            </div>
                            <div className="quiz_funBtn_column">
                                <div className="edit_btn" id="edit">{EditQuiz}</div>
                                <div className="del_btn" id={index + 1} onClick={onClickDel}>{DelQuiz}</div>
                            </div>
                        </div>}
                    </li>)
                })}
            </ul>
        </div>
    </div>);
}

export default QuizStorageIntro;