import { TUser } from 'types/user'

const loadState = () => {
  const serializedCities = localStorage.getItem('isAuth')
  if (serializedCities !== null)
    if(JSON.parse(serializedCities))
      return {id: 1, name: 'Пушкарев Максим'}
  return null
}

const user = (state: TUser = loadState(), action: any) => {
  switch (action.type) {
    case 'AUTH_USER':
      localStorage.setItem('isAuth', JSON.stringify(true))
      return action.user
    case 'LOGOUT_USER':
      localStorage.removeItem('isAuth')
      return null
    default:
      return state
  }
}

export default user