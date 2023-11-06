import React from "react";

import { View, Text } from "react-native-web";
import { OffersPages } from "./components/ListOffers/Offers.list";
import Constants from "expo-constants";
import AppBar from "./components/appbar/appbar";
import { Routes, Route } from "react-router-native";
const Home = () => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};
export const Main = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" exact element={<OffersPages />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </View>
  );
};
