import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Text, Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
export function ItemsList(props) {
  console.log(props);

  return (
    <Card style={styles.Card}>
      <Card.Content style={styles.Content}>
        <View style={styles.ContentGlobal}>
          <View style={styles.Title}>
            <Text variant="titleMedium">
              Servicio: {props.id_service.Nombre_Servicio}
            </Text>
          </View>
          <View style={styles.description}>
            <View style={styles.Item}>
              <Text variant="titleSmall" style={{ fontWeight: "bold" }}>
                Descripción:
              </Text>
              <Text variant="titleSmall">{props.description}</Text>
            </View>
            <View style={styles.Item}>
              <Text variant="titleSmall">Estado:</Text>
              <Text variant="titleSmall">{props.id_OfferStatus.name}</Text>
            </View>
            <TouchableOpacity onPress={() => console.log("On")}>
              <Text style={{ fontSize: 12, fontWeight: "bold" }}>Mas Info</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Card.Actions style={{ padding: 0 }}>
          <Button onPress={() => console.log("ok")}>Aplicar</Button>
        </Card.Actions>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  description: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    alignItems: "center",
  },
  Title: {
    justifyContent: "center",
    alignItems: "center",
  },
  Item: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  ContentGlobal: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  Content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  Card: {
    backgroundColor: "#dbdbdb",
    justifyContent: "space-around",
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 20,
  },
});
