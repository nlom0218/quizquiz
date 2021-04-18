import React from 'react';
import { Chrome } from '../../icon';

const HomeChrome = () => {
    const browser = window.chrome ? "chrome" : null
    console.log(browser);

    return (<div className="home_chrome">
        <div className="chrome_column">
            <div className="chrome_icon">{Chrome}</div>
        </div>
        <div className="chrome_column">
            <div className="chrome_msg">원활한 QUIZ HI의 이용을 위해 구글 크롬을 사용해주세요</div>
            <div className="chrome_state">
                {browser ? "현재 구글 크롬을 사용하고 있습니다" : "구글 크롬 다운로드는 아래의 링크를 통해 가능합니다"}
            </div>
            {!browser && <a href="https://www.google.com/intl/ko/chrome/" className="chrome_download">구글 크롬 다운로드</a>}
        </div>
    </div>);
}

export default HomeChrome;