import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#45377e',
    },
    title: {
        fontWeight: 'bold',
        marginTop: 20,
        fontSize: 40,
        color: '#ff9479'
    },
    logo: {
        flex: 1,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 25,
        overflow: 'hidden',
        backgroundColor: '#51408d',
        color: "white",
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 20,
    },
    button: {
        backgroundColor: '#da9c4f',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footer: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 15,
        color: '#ffffff'
    },
    footerLink: {
        color: "#da9c4f",
        fontWeight: "bold",
        fontSize: 16
    }
})
