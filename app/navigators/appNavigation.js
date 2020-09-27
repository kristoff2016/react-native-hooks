import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar'
import Icon from 'react-native-vector-icons/Feather'
import styled from 'styled-components/native'

const Tabs = AnimatedTabBarNavigator()

const Screen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`

const TabBarIcon = (props) => {
  return (
    <Icon
      name={props.name}
      size={props.size ? props.size : 24}
      color={props.tintColor}
    />
  )
}

const Home = (props) => (
  <Screen>
    <Text>Home</Text>
    <TouchableOpacity onPress={() => props.navigation.navigate('Discover')}>
      <Text>Go to Discover</Text>
    </TouchableOpacity>
  </Screen>
)

const Discover = (props) => (
  <Screen>
    <Text>Discover</Text>
    <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
      <Text>Go to Home</Text>
    </TouchableOpacity>
  </Screen>
)

const Images = () => (
  <Screen>
    <Text>Images</Text>
  </Screen>
)

const Profile = () => (
  <Screen>
    <Text>Profile</Text>
  </Screen>
)

export default () => (
  <Tabs.Navigator
    tabBarOptions={{
      whenActiveShow: 'both',
      activeTintColor: 'white',
      inactiveTintColor: 'black',
      activeBackgroundColor: '#33FF80',
      labelStyle: {
        fontWeight: 'bold'
      }
    }}
    appearence={{
      floating: true
    }}
    initialRouteName="Home"
  >
    <Tabs.Screen
      name="Home"
      component={Home}
      options={{
        tabBarBadge: 3,
        tabBarIcon: ({ focused, color }) => (
          <TabBarIcon focused={focused} tintColor={color} name="home" />
        )
      }}
    />
    <Tabs.Screen
      name="Discover"
      component={Discover}
      options={{
        tabBarBadge: 3,
        tabBarIcon: ({ focused, color, size }) => (
          <TabBarIcon focused={focused} tintColor={color} name="search" />
        )
      }}
    />

    <Tabs.Screen
      name="Images"
      component={Images}
      options={{
        tabBarIcon: ({ focused, color }) => (
          <TabBarIcon focused={focused} tintColor={color} name="image" />
        )
      }}
    />
    <Tabs.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ focused, color }) => (
          <TabBarIcon focused={focused} tintColor={color} name="user" />
        )
      }}
    />
  </Tabs.Navigator>
)
