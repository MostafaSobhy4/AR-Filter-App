import { ImageContext } from "@/context/ImageContext";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";

export default function GalleryButton() {

    const { setImage } = useContext(ImageContext);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      router.push("/Processing");

      setTimeout(() => {
          router.replace("/Result");
      }, 3000);
    }
  };

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        backgroundColor: "#6C5CE7",
        padding: 15,
        borderRadius: 12,
      }}
      onPress={pickImage}
    >
      <Text style={{ color: "white" }}>Upload From Gallery</Text>
      <Ionicons name="images-outline" size={24} color="white" />
    </TouchableOpacity>
  );
}