import React from "react";
import { Text, StyleSheet } from "react-native";
import { theme } from "../theme";

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    color: theme.colors.textPrimary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },

  subHeading: {
    fontSize: theme.fontWeights.normal,
  },
  textAlignCenter: {
    textAlign: "center",
  },
  cardCentered: {
    paddingTop: 10,
  },
});

export default function StyledText({
  children,
  align,
  color,
  fontSize,
  fontWeight,
  style,
  ...resOfProps
}) {
  const textStyles = [
    styles.text,
    color == "primary" && styles.colorPrimary,
    color == "secondary" && styles.colorSecondary,
    align == "center" && styles.textAlignCenter,
    fontSize == "subHeading" && styles.subHeading,
    fontWeight == "bold" && styles.bold,
    style,
  ];
  return (
    <Text style={textStyles} {...resOfProps}>
      {children}
    </Text>
  );
}
