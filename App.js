import React from "react";
import { Main } from "./src/main";
import { NativeRouter } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/store/store";
import { PaperProvider, MD2LightTheme } from "react-native-paper";
const theme = {
  // Extend Material Design 2 theme

  ...MD2LightTheme, // or MD2DarkTheme

  // Specify a custom property
  myOwnProperty: true,

  // Specify a custom nested property
  colors: {
    ...MD2LightTheme.colors,
    myOwnColor: "#BADA55",
  },
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <NativeRouter>
              <Main />
            </NativeRouter>
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </>
  );
}
