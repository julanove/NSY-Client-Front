import React from 'react';
import { Fragment } from 'react';
import fb from './../../images/nav_facebook.png';
import insta from './../../images/nav_insta.png';
import youtube from './../../images/nav_youtube.png';
import $ from 'jquery';
window.$ = $;


class Nav extends React.Component {

    async componentDidMount(){
        var	nav = $('nav[role="navigation"]');
        nav.find('a').on('click', function () {
                var $el = $(this);
            var	id = $el.attr('href');
            $('html, body').animate({
                scrollTop: $(id).offset().top - 75
            }, 500);
            return false;
        });
        // Mobile
        $('.nav-toggle').on('click', function() {
            $(this).toggleClass('close-nav');
            nav.toggleClass('open');
            return false;
        });	
        nav.find('a').on('click', function() {
            $('.nav-toggle').toggleClass('close-nav');
            nav.toggleClass('open');
        });
    }

    render() {
        return (
            <Fragment>
                <section className="banner" role="banner " id="banner">
                    <header id="header">
                    <div className="header-content clearfix">
                        <a href="index.php">
                             <span className="logo nsy-logo"> 
                            </span> 
                        </a>

                         <nav className="navigation" role="navigation">
                            
                            <div className="sakura-frame">
                                <div className="frame-bottom"/>
                                <div className="frame-top"/>
                                <div className="nav-content"> 
                                    <ul>
                                        <li><a href="/">Trang chủ</a></li>
                                        <li><a href="about-us">Giới thiệu</a></li>
                                        <li><a href="news">Tin tức</a></li>
                                        <li><a href="schedule">Lịch diễn</a></li>
                                        <li><a href="gallery">Thư viện</a></li>
                                        <li><a href="ask">Liên hệ</a></li>
                                    </ul>
                                </div>
                                
                            </div>
                        </nav>
                        {/* <div className="text-center page-title">
                            <h3 className="txt-upper">NÚI TRÚC SAKURA YOSAKOI</h3>
                        </div> */}

                        <a href="#" className="nav-toggle">Menu<span></span></a>
                        <div className="nav-facebook">
                            <a id="fb_icon" href="https://www.facebook.com/nuitrucsakura/" target="_blank" rel="noreferrer">
                                <img src={fb} alt="Facebook"/>
                                <span></span>
                            </a>
                            <a id="insta_icon" href="https://www.instagram.com/nuitrucsakurayosakoi/" target="_blank" rel="noreferrer">
                                <img src={insta} alt="Instagram"/>
                                <span></span>
                            </a>
                            <a id="youtube_icon" href="https://www.youtube.com/user/nsydancingteam/videos" target="_blank" rel="noreferrer">
                                <img src={youtube} alt="Youtube"/>
                                <span></span>
                            </a>
                        </div>  
                    </div>
                    </header>
                </section>
            </Fragment>
        )
    }
}

export default Nav;