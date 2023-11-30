import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { ApiGet } from "../../hooks/Api.hook";
import { ItemsList } from "../../components/List/items.list";
import { URL_OFFERS } from "../../data/CONSTANT_DATA";
import { useSelector } from "react-redux";

export const OffersPage = () => {
  const { offers, loading, error, candidate } = useSelector(
    (state) => state.offer
  );
  console.log("los resultados son:");
  console.log(offers);

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
