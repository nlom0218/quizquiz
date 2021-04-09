import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (<header>
        <nav>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/method" >만드는 방법</Link></li>
                <li><Link to="/creation" >퀴즈 만들기</Link></li>
                <li><Link to="/storage" >퀴즈 저장소</Link></li>
            </ul>
        </nav>
    </header>);
}

export default Header;