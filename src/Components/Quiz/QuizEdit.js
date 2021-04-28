import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { AddQuiz, DelQuiz, WarningIcon } from '../../icon';
import { LS_getAnswersArr, LS_getQuizData, LS_getQuizInfo, LS_getQuizzesArr, LS_saveQuizData, LS_setQuiz, LS_setQuizData, LS_setQuizInfo } from '../../localStorage';
import Footer from '../Footer';
import Header from '../Header';
import KakaoAdFit, { AdFitInEditQuiz } from '../KakaoAdFit';

const QuizEdit = () => {
    const { contents, info: { quizTitle, quizId, numOfQuiz, storage } } = LS_getQuizData()

    const [title, setTitle] = useState(quizTitle)
    const [quizAnswerArr, setQuizAnswerArr] = useState(contents)
    const [completion, setCompletion] = useState(false)
    const onChangeTitle = (e) => {
        const { target: { value, name } } = e
        const newTitle = value
        const quizData = LS_getQuizData()
        setTitle(newTitle)
        LS_setQuizData({ ...quizData, info: { ...quizData.info, quizTitle: newTitle } })
        LS_saveQuizData(name)
    }

    const onChangeData = (dataName) => (e) => {
        let { target: { name, value, id } } = e
        let num = parseInt(id)
        let newContents = quizAnswerArr.map((item, i) => {
            if (num === i) {
                return { ...item, [dataName]: value }
            } else {
                return item
            }
        })
        const quizData = LS_getQuizData()
        LS_setQuizData({ ...quizData, contents: newContents })
        LS_saveQuizData(name)
        setQuizAnswerArr(newContents)
    }

    const onChangeSelect = (e) => {
        let { target: { name, value, id, dataset: { index } } } = e
        let num = parseInt(id)
        index = parseInt(index)
        let select = LS_getQuizData().contents[num].select
        select[index] = value
        let newContents = quizAnswerArr.map((item, i) => {
            if (num === i) {
                return { ...item, select }
            } else {
                return item
            }
        })
        const quizData = LS_getQuizData()
        LS_setQuizData({ ...quizData, contents: newContents })
        LS_saveQuizData(name)
        setQuizAnswerArr(newContents)
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
        let { target: { parentNode: { parentNode: { dataset: { name: name1, type: type1 } } } } } = e
        let { target: { parentNode: { dataset: { name: name2, type: type2 } } } } = e
        const name = name1 ? name1 : name2
        const type = type1 ? type1 : type2
        return { name, type }
    }

    const onClickDelBtn = (e) => {
        const num = getDivNum(e)
        const { name } = getDivName(e)
        const newContents = contents.filter((item, index) => index !== num - 1)
        const quizData = LS_getQuizData()
        LS_setQuizData({ ...quizData, info: { ...quizData.info, numOfQuiz: numOfQuiz - 1 }, contents: newContents })
        LS_saveQuizData(name)
        setQuizAnswerArr(newContents)
    }

    const onClickAddBtn = (e) => {
        const { name, type } = getDivName(e)
        if (type === "sub") {
            const newContents = [...contents, { quiz: "", answer: "", type }]
            const quizData = LS_getQuizData()
            LS_setQuizData({ ...quizData, info: { ...quizData.info, numOfQuiz: numOfQuiz + 1 }, contents: newContents })
            LS_saveQuizData(name)
            setQuizAnswerArr(newContents)
        } else if (type === "obj") {
            const newContents = [...contents, { quiz: "", answer: "", type, select: ["", "", "", ""] }]
            const quizData = LS_getQuizData()
            LS_setQuizData({ ...quizData, info: { ...quizData.info, numOfQuiz: numOfQuiz + 1 }, contents: newContents })
            LS_saveQuizData(name)
            setQuizAnswerArr(newContents)
        }
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
                        maxLength="30"
                    />
                </div>
                <div className="edit_quizAndAnserList">
                    {quizAnswerArr.map((item, index) => {
                        return (<div key={index}>
                            {item.type === "sub" &&
                                <div className="edit_quizAndAnswer">
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
                                            maxLength="120"
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
                                            maxLength="36"
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
                                </div>
                            }
                            {item.type === "obj" &&
                                <div className="edit_quizAndAnswer objMode">
                                    <div className="objMode_column">
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
                                                maxLength="120"
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
                                    </div>
                                    <div className="objMode_column">
                                        <div className="objQuiz_select">
                                            <div className="select_item">
                                                <div className="select_num"><span>1</span></div>
                                                <input
                                                    type="numder"
                                                    required
                                                    id={index}
                                                    data-index={0}
                                                    value={item.select[0]}
                                                    placeholder="1번 문항을 입력하세요"
                                                    onChange={onChangeSelect}
                                                    autoComplete='off'
                                                    maxLength="36"
                                                    name={`QS${storage}Btn`}
                                                />
                                            </div>
                                            <div className="select_item">
                                                <div className="select_num">2</div>
                                                <input
                                                    type="numder"
                                                    required
                                                    id={index}
                                                    data-index={1}
                                                    value={item.select[1]}
                                                    placeholder="2번 문항을 입력하세요"
                                                    onChange={onChangeSelect}
                                                    autoComplete='off'
                                                    maxLength="36"
                                                    name={`QS${storage}Btn`}
                                                />
                                            </div>
                                            <div className="select_item">
                                                <div className="select_num">3</div>
                                                <input
                                                    type="numder"
                                                    required
                                                    id={index}
                                                    data-index={2}
                                                    value={item.select[2]}
                                                    placeholder="3번 문항을 입력하세요"
                                                    onChange={onChangeSelect}
                                                    autoComplete='off'
                                                    maxLength="36"
                                                    name={`QS${storage}Btn`}
                                                />
                                            </div>
                                            <div className="select_item">
                                                <div className="select_num">4</div>
                                                <input
                                                    type="numder"
                                                    required
                                                    id={index}
                                                    data-index={3}
                                                    value={item.select[3]}
                                                    placeholder="4번 문항을 입력하세요"
                                                    onChange={onChangeSelect}
                                                    autoComplete='off'
                                                    maxLength="36"
                                                    name={`QS${storage}Btn`}
                                                />
                                            </div>
                                        </div>
                                        <div className="objMode_answer">
                                            <div className="objMode_answer_msg">정답을 입력하세요(1~4)</div>
                                            <input
                                                type="number"
                                                value={item.answer}
                                                id={index}
                                                name={`QS${storage}Btn`}
                                                onChange={onChangeData("answer")}
                                                autoComplete='off'
                                                min={1} max={4}
                                            />
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>)
                    })}
                </div>
                <div className="add_btn">
                    <div className="add_btn_column">
                        {numOfQuiz === 20 ? null : <div className="add_btn_name">주관식문제</div>}
                        <div className="add_btn_icon" data-name={`QS${storage}Btn`} data-type="sub" onClick={onClickAddBtn}>
                            {numOfQuiz === 20 ? null : AddQuiz}
                        </div>
                    </div>
                    <div className="add_btn_column">
                        {numOfQuiz === 20 ? null : <div className="add_btn_name">객관식문제</div>}
                        <div className="add_btn_icon" data-name={`QS${storage}Btn`} data-type="obj" onClick={onClickAddBtn}>
                            {numOfQuiz === 20 ? null : AddQuiz}
                        </div>
                    </div>
                </div>
                <button className="btn" onClick={onClickBack}>돌아가기</button>
            </div>
        </div>
        <AdFitInEditQuiz />
        <Footer />
        { completion && <Redirect push to="/storage" />}
    </>);
}

export default QuizEdit;