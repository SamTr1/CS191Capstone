import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import MidBanner from "./MidBanner";
import SwipeModalExample from "./SwipeModalExample";
import TopBanner from "./TopBanner";

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
