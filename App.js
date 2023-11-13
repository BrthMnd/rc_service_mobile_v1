import React from "react";
import { Main } from "./src/main";
import { NativeRouter } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/store/store";
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <NavigationContainer>
          <NativeRouter>
            <Main />
          </NativeRouter>
        </NavigationContainer>
      </Provider>
    </>
  );
}
