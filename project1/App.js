/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ChallangeScreen from './src/screens/FirstScreen'
import ChallangeScreen2 from './src/screens/SecondScreen'
import ThirdScreen from './src/screens/ThirdScreen'
import FourthScreen from './src/screens/FourthScreen'
import InstagramHomeScreen from './src/screens/InstagramHomeScreen'
import ChallangeFirst from './src/screens/Pertama'
import Kedua from './src/screens/Kedua';
import Pertama from './src/screens/Pertama'
import ScreenPertama from './src/screens/ScreenPertama';
import Third14B from './src/screens/Third14B';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Ketiga from './src/screens/Ketiga';

import First16C from './src/screens/First16C';
import TryScreen from './src/screens/TryScreen';
import SecondDay from './src/screens/SecondDay';
import DayFour from './src/screens/DayFour';


const App: () => Node = () => {


  return (
    <>
      <InstagramHomeScreen />
    </>  
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
