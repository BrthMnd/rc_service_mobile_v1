import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
//
import { OffersPage } from "../Windows/offers.pages";
import { OffersAppliedPage } from "../Windows/offersApplied.pages";
import { ConfigStacks } from "./Stacks";
import { ApiGet } from "../../hooks/Api.hook";
import { URL_OFFERS } from "../../data/CONSTANT_DATA";
import { useDispatch, useSelector } from "react-redux";
import {
  ChangeError,
  ChangeLoading,
  ChangeOffers,
} from "../../features/offers.slice";

const Tab = createBottomTabNavigator();

export function MyTabs() {
  const dispatch = useDispatch();
  const [data, loading, error] = ApiGet(URL_OFFERS);
  const reload = useSelector((state) => state.reload.reload);
  if (error) {
    dispatch(ChangeError());
  } else if (data) {
    dispatch(ChangeOffers(data));
    dispatch(ChangeLoading(loading));
  }

  return (
    <Tab.Navigator
      key={reload}
      screenOptions={{
        tabBarActiveTintColor: "purple",
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={OffersPage}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Aplicando"
        component={OffersAppliedPage}
        options={{
          tabBarLabel: "Aplicado",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="checkbox" size={size} color={color} />;
          },
        }}
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
