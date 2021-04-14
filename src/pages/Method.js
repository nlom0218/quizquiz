import React, { useState } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
// img
import img0 from "../Images/CreationImg/img0.png"
import img1 from "../Images/CreationImg/img1.png"
import img2 from "../Images/CreationImg/img2.png"
import img3 from "../Images/CreationImg/img3.png"
import img4 from "../Images/CreationImg/img4.png"

const Method = () => {
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

    return (<div className="method_page main">
        <Route exact path="/method">
            <div className="method_intro">
                {/* <div className="intro_msg">누구나 쉽게 퀴즈를 만들 수 있습니다</div> */}
                <div className="intro_img">
                    <img src={img} alt="" />
                </div>
                <Link to="/creation">
                    <button className="intro_btn btn">퀴즈 만들기</button>
                </Link>
            </div>
        </Route>
    </div>);
}

export default Method;