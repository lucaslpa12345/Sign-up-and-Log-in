import React from 'react';
import {Usuario, Texto} from './estilo';
import propTypes from 'prop-types';

function User({Email, Nome}) {
  return (
    <Usuario>
      <Texto>Nome:{Nome}</Texto>
      <Texto>Emailt: {Email}</Texto>
    </Usuario>
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
