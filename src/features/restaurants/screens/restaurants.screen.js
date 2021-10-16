import React, { useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "features/restaurants/components/restaurant-info-card.component";
import { Spacer } from "components/spacer/spacer.component";

import {
  SafeArea,
  SearchContainer,
  RestaurantList,
} from "./restaurants.styles";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantList
        data={[{ name: "1" }, { name: "2" }, { name: "3" }]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
