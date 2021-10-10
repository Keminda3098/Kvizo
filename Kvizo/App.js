import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, View,ActivityIndicator } from "react-native";
import { firebase } from './firebase/config'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './components/Login/Login';
import KvizoHome from './components/KvizoHome/KvizoHome';
import Questions from "./components/Questions/Questions";
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import Options from './components/Options/Options';

const Stack = createStackNavigator();

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      user: null

    };
  }
  componentDidMount() {

    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            this.setState({ loading: false })
            this.setState({ user: userData })
          })
          .catch((error) => {
            this.setState({ loading: false })
          });
      } else {
        this.setState({ loading: false })
        this.setState({ user: null })

      }
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loadingQuestions}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )
    }

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="KvizoHome">
          {this.state.user != null ? (
            <>
              <Stack.Screen name="KvizoHome">
                {props => <KvizoHome {...props} extraData={this.state.user} options={{ title: 'Kvizo!' }} />}
              </Stack.Screen>
              <Stack.Screen name="Questions">
                {props => <Questions {...props} extraData={this.state.user} options={{ title: 'Kvizo!' }} />}
              </Stack.Screen>
              <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
              <Stack.Screen name="Options" component={Options} options={{ title: 'Options' }} />
            </>) : (
            <>
              <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
              <Stack.Screen name="Register" component={Register} options={{ title: 'Register' }} />
              <Stack.Screen name="Questions">
                {props => <Questions {...props} extraData={null} options={{ title: 'Kvizo!' }} />}
              </Stack.Screen>
            </>)}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    marginTop: 22,
  },

  welcome: {
    fontSize: 22,
    fontWeight: "bold"
  },

  paragraph: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    padding: 10,
    marginTop: 15,
    lineHeight: 25
  }
});
