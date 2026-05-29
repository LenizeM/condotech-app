import { StyleSheet, Text, View } from 'react-native';

export default function AvisosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avisos aos Moradores</Text>

      <Text style={styles.subtitle}>
        Comunicados e informações importantes do condomínio.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
});