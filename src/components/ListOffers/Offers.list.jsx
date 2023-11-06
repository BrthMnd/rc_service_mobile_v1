import React from "react";
import { View, Text, FlatList } from "react-native";
import OffersList from "../../data/offers.list.js";
import { ItemsOffers } from "./Items.ofertas.jsx";
// import
export const OffersPages = () => {
  return (
    <FlatList
      data={OffersList}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item: offer }) => <ItemsOffers {...offer} />}
    ></FlatList>
  );
};
