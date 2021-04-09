import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const mapStateToProps = (state) => {
    return {
        title: state.quizData.info.quizTitle,
        num: state.quizData.info.numOfQuiz
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        QuizAndAnswer: (quizzesArr, answersArr) => dispatch({
            type: "QUIZ_AND_ANSWER",
            quizzesArr,
            answersArr
        })
    }
}

const CreationQuizzes = ({ title, num, QuizAndAnswer }) => {
    const [finish, setFinish] = useState(false)

    let numArr = []
    for (let i = 0; i < num; i++) {
        numArr.push(i)
    }

    const onSubmitQuiz = (e) => {
        e.preventDefault()
        let quizzesArr = []
        let answersArr = []
        for (let i = 0; i < num; i++) {
            quizzesArr.push([...document.getElementsByClassName(`${i + 1}quiz`)][0].value)
            answersArr.push([...document.getElementsByClassName(`${i + 1}answer`)][0].value)
        }
        QuizAndAnswer(quizzesArr, answersArr)
        if (window.confirm("수정이 불가능 합니다. 퀴즈를 생성하시겠습니까?(퀴즈 저장소에 저장시 수정 및 삭제 가능합니다)")) {
            setFinish(true)
        } else {
            return
        }
    }

    return (<>
        <div className="quizTitle">{title}</div>
        <form className="quizForm" onSubmit={onSubmitQuiz}>
            {numArr.map((item) => {
                return (<div key={item} className="quizInput">
                    <input
                        type="text"
                        placeholder={`${item + 1}번 문제를 적어주세요`}
                        className={`${item + 1}quiz`}
                        autoComplete='off'
                        required
                    />
                    <input
                        type="text"
                        placeholder={`${item + 1}번 정답을 적어주세요`}
                        className={`${item + 1}answer`}
                        required
                    />
                </div>)
            })}
            <input type="submit" value="완료!"></input>
        </form>
        {finish && < Redirect push to="/creation/completion" />}
    </>);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreationQuizzes);