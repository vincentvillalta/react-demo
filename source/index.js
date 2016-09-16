import { AppRegistry } from 'react-native'
import AppContainer from './AppContainer'
AppRegistry.registerComponent('homeSearch', () => AppContainer)
AppRegistry.runApplication('homeSearch', { rootTag: document.getElementById('root') })
