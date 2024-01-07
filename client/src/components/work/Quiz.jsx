import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from "gsap";

import Popup from '../reple/Popup';

const Quiz = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [displayPopup, setDisplayPopup] = useState(false);
    // const navgaite = useNavigate();

    // 마우스 커서
    const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // 화면 전환 효과
    useEffect(() => {

        gsap.set(".work_img", { opacity: 0, x: "100%", y: "-100%" });
        gsap.set(".work__title, .center_text, .circle_wrap, .desc, .work_back_button, .comment_link", { opacity: 0 });

        setTimeout(() => {
            const tl = gsap.timeline();


            tl.to(".work_img", { opacity: 1, x: 0, y: 0, duration: 0.41 })
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
            <div className="mouse__cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>
            <div className="work__title">
                <h2>portfolio</h2>
                <span>lee ji young</span>
            </div>
            {/* work__title */}

            <div className="work_center top_r">
                <span className='center_text split'>add-plus <p>site</p></span>
                <div className="work_img_wrap">
                    <div className='work_img quiz'></div>
                    <div className="circle_wrap">
                        <div className='circle' onClick={() => commentHandle()}>
                            <span>comment</span>
                        </div>
                    </div>
                </div>
                <div className="desc">
                    <span>
                        JAVASCRIPT과 JSON을 활용하여 퀴즈 게임 사이트를 구현하였습니다.
                        객관식과 주관식, CBT 유형 등 다양한 문제 유형을 구현 하였으며, 문제를 푸는 시간과, 점수를 알 수 있도록 구현하였습니다.
                    </span>
                    <div className="work_btn">
                        <Link to="/">view</Link>
                        <Link to="https://github.com/L-jy16/ADD-plus">code</Link>
                    </div>
                </div>
            </div>
            {/* work_center */}

            <div className="link_button">
                <Link to='/home' className="work_back_button">
                    <span>Main site</span>
                    <div className="img"></div>
                </Link>

                <button className='comment_link' onClick={() => commentHandle()}>comment</button>
            </div>
            {/* work_back_button */}

            {displayPopup && <Popup closePopup={() => setDisplayPopup(false)} />}
        </div>
    )
}

export default Quiz