import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { style } from "./Estilos/Calificacion.style";

export function CalificacionPage() {
    const user = useSelector((state) => state.user);
    return(
        <View>
            <Text>{console.log(user)}</Text>
        </View>
    )
}