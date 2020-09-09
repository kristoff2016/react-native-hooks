import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { navigationRef } from '../utils/navigationAction'
import OverViewTab from './appRoute'
import SplashSatck from './stacks/splashSatck'

const RootStack = createStackNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        initialRouteName="splash_stack"
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen name="splash_stack" component={SplashSatck} />
        <RootStack.Screen name="app_stack" component={OverViewTab} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
export default AppContainer
