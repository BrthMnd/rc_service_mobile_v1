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
  const user = useSelector((state) => state.user);
  return (
    <ScrollView>
      <View>
        {loading && <ActivityIndicator size="large" color="blue" />}
        {error && <Text>error</Text>}
        {!loading && !error && (
          <FlatList
            data={offers}
            renderItem={({ item: offers }) => {
              candidates.forEach((Father) => {
                Father.id_ServiceProvider.forEach((child) => {
                  console.log("Father id offers: " + Father.id_offers._id);
                  console.log("table id : " + offers._id);
                  console.log("child: " + child._id);
                  console.log("User: " + user.id_provider);
                  if (
                    Father.id_offers._id == offers._id &&
                    child._id == user.id_provider
                  ) {
                    console.log("se cumplio");
                    return <ItemsList {...offers} />;
                  }
                });
              });
            }}
          />
        )}
      </View>
    </ScrollView>
  );
};
