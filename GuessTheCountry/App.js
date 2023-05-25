import React from 'react';
// import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import HomeScreen from './src/screens/HomeScreen.js';
import GuessTheCountryScreen from './src/screens/GuessTheCountryScreen.js';
import WinScreen from './src/screens/WinScreen'
// import MainNavigator from './src/navigator/MainNavigator.js'
import MainNavigator from './src/navigator/MainNavigator.js';

const App = () => {
  return(
    <SafeAreaProvider>
      <MainNavigator />
    </SafeAreaProvider>
  )
};

export default App;