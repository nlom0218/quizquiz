import React from 'react';
import { NavLink } from 'react-router-dom';
import "../CSS/Header.css"
import { HomeIcon } from '../icon';

const Header = () => {
    return (<header className="header">
        <nav className="header_nav">
            <ul className="nav_list">
                <li><NavLink activeClassName="seleted" exact to="/">{HomeIcon}</NavLink></li>
                <li><NavLink activeClassName="seleted" to="/method" >만드는 방법</NavLink></li>
                <li><NavLink activeClassName="seleted" to="/creation" >퀴즈 만들기</NavLink></li>
                <li><NavLink activeClassName="seleted" to="/storage" >퀴즈 저장소</NavLink></li>
                <li><NavLink activeClassName="seleted" to="/notice" >공지사항</NavLink></li>
            </ul>
        </nav>
    </header>);
}

export default Header;