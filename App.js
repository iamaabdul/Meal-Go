import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./app/Infrastructure/Theme/Index";
import RestuarantsScreen from "./app/Features/Restaurant/Screens/Restaurants.screen";
import {
  useFonts as usePoppins,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import {
  useFonts as useALegreya,
  Alegreya_400Regular,
} from "@expo-google-fonts/alegreya";

export default function App() {
  const [poppinsLoaded] = usePoppins({
    Poppins_400Regular,
  });
  const [alegreyaLoaded] = useALegreya({
    Alegreya_400Regular,
  });

  if (!poppinsLoaded || !alegreyaLoaded) {
    return null;
  }

  return (
    <>
      <ExpoStatusBar style="auto" />
      <ThemeProvider theme={theme}>
        <RestuarantsScreen />
      </ThemeProvider>
    </>
  );
}
