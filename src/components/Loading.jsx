import { ActivityIndicator } from "react-native-paper";

export const LoadingComponent = () => {
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
};
