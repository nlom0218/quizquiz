import React from 'react';
import { LS_getQuizData } from '../../localStorage';

const QuizDownload = () => {
    const quizData = LS_getQuizData()

    const downloadFile = () => {
        const blob = new Blob([JSON.stringify(quizData)], { type: "text/plain" })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = `${quizData.info.quizTitle}.txt`
        a.click()
        a.remove()
        window.URL.revokeObjectURL(url);
    }

    return (<>
        <button className="btn" onClick={downloadFile}>
            퀴즈 다운로드
        </button>

    </>);
}

export default QuizDownload;