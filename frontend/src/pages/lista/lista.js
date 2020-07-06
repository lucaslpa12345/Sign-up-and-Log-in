import React, {useEffect, useState} from 'react';
import Background from '../../components/background/index';
import {Text} from 'react-native';
import {Container, Lista, Title, Butao} from './estilo';
import User from '../../components/usuario/usuario';
import Button from '../../components/button/button';
import {FlatList} from 'react-native';
import {users} from '../../api/api';
import api from '../../api/api';
import { Delete } from '../../components/usuario/estilo';

class ListaUsers extends React.Component {
  state = {
    DATA: [],
  };

  us(response) {
    this.setState({DATA: response.data});
  }

  async  deleteUser(key) { 
    await api.delete(`/users`, { headers: { id: key} })
   
   
}

  async AtualizarLista() {
    const response = await api.get('/users');
    return this.setState({
      DATA: response.data,
    });
  }
  async componentDidMount() {
    const response = await api.get('/users');
    return this.us(response);

  
  }
  

  render() {
    return (
      <Background>
        <Container>
          <Title> Lista de Usuários </Title>
          <Lista>
            <User data={this.state.DATA} onPress={ this.deleteUser} />
          </Lista>
          <Button texto="Atualizar lista" Press={ () => this.AtualizarLista()} />
          <Button
            style={{margin: 20}}
            texto="Sair"
            
            Press={() => this.props.navigation.navigate('Entrar')}
          />
        </Container>
      </Background>
    );
  }
}

export default ListaUsers;
