import React, {useRef,  useState } from 'react';
import {Text, View} from 'react-native';
import Background from '../../components/background/index';
import {Container, TXinput, Forma, Butao, ButonChange, Butoes} from './estile';
import {StatusBar} from 'react-native';
import api from '../../api/api'

const App = ({navigation}) => {
  const Emailref = useRef();
  const Passwordref = useRef();
  function Handlesubmit() {
    navigation.navigate('Lista');
  }

  const [name, setNome] = useState('')
  const [email, setEmail ] = useState('')
  const [password, setPassword] = useState('')
  
   

 async function submit() { 
   const signup =   await api.post('/signup', {name, email, password })
   signup ? Handlesubmit() : 'Erro ao logar'
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
            value={name}
            onChangeText={setNome}
          />
          <TXinput
            icon="email"
            placeholder="Email"
            returnKeyType="next"
            ref={Emailref}
            onSubmitEditing={() => Passwordref.current.focus()}
            value= {email}
            onChangeText={setEmail}

          />
          <TXinput
            icon="lock"
            placeholder="Senha"
            returnKeyType="send"
            ref={Passwordref}
            onSubmitEditing={Handlesubmit}
            value={ password } 
            onChangeText = { setPassword}
          />
          <Butoes>
            <Butao texto="Registrar" Press={() => submit()}  />
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
