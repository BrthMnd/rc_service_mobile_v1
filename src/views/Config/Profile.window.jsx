import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
export function ProfilePage() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Ionicons name="person-circle-sharp" size={150} color="black" />
      <Text style={styles.title_name}>{user.name}</Text>
      <View>
        <Text>E-mail: {user.email}</Text>
        <Text>Documento: {user.cc}</Text>
        <Text>Telefono: {user.phone}</Text>
        <Text>Direccion: {user.direction}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title_name: { fontSize: "40px", fontFamily: "cursive" },
  text: {
    fontFamily: "",
  },
});
