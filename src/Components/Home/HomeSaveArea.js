import React from 'react';
import { Link } from 'react-router-dom';

const HomeSaveArea = () => {

    return (<div className="home_saveArea">
        <div className="saveArea_column">
            <div className="saveArea_msg blinking">퀴즈를 만들기 전 꼭 확인하세요!</div>
        </div>
        <div className="saveArea_column">
            <div className="saveArea_desktop">1. 컴퓨터마다 저장된 퀴즈는 다릅니다.</div>
            <div className="saveArea_browser">2. 브라우저마다 저장된 퀴즈는 다릅니다.</div>
        </div>
        <div className="saveArea_column">
            <Link to={`/notice/1619348147126`}>
                <div className="saveArea_notice">관련 공지사항 보러가기 Click</div>
            </Link>
        </div>
    </div>);
}

export default HomeSaveArea;