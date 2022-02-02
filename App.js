import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import RestuarantsScreen from "./app/Features/Restaurant/Screens/Restaurants.screen";

export default function App() {
  return (
    <>
      <ExpoStatusBar style="auto" />
      <RestuarantsScreen />
    </>
  );
}
