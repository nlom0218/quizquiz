import React, { useState } from 'react';
import { connect } from 'react-redux';
import CreationLoading from './CreationLoading';
import CreationLoadingEnd from './CreationLoadingEnd';
import "../../CSS/CreationCompletion.css"

const CreationCompletion = () => {
    const [loading, setLoading] = useState(true)

    setTimeout(() => setLoading(false), 2000)

    return (<div className="creation_complet">
        {loading ?
            <div><CreationLoading /></div>
            :
            <div><CreationLoadingEnd /></div>}
    </div>);
}

export default connect()(CreationCompletion)