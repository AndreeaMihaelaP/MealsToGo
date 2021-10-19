import React, { useState } from "react";
import styled from "styled-components/native";
import { List } from "react-native-paper";

import { Text } from "components/typography/text.component";

import { RestaurantInfoCard } from "features/restaurants/components/restaurant-info-card.component";

import { SafeArea } from "components/utility/safe-area.component";
import { ScrollView } from "react-native";

const NoDetails = styled(Text)`
  padding: ${(props) => props.theme.space[3]};
  text-align: center;
`;

export const RestaurantDetails = ({ route }) => {
  let restaurant = null;

  if (route && route.params) {
    restaurant = route.params.restaurant;
  }

  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  if (!restaurant) {
    return <NoDetails variant="label">No Restaurant Details</NoDetails>;
  }
  return (
    <SafeArea>
      <ScrollView>
        <RestaurantInfoCard restaurant={restaurant} />
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}>
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}>
          <List.Item title="Burger & Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}>
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Chicken with Mushroom" />
          <List.Item title="Steak Fries" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}>
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Sprite" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
