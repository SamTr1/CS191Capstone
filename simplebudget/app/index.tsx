import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import SwipeModalExample from "./pages/SwipeModalExample";
import MidBanner from "./pages/MidBanner";
import TopBanner from "./pages/TopBanner";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: 'lightgrey',
          height: "100%",
        }}
      >
        <TopBanner />
        <MidBanner />
        <SwipeModalExample />
      
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
