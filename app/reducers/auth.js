import { AUTH_USER } from '../utils/constants/actionTypes'

const reducer = (state, { type, payload }) => {
  switch (type) {
    case AUTH_USER:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}
export default reducer
