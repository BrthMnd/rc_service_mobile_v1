import React from "react";

import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    boderColor: "#999",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
});
export function StyledTextInput({ style = {}, ...props }) {
  const inputStyle = {
    ...styles.textInput,
    ...style,
  };
  return <TextInput style={inputStyle} {...props} />;
}
