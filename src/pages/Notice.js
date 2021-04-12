import React from 'react';
import { connect } from 'react-redux';

const Notice = () => {
    return (<div className="notice_page main">
        This is Notice
    </div>);
}

export default connect()(Notice);