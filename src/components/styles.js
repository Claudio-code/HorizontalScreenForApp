import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {

  },
  outer: {
    backgroundColor: '#0288d1',
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerOne: {
    backgroundColor: '#4caf50',
  },
  innerText: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
  },
  purple: {
    backgroundColor: '#673ab7',
  }
});

export default styles;
