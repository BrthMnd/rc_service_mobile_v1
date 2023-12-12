import React, { useEffect, useState } from "react";
import { LogIn } from "./views/login/login.routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./views/navigation";
import { ApiPost } from "./hooks/Api.hook";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { URL_LOGIN_Verify } from "./data/CONSTANT_DATA";
import { ActivityIndicator, Dialog, Portal, Text } from "react-native-paper";
import { useDispatch } from "react-redux";
import { AddUser } from "./features/user.slice";
const Stack = createNativeStackNavigator();
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LoadingComponent } from "./components/Loading";
import { ModalComponent } from "./components/modal/modal.component";

export const Main = () => {
  const [loading, setLoading] = useState(true);
  const [Err, setErr] = useState(null);
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const VerifyToken = async () => {
    try {
      let cookie = await AsyncStorage.getItem("token");

      if (!cookie) return navigation.navigate("SignIn");

      let Cookie = { token: cookie };
      const res = await ApiPost(URL_LOGIN_Verify, Cookie); // el await de aqui es necesario

      if (res.response && res.response.data.res.name == "TokenExpiredError") {
        AsyncStorage.removeItem("token");
        setErr("La session a expirado...");
        setVisible(true);
      }

      dispatch(AddUser(res.data));
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);

      if (
        error.response &&
        error.response.data.error.name == "TokenExpiredError"
      ) {
        AsyncStorage.removeItem("token");
        console.log("error de token expire");
        setErr("La Autenticacion falló");
        setVisible(true);
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    VerifyToken();
  }, [VerifyToken]);

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={LogIn}
          options={{
            title: "Sign in",
            headerShown: false,
            animationTypeForReplace: true ? "pop" : "push",
          }}
        />
        <Stack.Screen
          name="Home"
          component={Navigation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
      <ModalComponent
        icon="camera"
        title={"Error al ingresar"}
        content={Err}
        visible={visible}
        setVisible={setVisible}
      />
    </>
  );
};
