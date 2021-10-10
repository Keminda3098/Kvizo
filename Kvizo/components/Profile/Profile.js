
import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from "../Profile/ProfileStyle";
import * as ImagePicker from 'expo-image-picker';

export default function Profile(props) {

  const param = props.route.params.extraData;
  const fullName = param.fullName;
  const email = param.email;

  const [pickedImagePath, setPickedImagePath] = useState('');
  const showImagePicker = async () => {

    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }
  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("No Access to Camera");
      return;
    }
    const result = await ImagePicker.launchCameraAsync();

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {pickedImagePath !== '' ? (<Image source={{ uri: pickedImagePath }} style={styles.image} />) : (<Image source={require("../../assets/profile-dummy3.png")} style={styles.image} />)}
        </View>
        <Text style={{ fontWeight: 'bold', marginTop: 20, fontSize: 15, color: '#ff9479' }}>Upload Your Photo</Text>
        <Text style={styles.welcome}>{fullName} </Text>
    

        <Text style={styles.welcome}>Your Best Score : 67 </Text>
        <View style={{ width: '100%' }} >
        <TouchableOpacity style={styles.button} onPress={showImagePicker}   >
          <Text style={styles.buttonText}>Select an image</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={openCamera} >
          <Text style={styles.buttonText}>Open camera</Text>
        </TouchableOpacity>
        </View>
        <View style={{ width: '100%' }} >
          <TextInput style={styles.input} placeholder='Full Name' placeholderTextColor="#aaaaaa" value={fullName} />
          <TextInput style={styles.input} placeholder='E-mail' placeholderTextColor="#aaaaaa" value={email} />
          <TextInput style={styles.input} placeholder='Current Password' placeholderTextColor="#aaaaaa" secureTextEntry />
          <TextInput style={styles.input} placeholder='New Password' placeholderTextColor="#aaaaaa" secureTextEntry />
          <TextInput style={styles.input} placeholder='Confirm New Password' placeholderTextColor="#aaaaaa" secureTextEntry />
          <TouchableOpacity style={styles.button} onPress={() => UpdateClick()}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  );
}
