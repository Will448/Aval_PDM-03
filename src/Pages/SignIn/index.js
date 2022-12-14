import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable'

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Seja bem-vindo(a) ao app</Text>
        </Animatable.View>

        <Animatable.View animation='fadeInUp' style={styles.containerForm} >

      <Text style={styles.title}>Email</Text>
      <TextInput
      placeholder='Digite um email...'
      style={styles.input}
      />

      <Text style={styles.title}>Senha</Text>
      <TextInput
      placeholder='Sua senha'
      style={styles.input}
      />

<TouchableOpacity style={styles.button1}>
  <Text style={styles.button} >Acessar</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.buttonRegister}>
  <Text style={styles.registerText}> Não possui uma senha? Cadastre-se</Text>
</TouchableOpacity>

        </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor: '#38a69d'
  },

  containerHeader:{
paddingStart: '5%',
marginBottom: '8%',
marginTop: '14%',
},

message:{
  fontSize: 28,
  fontWeight: 'bold',
  color: '#FFF',
},

containerForm:{
flex: 1,
backgroundColor: '#FFF',
borderTopLeftRadius: 25,
borderTopRightRadius: 25,
paddingStart: '5%',
paddingEnd: '5%',
},

title:{
  fontSize: 20,
  marginTop: 28,
},

input:{
  borderBottomWidth: 1,
  height: 40,
  marginBottom: 12,
  fontSize: 16,
},

button1:{
  backgroundColor: '#38a69d',
  width: '100%',
  borderRadius: 4,
  paddingVertical: 8,
  marginTop: 14,
  justifyContent: 'center',
  alignItems: 'center',
},

buttonText:{
  color: '#FFF',
  fontSize: 18,
  fontWeight: 'bold',
},

buttonRegister:{
marginTop: 14,
alignSelf: 'center',
},

registerText:{
color: '#a1a1a1',
},

})

