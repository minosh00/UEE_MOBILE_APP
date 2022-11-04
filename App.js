import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MainScreen from './Screens/MainScreen';
import AllJobs from './Screens/jobs/AllJobs';
import LoginScreen from './Screens/Auth/LoginScreen';
import RegisterScreen from './Screens/Auth/RegisterScreen';
import Dashboard from './Screens/Auth/Dashborad';
import Profile from './Screens/Auth/Profile';
import CreateJob from './Screens/jobs/CreateJob';
import UpdateJobVacancyScreen from './Screens/jobs/UpdateJobVacancyScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
         <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home Page' component={MainScreen} />
        <Stack.Screen name='All jobs' component={AllJobs} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Dashboard' component={Dashboard} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='CreateJob' component={CreateJob} />
        
        <Stack.Screen name='UpdateJobVacancy' component={UpdateJobVacancyScreen} />
        
        


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
