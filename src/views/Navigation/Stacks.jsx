import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ConfigPage } from "../Windows/config.pages";
import { ProfilePage } from "../Config/Profile.window";
const Stack = createNativeStackNavigator();
export function ConfigStacks() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        gestureEnabled: true,
      }}
    >
      <Stack.Screen
        options={{
          gestureEnabled: true,
        }}
        name="HomeScreen"
        component={ConfigPage}
      />
      <Stack.Screen
        options={{
          gestureEnabled: true,
        }}
        name="Profile"
        component={ProfilePage}
      />
    </Stack.Navigator>
  );
}
