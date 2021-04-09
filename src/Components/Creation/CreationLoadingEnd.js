import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const mapStateToProps = (state) => {
    return {
        quizId: state.quizData.quizId
    }
}

const CreationLoadingEnd = ({ quizId, quizMode }) => {
    const [solve, setSolve] = useState(false)
    const [save, setSave] = useState(false)

    const onClickBtn = (e) => {
        const { target: { name } } = e
        if (name === "solveBtn") {
            setSolve(true)
        } else if (name === "saveBtn") {
            setSave(true)
        }
    }

    return (<>
        <div>Loading끝</div>
        <div className="quizBtn">
            <div className="quizBtn_solve">
                <button name="solveBtn" onClick={onClickBtn}>퀴즈 저장하지 않기</button>
                <div className="quizBtn_solve_msg">
                    퀴즈 저장소에 저장 되지 않으며 퀴즈가 바로 시작 됩니다.
                    퀴즈가 끝나면 데이터는 삭제 됩니다.
                    버튼을 누르면 퀴즈 시작 화면으로 넘어갑니다.
                </div>
            </div>
            <div className="quizBtn_save">
                <button name="saveBtn" onClick={onClickBtn}>퀴즈 저장하기</button>
                <div className="quizBtn_solve_msg">
                    퀴즈 저장소에 저장 후 데이터가 저장 되며 이후에도 수정 및 삭제가 가능합니다.
                    버튼을 누르면 퀴즈 저장소로 이동합니다.
                </div>
            </div>
        </div>
        {solve && < Redirect push to="/quiz" />}
    </>);
}

export default connect(mapStateToProps)(CreationLoadingEnd);