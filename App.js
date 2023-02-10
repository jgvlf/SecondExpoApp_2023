import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Botao from './components/Botao';

export default function App() {
  function logando(){
    alert("Logando...")
  }

  function deslogando(){
    alert("Deslogando...")
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Botao icon="login" onPress={logando}>
          Acessar
      </Botao>
      <Botao type="secondary" icon="logout" onPress={deslogando}>
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
