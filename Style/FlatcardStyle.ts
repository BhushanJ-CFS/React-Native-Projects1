import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  profile: {
    height: 40,
    width: 40,
    backgroundColor: '#9370db',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
    fontWeight: 'bold',
    marginBottom: 3,
    marginRight: 200,
    borderColor: 'white',
    borderWidth: 2,
  },
  textp: {color: 'white'},
  uppercontainer: {
    backgroundColor: '#dda0dd',
    height: 200,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
  mytext: {
    fontSize: 26,
    fontWeight: '700',
  },
  subtext: {
    fontSize: 16,
    color: '#4b0082',
    marginTop: 10,
  },
  maincardcontainer: {
    flexDirection: 'row',
    paddingLeft: 20,
  },
  cardcontainer: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    margin: 10,
    marginTop: 20,
    elevation: 4,
  },
});
