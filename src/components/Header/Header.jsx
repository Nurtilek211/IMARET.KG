import React, { useState, useEffect } from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
import IMARET_L from "../../assets/image/IMARET_logo.png"
import IMARET_1 from "../../assets/image/IMARET_LOGO2.png"
import Favorite from "../../assets/svg/Favorite.svg"
import Search from "../../assets/svg/Search.svg"


function Header() {

  const menuItems = [
    { label: "Главная", path: "/" },
    { label: "Портнёры", path: "/partners" },
    { label: "О компании", path: "/about" },
    { label: "Контакты", path: "/contacts" },
  ];
  const menu2Items = ["Жилые комплексы", "Застройщики", "Новости", "Акции,скидки", "Обмен"];
  const [activeIndex, setActiveIndex] = useState(null);

  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const searchEl = document.querySelector('.Search_l');
      if (searchEl && !searchEl.contains(e.target)) {
        setActive(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className='Home_H'>
      <div className='WE_HEader'>
        <div className='Home_H_Left'>
          <Link to="/"><img src={IMARET_L} alt="" className='H_LOgo' /></Link>
          <div className='We_H'>
            <div className='Home_H_left_top'>
              <ul>
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className={activeIndex === index ? "active" : ""}
                    onClick={() => setActiveIndex(index)}
                  >
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <hr className='hr2' />
            <div className='Home_H_left_bottom'>
              <ul>
                {menu2Items.map((item, index) => (
                  <li
                    key={index + menuItems.length}
                    className={activeIndex === index + menuItems.length ? "active" : ""}
                    onClick={() => setActiveIndex(index + menuItems.length)}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='Home_H_Right'>
          <div className='We_HR'>
            <div className='Home_HR_top'>
              <Link>
                <button className='Buttons_HW'>Свезаться с нами</button>
              </Link>
              <Link>
                <button className='Buttons_H'>Войти</button>
              </Link>
            </div>
            <div className='Home_HR_bottom'>
              <div
                className={`Search_l ${active ? "active" : ""}`}
                onClick={() => setActive(true)}
              >
                <img className='HearT_ic' src={Search} alt="" />
                <input type="text" placeholder="Поиск..." />
              </div>
              <Link>
                <img className='HearT_ic' src={Favorite} alt="" />
              </Link>
            </div>
          </div>
        </div></div>
      <hr className='hr1' />
    </header >
  )
}

export default Header