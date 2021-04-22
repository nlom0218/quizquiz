import React, { useEffect } from 'react';

const KakaoAdFit = () => {

    useEffect(() => {
        let ins = document.createElement('ins');
        let scr = document.createElement('script');
        ins.className = 'kakao_ad_area';
        ins.style = "display:none; width:100%;";
        scr.async = 'true';
        scr.type = "text/javascript";
        scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
        ins.setAttribute('data-ad-width', '728');
        ins.setAttribute('data-ad-height', '90');
        ins.setAttribute('data-ad-unit', 'DAN-gRFWNY4ml6uUEEWi');
        document.querySelector('.adfit').appendChild(ins);
        document.querySelector('.adfit').appendChild(scr);
    }, [])

    return (<div className="adfit">
        {/* <ins class="kakao_ad_area" style={{ display: "none" }}
            data-ad-unit="DAN-gRFWNY4ml6uUEEWi"
            data-ad-width="728"
            data-ad-height="90"></ins>
        <script type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></script> */}
    </div>);
}

export default KakaoAdFit;