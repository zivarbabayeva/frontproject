import React from 'react'
import {Link} from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className="header__navigation">
    <ul className="header__navigation__links">
      <li className="header__navigation__link__item">
        <Link className="header__link" to="/">Home</Link>
      </li>
      <li className="header__navigation__link__item">
        <Link className="header__link" to="/">About</Link>
      </li>
      <li className="header__navigation__link__item">
        <Link className="header__link" to="/">Category</Link>
      </li>
      <li className="header__navigation__link__item">
        <Link className="header__link" to="/wallet">Wallet</Link>
      </li>
      <li className="header__navigation__link__item">
        <Link className="header__link" to="/faq">FAQ</Link>
      </li>
      <li className="header__navigation__link__item">
        <Link className="header__link" to="/live-auction">Auction</Link>
      </li>
      <li className="header__navigation__link__item">
        <Link className="header__link" to="/">Login</Link>
      </li>
      <li className="header__navigation__link__item">
        <Link className="header__link" to="/">Contact</Link>
      </li>
      <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-basket-shopping"></i>
    </ul>
  </div>
  )
}

export default Navigation