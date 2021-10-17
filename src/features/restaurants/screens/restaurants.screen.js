import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
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

export const RestaurantsScreen = ({ navigation }) => {
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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Details", {
                  restaurant: item,
                });
              }}>
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
