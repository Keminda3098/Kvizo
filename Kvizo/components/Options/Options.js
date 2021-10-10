import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { firebase } from '../../firebase/config';
import styles from './OptionsStyle.js';

export default class Options extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    render() {

        const extraData = props.route.params.extraData;

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
                 <Text style={styles.category}>Select Category</Text>
            
                <View style={{ flex: 1, width: '100%' }}>
                    <TouchableOpacity style={styles.button}  onPress={ this.props.navigation.navigate('Questions',  {  extraData: extraData })}>
                        <Text style={styles.buttonTitle}>General Knowledge</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={ this.props.navigation.navigate('Questions',  { extraData: extraData})}>
                        <Text style={styles.buttonTitle} >Films</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={sneak}>
                        <Text style={styles.buttonTitle} >Television</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={sneak}>
                        <Text style={styles.buttonTitle} >Video games</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={sneak}>
                        <Text style={styles.buttonTitle} >Music</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={sneak}>
                        <Text style={styles.buttonTitle} >Books</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={sneak}>
                        <Text style={styles.buttonTitle} >History</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
