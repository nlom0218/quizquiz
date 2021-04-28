import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import UploadQuiz from '../Components/Upload/UploadQuiz';
import useTitle from '../Hooks/useTitle';


const Upload = () => {
    const titleUpdataer = useTitle("Quiz Hi | Upload")

    return (<>
        <Switch>
            <Route path="/upload"><UploadQuiz /></Route>
        </Switch>
    </>);
}



export default connect()(Upload);