import GalleryButton from "@/components/GalleryButton";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Processing() {
  return (
    <View style={{
            flex: 1, justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "#0F1115",
        }}>
        <Text style={{ color: "white" }}>Processing...</Text>
        <Text>⏳</Text>
        <Text style={{ color: "white" }}>Applying AR Effect...</Text>
    </View>
  );
}

const styles = StyleSheet.create({});