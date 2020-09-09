import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feather from 'react-native-vector-icons/Feather'

import WelcomeStack from './stacks/welcomeStack'

const RootTab = createBottomTabNavigator()

const tabBarIconStyles = {
  marginTop: 5
}

const OverViewTab = () => {
  return (
    <RootTab.Navigator
      tabBarOptions={{
        labelStyle: {},
        style: {}
      }}
    >
      <RootTab.Screen
        name="WelcomeStack"
        component={WelcomeStack}
        options={{
          tabBarLabel: 'Welcome',
          tabBarIcon: ({ tintColor }) => (
            <Feather
              name="home"
              size={28}
              color={tintColor}
              style={tabBarIconStyles}
            />
          )
        }}
      />
    </RootTab.Navigator>
  )
}

export default OverViewTab
