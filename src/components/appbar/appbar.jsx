import React from "react";
import { StyleSheet, View, ScrollView } from "react-native-web";
import StyledText from "../StyleText";
import Constants from "expo-constants";
import { theme } from "../../theme";
import { Link } from "react-router-native";
const styles = StyleSheet.create({
  text: {
    color: theme.appbar.textPrimary,
  },
  container: {
    backgroundColor: theme.colors.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
    flexDirection: "row",
    // justifyContent: "space-around",
    paddingHorizontal: 20,
  },
});
const AppBarTab = ({ active, children, to }) => {
  return (
    <Link to={to}>
      <StyledText style={{ paddingHorizontal: 20 }}>{children}</StyledText>
    </Link>
  );
};
const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab active={true} to="/home">
          Home
        </AppBarTab>
        <AppBarTab active={true} to="/">
          Ofertas
        </AppBarTab>
        <AppBarTab active={true} to="/">
          Ofertas
        </AppBarTab>
        <AppBarTab active={true} to="/">
          Ofertas
        </AppBarTab>
        <AppBarTab active={true} to="/">
          Ofertas
        </AppBarTab>
        <AppBarTab active={true} to="/">
          Ofertas
        </AppBarTab>
        <AppBarTab active={true} to="/">
          Ofertas
        </AppBarTab>
        <AppBarTab active={true} to="/">
          Ofertas
        </AppBarTab>
        <AppBarTab active={true} to="/">
          Ofertas
        </AppBarTab>
        <AppBarTab active={true} to="/">
          Ofertas
        </AppBarTab>
        <AppBarTab active={true} to="/">
          Ofertas
        </AppBarTab>
        <AppBarTab active={true} to="/">
          Ofertas
        </AppBarTab>
        <AppBarTab active={true} to="/">
          Ofertas
        </AppBarTab>
        <AppBarTab active={true} to="/">
          Ofertas
        </AppBarTab>
      </ScrollView>
    </View>
  );
};
export default AppBar;
