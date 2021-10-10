import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './RegisterStyle';
import { firebase } from '../../firebase/config'

export default class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    render() {
        const { navigate } = this.props.navigation;

        const login = () => {
            navigate('Login')
        }

        const registerClick = () => {
            if (this.state.password !== this.state.confirmPassword) {
                alert("Passwords are not similar.")
                return
            }

            var email = this.state.email;
            var password = this.state.password;
            var fullName = this.state.fullName;

            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((response) => {
                    const uid = response.user.uid
                    const data = {
                        id: uid,
                        email,
                        fullName,
                    };
                    const usersRef = firebase.firestore().collection('users')
                    usersRef
                        .doc(uid)
                        .set(data)
                        .then(() => {
                            navigate('KvizoHome', { user: data })
                        })
                        .catch((error) => {
                            alert(error)
                        });
                })
                .catch((error) => {
                    alert(error)
                });
        }

        return (
            <View style={styles.container}>

                <Text style={styles.title}>Kvizo</Text>
                <Image style={{ width: 120, height: 120 }} source={require('../../assets/owl.png')}/>
                <View style={{ flex: 1, width: '100%' }} >
                    <TextInput style={styles.input} placeholder='Full Name' placeholderTextColor="#aaaaaa" onChangeText={(text) => this.setState({ fullName: text })} value={this.state.fullName} />
                    <TextInput style={styles.input} placeholder='E-mail' placeholderTextColor="#aaaaaa" onChangeText={(text) => this.setState({ email: text })} value={this.state.email} />
                    <TextInput style={styles.input} placeholder='Password' placeholderTextColor="#aaaaaa" secureTextEntry onChangeText={(text) => this.setState({ password: text })} value={this.state.password} />
                    <TextInput style={styles.input} placeholder='Confirm Password' placeholderTextColor="#aaaaaa" secureTextEntry onChangeText={(text) => this.setState({ confirmPassword: text })} value={this.state.confirmPassword} />
                    <TouchableOpacity style={styles.button} onPress={() => registerClick()}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>If you are already a member <Text onPress={login} style={styles.footerLink}>Log in</Text></Text>
                    </View>
                </View>
            </View>
        )
    }
}
