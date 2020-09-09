import React from 'react'
import { StackActions } from '@react-navigation/native'

/**
 * Take navigation ref from NavigationContainer inside App
 */
const isReadyRef = React.createRef()
const navigationRef = React.createRef()

class NavigationAction {
  static navigate(name, params = {}) {
    if (!navigationRef.current) return
    navigationRef.current.navigate(name, params)
  }

  static back() {
    if (!navigationRef.current) return
    navigationRef.current.goBack()
  }

  static reset(name, params = {}) {
    if (!navigationRef.current) return
    navigationRef.current.dispatch(StackActions.replace(name, params))
  }
}

export default NavigationAction
export { navigationRef, isReadyRef }
