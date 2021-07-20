import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  profileHeader: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 25,
    width: '100%',
    justifyContent: 'space-between',
  },
  profileColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderPicCircle: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    color: '#333333',
    backgroundColor: '#e3e3e3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: '#444444',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
