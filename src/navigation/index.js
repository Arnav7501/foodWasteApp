import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SignInScreen from '../screens/SignInScreens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreens';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreens/NewPasswordScreen';
import HomeScreen from '../../HomeScreen';
import SchoolHomepageScreen from '../screens/SchoolHomepageScreens/SchoolHomepageScreen';
import Clubinterimscreen from '../screens/ClubScreens/clubinterimscreen'
import ClubHomeScreen from '../screens/ClubScreens/clubhomescreen'
import { Auth, Hub} from 'aws-amplify';

 
const Stack = createNativeStackNavigator()

const Navigation = () => {
  const [user, setUser] = useState(undefined)

    const checkuser = async() => {
      try { 
      const authuser = await Auth.currentAuthenticatedUser({bypassCache :true})
      setUser(authuser)
    } catch (e) {
      setUser(null)
      }
     
    }
  useEffect(() => {
    checkuser();
  }, [])

  useEffect(() => {
    const listener = (data) => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkuser()
      }
    }

    Hub.listen('auth', listener)
    return () => Hub.remove('auth', listener)
  }, [])



  if (user === undefined) {
    return (
      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    )
  }
  return (
    <NavigationContainer>
      
    <Stack.Navigator screenOptions={{headerShown: false}}>

        
        {user ? (
          <>
            <Stack.Screen 
            name = "Home" 
            component={HomeScreen} 
            />
            <Stack.Screen 
            name = "SchoolHomePage" 
            component={SchoolHomepageScreen} 
            options =  {{
              title: "SchoolHomePage"
            }}
            />
            <Stack.Screen 
            name = "clubinterimscreen" 
            component={Clubinterimscreen} 
            options =  {{
              title: "clubinterimscreen"
            }}
            />
             <Stack.Screen 
            name = "clubhomescreen" 
            component={ClubHomeScreen} 
            options =  {{
              title: "clubinterimscreen"
            }}
            />
           
        </>
        ) : (
          <>
          <Stack.Screen 
        name = "SignIn" 
        component={SignInScreen} 
        />
        <Stack.Screen 
        name = "SignUp" 
        component={SignUpScreen} 
        />
        <Stack.Screen 
        name = "ConfirmEmail" 
        component={ConfirmEmailScreen} 
        />
        <Stack.Screen 
        name = "ForgotPassword" 
        component={ForgotPasswordScreen} 
        />
        <Stack.Screen 
        name = "NewPassword" 
        component={NewPasswordScreen} 
        />
          
        </>
        )}
        
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;