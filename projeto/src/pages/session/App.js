import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import Form from './form';

import styles from './estile';
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titletext}> Dev App </Text>
        </View>
        <View style={styles.form}>
          <Form />
        </View>
        <View style={styles.menu}>
          <Text> change </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
