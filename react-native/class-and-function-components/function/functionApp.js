import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const FunctionApp = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const generateText = () => {
    if (name.trim()) {
      setMessage(`O ${name} roubou pão na casa do João.`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerador de Texto</Text>
      <TextInput
        label="Nome"
        value={name}
        onChangeText={setName}
        mode="outlined"
        style={styles.input}
        placeholder="Fulano"
        placeholderTextColor="#666"
        theme={{ colors: { text: '#000' } }}
      />
      <Button 
        mode="outlined" 
        onPress={generateText}
        style={styles.button}
      >
        Gerar Texto
      </Button>
      {message ? (
        <Text style={styles.message}>{message}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#03fcce',
  },
  input: {
    marginBottom: 24,
    backgroundColor: '#fff',
  },
  button: {
    marginBottom: 24,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 24,
    color: '#03fcce',
  },
});

export default FunctionApp;