import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GetDino from './GetDino';
import Header from './Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <GetDino />
      <Text>AppText</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
