import React from 'react';
import {Bton, TI, Container} from './style';
import propTypes from 'prop-types';
import {Text} from 'react-native';

function button({style, texto, Press}) {
  return (
    <Bton style={style} onPress={Press}>
      <TI> {texto} </TI>
    </Bton>
  );
}

button.propTypes = {
  texto: propTypes.string,
};

export default button;
