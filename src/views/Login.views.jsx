import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Formik, useField } from "formik";
import { StyledTextInput } from "../assets/stylesheets/styles.TextInputs";
import StyledText from "../components/StyleText";
import { ValidationScheme } from "../helpers/validation.form";
let initialValue = {
  email: "",
  password: "",
};
const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  error: {
    color: "red",
    fontSize: 14,
    marginHorizontal: 20,
  },
});

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  console.log(meta.error);
  console.log(name);
  return (
    <>
      <StyledTextInput
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
};

export default function LoginPage() {
  return (
    <Formik
      validationSchema={ValidationScheme}
      initialValues={initialValue}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue placeholder="email" name="email" />
            <FormikInputValue placeholder="password" name="password" />
            <Button onPress={handleSubmit} title="Login" />
          </View>
        );
      }}
    </Formik>
  );
}
