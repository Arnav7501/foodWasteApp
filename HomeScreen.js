import React, { Component, useState, useEffect } from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image,ScrollView, Button, useWindowDimensions, Alert, ImageBackground} from 'react-native';
import {colors} from "./src/constants";
import Keyboard from "./src/components/Keyboard";
import { useNavigation} from '@react-navigation/native'
import {  Auth, Storage } from "aws-amplify";
import SearchableDropdown from 'react-native-searchable-dropdown';
import { TextInput } from 'react-native-gesture-handler';
import image2 from './assets/images/forestbackground.jpeg'
import Logo from './assets/images/house2.png'

import { DataStore } from '@aws-amplify/datastore';
import { SchoolArray } from './src/models';







const HomeScreen = () => { 
  const [items, setItems] = useState([])

  const update_Array = async(newname) => {
    await DataStore.save(
        new SchoolArray({
          name: newname
        })
      );
      //items.push({name: newname}) 
      get_data()
  }
  
  const get_data = async() => {
    const items1 = [
      { name: 'Irvington' },
    ];  
    console.log("Geting Data")
    const posts = await DataStore.query(SchoolArray);
    var arrayLength = posts.length;
    for (var i = 0; i < arrayLength; i++) {
      items1.push({name: posts[i].name}) 
  }  
  setItems(items1)
  }

  const navigation = useNavigation()
  const {fontScale} = useWindowDimensions(); 
  const styles = makeStyles(fontScale);
  const [newschoolname, setnewschoolname] = useState('');
  const {height} = useWindowDimensions(); 

  useEffect(() => {
    get_data()
  }, []);
  const signOut = () => {
    Auth.signOut()
  }
  
  
  
  
  
  return (
   // items.push({
    //  name: newschoolname}) 
    //<SafeAreaView style={styles.container}>
   // <ImageBackground source={image2} resizeMode="cover" style={styles.image}>
   
      <View style={styles.container}>
     
        <Text style={styles.titleText}>
          Find your School
        </Text>
        <Image source ={Logo}
        style = {[styles.logo, {height: height * 0.15}]}
        resizeMode = "contain" >
        </Image>

        <SearchableDropdown
          onTextChange={(text) => console.log(text)}
          //On text change listner on the searchable input
          onItemSelect={(item) => navigation.navigate('SchoolHomePage', {
            schoolname: JSON.stringify(item)
          })
        }
          //onItemSelect called after the selection from the dropdown
          containerStyle={{ padding: 5 }}
          //suggestion container style
          textInputStyle={{
            //inserted text style
            marginTop: '5%',
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#FAF7F6',
            borderRadius: 10
      
          }}
          itemStyle={{
            //single dropdown item style
            padding: 10,
            marginTop: 2,
            backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
            borderWidth: 1,
          }}
          itemTextStyle={{
            //text style of a single dropdown item
            color: '#222',
          }}
          itemsContainerStyle={{
            //items container style you can pass maxHeight
            //to restrict the items dropdown hieght
            maxHeight: '60%',
          }}
          items={items}
          //mapping of item array
          defaultIndex={2}
          //default selected item index
          placeholder="Name of School (City)"
          //place holder for the search input
          resetValue={false}
          //reset textInput Value with true and false state
          underlineColorAndroid="transparent"
          //To remove the underline from the android input
          
        />
        <Text style={styles.headingText} > Don't see your school? 
        Add it to the list </Text>

         <TextInput 
          style = {{
          top: '10%', 
          fontSize: 12,
          marginTop: '5%',
          padding: 12,
          borderWidth: 1,
          borderColor: '#ccc',
          backgroundColor: '#FAF7F6',
          borderRadius: 10
          
        }}
     
          placeholder = "Name of School (City)"
          onChangeText={newText => setnewschoolname(newText)
          }
          >

        </TextInput>
        < View style = {{top: '15%'}}>
          
        <Text style = {{
           width: '100%',
           textAlign: 'center',
           color: 'blue',
           fontSize: 25/fontScale
        }}
        onPress = {() => 
         {
          update_Array(newschoolname)
          Alert.alert(newschoolname, "was added successfully")
        }
        }>
        
          Add
        </Text>
        </View>
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
            Sign Out
        </Text>
        
     </View>
 // </ImageBackground>
   // </SafeAreaView>
    
  );
};

export default HomeScreen;

const makeStyles = fontScale => StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    padding: 10,
  },
  titleText: {
    padding: 8,
    fontSize: 25/fontScale,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headingText: {
    fontSize: 25/fontScale,
    top: '5%',
    textAlign: 'center',
    

  },
  logo:{
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    width: '70%',
    maxWidth: 300,
    maxHeight: 200
    
}
});
