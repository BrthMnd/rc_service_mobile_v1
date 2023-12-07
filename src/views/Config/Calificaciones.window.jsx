import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./Estilos/Calificacion.style";

export function CalificacionPage() {
  const user = useSelector((state) => state.user);
  console.log(user);
  // const promedioCalificaciones =
  //   user.score.length > 0
  //     ? (
  //         user.score.reduce(
  //           (acumulador, item) => acumulador + item.CalificacionesFloat,
  //           0
  //         ) / user.score.length
  //       ).toFixed(2)
  //     : 0;
  const calcularPromedioCalificaciones = (scores) => {
    return scores.length > 0
      ? (
          scores.reduce(
            (acumulador, item) => acumulador + item.CalificacionesFloat,
            0
          ) / scores.length
        ).toFixed(2)
      : 0;
  };
  const promedioCalificaciones = calcularPromedioCalificaciones(user.score);

  return (
    <View style={styles.container}>
      <View style={styles.containerHead}>
        <Text style={styles.titulo}>Calificaciones</Text>
      </View>
      <View style={styles.containerProm}>Promedio: {promedioCalificaciones}</View>
        {user.score.map((item, index) => (
          <View style={styles.calificaciones} key={index}>
            <View style={styles.calificacionItem}>
              <Text>Calificación: </Text>
              <Text>{item.CalificacionesFloat}</Text>
            </View>
            <View style={styles.calificacionItem}>
              <Text>Comentario: </Text>
              <Text>{item.Comentarios}</Text>
            </View>
          </View>
        ))}
   
    </View>
  );
}
