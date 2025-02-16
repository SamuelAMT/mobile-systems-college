import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Card } from 'react-native-paper';
import FunctionApp from './function/functionApp';
import ClassApp from './class/classApp';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <FunctionApp />
          </Card.Content>
        </Card>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  card: {
    margin: 8,
    elevation: 4,
  },
});