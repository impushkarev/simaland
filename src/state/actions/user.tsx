import { TUser } from 'types/user'

export const authUser = (user: TUser) => ({
  type: 'AUTH_USER',
  user
})
export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})