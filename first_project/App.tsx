import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView } from 'react-native';
import Login from './src/login';

export default function App() {
  return (
      <SafeAreaView>
        <StatusBar style="light" backgroundColor='#000' />
        <ScrollView>
          <Login />
        </ScrollView>
      </SafeAreaView>
  );
}