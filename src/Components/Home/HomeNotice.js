import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { contents } from '../../contents';

const HomeNotice = () => {
    const content = contents.[contents.length - 1]

    return (<div className="home_notice">
        <div className="home_notice_column">
            <div className="home_notice_icon">🪧</div>
            <div className="home_notice_msg">최근 공지사항</div>
        </div>
        <div className="home_notice_writing">
            <div className="writing_icon">📗</div>
            <Link to={`/notice/${content.id}`}>
                <div className="writing_list">{content.createdAt} | {content.title}</div>
            </Link>
        </div>
    </div >);
}

export default HomeNotice;