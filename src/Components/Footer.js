import React from 'react';
import "../CSS/Footer.css"
import { Github, Instagram, Sun, WebLogo } from '../icon';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_explan-me">
                <div className="explan-me_item">ABOUT AUTHOR</div>
                <div className="explan-me_name explan-me_item">
                    <div className="explan-me_name_list">NAME :</div>
                    <div className="explan-me_name_content">KHD</div>
                </div>
                <div className="explan-me_email explan-me_item">
                    <div className="explan-me_email_list">E-MAIL :</div>
                    <div className="explan-me_email_content">nlom0218@gmail.com</div>
                </div>
                {/* <div className="explan-me_blog explan-me_item">
                    <div className="explan-me_blog_list">BLOG :</div>
                    <div className="explan-me_blog_content">
                        <a href="https://blog.naver.com/nlom0218" target="blank">初不得三[초부득삼]_네이버블로그</a>
                    </div>
                </div> */}
                <div className="explan-me_instagram explan-me_item">
                    <div className="explan-me_instagram_list">INSTAGRAM :</div>
                    <div className="explan-me_instagram_content">
                        <a href="https://www.instagram.com/hhhong_dong/" target="blank">{Instagram}</a>
                    </div>
                </div>
                <div className="explan-me_github explan-me_item">
                    <div className="explan-me_github_list">GITHUB :</div>
                    <div className="explan-me_github_content">
                        <a href="https://github.com/nlom0218" target="blank">{Github}</a></div>
                </div>
            </div>
            <div className="footer_explan-web">
                <div className="explan-web_item">ABOUT WEB</div>
                <div className=" explan-web_log explan-web_item">
                    <div className="explan-web_log_icon">{WebLogo}</div>
                    <div className="explan-web_log_msg">QUIZ HI</div>
                </div>
                <div className=" explan-web_log explan-web_item">
                    <div className="explan-web_log_icon">{Sun}</div>
                    <div className="explan-web_log_msg">2021- 2021 (v1.1.0)</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;