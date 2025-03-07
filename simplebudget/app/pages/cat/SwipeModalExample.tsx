import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { GestureHandlerGestureEvent, GestureHandlerRootView, PanGestureHandler, State } from "react-native-gesture-handler";
import MyFirst from "./comps/catcomps/MyFirst";

interface ModalData {
  id: number;
  text: string;
  color: string;
}

const modalData: ModalData[] = [
  { id: 1, text: "Needs", color: "#ffadad" },
  { id: 2, text: "Wants", color: "#ffd6a5" },
  { id: 3, text: "Saved", color: "#fdffb6" },
];

const SwipeModalExample: React.FC = () => {
  const [currentModalIndex, setCurrentModalIndex] = useState<number>(0);

  const handleGesture = (event: any) => {
    if (event.nativeEvent.translationX < -25) {
      // Swipe Left: Move to next modal
      if (currentModalIndex < modalData.length - 1) {
        setCurrentModalIndex((prevIndex) => prevIndex + 1);
      }
    } else if (event.nativeEvent.translationX > 25) {
      // Swipe Right: Move to previous modal
      if (currentModalIndex > 0) {
        setCurrentModalIndex((prevIndex) => prevIndex - 1);
      }
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
          <PanGestureHandler onHandlerStateChange={({ nativeEvent }) => {
      if (nativeEvent.state === State.END) {
        handleGesture({ nativeEvent } as GestureHandlerGestureEvent);
      }
    }}
    >
      <View
        style={[
          styles.modalContainer,
          { backgroundColor: modalData[currentModalIndex].color },
        ]}
      >
        <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
          <MyFirst num={modalData[currentModalIndex].id} cat={modalData[currentModalIndex].text}/>
        </View>
      </View>
    </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height * 0.4,
    padding: 30,
    borderRadius: 15,
    alignItems: "center",
    elevation: 5, // Shadow for Android
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
  },
  modalText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  swipeText: {
    fontSize: 14,
    color: "#666",
  },
});

export default SwipeModalExample;