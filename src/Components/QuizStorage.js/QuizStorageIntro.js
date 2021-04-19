
import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { DelQuiz, EditQuiz, Play } from '../../icon';
import { del_LS_quizData, LS_quizArr, LS_setQuiz, LS_setQuizInfo, seleted_LS_quizData, setLS_quizData } from '../../localStorage';

const QuizStorageIntro = () => {
    setLS_quizData()
    const [quizArr, setQuizArr] = useState(LS_quizArr())
    const [quiz, setQuiz] = useState(false)
    const [edit, setEdit] = useState(false)

    const getDivNum = (e) => {
        let { target: { parentNode: { parentNode: { id: num1 } } } } = e
        let { target: { parentNode: { id: num2 } } } = e
        num1 = parseInt(num1)
        num2 = parseInt(num2)
        const num = num1 ? num1 : num2
        return num
    }

    const onClickDel = (e) => {
        const num = getDivNum(e)
        if (window.confirm(`저장소${num}에 저장된 퀴즈를 삭제하시겠습니까?`)) {
            del_LS_quizData(num)
            setLS_quizData()
            setQuizArr(LS_quizArr())
        }
    }

    const onClickPlay = (e) => {
        const num = getDivNum(e)
        if (num) {
            const QuizData = seleted_LS_quizData(num)
            LS_setQuiz(QuizData.quizzes, QuizData.answers)
            LS_setQuizInfo(QuizData.info.quizTitle, QuizData.info.quizId, QuizData.info.numOfQuiz, QuizData.storage)
            setQuiz(true)
        } else {
            return
        }
    }

    const onClickEdit = (e) => {
        const num = getDivNum(e)
        if (num) {
            const QuizData = seleted_LS_quizData(num)
            LS_setQuiz(QuizData.quizzes, QuizData.answers)
            LS_setQuizInfo(QuizData.info.quizTitle, QuizData.info.quizId, QuizData.info.numOfQuiz, QuizData.storage)
            setEdit(true)
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
                                <div className="paly_btn" id={index + 1} onClick={onClickPlay} > {Play}</div>
                            </div>
                            <div className="quiz_funBtn_column">
                                <div className="edit_btn" id={index + 1} onClick={onClickEdit}>{EditQuiz}</div>
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
                                <div className="paly_btn" id={index + 1} onClick={onClickPlay}>{Play}</div>
                            </div>
                            <div className="quiz_funBtn_column">
                                <div className="edit_btn" id={index + 1} onClick={onClickEdit}>{EditQuiz}</div>
                                <div className="del_btn" id={index + 1} onClick={onClickDel}>{DelQuiz}</div>
                            </div>
                        </div>}
                    </li>)
                })}
            </ul>
        </div>
        {quiz && <Redirect push to="/quiz" />}
        {edit && <Redirect push to="/quiz/edit" />}
    </div>);
}

export default QuizStorageIntro;