import React from 'react';
import "../CSS/Footer.css"
import { Instagram, Sun, WebLogo } from '../icon';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_explan-me">
                <div className="explan-me_item">ABOUT ME</div>
                <div className="explan-me_name explan-me_item">
                    <div className="explan-me_name_list">만든 사람 :</div>
                    <div className="explan-me_name_content">초부득삼</div>
                </div>
                <div className="explan-me_email explan-me_item">
                    <div className="explan-me_email_list">이메일 :</div>
                    <div className="explan-me_email_content">nlom0218@gmail.com</div>
                </div>
                <div className="explan-me_blog explan-me_item">
                    <div className="explan-me_blog_list">블로그 :</div>
                    <div className="explan-me_blog_content">
                        <a href="https://blog.naver.com/nlom0218" target="blank">初不得三[초부득삼]_네이버블로그</a>
                    </div>
                </div>
                <div className="explan-me_instagram explan-me_item">
                    <div className="explan-me_instagram_list">인스타그램 :</div>
                    <div className="explan-me_instagram_content">
                        <a href="https://www.instagram.com/hhhong_dong/" target="blank">{Instagram}</a></div>
                </div>
            </div>
            <div className="footer_explan-web">
                <div className="explan-web_item">ABOUT WEB</div>
                <div className=" explan-web_log explan-web_item">
                    <div className="explan-web_log_icon">{WebLogo}</div>
                    <div className="explan-web_log_msg">쉽게 만드는 퀴즈</div>
                </div>
                <div className=" explan-web_log explan-web_item">
                    <div className="explan-web_log_icon">{Sun}</div>
                    <div className="explan-web_log_msg">2021- 2021 (v0.1.0)</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;