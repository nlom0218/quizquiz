import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { WarningIcon } from '../../icon';
import { LS_getQuizData, LS_setQuizData } from '../../localStorage';
import KakaoAdFit, { AdFitInCreationContents } from '../KakaoAdFit';

const CreationContents = () => {
    const [finish, setFinish] = useState(false)
    const [num, setNum] = useState(1)
    const [type, setType] = useState("")
    const [subQuiz, setSubQuiz] = useState("")
    const [objQuiz, setObjQuiz] = useState("")
    const [subAnswer, setSubAnswer] = useState("")
    const [objAnswer, setObjAnswer] = useState("")
    const [select1, setSelect1] = useState("")
    const [select2, setSelect2] = useState("")
    const [select3, setSelect3] = useState("")
    const [select4, setSelect4] = useState("")

    let quizData = LS_getQuizData()
    let { info: { numOfQuiz } } = LS_getQuizData()

    const onClickType = (e) => {
        const { target: { dataset: { type }, id } } = e
        setType(type)
        if (type === "sub") {
            document.getElementById("subType").classList.add("seleted_type")
            document.getElementById("objType").classList.remove("seleted_type")
        } else if (type === "obj") {
            document.getElementById("objType").classList.add("seleted_type")
            document.getElementById("subType").classList.remove("seleted_type")
        }
    }

    const onChangeValue = (e) => {
        const { target: { name, value } } = e
        if (name === "subQuiz") {
            setSubQuiz(value)
        } else if (name === "objQuiz") {
            setObjQuiz(value)
        } else if (name === "subAnswer") {
            setSubAnswer(value)
        } else if (name === "objAnswer") {
            setObjAnswer(value)
        } else if (name === "select1") {
            setSelect1(value)
        } else if (name === "select2") {
            setSelect2(value)
        } else if (name === "select3") {
            setSelect3(value)
        } else if (name === "select4") {
            setSelect4(value)
        }
    }


    const onSubmitQuiz = (e) => {
        e.preventDefault()
        let content = {}
        if (type === "sub") {
            content = { type, order: num, quiz: subQuiz, answer: subAnswer }
        } else if (type === "obj") {
            content = { type, order: num, quiz: objQuiz, answer: objAnswer, select: [select1, select2, select3, select4] }
        }
        quizData = { ...quizData, contents: [...quizData.contents, content] }
        LS_setQuizData(quizData)
        setType("")
        setSubQuiz("")
        setObjQuiz("")
        setSubAnswer("")
        setObjAnswer("")
        setSelect1("")
        setSelect2("")
        setSelect3("")
        setSelect4("")
        if (num !== numOfQuiz) {
            setNum(num + 1)
        } else {
            setFinish(true)
        }
        document.getElementById("subType").classList.remove("seleted_type")
        document.getElementById("objType").classList.remove("seleted_type")
    }

    return (<>
        <div className="quizContents">
            <div className="creationQuiz_msg">퀴즈의 유형을 선택 후 퀴즈를 입력하세요({num}/{numOfQuiz})</div>
            <div className="creationQuiz_warning">
                <div className="warning_icon">{WarningIcon}</div>
                <div className="warning_msg">새로고침 & 페이지 이동을 하면 퀴즈 데이터는 사라집니다</div>
            </div>
            <div className="check_type">
                <div id="subType" className="type_name" data-type="sub" onClick={onClickType} >주관식</div>
                <div id="objType" className="type_name" data-type="obj" onClick={onClickType} >객관식</div>
            </div>
            {type === "sub" &&
                <form className="sub_quiz" onSubmit={onSubmitQuiz}>
                    <div className="sub_quiz_column">
                        <input
                            type="text"
                            placeholder={`${num}번 퀴즈를 적어주세요`}
                            value={subQuiz}
                            name="subQuiz"
                            onChange={onChangeValue}
                            autoComplete='off'
                            required
                            maxLength="120"
                        />
                    </div>
                    <div className="sub_quiz_column">
                        <input
                            className="sub_quizAnswer"
                            type="text"
                            value={subAnswer}
                            name="subAnswer"
                            onChange={onChangeValue}
                            placeholder={`${num}번 정답을 적어주세요`}
                            required
                            maxLength="36"
                            autoComplete='off'
                        />
                    </div>
                    <div className="quizContents_btn">
                        <input
                            type="submit"
                            value={num === numOfQuiz ? "퀴즈 생성하기" : `${num}번 문제 만들기`} />
                    </div>
                </form>}
            {
                type === "obj" &&
                <form className="obj_quiz" onSubmit={onSubmitQuiz}>
                    <input
                        type="text"
                        value={objQuiz}
                        name="objQuiz"
                        onChange={onChangeValue}
                        placeholder={`${num}번 퀴즈를 적어주세요`}
                        autoComplete='off'
                        required
                        maxLength="120"
                        autoComplete='off'
                    />
                    <div className="objective_quiz_answers">
                        <div className="answers_1 answers_item">
                            <div className="answers_num">1</div>
                            <input
                                type="text"
                                value={select1}
                                name="select1"
                                onChange={onChangeValue}
                                placeholder={`1번 문항을 입력해주세요`}
                                autoComplete='off'
                                required
                                maxLength="36"
                            />
                        </div>
                        <div className="answers_2 answers_item">
                            <div className="answers_num">2</div>
                            <input
                                type="text"
                                value={select2}
                                name="select2"
                                onChange={onChangeValue}
                                placeholder={`2번 문항을 입력해주세요`}
                                autoComplete='off'
                                required
                                maxLength="36"
                            />
                        </div>
                        <div className="answers_3 answers_item">
                            <div className="answers_num">3</div>
                            <input
                                type="text"
                                value={select3}
                                name="select3"
                                onChange={onChangeValue}
                                placeholder={`3번 문항을 입력해주세요`}
                                autoComplete='off'
                                required
                                maxLength="36"
                            />
                        </div>
                        <div className="answers_4 answers_item">
                            <div className="answers_num">4</div>
                            <input
                                type="text"
                                value={select4}
                                name="select4"
                                onChange={onChangeValue}
                                placeholder={`4번 문항을 입력해주세요`}
                                autoComplete='off'
                                required
                                maxLength="36"
                            />
                        </div>
                    </div>
                    <div className="quiz_answers_select">
                        <div className="quiz_answers_msg">정답을 적어주세요(1~4)</div>
                        <input type="number" min={1} max={4} className="quiz_answers_num" required value={objAnswer}
                            onChange={onChangeValue} name="objAnswer" />
                    </div>
                    <div className="obj_quiz_column">
                        <div className="quizContents_btn">
                            <input
                                type="submit"
                                value={num === numOfQuiz ? "퀴즈 생성하기" : `${num}번 문제 만들기`} />
                        </div>
                    </div>
                </form>
            }
            {finish && < Redirect push to="/creation/loading" />}
        </div >
        <AdFitInCreationContents />
    </>);
}

export default CreationContents;