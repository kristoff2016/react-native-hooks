/**
 * @format
 */

import { AppRegistry } from 'react-native'
import RootContainer from './app/containers/StateProvider'

import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => RootContainer)
