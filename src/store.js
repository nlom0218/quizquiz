import { createStore } from "redux"

const initState = {
    mode: "normal",
    quizData: {
        info: {
            quizTitle: null,
            numOfQuiz: 3
        },
        quizId: "",
        quizzes: [],
        answers: []
    }
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "CHANGE_QUIZ_MODE":
            return { ...state, mode: "quiz" }
        case "CHANGE_NORMAL_MODE":
            return { ...state, mode: "normal" }
        case "RESET":
            return { ...initState }
        case "QUIZ_INFO":
            return {
                ...state,
                quizData: {
                    ...state.quizData,
                    quizId: action.quizId,
                    info: {
                        quizTitle: action.quizTitle,
                        numOfQuiz: action.numOfQuiz
                    }
                }
            }
        case "QUIZ_AND_ANSWER":
            return {
                ...state,
                quizData: {
                    ...state.quizData,
                    quizzes: action.quizzesArr,
                    answers: action.answersArr
                }
            }
        default:
            return state
    }
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store