import React, { useState } from 'react';
import { View, Text, Alert} from 'react-native';
import MapView, { Marker   } from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';


const User_Home = () => {
  const navigation = useNavigation()
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });


  return (
    <View style={{ flex: 1 }}>
        <GooglePlacesAutocomplete
        placeholder="Enter your home's name here"
        minLength={2}
        autoFocus={false}
        returnKeyType={'search'}
        listViewDisplayed="auto"
        fetchDetails
        onPress={(data, details = null) => {
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          })
          console.log("region", region)
        
        }}
        query={{
          key: 'AIzaSyDi6SW6cNK2Z9Z8eU1vsa9YiHOHYm3UAQU',
          language: 'en',
        }}
        nearbyPlacesAPI="GoogleReverseGeocoding"
        debounce={200}
      />
        <GooglePlacesAutocomplete
        placeholder="Enter your school's name here"
        minLength={2}
        autoFocus={false}
        returnKeyType={'search'}
        listViewDisplayed="auto"
        fetchDetails
        onPress={(data, details = null) => {
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          })
          console.log("region", region)
        
        }}
        query={{
          key: 'AIzaSyDi6SW6cNK2Z9Z8eU1vsa9YiHOHYm3UAQU',
          language: 'en',
        }}
        nearbyPlacesAPI="GoogleReverseGeocoding"
        debounce={200}
      />
     {navigation.navigate("carpool", {region: region})}
    </View>
  )


};

export default User_Home;
