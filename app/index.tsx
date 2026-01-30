import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.centerButton}
        onPress={() => router.push("/leaking_screen")}
        activeOpacity={0.7}
      >
        <Text style={styles.centerButtonText}>Go to Leaking Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  centerButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  centerButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
