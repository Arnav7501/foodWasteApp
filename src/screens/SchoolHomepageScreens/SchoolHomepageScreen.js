import React, {useState} from 'react';
import {Alert, TextInput, View, Text, Image, StyleSheet,
     useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native'
import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { useRoute } from '@react-navigation/native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation} from '@react-navigation/native'


const SchoolHomepageScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const schoolname1 = route.params.schoolname;
    var schoolname = ""
  
    for(let i = 9; i < schoolname1.length; i++){
        if (schoolname1[i] != "\"" && schoolname[i+1] != "}") {
            schoolname += schoolname1[i]
        }
        else {
            break
        }
    }

    const goback = () => {
        navigation.goBack()
    }

   

    console.log(schoolname)
    return (
       <SafeAreaView >
             <Text style = {{
                fontSize: 40,
                fontWeight: 'bold',
                alignSelf: 'center',
                textAlign: 'center'
  
                
             }}>{schoolname}</Text>
   

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('clubinterimscreen', {
              schoolname: schoolname
            })
          }
            >
            
            <Text style = {styles.buttonFont}>Clubs</Text>
            <Image
            source={require('../../../assets/images/computericon.png')}
            style={styles.buttonImageIconStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}>
            
            <Text style = {styles.buttonFont}>Teachers</Text>
            <Image
            source={require('../../../assets/images/teachericon.png')}
            style={styles.buttonImageIconStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}>
             
            <Text style = {styles.buttonFont}>Sports</Text>
            < Image
            source={require('../../../assets/images/clubicon.png')}
            style={styles.buttonImageIconStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}>
               
            <Text style = {styles.buttonFont}>Courses</Text>
            < Image
            source={require('../../../assets/images/coursesicon.png')}
            style={styles.buttonImageIconStyle}
            />
          </TouchableOpacity>
          
        </SafeAreaView>
      );
    };



export default SchoolHomepageScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 0
    },
    button: {
      flexDirection: 'row',
      alignItems: "center",
      backgroundColor: "#ffffff",
      padding: 10,
      height: "23%",
      justifyContent: 'center',
      borderColor: "#000000",
      borderWidth: 2,
    },
    countContainer: {
      alignItems: "center",
      padding: 10,
      
    },

    buttonFont: {
        fontSize: RFPercentage(8)
    },
    buttonImageIconStyle: {
      flexDirection: 'row',
      marginRight: '0%',
      height: '90%',
      width: '25%',
      resizeMode: 'stretch',
      marginLeft: 'auto',
      justifyContent: 'flex-start',
      
    },
  });