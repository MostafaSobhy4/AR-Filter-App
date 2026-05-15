import { ImageContext } from "@/context/ImageContext";
import { CameraView, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import { useContext, useRef } from "react";
import { Text, TouchableOpacity, View } from 'react-native';

export default function CameraScreen() {
  const cameraRef = useRef<any>(null);
  const { image, setImage } = useContext(ImageContext);
  
  const [permission, requestPermission] = useCameraPermissions();
  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0F1115',
        }}
      >
        <Text style={{ color: 'white', marginBottom: 20 }}>
          We need camera permission
        </Text>

        <TouchableOpacity
          onPress={requestPermission}
          style={{
            backgroundColor: '#6C5CE7',
            padding: 15,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: 'white' }}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
      <CameraView
        ref={cameraRef}
        style={{ flex: 1, position: "relative" }}
        facing="front"
      />
      <View style= {{
          position: "absolute",
          margin: "auto",
          alignSelf: "center",
          bottom: 120,
      }}>
        <TouchableOpacity
          onPress={async () => {
            const photo = await cameraRef.current.takePictureAsync();

            setImage(photo.uri);

            router.push("/Processing");

            setTimeout(() => {
              router.replace("/Result");
            }, 3000);
          }}
          style={{
            width: 100,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            backgroundColor: '#6C5CE7',
            padding: 15,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: 'white' }}>Capture</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}