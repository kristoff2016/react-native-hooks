import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeContainer from '../../containers/welcomeContainer'

const RootStack = createStackNavigator()

const WelcomeStack = () => {
  return (
    <RootStack.Navigator initialRouteName="welcome">
      <RootStack.Screen name="welcome" component={WelcomeContainer} />
    </RootStack.Navigator>
  )
}

export default WelcomeStack
