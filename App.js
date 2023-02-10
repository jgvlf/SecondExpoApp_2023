import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Botao from './components/Botao';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Botao bg='warn'>
          Acessar
      </Botao>
      <Botao bg="secondary">
          Logout
      </Botao>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
