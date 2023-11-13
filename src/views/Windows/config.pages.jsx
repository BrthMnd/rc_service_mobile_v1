import { Text, View, Touchable, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const ConfigPage = () => {
  const Navigator = useNavigation();
  const LogOut = async () => {
    AsyncStorage.removeItem("token");
  };
  return (
    <View>
      <Text>Config</Text>
      <Button onPress={() => Navigator.navigate("Profile")} title="Profile" />
      <Button title="Cerrar Sesión" onPress={LogOut} />
    </View>
  );
};
