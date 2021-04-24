import React, { useEffect } from 'react';

export const AdFitInCreationInfo = () => {

    useEffect(() => {
        let ins = document.createElement('ins');
        let scr = document.createElement('script');
        ins.className = 'kakao_ad_area';
        ins.style = "display:none;";
        scr.async = 'true';
        scr.type = "text/javascript";
        scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
        ins.setAttribute('data-ad-width', '728');
        ins.setAttribute('data-ad-height', '90');
        ins.setAttribute('data-ad-unit', 'DAN-el03DgEJ1U2pkdJe');
        document.querySelector('.adfit').appendChild(ins);
        document.querySelector('.adfit').appendChild(scr);
    }, [])

    return (<div className="adfit">

    </div>);
}

export const AdFitInCreationContents = () => {

    useEffect(() => {
        let ins = document.createElement('ins');
        let scr = document.createElement('script');
        ins.className = 'kakao_ad_area';
        ins.style = "display:none;";
        scr.async = 'true';
        scr.type = "text/javascript";
        scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
        ins.setAttribute('data-ad-width', '728');
        ins.setAttribute('data-ad-height', '90');
        ins.setAttribute('data-ad-unit', 'DAN-LHvGpR0kRj3RRDAf');
        document.querySelector('.adfit').appendChild(ins);
        document.querySelector('.adfit').appendChild(scr);
    }, [])

    return (<div className="adfit">

    </div>);
}

export const AdFitInCreationLoding = () => {

    useEffect(() => {
        let ins = document.createElement('ins');
        let scr = document.createElement('script');
        ins.className = 'kakao_ad_area';
        ins.style = "display:none;";
        scr.async = 'true';
        scr.type = "text/javascript";
        scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
        ins.setAttribute('data-ad-width', '728');
        ins.setAttribute('data-ad-height', '90');
        ins.setAttribute('data-ad-unit', 'DAN-gv18HPBRfn9LMFbx');
        document.querySelector('.adfit').appendChild(ins);
        document.querySelector('.adfit').appendChild(scr);
    }, [])

    return (<div className="adfit">

    </div>);
}

export const AdFitInEditQuiz = () => {

    useEffect(() => {
        let ins = document.createElement('ins');
        let scr = document.createElement('script');
        ins.className = 'kakao_ad_area';
        ins.style = "display:none;";
        scr.async = 'true';
        scr.type = "text/javascript";
        scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
        ins.setAttribute('data-ad-width', '728');
        ins.setAttribute('data-ad-height', '90');
        ins.setAttribute('data-ad-unit', 'DAN-A2BNaux4ztkVs7BK');
        document.querySelector('.adfit').appendChild(ins);
        document.querySelector('.adfit').appendChild(scr);
    }, [])

    return (<div className="adfit">

    </div>);
}