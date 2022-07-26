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
    padding: 15,
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
    margin: 8,
    width: "99%",
    height: 80,
    flex: 1,
    justifyContent: 'center',
  },
 btntext: {
    fontSize: 15,
  },
  
  // Admin home screen 
  btntexta: {
    fontSize: 18,
    textAlign: "center",
    padding: 15,
  },


// Choices screen (scrapped)
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
    padding: 20,
    marginBottom: 15,
  },
  menutitlecontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    padding: 10,
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

//admin 
editbutton: {
  width: 60,
  height: 40,
  marginTop: 10,
  marginBottom: 10,
  backgroundColor: 'lightblue',
  textAlign: 'center',
  padding: 10,
  color: 'white',
},

delbutton: {
  width: 60,
  height: 40,
  backgroundColor: 'red',
  textAlign: 'center',
  padding: 10,
  color: 'white',
},
//Login Screen
logincontainer: {
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center",
  padding: 20,
  height: '100%',
},

inputView: {
  backgroundColor: "lightgrey",
  borderRadius: 30,
  width: "80%",
  height: 45,
  marginBottom: 20,
  alignItems: "center",
},

TextInput: {
  height: 50,
  width: "80%",
  flex: 1,
  padding: 10,
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
},
loginheading: {
fontSize: 20,
padding: 10, 
marginBottom: 30,
fontFamily: "normal",
},

loginBtn: {
  width: "60%",
  borderRadius: 25,
  height: 50,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 30,
  backgroundColor: "#A59F54",

},
home_button: {
  height: 40,
  padding: 10,
  backgroundColor: 'lightblue',
},
signoutBtn: {
width: "50%",
borderRadius: 25,
  height: 50,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 30,
  backgroundColor: "lightblue",
},


  //Info Screen 
Infocontainer: {
  flex: 1,
  backgroundColor: "#fff",
  padding: 25,
  alignItems: "center",
},
image5: {
 height: 200,
 width: 250,
 marginBottom: 20,
 justifyContent: "center",
},
Infoheadercontainer: {
  justifyContent: "center",
  padding: 5,
},
  Infoheader: {
    marginTop: 10,
    color: "black",
    fontSize: 50,
    textTransform: "uppercase",
    fontWeight: "bold",
    
  },
infoheader2:{
    textTransform: 'uppercase',
    fontSize: 20,  
    marginBottom: 10,
  },
updatesheader: {
  textTransform: 'uppercase',
    fontSize: 20,  
    marginBottom: 10,
    marginLeft: 10,
},
  GeneralInfocontainer: {
  padding: 10,
  width: '100%',
  marginTop: 30,
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
  fontWeight: "bold",
  marginTop: 20,
},
faqanswer: {
  fontSize: 12,
  marginTop: 10,
  
},
  updatescontainer:{
    padding: 10,
    height: '100%',
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