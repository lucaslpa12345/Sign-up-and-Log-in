import React from 'react';
import Background from '../../components/background/index';
import {Text} from 'react-native';
import {Container, Lista, Title, Butao} from './estilo';
import User from '../../components/usuario/usuario';
import Button from '../../components/button/button';

function ListaUsers({navigation}) {
  return (
    <Background>
      <Container>
        <Title> Lista de Usuário </Title>
        <Lista>
          <User Nome="Lucas" Email="Lucas@gmail" />
          <User Nome="Lucas" Email="Lucas@gmail" />

          <User Nome="Lucas" Email="Lucas@gmail" />
          <User Nome="Lucas" Email="Lucas@gmail" />
          <User Nome="Lucas" Email="Lucas@gmail" />
          <User Nome="Lucas" Email="Lucas@gmail" />
          <User Nome="Lucas" Email="Lucas@gmail" />
          <User Nome="Lucas" Email="Lucas@gmail" />
          <User Nome="Lucas" Email="Lucas@gmail" />
          <User Nome="Lucas" Email="Lucas@gmail" />
          <User Nome="Lucas" Email="Lucas@gmail" />
          <User Nome="Lucas" Email="Lucas@gmail" />
          <User Nome="Lucas" Email="Lucas@gmail" />
          <User Nome="Lucas" Email="Lucas@gmail" />
          <User Nome="Lucas" Email="Lucas@gmail" />
          <User Nome="Lucas" Email="Lucas@gmail" />
          <User Nome="Lucas" Email="Lucas@gmail" />
          <User Nome="Lucas" Email="Lucas@gmail" />
          <User Nome="Lucas" Email="Lucas@gmail" />
          <User Nome="Lucas" Email="Lucas@gmail" />
          <User Nome="Lucas" Email="Lucas@gmail" />
          <User Nome="Lucas" Email="Lucas@gmail" />
          <User Nome="Lucas" Email="Lucas@gmail" />
          <User Nome="Lucas" Email="Lucas@gmail" />
        </Lista>
        <Button
          style={{margin: 20}}
          texto="Sair"
          Press={() => navigation.navigate('Entrar')}
        />
      </Container>
    </Background>
  );
}

export default ListaUsers;
