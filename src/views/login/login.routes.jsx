const { View, Button, TouchableOpacity } = require("react-native");
const {
  Text,
  TextInput,
  Avatar,
  Portal,
  Dialog,
} = require("react-native-paper");
import { useNavigation } from "@react-navigation/native";

import { styles } from "./login.stylesheet";
import Logo from "../../../assets/LogoRc.png";
import { Formik, useField } from "formik";
import { SchemeLogin } from "../../helpers/Validation.form";
import { ApiPost } from "../../hooks/Api.hook";
import { URL_LOGIN } from "../../data/CONSTANT_DATA";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { ModalComponent } from "../../components/modal/modal.component";
export function LogIn() {
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);
  const [err, setErr] = useState(null);
  const InitialValuesLogin = {
    email: "",
    password: "",
  };
  const FormikInputText = ({ name, props }) => {
    const [field, meta, helpers] = useField(name);

    return (
      <>
        <TextInput
          style={styles.inputs}
          value={field.value}
          onChangeText={(value) => helpers.setValue(value)}
          mode="outlined"
          {...props}
        />
        {meta.error && <Text style={{ color: "red" }}>{meta.error}</Text>}
      </>
    );
  };
  const HandlePost = async (values) => {
    try {
      const isValid = await SchemeLogin.validate(values);
      const result = await ApiPost(URL_LOGIN, values);
      console.log(result);

      if (result.response && result.response.status == 400) {
        setErr(result.response.data.response);
        setVisible(true);
        return;
      } else if (result.response && result.response.status == 404) {
        setErr(result.response.data);
        setVisible(true);
        return;
      }
      if (result.data && result.data.result.role == "Employed") {
        setErr("Tu rol no puede ingresar por la aplicación Movil.");
        setVisible(true);
        return;
      }

      AsyncStorage.setItem("token", result.data.token);
      navigation.replace("Home");
    } catch (error) {
      if (error.errors) {
        setErr(error.errors);
        setVisible(true);
        return;
      }
      console.log(error);
      setErr("error indefinido");
      setVisible(true);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Avatar.Image size={150} style={styles.Avatar} source={Logo} />
        <Formik
          initialValues={InitialValuesLogin}
          style={{
            alignItems: "center",
            height: "100%",
          }}
          onSubmit={(values) => HandlePost(values)}
        >
          {({ handleChange, handleSubmit, values }) => {
            return (
              <View
                style={{
                  justifyContent: "space-around",
                  alignItems: "center",
                  height: "100%",
                  paddingTop: 30,
                  width: "100%",
                }}
              >
                <View style={{ height: "10%" }} id="space"></View>
                <View
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FormikInputText props={{ label: "Usuario" }} name="email" />
                  <FormikInputText
                    props={{ label: "Contraseña", secureTextEntry: true }}
                    name="password"
                  />
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      console.log("registrar");
                    }}
                  >
                    <Text style={styles.linkText}>
                      ¿No tienes una cuenta? Regístrate aquí
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      console.log("registrar");
                    }}
                  >
                    <Text style={styles.linkText}>
                      Olvidaste tu contraseña? Recupérala aquí
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        </Formik>
      </View>
      <ModalComponent
        visible={visible}
        setVisible={setVisible}
        content={err}
        title={"Error al ingresar"}
      />
    </View>
  );
}
