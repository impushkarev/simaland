import React, { useState, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { TUser } from 'types/user'
import { authUser } from 'state/actions/user'



type Props = {
  user: TUser,
  authUser(user: TUser): void
}

const LOGIN:React.FC<Props> = ({ authUser, user }) => {
  const [error, setError] = useState<string>('')
  const loginIn = useRef<HTMLInputElement>(null)
  const passwordIn = useRef<HTMLInputElement>(null)

  const submitHandler = (e) => {
    e.preventDefault()

    //ПОЛУЧИТЬ ИНПУТЫ
    let [logVal, pasVal] = ['', '']
    if (loginIn.current !== null && passwordIn.current !== null)
      [logVal, pasVal] = [loginIn.current.value, passwordIn.current.value]
    
    //АУТЕНТИФИКАЦИЯ
    //// ГУГЛОВСКОЕ ПРЕДУПРЕЖДЕНИЕ ИЗЗА ТОГО ЧТО ОПЕРИРУЕМ ЭТИМИ ДАННЫМИ НА КЛИЕНТЕ
    if (logVal === 'Admin' && pasVal === '12345') {
      //АВТОРИЗАЦИЯ
      authUser({id: 1, name: 'Пушкарев Максим'})
    } else {
      //ВАЛИДАЦИЯ ОШИБОК
      const er:string[] = [];

      if (logVal.length === 0)
        er.push('Вы не ввели логин')
      if (pasVal.length <= 3)  
        er.push('Пароль должен быть длинее 3 символов')
      er.push('Такого пользователя не существует или пароль введен не верно')
      
      setError(er[0])
    }
  }

  return (
    <>
      { user ? (
        <Redirect to="/profile" />
      ) : (
        <section className="page_login">
          <div className="container">
            <div className="wrapper vc">
              <h1 className="col col-12 section__title">Авторизация</h1>
              <form className="col col-4 auth form" onSubmit={submitHandler}>
                <div className="container">
                  <div className="wrapper vc">
                    {error ? (<p className="col col-12 error center">{error}</p>) : null}
                    <div className="col col-12 form__container">
                      <label className="form__label" htmlFor="form_login">Логин</label>
                      <input className="form__input animate" type="text" name="" id="form_login" ref={loginIn}/>
                    </div>
                    <div className="col col-12 form__container">
                      <label className="form__label" htmlFor="form_password">Пароль</label>
                      <input className="form__input animate" type="password" name="" id="form_password" ref={passwordIn} />
                    </div>
                    <div className="col col-12 form__container f">
                      <button className="form__button bs animate">Войти</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})
const mapDispatchToProps = (dispatch) => ({
  authUser: (user: TUser) => dispatch(authUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LOGIN)