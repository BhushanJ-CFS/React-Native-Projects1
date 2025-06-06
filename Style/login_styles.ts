import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  full: {},
  maincontainer: {
    backgroundColor: '#0F0F0F',
    height: 1000,
    width: 1000,
  },
  logintext: {
    color: 'white',
    marginTop: 100,
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 100,
    alignItems: 'center',
  },
  subtext: {
    color: '#535C91',
    marginLeft: 120,
    marginVertical: 10,
  },
  usernamecontainer: {
    marginTop: 200,
    backgroundColor: '#232D3F',
    width: 350,
    borderRadius: 15,
    marginLeft: 30,
    height: 70,
    paddingLeft: 30,
    color: 'white',
  },
  passnamecontainer: {
    backgroundColor: '#232D3F',
    marginVertical: 20,
    width: 350,
    borderRadius: 15,
    marginLeft: 30,
    height: 70,
    paddingLeft: 30,
    color: 'white',
  },
  forgot: {color: '#535C91', marginLeft: 260},
  button: {
    backgroundColor: '#4E4FEB',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 30,
    width: 350,
  },
  buttonText: {color: 'white', fontSize: 18, fontWeight: 'bold'},

  gbutton: {
    backgroundColor: 'white',
    paddingVertical: 15,
    flexDirection: 'row',
    paddingHorizontal: 50,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 30,
    width: 350,
  },

  gbuttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
  },
});
