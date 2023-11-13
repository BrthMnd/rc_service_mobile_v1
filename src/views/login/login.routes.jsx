const { View, Button, TouchableOpacity } = require("react-native");
const { Text, TextInput, Avatar } = require("react-native-paper");
import { styles } from "./login.stylesheet";
import Logo from "../../../assets/LogoRc.png";
import { Formik, useField } from "formik";
import { SchemeLogin } from "../../helpers/Validation.form";
import { ApiPost } from "../../hooks/Api.hook";
import { URL_LOGIN } from "../../data/CONSTANT_DATA";
import AsyncStorage from "@react-native-async-storage/async-storage";
export function LogIn() {
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
    const result = await ApiPost(URL_LOGIN, values);
    await AsyncStorage.setItem("token", result.token);
    console.log(result);
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Avatar.Image size={150} style={styles.Avatar} source={Logo} />
        <Formik
          initialValues={InitialValuesLogin}
          validationSchema={SchemeLogin}
          style={{ justifyContent: "space-between", alignItems: "center" }}
          onSubmit={(values) => HandlePost(values)}
        >
          {({ handleChange, handleSubmit, values }) => {
            return (
              <View
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "50%",
                  paddingTop: 30,
                }}
              >
                <View
                  style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <FormikInputText props={{ label: "Usuario" }} name="email" />
                  <FormikInputText
                    props={{ label: "Contraseña", secureTextEntry: true }}
                    name="password"
                  />
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
                      ¿Olvidades tu contraseña? Recuperala aquí
                    </Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </Formik>
      </View>
    </View>
  );
}
