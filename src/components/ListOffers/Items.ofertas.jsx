import { View } from "react-native-web";
import StyledText from "../StyleText";

const OffersStats = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <StyledText fontWeight="bold">Descuento:</StyledText>
        <StyledText>{props.descuento}</StyledText>
      </View>
      <View>
        <StyledText fontWeight="bold">Precio Original:</StyledText>
        <StyledText>{props.precioOriginal}</StyledText>
      </View>
    </View>
  );
};
export const ItemsOffers = (props) => (
  <View
    key={props.oferta}
    style={{
      margin: 30,
      alignItem: "center",
      color: "#fdf895",
      backgroundColor: "grey",
    }}
  >
    <StyledText
      fontWeight="bold"
      align="center"
      style={{
        padding: 4,
        color: "white",
        backgroundColor: "grey",
        alignSelf: "flex-start",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      Producto: {props.producto}
    </StyledText>
    <OffersStats {...props} />
  </View>
);
