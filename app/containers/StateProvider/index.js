import PropTypes from 'prop-types'
import React, { createContext, useReducer } from 'react'
import AppNavigator from '../../navigators'
import actions from '../../actions'
import reducers from '../../reducers'

export const StateContext = createContext()
const { Provider } = StateContext

const StateProvider = ({ initialState = {} }) => {
  const [ state, dispatch ] = useReducer(reducers, initialState)
  return (
    <Provider value={{ state, actions: actions(dispatch) }}>
      <AppNavigator />
    </Provider>
  )
}
StateProvider.propTypes = {
  initialState: PropTypes.object
}
export default StateProvider
