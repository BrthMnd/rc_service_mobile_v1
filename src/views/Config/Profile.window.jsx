import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./Estilos/Profile.style";
import { useNavigation } from "@react-navigation/native";

export function ProfilePage() {
  const Navigator = useNavigation();
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <View style={styles.container}>
      <View style={styles.containerHead}>
        <Ionicons style={styles.icono} name="person-circle-sharp" />
        <Text style={styles.titulo}>{user.name}</Text>
      </View>

      <View style={styles.elementosContainer}>
        <View>
          <Text style={styles.items}>E-mail: {user.email}</Text>
          <Text style={styles.items}>Documento: {user.cc}</Text>
        </View>
        <View>
          <Text style={styles.items}>Telefono: {user.phone}</Text>
          <Text style={styles.items}>Direccion: {user.direction}</Text>
        </View>
      </View>
      <View style={styles.containerPie}>
        <Text style={styles.botones}>Actualizar</Text>
        <Text style={styles.botones} onPress={() => Navigator.navigate("Calificacion")}>Calificaciones</Text>
      </View>
    </View>
  );
}
