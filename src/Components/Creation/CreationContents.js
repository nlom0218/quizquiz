import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { LS_getQuizData, LS_setQuizData } from '../../localStorage';

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
        const { target: { dataset: { type } } } = e
        setType(type)
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
    }

    return (<>
        <div className="check_type">
            <div className="type_name" data-type="sub" onClick={onClickType} >주관식</div>
            <div className="type_name" data-type="obj" onClick={onClickType} >객관식</div>
        </div>
        { type === "sub" &&
            <form className="sub_quiz" onSubmit={onSubmitQuiz}>
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
                <input
                    type="text"
                    value={subAnswer}
                    name="subAnswer"
                    onChange={onChangeValue}
                    placeholder={`${num}번 정답을 적어주세요`}
                    required
                    maxLength="36"
                    autoComplete='off'
                />
                <input type="submit" value={num === numOfQuiz ? "퀴즈 생성하기" : `${num + 1}번 문제 만들기`} />
            </form>}
        { type === "obj" &&
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
                    <div className="answers_1">
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
                    <div className="answers_2">
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
                    <div className="answers_3">
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
                    <div className="answers_4">
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
                    <div className="quiz_answers_msg">정답을 적어주세요</div>
                    <input type="number" min={1} max={4} className="quiz_answers_num" required value={objAnswer}
                        onChange={onChangeValue} name="objAnswer" />
                </div>
                <input type="submit" value={num === numOfQuiz ? "퀴즈 생성하기" : `${num + 1}번 문제 만들기`} />
            </form>}
        { finish && < Redirect push to="/creation/loading" />}
    </>);
}

export default CreationContents;