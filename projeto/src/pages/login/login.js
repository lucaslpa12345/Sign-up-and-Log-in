import React, {useRef, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Background from '../../components/background/index';
import {Container, TXinput, Forma, Butao, ButonChange, Butoes} from './estile';
import {StatusBar} from 'react-native';
import api from '../../api/api';

const App = ({navigation}) => {
  const Passwordref = useRef();
  function Handlesubmit() {
    navigation.navigate('Lista');
  }
  async function submit() {
    const  login =  await api.post('/session', {email, password});
    
      login ? Handlesubmit() : 'Erro ao logar'
   
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Background>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#F7971E" />

        <Forma>
          <TXinput
            icon="email"
            placeholder="Email"
            returnKeyType="next"
            onSubmitEditing={() => Passwordref.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <TXinput
            icon="lock"
            placeholder="Senha"
            ref={Passwordref}
            returnKeyType="send"
            onSubmitEditing={Handlesubmit}
            value={password}
            onChangeText={setPassword}
          />

          <Butoes>
            <Butao Press={() => submit()} texto="Entrar" />
            <ButonChange onPress={() => navigation.navigate('Registrar')}>
              <Text style={{color: 'rgba(75,0,130,1)'}}>Registrar</Text>
            </ButonChange>
          </Butoes>
        </Forma>
      </Container>
    </Background>
  );
};

export default App;
