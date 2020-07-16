import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'



const Footer:React.FC = () => {
  return (
    <footer className="footer bs">
      <div className="container">
        <div className="wrapper">
          <div className="col col-3 map">
            <h1 className="footer__title">Карта сайта</h1>
            <ul className="map__list">
              <Link to="/" className="map__link">
                <li className="map__item">Главная</li>
              </Link>
              <Link to="/gallery" className="map__link">
                <li className="map__item">Галерея</li>
              </Link>
              <Link to="/profile" className="map__link">
                <li className="map__item">Профиль</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer