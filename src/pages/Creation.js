import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import CreationQuizInfo from '../Components/Creation/CreationQuizInfo';
import CreationCompletion from '../Components/Creation/CreationCompletion';

// img
import img0 from "../Images/CreationImg/img0.png"
import img1 from "../Images/CreationImg/img1.png"
import img2 from "../Images/CreationImg/img2.png"
import img3 from "../Images/CreationImg/img3.png"
import img4 from "../Images/CreationImg/img4.png"
import CreationQuizSave from '../Components/Creation/CreationQuizSave';

const Creation = () => {
    const [img, setImg] = useState(img0)
    const [num, setNum] = useState(0)

    const imgArr = [img0, img1, img2, img3, img4]

    // setTimeout(() => {
    //     if (num === 4) {
    //         setNum(0)
    //     } else {
    //         setNum(num + 1)
    //     }
    //     setImg(imgArr[num])
    // }, 3000)

    return (<div className="creation_page main">
        <Switch>
            <Route exact path="/creation">
                <div className="creation_intro">
                    {/* <div className="intro_msg">누구나 쉽게 퀴즈를 만들 수 있습니다</div> */}
                    <div className="intro_img">
                        <img src={img} alt="" />
                    </div>
                    <Link to="/creation/info">
                        <button className="intro_btn btn">퀴즈 만들기</button>
                    </Link>
                </div>
            </Route>
            <Route path="/creation/info"><CreationQuizInfo /></Route>
            <Route path="/creation/completion"><CreationCompletion /></Route>
            <Route path="/creation/quizsave"><CreationQuizSave /></Route>
        </Switch>
    </div >);
}

export default connect()(Creation);