import React, { useState } from 'react';
import { Timer } from '../../icon';

import BgImg1 from "../../Images/BackgroundImg/BgImg1.jpg"

const QuizTimer = () => {
    let quizSetting = JSON.parse(localStorage.getItem("quizSetting"));
    quizSetting = quizSetting ? quizSetting : { num: 0, BgName: BgImg1, timer: 0 }
    const { timer } = quizSetting

    const [time, setTime] = useState(timer)

    const onChangeTime = (e) => {
        const { target: { value } } = e
        const newTime = parseInt(value)
        setTime(newTime)
        localStorage.setItem("quizSetting", JSON.stringify({ ...quizSetting, ...{ timer: newTime } }))
    }

    return (<div className="setting_timer">
        <div className="timer_intro">타이머를 설정하시겠습니까?</div>
        <div className="timer_img">{Timer}</div>
        <div className="timer_form">
            <input
                type="range"
                min="0"
                max="120"
                step="10"
                value={time}
                onChange={onChangeTime} />
            <div className="timer_current">현재 설정된 시간: {time}초</div>
        </div>
    </div>);
}

export default QuizTimer;