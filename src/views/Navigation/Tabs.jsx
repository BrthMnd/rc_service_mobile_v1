import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
//
import { OffersPage } from "../Windows/offers.pages";
import { OffersAppliedPage } from "../Windows/offersApplied.pages";
import { ConfigStacks } from "./Stacks";
const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "purple",
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={OffersPage}
        options={{
          headerStyle: {},
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Applied"
        options={{
          tabBarLabel: "Aplicado",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="checkbox" size={size} color={color} />;
          },
        }}
        component={OffersAppliedPage}
      />
      <Tab.Screen
        name="Config"
        options={{
          tabBarLabel: "Configuración",
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="settings-sharp" size={size} color={color} />;
          },
        }}
        component={ConfigStacks}
      />
    </Tab.Navigator>
  );
}
