import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {TabMenu} from './TabMenu';


import ForgotPassword from '../../components/authentication/ForgotPassword';
import StartingScreen from '../../components/authentication/StartingScreen';
import SignUpScreen from '../../components/authentication/SignUpScreen';
import LoginScreen from '../../components/authentication/LoginScreen';

const AuthenticationStack = createStackNavigator();
function AuthNavigationStack() {
  return (
    <AuthenticationStack.Navigator
      initialRouteName="Start"
      screenOptions={{headerShown: false}}>
      <AuthenticationStack.Screen name="Start" component={StartingScreen} />
      <AuthenticationStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthenticationStack.Screen name="Login" component={LoginScreen} />
      <AuthenticationStack.Screen name="ForgetPassword" component={ForgotPassword} />

    </AuthenticationStack.Navigator>
  );
}

export default AuthNavigationStack;
