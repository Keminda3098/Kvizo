import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#45377e',
    },
    title: {

    },
    logo: {
        flex: 1,
        alignSelf: "center",
        margin: 40,
        minWidth : 300
    },
    input: {
        height: 48,
        borderRadius: 25,
        overflow: 'hidden',
        backgroundColor: '#51408d',
        color :"white",
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#c0826c',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: '#fdfcfe',
        fontSize: 16,
        fontWeight: "bold"
    },
    footer: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#fdfcfe'
    },
    footerLink: {
        color: "#fdfcfe",
        fontWeight: "bold",
        fontSize: 16
    }
})
