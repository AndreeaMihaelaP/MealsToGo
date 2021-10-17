import React, { useContext } from "react";
import { Colors } from "react-native-paper";

import { RestaurantsContext } from "services/restaurants/restaurants.context";

import { RestaurantInfoCard } from "features/restaurants/components/restaurant-info-card.component";
import { Search } from "features/restaurants/components/search.component";

import { Spacer } from "components/spacer/spacer.component";
import { SafeArea } from "components/utility/safe-area.component";

import {
  RestaurantList,
  LoadingContainer,
  Loading,
} from "./restaurants.styles";

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue500} />
        </LoadingContainer>
      )}
      <Search />
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
