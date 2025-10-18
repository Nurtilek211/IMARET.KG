import React, { useState, useEffect } from 'react';
import "./Header.scss";
import { Link } from 'react-router-dom';
import IMARET_L from "../../assets/image/IMARET_log.png";
import Favorite from "../../assets/svg/Favorite.svg";
import Search from "../../assets/svg/Search.svg";

function Header( {search, setSearch }) {

  const menuItems = [
    { label: "Главная", path: "/" },
    { label: "Портнёры", path: "/partners" },
    { label: "О компании", path: "/about" },
    { label: "Контакты", path: "/Contact" },
  ];

  const menu2Items = [
    { label: "Жилые комплексы", path: "/companies" },
    { label: "Застройщики", path: "/complexes" },
    { label: "Новости", path: "/news" },
    { label: "Акции, скидки", path: "/sales" },
    { label: "Обмен", path: "/exchange" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
          <Link to="/">
            <img src={IMARET_L} alt="logo" className='H_LOgo' />
          </Link>

          <div className='burger-option'>
            <div
              className={`burger ${menuOpen ? "active" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className={`We_H ${menuOpen ? "open" : ""}`}>
              <div className='Home_H_left_top'>
                <ul>
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className={activeIndex === index ? "active" : ""}
                      onClick={() => {
                        setActiveIndex(index);
                        setMenuOpen(false);
                      }}
                    >
                      <Link to={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className='hr2' />

              <div className='Home_H_left_bottom'>
                <ul>
                  {menu2Items.map((item2, index) => (
                    <li
                      key={index + menuItems.length}
                      className={activeIndex === index + menuItems.length ? "active" : ""}
                      onClick={() => {
                        setActiveIndex(index + menuItems.length);
                        setMenuOpen(false);
                      }}
                    >
                      <Link to={item2.path}>{item2.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className='hr2' />
              
              <div className='End'>
                  <ul>
                    <li>
                      <Link to="/Login">Войти</Link>
                    </li>
                    <li>
                      <Link to="/wishlist">Избранное</Link>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='Home_H_Right'>
          <div className='We_HR'>
            <div className='Home_HR_top'>
              <Link to="/Contact">
                <button className='Buttons_HW'>Связаться с нами</button>
              </Link>
              <Link to="/Login">
                <button className='Buttons_H'>Войти</button>
              </Link>
            </div>
            <div className='Home_HR_bottom'>
              <div
                className={`Search_l ${active ? "active" : ""}`}
                onClick={() => setActive(true)}
              >
                <img className='HearT_ic' src={Search} alt="" />
                  <input
                    type="text"
                    placeholder="🔍Поиск..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="header-search"
                  />
              </div>
              <Link to="/wishlist">
                <img className='HearT_ic' src={Favorite} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className='hr1' />
    </header>
  );
}

export default Header;
