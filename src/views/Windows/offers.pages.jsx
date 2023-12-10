import { Text, View, FlatList, ActivityIndicator } from "react-native";
import { ItemsList } from "../../components/List/items.list";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native-virtualized-view";
export const OffersPage = () => {
  const { offers, loading, error, candidates } = useSelector(
    (state) => state.offer
  );

  return (
    <ScrollView>
      <View>
        {loading && <ActivityIndicator size="large" color="blue" />}
        {error && <Text>error</Text>}
        {!loading && !error && (
          <FlatList
            data={offers.filter((items) => items.state == "Disponible")}
            renderItem={({ item: offers }) => {
              return <ItemsList {...offers} />;
            }}
          />
        )}
      </View>
    </ScrollView>
  );
};
