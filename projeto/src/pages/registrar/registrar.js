import React, {forwardRef} from 'react';
import {Text, View} from 'react-native';
import Background from '../../components/background/index';
import {Container, TXinput, Forma, Butao, ButonChange} from './estile';
import {StatusBar} from 'react-native';

const App = ({navigation}) => {
  return (
    <Background>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#F7971E" />
        <Text
          style={{
            marginBottom: 150,
            fontSize: 60,
            color: 'rgba(75,0,130,0.9)',
          }}>
          REGISTRAR
        </Text>

        <Forma>
          <TXinput icon="account-box" placeholder="Nome" />
          <TXinput icon="email" placeholder="Email" />
          <TXinput icon="lock" placeholder="Senha" />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              widht: 100,
            }}>
            <Butao
              texto="Registrar"
              Press={() => navigation.navigate('Lista')}
            />
            <ButonChange onPress={() => navigation.navigate('Entrar')}>
              <Text>Entrar</Text>
            </ButonChange>
          </View>
        </Forma>
      </Container>
    </Background>
  );
};

export default App;
