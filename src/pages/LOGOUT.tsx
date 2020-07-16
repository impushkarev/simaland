import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { TUser } from 'types/user'
import { logoutUser } from 'state/actions/user'



type Props = {
  user: TUser,
  logoutUser(): void
}

const LOGOUT:React.FC<Props> = ({ user, logoutUser }) => {
  
  useEffect(() => {
    logoutUser()
  }, [])

  return (
    <>
      { !user ? (
        <Redirect to="/" />
      ) : null }
    </>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})
const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LOGOUT)