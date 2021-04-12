import React from 'react';
import { connect } from 'react-redux';

const CreationLoading = () => {
    return (<div className="creation-loading">
        <div className="loading_img">
            <div className="loading_dot"></div>
            <div className="loading_dot"></div>
            <div className="loading_dot"></div>
        </div>
        <div className="loading_msg">곧 퀴즈가 생성됩니다 📋</div>
    </div>);
}

export default connect()(CreationLoading);