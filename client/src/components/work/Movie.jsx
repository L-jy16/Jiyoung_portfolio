import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from "gsap";

import Popup from '../reple/Popup';

const Movie = () => {
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

        gsap.set(".work_img", { opacity: 0, y: "100%" });
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
            <div className="mouse__cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>
            <div className="work__title">
                <h2>portfolio</h2>
                <span>lee ji young</span>
            </div>
            {/* work__title */}

            <div className="work_center bottom">
                <span className='center_text split'>movie <p>site</p></span>
                <div className="work_img_wrap">
                    <div className='work_img movie'></div>
                    <div className="circle_wrap">
                        <div className='circle' onClick={() => commentHandle()}>
                            <span>comment</span>
                        </div>
                    </div>
                </div>
                <div className="desc">
                    <span>
                        VUE.JS와 TMDB API를 활용하여 구현한 영화 사이트 입니다.
                        최신 영화와 개봉 예정인 영화, 인기 영화, 최고 평점 영화 정보를 제공하고 있으며, 검색 기능을 통해 원하는 영화를 찾을 수 있게 구현하였습니다.
                    </span>
                    <div className="work_btn">
                        <Link to="https://lee-movie.netlify.app/">view</Link>
                        <Link to="https://github.com/L-jy16/movie_vue">code</Link>
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
export default Movie