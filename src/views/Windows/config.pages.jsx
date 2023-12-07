import { Text, View, Touchable, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./Estilos/config.style";
export const ConfigPage = () => {
  const Navigator = useNavigation();
  const LogOut = async () => {
    AsyncStorage.removeItem("token");
    console.log("☣ Token Eliminated");
    location.reload();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.tituloText}>Configuración</Text>
      <View style={styles.botonesContainer}>
        <Text
          style={styles.botones}
          title="Ver Perfil"
          onPress={() => Navigator.navigate("Profile")}
        >
          Perfil
        </Text>
        <Text style={styles.botones} title="Ver calificaciones" onPress={() => Navigator.navigate("Calificacion")}>
          Ver calificaciones
        </Text>
        <Text style={styles.botones} title="Cerrar Sesión" onPress={LogOut}>
          Cerrar sesión
        </Text>
      </View>
    </View>
  );
};
