import { StyleSheet } from 'react-native'

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
    alignContent: 'center',
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
  createmodalbtn: {
    width: 100,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    backgroundColor: 'green',
    textAlign: 'center',
    color: 'white',
  },
  additemtext: {
    textAlign: 'center',
    padding: 15,
  },
  buttonStyleContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
  },
  editbutton: {
    width: 70,
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'lightblue',
    textAlign: 'center',
    padding: 10,
    color: 'white',
  },

  delbutton: {
    width: 70,
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'red',
    textAlign: 'center',
    padding: 10,
    color: 'white',
  },
  createbutton: {
    width: '100%',
    height: 40,
    backgroundColor: 'green',
    textAlign: 'center',
    padding: 10,
    color: 'white',
    marginLeft: 10,
    marginTop: 8,
    marginRight: 10,
  },
  create: {
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'center',
  },
  menucreatetext: {
    paddingLeft: 10,
    padding: 15,
    textAlign: 'center',
  },
  buttontext: {
    textAlign: 'center',
  },

  //Login Screen
  logincontainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    height: '100%',
  },

  inputView: {
    backgroundColor: "lightgrey",
    borderRadius: 30,
    width: "100%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    width: "100%",
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
    marginBottom: 30,

  },
  // home_button: {
  //   height: 40,
  //   padding: 10,
  //   backgroundColor: 'lightblue',
  // },
  // signoutBtn: {
  // width: "50%",
  // borderRadius: 25,
  //   height: 50,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginTop: 30,
  //   backgroundColor: "lightblue",
  // },


  //Info Screen 
  Infocontainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 25,
    alignItems: "center",
  },
  image5: {
    height: 200,
    width: '100%',
    marginBottom: 10,
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
    textAlign: 'left',

  },
  infoheader2: {
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
    marginTop: 20,
    marginBottom: 20,
  },

  GeneralInfoText: {
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
  updatescontainer: {
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
  },

  //admin 
  addupdatecontainer: {
    padding: 10,
  },
  addupdatec: {
    height: 300,
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  ContainerStyle: {
    backgroundColor: 'white',
    padding: 20,
    alignContent: 'center',
    justifyContent: 'center',
  },
  createupdatebutton: {
    width: '100%',
    padding: 10,
    backgroundColor: 'green',
  },
  updatebuttontext: {
    textAlign: 'center',
  },
  addupdate: {
    color: 'lightblue',
    fontSize: 15,
    textDecorationLine: 'underline'
  },
  home_button: {
    margin: 15,
    padding: 10,
    backgroundColor: 'lightblue',
    color: 'black',
    width: 100,
    textAlign: 'center',
  },
});