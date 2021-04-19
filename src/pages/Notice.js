import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import NoticeContent from '../Components/Notice/NoticeContent';
import NoticeIntro from '../Components/Notice/NoticeIntro';

const Notice = () => {

    return (<>
        <Header />
        <div className="notice_page main">
            <Switch>
                <Route exact path="/notice"><NoticeIntro /></Route>
                <Route path="/notice/:id"><NoticeContent /></Route>
            </Switch>
        </div>
        <Footer />
    </>);

}

export default connect()(Notice);