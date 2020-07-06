import React, { useState, useEffect} from 'react';
import {Usuario, Texto, Delete} from './estilo';
import Icons from 'react-native-vector-icons/MaterialIcons';
import propTypes from 'prop-types';
import {View, FlatList} from 'react-native';
import Reactotron from 'reactotron-react-native'
import api from '../../api/api';


function Flat({nome, email, onPress, id , deleteUser} ) {
 
  



useEffect(( ) => { 
     
   

})



  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: 'rgba(255,255,255,0.3)',
      }}>
      <Usuario>
    <Texto>Id: {id}</Texto>
        <Texto>Nome:{nome}</Texto>
        <Texto>Email: {email}</Texto>
      </Usuario>
      <Delete  onPress= { () => deleteUser(id)} >
        <Icons name="delete" size={25} color="rgba(75,0,130,1)" />
      </Delete>
    </View>
  );
}

function User({data , onPress} ) {
  return (
    <FlatList
      data={data}
      keyExtractor={ item => item.id}
      renderItem={({item}) => <Flat  deleteUser={ onPress } nome={item.name} email={item.email} id={ item.id} />}
    
      showsVerticalScrollIndicator={false}
    />
  );
}

User.propTypes = {
  Email: propTypes.string,
  Nome: propTypes.string,
};

User.propDefault = {
  Email: '',
  Nome: '',
};

export default User;
