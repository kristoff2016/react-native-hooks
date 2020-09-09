import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native'
import { StateContext } from '../containers/StateProvider'
import { useNavigation } from '@react-navigation/native'

export default function SplashContainer() {
  const { navigate } = useNavigation()

  const { actions } = useContext(StateContext)

  const mapValueToContext = async () => {
    actions.storeUserInfo({
      id: '1',
      username: 'kristoff.ibell',
      email: 'kristoff.ibell@gmail.com',
      displayName: 'Kristoff IBell'
    })
  }

  useEffect(() => {
    mapValueToContext()
    navigate('app_stack')
  }, [])

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
      }}
    >
      <Text>Slash...</Text>
    </View>
  )
}
