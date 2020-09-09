import { SET_STEP } from '../utils/constants/actionTypes'

export const setStep = (stepName) => ({
  type: SET_STEP,
  payload: stepName
})
