import React, {useRef} from 'react';
import {Button, Text, TouchableOpacity} from 'react-native';
import {Form} from '@unform/mobile';
import Input from './input';
export default function SignIn() {
  const formRef = useRef(null);
  function handleSubmit(data) {
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
  }
  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Text>Email</Text>
      <Input name="email" type="email" />
      <Text>Senha</Text>
      <Input name="password" type="password" />
      <TouchableOpacity>
        <Text> Register </Text>
      </TouchableOpacity>
      
    </Form>
  );
}
