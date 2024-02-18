import { useState } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "plum",
        paddingVertical: 60,
        paddingHorizontal: 30,
      }}
    >
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="white" />
      <ActivityIndicator size="large" color="white" animating={true} />
    </View>
  );
}
