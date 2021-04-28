import React, { useState } from 'react';
import { LS_setQuizData } from '../../localStorage';
import { AdFitInUploadQuiz } from "../KakaoAdFit"
import Footer from '../Footer';
import Header from '../Header';
import { Redirect } from 'react-router';
import { WarningIcon } from '../../icon';

const UploadQuiz = () => {
    const [upload, setUpload] = useState(false)

    const onSubmitFile = (e) => {
        e.preventDefault()
        if (window.confirm("퀴즈를 업로드 하시겠습니까?")) {
            setUpload(true)
        } else {
            return
        }
    }

    const onChangeFile = (e) => {
        const fileList = e.target.files
        const file = fileList[0]
        const reader = new FileReader()
        reader.onload = (e) => {
            const { target: { result: quizData } } = e
            LS_setQuizData(JSON.parse(quizData))
        }
        reader.readAsText(file)
    }

    return (<>
        <Header />
        <div className="upload_page main">
            <div className="upload_intro">
                <div className="upload_introMsg">퀴즈를 업로드 할 수 있습니다</div>
            </div>
            <div className="upload_warning">
                <div className="warning_icon">{WarningIcon}</div>
                <div className="warning_msg">Quiz Hi에서 다운로드 한 파일을 업로드 부탁드립니다</div>
            </div>
            <form onSubmit={onSubmitFile} className="upload_form">
                <input
                    type="file"
                    accept=".txt"
                    required onChange={onChangeFile}
                    id="file"
                    className="upload_file"
                />
                <input type="submit" value="퀴즈 업로드" />
            </form>
        </div>
        <AdFitInUploadQuiz />
        <Footer />
        {upload && < Redirect push to="/creation/loading" />}
    </>);
}

export default UploadQuiz;