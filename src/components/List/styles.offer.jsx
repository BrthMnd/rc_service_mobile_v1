const { StyleSheet } = require("react-native");
export const styles = StyleSheet.create({
    description: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingTop: 10,
      alignItems: "center",
    },
    scroll: {
      width: "100%",
      height: "50px",
      textAlign: "center",
    },
    Title: {
      position: "absolute",
      border: "1px solid black",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      whiteSpace: "nowrap",
      top: "0%",
      fontWeight: "bold",
      backgroundColor:"white",
      padding: 5,
      borderRadius: "5px",
    },
    Item: {
      justifyContent: "center",
      alignItems: "center",
      
      paddingHorizontal: 5,
    },
    ContentGlobal: {
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      width: "40%",
    },
    Content: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "white",
      width: "95%",
      marginTop: "6%",
      marginLeft:"2.5%",
      marginBottom: "6%",
      padding: "10",
      fontFamily: "Arial",
      lineHeight: "1.5",
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderTopRightRadius: 20,
      boxShadow: "5px 5px 5px grey",
      border: "1px solid black",
    },
    // Card: {
    //   backgroundColor: "#dbdbdb",
    //   justifyContent: "space-around",
    //   paddingLeft: 5,
    //   paddingRight: 5,
    //   marginTop: 20,
    //   position: "relative",
    // },
    modal: {
      flex: 1,
  
      backgroundColor: "#000000b9",
    },
    modalContent: {
      backgroundColor: "#e2e2e2",
      padding: 40,
      width: "80%",
      borderRadius: 10,
      elevation: 5,
      alignItems: "center",
      top: "50%",
      left: "50%",
      transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
    },
    modalText: {
      fontSize: 18,
      marginBottom: 10,
      color: "black",
    },
    modalButton: {
      marginTop: 10,
    },
    description:{
      border: "1px solid black",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      fontWeight: "bold",
      backgroundColor:"#13DDEA",
      padding: 5,
      borderRadius: "5px",
      
    },
    descriptionText:{
    fontSize: 11,
    textAlign: "center",
    marginTop:5
    },
    boton:{
      border: "1px solid black",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      fontWeight: "bold",
      backgroundColor:"#14B538",
      padding: 8,
      borderRadius: "5px",
      color: "white"
    },
    info:{
      margin: 0,
      padding: 0,
      width:0,
  
    }
    
  });