import AuthNavigationStack from './authentication/index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();
// Authentication navigation container for Auth screen like ( login, signup, forget password, reset password screens)
function AppContainer() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Authentication"
        screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Authentication" component={AuthNavigationStack} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;
