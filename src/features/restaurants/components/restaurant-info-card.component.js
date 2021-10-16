import React from "react";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import { Spacer } from "components/spacer/spacer.component";
import { Text } from "components/typography/text.component";

import star from "assets/star";
import open from "assets/open";

import {
  Icon,
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  Rating,
  SectionEnd,
  ClosedTemporarily,
  Address,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({
  name = "Some Restaurant",
  icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
  photos = [
    "https://i2-prod.essexlive.news/incoming/article5061546.ece/ALTERNATES/s810/0_breakfast-690128_1280.jpg",
  ],
  address = " 100 random street",
  isOpenNow = true,
  rating = 4,
  isClosedTemporarily = true,
}) => {
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map((item, index) => (
                <SvgXml key={index} xml={star} width={20} height={20} />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <ClosedTemporarily variant="error">
                  Closed Temporarily
                </ClosedTemporarily>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </SectionEnd>
          </Section>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
};
