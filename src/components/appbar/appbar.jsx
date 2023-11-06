import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import StyledText from "../StyleText";
import Constants from "expo-constants";
import { theme } from "../../theme";
import { useLocation, Link } from "react-router-native";
const styles = StyleSheet.create({
  text: {
    color: theme.appbar.textPrimary,
  },
  container: {
    width: "100vw",
    backgroundColor: theme.colors.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  active: {
    color: "#ffffff",
  },
  scroll: {
    paddingHorizontal: 10,
    // justifySelf: "space-around",
  },
});
const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation();

  const active = pathname == to;

  const isActive = [styles.text, styles.scroll, active && styles.active];
  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyledText fontWeight="bold" style={isActive}>
        {children}
      </StyledText>
    </Link>
  );
};
const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab to="/home">Home</AppBarTab>
        <AppBarTab to="/ofertas">Ofertas</AppBarTab>
        <AppBarTab to="/">Login</AppBarTab>
      </ScrollView>
    </View>
  );
};
export default AppBar;
