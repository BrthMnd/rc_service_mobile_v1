const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  containerHead: {
    backgroundColor: "white",
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 20,
    boxShadow: "5px 5px 5px grey",
  },
  elementosContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
    boxShadow: "5px 5px 5px 6px grey",
  },
  containerPie: {
    width: "100%",
    padding: "20%",
    margin:0,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  titulo: {
    fontSize: 30,
    textAlign: "center",
  },
  icono: {
    color: "black",
    fontSize: 150,
    textAlign: "center",
  },
  items: {
    border: "1px solid black",
    margin: "10%",
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    boxShadow: "5px 5px 5px grey",
    backgroundColor: "white",
  },
  botones: {
    margin: "10%",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FDFEFE",
    color:"black",
    borderBottomWidth: 2
    
  },
});
