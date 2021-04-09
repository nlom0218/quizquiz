import { Route, Switch } from 'react-router';
import './CSS/App.css';

// Components
import Header from './Components/Header';
import Footer from "./Components/Footer"

// Pages
import Creation from './pages/Creation';
import Home from './pages/Home';
import Method from './pages/Method';
import QuizStorage from './pages/QuizStorage';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/method"><Method /></Route>
        <Route path="/creation"><Creation /></Route>
        <Route path="/storage"><QuizStorage /></Route>
        <Route path="/">요청하신 페이지를 찾을 수 없습니다.</Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
