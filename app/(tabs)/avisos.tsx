import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AvisosScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Avisos aos Moradores</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Festa Junina Sol e Praia</Text>

        <Text style={styles.date}>30 de maio • a partir das 18h30</Text>

        <Text style={styles.description}>
          A Administração informa que será realizado o Forró do Condomínio na área externa
          do salão de festas. O evento contará com trio pé de serra, som mecânico, toldos,
          mesas disponíveis aos moradores e fogueira.
        </Text>

        <Text style={styles.description}>
          Cada família deverá levar sua comida e bebida. As atividades serão encerradas
          por volta das 23h.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Dedetização nas áreas comuns</Text>

        <Text style={styles.date}>03 de junho</Text>

        <Text style={styles.description}>
          Informamos que será realizada dedetização nas áreas comuns do condomínio.
          Pedimos a colaboração dos moradores para evitar circulação nesses locais
          durante o procedimento.
        </Text>
      </View>
    </ScrollView>
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
    marginTop: 20,
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  date: {
    fontSize: 14,
    color: '#0a7ea4',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  description: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
    marginBottom: 8,
  },
});