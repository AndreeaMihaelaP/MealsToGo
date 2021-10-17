import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Searchbar, Colors } from "react-native-paper";

import { RestaurantsContext } from "services/restaurants/restaurants.context";

import { RestaurantInfoCard } from "features/restaurants/components/restaurant-info-card.component";

import { Spacer } from "components/spacer/spacer.component";
import { SafeArea } from "components/utility/safe-area.component";

import {
  SearchContainer,
  RestaurantList,
  LoadingContainer,
  Loading,
} from "./restaurants.styles";

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue500} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
