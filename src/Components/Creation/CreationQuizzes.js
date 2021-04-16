import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { WarningIcon } from '../../icon';
import { LS_setQuiz } from '../../localStorage';

const CreationQuizzes = ({ num }) => {
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
        if (window.confirm("수정이 불가능 합니다. 퀴즈를 생성하시겠습니까?(퀴즈 저장소에 저장시 수정 및 삭제 가능합니다)")) {
            LS_setQuiz(quizzesArr, answersArr)
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
                return (<div key={item} className="quizAndAnswer_input">
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
                        maxLength="24"
                        autoComplete='off'
                    />
                </div>)
            })}
            <input type="submit" value="완료" />
        </form>
        {finish && < Redirect push to="/creation/completion" />}
    </div>);
}

export default connect()(CreationQuizzes);