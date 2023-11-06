import React from "react";

import { View, Text } from "react-native";
import NavBar from "./views/navigation";

export const Main = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <NavBar />
    </View>
  );
};
