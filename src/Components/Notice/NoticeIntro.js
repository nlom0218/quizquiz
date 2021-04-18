import React from 'react';
import { connect } from 'react-redux';
import NoticeList from './NoticeList';

const Notice = () => {

    return (<>
        <div className="notice_intro_msg">공지사항</div>
        <NoticeList />
    </>);

}

export default connect()(Notice);