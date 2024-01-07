import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from "gsap";

import Popup from '../reple/Popup';

const Skill = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [displayPopup, setDisplayPopup] = useState(false);

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

        gsap.set(".work_img", { opacity: 0, y: "100%" });
        gsap.set(".work__title, .center_text, .circle_wrap, .desc, .work_back_button, .comment_link, .s1, .s2, .s3, .s4, .s5, .s6, .s7, .s8, .s9, .s10, .s11", { opacity: 0 });

        setTimeout(() => {
            const tl = gsap.timeline();


            tl.to(".work_img", { opacity: 1, y: 0, duration: 0.41 })
            tl.to(".work__title", { opacity: 1, duration: 0.41 })
            tl.to(".center_text", { opacity: 1, duration: 0.41 })
            tl.to(".skill", { opacity: 1, duration: 0.41 })
            tl.to(".circle_wrap", { opacity: 1, duration: 0.41 })
            tl.to(".work_back_button", { opacity: 1, duration: 0.41 })
            tl.to(".comment_link", { opacity: 1, duration: 0.41 })
            tl.to(".s1", { opacity: 1, duration: 0.41 })
            tl.to(".s2", { opacity: 1, duration: 0.41 })
            tl.to(".s3", { opacity: 1, duration: 0.41 })
            tl.to(".s4", { opacity: 1, duration: 0.41 })
            tl.to(".s5", { opacity: 1, duration: 0.41 })
            tl.to(".s6", { opacity: 1, duration: 0.41 })
            tl.to(".s7", { opacity: 1, duration: 0.41 })
            tl.to(".s8", { opacity: 1, duration: 0.41 })
            tl.to(".s9", { opacity: 1, duration: 0.41 })
            tl.to(".s10", { opacity: 1, duration: 0.41 })
            tl.to(".s11", { opacity: 1, duration: 0.41 })
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

            <div className="work_center skill">
                <span className='center_text split'>skill <p>Set</p></span>
                <div className="work_img_wrap">
                    <div className='work_img'></div>
                    <div className="skill">
                        <ul>
                            <li className='s1'><span>html</span></li>
                            <li className='s2'><span>css</span></li>
                            <li className='s3'><span>scss</span></li>
                            <li className='s4'><span>javascript</span></li>
                            <li className='s5'><span>jquery</span></li>
                            <li className='s6'><span>php</span></li>
                            <li className='s7'><span>react</span></li>
                            <li className='s8'><span>node.js</span></li>
                            <li className='s9'><span>vue.js</span></li>
                            <li className='s10'><span>vite.js</span></li>
                            <li className='s11'><span>MongoDB</span></li>
                            <li><span></span></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* work_center */}

            <div className="link_button">
                <Link to='/home' className="work_back_button">
                    <span>Main site</span>
                    <div className="img"></div>
                </Link>

                <button className='comment_link_skill' onClick={() => commentHandle()}>comment</button>
            </div>
            {/* work_back_button */}

            {displayPopup && <Popup closePopup={() => setDisplayPopup(false)} />}
        </div>
    )
}
export default Skill