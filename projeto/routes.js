import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Registrar from './src/pages/registrar/registrar';
import Login from './src/pages/login/login';
import Lista from './src/pages/lista/lista';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Lista" component={Lista} />
          <Stack.Screen name="Registrar" component={Registrar} />
          <Stack.Screen name="Entrar" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
