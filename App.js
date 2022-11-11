import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import MainScreen from './Screens/MainScreen';
import LoginScreen from './Screens/Auth/LoginScreen';
import RegisterScreen from './Screens/Auth/RegisterScreen';
import Dashboard from './Screens/Auth/Dashborad';
import Profile from './Screens/Auth/Profile';

import AllJobs from './Screens/Jobs/AddJob/AllJobs';
import CreateJob from './Screens/Jobs/AddJob/CreateJob';
import UpdateJobVacancyScreen from './Screens/Jobs/AddJob/UpdateJobVacancyScreen';

import DisplayAllJobsScreen from './Screens/Jobs/ApplyJob/DisplayAllJobsScreen';
import ApplyJob from './Screens/Jobs/ApplyJob/ApplyJob';
import ViewJob from './Screens/Jobs/ApplyJob/ViewJob';
import AppliedJobs from './Screens/Jobs/ApplyJob/AppliedJobs';
import UpdateApplication from './Screens/Jobs/ApplyJob/UpdateApplication';

import AddNewTranningProgram from './Screens/Trainning/AddTrainning/AddNewTranningProgram';
import AllTrainningProgramScreen from './Screens/Trainning/AddTrainning/AllTrainningProgramScreen';
import UpdatePrograms from './Screens/Trainning/AddTrainning/UpdatePrograms';

import ApplyProgram from './Screens/Trainning/ApplyProgram';
import AppliedPrograms from './Screens/Trainning/AppliedPrograms';



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
        <Stack.Screen name='DisplayAllJobs' component={DisplayAllJobsScreen} />
        <Stack.Screen name='ApplyJob' component={ApplyJob} />
        <Stack.Screen name='ViewJob' component={ViewJob} />
        <Stack.Screen name='AppliedJobs' component={AppliedJobs} />
        <Stack.Screen name='AllTrainningProgramScreen' component={AllTrainningProgramScreen} />
        <Stack.Screen name='ApplyProgram' component={ApplyProgram} />
        <Stack.Screen name='UpdateApplication' component={UpdateApplication} />
        <Stack.Screen name='UpdateProgram' component={UpdatePrograms} />
        <Stack.Screen name='AddProgram' component={AddNewTranningProgram} />
        <Stack.Screen name='AppliedPrograms' component={AppliedPrograms} />
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
