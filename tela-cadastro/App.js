import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNasc, setDataNasc] = useState('');

  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
  });

  if (!fontsLoaded) {
    SplashScreen.preventAutoHideAsync();
    return <AppLoading />;
  }

  const handleRegistrar = () => {
    if (username === '' || password === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
    } else {
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
    }
  };  
  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
    } else {
      Alert.alert('Redirecionado a tela de Login', '');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/Logo.png')} style={styles.image} resizeMode="contain" />
      <Text style={[styles.title, { fontFamily: 'Poppins-Bold' }]}>Cadastro</Text>

      <TextInput
        style={[styles.input, { fontFamily: 'Poppins-Light' }]}
        placeholder="E-mail"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={[styles.input, { fontFamily: 'Poppins-Light' }]}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        style={[styles.input, { fontFamily: 'Poppins-Light' }]}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
      />

      <TextInput
        style={[styles.input, { fontFamily: 'Poppins-Light' }]}
        placeholder="Data de Nascimento"
        value={dataNasc}
        onChangeText={setDataNasc}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegistrar}>
        <Text style={[styles.buttonText, { fontFamily: 'Poppins-Bold' }]}>Cadastrar</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Já tem um cadastro?</Text>
        <TouchableOpacity style={styles.button2} onPress={handleLogin}>
        <Text style={[styles.buttonText2, { fontFamily: 'Poppins-Bold' }]}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#00BFFF',
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  image: {
    width: '50%',
  },
  button: {
    backgroundColor: '#00BFFF',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 100,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
    buttonText2: {
    color: '#00BFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
