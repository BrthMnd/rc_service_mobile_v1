import React, { useEffect, useState } from "react";
import { LogIn } from "./views/login/login.routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./views/navigation";
import { ApiPost } from "./hooks/Api.hook";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { URL_LOGIN_Verify } from "./data/CONSTANT_DATA";
import { ActivityIndicator } from "react-native-paper";

const Stack = createNativeStackNavigator();

export const Main = () => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const VerifyToken = async () => {
      try {
        let cookie = await AsyncStorage.getItem("token");
        let Cookie = {
          token: cookie,
        };
        console.log(cookie);
        if (cookie) {
          const res = await ApiPost(URL_LOGIN_Verify, Cookie);
          console.log("paso");
          console.log(res);
          res.status === 200 && setIsAuthenticate(true);
        } else {
          console.log("no paso");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    VerifyToken();
  }, []);
  return (
    <>
      {loading && (
        <ActivityIndicator
          size="large"
          color="blue"
          style={{
            width: "100vw",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      )}
      {!loading && (
        <Stack.Navigator>
          {!isAuthenticate && !loading && (
            <Stack.Screen
              name="Home"
              component={Navigation}
              options={{
                headerShown: false,
              }}
            />
          )}

          {isAuthenticate && !loading && (
            <Stack.Screen
              name="SignIn"
              component={LogIn}
              options={{
                title: "Sign in",
                headerShown: false,
                animationTypeForReplace: true ? "pop" : "push",
              }}
            />
          )}
        </Stack.Navigator>
      )}
    </>
  );
};
