import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#45377e',
      },
      title: {
    
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    scrollView: {
      marginHorizontal: 20,
    },
      welcome: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        padding: 10
      },
      buttonContainer: {
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
      imageContainer: {
        padding: 20
      },
      image: {
        width: 300,
        height: 300,
        resizeMode: 'cover',
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "#9932CC"
      },
      logo: {
        flex: 1,
        alignSelf: "center",
        margin: 40,
        minWidth: 300
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
      footerView: {
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
      },
      camera: {
        width: 300,
        height: 300,
      },
      buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
      }
    
})
