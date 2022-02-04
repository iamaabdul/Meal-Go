//import liraries
import React, { Component } from "react";
import styled from "styled-components/native";
import { Image, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star.js";
import open from "../../../../assets/open.js";

const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = "NewYork Fries",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    address = "100 some random street",
    isOpenNow = true,
    isClosedTemporarily = true,
    rating = 4.5,
    photo = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  console.log(ratingArray);
  return (
    <RestaurantsCard elevation={5}>
      <CoverImage source={{ uri: photo[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Row>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Row>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <View style={{ paddingLeft: 16 }} />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <View style={{ paddingLeft: 16 }} />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantsCard>
  );
};

const RestaurantsCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[2]};
`;
const CoverImage = styled(Card.Cover)`
  border-radius: 3px;
`;
const Row = styled.View`
  flex-direction: row;
`;
const Info = styled.View`
  margin: ${(props) => props.theme.space[2]};
`;
const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.title};
`;
const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.body};
`;
const Section = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[1]};
`;
const SectionEnd = styled.View`
  margin-left: auto;
  flex-direction: row;
`;

//make this component available to the app
export default RestaurantsInfoCard;
