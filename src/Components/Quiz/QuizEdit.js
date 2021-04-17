import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { AddQuiz, DelQuiz, WarningIcon } from '../../icon';
import { LS_getAnswersArr, LS_getQuizInfo, LS_getQuizzesArr, LS_saveQuizData, LS_setQuiz, LS_setQuizInfo, setLS_quizData } from '../../localStorage';
import Footer from '../Footer';
import Header from '../Header';

const QuizEdit = () => {
    const { quizTitle, quizId, numOfQuiz, storage } = LS_getQuizInfo()
    const quizzes = LS_getQuizzesArr()
    const answers = LS_getAnswersArr()

    let LS_quizAnswerArr = []
    for (let i = 0; i < numOfQuiz; i++) {
        const data = { quiz: quizzes[i], answer: answers[i] }
        LS_quizAnswerArr.push(data)
    }

    const [title, setTitle] = useState(quizTitle)
    const [quizAnswerArr, setQuizAnswerArr] = useState(LS_quizAnswerArr)
    const [completion, setCompletion] = useState(false)

    const onChangeTitle = (e) => {
        const { target: { value, name } } = e
        const newTitle = value
        setTitle(newTitle)
        LS_setQuizInfo(newTitle, quizId, numOfQuiz, storage)
        LS_setQuiz(quizzes, answers)
        LS_saveQuizData(name)
    }

    const onChangeData = (dataName) => (e) => {
        let { target: { name, value, id } } = e
        let num = parseInt(id)
        let newArr = quizAnswerArr.map((item, i) => {
            if (num === i) {
                return { ...item, [dataName]: value }
            } else {
                return item
            }
        })
        const quizzes = newArr.map((item) => item.quiz)
        const answers = newArr.map((item) => item.answer)
        LS_setQuizInfo(title, quizId, numOfQuiz, storage)
        LS_setQuiz(quizzes, answers)
        LS_saveQuizData(name)
        setQuizAnswerArr(newArr)
    }

    const onClickBack = () => {
        setCompletion(true)
    }

    const getDivNum = (e) => {
        let { target: { parentNode: { parentNode: { id: num1 } } } } = e
        let { target: { parentNode: { id: num2 } } } = e
        num1 = parseInt(num1)
        num2 = parseInt(num2)
        const num = num1 ? num1 : num2
        return num
    }

    const getDivName = (e) => {
        let { target: { parentNode: { parentNode: { dataset: { name: name1 } } } } } = e
        let { target: { parentNode: { dataset: { name: name2 } } } } = e
        const name = name1 ? name1 : name2
        return name
    }

    const onClickDelBtn = (e) => {
        const num = getDivNum(e)
        const name = getDivName(e)
        const new_quizAnswerArr = LS_quizAnswerArr.filter((item, index) => index !== num - 1)
        const quizzes = new_quizAnswerArr.map((item) => item.quiz)
        const answers = new_quizAnswerArr.map((item) => item.answer)
        LS_setQuizInfo(title, quizId, numOfQuiz - 1, storage)
        LS_setQuiz(quizzes, answers)
        LS_saveQuizData(name)
        setQuizAnswerArr(new_quizAnswerArr)
    }

    const onClickDelAdd = (e) => {
        const name = getDivName(e)
        const new_quizAnswerArr = [...LS_quizAnswerArr, { quiz: "", answer: "" }]
        const quizzes = new_quizAnswerArr.map((item) => item.quiz)
        const answers = new_quizAnswerArr.map((item) => item.answer)
        LS_setQuizInfo(title, quizId, numOfQuiz + 1, storage)
        LS_setQuiz(quizzes, answers)
        LS_saveQuizData(name)
        setQuizAnswerArr(new_quizAnswerArr)
    }

    return (<>
        <Header />
        <div className="quiz_page main">
            <div className="quiz_edit">
                <div className="edit_introMsg">저장소{storage} 퀴즈 수정하기</div>
                <div className="edit_warning">
                    <div className="warning_icon">{WarningIcon}</div>
                    <div className="warning_msg">퀴즈를 수정, 삭제, 추가하면 자동으로 저장이 됩니다.</div>
                </div>
                <div className="edit_title">
                    <div className="edit_title_des">퀴즈 제목</div>
                    <input
                        className="edit_title_value"
                        type="text"
                        value={title}
                        name={`QS${storage}Btn`}
                        onChange={onChangeTitle}
                        autoComplete='off'
                    />
                </div>
                <div className="edit_quizAndAnserList">
                    {quizAnswerArr.map((item, index) => {
                        return (<div key={index} className="edit_quizAndAnswer">
                            <div className="edit_quizAndAnser_des">
                                <div>{index + 1}번</div>
                            </div>
                            <div className="edit_quiz_value">
                                <input
                                    className="edit"
                                    type="text"
                                    value={item.quiz}
                                    placeholder="퀴즈를 입력하세요"
                                    id={index}
                                    name={`QS${storage}Btn`}
                                    onChange={onChangeData("quiz")}
                                    maxLength="80"
                                    autoComplete='off'
                                />
                            </div>
                            <div className="edit_answer_value">
                                <input
                                    type="text"
                                    value={item.answer}
                                    placeholder="정답을 입력하세요"
                                    id={index}
                                    name={`QS${storage}Btn`}
                                    onChange={onChangeData("answer")}
                                    maxLength="18"
                                    autoComplete='off'
                                />
                            </div>
                            <div className="edit_del">
                                <div
                                    className="del_btn"
                                    id={index + 1}
                                    data-name={`QS${storage}Btn`}
                                    onClick={onClickDelBtn}>{DelQuiz}</div>
                            </div>
                        </div>)
                    })}
                </div>
                <div className="add_btn" data-name={`QS${storage}Btn`} onClick={onClickDelAdd}>
                    {numOfQuiz === 20 ? null : AddQuiz}
                </div>
                <button className="btn" onClick={onClickBack}>돌아가기</button>
            </div>
        </div>
        <Footer />
        {completion && <Redirect push to="/storage" />}
    </>);
}

export default QuizEdit;