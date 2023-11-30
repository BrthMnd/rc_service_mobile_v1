const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
 
  container: {
    justifyContent: "center",
    alignItems: "center",
  },


  tituloText: {
    color: "#424949",
    backgroundColor: '#FDFEFE',
    textAlign: "center",
    marginTop: 20,
    fontSize: 37,
    fontWeight: "bold",
    borderRadius: 5,
    paddingVertical: 40,
    paddingHorizontal: 50,
    
  },
botonesContainer:{
  marginTop: 50,
},
  botones:{
    marginTop: 16,
    marginBottom: 16,
    paddingVertical: 8,
    paddingHorizontal: 60,
    borderBottomWidth: 3,
    borderColor: '#20232a',
    backgroundColor: '#FDFEFE',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    color:"#424949"
  }
});
