import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/home';
import SplashScreen from './src/screens/splashScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Splash'}>
      <Stack.Screen name={'Splash'} component={SplashScreen} />
      <Stack.Screen name={'Home'} component={Home} />

    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex:1}}>
        <AppStack />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
