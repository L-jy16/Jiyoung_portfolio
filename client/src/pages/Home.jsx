import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import arrow from '../assets/image/arrow.svg'
import arrow2 from '../assets/image/arrow2.svg'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const animationConfig = {
            opacity: 0,
            scale: 0,
            stagger: {
                amount: 0.2,
                grid: 'auto',
                from: 'end',
            },
            duration: 0.3,
            ease: 'power4.inOut',
        };

        gsap.from('.main_img_wrap', animationConfig);

    }, [])

    const activeHandle = () => {
        navigate("/home")
    }

    return (
        <div id='wrap'>
            <div id="main__title">
                <h2>portfolio</h2>
                <span>lee ji young</span>
            </div>
            {/* main__title */}

            <div id="main_main">
                <div className="up">
                    <div className='main_img_wrap'>
                        <div className="main_img i1">
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Search</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className='main_img_wrap'>
                        <div className="main_img i2">
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Skill</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className='main_img_wrap'>
                        <div className="main_img i3">
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>About Me</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className='main_img_wrap'>
                        <div className="main_img i4">
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Content</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className='main_img_wrap'>
                        <div className="main_img i5">
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Blog</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <span className='center_text'>selected <p>works</p></span>
                </div>
                <div className="down">
                    <div
                        className='main_img_wrap'>
                        <div className="main_img i6">
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Youtube</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className='main_img_wrap'>
                        <div className="main_img i7">
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>GSAP</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className='main_img_wrap'>
                        <div className="main_img i8">
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Myuduck</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className='main_img_wrap'>
                        <div className="main_img i9">
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Mouse</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className='main_img_wrap'>
                        <div className="main_img i10">
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Movie</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className='main_img_wrap'>
                        <div className="main_img i11">
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Slide</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className='main_img_wrap'>
                        <div className="main_img i12">
                            <div className="move">
                                <img src={arrow2} alt="arrow" />
                                <span>Add-Plus</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* main_main */}

            <div id="start_button" onClick={() => activeHandle()}>
                <span className="StartButton">enter</span>
                <img src={arrow} alt="버튼" />
            </div>
            {/* start_button */}

        </div >
    )
}

export default Home
