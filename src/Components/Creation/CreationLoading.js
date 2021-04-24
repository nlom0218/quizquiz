import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import KakaoAdFit, { AdFitInCreationLoding } from '../KakaoAdFit';

const CreationLoading = () => {
    const [onload, setOnload] = useState(0)
    const [loadEnd, setLoadEnd] = useState(false)

    useEffect(() => {
        if (onload < 30) {
            setTimeout(() => { setOnload(onload + 1) }, 100)
        } else if (onload < 60) {
            setTimeout(() => { setOnload(onload + 1) }, 50)
        } else if (onload < 100) {
            setTimeout(() => { setOnload(onload + 1) }, 30)
        } else if (onload === 100) {
            setLoadEnd(true)
        }
    }, [onload])


    return (<>
        <div className="creation_loading">
            <div className="creation_loading_column">
                <div className="loading_msg">{loadEnd ? "퀴즈 생성 완료 📋" : "퀴즈 생성중... 📋"}</div>
                <div className="loading_bar">
                    <div className="bar_state" style={{ width: `${onload}%` }}></div>
                    <div className="bar_text">{onload}%</div>
                </div>
            </div>
            {loadEnd &&
                <Link to="/creation/completion">
                    <button className="nextBtn btn">다음 단계로 넘어가기</button>
                </Link>
            }
        </div>
        <AdFitInCreationLoding />
    </>);
}

export default connect()(CreationLoading);