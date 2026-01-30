import { router } from "expo-router";
import { useRef } from "react";
import {
    Image,
    PanResponder,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

const testImageUrl = "https://www.js-craft.io/_public-files/cat.png";

/**
 * Anything placed inside this screen will leak after the Gesture Detector has been
 * interacted with and then the back button is pressed.
 */
export default function LeakingScreen() {
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event) => console.log(event.currentTarget),
      onPanResponderRelease: () => {},
    }),
  ).current;
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Image
        source={{ uri: testImageUrl }}
        style={{ width: "100%", height: "100%" }}
        {...panResponder.panHandlers}
      ></Image>
      <View style={styles.buttonContainer} pointerEvents="box-none">
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>← Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    top: 60,
    right: 10,
  },
  topLeftButtonContainer: {
    position: "absolute",
    top: 60,
    left: 10,
  },
  backButton: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "black",
    fontSize: 12,
    fontWeight: "700",
  },
});
