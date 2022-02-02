//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

// create a component
const RestaurantsInfo = ({ restaurant = {} }) => {
  const {
    name = "NewYork Fries",
    address = "100 some random street",
    isOpenNow = true,
    rating = 4.5,
    photo = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
  } = restaurant;

  return (
    <Card elevation={5} style={styles.CardContainer}>
      <Card.Cover source={{ uri: photo[0] }} />
      <Card.Title title={name} subtitle={address} />
    </Card>
  );
};

// define your styles
const styles = StyleSheet.create({
  CardContainer: {
    // height: 500,
  },
});

//make this component available to the app
export default RestaurantsInfo;
