import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import IonTabIcon from 'react-native-vector-icons/Ionicons';
import LoginScreen from '../../components/authentication/LoginScreen';
import SignUpScreen from '../../components/authentication/SignUpScreen';

export function TabMenu() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {height: 68},
        tabBarActiveTintColor: '#101820',
        tabBarInactiveTintColor: '#BDBDBD',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: function ({focused, color}) {
            return <SimpleIcon name="home" size={24} color={color} />;
          },
        }}
        name="Home"
        component={LoginScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: function ({focused, color}) {
            return <IonTabIcon name="settings" size={24} color={color} />;
          },
        }}
        name="Settings"
        component={SignUpScreen}
      />
    </Tab.Navigator>
  );
}
