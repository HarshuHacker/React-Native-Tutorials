import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
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
      <Button
        title="Alert Button"
        onPress={() => Alert.alert("Alert Title", "Alert Message")}
      />

      <Button
        title="Alert Button 2"
        onPress={() =>
          Alert.alert("Alert Title 2", "Alert Message 2", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
            },
            {
              text: "Ok",
              onPress: () => console.log("Ok Pressed"),
            },
          ])
        }
      />
    </View>
  );
}
