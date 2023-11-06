import { NavigationContainer } from "@react-navigation/native";
import { MyTabs } from "./Navigation/Tabs";

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
