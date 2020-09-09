import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { StateContext } from '../containers/StateProvider'

export default function WelcomeContainer() {
  const { state } = useContext(StateContext)
  const { auth = {} } = state.auth

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
      }}
    >
      <Text>Welcome to {auth.displayName} </Text>
    </View>
  )
}
