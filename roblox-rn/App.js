import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { StartScreen } from './src/screens/startScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      
      {StartScreen}
      <StatusBar style="auto" />
    </View>
  );
}

