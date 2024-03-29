import { StyleSheet } from 'react-native';

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
    fontSize: 20,
    marginRight: 10,
    marginTop: 20,
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



  //Menu Screen
  menucontainer: {
    flex: 1,
    height: '100%',
    padding: 10,
    marginBottom: 15,
  },
  menutitlecontainer: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
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
    alignItems: "center",
    color: 'black',
    backgroundColor: '#fff',
  },
  tabtext: {
    fontSize: 13,
  },

  // Admin 
  menuhelpcontainerA: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',

  },
  menuhelp: {
    fontSize: 20,
    color: 'grey',
    paddingLeft: 15,
  },
  icon2: {
    alignSelf: 'flex-start',
  },
  menucontainerA: {
    flex: 1,
    height: '100%',
    marginBottom: 15,
  },
  menutitlecontainerA: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingTop: 0,
  },
  menutitleA: {
    fontSize: 50,
    textTransform: "uppercase",
    fontWeight: "bold",
    padding: 10,
    color: 'black',
  },
  createmodalbtn: {
    width: 100,
    height: 50,
    marginBottom: 30,
    backgroundColor: 'green',
    textAlign: 'center',
    color: 'white',
    alignSelf: 'center',
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
  categorytext: {
    fontSize: 15,
    marginLeft: 10,
  },
  categorytextcategory: {
    marginLeft: 10,
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
    marginTop: 25,
    marginRight: 10,
  },
  create: {
    width: '100%',
    padding: 7,
    paddingBottom: 15,
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'center',
  },
  menucreatetext: {
    paddingLeft: 10,
    padding: 15,
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: "bold",
    textAlign: 'center',
  },
  buttontext: {
    textAlign: 'center',
  },
  
  //help
  helpcontainer: {
    flex: 1,
    marginTop: 50,
    margin: 10,
    height: '100%',
  },
  helpheadercontainer: {
    justifyContent: "center",
  },
  backheader: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,

  },
  backbutton: {
    height: 40,
    width: 65,
    backgroundColor: 'lightblue',
    marginLeft: 15,
    justifyContent: 'center',
  },
  helpheader: {
    color: "black",
    fontSize: 50,
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: 'left',
    padding: 10,
    paddingLeft: 10,
  },
  HelpText: {
    fontSize: 15,
    marginBottom: 10,
  },
  HelpText2: {
    fontSize: 15,
    marginLeft: 15,
    padding: 10,
  },
  helpheader2Red: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 10,
  },

  helpheader2Green: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  helpheader2Blue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    marginTop: 10,
  },
  HelpTextcontainer: {
    padding: 10,
    width: '100%',
    marginTop: 5,
    marginBottom: 20,
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
    fontFamily: "normal",
  },
  loginheadingwarning: {
    fontSize: 13,
    padding: 10,
    marginBottom: 30,
    fontStyle: 'italic',
    textAlign: 'center',
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


  //Info Screen 
  icon: {
    alignSelf: "flex-start",
    margin: 10,
    marginTop: 30,
  },

  Infocontainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  image5: {
    height: 200,
    width: '95%',
    marginBottom: 10,
    alignSelf: "center",
  },
  Infoheadercontainer: {
    justifyContent: "center",
    padding: 5,
    margin: 10,
  },
  Infoheader: {
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
  updatessubheader: {
    fontSize: 15,
    marginLeft: 10,
  },
  updatetext: {
    fontWeight: "bold",
    color: 'darkblue',
  },
  //admin 
  InfocontainerA: {
    backgroundColor: "#fff",
    padding: 15,
    height: '100%',
  },
  InfoheadercontainerA: {
    justifyContent: "center",
    padding: 5,
  },
  newsfeedheading: {
    justifyContent: "flex-start",
  },
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

  createupdatebutton: {
    width: '100%',
    padding: 10,
    backgroundColor: 'green',
  },
  updatebuttontext: {
    textAlign: 'center',
  },
  addupdate: {
    color: 'green',
    fontSize: 18,
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
 
  updatedelbutton: {
    padding: 10,
    alignSelf: "flex-end",
  },
});