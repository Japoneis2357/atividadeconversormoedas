import { Stack } from 'expo-router';
import 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native';

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Stack
                    screenOptions={{headerShown: false, headerTitle: 'Demonstração navegação com Drawer'}}
                />
            </SafeAreaView>
        </SafeAreaProvider >

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});