export const setQuiz = (quizzesArr, answersArr) => {
    localStorage.setItem("quizzes", JSON.stringify(quizzesArr))
    localStorage.setItem("answers", JSON.stringify(quizzesArr))
}

export const setQuizInfo = (quizTitle) => {
    localStorage.setItem("quizTitle", JSON.stringify(quizTitle))
}

// 퀴즈가 시작되면 새로고침을 해도 데이터가 날라가지 않고 
// localStroage에 저장되어 새롭게 로딩되어 그대로 보이기,,,
// if (storeQuizTitle) {
//     localStorage.setItem("quizzes", JSON.stringify(storeQuizzes))
//     localStorage.setItem("answers", JSON.stringify(storeAnswers))
//     localStorage.setItem("quizTitle", JSON.stringify(storeQuizTitle))
//     localStorage.setItem("mode", JSON.stringify("quiz"));
// }