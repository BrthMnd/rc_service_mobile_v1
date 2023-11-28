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

export const Main = () => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [Err, setErr] = useState(null);
  const [visible, setVisible] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    const VerifyToken = async () => {
      try {
        let cookie = await AsyncStorage.getItem("token");
        let Cookie = {
          token: cookie,
        };
        console.log("el token es: " + cookie);
        if (cookie) {
          const res = await ApiPost(URL_LOGIN_Verify, Cookie);
          console.log(res);
          if (res.status == 200) {
            console.log("paso");
            dispatch(AddUser(res.data));
            setIsAuthenticate(true);
          } else if (
            res.response &&
            res.response.data.res.name == "TokenExpiredError"
          ) {
            console.log("error de token expire");
            AsyncStorage.removeItem("token");
            setErr("La session a expirado...");
            setVisible(true);
          } else {
            setErr("La Autenticación falló");
            setVisible(true);
          }
        } else {
          console.log("no paso");
        }
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
    VerifyToken();
  }, []);
  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="blue"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    );
  }
  return (
    <>
      {Err && (
        <Portal>
          <Dialog visible={visible} onDismiss={() => setVisible(false)}>
            <Dialog.Icon icon="alert" />
            <Dialog.Title>Error</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">{Err}</Text>
            </Dialog.Content>
          </Dialog>
        </Portal>
      )}
      {!isAuthenticate ? (
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
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Navigation}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}
    </>
  );
};
