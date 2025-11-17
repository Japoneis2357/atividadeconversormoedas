import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerType: 'front',         // Pode ser 'front', 'back', 'slide', 'permanent'
        drawerHideStatusBarOnOpen: false,
        
        // Aparência do menu
        // drawerStyle: { width: 280, backgroundColor: '#0b1220' },
        // drawerActiveTintColor: '#0ea5e9',
        // drawerInactiveTintColor: '#cbd5e1',
        // drawerActiveBackgroundColor: 'rgba(14,165,233,0.15)',
        // drawerLabelStyle: { fontSize: 16, fontWeight: '600' },
        // drawerItemStyle: { borderRadius: 12, marginHorizontal: 8, marginVertical: 4 },

      }}
    >
      <Drawer.Screen
        name="index"
        options={{ title: 'Página principal' }}
      />
      <Drawer.Screen
        name="pagina2"
        options={{ title: 'Página 2' }}
      />
      <Drawer.Screen
        name="pagina3"
        options={{ title: 'Página 3' }}
      />
    </Drawer>
  );
}