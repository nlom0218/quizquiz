import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import HomeChrome from '../Components/Home/HomeChrome';
import HomeNotice from '../Components/Home/HomeNotice';
import KakaoAdFit from '../Components/KakaoAdFit';
import { StarFace, WarningIcon } from '../icon';

const Home = () => {
    return (<>
        <Header />
        <div className="home_page main">
            <div className="home_intro">
                <div className="intro_mainMsg">QUIZ HI에 오신걸 환영합니다</div>
                <div className="intro_subMsg">QUIZ HI에서 쉽고 빠르게 퀴즈를 만들 수 있습니다</div>
            </div>
            <div className="home_page_warning">
                <div className="warning_icon">{StarFace}</div>
                <div className="warning_msg">모바일이 아닌 컴퓨터를 사용하시면 더욱 쾌적한 이용이 가능합니다</div>
            </div>
            <div className="home_contents">
                <HomeChrome />
                <HomeNotice />
            </div>
        </div >
        <Footer />
    </>);
}

export default Home;
