import { LS_getAnswersArr, LS_getQuizInfo, LS_getQuizzesArr } from "../../localStorage"

const { quizTitle, numOfQuiz, storage } = LS_getQuizInfo()
const quizzes = LS_getQuizzesArr()
const answers = LS_getAnswersArr()

const [quiz1, setQuiz1] = useState(quizzes[0])
const [quiz2, setQuiz2] = useState(quizzes[1])
const [quiz3, setQuiz3] = useState(quizzes[2])
const [quiz4, setQuiz4] = useState(quizzes[3])
const [quiz5, setQuiz5] = useState(quizzes[4])
const [quiz6, setQuiz6] = useState(quizzes[5])
const [quiz7, setQuiz7] = useState(quizzes[6])
const [quiz8, setQuiz8] = useState(quizzes[7])
const [quiz9, setQuiz9] = useState(quizzes[8])
const [quiz10, setQuiz10] = useState(quizzes[9])