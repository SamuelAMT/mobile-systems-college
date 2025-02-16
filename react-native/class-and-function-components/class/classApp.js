import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, Button, Text, Surface } from 'react-native-paper';

class ClassApp extends React.Component {
  state = {
    name: '',
    message: '',
  };

  generateText = () => {
    if (this.state.name.trim()) {
      this.setState({
        message: `O ${this.state.name} roubou pão na casa do João.`,
      });
    }
  };

  render() {
    return (
      <Surface style={styles.surface}>
        <Text style={styles.title}>Versão Classe</Text>
        <TextInput
          label="Digite um nome"
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
          mode="outlined"
          style={styles.input}
        />
        <Button
          mode="contained"
          onPress={this.generateText}
          style={styles.button}>
          Gerar Texto
        </Button>
        {this.state.message ? (
          <Text style={styles.message}>{this.state.message}</Text>
        ) : null}
      </Surface>
    );
  }
}

const styles = StyleSheet.create({
  surface: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginBottom: 16,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    color: '#2196F3',
  },
});

export default ClassApp;