import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
ScrollView,
} from "react-native";
import { ItemsList } from "../../components/List/items.list";
import { useSelector } from "react-redux";

export const OffersPage = () => {
  const { offers, loading, error, candidates } = useSelector(
    (state) => state.offer
    );
    console.log("🚀 ~ file: offers.pages.jsx:13 ~ OffersPage ~ candidate:", candidates)
  console.log("los resultados son:");
  console.log(offers);

  return (
    <ScrollView>
      <View>
        {loading && <ActivityIndicator size="large" color="blue" />}
        {error && <Text>error</Text>}
        {!loading && !error && (
          <FlatList
            data={offers.filter(items => items.state == 'Disponible')}
            renderItem={({ item: offers }) => {
              console.log("🚀 ~ file: offers.pages.jsx:27 ~ OffersPage ~ offers:", offers)
              return(<ItemsList {...offers} />)
            }}
          />
        )}
      </View>
    </ScrollView>
  );
};
