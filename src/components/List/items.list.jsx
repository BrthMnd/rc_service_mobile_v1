import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
} from "react-native";
import { Card, Text, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {
  URL_APLIED_PROVIDER,
  URL_DESAPLIED_PROVIDER,
} from "../../data/CONSTANT_DATA";
import { ApiPut } from "../../hooks/Api.hook";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles.offer";
import { stylesInfo } from "./style.offer.info";
export function ItemsList(props) {
  const navigation = useNavigation();
  console.log("Props");
  console.log(props);
  const user = useSelector((state) => state.user);
  const { candidates } = useSelector((state) => state.offer);
  const location = useRoute();

  console.log(location.name);
  const AplicarDesaplicar = async (id) => {
    const url =
      location.name == "Home"
        ? `${URL_APLIED_PROVIDER}${id}`
        : `${URL_DESAPLIED_PROVIDER}${id}`;

    const data = {
      id_ServiceProvider: user.id_provider,
    };
    try {
      const res = await ApiPut(url, data);
      navigation.replace("Home");
      return Alert.alert("Desaplicando...", "...", [
        { text: "OK!", onPress: () => console.log("Hello") },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  if (location.name == "Applied") {
    const data = candidates.map((items) => {
      return items.id_ServiceProvider.map((item) => {
        if (items.id_offers._id == props._id && user.id_provider == item._id) {
          return (
            <CardView
              location={location.name}
              ChangeState={AplicarDesaplicar}
              {...props}
            />
          );
        }
      });
    });
    return data;
  }
  if (location.name == "Home") {
    const data = candidates.map((items) => {
      console.log(
        "🚀 ~ file: items.list.jsx:42 ~ data ~ items.id_ServiceProvider.length :",
        items.id_ServiceProvider.length
      );
      if (items.id_ServiceProvider.length == 0) {
        console.log("este esta vacio");
        if (items.id_offers._id == props._id) {
          return (
            <CardView
              location={location.name}
              ChangeState={AplicarDesaplicar}
              {...props}
            />
          );
        }
      }
      return items.id_ServiceProvider.map((item) => {
        if (items.id_offers._id == props._id && user.id_provider != item._id) {
          return (
            <CardView
              location={location.name}
              ChangeState={AplicarDesaplicar}
              {...props}
            />
          );
        }
      });
    });
    return data;
  }
}
function CardView(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const containerStyle = {
    backgroundColor: "black",
    padding: 20,
    height: "50%",
    width: "80%",
    borderRadius: 10,
  };

  const { ChangeState, location } = props;
  return (
    <>
      <Card style={styles.Card} key={props._id}>
        <Card.Content style={styles.Content}>
          <Text variant="titleMedium" style={styles.Title}>
            {props.id_Category_service.Nombre_Categoria}
          </Text>
          <View style={styles.ContentGlobal}>
            <Text variant="titleSmall" style={styles.description}>
              Descripción
            </Text>
            <ScrollView style={styles.scroll}>
              <Text variant="titleSmall" style={styles.descriptionText}>
                {props.description}
              </Text>
            </ScrollView>
          </View>
          <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <MaterialIcons
              style={styles.info}
              name="info-outline"
              size={40}
              color="black"
            />
          </TouchableOpacity>
          <Card.Actions style={styles.boton}>
            <Text onPress={() => ChangeState(props._id)}>
              {location == "Home" ? "Aplicar" : "Desaplicar"}
            </Text>
          </Card.Actions>

          <Modal
            visible={isModalVisible}
            style={stylesInfo.modal}
            animationType="slide"
          >
            <View style={stylesInfo.modalContent}>
              <Text variant="titleMedium" style={stylesInfo.titulo}>
                Información de la oferta
              </Text>
              <ScrollView style={stylesInfo.scroll}>
                <View style={stylesInfo.contenedorsito}>
                  <Text style={stylesInfo.cosa}>Dirección</Text>
                  <Text style={stylesInfo.direction}>
                    {props.id_property.direccion}
                  </Text>
                </View>
                <View style={stylesInfo.contenedorsito}>
                  <Text style={stylesInfo.cosa}>Tipo de Propiedad</Text>
                  <Text style={stylesInfo.tipoProperty}>
                    {props.id_property.tipoPropiedad}
                  </Text>
                </View>
                <View style={stylesInfo.contenedorsito}>
                  <Text style={stylesInfo.cosa}>Servicio</Text>
                  <Text style={stylesInfo.servicio}>
                    {props.id_Category_service.Nombre_Categoria}
                  </Text>
                </View>
                <View style={stylesInfo.contenedorsito}>
                  <Text style={stylesInfo.cosa}>Descripción</Text>
                  <Text style={stylesInfo.descripcion}>
                    {props.description}
                  </Text>
                </View>
                <View style={stylesInfo.contenedorsito}>
                  <Text style={stylesInfo.cosa}>Estado</Text>
                  <Text style={stylesInfo.estado}>{props.state}</Text>
                </View>
              </ScrollView>
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
    </>
  );
}
