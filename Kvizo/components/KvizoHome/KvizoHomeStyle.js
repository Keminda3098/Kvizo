import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#45377e",
    alignItems: "center",
    justifyContent: "center"
  },

  welcome: {
    fontSize: 22,
    fontWeight: "bold",
    backgroundColor: "#da9c4f",
    color: "white",
    padding: 10
  },

  button_kvizo: {
    backgroundColor: '#da9c4f',
    alignItems: 'center',
    minWidth : 300,
    justifyContent: 'center',
    paddingVertical: 17,
    paddingHorizontal: 32,
    borderRadius: 25,
    fontWeight: "bold",
    marginTop : 10
  },
  button: {
    backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    fontWeight: "bold",
    elevation: 3,
    marginTop : 10
  },
  text: {
    color: '#ffff',
    fontSize : 20
  },
  signout: {
    backgroundColor: "#9575b2",
    padding: 10,
    borderRadius: 10,
    margin: 10
  },
  instruction: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    marginTop: 15,
    lineHeight: 25
  }
})
