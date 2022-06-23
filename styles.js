import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  //Home screen
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  App: {
    alignItems: "center",
  },
  div: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: '#151F44',
  },
  loginbtn: {
    color: '#fff',
    fontSize: 15,
    marginRight: 10,
    marginTop: 10,
    padding: 20,
  },
  div1: {
    backgroundColor: '#151F44',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  div2: {
    backgroundColor: '#fff',
    flex: 2,
    alignItems: 'center',
    padding: 20,
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




  // choicesbutton: {
  //   alignItems: "center",
  //   textAlign: "center",
  //   backgroundColor: "lightblue",
  //   padding: 30,
  //   margin: 10,
  //   width: '60%',
  //   height: 20,
  //   flex: 0.15,
    
  // },
  // choicestext: {
  //   fontSize: 18,
  //   textTransform: "uppercase",
  //   textAlign: 'center',
  //   padding: 2,
  // },
  // choicessubtext: {
  //   fontSize: 12,
  //   textTransform: "uppercase",
  //   textAlign: 'center',
  //   padding: 2,
  // } ,



  //Menu Screen
  menucontainer: {
    flex: 1,
    height: '100%',
    padding: 10,
    marginBottom: 10,
  },
  menutitlecontainer: {
    height: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    padding: 50,
  },
  menutitle: {
    fontSize: 50,
    textTransform: "uppercase",
    fontWeight: "bold",
    padding: 10,
    color: 'black',
  },

  tabcontainer: {
    flexDirection: 'row',
  },
tab: {
    width: '25%',
    height: 40,
    padding: 10,
    alignItems: "flex-start",
    color: 'black',
    backgroundColor: '#fff',
},


//Login Screen
logincontainer: {
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center",
},

image: {
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
  flex: 1,
  padding: 10,
  
},

forgot_button: {
  height: 30,
  marginBottom: 30,
  fontSize: 12,
},

admin_button: {
  height: 30,

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

  //Info Screen 
Infocontainer: {
  flex: 1,
  backgroundColor: "#fff",
  padding: 35,
  alignItems: "center",
},
Infoheadercontainer: {
  alignItems: "center",
  justifyContent: "center",
},
  Infoheader: {
    fontSize: 35,
    color: "black",
  
  },
infoheader2:{
    textTransform: 'uppercase',
    fontSize: 20,  
    marginBottom: 10,
  },

  GeneralInfocontainer: {
  padding: 10,
  width: '100%',
  marginTop: 50,
  marginBottom: 30,
  },
  GeneralInfoText:{
fontSize: 12, 
  },

faqcontainer: {
  padding: 10,
  width: '100%',
  marginBottom: 50,
},
faqquestion: {
  fontSize: 15,
  fontWeight: 10,
  marginTop: 20,
},
faqanswer: {
  fontSize: 12,
  marginTop: 10,
  
},


  updatescontainer:{
    padding: 10,
    height: 180,
    width: '100%',
    marginTop: 15,
    marginBottom: 100,
  },
  
 update: {
  borderTopWidth: 1,
  borderBottomWidth: 1,
  borderRightWidth: 0,
  borderLeftWidth: 0,
  borderColor: "grey",
  padding: 20,
 }
});