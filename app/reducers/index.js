import step from './step'
import auth from './auth'

function combineReducers(reducers) {
  return (state, action) =>
    Object.entries(reducers).reduce(
      (allState, [ reducerName, reducer ]) => ({
        ...state,
        ...allState,
        [reducerName]: reducer(state[reducerName], action)
      }),
      {}
    )
}

export default combineReducers({
  auth,
  stepName: step
})
