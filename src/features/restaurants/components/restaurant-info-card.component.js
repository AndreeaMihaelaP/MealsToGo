import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import { Spacer } from "components/spacer/spacer.component";
import { Text } from "components/typography/text.component";

import star from "assets/star";
import open from "assets/open";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

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
          <Title>{name}</Title>
          <Section>
            <Rating>
              {ratingArray.map((item, index) => (
                <SvgXml key={index} xml={star} width={20} height={20} />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text
                  variant="label"
                  style={{ color: "red", textTransform: "uppercase" }}>
                  Closed Temporarily
                </Text>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                <Image
                  style={{ width: 15, height: 15 }}
                  source={{ uri: icon }}
                />
              </Spacer>
            </SectionEnd>
          </Section>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
};
