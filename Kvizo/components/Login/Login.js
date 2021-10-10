import React from 'react';
import { Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { firebase } from '../../firebase/config';
import styles from './LoginStyle';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    render() {
        const { navigate } = this.props.navigation;

        const register = () => {
            navigate('Register')
        }

        //for offline access
        const sneak = () => {
            navigate('KvizoHome', { user: "Sneaker" })
        }

        const clickLogin = () => {

            const email = this.state.email;
            const password = this.state.password;

            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((response) => {
                    const userCollection = firebase.firestore().collection('users')
                    userCollection.doc(response.user.uid).get().then(collectionDoc => {
                        if (!collectionDoc.exists) {
                            alert("This user is not available")
                            return;
                        }
                        const user = collectionDoc.data()
                        navigate('KvizoHome', { user: user })
                    })
                        .catch(error => {
                            alert(error)
                        });
                })
                .catch(error => {
                    alert(error)
                })
        }

        return (
            <View style={styles.container}>
                <Text style={{ fontWeight: 'bold', marginTop: 20, fontSize: 40, color: '#ff9479' }}>Kvizo</Text>
                <Image style={{ width: 120, height: 120 }} source={require('../../assets/owl.png')} />
                <View style={{ flex: 1, width: '100%' }} >
                    <TextInput style={styles.input} placeholder='E-mail' placeholderTextColor="#aaaaaa" onChangeText={(text) => this.setState({ email: text })} value={this.state.email} />
                    <TextInput style={styles.input} placeholder='Password' placeholderTextColor="#aaaaaa" secureTextEntry onChangeText={(text) => this.setState({ password: text })} value={this.state.password} />
                    <TouchableOpacity style={styles.button} onPress={() => clickLogin()}>
                        <Text style={styles.buttonTitle}>Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={sneak}>
                        <Text style={styles.buttonTitle} >Sneak In</Text>
                    </TouchableOpacity>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Don't have an account? <Text onPress={register} style={styles.footerLink}>Sign up</Text></Text>
                    </View>
                </View>
            </View>
        )
    }
}
