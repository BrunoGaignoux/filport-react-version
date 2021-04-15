import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#800080',
  },
  item: {
    backgroundColor: '#800080',
    flexDirection: 'column',
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 25,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 10,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'white',
    width: '50%',
  },
});
