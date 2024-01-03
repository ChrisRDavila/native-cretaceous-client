import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import GetDino from './GetDino';
import Header from './Header';
// import styles from './App.scss';

console.log({styles});
// {
//   styles: "/static/media/App.d9c94357a12d2263adef.scss"
// }


export default function App() {
  return (
    <View style={styles.container}>
      {/* <div className='container'> */}
      <Header />
      <GetDino />
      <Text style={styles.text}>AppText</Text>
      <StatusBar style="auto" />
      {/* </div> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffccff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'green'
  },
  text: {
    fontSize: 20,
    color: 'red',
  }
});
