import React from "react";

import { View, Text } from "react-native";
import { OffersPages } from "./components/ListOffers/Offers.list";
import Constants from "expo-constants";
import AppBar from "./components/appbar/appbar";
import { Routes, Route } from "react-router-native";
import LoginPage from "./views/Login.views";
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
        <Route path="/Login" exact element={<LoginPage />} />
        <Route path="/ofertas" exact index element={<OffersPages />} />
        <Route path="/home" exact element={<Home />} />
      </Routes>
    </View>
  );
};
