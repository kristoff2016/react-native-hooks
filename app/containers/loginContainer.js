import React, { Component } from 'react'
import { View, Text } from 'react-native'

class LoginContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>Login to React Native Hooks</Text>
      </View>
    )
  }
}
export default LoginContainer
