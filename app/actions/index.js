import * as step from './stepActions'
import * as auth from './auth'

function toReducerAction(dispatch, action) {
  return (...args) => dispatch(action(...args))
}

function combineActions(dispatch) {
  const allActions = {
    ...auth,
    ...step
  }

  return Object.entries(allActions).reduce(
    (actions, [ actionName, action ]) => ({
      ...actions,
      [actionName]: toReducerAction(dispatch, action)
    }),
    {}
  )
}

export default combineActions
