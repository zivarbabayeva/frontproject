import React from 'react'
import './Footer.css'
import Logo from "../../components/Header/Logo/Logo";
import { FaFacebookF,FaTwitter,FaLinkedin,FaPinterest,FaInstagram,FaChevronRight} from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="footer__all">
    <div className="container">
      <div className="footer__top">
        <div className="row">
          <div className="col-lg-3">
            <h5 className="footer__top__header">Marketplace</h5>
            <ul className="footer__top__list">
              <li>Book subscriptions that make a difference.</li>
              <li>Art</li>
              <li>Music</li>
              <li>Domain Names</li>
              <li>Virtual World</li>
              <li>Collectibles</li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5 className="footer__top__header">Resources</h5>
            <ul className="footer__top__list">
              <li>Helop Center</li>
              <li>Partners</li>
              <li>Suggestions</li>
              <li>Discord</li>
              <li>Docs</li>
              <li>Newseller</li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5 className="footer__top__header">Community</h5>
            <ul className="footer__top__list">
              <li>Community</li>
              <li>Documentation</li>
              <li>Brand Assets</li>
              <li>Blog</li>
              <li>Forum</li>
              <li>Mailing List</li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5 className="footer__top__header">Newsletter</h5>
            <p className="footer__top__p">
              Signup for our newsletter to get the latest news in your inbox.Preloved and new books delivered every month to your door, with delightful treats. With every box, you're helping to save a book and plant a tree
            </p>
            <input type="text" className="footer__top__input" placeholder="enter your email"/>
            <button className="footer__top__button"><FaChevronRight/></button>
            <span className="footer__top__span">
              Your email is safe with us. We don't spam.
            </span>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="col-lg-2">
          <Logo />
        </div>
        <div className="col-lg-3">
          <p className="footer__bottom__copyright">
            © Copyright 2022 - by Zivar  
          </p>
        </div>
        <div className="col-lg-7 p-0">
          <ul className="footer__bottom__list">
            <li className="footer__bottom__list__item"><FaFacebookF/></li>
            <li className="footer__bottom__list__item"><FaTwitter/></li>
            <li className="footer__bottom__list__item"><FaLinkedin/></li>
            <li className="footer__bottom__list__item"><FaPinterest/></li>
            <li className="footer__bottom__list__item"><FaInstagram/></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer