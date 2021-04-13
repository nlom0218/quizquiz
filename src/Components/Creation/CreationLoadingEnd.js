import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { ListIcon, Save, Start } from '../../icon';
import { LS_getAnswersArr, LS_getQuizInfo, LS_getQuizzesArr, LS_setQuizDate1, LS_setQuizDate2 } from '../../localStorage';

const CreationLoadingEnd = () => {
    const [start, setStart] = useState(false)
    const onClickBtn = () => {
        if (window.confirm("퀴즈가 끝나면 퀴즈는 삭제됩니다. 괜찮습니까?")) {
            setStart(true)
        } else {
            return
        }

    }

    return (<>
        <div className="quizBtn">
            <div className="quizBtn_start">
                <div className="start_icon">{Start}</div>
                <ul className="start_msg">
                    <li>{ListIcon} 퀴즈가 바로 시작됩니다.</li>
                    <li>{ListIcon} 퀴즈가 끝나면 퀴즈는 삭제됩니다.</li>
                    <li>{ListIcon} 퀴즈가 저장소에 저장되지 않습니다.</li>
                </ul>
                <button className="btn startBtn" name="startBtn" onClick={onClickBtn}>시작하기</button>
            </div>
            <div className="quizBtn_save">
                <div className="save_icon">{Save}</div>
                <ul className="save_msg">
                    <li>{ListIcon} 퀴즈 저장소에 저장됩니다.</li>
                    <li>{ListIcon} 저장소에서 퀴즈를 수정 및 삭제 가능합니다.</li>
                    <li>{ListIcon} 퀴즈 저장소 선택화면으로 이동합니다.</li>
                </ul>
                <Link to="/creation/quizsave">
                    <button className="btn saveBtn" name="saveBtn">저장하기</button>
                </Link>
            </div>
        </div>
        {start && < Redirect push to="/quiz" />}
    </>);
}

export default connect()(CreationLoadingEnd);