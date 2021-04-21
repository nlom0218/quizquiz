import React, { useState } from 'react';
import CreationContents from './CreationContents';
import CreationQuizInfo from './CreationQuizInfo';

const CrationQuiz = () => {
    const [quizInfo, setQuizInfo] = useState(true)

    const completeQuizInfo = () => {
        setQuizInfo(false)
    }

    return (<>
        { quizInfo ?
            <CreationQuizInfo completeQuizInfo={completeQuizInfo} />
            :
            <CreationContents />}
    </>);
}

export default CrationQuiz;