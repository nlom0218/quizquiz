import React, { useState } from 'react';
import { connect } from 'react-redux';
import CreationLoading from './CreationLoading';
import CreationLoadingEnd from './CreationLoadingEnd';

const CreationCompletion = () => {
    const [loading, setLoading] = useState(true)

    setTimeout(() => setLoading(false), 2000)

    return (<div className="creation_complete">
        {loading ?
            <CreationLoading />
            :
            <CreationLoadingEnd />}
    </div>);
}

export default connect()(CreationCompletion)