import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🏢 CondoTech</Text>

      <Text style={styles.subtitle}>
        Gestão inteligente do Condomínio Sol e Praia
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Bem-vindo(a)!
        </Text>

        <Text style={styles.cardText}>
          Gerencie tarefas, acompanhe manutenções e fique por dentro dos avisos do condomínio.
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoCard}>
          <Text style={styles.infoNumber}>2</Text>
          <Text style={styles.infoText}>
            Avisos ativos
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoNumber}>4</Text>
          <Text style={styles.infoText}>
            Tarefas
          </Text>
        </View>
      </View>

      <View style={styles.tipCard}>
        <Text style={styles.tipTitle}>
          📢 Próximo Evento
        </Text>

        <Text style={styles.tipText}>
          Festa Junina do Condomínio • sábado (06/06) às 18h30
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 15,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 14,
    marginBottom: 20,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  cardText: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },

  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  infoCard: {
    backgroundColor: '#fff',
    width: '48%',
    padding: 20,
    borderRadius: 14,
    alignItems: 'center',
  },

  infoNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0a7ea4',
  },

  infoText: {
    marginTop: 8,
    textAlign: 'center',
    color: '#666',
  },

  tipCard: {
    backgroundColor: '#0a7ea4',
    padding: 18,
    borderRadius: 14,
  },

  tipTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  tipText: {
    color: '#fff',
    fontSize: 15,
  },
});