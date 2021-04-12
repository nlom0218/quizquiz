import { createStore } from "redux"

const initState = {
    mode: "normal"
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "CHANGE_QUIZ_MODE":
            return { ...state, mode: "quiz" }
        case "CHANGE_NORMAL_MODE":
            return { ...state, mode: "normal" }
        default:
            return state
    }
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store