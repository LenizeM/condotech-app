import * as SQLite from 'expo-sqlite';
import { useState } from 'react';
import { router } from 'expo-router';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
const db = SQLite.openDatabaseSync('condotech.db');

export default function NovaTarefaScreen() {
  const [titulo, setTitulo] = useState('');
  const [status, setStatus] = useState('Pendente');

  function salvarTarefa() {

  if (!titulo) {
    alert('Digite uma tarefa');
    return;
  }

  db.runSync(
    'INSERT INTO tarefas (titulo, status) VALUES (?, ?)',
    [titulo, status]
  );

  alert('Tarefa salva com sucesso');

setTitulo('');

router.back();

}
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Nova Tarefa</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a tarefa"
        value={titulo}
        onChangeText={setTitulo}
      />

      <Text style={styles.statusLabel}>
       Status atual: {status}
      </Text>

      <View style={styles.statusContainer}>
  <TouchableOpacity
    style={styles.statusButton}
    onPress={() => setStatus('Pendente')}
  >
    <Text>Pendente</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.statusButton}
    onPress={() => setStatus('Em andamento')}
  >
    <Text>Andamento</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.statusButton}
    onPress={() => setStatus('Concluído')}
  >
    <Text>Concluído</Text>
  </TouchableOpacity>
</View>

      <TouchableOpacity
        style={styles.button}
        onPress={salvarTarefa}
      >
        <Text style={styles.buttonText}>
          Salvar Tarefa
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#0a7ea4',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  statusLabel: {
  fontSize: 16,
  marginBottom: 15,
},

statusContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 20,
},

statusButton: {
  borderWidth: 1,
  borderColor: '#0a7ea4',
  padding: 10,
  borderRadius: 8,
},
});