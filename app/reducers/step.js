import { SET_STEP } from '../utils/constants/actionTypes'

export default function(state, { type, payload }) {
  switch (type) {
    case SET_STEP:
      return payload
    default:
      return state
  }
}
