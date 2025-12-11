import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import {StyleSheet,Text,TextInput,View,TouchableOpacity,Image,Alert,ActivityIndicator,Pressable,} from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('./fonts/Poppins-Bold.ttf'),
    'Poppins-Light': require('./fonts/Poppins-Light.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
    } else {
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
    }
  };

  const handleRegister = () => {
    Alert.alert('Cadastro', 'Redirecionar para cadastro...');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./Logo.png')} style={styles.image} resizeMode="contain" />

      <Text style={styles.title}>Login</Text>

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

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={[styles.buttonText, { fontFamily: 'Poppins-Bold' }]}>ENTRAR</Text>
      </TouchableOpacity>

      <Text style={[styles.text, { fontFamily: 'Poppins-Light' }]}>
        Não tem conta? Se cadastre agora
      </Text>

      <Pressable style={styles.clearButton} onPress={handleRegister}>
        <Text style={styles.clearButtonText}>Cadastrar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontFamily: 'Poppins-Bold',
  },

  image: {
    width: '60%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#00BFFF',
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 16,
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
    fontSize: 18,
    textAlign: 'center',
  },
  text: {
    marginTop: 10,
    fontSize: 14,
  },
  clearButton: {
    marginTop: 5,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  clearButtonText: {
    color: '#00BFFF', 
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
});
