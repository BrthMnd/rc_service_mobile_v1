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
const url = URL_OFFERS;

export const OffersPage = () => {
  console.log(url)
  const [data, loading, error] = ApiGet(url);
  return (
    <ScrollView>
      <View>
        {loading && <ActivityIndicator size="large" color="blue" />}
        {error && <Text>error</Text>}
        {!loading && !error && (
          <FlatList
            data={data}
            renderItem={({ item: offers }) => <ItemsList {...offers} />}
          />
        )}
      </View>
    </ScrollView>
  );
};
