import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashContainer from '../../containers/splashContainer'

const RootStack = createStackNavigator()

const SplashStack = () => {
  return (
    <RootStack.Navigator initialRouteName="splash">
      <RootStack.Screen name="splash" component={SplashContainer} />
    </RootStack.Navigator>
  )
}

export default SplashStack
