import React from 'react'
import { TUser } from 'types/user'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './style.scss'



type Props = {
  user: TUser
}

const Header:React.FC<Props> = ({ user }) => {
  return (
    <header className="header bs">
      <div className="container">
        <div className="wrapper ac">
          
          {/* ЛОГОТИП */}
          <div className="col col-3 logo">
            <Link to="/" className="logo__img">
              Сима-ленд
            </Link>
          </div>

          {/* НАВИГАЦИЯ */}
          <nav className="col col-6 nav">
            <ul className="nav__list">
              <Link to="/" className="nav__link">
                <li className="nav__item">Главная</li>
              </Link>
              <Link to="/gallery" className="nav__link">
                <li className="nav__item">Галерея</li>
              </Link>
              <Link to="/profile" className="nav__link">
                <li className="nav__item">Профиль</li>
              </Link>
            </ul>
          </nav>

          {/* ДЕЙСТВИЯ */}
          <div className="col col-3 actions">
            <div className="container">
              <div className="wrapper ve">
                { user ? (
                  <>
                    <Link to="/profile" className="actions__link bs animate">
                      <p>{user.name}</p>
                    </Link>
                    <Link to="/logout" className="actions__link bs animate">
                      <p>Выйти</p>
                    </Link>
                  </>
                ) : ( 
                  <Link to="/login" className="actions__link bs animate">
                    <p>Войти</p>
                  </Link>
                ) }
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(
  mapStateToProps
)(Header)