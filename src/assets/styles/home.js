import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  content: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 0,
    paddingBottom: 5,
    textAlign: 'justify',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  subtitle: {
    fontSize: 12,
  },
  viewArea: {
    flexDirection: 'row',
    padding: 5,
  },
  viewLine: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  lineStyle: {
    borderWidth: 0.5,
    marginTop: 20,
    marginBottom: 20,
    borderColor: '#333333',
    width: '50%',
  },
});
