import React from 'react'
import { useTranslation } from 'react-i18next';


// images
import logo from './images/logosvg.svg';
import link_insta from './images/link_insta.svg';
import link_twit from './images/link_twit.svg';
import link_face from './images/link_face.svg';
import link_yout from './images/link_yout.svg';
import footer from './images/footer.png';


function Footer() {
  const {t} = useTranslation();

  return (
    <>
    <footer className='footer'>
        <div className='footer_head'>
          <ul className='footer_head_box'>
            <li className='footer_head_box_list'>
              <img src={logo} alt="" />
              <p>
                We are a team of professional designers and developers that create high quality wordpress plugins, Html, React Template.
              </p>
              <ul className='footer_link'>
                <li>
                  <a href="http://www.instagram.com">
                    <img src={link_insta} alt="" />
                  </a>
                </li>
                <li>
                  <a href="http://www.youtube.com">
                    <img src={link_yout} alt="" />
                  </a>
                </li>
                <li>
                  <a href="http://twitter.com">
                    <img src={link_twit} alt="" />
                  </a>
                </li>
                <li>
                  <a href="http://www.facebook.com">
                    <img src={link_face} alt="" />
                  </a>
                </li>
              </ul>
            </li>
            <li className='footer_head_box_list'>
              <h3>
                Information
              </h3>
              <ul className='footer_nav'>
                <li>About us</li>
                <li>payment</li>
                <li>Contact us</li>
                <li>Stores</li>
              </ul>
            </li>
            <li className='footer_head_box_list'>
              <h3>
                SocialLinks
              </h3>
              <ul className='footer_nav'>
                <li>New products</li>
                <li>Best sales</li>
                <li>Login</li>
                <li>My account</li>
              </ul>
            </li>
            <li className='footer_head_box_list'>
              <h3>
                Newsletter
              </h3>
              <p>
                Subcribe to the TheFace mailing list to receive update on mnew arrivals, special offers and other discount information.
              </p>
              <form className='footer_form'>
                <input type="text" placeholder='Your email address' />
                <button type='sumit' >{t('signup')}</button>
              </form>
            </li>
          </ul>
        </div>
        <div className="footer_food">
          <div className='footer_food_container'>
            <p>Copyright © HasThemes. All Rights Reserved</p>
            <img src={footer} alt="" /></div>
        </div>
      </footer>
    </>
  )
}

export default Footer;