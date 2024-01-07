import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from "gsap";

import Popup from '../reple/Popup';

const AboutMe = () => {
    const [displayPopup, setDisplayPopup] = useState(false);

    // 화면 전환 효과
    useEffect(() => {

        gsap.set(".work_img", { opacity: 0, y: "-100%" });
        gsap.set(".work__title, .center_text, .circle_wrap, .desc, .work_back_button, .comment_link", { opacity: 0 });

        setTimeout(() => {
            const tl = gsap.timeline();


            tl.to(".work_img", { opacity: 1, y: 0, duration: 0.41 })
            tl.to(".work__title", { opacity: 1, duration: 0.41 })
            tl.to(".center_text", { opacity: 1, duration: 0.41 })
            tl.to(".desc", { opacity: 1, duration: 0.41 })
            tl.to(".circle_wrap", { opacity: 1, duration: 0.41 })
            tl.to(".work_back_button", { opacity: 1, duration: 0.41 })
            tl.to(".comment_link", { opacity: 1, duration: 0.41 })
        })
    }, [])

    const commentHandle = () => {
        // navgaite("/comment");
        setDisplayPopup(true)
    }

    return (
        <div className='work_Detail'>
            {/* <div className="mouse__cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}></div> */}
            <div className="work__title">
                <h2>portfolio</h2>
                <span>lee ji young</span>
            </div>
            {/* work__title */}

            <div className="work_center top_l">
                <span className='center_text split'>about <p>me</p></span>
                <div className="work_img_wrap">
                    <div className='work_img aboutme'></div>
                    <div className="circle_wrap">
                        <div className='circle' onClick={() => commentHandle()}>
                            <span>comment</span>
                        </div>
                    </div>
                </div>
                <div className="desc">
                    <span>
                        안녕하세요. 끊임없는 노력과 최선을 다하는 개발자 이지영입니다.
                        제 좌우명은 "어떤 일을 하더라도 노력하고 최선을 다하며 후회를 남기지 말자"입니다.
                        개발자의 길에서도 항상 긍정적인 마음가짐으로 일에 임하며, 어떤 도전이라도 기회로 삼아 끊임없이 발전해나가겠습니다.
                    </span>
                </div>
            </div>
            {/* work_center */}

            <div className="link_button">
                <Link to='/home' className="work_back_button">
                    <span>Main site</span>
                    <div className="img"></div>
                </Link>

                <button className='comment_link'>comment</button>
            </div>
            {/* work_back_button */}

            {displayPopup && <Popup closePopup={() => setDisplayPopup(false)} />}

        </div>
    )
}

export default AboutMe