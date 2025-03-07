import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import SwipeModalExample from "./pages/cat/SwipeModalExample";
import MidBanner from "./pages/mid/MidBanner";
import TopBanner from "./pages/top/TopBanner";

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
