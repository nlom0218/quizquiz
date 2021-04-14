export const LS_setQuiz = (quizzesArr, answersArr) => {
    localStorage.setItem("quizzes", JSON.stringify(quizzesArr))
    localStorage.setItem("answers", JSON.stringify(answersArr))
}
export const LS_setQuizInfo = (quizTitle, quizId, numOfQuiz) => {
    localStorage.setItem("quizInfo", JSON.stringify({ quizTitle, quizId, numOfQuiz }))
}

export const LS_getQuizInfo = () => JSON.parse(localStorage.getItem("quizInfo"))
export const LS_getQuizzesArr = () => JSON.parse(localStorage.getItem("quizzes"))
export const LS_getAnswersArr = () => JSON.parse(localStorage.getItem("answers"))


// Save Quiz in QuizStorage with Local Storage
export const LS_setQuizData1 = (quizData) => { localStorage.setItem("QuizData1", JSON.stringify(quizData)) }
export const LS_setQuizData2 = (quizData) => { localStorage.setItem("QuizData2", JSON.stringify(quizData)) }
export const LS_setQuizData3 = (quizData) => { localStorage.setItem("QuizData3", JSON.stringify(quizData)) }
export const LS_setQuizData4 = (quizData) => { localStorage.setItem("QuizData4", JSON.stringify(quizData)) }
export const LS_setQuizData5 = (quizData) => { localStorage.setItem("QuizData5", JSON.stringify(quizData)) }
export const LS_setQuizData6 = (quizData) => { localStorage.setItem("QuizData6", JSON.stringify(quizData)) }
export const LS_setQuizData7 = (quizData) => { localStorage.setItem("QuizData7", JSON.stringify(quizData)) }
export const LS_setQuizData8 = (quizData) => { localStorage.setItem("QuizData8", JSON.stringify(quizData)) }
export const LS_setQuizData9 = (quizData) => { localStorage.setItem("QuizData9", JSON.stringify(quizData)) }
export const LS_setQuizData10 = (quizData) => { localStorage.setItem("QuizData10", JSON.stringify(quizData)) }

let LS_getQuizData1 = null
let LS_getQuizData2 = null
let LS_getQuizData3 = null
let LS_getQuizData4 = null
let LS_getQuizData5 = null
let LS_getQuizData6 = null
let LS_getQuizData7 = null
let LS_getQuizData8 = null
let LS_getQuizData9 = null
let LS_getQuizData10 = null

export const setLS_quizDate = () => {
    LS_getQuizData1 = JSON.parse(localStorage.getItem("QuizData1")) ? JSON.parse(localStorage.getItem("QuizData1")) : null
    LS_getQuizData2 = JSON.parse(localStorage.getItem("QuizData2")) ? JSON.parse(localStorage.getItem("QuizData2")) : null
    LS_getQuizData3 = JSON.parse(localStorage.getItem("QuizData3")) ? JSON.parse(localStorage.getItem("QuizData3")) : null
    LS_getQuizData4 = JSON.parse(localStorage.getItem("QuizData4")) ? JSON.parse(localStorage.getItem("QuizData4")) : null
    LS_getQuizData5 = JSON.parse(localStorage.getItem("QuizData5")) ? JSON.parse(localStorage.getItem("QuizData5")) : null
    LS_getQuizData6 = JSON.parse(localStorage.getItem("QuizData6")) ? JSON.parse(localStorage.getItem("QuizData6")) : null
    LS_getQuizData7 = JSON.parse(localStorage.getItem("QuizData7")) ? JSON.parse(localStorage.getItem("QuizData7")) : null
    LS_getQuizData8 = JSON.parse(localStorage.getItem("QuizData8")) ? JSON.parse(localStorage.getItem("QuizData8")) : null
    LS_getQuizData9 = JSON.parse(localStorage.getItem("QuizData9")) ? JSON.parse(localStorage.getItem("QuizData9")) : null
    LS_getQuizData10 = JSON.parse(localStorage.getItem("QuizData10")) ? JSON.parse(localStorage.getItem("QuizData10")) : null
}

export const LS_quizArr = () => {
    return (
        [
            LS_getQuizData1 ? LS_getQuizData1 : null,
            LS_getQuizData2 ? LS_getQuizData2 : null,
            LS_getQuizData3 ? LS_getQuizData3 : null,
            LS_getQuizData4 ? LS_getQuizData4 : null,
            LS_getQuizData5 ? LS_getQuizData5 : null,
            LS_getQuizData6 ? LS_getQuizData6 : null,
            LS_getQuizData7 ? LS_getQuizData7 : null,
            LS_getQuizData8 ? LS_getQuizData8 : null,
            LS_getQuizData9 ? LS_getQuizData9 : null,
            LS_getQuizData10 ? LS_getQuizData10 : null
        ]
    )
}

// LS quizData 초기화
export const LS_quizRemove = () => {
    localStorage.removeItem("QuizData1")
    localStorage.removeItem("QuizData2")
    localStorage.removeItem("QuizData3")
    localStorage.removeItem("QuizData4")
    localStorage.removeItem("QuizData5")
    localStorage.removeItem("QuizData6")
    localStorage.removeItem("QuizData7")
    localStorage.removeItem("QuizData8")
    localStorage.removeItem("QuizData9")
    localStorage.removeItem("QuizData10")
}

// quizdata del in quizStorage 
export const del_LS_quizData = (num) => {
    if (num === 1) {
        localStorage.removeItem("QuizData1")
    } else if (num === 2) {
        localStorage.removeItem("QuizData2")
    } else if (num === 3) {
        localStorage.removeItem("QuizData3")
    } else if (num === 4) {
        localStorage.removeItem("QuizData4")
    } else if (num === 5) {
        localStorage.removeItem("QuizData5")
    } else if (num === 6) {
        localStorage.removeItem("QuizData6")
    } else if (num === 7) {
        localStorage.removeItem("QuizData7")
    } else if (num === 8) {
        localStorage.removeItem("QuizData8")
    } else if (num === 9) {
        localStorage.removeItem("QuizData9")
    } else if (num === 10) {
        localStorage.removeItem("QuizData10")
    }
}


function init() {
    setLS_quizDate()
}

init()