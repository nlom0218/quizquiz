import { faFontAwesomeLogoFull } from '@fortawesome/free-brands-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { WarningIcon } from '../../icon';
import { LS_getQuizData, LS_setQuiz } from '../../localStorage';

const CreationQuizzes = ({ num }) => {
    const [finish, setFinish] = useState(false)
    const [initForm, setInitForm] = useState(true)
    const [render, setRender] = useState(true)
    const [plusrender, setPlusRender] = useState(true)

    useEffect(() => {
        // for (let i = 0; i < num; i++) {
        //     if (document.getElementById(`${i}quiz`).dataset.type === `${i}subjective`) {
        //         document.getElementById(`${i}quiz`).dataset.curtype = "subjective"
        //         document.getElementById(`${i}subBtn`).classList.add("seleted")
        //         document.getElementById(`${i}objBtn`).classList.remove("seleted")
        //     } else if (document.getElementById(`${i}quiz`).dataset.type === `${i}objective`) {
        //         document.getElementById(`${i}quiz`).dataset.curtype = "objective"
        //         document.getElementById(`${i}objBtn`).classList.add("seleted")
        //         document.getElementById(`${i}subBtn`).classList.remove("seleted")
        //     }
        // }
        setPlusRender(prev => !prev)

    }, [render])

    let numArr = []
    for (let i = 0; i < num; i++) {
        numArr.push(i)
    }

    const objAnswerArr = [1, 2, 3, 4]

    const onClickType = (e) => {
        const { target, target: { innerText, parentNode: { parentNode }, dataset: { id } } } = e
        if (innerText === "주관식") {
            parentNode.dataset.type = `${id}subjective`
        } else if (innerText === "객관식") {
            parentNode.dataset.type = `${id}objective`
        }
        setRender(prev => !prev)
        setInitForm(false)
    }

    const onSubmitQuiz = (e) => {
        e.preventDefault()
        let contents = []
        for (let i = 0; i < num; i++) {
            const curtype = [...e.target.childNodes][i].dataset.curtype
            const quiz = [...document.getElementsByClassName(`${i + 1}quiz`)][0].value
            if (curtype) {
                if (curtype === "subjective") {
                    const answer = [...document.getElementsByClassName(`${i + 1}answer`)][0].value
                    const content = { type: "sub", quiz, answer }
                    contents.push(content)
                } else if (curtype === "objective") {
                    const answersArr = [...[...e.target.childNodes][i].lastChild.lastChild.lastChild.lastChild.childNodes]
                    const answers = [
                        [...answersArr[0].childNodes][1].value,
                        [...answersArr[1].childNodes][1].value,
                        [...answersArr[2].childNodes][1].value,
                        [...answersArr[3].childNodes][1].value
                    ]
                    const answer = parseInt([...answersArr[4].childNodes][1].value);
                    const content = {
                        type: "obj",
                        quiz,
                        answers,
                        answer
                    }
                    contents.push(content)
                }
            }
            console.log(contents);
        }
        if (window.confirm("수정이 불가능 합니다. 퀴즈를 생성하시겠습니까?(퀴즈 저장소에 저장시 수정 및 삭제 가능합니다)")) {
            let quizData = LS_getQuizData()
            quizData = { ...quizData, contents }
            console.log(quizData);
            setFinish(true)
        } else {
            return
        }
    }

    return (<div className="quizAndAnswer">
        <div className="quizAndAnswer_warning">
            <div className="warning_icon">{WarningIcon}</div>
            <div className="warning_msg">아래의 완료 버튼을 누르기 전 페이지를 벗어나면 퀴즈 데이터는 사라집니다</div>
        </div>
        <form className="quizAndAnswer_form" onSubmit={onSubmitQuiz}>
            {numArr.map((item) => {
                return (<div key={item} className="quizAndAnswer_input" data-type={`${item}subjective`} id={`${item}quiz`} data-curtype="subjective">
                    <div className="check_type">
                        <div className="type_name" data-id={item} onClick={onClickType} id={`${item}subBtn`}>주관식</div>
                        <div className="type_name" data-id={item} onClick={onClickType} id={`${item}objBtn`}>객관식</div>
                    </div>
                    <div className="input_content">
                        {document.getElementById(`${item}quiz`).dataset.curtype === "subjective" &&
                            <div id={`${item}subjective_quiz`}>
                                <div className="subjective_quiz">
                                    <input
                                        type="text"
                                        placeholder={`${item + 1}번 퀴즈를 적어주세요`}
                                        className={`${item + 1}quiz`}
                                        autoComplete='off'
                                        required
                                        maxLength="80"
                                    />
                                    <input
                                        type="text"
                                        placeholder={`${item + 1}번 정답을 적어주세요`}
                                        className={`${item + 1}answer`}
                                        required
                                        maxLength="18"
                                        autoComplete='off'
                                    />
                                </div>
                            </div>
                        }
                        {document.getElementById(`${item}quiz`).dataset.curtype === "objective" &&
                            <div id={`${item}objective_quiz`} className="block">
                                <div className="objective_quiz">
                                    <input
                                        type="text"
                                        placeholder={`${item + 1}번 퀴즈를 적어주세요`}
                                        className={`${item + 1}quiz`}
                                        autoComplete='off'
                                        required
                                        maxLength="80"
                                        autoComplete='off'
                                    />
                                    <div className="objective_quiz_answers">
                                        {objAnswerArr.map((item) => {
                                            return (<div className="answers_item" key={item}>
                                                <div className="answers_num">{item}</div>
                                                <input
                                                    type="text"
                                                    placeholder={`${item}번 문항을 입력해주세요`}
                                                    autoComplete='off'
                                                    required
                                                    maxLength="24"
                                                />
                                            </div>
                                            )
                                        })}
                                        <div className="quiz_answers_select">
                                            <div className="quiz_answers_msg">정답을 적어주세요</div>
                                            <input type="number" min={1} max={4} className="quiz_answers_num" required />
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        {/* {initForm ?
                            <div id={`${item}subjective_quiz`}>
                                <div className="subjective_quiz">
                                    <input
                                        type="text"
                                        placeholder={`${item + 1}번 퀴즈를 적어주세요`}
                                        className={`${item + 1}quiz`}
                                        autoComplete='off'
                                        required
                                        maxLength="80"
                                    />
                                    <input
                                        type="text"
                                        placeholder={`${item + 1}번 정답을 적어주세요`}
                                        className={`${item + 1}answer`}
                                        required
                                        maxLength="18"
                                        autoComplete='off'
                                    />
                                </div>
                            </div> : <>
                                
                            </>} */}
                    </div>
                </div>)
            })}
            <input type="submit" value="완료" />
        </form>
        { finish && < Redirect push to="/creation/loading" />}
    </div >);
}

export default connect()(CreationQuizzes);