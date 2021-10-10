import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        display: "flex",
        height: "100%",
        backgroundColor: "#51408d"
    },

    loadingQuestions: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        width: 120,
        height: 120,
    },
    button: {
        backgroundColor: '#ff9479',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        marginTop: 10
    }, buttonTitle: {
        color: '#fdfcfe',
        fontSize: 16,
        fontWeight: "bold"
    }, text: {
        color: '#ffff'
    },
    output: {
        flex: 1, alignItems: "center", marginTop: 30
    },
    content : {
         alignItems: "center",
          fontSize: 25,
          color: "white",
          marginTop : 5
    }
})
