import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const testImageUrl = "https://www.js-craft.io/_public-files/cat.png";

const panGesture = Gesture.Pan();

export default function LeakingScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <GestureDetector gesture={panGesture}>
        <Image
          source={{ uri: testImageUrl }}
          style={{ width: "100%", height: "100%" }}
        />
      </GestureDetector>
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
