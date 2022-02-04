//import liraries
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import RestaurantsInfoCard from "../Components/Restaurants-Info-card.components";

// create a component
const RestuarantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantsListContainer>
        <RestaurantsInfoCard />
      </RestaurantsListContainer>
    </SafeArea>
  );
};

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};} ;
`;

const RestaurantsListContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  flex: 1;
`;

//make this component available to the app
export default RestuarantsScreen;
