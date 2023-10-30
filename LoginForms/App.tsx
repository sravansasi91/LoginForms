import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import HomeScreen from './Screens/HomeScreen';
import ListScreen from './Screens/ListScreen';
import List from './Screens/List';
import {StackParamList} from './Navigation/RootStackScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VerificationScreen from './Screens/VerificationScreen';

const Stack = createNativeStackNavigator<StackParamList>();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            options={{headerShown: false}}
            component={LoginScreen}
          />
          <Stack.Screen
            name="RegistrationScreen"
            options={{headerShown: false}}
            component={RegistrationScreen}
          />
          <Stack.Screen
            name="VerificationScreen"
            options={{headerShown: false}}
            component={VerificationScreen}
          />
          <Stack.Screen
            name="HomeScreen"
            options={{headerShown: false}}
            component={HomeScreen}
          />
          <Stack.Screen
            name="ListScreen"
            options={{headerShown: false}}
            component={ListScreen}
          />
          <Stack.Screen
            name="List"
            options={{headerShown: false}}
            component={List}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
