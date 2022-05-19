import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  App: {
    alignItems: 'center',
  },
  
  div1: {
    backgroundColor: '#151F44',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  div2: {
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    
    width: '100%',
    flexDirection: 'row',
  },
  div3: {
    justifyContent: 'flex-end',
    width: '100%',
    alignItems: 'flex-start',
    padding: 20,
    textAlign: 'center',
  },
  container2: {
    flex: 2,
  },
  welcome: {
    textAlign: 'center',
    paddingBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 35,
    textAlign: 'center',
    marginTop: 20,
    padding: 10,
    fontFamily: "normal",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#A59F54",
    padding: 10,
    margin: 10,
    width: "99%",
    height: 80,
    flex: 1,
    justifyContent: 'center',
  },
  
  choicesbutton: {
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "lightblue",
    padding: 30,
    margin: 10,
    width: '60%',
    height: 20,
    flex: 0.15,
    
  }, 

  choicestext: {
    fontSize: 18,
    textTransform: "uppercase",
    textAlign: 'center',
    padding: 2,
  },
  choicessubtext: {
    fontSize: 12,
    textTransform: "uppercase",
    textAlign: 'center',
    padding: 2,
  } ,




  logincontainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loginimage: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "lightgrey",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    width: "80%",
    borderRadius: 30,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    textAlign: 'center',
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  adminbutton: {
    height: 30,
    marginBottom: 30,
    padding: 20,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#A59F54",
  },
});