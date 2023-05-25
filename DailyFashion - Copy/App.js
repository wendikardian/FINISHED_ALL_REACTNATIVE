import React, {useEffect} from 'react';
import "./ignoreWarnings";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigator from './src/navigator/MainNavigator'




const App = () => {
  return(
    <SafeAreaProvider>
      <MainNavigator />
    </SafeAreaProvider>
  )
}

export default App