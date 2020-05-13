import React, {useRef} from 'react';
import {Text, View} from 'react-native';
import Background from '../../components/background/index';
import {Container, TXinput, Forma, Butao, ButonChange, Butoes} from './estile';
import {StatusBar} from 'react-native';

const App = ({navigation}) => {
  const Emailref = useRef();
  const Passwordref = useRef();
  function Handlesubmit() {
    navigation.navigate('Lista');
  }

  return (
    <Background>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#F7971E" />

        <Forma>
          <TXinput
            icon="account-box"
            placeholder="Nome"
            returnKeyType="next"
            onSubmitEditing={() => Emailref.current.focus()}
          />
          <TXinput
            icon="email"
            placeholder="Email"
            returnKeyType="next"
            ref={Emailref}
            onSubmitEditing={() => Passwordref.current.focus()}
          />
          <TXinput
            icon="lock"
            placeholder="Senha"
            returnKeyType="send"
            ref={Passwordref}
            onSubmitEditing={Handlesubmit}
          />
          <Butoes>
            <Butao texto="Registrar" Press={Handlesubmit} />
            <ButonChange onPress={() => navigation.navigate('Entrar')}>
              <Text style={{color: 'rgba(75,0,130,0.9)'}}>Entrar</Text>
            </ButonChange>
          </Butoes>
        </Forma>
      </Container>
    </Background>
  );
};

export default App;
