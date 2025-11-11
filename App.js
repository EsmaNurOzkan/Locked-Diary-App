import React from 'react';
import 'react-native-get-random-values';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { auth, firestore } from './utils/firebaseConfig';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import IntermediateScreen from './screens/Intermediate';
import NewDiaryEntryScreen from './screens/NewDiaryEntryScreen';
import PersonalDiaryScreen from './screens/PersonalDiaryScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login' }} 
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ title: 'Register' }} 
        />
        <Stack.Screen 
          name="Intermediate" 
          component={IntermediateScreen} 
          options={{ title: ' ' }} 
        />
        <Stack.Screen 
          name="NewDiaryEntry" 
          component={NewDiaryEntryScreen} 
          options={{ title: 'New diary' }} 
        />
        <Stack.Screen 
          name="PersonalDiary" 
          component={PersonalDiaryScreen} 
          options={{ title: 'My Diary' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
