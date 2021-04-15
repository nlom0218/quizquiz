import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Home = () => {
    return (<>
        <Header />
        <div className="home_page main">
            This is main 크롬 이용 없으면 다운로드 -> 링크
        <button>다운</button>
        </div >
        <Footer />
    </>);
}

export default Home;
