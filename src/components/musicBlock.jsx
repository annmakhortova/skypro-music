import React from "react";
import "./musicBlock.css";

function mainNav() {

  function handleClick() {
		let navMenu = document.querySelector('.nav__menu');
		navMenu.classList.toggle('hiddenNavMenu');
	}

    return (
        <nav className="main__nav nav">
            <div className="nav__logo logo">
              <img className="logo__image" src="/img/logo.png" alt="logo" />
            </div>
            <div onClick={handleClick} className="nav__burger burger">
              <span className="burger__line"></span>
              <span className="burger__line"></span>
              <span className="burger__line"></span>
            </div>
            <div className="nav__menu menu hiddenNavMenu">
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Главное
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Мой плейлист
                  </a>
                </li>
                <li className="menu__item">
                  <a href="../signin.html" className="menu__link">
                    Войти
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          );
}

export default mainNav;