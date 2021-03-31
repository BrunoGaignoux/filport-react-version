import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#800080',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#800080',
    height: 50,
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 12,
    fontSize: 18,
  },
  inputStyle: {
    flex: 1,
    color: '#aaaaaa',
    height: 50,
    fontSize: 18,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#fff',
    shadowColor: '#dadae8',
    shadowOpacity: 1,
    backgroundColor: '#fff',
  },
  copyTextStyle: {
    color: '#aaaaaa',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 10,
    alignSelf: 'center',
    padding: 15,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 14,
  },
});