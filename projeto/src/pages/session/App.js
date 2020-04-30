import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './estile';
const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.title}>TEXTO</Text>
      </View>
      <KeyboardAwareScrollView>
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Nome" />
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Senha" />
          <TouchableOpacity style={styles.button}>
            <Text style={ styles.button}>Aperte</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      
      <View style={styles.menu}>
        <TouchableOpacity style= { styles.opa}>
          <Text> Entrar </Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.opa }>
          <Text> Registrar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
