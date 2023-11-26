const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  containerHead: {
    backgroundColor: "#EAEDED",
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 20,
  },
  elementosContainer: {
    backgroundColor: "#EAEDED",
    flexDirection: "row",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
  },
  containerPie: {
    width: "100%",
    padding: "20%",
    margin:0,
    flexDirection: "row",
    backgroundColor: "#EAEDED",
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
    margin: "10%",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#F2F3F4",
  },
  botones: {
    margin: "10%",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FDFEFE",
    color:"#AEB6BF",
    borderBottomWidth: 2
    
  },
});
