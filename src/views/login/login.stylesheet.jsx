const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
  inputs: {
    width: "90%",
    marginTop: 10,
  },
  text: {},
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "grey",
    height: "100vh",
  },
  Avatar: {
    position: "absolute",
    top: -50,
    zIndex: 100,
  },
  card: {
    width: "80vw",
    height: "80vh",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    position: "relative",
    shadowColor: "#000", // Color de la sombra
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
    shadowOpacity: 0.3, // Opacidad de la sombra
    shadowRadius: 2, // Radio de la sombra
    elevation: 5, // Solo para Android
  },
  button: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    width: "80%",
    alignSelf: "center",
    position: "absolute",
    bottom: "-40%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  linkText: {
    color: "#3498db", // Color azul para indicar un enlace
    textAlign: "center",
    marginTop: 20,
    fontSize: 12,
    fontWeight: "bold",
  },
});
