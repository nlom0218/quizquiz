import React from 'react';
import { Link } from 'react-router-dom';
import { contents } from '../../contents';

const NoticeList = () => {
    const contentsArr = [...contents].reverse()

    return (<>
        <ul className="notice_list">
            {contentsArr.map((item) => {
                return (<li className="list_content" key={item.id}>
                    <div className="list_icon">📗</div>
                    <Link to={`/notice/${item.id}`}>
                        <div className="list_title">{item.createdAt} | {item.title}</div>
                    </Link>
                </li>
                )
            })}
        </ul>
    </>);
}

export default NoticeList;