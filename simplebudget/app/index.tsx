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
=======
import { Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemBox from "./ItemBox";


export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello World!</Text>
      <ItemBox />
    </SafeAreaView>
  );
}
