import React from "react";
import { Main } from "./src/main";
import { NativeRouter } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  );
}
