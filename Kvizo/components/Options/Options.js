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

        const { navigate } = this.props.navigation;

        const register = () => {
            navigate('Register')
        }

        //for offline access
        const sneak = () => {
            navigate('KvizoHome', { user: "Sneaker" })
        }


        return (
            <View style={styles.container}>
                <Text style={styles.category}>Select Category</Text>

                <View style={{ flex: 1, width: '100%' }}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Questions', { category: 9 })}>
                        <Text style={styles.buttonTitle}>General Knowledge</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Questions', { category: 11 })}>
                        <Text style={styles.buttonTitle} >Films</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Questions', { category: 14 })}>
                        <Text style={styles.buttonTitle} >Television</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Questions', { category: 15 })}>
                        <Text style={styles.buttonTitle} >Video games</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Questions', { category: 12 })}>
                        <Text style={styles.buttonTitle} >Music</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Questions', { category: 10 })}>
                        <Text style={styles.buttonTitle} >Books</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Questions', { category: 23 })}>
                        <Text style={styles.buttonTitle} >History</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
