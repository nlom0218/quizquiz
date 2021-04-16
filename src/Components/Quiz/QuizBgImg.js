import React, { useState } from 'react';
import { BgImgArr } from '../../bgImg';
import { LeftIcon, RightIcon } from '../../icon';

const QuizBgImg = () => {
    const quizBgImg = JSON.parse(localStorage.getItem("quizBgImg"));
    let { num: imgNum, name } = quizBgImg
    imgNum = parseInt(imgNum)
    const [num, setNum] = useState(imgNum)
    const [load, setLoad] = useState(true)

    const onClickBgSeletBtn = (e) => {
        const { target: { name, dataset: { num } } } = e
        localStorage.setItem("quizBgImg", JSON.stringify({ name, num }))
        setLoad(pre => !pre)
    }

    const getDivName = (e) => {
        const { target: { parentNode: { parentNode: { dataset: { name: name1 } } } } } = e
        const { target: { parentNode: { dataset: { name: name2 } } } } = e
        const name = name1 ? name1 : name2
        return name
    }

    const onClickBtn = (e) => {
        let { target: { dataset: { name } } } = e
        name = name ? name : getDivName(e)
        if (name === "leftBtn") {
            const newNum = num === 0 ? BgImgArr.length - 1 : num - 1
            setNum(newNum)
        } else if (name === "rigthBtn") {
            const newNum = num === BgImgArr.length - 1 ? 0 : num + 1
            setNum(newNum)
        }
    }

    return (<div className="setting_BgImg">
        <div className="BgImg_seletForm">
            <div className="seletFrom_msg">퀴즈 배경화면을 선택하세요</div>
            <div className="seletForm_column">
                <div className="leftBtn moveBtn" data-name="leftBtn" onClick={onClickBtn}>
                    {LeftIcon}
                </div>
                <img className="BgImg_img" src={BgImgArr[num]} />
                <div className="RigthBtn moveBtn" data-name="rigthBtn" onClick={onClickBtn}>
                    {RightIcon}
                </div>
            </div>
            {BgImgArr[num] !== name ? <button
                className="seletFrom_btn btn"
                name={BgImgArr[num]}
                data-num={BgImgArr.indexOf(BgImgArr[num])}
                onClick={onClickBgSeletBtn}
            >
                선택하기
            </button> : <button
                className="seletFrom_btn btn"
                name={BgImgArr[num]}
                data-num={BgImgArr.indexOf(BgImgArr[num])}
                onClick={onClickBgSeletBtn}
            >
                선택됨
            </button>}
        </div>
    </div>);
}

export default QuizBgImg;