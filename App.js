import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import LoginScreen from './src/LoginScreen';
import SignupScreen from './src/SignupScreen';
import BannerScreen from './src/BannerScreen';

const App =()=> {
  
  const Stack= createNativeStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HomeScreen}>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="SignupScreen" component={SignupScreen}/>
        <Stack.Screen name="BannerScreen" component={BannerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}
export default App;


