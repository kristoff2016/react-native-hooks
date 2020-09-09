import { AUTH_USER } from '../utils/constants/actionTypes'

export const storeUserInfo = (auth) => ({
  type: AUTH_USER,
  payload: { auth }
})
