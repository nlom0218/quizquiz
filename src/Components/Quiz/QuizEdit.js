import React, { useState } from 'react';
import { Redirect } from 'react-router';
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
        const { target: { value } } = e
        setTitle(value)
    }

    const onChangeData = (dataName) => (e) => {
        let { target: { name, value } } = e
        let num = parseInt(name)
        let newArr = quizAnswerArr.map((item, i) => {
            if (num === i) {
                return { ...item, [dataName]: value }
            } else {
                return item
            }
        })
        setQuizAnswerArr(newArr)
    }

    const onClickBack = () => {
        if (window.confirm("저장되지 않은 퀴즈, 정답은 삭제됩니다. 퀴즈 저장소로 돌아가시겠습니까?")) {
            setCompletion(true)
        }
    }

    const onClickSave = (e) => {
        if (window.confirm("퀴즈, 정답을 저장하시겠습니까? 이전 데이터는 삭제됩니다.")) {
            const { target: { name } } = e
            const quizzes = quizAnswerArr.map((item) => item.quiz)
            const answers = quizAnswerArr.map((item) => item.answer)
            LS_setQuizInfo(title, quizId, numOfQuiz, storage)
            LS_setQuiz(quizzes, answers)
            LS_saveQuizData(name)
        }
    }

    return (<>
        <Header />
        <div className="quiz_page main">
            <div>저장소{storage} 퀴즈 수정하기 {quizTitle}</div>
            <input
                type="text"
                value={title}
                onChange={onChangeTitle}
            />
            {quizAnswerArr.map((item, index) => {
                return (<div key={index}>
                    <input
                        type="text"
                        value={item.quiz}
                        name={index}
                        onChange={onChangeData("quiz")}
                        maxLength="80"
                    />
                    <input
                        type="text"
                        value={item.answer}
                        name={index}
                        onChange={onChangeData("answer")}
                        maxLength="24"
                    />
                </div>)
            })}
            <button className="btn" name={`QS${storage}Btn`} onClick={onClickSave}>저장하기</button>
            <button className="btn" onClick={onClickBack}>돌아가기</button>
        </div>
        <Footer />
        {completion && <Redirect push to="/storage" />}
    </>);
}

export default QuizEdit;