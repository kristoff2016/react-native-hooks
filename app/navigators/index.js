import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createSwitchNavigator } from '@react-navigation/compat'

import { navigationRef, isReadyRef } from '../utils/navigationAction'
import OverViewTab from './appRoute'
import SplashStack from './stacks/splashStack'
import AppNavigation from './appNavigation'

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: SplashStack,
    App: AppNavigation
  },
  {
    initialRouteName: 'AuthLoading'
  }
)

const AppContainer = () => {
  useEffect(() => {
    return () => {
      isReadyRef.current = false
    }
  }, [])

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true
      }}
    >
      <SwitchNavigator />
    </NavigationContainer>
  )
}
export default AppContainer
