import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../Style/login_styles';
export default function Login() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const handlesignin = () => {
    {
      if (username && password) {
        Alert.alert('Signed in successfully');
      } else {
        Alert.alert('Please fill in both fields');
      }
    }
  };
  return (
    <SafeAreaView style={styles.full}>
      <View style={styles.maincontainer}>
        <Text style={styles.logintext}> Welcome Back !</Text>
        <Text style={styles.subtext}>Please sign in to your account </Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#FFFFFF"
          style={styles.usernamecontainer}
          onChangeText={setusername}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#FFFFFF"
          style={styles.passnamecontainer}
          onChangeText={setpassword}
        />
        <Text style={styles.forgot}>Forgot password</Text>
        <TouchableOpacity style={styles.button}>
          <Text onPress={handlesignin} style={styles.buttonText}>
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gbutton}>
          <Icon
            name="google"
            size={24}
            color="#EA4335"
            style={{marginRight: 10}}
          />
          <Text
            onPress={() => {
              Alert.alert('Sign In successfully');
            }}
            style={styles.gbuttonText}>
            Sign In With Google
          </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.subtext}>Don't Hava An Account ? </Text>
          <Text style={{color: '#4E4FEB', marginTop: 10}}> Sign up</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
