import React from 'react';
import {Usuario, Texto, Delete} from './estilo';
import Icons from 'react-native-vector-icons/MaterialIcons';
import propTypes from 'prop-types';
import {View, FlatList} from 'react-native';

function Flat({nome, email}, Press) {
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
        <Texto>Nome:{nome}</Texto>
        <Texto>Email: {email}</Texto>
      </Usuario>
      <Delete onPress={Press}>
        <Icons name="delete" size={25} color="rgba(75,0,130,1)" />
      </Delete>
    </View>
  );
}

function User({data}) {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <Flat nome={item.name} email={item.emil} />}
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
