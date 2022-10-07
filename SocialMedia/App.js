import React from 'react';
import 'react-native-gesture-handler'
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigator from './src/navigator/MainNavigator.js'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {profileReducer} from './store/reducers/profileReducer'

const rootReducer = combineReducers({
  profileReducer : profileReducer
})
const store = createStore(rootReducer)


const App = () => {
  return(
    <Provider store={store}>
        <SafeAreaProvider>
          <MainNavigator />
        </SafeAreaProvider>
    </Provider>
    
  )
}

export default App;