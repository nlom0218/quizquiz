export const LS_setQuizData = (quizData) => {
    localStorage.setItem("quizData", JSON.stringify(quizData))
}
export const LS_getQuizData = () => JSON.parse(localStorage.getItem("quizData"))

//삭제할것들
export const LS_setQuiz = (quizzesArr, answersArr) => {
    localStorage.setItem("quizzes", JSON.stringify(quizzesArr))
    localStorage.setItem("answers", JSON.stringify(answersArr))
}
export const LS_setQuizInfo = (quizTitle, quizId, numOfQuiz, storage) => {
    localStorage.setItem("quizInfo", JSON.stringify({ quizTitle, quizId, numOfQuiz, storage }))
}
export const LS_getQuizInfo = () => JSON.parse(localStorage.getItem("quizInfo"))
export const LS_getQuizzesArr = () => JSON.parse(localStorage.getItem("quizzes"))
export const LS_getAnswersArr = () => JSON.parse(localStorage.getItem("answers"))
// 일단 여기까지


// Save Quiz in QuizStorage with Local Storage
export const LS_setQuizData1 = (quizData) => { localStorage.setItem("quizData1", JSON.stringify(quizData)) }
export const LS_setQuizData2 = (quizData) => { localStorage.setItem("quizData2", JSON.stringify(quizData)) }
export const LS_setQuizData3 = (quizData) => { localStorage.setItem("quizData3", JSON.stringify(quizData)) }
export const LS_setQuizData4 = (quizData) => { localStorage.setItem("quizData4", JSON.stringify(quizData)) }
export const LS_setQuizData5 = (quizData) => { localStorage.setItem("quizData5", JSON.stringify(quizData)) }
export const LS_setQuizData6 = (quizData) => { localStorage.setItem("quizData6", JSON.stringify(quizData)) }
export const LS_setQuizData7 = (quizData) => { localStorage.setItem("quizData7", JSON.stringify(quizData)) }
export const LS_setQuizData8 = (quizData) => { localStorage.setItem("quizData8", JSON.stringify(quizData)) }
export const LS_setQuizData9 = (quizData) => { localStorage.setItem("quizData9", JSON.stringify(quizData)) }
export const LS_setQuizData10 = (quizData) => { localStorage.setItem("quizData10", JSON.stringify(quizData)) }

export const LS_saveQuizData = (name) => {
    const quizData = LS_getQuizData()
    if (name === "QS1Btn") {
        LS_setQuizData1({ ...quizData, info: { ...quizData.info, storage: 1 } })
    } else if (name === "QS2Btn") {
        LS_setQuizData2({ ...quizData, info: { ...quizData.info, storage: 2 } })
    } else if (name === "QS3Btn") {
        LS_setQuizData3({ ...quizData, info: { ...quizData.info, storage: 3 } })
    } else if (name === "QS4Btn") {
        LS_setQuizData4({ ...quizData, info: { ...quizData.info, storage: 4 } })
    } else if (name === "QS5Btn") {
        LS_setQuizData5({ ...quizData, info: { ...quizData.info, storage: 5 } })
    } else if (name === "QS6Btn") {
        LS_setQuizData6({ ...quizData, info: { ...quizData.info, storage: 6 } })
    } else if (name === "QS7Btn") {
        LS_setQuizData7({ ...quizData, info: { ...quizData.info, storage: 7 } })
    } else if (name === "QS8Btn") {
        LS_setQuizData8({ ...quizData, info: { ...quizData.info, storage: 8 } })
    } else if (name === "QS9Btn") {
        LS_setQuizData9({ ...quizData, info: { ...quizData.info, storage: 9 } })
    } else if (name === "QS10Btn") {
        LS_setQuizData10({ ...quizData, info: { ...quizData.info, storage: 10 } })
    }
    else {
        return
    }
}

