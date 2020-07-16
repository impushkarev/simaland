import React from 'react'
import '../any.scss'
import { TUser } from 'types/user'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'



type Props = {
  user: TUser,
}

const PROFILE:React.FC<Props> = ({ user }) => {
  return (
    <>
      { !user ? (
        <Redirect to="/login" />
      ) : (
        <section className="page_profile">
          <div className="centered">
            <div className="page_solo">
              <h1>Профиль</h1>
              <p>Пользователя: <i>{ user.name }</i></p>
            </div>
          </div>
        </section>
      ) }
    </>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(
  mapStateToProps
)(PROFILE)