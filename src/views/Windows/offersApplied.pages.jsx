import { View, Text, FlatList, ScrollView } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { ItemsList } from "../../components/List/items.list";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const OffersAppliedPage = () => {
  const { offers, loading, error, candidates } = useSelector(
    (state) => state.offer
  );
  const [filteredOffers, setFilteredOffers] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (offers && candidates) {
      const filteredOffers = offers.filter((offer) => {
        return candidates.some((candidate) => {
          return (
            candidate.id_ServiceProvider &&
            candidate.id_ServiceProvider.some(
              (provider) => provider._id === user.id
            )
          );
        });
      });

      setFilteredOffers(filteredOffers);
    }
  }, [offers, candidates, user]);

  return (
    <ScrollView>
      <View>
        {loading && <ActivityIndicator size="large" color="blue" />}
        {error && <Text>error</Text>}
        {!loading && !error && (
          <FlatList
            data={offers}
            renderItem={({ item: offers }) => {
              return <ItemsList {...offers} />;
            }}
          />
        )}
      </View>
    </ScrollView>
  );
};
