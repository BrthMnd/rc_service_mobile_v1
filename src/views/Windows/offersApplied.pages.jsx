import { View, Text, FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { ItemsList } from "../../components/List/items.list";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native-virtualized-view";
export const OffersAppliedPage = () => {
  const { offers, loading, error, candidates } = useSelector(
    (state) => state.offer
  );
  const user = useSelector((state) => state.user);
  return (
    <ScrollView>
      <View>
        {loading && <ActivityIndicator size="large" color="blue" />}
        {error && <Text>error</Text>}
        {!loading && !error && (
          <FlatList
            data={offers}
            renderItem={({ item: offers }) => <ItemsList {...offers} />}
          />
        )}
      </View>
    </ScrollView>
  );
};
