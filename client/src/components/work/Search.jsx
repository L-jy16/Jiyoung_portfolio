import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from "gsap";

import Popup from '../reple/Popup';

const Search = () => {
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

        gsap.set(".work_img", { opacity: 0, y: "-100%", x: "100%" });
        gsap.set(".work__title, .center_text, .circle_wrap, .desc, .work_back_button, .comment_link", { opacity: 0 });

        setTimeout(() => {
            const tl = gsap.timeline();


            tl.to(".work_img", { opacity: 1, y: 0, x: 0, duration: 0.41 })
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

            <div className="work_center right">
                <span className='center_text split'>search <p>site</p></span>
                <div className="work_img_wrap">
                    <div className='work_img search'></div>
                    <div className="circle_wrap">
                        <div className='circle' onClick={() => commentHandle()}>
                            <span>comment</span>
                        </div>
                    </div>
                </div>
                <div className="desc">
                    <span>
                        JAVASCRIPT를 활용하여 검색 게임 사이트를 만들었습니다.
                        메인 페이지는 3D 효과를 이용하여 독창적인 분위기를 연출하였으며, 여러가지 메소드를 사용하여 여러 형태로 검색할 수 있도록 기능을 구현하였습니다.
                    </span>
                    <div className="work_btn">
                        <Link to="/">view</Link>
                        <Link to="/">code</Link>
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

export default Search