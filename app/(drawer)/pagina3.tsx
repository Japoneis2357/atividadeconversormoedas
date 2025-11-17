import { View, Text, StyleSheet } from 'react-native';

export default function Pagina3Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
});