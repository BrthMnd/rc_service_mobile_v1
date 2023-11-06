import { Text, View, Touchable, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
export const ConfigPage = () => {
  const Navigator = useNavigation();
  return (
    <View>
      <Text>Config</Text>
      <Button onPress={() => Navigator.navigate("Profile")} title="Profile" />
    </View>
  );
};
