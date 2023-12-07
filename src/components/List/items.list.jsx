import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { Card, Text, Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { URL_APLIED_PROVIDER } from "../../data/CONSTANT_DATA";
import { ApiPut } from "../../hooks/Api.hook";
export function ItemsList(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const containerStyle = {
    backgroundColor: "black",
    padding: 20,
    height: "50%",
    width: "80%",
    borderRadius: 10,
  };

  console.log("Props");
  console.log(props);
  const user = useSelector((state) => state.user);
  const Aplicar = async (id) => {
    const url = `${URL_APLIED_PROVIDER}${encodeURIComponent(id)}`;
    const data = {
      id_ServiceProvider: user.id,
    };
    console.log("url->" + url);
    console.log(data);
    try {
      const res = await ApiPut(url, data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card style={styles.Card}>
      <Card.Content style={styles.Content}>
        <Text variant="titleMedium" style={styles.Title}>
          Servicio: {props.id_Category_service.Nombre_Categoria}
        </Text>
        <View style={styles.ContentGlobal}>
          <Text variant="titleSmall" style={{ fontWeight: "bold" }}>
            Descripción:
          </Text>
          <ScrollView style={styles.scroll}>
            <Text variant="titleSmall" style={{ fontSize: 16 }}>
              {props.description}
            </Text>
          </ScrollView>
        </View>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>Mas Info</Text>
        </TouchableOpacity>
        <Card.Actions style={{ padding: 0 }}>
          <Button onPress={() => Aplicar(props._id)}>Aplicar</Button>
        </Card.Actions>

        <Modal
          visible={isModalVisible}
          transparent={true}
          style={styles.modal}
          animationType="slide"
        >
          <View style={styles.modalContent}>
            <Text
              variant="titleMedium"
              style={{ fontSize: "20px", padding: "6px" }}
            >
              Información de la oferta
            </Text>
            <Text style={styles.modalText}>
              {" "}
              Dirección: {props.id_property.direccion}
            </Text>
            <Text style={styles.modalText}>
              {" "}
              Tipo de propiedad: {props.id_property.tipoPropiedad}
            </Text>
            <Text style={styles.modalText}>
              {" "}
              Servicio: {props.id_Category_service.Nombre_Categoria}
            </Text>
            <Text style={styles.modalText}>
              {" "}
              Descripción: {props.description}
            </Text>
            <Text style={styles.modalText}> Estado: {props.state}</Text>
            <Button
              style={styles.modalButton}
              title="Close"
              color="midnightblue"
              onPress={() => setIsModalVisible(false)}
            >
              Cerrar
            </Button>
          </View>
        </Modal>
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
  scroll: {
    width: "100%",
    height: "50px",
    textAlign: "center",
  },
  Title: {
    position: "absolute",

    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    whiteSpace: "nowrap",
    top: "0%",
    fontWeight: "bold",
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
    width: "40%",
  },
  Content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    width: "100%",
  },
  Card: {
    backgroundColor: "#dbdbdb",
    justifyContent: "space-around",
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 20,
    position: "relative",
  },
  modal: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  modalContent: {
    backgroundColor: "#e2e2e2",
    padding: 40,
    width: "80%",
    borderRadius: 10,
    elevation: 5,
    alignItems: "center",
    top: "50%",
    left: "50%",
    transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    color: "black",
  },
  modalButton: {
    marginTop: 10,
  },
});
