import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { router, useFocusEffect } from 'expo-router';
import * as SQLite from 'expo-sqlite';
import { useCallback, useEffect, useState } from 'react';

const db = SQLite.openDatabaseSync('condotech.db');

type Tarefa = {
  id: number;
  titulo: string;
  status: string;
};

export default function TasksScreen() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  function criarTabela() {
    db.execSync(`
      CREATE TABLE IF NOT EXISTS tarefas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT,
        status TEXT
      );
    `);
  }

  function carregarTarefas() {
    const resultado = db.getAllSync('SELECT * FROM tarefas') as Tarefa[];
    setTarefas(resultado);
  }

  useEffect(() => {
    criarTabela();
    carregarTarefas();
  }, []);

  useFocusEffect(
    useCallback(() => {
      carregarTarefas();
    }, [])
  );

  function excluirTarefa(id: number) {
    db.runSync('DELETE FROM tarefas WHERE id = ?', [id]);
    carregarTarefas();
  }

  function atualizarStatus(tarefa: Tarefa) {
    let novoStatus = 'Pendente';

    if (tarefa.status === 'Pendente') {
      novoStatus = 'Em andamento';
    } else if (tarefa.status === 'Em andamento') {
      novoStatus = 'Concluído';
    }

    db.runSync(
      'UPDATE tarefas SET status = ? WHERE id = ?',
      [novoStatus, tarefa.id]
    );

    carregarTarefas();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas do Condomínio</Text>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push('/nova-tarefa')}
      >
        <Text style={styles.addButtonText}>+ Nova Tarefa</Text>
      </TouchableOpacity>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.taskTitle}>{item.titulo}</Text>

            <Text style={styles.status}>Status: {item.status}</Text>

            <TouchableOpacity
              style={styles.updateButton}
              onPress={() => atualizarStatus(item)}
            >
              <Text style={styles.updateButtonText}>Alterar Status</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => excluirTarefa(item.id)}
            >
              <Text style={styles.deleteButtonText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },

  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },

  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  status: {
    fontSize: 14,
  },

  addButton: {
    backgroundColor: '#0a7ea4',
    padding: 14,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },

  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  deleteButton: {
    backgroundColor: '#d9534f',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },

  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  updateButton: {
    backgroundColor: '#f0ad4e',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },

  updateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});