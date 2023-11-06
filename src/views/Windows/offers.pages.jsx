import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { ApiGet } from "../../hooks/Api.hook";
import { ItemsList } from "../../components/List/items.list";
import { Data } from "../../../data";
const url = "https://rcservice.onrender.com/api/ofertas/oferta";

export const OffersPage = () => {
  const [data, loading, error] = ApiGet(url);

  return (
    <ScrollView>
      <View>
        {loading && <ActivityIndicator size="large" color="blue" />}
        {error && <Text>error</Text>}
        {!loading && !error && (
          <FlatList
            data={Data}
            ItemSeparatorComponent={<Text> </Text>}
            renderItem={({ item: offers }) => <ItemsList {...offers} />}
          />
        )}
      </View>
    </ScrollView>
  );
};