// localstorage에서 저장소1~10의 데이터를 객체 형식으로 가져오기
// 모든 퀴즈의 상태를 불러오기 위해 아래의 export과정은 꼭 필요하다
let LS_quizData1 = null
let LS_quizData2 = null
let LS_quizData3 = null
let LS_quizData4 = null
let LS_quizData5 = null
let LS_quizData6 = null
let LS_quizData7 = null
let LS_quizData8 = null
let LS_quizData9 = null
let LS_quizData10 = null
export const setLS_quizData = () => {
    LS_quizData1 = JSON.parse(localStorage.getItem("quizData1")) ? JSON.parse(localStorage.getItem("quizData1")) : null
    LS_quizData2 = JSON.parse(localStorage.getItem("quizData2")) ? JSON.parse(localStorage.getItem("quizData2")) : null
    LS_quizData3 = JSON.parse(localStorage.getItem("quizData3")) ? JSON.parse(localStorage.getItem("quizData3")) : null
    LS_quizData4 = JSON.parse(localStorage.getItem("quizData4")) ? JSON.parse(localStorage.getItem("quizData4")) : null
    LS_quizData5 = JSON.parse(localStorage.getItem("quizData5")) ? JSON.parse(localStorage.getItem("quizData5")) : null
    LS_quizData6 = JSON.parse(localStorage.getItem("quizData6")) ? JSON.parse(localStorage.getItem("quizData6")) : null
    LS_quizData7 = JSON.parse(localStorage.getItem("quizData7")) ? JSON.parse(localStorage.getItem("quizData7")) : null
    LS_quizData8 = JSON.parse(localStorage.getItem("quizData8")) ? JSON.parse(localStorage.getItem("quizData8")) : null
    LS_quizData9 = JSON.parse(localStorage.getItem("quizData9")) ? JSON.parse(localStorage.getItem("quizData9")) : null
    LS_quizData10 = JSON.parse(localStorage.getItem("quizData10")) ? JSON.parse(localStorage.getItem("quizData10")) : null
}
export const LS_quizArr = () => {
    return (
        [
            LS_quizData1 ? LS_quizData1 : null,
            LS_quizData2 ? LS_quizData2 : null,
            LS_quizData3 ? LS_quizData3 : null,
            LS_quizData4 ? LS_quizData4 : null,
            LS_quizData5 ? LS_quizData5 : null,
            LS_quizData6 ? LS_quizData6 : null,
            LS_quizData7 ? LS_quizData7 : null,
            LS_quizData8 ? LS_quizData8 : null,
            LS_quizData9 ? LS_quizData9 : null,
            LS_quizData10 ? LS_quizData10 : null
        ]
    )
}

// LS quizData 초기화
export const LS_quizRemove = () => {
    localStorage.removeItem("quizData1")
    localStorage.removeItem("quizData2")
    localStorage.removeItem("quizData3")
    localStorage.removeItem("quizData4")
    localStorage.removeItem("quizData5")
    localStorage.removeItem("quizData6")
    localStorage.removeItem("quizData7")
    localStorage.removeItem("quizData8")
    localStorage.removeItem("quizData9")
    localStorage.removeItem("quizData10")
}

// quizdata del in quizStorage 
export const del_LS_quizData = (num) => {
    if (num === 1) {
        localStorage.removeItem("quizData1")
    } else if (num === 2) {
        localStorage.removeItem("quizData2")
    } else if (num === 3) {
        localStorage.removeItem("quizData3")
    } else if (num === 4) {
        localStorage.removeItem("quizData4")
    } else if (num === 5) {
        localStorage.removeItem("quizData5")
    } else if (num === 6) {
        localStorage.removeItem("quizData6")
    } else if (num === 7) {
        localStorage.removeItem("quizData7")
    } else if (num === 8) {
        localStorage.removeItem("quizData8")
    } else if (num === 9) {
        localStorage.removeItem("quizData9")
    } else if (num === 10) {
        localStorage.removeItem("quizData10")
    }
}

// seleted one QuizDate
export const seleted_LS_quizData = (num) => {
    let quizData = null
    if (num === 1) {
        quizData = JSON.parse(localStorage.getItem("quizData1"))
    } else if (num === 2) {
        quizData = JSON.parse(localStorage.getItem("quizData2"))
    } else if (num === 3) {
        quizData = JSON.parse(localStorage.getItem("quizData3"))
    } else if (num === 4) {
        quizData = JSON.parse(localStorage.getItem("quizData4"))
    } else if (num === 5) {
        quizData = JSON.parse(localStorage.getItem("quizData5"))
    } else if (num === 6) {
        quizData = JSON.parse(localStorage.getItem("quizData6"))
    } else if (num === 7) {
        quizData = JSON.parse(localStorage.getItem("quizData7"))
    } else if (num === 8) {
        quizData = JSON.parse(localStorage.getItem("quizData8"))
    } else if (num === 9) {
        quizData = JSON.parse(localStorage.getItem("quizData9"))
    } else if (num === 10) {
        quizData = JSON.parse(localStorage.getItem("quizData10"))
    }
    return quizData
}

function init() {
    setLS_quizData()
}
init()