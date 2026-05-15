import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function Processing() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Processing...</Text>

      <ActivityIndicator size="large" color="#6C5CE7" />

      <Text style={styles.subtitle}>
        Applying AR Effect...
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F1115",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },

  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#aaa",
    fontSize: 16,
  },
});