import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useNavigation} from '@react-navigation/native'
import SignInScreen from '../screens/SignInScreens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreens';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreens/NewPasswordScreen';
import HomeScreen from '../../HomeScreen';
import SchoolHomepageScreen from '../screens/SchoolHomepageScreens/SchoolHomepageScreen';
import Clubinterimscreen from '../screens/ClubScreens/clubinterimscreen'
import ClubHomeScreen from '../screens/ClubScreens/clubhomescreen'
import ClubEditScreen from '../screens/ClubScreens/clubeditscreen'
import CreatePostScreen2 from '../screens/ClubScreens/clubreviewscreen';
import FeedScreen2 from '../screens/ClubScreens/clubreviewfeed';
import FeedPost from '../screens/ClubScreens/clubpostscreen';
import { Auth, Hub} from 'aws-amplify';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome, AntDesign, Entypo, MaterialIcons} from "@expo/vector-icons";

 
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

const Navigation = () => {
  const [user, setUser] = useState(undefined)

    const checkuser = async() => {
      try { 
      const authuser = await Auth.currentAuthenticatedUser({bypassCache :true})
      setUser(authuser)
      console.log("auth, ", authuser)
    } catch (e) {
      setUser(null)
      console.log("auth," , authuser)
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
  
  function MyTabs() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen 
            name = "Home" 
            component={HomeScreen} 
            options={{ headerShown: false }}
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
              title: "ClubHomeScreen"
            }}
            />
            <Stack.Screen 
            name = "clubeditscreen" 
            component={ClubEditScreen} 
            options =  {{
              title: "clubeditscreen"
            }}
            />
             <Stack.Screen 
            name = "clubreviewscreen" 
            component={CreatePostScreen2} 
            options =  {{
              title: "clubreviewscreen"
            }}
            />
               <Stack.Screen 
            name = "clubfeedscreen" 
            component={FeedScreen2} 
            options =  {{
              title: "clubfeedscreen"
            }}
            />
              <Stack.Screen 
            name = "clubfeedpost" 
            component={FeedPost} 
            options =  {{
              title: "clubfeedpost"
            }}
            />
           
      </Stack.Navigator>
    );
  }


  return (
    <NavigationContainer>

    
        {user ? (
          <Tab.Navigator>
          <>
          <Tab.Screen name="Teachers" component={MyTabs}   
          options={{ headerShown: false,
           tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="person"
                size={24}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
              />
            );
          },
          }}/>     
          
          <Tab.Screen name="Sport" component={MyTabs}   
          options={{ headerShown: false,
           tabBarIcon: (tabInfo) => {
            return (
              <FontAwesome
                name="soccer-ball-o"
                size={24}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
              />
            );
          },
          }}/>   
          <Tab.Screen name="home" component={MyTabs}   
          options={{ headerShown: false,
           tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="md-home"
                size={24}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
              />
            );
          },
          }}/>       
          <Tab.Screen name="Courses" component={MyTabs}   
          options={{ headerShown: false,
           tabBarIcon: (tabInfo) => {
            return (
              <Entypo
                name="book"
                size={24}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
              />
            );
          },
          }}/>   

           <Tab.Screen name="Clubs" component={MyTabs}   
          options={{ headerShown: false,
           tabBarIcon: (tabInfo) => {
            return (
              <MaterialIcons
                name="computer"
                size={24}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
              />
            );
          },
          }}/>       
         
         
        </>
          </Tab.Navigator>    
        ) : (
          <Stack.Navigator screenOptions={{headerShown: false}}>
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
        </Stack.Navigator>
        )}
  
   
    </NavigationContainer>
  );
}

export default Navigation;