import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import Session from './src/pages/session/App';

const App: () => React$Node = () => {
  return (
    <>
      <Session />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    flex: 1,
    justifyContent: 'center',

    alignItems: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'center',

    alignItems: 'center',
  },
  menu: {
    flex: 1,
    justifyContent: 'center',

    alignItems: 'center',
  },
});

export default App;
