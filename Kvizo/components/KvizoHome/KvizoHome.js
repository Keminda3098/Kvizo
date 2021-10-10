import React from "react";
import { Text,View,Image, Pressable} from "react-native";
import { firebase } from '../../firebase/config'
import styles from './KvizoHomeStyle';
import { withNavigation } from 'react-navigation';

class KvizoHome extends React.Component {

  constructor(props) {
    super(props);
  }

  signOutUser = ()=> {
    firebase.auth().signOut();
  }

  profile = ()=> {
    this.props.navigation.navigate('Profile',  { extraData: this.props.extraData })
  }

  kvizoOptions = (extraData)=> {
    this.props.navigation.navigate('Options',  { extraData: extraData })
  }

  render() {
    const fullName = this.props.extraData["fullName"];
  
    return (
      <View style={styles.container}>
        <Image  source={require("../../assets/owl.png")} style={{ width: 200, height: 205 }}/>
        <Text style={styles.welcome}>Hello {fullName}!</Text>
        <Text style={styles.instruction}>
          Kvizo will give you 5 Random Questions and based on your answers it will give you a Score.
        </Text>
        <Pressable style={styles.button_kvizo} onPress={() => this.kvizoOptions(this.props.extraData)} >
          <Text style={styles.text}>Lets Kvizo!</Text>
        </Pressable>
        <Pressable  style={styles.button_kvizo} onPress={() => this.profile()}  >
        <Text style={styles.text}>Profile </Text>
        </Pressable>
        <Pressable  style={styles.button_kvizo} onPress={() => this.signOutUser()}  >
        <Text style={styles.text}>Sign Out </Text>
        </Pressable>
      </View >
    );

  }
}

export default withNavigation(KvizoHome);