import React from 'react';
import { Link } from 'react-router-dom';
import { contents } from '../../contents';

const HomeNotice = () => {
    const content1 = contents[contents.length - 1]
    const content2 = contents[contents.length - 2]
    const content3 = contents[contents.length - 3]

    return (<div className="home_notice">
        <div className="home_notice_column">
            <div className="home_notice_icon">🪧</div>
            <div className="home_notice_msg">최근 공지사항</div>
        </div>
        <div className="home_notice_writing">
            <div className="notice_writing_column">
                <div className="writing_icon">📗</div>
                <Link to={`/notice/${content1.id}`}>
                    <div className="writing_list">{content1.createdAt} | {content1.title}</div>
                </Link>
            </div>
            <div className="notice_writing_column">
                <div className="writing_icon">📗</div>
                <Link to={`/notice/${content2.id}`}>
                    <div className="writing_list">{content2.createdAt} | {content2.title}</div>
                </Link>
            </div>
            {/* <div className="writing_icon">📗</div>
            <Link to={`/notice/${content3.id}`}>
                <div className="writing_list">{content3.createdAt} | {content3.title}</div>
            </Link> */}
        </div>
    </div >);
}

export default HomeNotice;