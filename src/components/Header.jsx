import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



// images
import logo from './images/logosvg.svg';
import f_logo from './images/facebook.svg';
import t_logo from './images/twitter.svg';
import y_logo from './images/youtube.svg';
import i_logo from './images/instagram.svg';
import tel from './images/telicon.png';
import search from './images/search.svg';
import shuffle from './images/shuffle.svg';
import shape from './images/favourite.svg';
import bag from './images/bag.svg';

function Header() {
    const { t, i18n } = useTranslation();

    let localArr = JSON.parse(localStorage.getItem("react-use-cart"))


    function TranslationFunc(e) {
        i18n.changeLanguage(e.target.value)
    }
    return (
        <>
            <header className='head'>
                <div className="head_container">
                    <nav className="head_container_nav">
                        <ul className="head_container_nav-link">
                            <li>
                                <a href="http://www.facebook.com" target="blank"><img src={f_logo} alt="facebook_logo" /></a>
                            </li>
                            <li>
                                <a href="http://twitter.com"><img src={t_logo} alt="twitter_logo" /></a>
                            </li>
                            <li>
                                <a href="http://www.youtube.com"><img src={y_logo} alt="youtube_logo" /></a>
                            </li>
                            <li>
                                <a href="http://www.instagram.com"><img src={i_logo} alt="instagram_logo" /></a>
                            </li>
                        </ul>
                        <a className='tel_link' href="tel:+998938765047"> <img src={tel} alt="tel" /> (+998)938765047</a>
                    </nav>
                    <ul className="head_container_link">
                        <li>
                            {t('setting')}
                        </li>
                        <li>
                            USD $
                        </li>
                        <li>
                            <select className='translationSelect' onChange={TranslationFunc}>
                                <option value="en">English</option>
                                <option value="uz">Uzbek</option>
                            </select>
                        </li>
                        <li>
                            <Link className='head_link' to={'/login'} >Login</Link>
                        </li>
                    </ul>
                </div>
            </header>
            <header className='header'>
                <div className="header_container">
                    <img src={logo} alt="" />
                    <nav>
                        <ul className='header_container_nav'>
                            <li>
                                <Link className='header_container_link link' to={'/'} >{t('home')}</Link>
                            </li>
                            <li>
                                <Link className='header_container_link link' to={'/card'} >{t('shop')}</Link>
                            </li>
                            <li>
                                <Link className='header_container_link link' >{t('pages')}</Link>
                            </li>
                            <li>
                                <Link className='header_container_link link' >{t('blog')}</Link>
                            </li>
                            <li>
                                <Link className='header_container_link link' >{t('contact')}</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className='header_container_btns'>
                        <Link className='header_container_btns-btn' ><img src={search} alt="search" /></Link>
                        <Link className='header_container_btns-btn' ><img src={shuffle} alt="shuffle" /></Link>
                        <Link className='header_container_btns-btn' ><img src={shape} alt="shape" /></Link>
                        <Link className='header_container_btns-btn' to={'/card'} ><img src={bag} alt="bag" /><span className='totalItems'>{localArr.totalUniqueItems
                        }</span></Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;