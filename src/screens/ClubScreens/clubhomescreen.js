import React, { Component, useState, useEffect } from 'react';
import {ImageBackground, StatusBar, StyleSheet, Linking, Text, View,
     SafeAreaView, Image,
     Button, TouchableOpacity,useWindowDimensions, ScrollView} from 'react-native';
import { Auth } from 'aws-amplify';
import { useRoute } from '@react-navigation/native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useNavigation} from '@react-navigation/native'
import rectangleicon from '../../../assets/images/rectangle.png'
import plusicon from '../../../assets/images/plus.png'
import * as ImagePicker from 'expo-image-picker';
const ClubHomeScreen = () => {
    const [image, setImage] = useState("///Users/arnavchowdhry/Library/Developer/CoreSimulator/Devices/0BC4A95F-705A-4529-BB1F-8AECB033A620/data/Containers/Data/Application/168E9B25-4739-44A0-ABE9-5B80DC5E8675/Library/Caches/ExponentExperienceData/%2540arnav_123%252Ftest1/ImagePicker/F67D812F-6CFF-457A-9B8E-5209218D974B.jpg");
    const [show_Hide, setShowHide] = useState('flex');
   
 
    const [text, setText] = useState('Hide Image Component');
 
    const letToggle = () => {
       
    if (show_Hide === 'flex') {
      setShowHide('none');
      setText('Show Image Component')
    } else {
      setShowHide('flex');
      setText('Hide Image Component')
    }
  }
 
    const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }

    letToggle()
  };
  const navigation = useNavigation()
  const route = useRoute()
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

  const signOut = async() => {
    navigation.goBack()
  }
    console.log("test")
    //console.log(show_Hide)
  //        <ImageBackground source={require('./Trombone/trombone.webp')} resizeMode="cover" style={styles.bgimage}>
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
    
        <Text style = {{ top:'1%', fontSize: RFPercentage(5.5), alignSelf: 'center', textAlign: 'center', color: '#000000', fontWeight: 'bold'}}>
         {schoolname} </Text>

        
        <Image 
        resizeMode="stretch"
        source={rectangleicon}
        style = {{height: '30%',
        width: '100%',
        alignSelf: 'center',
        marginTop: '15%',
        marginBottom: '10%',
        position:'absolute',
        display: show_Hide
       }}
        >
        </Image>
        <TouchableOpacity onPress={pickImage} style = {{top:'7%'}}>
        <Image 
        source={plusicon}
        onPress={pickImage} 
        //style = {[styles.rectangleimage, {height: '15%',width: '15%', marginBottom: '10%'}]}
        style = { {height: '30%',
        width: '20%',
        alignSelf: 'center',
        marginTop: '4%',
        display: show_Hide,
        marginBottom: '2%'
        }}
        >
        </Image>
        </TouchableOpacity>  
        <Image 
        resizeMode='contain'
      
        source={{uri: image}}
        onPress={pickImage} 
        //style = {[styles.rectangleimage, {height: '15%',width: '15%', marginBottom: '10%'}]}
        style = { {height: '50%',
        width: '100%',
        alignSelf: 'center',
        marginTop: '4%',
        display: (show_Hide == "flex") ? "none" : "",
        marginBottom: '2%'
        }}
        >
        </Image>
       
       <Text style = {styles.infofont}> President(s): 1997</Text>
       <Text style = {styles.infofont}> Meeting times: Weekly</Text>
       <Text style = {styles.infofont}> How To Sign Up: Form</Text>
       <Text style = {styles.infofont}> Average Time Commitment: 1997</Text>
       <Text style = {styles.infofont}> Founded: 1997</Text>
       <Text style = {styles.infofont}> Founded: 1997</Text>

      <View style = {styles.buttonStyle}>
        <Button color="#841584"
            title="See Reviews"
            onPress={() => navigation.navigate('SightRead')}
          />
      </View>
     
      <Text style={{color: 'blue', top: '13%', textAlign: 'center'}}
      onPress={() => Linking.openURL('https://forms.gle/G2HyrWXcyL7Udws26')}>
       Got any Feedback? We'd love to hear from you!
     </Text>
   
     

        </ScrollView>
               
     <Text
         onPress={signOut}
           style = {{
             width: '100%',
             textAlign: 'center',
             color: 'red',
             marginTop: 'auto',
             marginVertical: 20,
             fontSize: 20
           }}>
             Back
         </Text>
        </SafeAreaView>
       );
}

const styles = StyleSheet.create({
  buttonStyle: {
    top:'10%',
    alignSelf: 'stretch',
    backgroundColor: '#A6E4FF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: '5%'
},

container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
  },
    title: {
  
      color: 'black',
      fontSize: 32,
      fontWeight: "bold",
      letterSpacing: 3,
      
    },
  
  
   infofont: {
    fontSize: RFPercentage(3),
    marginTop: '10%'
  
   },

   text: {
    fontSize: RFValue(5)   
   }
  });
 

export default ClubHomeScreen;