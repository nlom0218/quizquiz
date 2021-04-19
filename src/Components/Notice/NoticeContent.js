import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { contents } from '../../contents';
import { LeftArrow, List, RightArrow } from '../../icon';

const NoticeContent = () => {
    const { id } = useParams()
    const contentsArr = contents
    let content = contentsArr.filter((item) => item.id === parseInt(id))[0]
    const index = contents.indexOf(content)

    return (<div className="notice_content">
        <div className="content_headNavBtn">
            <Link to="/notice"><div className="headNavBtn_listBtn">{List}</div></Link>
        </div>
        <div className="content_text">
            <div className="text_title">{content.title}</div>
            <div className="text_column">
                <div className="text_author">{content.author}</div>
                <div className="text_createdAt">{content.createdAt}</div>
            </div>
            <div className="text_desc desc1">{content.desc1}</div>
            <div className="text_desc desc2">{content.desc2}</div>
            <div className="text_desc desc3">{content.desc3}</div>
            <div className="text_list list1">{content.list1.map((item, index) => {
                return <div className="list_item" key={index}>📝 {item}</div>
            })}</div>
            <div className="text_desc desc4">{content.desc4}</div>
            <div className="text_desc desc4">{content.desc5}</div>
            <div className="text_list list2">{content.list2}</div>
        </div>
        <div className="content_footNavBtn">
            {index !== contentsArr.length - 1 &&
                <Link to={`/notice/${contentsArr[index + 1].id}`}><div className="footNavBt_beforeBtn">{LeftArrow}</div></Link>
            }
            {index !== 0 &&
                <Link to={`/notice/${contentsArr[index - 1].id}`}><div className="footNavBt_nextBtn">{RightArrow}</div></Link>
            }
        </div>
    </div >);
}

export default NoticeContent;