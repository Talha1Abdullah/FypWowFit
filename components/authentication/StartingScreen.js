import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import AppButton from '../buttons/AppButton';

const StartingScreen = props => {
  const{navigation} = props;
  return (
    <View>
      <Text style={HomeScreenStyles.heading}>WowFit</Text>
      <Image
        style={HomeScreenStyles.Logo}
        source={require('../../assets/homeScreen/startingEmoji.png')}></Image>
      <Text style={HomeScreenStyles.welcomeText}>Plan your first workout!</Text>
      <AppButton title={'Create account'}  onPress={() =>{
          navigation.navigate('SignUp');
        }}></AppButton>
      <View style={HomeScreenStyles.CreateAccountText}>
        <Text>Have an account?</Text>
        <TouchableOpacity
        onPress={() =>{
          navigation.navigate('Login');
        }}>
          <Text style={{color: 'blue'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const HomeScreenStyles = StyleSheet.create({
  heading: {
    color: '#0E0F0F',
    position: 'absolute',
    height: 32,
    left: 150,
    right: 147,
    top: 40,
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
  },

  Logo: {
    position: 'absolute',
    width: 130,
    height: 170,
    left: 146,
    top: 150,
    alignItems: 'center',
  },
  welcomeText: {
    position: 'absolute',
    width: 327,
    height: 32,
    left: '50%',
    marginLeft: -163.5,
    top: '50%',
    marginTop: 400,
    fontFamily: 'SF Pro Display',
    fontWeight: 'normal',
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
  },

  CreateAccountText: {
    position: 'absolute',
    width: 180,
    left: '50%',
    marginLeft: -70.5,
    fontFamily: 'SF Pro Display',
    fontWeight: 'normal',
    fontSize: 16,
    textAlign: 'center',
    top: 590,
    flexDirection: 'row',
  },
});
export default StartingScreen;
