import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <Link href="/(drawer)/pagina2" asChild>
        <Pressable style={styles.button}>
          <Text>Ir para Página 2</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12, // se seu RN não suportar 'gap', troque por margens nos filhos
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  button: {
    padding: 10,
    backgroundColor: '#afc9e8ff',
    borderRadius: 12,
  },
});